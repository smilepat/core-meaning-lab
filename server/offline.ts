import type { GradeResult, Score } from "../shared/types.ts";
import { LEVEL_BY_SCORE } from "../shared/types.ts";

// API 키가 없거나 호출이 실패했을 때 쓰는 폴백 채점.
// 문자열 매칭 수준이므로 정확하지 않다 — 앱이 멈추지 않게 하는 것이 목적이다.
//
// 다만 **맞는 답을 틀렸다고 하는 것**은 허용 범위가 아니다. 학습을 직접 해친다.
// 그래서 아래 두 함수는 "관대하게" 기운다 — 놓치는 오답보다 억울한 정답이 더 나쁘다.

function result(score: Score, feedback: string, modelAnswer: string): GradeResult {
  return {
    score,
    level: LEVEL_BY_SCORE[score],
    feedback,
    model_answer: modelAnswer,
    engine: "offline",
  };
}

/**
 * 이 카탈로그에 실제로 들어 있는 불규칙 변화형.
 * 사전을 통째로 넣을 일이 아니라, 300단어 안에서 문제가 되는 것만 적는다.
 */
const IRREGULAR: Record<string, string[]> = {
  bear: ["bore", "borne", "born"],
  become: ["became"],
  break: ["broke", "broken"],
  bring: ["brought"],
  build: ["built"],
  catch: ["caught"],
  deal: ["dealt"],
  draw: ["drew", "drawn"],
  drive: ["drove", "driven"],
  fall: ["fell", "fallen"],
  feel: ["felt"],
  find: ["found"],
  get: ["got", "gotten"],
  give: ["gave", "given"],
  hold: ["held"],
  lead: ["led"],
  leave: ["left"],
  make: ["made"],
  mean: ["meant"],
  run: ["ran"],
  show: ["shown"],
  spring: ["sprang", "sprung"],
  stand: ["stood"],
  stick: ["stuck"],
  strike: ["struck", "stricken"],
  take: ["took", "taken"],
  tell: ["told"],
};

/** 규칙 굴절을 되돌려 원형 후보를 만든다. carries → carry, applied → apply, running → run. */
function baseForms(token: string): string[] {
  const out = new Set<string>([token]);
  const push = (s: string) => s.length >= 2 && out.add(s);

  if (token.endsWith("ies")) push(`${token.slice(0, -3)}y`);
  if (token.endsWith("ied")) push(`${token.slice(0, -3)}y`);
  if (token.endsWith("es")) {
    push(token.slice(0, -2));
    push(token.slice(0, -1));
  }
  if (token.endsWith("s")) push(token.slice(0, -1));
  if (token.endsWith("ed")) {
    push(token.slice(0, -2));
    push(token.slice(0, -1)); // used → use
  }
  if (token.endsWith("ing")) {
    const cut = token.slice(0, -3);
    push(cut);
    push(`${cut}e`); // making → make
  }
  // 자음 중복 되돌리기: running → runn → run, stopped → stopp → stop
  for (const form of [...out]) {
    const [, head, consonant] = /^(.*)([bdfglmnprstz])\2$/.exec(form) ?? [];
    if (head !== undefined && consonant !== undefined) push(head + consonant);
  }
  return [...out];
}

/** 답안이 대상 단어를 (굴절형 포함) 실제로 썼는가. */
export function usesWord(answer: string, word: string): boolean {
  const target = word.toLowerCase();
  const irregular = IRREGULAR[target] ?? [];
  const tokens = answer.toLowerCase().match(/[a-z]+/g) ?? [];

  return tokens.some((t) => {
    if (t === target || irregular.includes(t)) return true;
    if (baseForms(t).includes(target)) return true;
    // apply → application 처럼 파생어까지는 봐주지 않는다. 다만 어간이 충분히 길고
    // 그대로 앞에 붙어 있으면 인정한다 (engage → engaging 등은 위에서 이미 걸린다).
    return target.length >= 5 && t.startsWith(target);
  });
}

/** 한국어 키워드에서 '~하다/되다' 꼬리를 떼어 어간도 함께 본다. */
function koreanVariants(keyword: string): string[] {
  const out = new Set([keyword]);
  for (const tail of ["하다", "되다", "시키다", "이다"]) {
    if (keyword.length > tail.length && keyword.endsWith(tail)) {
      out.add(keyword.slice(0, -tail.length));
    }
  }
  return [...out];
}

/** 문맥 복원: 참고 의미(gloss)의 키워드가 답에 들어 있는지만 본다. */
export function offlineContext(gloss: string, answer: string): GradeResult {
  const compact = answer.replace(/\s/g, "");
  if (!compact) {
    return result(0, "오프라인 채점: 답이 비어 있습니다.", gloss);
  }

  const tokens = gloss.split(/[·,()/\s]+/).filter(Boolean);
  // 두 글자 이상을 먼저 쓰되, '봄' '층' '권' 처럼 한 글자뿐인 뜻이면 그것도 쓴다.
  // 예전에는 length>=2 로 걸러 한 글자 gloss 가 통째로 사라졌고, 정답이 0점이 됐다.
  const meaningful = tokens.filter((w) => w.length >= 2);
  const keywords = (meaningful.length > 0 ? meaningful : tokens).flatMap(koreanVariants);

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
  const normalized = answer.trim();
  if (!normalized) {
    return result(0, "오프라인 채점: 답이 비어 있습니다.", sample);
  }
  const used = usesWord(normalized, word);
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
