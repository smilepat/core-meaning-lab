import { describe, expect, it } from "vitest";
import { offlineContext, offlineReverse } from "../server/offline.ts";

// 오프라인 폴백은 키가 없을 때 학습이 끊기지 않게 하는 장치다.
// 정확할 필요는 없지만 "빈 답이 만점"처럼 학습을 망치는 결과는 내면 안 된다.

describe("offlineContext", () => {
  it("빈 답은 0점", () => {
    expect(offlineContext("운영하다", "   ").score).toBe(0);
  });

  it("참고 의미의 낱말이 들어 있으면 2점", () => {
    expect(offlineContext("(학교를) 운영하다", "운영하다").score).toBe(2);
  });

  it("가운뎃점으로 이어진 참고 의미의 어느 쪽이든 인정한다", () => {
    expect(offlineContext("시사하다·가리키다", "가리키다").score).toBe(2);
  });

  it("답을 띄어 써도 인정한다", () => {
    expect(offlineContext("(학교를) 운영하다", "학교를 운 영 하다").score).toBe(2);
  });

  it("겹치는 낱말이 없으면 만점을 주지 않는다", () => {
    expect(offlineContext("운영하다", "달리기").score).toBeLessThan(2);
  });

  it("항상 오프라인 엔진으로 표시된다", () => {
    expect(offlineContext("운영하다", "운영하다").engine).toBe("offline");
  });

  it("score 와 level 이 짝이 맞는다", () => {
    expect(offlineContext("운영하다", "운영하다").level).toBe("우수");
    expect(offlineContext("운영하다", "").level).toBe("미흡");
  });
});

describe("offlineReverse", () => {
  it("빈 답은 0점", () => {
    expect(offlineReverse("run", "My laptop runs well.", "").score).toBe(0);
  });

  it("대상 단어를 아예 안 썼으면 0점", () => {
    expect(offlineReverse("run", "My laptop runs well.", "My laptop works very well.").score).toBe(
      0,
    );
  });

  it("단어를 썼고 문장이 충분히 길면 2점", () => {
    expect(offlineReverse("run", "My laptop runs well.", "My new laptop runs very smoothly.").score).toBe(2);
  });

  it("단어는 썼지만 문장이 너무 짧으면 1점", () => {
    expect(offlineReverse("run", "My laptop runs well.", "It runs.").score).toBe(1);
  });

  it("굴절형(-s, -ing)도 단어 사용으로 인정한다", () => {
    expect(offlineReverse("engage", "They engage in debate.", "Students are engaging in the debate.").score).toBe(2);
  });

  it("모범 답안을 그대로 돌려준다", () => {
    const sample = "My laptop runs well.";
    expect(offlineReverse("run", sample, "It runs fast today.").model_answer).toBe(sample);
  });
});
