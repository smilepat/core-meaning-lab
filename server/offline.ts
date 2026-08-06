import type { GradeResult, Score } from "../shared/types.ts";
import { LEVEL_BY_SCORE } from "../shared/types.ts";

// API 키가 없거나 호출이 실패했을 때 쓰는 폴백 채점.
// 문자열 매칭 수준이므로 정확하지 않다 — 앱이 멈추지 않게 하는 것이 목적이다.

function result(score: Score, feedback: string, modelAnswer: string): GradeResult {
  return {
    score,
    level: LEVEL_BY_SCORE[score],
    feedback,
    model_answer: modelAnswer,
    engine: "offline",
  };
}

/** 문맥 복원: 참고 의미(gloss)의 키워드가 답에 들어 있는지만 본다. */
export function offlineContext(gloss: string, answer: string): GradeResult {
  const compact = answer.replace(/\s/g, "");
  if (!compact) {
    return result(0, "오프라인 채점: 답이 비어 있습니다.", gloss);
  }
  const keywords = gloss.split(/[·,()/\s]+/).filter((w) => w.length >= 2);
  const hit = keywords.some((k) => compact.includes(k));
  const score: Score = hit ? 2 : compact.length >= 3 ? 1 : 0;
  return result(
    score,
    `오프라인 채점입니다. 참고 의미: '${gloss}'. API 키를 설정하면 더 정확한 피드백을 받을 수 있어요.`,
    gloss,
  );
}

/** 역방향 생성: 대상 단어를 실제로 썼는지와 문장 길이만 본다. */
export function offlineReverse(word: string, sample: string, answer: string): GradeResult {
  const normalized = answer.toLowerCase().trim();
  if (!normalized) {
    return result(0, "오프라인 채점: 답이 비어 있습니다.", sample);
  }
  const stem = word.toLowerCase().replace(/e$/, "");
  const used = normalized.includes(word.toLowerCase()) || normalized.includes(stem);
  const wordCount = normalized.split(/\s+/).filter(Boolean).length;
  const score: Score = used && wordCount >= 4 ? 2 : used ? 1 : 0;
  return result(
    score,
    used
      ? "오프라인 채점입니다. 단어 사용은 확인됐어요. API 키를 설정하면 문법·자연스러움까지 채점됩니다."
      : `오프라인 채점: 문장에서 '${word}'를 찾지 못했어요.`,
    sample,
  );
}
