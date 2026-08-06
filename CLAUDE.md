@REPO_OPS.md

# CLAUDE.md — core-meaning-lab

멀티 PC 작업 규율은 위 **[REPO_OPS.md](REPO_OPS.md)** 에 있다 (저장소 공용).
아래는 이 저장소에만 해당하는 사항이다.

## 세션 시작 시 읽을 문서

- **[STATUS.md](STATUS.md)** — 지금 상태·진행률·다음 할 일.
- **[README.md](README.md)** — 실행 방법과 구조.

## 이 저장소만의 규칙

- **`shared/core30.ts` 는 손으로 고치지 않는다.** 프로토타입에서 자동 추출된 파일이다.
  단어를 고치려면 `scripts/extract-core30.cjs` 를 고쳐 다시 생성하거나, 추출 원본을
  졸업시킨 뒤 이 규칙을 지운다.
- **API 키는 서버에만 둔다.** `GEMINI_API_KEY` 를 클라이언트 코드나 `VITE_` 접두어
  환경변수로 옮기면 브라우저 번들에 그대로 실린다.
- 채점 프롬프트에 **클라이언트가 보낸 문자열을 넣지 않는다.** 문장·정답은 서버가
  `wordId` 로 `CORE30` 에서 찾는다 (`server/index.ts`).
- 커밋 전 `npm run typecheck` 와 `npm run build` 를 돌린다.

## 빠른 사실

- 스택: Vite + React + TypeScript (client) / Express + `@google/genai` (server).
- 채점 모델: `gemini-3.6-flash`, 구조화 출력(`responseSchema`) 으로 형식 강제.
- Gemini 스키마의 `enum` 은 문자열 배열만 받는다 → `score` 를 `["0","1","2"]` 로 두고
  `normalize()` 에서 숫자로 되돌린다. 정수 타입으로 바꾸면 값 강제가 풀린다.
- `GEMINI_API_KEY` 가 없으면 자동으로 오프라인 폴백 채점으로 동작한다 — 앱은 멈추지 않는다.
- 원본 프로토타입: `smilepat/LexileTest-Reading` 브랜치 `claude/core-meaning-lab-phase-0-iv1xag`
  의 `core-meaning-lab.html`.
- git이 PATH에 없는 PC가 있음 → `& "C:\Program Files\Git\cmd\git.exe"` 전체 경로 사용.
- 원격: https://github.com/smilepat/core-meaning-lab
