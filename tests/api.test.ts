import { describe, expect, it } from "vitest";
import request from "supertest";
import { createApp } from "../server/app.ts";
import { MAX_ANSWER_LENGTH } from "../server/app.ts";
import { CATALOG } from "../shared/catalog.ts";

// GEMINI_API_KEY 없이 도는 테스트라 채점은 전부 오프라인 폴백으로 떨어진다.
// 여기서 확인하는 건 채점 품질이 아니라 입력 검증과 응답 계약이다.
const app = createApp();

describe("GET /api/health", () => {
  it("단어 수를 알려준다", async () => {
    const res = await request(app).get("/api/health").expect(200);
    expect(res.body.ok).toBe(true);
    expect(res.body.words).toBe(CATALOG.length);
    expect(typeof res.body.aiEnabled).toBe("boolean");
  });
});

describe("GET /api/words", () => {
  it("카탈로그 전체를 우선순위 정보와 함께 내려준다", async () => {
    const res = await request(app).get("/api/words").expect(200);
    expect(res.body).toHaveLength(CATALOG.length);
    const run = res.body.find((w: { id: string }) => w.id === "run");
    expect(run.rank).toBe(1);
    expect(run.tier).toBe(1);
  });
});

describe("POST /api/grade-context 입력 검증", () => {
  it("모르는 wordId 는 400", async () => {
    await request(app)
      .post("/api/grade-context")
      .send({ wordId: "없는단어", taskIndex: 0, answer: "운영하다" })
      .expect(400);
  });

  it("범위 밖 taskIndex 는 400", async () => {
    await request(app)
      .post("/api/grade-context")
      .send({ wordId: "run", taskIndex: 99, answer: "운영하다" })
      .expect(400);
  });

  it("taskIndex 가 문자열이면 400", async () => {
    await request(app)
      .post("/api/grade-context")
      .send({ wordId: "run", taskIndex: "0", answer: "운영하다" })
      .expect(400);
  });

  it("answer 가 문자열이 아니면 400", async () => {
    await request(app)
      .post("/api/grade-context")
      .send({ wordId: "run", taskIndex: 0, answer: 42 })
      .expect(400);
  });

  it("상한을 넘는 answer 는 400", async () => {
    await request(app)
      .post("/api/grade-context")
      .send({ wordId: "run", taskIndex: 0, answer: "가".repeat(MAX_ANSWER_LENGTH + 1) })
      .expect(400);
  });

  it("올바른 요청은 채점 결과 계약을 지킨다", async () => {
    const res = await request(app)
      .post("/api/grade-context")
      .send({ wordId: "run", taskIndex: 0, answer: "운영하다" })
      .expect(200);
    expect([0, 1, 2]).toContain(res.body.score);
    expect(["미흡", "보통", "우수"]).toContain(res.body.level);
    expect(["gemini", "offline"]).toContain(res.body.engine);
    expect(typeof res.body.feedback).toBe("string");
    expect(res.body.feedback.length).toBeGreaterThan(0);
  });
});

describe("POST /api/grade-reverse 입력 검증", () => {
  it("모르는 wordId 는 400", async () => {
    await request(app)
      .post("/api/grade-reverse")
      .send({ wordId: "없는단어", answer: "I run a school." })
      .expect(400);
  });

  it("answer 가 빠지면 400", async () => {
    await request(app).post("/api/grade-reverse").send({ wordId: "run" }).expect(400);
  });

  it("올바른 요청은 채점 결과 계약을 지킨다", async () => {
    const res = await request(app)
      .post("/api/grade-reverse")
      .send({ wordId: "run", answer: "My new laptop runs very smoothly." })
      .expect(200);
    expect([0, 1, 2]).toContain(res.body.score);
    expect(typeof res.body.model_answer).toBe("string");
  });
});

describe("모든 단어가 실제로 채점 가능하다", () => {
  it("카탈로그의 모든 문맥 과제가 400 없이 채점된다", async () => {
    for (const word of CATALOG) {
      for (let i = 0; i < word.context.length; i += 1) {
        const res = await request(app)
          .post("/api/grade-context")
          .send({ wordId: word.id, taskIndex: i, answer: "테스트 답안" });
        expect(res.status, `${word.id}[${i}]`).toBe(200);
      }
    }
  });
});
