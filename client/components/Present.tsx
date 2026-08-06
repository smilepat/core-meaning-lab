import type { Word } from "../../shared/types.ts";
import { StageHead } from "./StageHead.tsx";

export function Present({ word, onNext }: { word: Word; onNext: () => void }) {
  return (
    <>
      <StageHead n="STEP 1" title="제시" sub={word.word} />
      <div className="card">
        <div>
          <span className="word-big">{word.word}</span>
          <span className="pos">{word.pos}</span>
        </div>
        <div className="core-label">CORE · 핵심 의미</div>
        <div className="core-ko">{word.core.ko}</div>
        <div className="core-img">🧠 {word.core.image}</div>
        <div className="ex">
          <div className="en">{word.core.exEn}</div>
          <div className="ko">{word.core.exKo}</div>
        </div>
      </div>
      <button className="btn" onClick={onNext}>
        이 핵심에서 뜻이 어떻게 뻗어나갈까? →
      </button>
      <p className="hint">하나의 핵심 이미지가 여러 뜻으로 확장됩니다.</p>
    </>
  );
}
