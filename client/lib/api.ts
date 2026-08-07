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

export async function fetchHealth(): Promise<{ aiEnabled: boolean }> {
  const response = await fetch("/api/health");
  if (!response.ok) throw new Error("서버 상태를 확인하지 못했습니다.");
  return response.json() as Promise<{ aiEnabled: boolean }>;
}

// 경로가 /api/grade-context 이지 /api/grade/context 가 아닌 이유:
// Vercel 의 catch-all 함수(api/[...path])가 /api 아래 **한 단계**까지만 잡아 준다.
// 두 단계 경로는 함수에 닿지도 못하고 플랫폼 404 로 끝난다. server/app.ts 참고.
export function gradeContext(
  wordId: string,
  taskIndex: number,
  answer: string,
): Promise<GradeResult> {
  return postJSON<GradeResult>("/api/grade-context", { wordId, taskIndex, answer });
}

export function gradeReverse(wordId: string, answer: string): Promise<GradeResult> {
  return postJSON<GradeResult>("/api/grade-reverse", { wordId, answer });
}
