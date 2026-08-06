/** 단어의 확장된 의미 하나. bridge 는 core 의미와 이 의미를 잇는 설명이다. */
export interface Sense {
  key: string;
  label: string;
  exEn: string;
  exKo: string;
  bridge: string;
}

/** 문맥 복원 과제 하나. sentence 안의 대상 단어는 <b> 로 감싸져 있다. */
export interface ContextTask {
  sentence: string;
  senseKey: string;
  gloss: string;
}

/** 역방향 생성 과제. 학습자가 scene 에 맞는 영어 문장을 직접 만든다. */
export interface ReverseTask {
  senseKey: string;
  scene: string;
  sample: string;
}

export interface Word {
  id: string;
  word: string;
  pos: string;
  core: { ko: string; image: string; exEn: string; exKo: string };
  senses: Sense[];
  context: ContextTask[];
  reverse: ReverseTask;
}

export const STAGES = ["present", "map", "context", "reverse", "report"] as const;
export type Stage = (typeof STAGES)[number];

/** 3단계 채점 결과. score 와 level 은 항상 짝이 맞는다. */
export type Score = 0 | 1 | 2;
export type Level = "미흡" | "보통" | "우수";

export interface GradeResult {
  score: Score;
  level: Level;
  feedback: string;
  model_answer: string;
  /** claude = API 채점, offline = 키가 없거나 호출이 실패했을 때의 폴백 */
  engine: "claude" | "offline";
}

export interface ContextGradeRequest {
  wordId: string;
  taskIndex: number;
  answer: string;
}

export interface ReverseGradeRequest {
  wordId: string;
  answer: string;
}

/** 단어 하나에 대한 학습 기록. */
export interface WordProgress {
  ctxBest: Score;
  ctxAttempts: number;
  revBest: Score;
  revAttempts: number;
  /** 학습자가 펼쳐 본 의미 가지의 key 집합 */
  senses: Record<string, boolean>;
  last: string;
}

export type Progress = Record<string, WordProgress>;

export const LEVEL_BY_SCORE: Record<Score, Level> = {
  0: "미흡",
  1: "보통",
  2: "우수",
};
