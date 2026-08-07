@REPO_OPS.md

# CLAUDE.md — core-meaning-lab

멀티 PC 작업 규율은 위 **[REPO_OPS.md](REPO_OPS.md)** 에 있다 (저장소 공용).
아래는 이 저장소에만 해당하는 사항이다.

## 세션 시작 시 읽을 문서

- **[STATUS.md](STATUS.md)** — 지금 상태·진행률·다음 할 일.
- **[README.md](README.md)** — 실행 방법과 구조.

## 이 저장소만의 규칙

- **단어 데이터는 `shared/data/tier{1,2,3,4}.ts` 를 손으로 고친다.** 여기가 정본이다.
  (옛 `core30.ts` 는 프로토타입 HTML 에서 자동 추출된 파일이라 손대면 안 됐지만,
  2026-08-07 에 졸업시키고 지웠다. 추출 스크립트도 함께 지웠다.)
  `shared/catalog.ts` 가 네 파일을 합치면서 무결성까지 검사한다 — senseKey 가 실제 가지를
  가리키는지, 순위가 겹치지 않는지 등. 깨지면 앱이 뜰 때 바로 예외로 죽는다.
- **API 키는 서버에만 둔다.** `GEMINI_API_KEY` 를 클라이언트 코드나 `VITE_` 접두어
  환경변수로 옮기면 브라우저 번들에 그대로 실린다.
- 채점 프롬프트에 **클라이언트가 보낸 문자열을 넣지 않는다.** 문장·정답은 서버가
  `wordId` 로 카탈로그에서 찾는다 (`server/app.ts`).
- 커밋 전 `npm run check` (typecheck + test + build) 를 돌린다.

## 빠른 사실

- 스택: Vite + React + TypeScript (client) / Express + `@google/genai` (server).
- 단어 80개 = 우선순위 1군 20 + 2군 20 + 3군 20 + 확장 후보 20. 이 중 30개에 `rank` 1~30
  (최우선 30). 목표는 Core Meaning 300 이고, 넓힐 때는 tier 파일에 이어 붙이면 된다.
- 서버는 `createApp()`(server/app.ts)로 만든다. `listen` 은 `server/index.ts` 만 한다 —
  테스트와 Vercel 서버리스(`api/[...path].js`)가 같은 앱을 재사용하기 위해서다.
- **배포 구조를 건드리기 전에 README 의 "여기서 세 번 넘어졌다"를 읽을 것.** `api/` 엔트리를
  gitignore 하거나, 엔트리에서 `.ts` 를 직접 import 하거나, 라우트를 `/api/a/b` 로 두면
  전부 배포에서만 깨진다. 로컬 테스트는 멀쩡히 통과한다.
- 배포 후에는 `curl .../api/health` 로 실제로 찔러 본다. 빌드 성공 ≠ 함수 살아 있음.
- 이 PC 에서 5173/5174 가 다른 프로젝트와 겹쳤다. 먼저 뜬 쪽이 `::1` 에 바인드하면
  `localhost` 응답이 통째로 그쪽으로 간다 → `CLIENT_PORT=5183 PORT=5184 npm run dev`.
- 채점 모델: `gemini-3.6-flash`, 구조화 출력(`responseSchema`) 으로 형식 강제.
- Gemini 스키마의 `enum` 은 문자열 배열만 받는다 → `score` 를 `["0","1","2"]` 로 두고
  `normalize()` 에서 숫자로 되돌린다. 정수 타입으로 바꾸면 값 강제가 풀린다.
- `GEMINI_API_KEY` 가 없으면 자동으로 오프라인 폴백 채점으로 동작한다 — 앱은 멈추지 않는다.
- 원본 프로토타입: `smilepat/LexileTest-Reading` 브랜치 `claude/core-meaning-lab-phase-0-iv1xag`
  의 `core-meaning-lab.html`.
- git이 PATH에 없는 PC가 있음 → `& "C:\Program Files\Git\cmd\git.exe"` 전체 경로 사용.
- 원격: https://github.com/smilepat/core-meaning-lab
