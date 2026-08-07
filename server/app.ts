import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { BY_ID, CATALOG } from "../shared/catalog.ts";
import type { ContextGradeRequest, ReverseGradeRequest } from "../shared/types.ts";
import { gradeContext, gradeReverse, isGeminiEnabled } from "./grade.ts";

/** 학습자 답안 길이 상한. 이 앱에서 정상 답안은 한두 문장이다. */
export const MAX_ANSWER_LENGTH = 500;

export function readAnswer(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (trimmed.length > MAX_ANSWER_LENGTH) return null;
  return trimmed;
}

interface Options {
  /** dist/ 를 같은 서버에서 서빙할지. 서버리스 배포에서는 정적 파일을 플랫폼이 맡는다. */
  serveStatic?: boolean;
}

/**
 * listen 하지 않는 Express 앱을 만든다.
 * 로컬 개발(server/index.ts), 서버리스 핸들러(api/index.ts), 테스트가 모두 이걸 쓴다.
 */
export function createApp({ serveStatic = false }: Options = {}) {
  const app = express();
  app.use(express.json({ limit: "16kb" }));

  app.get("/api/health", (_req, res) => {
    // aiEnabled 로 이름을 중립적으로 둔다 — 채점 공급자를 바꿔도 클라이언트가 안 흔들린다.
    res.json({ ok: true, aiEnabled: isGeminiEnabled(), words: CATALOG.length });
  });

  app.get("/api/words", (_req, res) => {
    res.json(CATALOG);
  });

  // 채점 경로가 한 단계(grade-context)인 것은 취향이 아니라 제약이다.
  // Vercel 의 catch-all 함수는 /api 아래 한 단계까지만 라우팅해 주고,
  // /api/grade/context 같은 두 단계 경로는 함수에 닿기 전에 플랫폼 404 가 된다.
  app.post("/api/grade-context", async (req, res) => {
    const { wordId, taskIndex } = req.body as Partial<ContextGradeRequest>;
    const answer = readAnswer(req.body?.answer);

    const word = typeof wordId === "string" ? BY_ID.get(wordId) : undefined;
    if (!word) return res.status(400).json({ error: "알 수 없는 wordId 입니다." });
    if (answer === null) return res.status(400).json({ error: "answer 가 올바르지 않습니다." });

    // 문장·정답은 서버가 가진 데이터에서 찾는다. 클라이언트가 보낸 값을 프롬프트에 넣지 않는다.
    const task = typeof taskIndex === "number" ? word.context[taskIndex] : undefined;
    if (!task) return res.status(400).json({ error: "알 수 없는 taskIndex 입니다." });

    res.json(await gradeContext(word, task, answer));
  });

  app.post("/api/grade-reverse", async (req, res) => {
    const { wordId } = req.body as Partial<ReverseGradeRequest>;
    const answer = readAnswer(req.body?.answer);

    const word = typeof wordId === "string" ? BY_ID.get(wordId) : undefined;
    if (!word) return res.status(400).json({ error: "알 수 없는 wordId 입니다." });
    if (answer === null) return res.status(400).json({ error: "answer 가 올바르지 않습니다." });

    res.json(await gradeReverse(word, answer));
  });

  if (serveStatic) {
    const here = path.dirname(fileURLToPath(import.meta.url));
    const dist = path.join(path.resolve(here, ".."), "dist");
    app.use(express.static(dist));
    app.get("*", (_req, res) => res.sendFile(path.join(dist, "index.html")));
  }

  return app;
}
