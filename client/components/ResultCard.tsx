import type { GradeResult } from "../../shared/types.ts";

/** 채점 결과 표시. 점수에 따라 s0/s1/s2 클래스로 색이 달라진다. */
export function ResultCard({ result }: { result: GradeResult }) {
  return (
    <div className={`result show s${result.score}`}>
      <div className="head">
        <span className={`badge s${result.score}`}>{result.level}</span>
        <span>{result.score} / 2</span>
        <span className="eng">{result.engine === "gemini" ? "AI 채점" : "오프라인 채점"}</span>
      </div>
      <div className="fb">{result.feedback}</div>
      {result.model_answer && (
        <div className="model-ans">
          <b>모범 답안</b> · {result.model_answer}
        </div>
      )}
    </div>
  );
}
