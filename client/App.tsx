import { useEffect, useMemo, useState } from "react";
import type { GradeResult, Progress, Stage, Word } from "../shared/types.ts";
import { fetchHealth, fetchWords } from "./lib/api.ts";
import { loadProgress, masteryColor, masteryPct, recordScore, stampSense } from "./lib/progress.ts";
import { ContextStage } from "./components/ContextStage.tsx";
import { Present } from "./components/Present.tsx";
import { Report } from "./components/Report.tsx";
import { ReverseStage } from "./components/ReverseStage.tsx";
import { SenseMap } from "./components/SenseMap.tsx";

const NAV: { stage: Stage; icon: string; label: string }[] = [
  { stage: "present", icon: "📖", label: "제시" },
  { stage: "map", icon: "🗺️", label: "의미확장" },
  { stage: "context", icon: "🧩", label: "문맥복원" },
  { stage: "reverse", icon: "✍️", label: "역방향생성" },
  { stage: "report", icon: "📊", label: "리포트" },
];

export default function App() {
  const [words, setWords] = useState<Word[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [aiEnabled, setAiEnabled] = useState<boolean | null>(null);
  const [wordId, setWordId] = useState<string | null>(null);
  const [stage, setStage] = useState<Stage>("present");
  const [progress, setProgress] = useState<Progress>(() => loadProgress());

  useEffect(() => {
    fetchWords()
      .then((loaded) => {
        setWords(loaded);
        setWordId((current) => current ?? loaded[0]?.id ?? null);
      })
      .catch((e: unknown) => {
        setLoadError(e instanceof Error ? e.message : "단어를 불러오지 못했습니다.");
      });
    fetchHealth()
      .then((h) => setAiEnabled(h.aiEnabled))
      .catch(() => setAiEnabled(false));
  }, []);

  const word = useMemo(() => words.find((w) => w.id === wordId), [words, wordId]);

  function selectWord(nextId: string) {
    setWordId(nextId);
    setStage("present");
  }

  function handleGraded(kind: "ctx" | "rev", result: GradeResult) {
    if (!word) return;
    setProgress((current) => recordScore(current, word.id, kind, result.score));
  }

  const engineLabel =
    aiEnabled === null ? "채점 엔진 확인 중…" : aiEnabled ? "AI 채점 준비됨" : "오프라인 채점";

  return (
    <>
      <header>
        <div className="wrap">
          <div className="brand">
            <h1>
              Core Meaning <span>Lab</span>
            </h1>
            <div className="engine">
              <span className={`dot${aiEnabled ? " on" : ""}`} />
              <span>{engineLabel}</span>
            </div>
          </div>
          <div className="chips">
            {words.map((w) => {
              const pct = masteryPct(progress, w.id);
              return (
                <button
                  key={w.id}
                  className={`chip${w.id === wordId ? " active" : ""}`}
                  onClick={() => selectWord(w.id)}
                >
                  {w.word}
                  {pct > 0 && <span className="m" style={{ background: masteryColor(pct) }} />}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <main className="wrap">
        {loadError && <div className="empty">{loadError}</div>}
        {!loadError && !word && <div className="empty">불러오는 중…</div>}
        {word && stage === "present" && <Present word={word} onNext={() => setStage("map")} />}
        {word && stage === "map" && (
          <SenseMap
            word={word}
            record={progress[word.id]}
            onSeeSense={(senseKey) =>
              setProgress((current) => stampSense(current, word.id, senseKey))
            }
          />
        )}
        {word && stage === "context" && (
          <ContextStage word={word} onGraded={(r) => handleGraded("ctx", r)} />
        )}
        {word && stage === "reverse" && (
          <ReverseStage word={word} onGraded={(r) => handleGraded("rev", r)} />
        )}
        {stage === "report" && <Report words={words} progress={progress} onPick={selectWord} />}
      </main>

      <nav>
        {NAV.map((item) => (
          <button
            key={item.stage}
            className={stage === item.stage ? "active" : ""}
            onClick={() => setStage(item.stage)}
          >
            <span className="ic">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </>
  );
}
