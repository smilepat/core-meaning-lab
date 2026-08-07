// @vitest-environment jsdom
import { beforeEach, describe, expect, it } from "vitest";
import {
  loadProgress,
  masteryColor,
  masteryPct,
  recordScore,
  stampSense,
} from "../client/lib/progress.ts";
import { wordsInGroup } from "../client/lib/groups.ts";
import { CATALOG } from "../shared/catalog.ts";

describe("숙련도 계산", () => {
  beforeEach(() => localStorage.clear());

  it("기록이 없으면 0%", () => {
    expect(masteryPct({}, "run")).toBe(0);
  });

  it("문맥·역방향 모두 만점이면 100%", () => {
    let p = recordScore({}, "run", "ctx", 2);
    p = recordScore(p, "run", "rev", 2);
    expect(masteryPct(p, "run")).toBe(100);
  });

  it("한쪽만 만점이면 50%", () => {
    expect(masteryPct(recordScore({}, "run", "ctx", 2), "run")).toBe(50);
  });

  it("최고점만 남는다 — 나중에 못 봐도 내려가지 않는다", () => {
    let p = recordScore({}, "run", "ctx", 2);
    p = recordScore(p, "run", "ctx", 0);
    expect(p.run?.ctxBest).toBe(2);
  });

  it("시도 횟수는 점수와 무관하게 누적된다", () => {
    let p = recordScore({}, "run", "ctx", 0);
    p = recordScore(p, "run", "ctx", 2);
    expect(p.run?.ctxAttempts).toBe(2);
  });

  it("원본 진도 객체를 건드리지 않는다", () => {
    const before = {};
    recordScore(before, "run", "ctx", 2);
    expect(before).toEqual({});
  });

  it("펼쳐 본 의미 가지가 쌓인다", () => {
    let p = stampSense({}, "run", "operate");
    p = stampSense(p, "run", "flow");
    expect(Object.keys(p.run?.senses ?? {})).toEqual(["operate", "flow"]);
  });

  it("localStorage 에 저장되고 다시 읽힌다", () => {
    recordScore({}, "run", "ctx", 2);
    expect(masteryPct(loadProgress(), "run")).toBe(50);
  });

  it("저장된 값이 깨져 있으면 빈 진도로 시작한다", () => {
    localStorage.setItem("cml_progress_v1", "{{ 깨진 JSON");
    expect(loadProgress()).toEqual({});
  });

  it("숙련도 구간마다 색이 다르다", () => {
    expect(masteryColor(100)).not.toBe(masteryColor(50));
    expect(masteryColor(50)).not.toBe(masteryColor(25));
    expect(masteryColor(0)).toBe("var(--ink-soft)");
  });
});

describe("단어 그룹 나누기", () => {
  it("최우선 30 은 순위대로 정렬된다", () => {
    const top = wordsInGroup(CATALOG, "top");
    expect(top).toHaveLength(30);
    expect(top.map((w) => w.rank)).toEqual([...top.map((w) => w.rank)].sort((a, b) => a - b));
  });

  it("각 티어 그룹은 해당 티어만 담는다", () => {
    for (const tier of [1, 2, 3, 4] as const) {
      const words = wordsInGroup(CATALOG, tier);
      expect(words.length).toBeGreaterThan(0);
      expect(words.every((w) => w.tier === tier)).toBe(true);
    }
  });

  it("티어 그룹을 모두 합치면 카탈로그 전체가 된다", () => {
    const total = [1, 2, 3, 4].reduce(
      (sum, t) => sum + wordsInGroup(CATALOG, t as 1 | 2 | 3 | 4).length,
      0,
    );
    expect(total).toBe(CATALOG.length);
  });
});
