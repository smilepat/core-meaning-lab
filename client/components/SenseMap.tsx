import { useState } from "react";
import type { Word, WordProgress } from "../../shared/types.ts";
import { StageHead } from "./StageHead.tsx";

interface Props {
  word: Word;
  record: WordProgress | undefined;
  onSeeSense: (senseKey: string) => void;
  onNext: () => void;
}

export function SenseMap({ word, record, onSeeSense, onNext }: Props) {
  const [openKey, setOpenKey] = useState<string | null>(null);

  function toggle(senseKey: string) {
    const nextOpen = openKey === senseKey ? null : senseKey;
    setOpenKey(nextOpen);
    if (nextOpen) onSeeSense(senseKey);
  }

  return (
    <>
      <StageHead n="STEP 2" title="의미확장지도" sub="핵심 → 확장 의미" />
      <div className="core-node">
        <div className="w">{word.word}</div>
        <div className="k">
          {word.core.ko} · {word.core.image}
        </div>
      </div>
      <div className="branches">
        {word.senses.map((sense) => {
          const open = openKey === sense.key;
          const seen = Boolean(record?.senses[sense.key]);
          return (
            <div
              key={sense.key}
              className={`branch${open ? " open" : ""}${seen ? " seen" : ""}`}
            >
              <button onClick={() => toggle(sense.key)}>
                <div className="lb">
                  <span>{sense.label}</span>
                  <span className="caret">▶</span>
                </div>
                <div className="en">{sense.exEn}</div>
                <div className="body">
                  <div className="bridge">🔗 왜? {sense.bridge}</div>
                  <div className="be">{sense.exEn}</div>
                  <div className="bk">{sense.exKo}</div>
                </div>
              </button>
            </div>
          );
        })}
      </div>
      <button className="btn" onClick={onNext}>
        이제 문장 속에서 직접 복원해 보자 →
      </button>
      <p className="hint">가지를 눌러 '왜 그 뜻으로 확장되는지'를 확인하세요.</p>
    </>
  );
}
