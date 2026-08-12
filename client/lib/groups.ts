import type { Progress, RootFamily, Tier, Word } from "../../shared/types.ts";
import { TIERS } from "../../shared/types.ts";
import { ROOT_FAMILIES, ROOT_OF } from "../../shared/catalog.ts";
import { masteryPct } from "./progress.ts";

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

// ── 찾기 ────────────────────────────────────────────────────────────────
// 300단어를 한 줄에 늘어놓으면 4군만 25화면을 밀어야 한다. 아래 셋이 그 대안이다:
// 검색(아는 단어) · 어근 가족(5군) · 30개 단계(4군).

/** 검색은 군을 무시하고 전체에서 찾는다 — 아는 단어를 찾을 때 군을 기억할 리 없다. */
export function searchWords(words: Word[], query: string): Word[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const hit = (w: Word) =>
    w.word.toLowerCase().includes(q) ||
    w.core.ko.includes(q) ||
    w.senses.some((s) => s.label.includes(q));
  // 철자가 앞에서 맞는 것을 먼저 보여 준다.
  return words
    .filter(hit)
    .sort((a, b) => Number(b.word.toLowerCase().startsWith(q)) - Number(a.word.toLowerCase().startsWith(q)));
}

/** 4군처럼 자연스러운 묶음이 없는 군을 끊는 단위. 교육적 근거가 아니라 찾기 위한 단위다. */
export const STAGE_SIZE = 30;

/** 알파벳 순으로 정렬한 뒤 STAGE_SIZE 개씩 끊는다. 저작 순서는 학습자에게 의미가 없다. */
export function stagesOf(words: Word[], tier: Tier): Word[][] {
  const sorted = [...words.filter((w) => w.tier === tier)].sort((a, b) =>
    a.word.localeCompare(b.word),
  );
  const out: Word[][] = [];
  for (let i = 0; i < sorted.length; i += STAGE_SIZE) out.push(sorted.slice(i, i + STAGE_SIZE));
  return out;
}

export interface FamilyView {
  family: RootFamily | null; // null = 어근 가족이 없는 나머지
  words: Word[]; // 이 군에 속한 식구
  elsewhere: Word[]; // 같은 어근이지만 다른 군에 있는 식구 (링크로만 보여 준다)
}

/**
 * 한 군을 어근 가족으로 묶어 돌려준다. 5군이 이걸로 27화면에서 몇 줄로 줄어든다.
 * 다른 군에 있는 식구는 `elsewhere` 로만 딸려 보낸다 — 탭을 늘리지 않기 위해서다.
 */
export function familiesInTier(words: Word[], tier: Tier): FamilyView[] {
  const inTier = words.filter((w) => w.tier === tier);
  const views: FamilyView[] = [];

  for (const family of ROOT_FAMILIES) {
    const mine = inTier.filter((w) => ROOT_OF.get(w.id) === family);
    if (mine.length === 0) continue;
    const elsewhere = family.members
      .map((id) => words.find((w) => w.id === id))
      .filter((w): w is Word => Boolean(w) && w!.tier !== tier);
    views.push({ family, words: mine, elsewhere });
  }

  const rest = inTier.filter((w) => !ROOT_OF.has(w.id));
  if (rest.length > 0) views.push({ family: null, words: rest, elsewhere: [] });
  return views;
}

// ── 다음에 뭘 할까 ──────────────────────────────────────────────────────

export interface NextPick {
  word: Word;
  reason: string;
}

/**
 * 다음에 공부할 단어 하나를 고른다. 규칙은 두 줄이면 충분하다 —
 * 안 한 것이 있으면 그중 우선순위가 높은 것, 다 했으면 가장 약한 것.
 * 간격 반복(SRS)은 일부러 넣지 않았다. 실제 학습자가 쓰는 걸 보기 전에는 근거가 없다.
 */
export function pickNext(words: Word[], progress: Progress): NextPick | null {
  const untouched = (w: Word) => !progress[w.id];

  const top = wordsInGroup(words, "top").find(untouched);
  if (top) return { word: top, reason: `최우선 ${top.rank}번` };

  const byTier = [...words].sort((a, b) => a.tier - b.tier);
  const fresh = byTier.find(untouched);
  if (fresh) return { word: fresh, reason: `${fresh.tier}군에서 아직 안 한 단어` };

  const weakest = [...words]
    .filter((w) => masteryPct(progress, w.id) < 75)
    .sort((a, b) => masteryPct(progress, a.id) - masteryPct(progress, b.id))[0];
  if (weakest) {
    return { word: weakest, reason: `복습 · 숙련도 ${masteryPct(progress, weakest.id)}%` };
  }
  return null;
}
