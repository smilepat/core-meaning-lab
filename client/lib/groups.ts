import type { Tier, Word } from "../../shared/types.ts";
import { TIERS } from "../../shared/types.ts";

/**
 * 단어 그룹 선택값. "top" 은 티어를 가로지르는 최우선 30개다.
 * Tier 에서 파생시킨다 — 군을 늘릴 때 여기를 같이 고치는 걸 잊으면 타입만 어긋난다.
 */
export type GroupKey = "top" | Tier;

export const GROUPS: { key: GroupKey; label: string }[] = [
  { key: "top", label: "최우선 30" },
  ...TIERS.map((t) => ({ key: t.tier as GroupKey, label: `${t.tier}군` })),
];

export function groupBlurb(group: GroupKey): string {
  if (group === "top") return "무엇부터 할지 모르겠다면 여기 1번부터 순서대로.";
  return TIERS.find((t) => t.tier === group)?.blurb ?? "";
}

/** 그룹에 속한 단어를 화면에 보일 순서로 돌려준다. */
export function wordsInGroup(words: Word[], group: GroupKey): Word[] {
  if (group === "top") {
    return words.filter((w) => w.rank > 0).sort((a, b) => a.rank - b.rank);
  }
  return words.filter((w) => w.tier === group);
}
