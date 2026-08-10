// 단어 데이터의 정본. tier1~4 파일을 합치고, 합치는 김에 무결성까지 확인한다.
// 예전 core30.ts 는 프로토타입 HTML 에서 자동 추출된 파일이라 손대면 안 됐지만,
// 이 카탈로그는 반대다 — 손으로 고치는 것이 정상이고, 검사는 아래 assert 가 맡는다.
import type { Tier, Word } from "./types.ts";
import { TIER1 } from "./data/tier1.ts";
import { TIER2 } from "./data/tier2.ts";
import { TIER3 } from "./data/tier3.ts";
import { TIER4 } from "./data/tier4.ts";
import { TIER4B } from "./data/tier4b.ts";
import { TIER4C } from "./data/tier4c.ts";
import { TIER4D } from "./data/tier4d.ts";
import { TIER4E } from "./data/tier4e.ts";
import { TIER5 } from "./data/tier5.ts";
import { TIER5B } from "./data/tier5b.ts";
import { TIER5C } from "./data/tier5c.ts";
import { TIER5D } from "./data/tier5d.ts";

/** 최우선 30개의 순위 상한. rank 는 1~30 또는 0(순위 밖)이다. */
export const TOP_RANK = 30;

export interface CatalogProblem {
  wordId: string;
  message: string;
}

/**
 * 카탈로그가 깨지지 않았는지 확인한다. 앱을 켤 때마다 도는 검사라 가볍게 유지한다.
 * 던지지 않고 문제 목록을 돌려주므로 테스트에서도 그대로 쓴다.
 */
export function findProblems(words: Word[]): CatalogProblem[] {
  const problems: CatalogProblem[] = [];
  const seenIds = new Set<string>();
  const seenRanks = new Map<number, string>();

  for (const w of words) {
    const flag = (message: string) => problems.push({ wordId: w.id, message });

    if (seenIds.has(w.id)) flag("id 가 중복됩니다.");
    seenIds.add(w.id);

    if (w.senses.length < 3) flag(`확장 의미가 ${w.senses.length}개뿐입니다 (최소 3개).`);
    if (w.context.length < 2) flag(`문맥 과제가 ${w.context.length}개뿐입니다 (최소 2개).`);

    const senseKeys = new Set(w.senses.map((s) => s.key));
    if (senseKeys.size !== w.senses.length) flag("senses 안에 key 가 중복됩니다.");

    // senseKey 가 실제 가지를 가리키지 않으면 채점 프롬프트가 빈 정답으로 나간다.
    w.context.forEach((task, i) => {
      if (!senseKeys.has(task.senseKey)) flag(`context[${i}].senseKey "${task.senseKey}" 가 없습니다.`);
      if (!task.sentence.includes("<b>")) flag(`context[${i}] 문장에 <b> 강조가 없습니다.`);
    });
    if (!senseKeys.has(w.reverse.senseKey)) flag(`reverse.senseKey "${w.reverse.senseKey}" 가 없습니다.`);

    if (w.rank < 0 || w.rank > TOP_RANK || !Number.isInteger(w.rank)) {
      flag(`rank ${w.rank} 는 0 또는 1~${TOP_RANK} 의 정수여야 합니다.`);
    }
    if (w.rank > 0) {
      const taken = seenRanks.get(w.rank);
      if (taken) flag(`rank ${w.rank} 가 ${taken} 와 겹칩니다.`);
      seenRanks.set(w.rank, w.id);
    }
  }

  return problems;
}

// 파일은 "군 + 저작 차수"로 나뉜다 — tier4.ts 는 프로토타입 유산, tier4b/4c 는 확장 저작분,
// tier5/5b 도 마찬가지다. 학습자에게는 파일 구분이 보이지 않고 군만 보인다.
// 300개까지 넓힐 때도 새 파일을 만들어 여기에 이어 붙이면 된다.
const ALL: Word[] = [
  ...TIER1,
  ...TIER2,
  ...TIER3,
  ...TIER4,
  ...TIER4B,
  ...TIER4C,
  ...TIER4D,
  ...TIER4E,
  ...TIER5,
  ...TIER5B,
  ...TIER5C,
  ...TIER5D,
];

const problems = findProblems(ALL);
if (problems.length > 0) {
  const lines = problems.map((p) => `  - ${p.wordId}: ${p.message}`).join("\n");
  throw new Error(`단어 카탈로그가 올바르지 않습니다:\n${lines}`);
}

/** 우선순위 그룹 → 그룹 안에서는 최우선 30위, 그다음 원래 순서. */
export const CATALOG: Word[] = ALL;

/** 최우선 30개를 순위대로. 학습 시작 지점을 정할 때 쓴다. */
export const TOP30: Word[] = CATALOG.filter((w) => w.rank > 0).sort((a, b) => a.rank - b.rank);

export const BY_ID = new Map(CATALOG.map((w) => [w.id, w]));

export function wordsInTier(tier: Tier): Word[] {
  return CATALOG.filter((w) => w.tier === tier);
}
