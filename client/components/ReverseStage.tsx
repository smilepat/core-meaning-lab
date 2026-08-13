import { useState } from "react";
import type { GradeResult, Word } from "../../shared/types.ts";
import { gradeReverse } from "../lib/api.ts";
import { ResultCard } from "./ResultCard.tsx";
import { StageHead } from "./StageHead.tsx";

interface Props {
  word: Word;
  onGraded: (result: GradeResult) => void;
}

export function ReverseStage({ word, onGraded, onNext }: Props & { onNext: () => void }) {
  const [answer, setAnswer] = useState("");
  const [grading, setGrading] = useState(false);
  const [result, setResult] = useState<GradeResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const sense = word.senses.find((s) => s.key === word.reverse.senseKey) ?? word.senses[0];

  async function submit() {
    setGrading(true);
    setError(null);
    try {
      const graded = await gradeReverse(word.id, answer.trim());
      setResult(graded);
      onGraded(graded);
    } catch (e) {
      setError(e instanceof Error ? e.message : "채점에 실패했습니다.");
    } finally {
      setGrading(false);
    }
  }

  return (
    <>
      <StageHead n="STEP 4" title="역방향생성" sub="목표 의미 → 영어 문장" />
      <div className="card">
        <span className="sense-tag">목표 의미 · {sense?.label}</span>
        <div className="scene">
          💬 {word.reverse.scene}, <b>{word.word}</b>를 넣어 영어 문장을 만들어 보세요.
        </div>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder={`Write your English sentence with '${word.word}'…`}
        />
        <button className="btn" disabled={grading} onClick={submit}>
          {grading ? "채점 중…" : result ? "다시 채점" : "채점하기"}
        </button>
        {error && <div className="fb">{error}</div>}
        {result && <ResultCard result={result} />}
      </div>
      <button className="btn ghost" onClick={onNext}>
        진도 확인하고 다음 단어로 →
      </button>
      <p className="hint">단어를 목표 의미로 정확히 쓰고 문장이 자연스러우면 '우수'입니다.</p>
    </>
  );
}
