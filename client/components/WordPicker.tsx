import { useMemo } from "react";
import type { Progress, Word } from "../../shared/types.ts";
import type { GroupKey } from "../lib/groups.ts";
import { GROUPS, wordsInGroup } from "../lib/groups.ts";
import { masteryColor, masteryPct } from "../lib/progress.ts";

interface Props {
  words: Word[];
  group: GroupKey;
  wordId: string | null;
  progress: Progress;
  onGroup: (group: GroupKey) => void;
  onPick: (wordId: string) => void;
}

export function WordPicker({ words, group, wordId, progress, onGroup, onPick }: Props) {
  const shown = useMemo(() => wordsInGroup(words, group), [words, group]);

  return (
    <>
      <div className="groups">
        {GROUPS.map((g) => (
          <button
            key={String(g.key)}
            className={`group${g.key === group ? " active" : ""}`}
            onClick={() => onGroup(g.key)}
            aria-pressed={g.key === group}
          >
            {g.label}
          </button>
        ))}
      </div>
      <div className="chips">
        {shown.map((w) => {
          const pct = masteryPct(progress, w.id);
          return (
            <button
              key={w.id}
              className={`chip${w.id === wordId ? " active" : ""}`}
              onClick={() => onPick(w.id)}
            >
              {group === "top" && <span className="rk">{w.rank}</span>}
              {w.word}
              {pct > 0 && <span className="m" style={{ background: masteryColor(pct) }} />}
            </button>
          );
        })}
      </div>
    </>
  );
}
