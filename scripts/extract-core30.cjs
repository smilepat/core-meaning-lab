// core-meaning-lab.html 에 내장된 CORE30 배열을 추출해 TypeScript 모듈로 변환한다.
const fs = require("fs");
const path = require("path");

const SRC = process.argv[2];
const OUT = process.argv[3];

const html = fs.readFileSync(SRC, "utf8");

const startMarker = "const CORE30 = [";
const start = html.indexOf(startMarker);
if (start < 0) throw new Error("CORE30 선언을 찾지 못했습니다.");

// 대괄호 균형을 세어 배열 리터럴의 끝을 찾는다 (문자열 리터럴 내부는 건너뛴다).
const arrStart = start + startMarker.length - 1; // '[' 위치
let depth = 0;
let i = arrStart;
let quote = null;
for (; i < html.length; i++) {
  const c = html[i];
  if (quote) {
    if (c === "\\") { i++; continue; }
    if (c === quote) quote = null;
    continue;
  }
  if (c === '"' || c === "'" || c === "`") { quote = c; continue; }
  if (c === "[") depth++;
  else if (c === "]") { depth--; if (depth === 0) break; }
}
if (depth !== 0) throw new Error("배열 리터럴이 닫히지 않았습니다.");

const literal = html.slice(arrStart, i + 1);
const data = eval("(" + literal + ")");

if (!Array.isArray(data)) throw new Error("배열이 아닙니다.");

// 무결성 검사: 프로토타입이 기대하는 모든 필드가 존재하는지 확인한다.
const problems = [];
for (const w of data) {
  const where = w && w.id ? w.id : "(id 없음)";
  if (!w.id || !w.word || !w.pos) problems.push(`${where}: id/word/pos 누락`);
  if (!w.core || !w.core.ko || !w.core.image || !w.core.exEn || !w.core.exKo)
    problems.push(`${where}: core 필드 누락`);
  if (!Array.isArray(w.senses) || w.senses.length === 0)
    problems.push(`${where}: senses 없음`);
  const senseKeys = new Set((w.senses || []).map((s) => s.key));
  for (const s of w.senses || []) {
    if (!s.key || !s.label || !s.exEn || !s.exKo || !s.bridge)
      problems.push(`${where}/${s.key}: sense 필드 누락`);
  }
  if (!Array.isArray(w.context) || w.context.length === 0)
    problems.push(`${where}: context 없음`);
  for (const c of w.context || []) {
    if (!c.sentence || !c.senseKey || !c.gloss)
      problems.push(`${where}: context 필드 누락`);
    else if (!senseKeys.has(c.senseKey))
      problems.push(`${where}: context.senseKey '${c.senseKey}' 가 senses에 없음`);
  }
  if (!w.reverse || !w.reverse.senseKey || !w.reverse.scene || !w.reverse.sample)
    problems.push(`${where}: reverse 필드 누락`);
  else if (!senseKeys.has(w.reverse.senseKey))
    problems.push(`${where}: reverse.senseKey '${w.reverse.senseKey}' 가 senses에 없음`);
}

const ids = data.map((w) => w.id);
const dupes = ids.filter((id, n) => ids.indexOf(id) !== n);
if (dupes.length) problems.push(`중복 id: ${dupes.join(", ")}`);

const header = `// 이 파일은 core-meaning-lab.html 프로토타입에서 자동 추출되었습니다.
// 손으로 고치지 말고 scripts/extract-core30.cjs 를 다시 실행하세요.
import type { Word } from "./types";

export const CORE30: Word[] = `;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, header + JSON.stringify(data, null, 2) + ";\n", "utf8");

console.log(`단어 ${data.length}개 추출 -> ${OUT}`);
console.log(`의미(sense) 총 ${data.reduce((n, w) => n + w.senses.length, 0)}개`);
console.log(`문맥 과제 총 ${data.reduce((n, w) => n + w.context.length, 0)}개`);
console.log(problems.length ? "무결성 문제:\n  " + problems.join("\n  ") : "무결성 검사 통과");
