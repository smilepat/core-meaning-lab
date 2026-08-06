import "dotenv/config";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { CORE30 } from "../shared/core30.ts";
import type { ContextGradeRequest, ReverseGradeRequest } from "../shared/types.ts";
import { gradeContext, gradeReverse, isClaudeEnabled } from "./grade.ts";

const here = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(here, "..");

const app = express();
app.use(express.json({ limit: "16kb" }));

const wordsById = new Map(CORE30.map((w) => [w.id, w]));

/** 학습자 답안 길이 상한. 이 앱에서 정상 답안은 한두 문장이다. */
const MAX_ANSWER_LENGTH = 500;

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, claudeEnabled: isClaudeEnabled(), words: CORE30.length });
});

app.get("/api/words", (_req, res) => {
  res.json(CORE30);
});

function readAnswer(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (trimmed.length > MAX_ANSWER_LENGTH) return null;
  return trimmed;
}

app.post("/api/grade/context", async (req, res) => {
  const { wordId, taskIndex } = req.body as Partial<ContextGradeRequest>;
  const answer = readAnswer(req.body?.answer);

  const word = typeof wordId === "string" ? wordsById.get(wordId) : undefined;
  if (!word) return res.status(400).json({ error: "알 수 없는 wordId 입니다." });
  if (answer === null) return res.status(400).json({ error: "answer 가 올바르지 않습니다." });

  // 문장·정답은 서버가 가진 데이터에서 찾는다. 클라이언트가 보낸 값을 프롬프트에 넣지 않는다.
  const task = typeof taskIndex === "number" ? word.context[taskIndex] : undefined;
  if (!task) return res.status(400).json({ error: "알 수 없는 taskIndex 입니다." });

  res.json(await gradeContext(word, task, answer));
});

app.post("/api/grade/reverse", async (req, res) => {
  const { wordId } = req.body as Partial<ReverseGradeRequest>;
  const answer = readAnswer(req.body?.answer);

  const word = typeof wordId === "string" ? wordsById.get(wordId) : undefined;
  if (!word) return res.status(400).json({ error: "알 수 없는 wordId 입니다." });
  if (answer === null) return res.status(400).json({ error: "answer 가 올바르지 않습니다." });

  res.json(await gradeReverse(word, answer));
});

// 운영 환경에서는 빌드된 프런트엔드를 같은 서버에서 서빙한다.
if (process.env.NODE_ENV === "production") {
  const dist = path.join(projectRoot, "dist");
  app.use(express.static(dist));
  app.get("*", (_req, res) => res.sendFile(path.join(dist, "index.html")));
}

const port = Number(process.env.PORT) || 5174;
app.listen(port, () => {
  console.log(`[server] http://localhost:${port} 에서 대기 중`);
  console.log(
    isClaudeEnabled()
      ? "[server] 채점 엔진: Claude API"
      : "[server] 채점 엔진: 오프라인 폴백 (ANTHROPIC_API_KEY 가 없습니다)",
  );
});
