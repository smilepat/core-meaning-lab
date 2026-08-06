import { GoogleGenAI, Type } from "@google/genai";
import type { ContextTask, GradeResult, Level, Score, Word } from "../shared/types.ts";
import { LEVEL_BY_SCORE } from "../shared/types.ts";
import { offlineContext, offlineReverse } from "./offline.ts";

// 채점 모델. 짧은 학습자 답안을 판단하는 작업이라 flash 계열로 충분하다.
const MODEL = "gemini-3.6-flash";

/**
 * 구조화 출력 스키마. 이게 형식을 강제하므로 프롬프트에서 "JSON만 출력" 지시는 뺐다.
 * score 를 문자열 enum 으로 둔 이유: Gemini 스키마의 enum 은 문자열 배열만 받는다
 * (Schema.enum?: string[]). 정수로 두면 값을 강제할 수 없어 0~2 밖의 숫자가 올 수 있다.
 * 아래 normalize() 에서 숫자로 되돌린다.
 */
const GRADE_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    score: {
      type: Type.STRING,
      enum: ["0", "1", "2"],
      description: "0=미흡, 1=보통, 2=우수",
    },
    level: {
      type: Type.STRING,
      enum: ["미흡", "보통", "우수"],
      description: "score 와 짝이 맞아야 한다",
    },
    feedback: {
      type: Type.STRING,
      description: "학습자에게 보여 줄 한국어 1~2문장 피드백",
    },
    model_answer: {
      type: Type.STRING,
      description: "모범 답안",
    },
  },
  required: ["score", "level", "feedback", "model_answer"],
  propertyOrdering: ["score", "level", "feedback", "model_answer"],
};

const CONTEXT_SYSTEM = `당신은 한국인 영어 학습자를 가르치는 어휘 튜터입니다. 학생이 영어 단어의 '문맥 속 의미'를 얼마나 정확히 파악했는지 채점합니다.

채점 기준(3단계):
- 2(우수): 문맥 의미가 정확하고, core 의미와의 연결이 자연스럽다.
- 1(보통): 문맥 의미는 대체로 맞다.
- 0(미흡): 틀렸거나 관련이 없다. 무응답도 0이다.

feedback 은 학생이 직접 읽는 글이므로 한국어로 쓰고, 틀린 부분을 짚어 준 뒤 core 의미와 어떻게 이어지는지 한 문장으로 덧붙이세요.`;

const REVERSE_SYSTEM = `당신은 한국인 영어 학습자를 가르치는 어휘 튜터입니다. 학생이 목표 의미에 맞게 영어 문장을 만들었는지 채점합니다.

다음 세 가지를 종합해 판단하세요: (1) 대상 단어를 목표 의미로 정확히 썼는가 (2) 문법이 맞는가 (3) 자연스러운가.

채점 기준(3단계):
- 2(우수): 세 가지를 모두 만족한다.
- 1(보통): 의미는 맞으나 어색하거나 사소한 오류가 있다.
- 0(미흡): 목표 의미와 다르거나, 단어를 쓰지 않았거나, 무응답이다.

feedback 은 학생이 직접 읽는 글이므로 한국어로 쓰세요. model_answer 에는 모범 영어 문장과 짧은 한국어 설명을 함께 담으세요.`;

function contextUserMessage(word: Word, task: ContextTask, answer: string): string {
  const sentence = task.sentence.replace(/<\/?b>/g, "");
  return `단어: ${word.word}
핵심(core) 의미: ${word.core.ko}
문장: "${sentence}"
이 문맥에서 ${word.word}의 실제 의미(참고 정답): ${task.gloss}
학생이 쓴 '이 문맥에서의 의미': "${answer}"`;
}

function reverseUserMessage(word: Word, senseLabel: string, answer: string): string {
  return `단어: ${word.word}
목표 의미: ${senseLabel}
상황: ${word.reverse.scene}
학생이 만든 영어 문장: "${answer}"`;
}

let client: GoogleGenAI | null = null;

/** API 키가 있을 때만 클라이언트를 만든다. 키가 없으면 전부 오프라인 폴백으로 간다. */
export function isGeminiEnabled(): boolean {
  return Boolean(process.env.GEMINI_API_KEY);
}

function getClient(): GoogleGenAI {
  if (!client) {
    client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return client;
}

/** score 와 level 이 어긋난 응답이 와도 score 를 정본으로 삼아 바로잡는다. */
function normalize(raw: unknown): GradeResult | null {
  if (typeof raw !== "object" || raw === null) return null;
  const o = raw as Record<string, unknown>;

  const n = Number(o.score);
  if (![0, 1, 2].includes(n)) return null;
  const score = n as Score;

  const level: Level = LEVEL_BY_SCORE[score];
  const feedback = String(o.feedback ?? "").trim();
  const modelAnswer = String(o.model_answer ?? "").trim();
  if (!feedback) return null;

  return { score, level, feedback, model_answer: modelAnswer, engine: "gemini" };
}

async function callGemini(system: string, userMessage: string): Promise<GradeResult | null> {
  const response = await getClient().models.generateContent({
    model: MODEL,
    contents: userMessage,
    config: {
      systemInstruction: system,
      responseMimeType: "application/json",
      responseSchema: GRADE_SCHEMA,
      maxOutputTokens: 2048,
    },
  });

  // 안전 필터에 걸리면 text 가 비어 있다. 어휘 채점에서 일어날 일은 아니지만,
  // 일어나면 오프라인 폴백으로 넘긴다.
  const text = response.text;
  if (!text) return null;

  try {
    return normalize(JSON.parse(text));
  } catch {
    return null;
  }
}

export async function gradeContext(
  word: Word,
  task: ContextTask,
  answer: string,
): Promise<GradeResult> {
  if (isGeminiEnabled()) {
    try {
      const graded = await callGemini(CONTEXT_SYSTEM, contextUserMessage(word, task, answer));
      if (graded) return graded;
      console.warn(`[grade] context ${word.id}: 응답을 해석하지 못해 오프라인으로 폴백합니다.`);
    } catch (error) {
      console.error(`[grade] context ${word.id} 실패:`, error);
    }
  }
  return offlineContext(task.gloss, answer);
}

export async function gradeReverse(word: Word, answer: string): Promise<GradeResult> {
  const sense = word.senses.find((s) => s.key === word.reverse.senseKey) ?? word.senses[0];
  const senseLabel = sense?.label ?? word.core.ko;

  if (isGeminiEnabled()) {
    try {
      const graded = await callGemini(REVERSE_SYSTEM, reverseUserMessage(word, senseLabel, answer));
      if (graded) return graded;
      console.warn(`[grade] reverse ${word.id}: 응답을 해석하지 못해 오프라인으로 폴백합니다.`);
    } catch (error) {
      console.error(`[grade] reverse ${word.id} 실패:`, error);
    }
  }
  return offlineReverse(word.word, word.reverse.sample, answer);
}
