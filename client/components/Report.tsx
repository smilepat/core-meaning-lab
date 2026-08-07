import type { Progress, Word } from "../../shared/types.ts";
import { GROUPS, wordsInGroup } from "../lib/groups.ts";
import { masteryColor, masteryPct } from "../lib/progress.ts";
import { StageHead } from "./StageHead.tsx";

interface Props {
  words: Word[];
  progress: Progress;
  onPick: (wordId: string) => void;
}

export function Report({ words, progress, onPick }: Props) {
  const studied = words.filter((w) => progress[w.id]);
  const mastered = studied.filter((w) => masteryPct(progress, w.id) >= 75);
  const attempts = studied.reduce((sum, w) => {
    const r = progress[w.id];
    return sum + (r ? r.ctxAttempts + r.revAttempts : 0);
  }, 0);

  return (
    <>
      <StageHead n="STEP 5" title="리포트" sub={`전체 ${words.length}단어`} />
      <div className="stats">
        <div className="stat">
          <div className="v">{studied.length}</div>
          <div className="l">학습한 단어</div>
        </div>
        <div className="stat">
          <div className="v">{mastered.length}</div>
          <div className="l">숙련 (75%+)</div>
        </div>
        <div className="stat">
          <div className="v">{attempts}</div>
          <div className="l">채점 횟수</div>
        </div>
      </div>

      {/* 그룹별 진도 — 어느 우선순위 구간이 비어 있는지가 다음에 뭘 할지 알려준다. */}
      <div className="card cover">
        {GROUPS.map((g) => {
          const inGroup = wordsInGroup(words, g.key);
          const done = inGroup.filter((w) => progress[w.id]).length;
          const pct = inGroup.length === 0 ? 0 : Math.round((done / inGroup.length) * 100);
          return (
            <div key={String(g.key)} className="coverrow">
              <span className="cl">{g.label}</span>
              <span className="cbar">
                <span className="cfill" style={{ width: `${pct}%` }} />
              </span>
              <span className="cn">
                {done}/{inGroup.length}
              </span>
            </div>
          );
        })}
      </div>

      {studied.length === 0 ? (
        <div className="empty">아직 학습 기록이 없습니다. STEP 1부터 시작해 보세요.</div>
      ) : (
        <div className="grid">
          {studied.map((word) => {
            const pct = masteryPct(progress, word.id);
            return (
              <div key={word.id} className="cell" onClick={() => onPick(word.id)}>
                <div
                  className="ring"
                  style={{ border: `3px solid ${masteryColor(pct)}`, color: masteryColor(pct) }}
                >
                  {pct}%
                </div>
                <div className="w">{word.word}</div>
              </div>
            );
          })}
        </div>
      )}
      <p className="hint">단어를 누르면 그 단어의 STEP 1로 이동합니다.</p>
    </>
  );
}
