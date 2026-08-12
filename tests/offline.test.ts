import { describe, expect, it } from "vitest";
import { offlineContext, offlineReverse, usesWord } from "../server/offline.ts";
import { CATALOG } from "../shared/catalog.ts";

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

// 맞는 답을 틀렸다고 하는 것이 이 폴백의 가장 나쁜 실패다. 아래가 그 방어선이다.
describe("굴절형을 알아본다", () => {
  it.each([
    ["carry", "She carries great weight in the field."],
    ["apply", "The rule applies to every student here."],
    ["identify", "Scientists identified the cause of the disease."],
    ["imply", "The result implies the opposite conclusion."],
    ["study", "He studied the problem for years."],
    ["stop", "The rain stopped before noon."],
    ["make", "She is making a real difference here."],
  ])("규칙 변화: %s", (word, answer) => {
    expect(offlineReverse(word, "sample", answer).score).toBe(2);
  });

  it.each([
    ["bear", "She bore the pain alone for years."],
    ["leave", "The movie left me deeply sad."],
    ["break", "My phone broke yesterday morning."],
    ["fall", "Sales fell sharply last year."],
    ["catch", "No one caught the error in time."],
    ["hold", "He held the same view for decades."],
    ["take", "It took much longer than expected."],
  ])("불규칙 변화: %s", (word, answer) => {
    expect(offlineReverse(word, "sample", answer).score).toBe(2);
  });

  it("엉뚱한 단어를 쓴 답은 여전히 0점", () => {
    expect(offlineReverse("run", "sample", "My laptop works very well today.").score).toBe(0);
  });

  it("비슷하게 시작하는 남의 단어까지 인정하지는 않는다", () => {
    expect(usesWord("She is a carpenter by trade.", "carry")).toBe(false);
    expect(usesWord("The car stopped suddenly.", "carry")).toBe(false);
  });
});

describe("한 글자 참고 의미도 채점된다", () => {
  it.each([
    ["봄", "봄"],
    ["층", "층"],
    ["권", "권"],
  ])("gloss '%s'", (gloss, answer) => {
    expect(offlineContext(gloss, answer).score).toBe(2);
  });

  it("'하다' 를 뗀 어간으로 써도 인정한다", () => {
    expect(offlineContext("(학교를) 운영하다", "학교 운영").score).toBe(2);
  });
});

// 카탈로그 전수 회귀 방어 — 앱이 자기 정답을 틀렸다고 하면 안 된다.
describe("카탈로그 전체가 오프라인 채점의 최저 기준을 넘는다", () => {
  it("모든 단어의 모범답안(reverse.sample)은 만점이다", () => {
    const failed = CATALOG.filter((w) => offlineReverse(w.word, w.reverse.sample, w.reverse.sample).score !== 2);
    expect(failed.map((w) => `${w.id}: ${w.reverse.sample}`)).toEqual([]);
  });

  it("모든 문맥 과제의 참고 의미(gloss)를 그대로 내면 만점이다", () => {
    const failed = CATALOG.flatMap((w) =>
      w.context
        .filter((c) => offlineContext(c.gloss, c.gloss).score !== 2)
        .map((c) => `${w.id}: "${c.gloss}"`),
    );
    expect(failed).toEqual([]);
  });
});
