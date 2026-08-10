---
project: core-meaning-lab
status: active
progress: 90
updated: 2026-08-07
pc: DESKTOP-JDF6C5D
---

# core-meaning-lab — STATUS

## 🎯 한 줄 상태

**돌아간다.** 수능 우선순위 **120단어** · 테스트 52개 · `main` 푸시 자동 배포 ·
실제 Gemini 채점 켜짐 — <https://core-meaning-lab.vercel.app>.
저장소는 2026-08-07 에 **public** 으로 전환했다 (전환 전 히스토리 시크릿 스캔 통과).
남은 것은 기능이 아니라 **내용이다 — Core Meaning 300 까지 180개.** 지금 40% 지점.

## 📊 진행 체크리스트

- [x] 저장소 생성 · 스택 결정 (Vite + React + TS + Express)
- [x] 프로토타입 데이터 추출 (30단어)
- [x] 프로토타입 CSS 이식 (다크모드·모바일 대응 그대로)
- [x] 5단계 화면 React 이식 (제시 / 의미확장지도 / 문맥복원 / 역방향생성 / 리포트)
- [x] Express 채점 백엔드 — 구조화 출력 + 오프라인 폴백
- [x] 채점 공급자를 Anthropic → Gemini(`gemini-3.6-flash`)로 교체
- [x] API 키 서버 격리 · 프롬프트 주입 차단(서버가 문장을 조회)
- [x] 실제 API 키로 채점 동작 확인 (문맥·역방향 각각 정답/오답 케이스)
- [x] **수능 우선순위 체계 도입** — 1군 20 / 2군 20 / 3군 20 / 확장 20, 최우선 30개 순위
- [x] **단어 30 → 80 확장**, `core30.ts` 졸업(삭제) → `shared/data/tier1~4.ts` 가 정본
- [x] **티어 탭 UI** — 80단어를 그룹으로 나눠 고르고, 리포트에 그룹별 진도 막대
- [x] 테스트 49개 (카탈로그 무결성 · 오프라인 폴백 · API 계약 · 진도 계산)
- [x] **Vercel 배포** — 정적 dist/ + 서버리스 함수 1개, 엔드포인트 4종 실동작 확인
- [x] **브라우저에서 5단계 흐름 실제 확인** — 헤드리스 크로미움으로 제시→의미확장→문맥복원→
      역방향→리포트 한 바퀴 + 티어 탭 전환 + 다크모드, 콘솔 에러 0건
- [x] **PR #1 병합 → `main` 일원화**, 브랜치 정리
- [x] **git 푸시 자동 배포 성립** — `api/` 엔트리를 커밋되는 shim 으로 바꿔 해결.
      (전에는 CLI 배포만 통하고 git 배포는 함수가 통째로 없었다. README "세 번 넘어졌다" 참고)
- [x] **`GEMINI_API_KEY` 등록 → 실제 AI 채점 동작** (Production·Preview·Development 3개 환경).
      Preview 는 CLI 가 프롬프트를 요구해 실패 → REST API 로 우회 (전역 규칙대로).
      로컬·프로덕션에서 정답/오답 각각 확인, 클라이언트 번들에 키 없음도 확인.
- [x] **저장소 public 전환** — 전환 전 히스토리 전체 시크릿 스캔(.env 커밋 이력·키 패턴) 통과
- [x] **80 → 120 확장** — 4군 확장·구체어 +20(`last` `matter` `count` `issue` `stick` …),
      5군 확장·추상어 +20(`attribute` `impose` `expose` `subject` `sustain` …).
      1~3군 정본 60개는 손대지 않았고, 테스트가 각 20개로 못 박는다.
- [ ] **120 → 300 확장** (남은 180개)  ← 현재 위치

## ⏭️ 다음에 할 일 (Next Actions)

1. **실제 학습자에게 한 번 태워 본다.** 특히 3군(추상 라틴계)의 어원 설명이 통하는지.
   `bridge` 문장이 이 앱의 알맹이라, 여기서 막히면 기능이 아니라 **데이터를 고쳐야 한다**.
2. **단어 확장 (120 → 300).** 4·5군 파일에 이어 붙인다. 1~3군은 정본이라 늘리지 않는다.
   다음 묶음 후보: `tain` 계열(contain·retain·obtain·maintain은 이미 있음),
   `duce` 계열(induce·deduce·introduce), `press` 계열(compress·suppress·impress),
   그리고 일상 다의어 `run`-급 남은 것들(`case` `ground` `field` `hold`-류 파생).
3. 새 PC 에서 이어받을 때: `git clone` → `npm install` → `vercel env pull .env.local`
   (또는 `.env` 에 `GEMINI_API_KEY` 직접 기입) → `npm run dev`.

> 이 PC(DESKTOP-JDF6C5D)에서는 다른 프로젝트가 5173/5174 를 이미 쓰고 있었다.
> 먼저 뜬 쪽이 `::1` 에 바인드하면 `localhost` 요청이 통째로 그쪽으로 가서
> "우리 서버는 떴다는데 응답은 남의 앱"이 된다. 겹치면 포트를 바꿔 띄운다:
> `CLIENT_PORT=5183 PORT=5184 npm run dev`

## 🤔 결정 대기 (Decisions Needed)

- **Gemini 키 사용량 관찰**: 키는 등록해 돌아간다. 다만 저장소가 public 이 되었으므로
  URL 이 퍼지면 호출이 늘 수 있다. 할당량을 한 번 지켜보고, 필요하면 이 프로젝트 전용 키로
  가르거나 채점 호출에 제한(rate limit)을 두는 것을 고려한다.
- **진도 저장 위치**: 지금은 브라우저 `localStorage` 라 기기 간 공유가 안 된다.
  여러 기기에서 이어서 학습하려면 서버 DB가 필요하다.
- **4군(확장 후보) 20개의 처지**: `break` `light` `set` `line` 등 옛 프로토타입 단어다.
  수능 우선순위 목록에는 없지만 다의어로는 값이 있어 일단 남겨 두었다.
  Core Meaning 300 에 정식 편입할지, 빼고 3군을 늘릴지 판단 필요.
- **300개 확장 방식**: 지금은 단어마다 사람이 쓴다(core·bridge·예문 5종). 품질은 좋지만 느리다.
  LLM 초안 → 사람 검수로 갈지 결정 필요.

## 🔗 Claude Code 재개 프롬프트

"STATUS.md 읽고 core-meaning-lab 이어서 하자"
