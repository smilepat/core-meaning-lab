import type { Progress, Score, WordProgress } from "../../shared/types.ts";

const STORE_KEY = "cml_progress_v1";

function emptyRecord(): WordProgress {
  return { ctxBest: 0, ctxAttempts: 0, revBest: 0, revAttempts: 0, senses: {}, last: "" };
}

function today(): string {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}.${p(d.getMonth() + 1)}.${p(d.getDate())}`;
}

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    return raw ? (JSON.parse(raw) as Progress) : {};
  } catch {
    return {};
  }
}

function save(progress: Progress): void {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(progress));
  } catch {
    // 시크릿 모드 등에서 저장이 막힐 수 있다. 학습 자체는 계속 진행한다.
  }
}

function withRecord(progress: Progress, wordId: string): [Progress, WordProgress] {
  const record = { ...(progress[wordId] ?? emptyRecord()) };
  return [progress, record];
}

/** 학습자가 의미 가지를 펼쳐 본 사실을 기록한다. */
export function stampSense(progress: Progress, wordId: string, senseKey: string): Progress {
  const [, record] = withRecord(progress, wordId);
  record.senses = { ...record.senses, [senseKey]: true };
  record.last = today();
  const next = { ...progress, [wordId]: record };
  save(next);
  return next;
}

/** 채점 결과를 기록한다. 최고점만 남기고 시도 횟수는 누적한다. */
export function recordScore(
  progress: Progress,
  wordId: string,
  kind: "ctx" | "rev",
  score: Score,
): Progress {
  const [, record] = withRecord(progress, wordId);
  if (kind === "ctx") {
    record.ctxAttempts += 1;
    record.ctxBest = Math.max(record.ctxBest, score) as Score;
  } else {
    record.revAttempts += 1;
    record.revBest = Math.max(record.revBest, score) as Score;
  }
  record.last = today();
  const next = { ...progress, [wordId]: record };
  save(next);
  return next;
}

/** 문맥·역방향 최고점을 합쳐 0~100%로 환산한 숙련도. */
export function masteryPct(progress: Progress, wordId: string): number {
  const record = progress[wordId];
  if (!record) return 0;
  return Math.round(((record.ctxBest + record.revBest) / 4) * 100);
}

export function masteryColor(pct: number): string {
  if (pct >= 75) return "var(--ok)";
  if (pct >= 40) return "var(--mid)";
  if (pct > 0) return "var(--bad)";
  return "var(--ink-soft)";
}
