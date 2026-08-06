import type { GradeResult, Word } from "../../shared/types.ts";

async function postJSON<T>(url: string, body: unknown): Promise<T> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    const detail = await response.json().catch(() => ({}) as { error?: string });
    throw new Error(detail.error ?? `요청이 실패했습니다 (${response.status})`);
  }
  return response.json() as Promise<T>;
}

export async function fetchWords(): Promise<Word[]> {
  const response = await fetch("/api/words");
  if (!response.ok) throw new Error("단어 데이터를 불러오지 못했습니다.");
  return response.json() as Promise<Word[]>;
}

export async function fetchHealth(): Promise<{ claudeEnabled: boolean }> {
  const response = await fetch("/api/health");
  if (!response.ok) throw new Error("서버 상태를 확인하지 못했습니다.");
  return response.json() as Promise<{ claudeEnabled: boolean }>;
}

export function gradeContext(
  wordId: string,
  taskIndex: number,
  answer: string,
): Promise<GradeResult> {
  return postJSON<GradeResult>("/api/grade/context", { wordId, taskIndex, answer });
}

export function gradeReverse(wordId: string, answer: string): Promise<GradeResult> {
  return postJSON<GradeResult>("/api/grade/reverse", { wordId, answer });
}
