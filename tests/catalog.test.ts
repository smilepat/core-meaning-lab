import { describe, expect, it } from "vitest";
import { CATALOG, TOP30, TOP_RANK, findProblems, wordsInTier } from "../shared/catalog.ts";
import type { Word } from "../shared/types.ts";
import { TIERS } from "../shared/types.ts";

/** 검사 대상을 만들 때 쓰는 최소 단어. 필요한 부분만 덮어쓴다. */
function stub(overrides: Partial<Word> = {}): Word {
  return {
    id: "x",
    word: "x",
    pos: "동사",
    tier: 1,
    rank: 0,
    core: { ko: "핵심", image: "그림", exEn: "X.", exKo: "엑스." },
    senses: [
      { key: "a", label: "가", exEn: "A.", exKo: "에이.", bridge: "다리 가" },
      { key: "b", label: "나", exEn: "B.", exKo: "비.", bridge: "다리 나" },
      { key: "c", label: "다", exEn: "C.", exKo: "시.", bridge: "다리 다" },
    ],
    context: [
      { sentence: "I <b>x</b> it.", senseKey: "a", gloss: "가" },
      { sentence: "You <b>x</b> it.", senseKey: "b", gloss: "나" },
    ],
    reverse: { senseKey: "c", scene: "장면", sample: "I x it." },
    ...overrides,
  };
}

describe("카탈로그 자체", () => {
  it("무결성 검사를 통과한다", () => {
    expect(findProblems(CATALOG)).toEqual([]);
  });

  // 1~3군은 설계에서 확정한 정본이다. 확장은 4·5군에 쌓고 여기는 20개로 못 박는다 —
  // 실수로 정본에 단어를 끼워 넣으면 학습 우선순위 자체가 흔들린다.
  it("정본 1~3군은 각 20개로 고정되어 있다", () => {
    expect(wordsInTier(1)).toHaveLength(20);
    expect(wordsInTier(2)).toHaveLength(20);
    expect(wordsInTier(3)).toHaveLength(20);
  });

  it("확장 4·5군이 비어 있지 않다", () => {
    expect(wordsInTier(4).length).toBeGreaterThan(0);
    expect(wordsInTier(5).length).toBeGreaterThan(0);
  });

  it("모든 단어가 다섯 군 중 하나에 속한다", () => {
    const summed = TIERS.reduce((sum, t) => sum + wordsInTier(t.tier).length, 0);
    expect(summed).toBe(CATALOG.length);
  });

  it("최우선 30개가 1~30 순위를 빠짐없이 채운다", () => {
    expect(TOP30).toHaveLength(TOP_RANK);
    expect(TOP30.map((w) => w.rank)).toEqual(Array.from({ length: TOP_RANK }, (_, i) => i + 1));
  });

  it("1순위는 run 이다", () => {
    expect(TOP30[0]?.id).toBe("run");
  });
});

describe("findProblems 가 잡아내는 것", () => {
  it("id 중복", () => {
    const problems = findProblems([stub(), stub()]);
    expect(problems.some((p) => p.message.includes("중복"))).toBe(true);
  });

  it("존재하지 않는 senseKey 를 가리키는 문맥 과제", () => {
    const broken = stub({
      context: [{ sentence: "I <b>x</b> it.", senseKey: "없는키", gloss: "가" }],
    });
    expect(findProblems([broken]).some((p) => p.message.includes("없는키"))).toBe(true);
  });

  it("존재하지 않는 senseKey 를 가리키는 역방향 과제", () => {
    const broken = stub({ reverse: { senseKey: "없는키", scene: "장면", sample: "I x it." } });
    expect(findProblems([broken]).some((p) => p.message.includes("reverse.senseKey"))).toBe(true);
  });

  it("<b> 강조가 빠진 문장", () => {
    const broken = stub({
      context: [
        { sentence: "I x it.", senseKey: "a", gloss: "가" },
        { sentence: "You <b>x</b> it.", senseKey: "b", gloss: "나" },
      ],
    });
    expect(findProblems([broken]).some((p) => p.message.includes("<b>"))).toBe(true);
  });

  it("순위 충돌", () => {
    const problems = findProblems([stub({ id: "p", rank: 3 }), stub({ id: "q", rank: 3 })]);
    expect(problems.some((p) => p.message.includes("겹칩니다"))).toBe(true);
  });

  it("범위를 벗어난 순위", () => {
    expect(findProblems([stub({ rank: 99 })]).some((p) => p.message.includes("rank"))).toBe(true);
  });

  it("의미 가지가 모자란 단어", () => {
    const thin = stub({
      senses: [{ key: "a", label: "가", exEn: "A.", exKo: "에이.", bridge: "다리" }],
      context: [
        { sentence: "I <b>x</b> it.", senseKey: "a", gloss: "가" },
        { sentence: "You <b>x</b> it.", senseKey: "a", gloss: "가" },
      ],
      reverse: { senseKey: "a", scene: "장면", sample: "I x it." },
    });
    expect(findProblems([thin]).some((p) => p.message.includes("확장 의미"))).toBe(true);
  });
});
