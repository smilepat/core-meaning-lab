import { useState } from "react";
import type { ContextTask, GradeResult, Word } from "../../shared/types.ts";
import { gradeContext } from "../lib/api.ts";
import { ResultCard } from "./ResultCard.tsx";
import { StageHead } from "./StageHead.tsx";

interface Props {
  word: Word;
  onGraded: (result: GradeResult) => void;
}

export function ContextStage({ word, onGraded, onNext }: Props & { onNext: () => void }) {
  return (
    <>
      <StageHead n="STEP 3" title="문맥복원" sub={`${word.context.length}문항 · 3단계 채점`} />
      {word.context.map((task, index) => (
        <ContextCard
          key={`${word.id}-${index}`}
          word={word}
          task={task}
          index={index}
          onGraded={onGraded}
        />
      ))}
      <button className="btn ghost" onClick={onNext}>
        이번엔 내가 문장을 만들어 보자 →
      </button>
      <p className="hint">문장 속 뜻을 핵심 의미와 연결해 설명하면 '우수'입니다.</p>
    </>
  );
}

function ContextCard({
  word,
  task,
  index,
  onGraded,
}: Props & { task: ContextTask; index: number }) {
  const [answer, setAnswer] = useState("");
  const [grading, setGrading] = useState(false);
  const [result, setResult] = useState<GradeResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const sense = word.senses.find((s) => s.key === task.senseKey) ?? word.senses[0];

  async function submit() {
    setGrading(true);
    setError(null);
    try {
      const graded = await gradeContext(word.id, index, answer.trim());
      setResult(graded);
      onGraded(graded);
    } catch (e) {
      setError(e instanceof Error ? e.message : "채점에 실패했습니다.");
    } finally {
      setGrading(false);
    }
  }

  return (
    <div className="card">
      <span className="sense-tag">{sense?.label}</span>
      {/* 문장의 <b> 강조는 앱에 내장된 데이터에서 오며 사용자 입력이 아니다. */}
      <div className="sentence" dangerouslySetInnerHTML={{ __html: task.sentence }} />
      <div className="prompt-line" style={{ marginTop: 8 }}>
        이 문맥에서 <b>{word.word}</b>의 의미를 한국어로 써 보세요.
      </div>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder={`예) ${task.gloss.slice(0, 6)}…`}
      />
      <button className="btn" disabled={grading} onClick={submit}>
        {grading ? "채점 중…" : result ? "다시 채점" : "채점하기"}
      </button>
      {error && <div className="fb">{error}</div>}
      {result && <ResultCard result={result} />}
    </div>
  );
}
