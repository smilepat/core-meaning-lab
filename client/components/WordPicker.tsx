import { useMemo, useState } from "react";
import type { Progress, Word } from "../../shared/types.ts";
import type { GroupKey } from "../lib/groups.ts";
import { GROUPS, familiesInTier, searchWords, stagesOf, wordsInGroup } from "../lib/groups.ts";
import { masteryColor, masteryPct } from "../lib/progress.ts";

/** 어근 가족으로 묶어 보여 줄 군. 나머지는 칩 한 줄로 충분하다. */
const FAMILY_TIERS = new Set([5]);
/** 알파벳 순 30개씩 끊어 보여 줄 군. 자연스러운 묶음이 없는 군이다. */
const STAGED_TIERS = new Set([4]);

interface Props {
  words: Word[];
  group: GroupKey;
  wordId: string | null;
  progress: Progress;
  onGroup: (group: GroupKey) => void;
  onPick: (wordId: string) => void;
}

export function WordPicker({ words, group, wordId, progress, onGroup, onPick }: Props) {
  const [query, setQuery] = useState("");
  const [stage, setStage] = useState(0);
  const [family, setFamily] = useState(0);

  const results = useMemo(() => searchWords(words, query), [words, query]);
  const stages = useMemo(
    () => (typeof group === "number" && STAGED_TIERS.has(group) ? stagesOf(words, group) : []),
    [words, group],
  );
  const families = useMemo(
    () => (typeof group === "number" && FAMILY_TIERS.has(group) ? familiesInTier(words, group) : []),
    [words, group],
  );

  function chooseGroup(next: GroupKey) {
    setStage(0);
    setFamily(0);
    onGroup(next);
  }

  function pick(id: string) {
    setQuery("");
    onPick(id);
  }

  const chip = (w: Word, showRank: boolean) => {
    const pct = masteryPct(progress, w.id);
    return (
      <button
        key={w.id}
        className={`chip${w.id === wordId ? " active" : ""}`}
        onClick={() => pick(w.id)}
      >
        {showRank && <span className="rk">{w.rank}</span>}
        {w.word}
        {pct > 0 && <span className="m" style={{ background: masteryColor(pct) }} />}
      </button>
    );
  };

  // 검색 중에는 군을 무시한다 — 아는 단어를 찾을 때 그게 몇 군인지 기억할 리 없다.
  if (query.trim()) {
    return (
      <>
        <SearchBox value={query} onChange={setQuery} />
        <div className="chips">
          {results.length === 0 ? (
            <span className="nores">찾는 단어가 없습니다</span>
          ) : (
            results.slice(0, 40).map((w) => chip(w, false))
          )}
        </div>
        {results.length > 0 && (
          <p className="searchnote">
            {results.length}개 찾음{results.length > 40 && " · 앞의 40개만 보입니다"}
          </p>
        )}
      </>
    );
  }

  return (
    <>
      <SearchBox value={query} onChange={setQuery} />
      <div className="groups">
        {GROUPS.map((g) => (
          <button
            key={String(g.key)}
            className={`group${g.key === group ? " active" : ""}`}
            onClick={() => chooseGroup(g.key)}
            aria-pressed={g.key === group}
          >
            {g.label}
          </button>
        ))}
      </div>

      {/* 5군 — 어근 가족을 먼저 고르고, 그 안의 네 형제만 칩으로 */}
      {families.length > 0 ? (
        <>
          <div className="subtabs">
            {families.map((f, i) => (
              <button
                key={f.family?.latin ?? "rest"}
                className={`subtab${i === family ? " active" : ""}`}
                onClick={() => setFamily(i)}
              >
                {f.family ? f.family.latin : "그 밖"}
                <span className="subtabko">{f.family ? f.family.ko : `${f.words.length}개`}</span>
              </button>
            ))}
          </div>
          <div className="chips">{(families[family]?.words ?? []).map((w) => chip(w, false))}</div>
          {(families[family]?.elsewhere ?? []).length > 0 && (
            <p className="searchnote">
              같은 어근이 다른 군에도 있습니다 —{" "}
              {families[family]!.elsewhere.map((w, i) => (
                <span key={w.id}>
                  {i > 0 && ", "}
                  <button className="linkish" onClick={() => pick(w.id)}>
                    {w.word}
                  </button>
                  <span className="dim"> {w.tier}군</span>
                </span>
              ))}
            </p>
          )}
        </>
      ) : stages.length > 0 ? (
        /* 4군 — 알파벳 순 30개씩. 교육적 단계가 아니라 찾기 위한 단위다. */
        <>
          <div className="subtabs">
            {stages.map((s, i) => (
              <button
                key={i}
                className={`subtab${i === stage ? " active" : ""}`}
                onClick={() => setStage(i)}
              >
                {i + 1}단계
                <span className="subtabko">
                  {s[0]?.word.charAt(0).toUpperCase()}–{s[s.length - 1]?.word.charAt(0).toUpperCase()}
                </span>
              </button>
            ))}
          </div>
          <div className="chips">{(stages[stage] ?? []).map((w) => chip(w, false))}</div>
        </>
      ) : (
        <div className="chips">
          {wordsInGroup(words, group).map((w) => chip(w, group === "top"))}
        </div>
      )}
    </>
  );
}

function SearchBox({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="searchwrap">
      <span className="searchic" aria-hidden="true">
        🔍
      </span>
      <input
        className="search"
        type="search"
        value={value}
        placeholder="단어 · 뜻으로 찾기"
        aria-label="단어 검색"
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button className="searchx" onClick={() => onChange("")} aria-label="검색어 지우기">
          ✕
        </button>
      )}
    </div>
  );
}
