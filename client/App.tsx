import { useEffect, useMemo, useState } from "react";
import type { GradeResult, Progress, Stage, Word } from "../shared/types.ts";
import { fetchHealth, fetchWords } from "./lib/api.ts";
import { hasSeenGuide, loadProgress, markGuideSeen, recordScore, stampSense } from "./lib/progress.ts";
import { ContextStage } from "./components/ContextStage.tsx";
import { Guide } from "./components/Guide.tsx";
import { Present } from "./components/Present.tsx";
import { Report } from "./components/Report.tsx";
import { ReverseStage } from "./components/ReverseStage.tsx";
import { SenseMap } from "./components/SenseMap.tsx";
import { WordPicker } from "./components/WordPicker.tsx";
import type { GroupKey } from "./lib/groups.ts";
import { groupBlurb, wordsInGroup } from "./lib/groups.ts";

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
  const [group, setGroup] = useState<GroupKey>("top");
  const [stage, setStage] = useState<Stage>("present");
  const [progress, setProgress] = useState<Progress>(() => loadProgress());
  // 처음 온 사람에게는 안내를 먼저 띄운다. 한 번 닫으면 다시 뜨지 않는다.
  const [showGuide, setShowGuide] = useState(() => !hasSeenGuide());

  useEffect(() => {
    fetchWords()
      .then((loaded) => {
        setWords(loaded);
        // 첫 단어는 최우선 30위 중 1번. 학습 순서 자체가 설계의 일부다.
        const first = wordsInGroup(loaded, "top")[0] ?? loaded[0];
        setWordId((current) => current ?? first?.id ?? null);
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

  function closeGuide() {
    markGuideSeen();
    setShowGuide(false);
  }

  return (
    <>
      {showGuide && <Guide words={words} onClose={closeGuide} />}
      <header>
        <div className="wrap">
          <div className="brand">
            <h1>
              Core Meaning <span>Lab</span>
            </h1>
            <div className="brand-right">
              <div className="engine">
                <span className={`dot${aiEnabled ? " on" : ""}`} />
                <span>{engineLabel}</span>
              </div>
              <button
                className="guide-open"
                onClick={() => setShowGuide(true)}
                aria-label="앱 소개와 사용법 보기"
              >
                안내
              </button>
            </div>
          </div>
          <WordPicker
            words={words}
            group={group}
            wordId={wordId}
            progress={progress}
            onGroup={setGroup}
            onPick={selectWord}
          />
        </div>
      </header>

      <main className="wrap">
        {loadError && <div className="empty">{loadError}</div>}
        {!loadError && !word && <div className="empty">불러오는 중…</div>}
        {word && stage === "present" && <p className="groupnote">{groupBlurb(group)}</p>}
        {word && stage === "present" && <Present word={word} onNext={() => setStage("map")} />}
        {word && stage === "map" && (
          <SenseMap
            word={word}
            record={progress[word.id]}
            onSeeSense={(senseKey) =>
              setProgress((current) => stampSense(current, word.id, senseKey))
            }
            onNext={() => setStage("context")}
          />
        )}
        {word && stage === "context" && (
          <ContextStage
            word={word}
            onGraded={(r) => handleGraded("ctx", r)}
            onNext={() => setStage("reverse")}
          />
        )}
        {word && stage === "reverse" && (
          <ReverseStage
            word={word}
            onGraded={(r) => handleGraded("rev", r)}
            onNext={() => setStage("report")}
          />
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
