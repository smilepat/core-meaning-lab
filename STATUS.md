---
project: core-meaning-lab
status: active
progress: 95
updated: 2026-08-07
pc: DESKTOP-JDF6C5D
---

# core-meaning-lab — STATUS

## 🎯 한 줄 상태

🎉 **Core Meaning 300 완주.** 300단어 · 900 의미가지 · 600 문맥과제 · 300 역방향과제,
테스트 53개, `main` 푸시 자동 배포, 실제 Gemini 채점 —
<https://core-meaning-lab.vercel.app>. 저장소는 **public**.
목표했던 데이터는 다 채웠다. 이제 남은 것은 **실제 학습자에게 태워 보는 일**이다.

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
- [x] **80 → 120 확장** — 4군 +20(`last` `matter` `count` `issue` `stick` …),
      5군 신설 +20(`attribute` `impose` `expose` `subject` `sustain` …).
- [x] **120 → 160 확장** — 4군 +20(`case` `ground` `field` `yield` `bound` `tell` …),
      5군 +20을 **어근 가족**으로 묶어 저작: sistere(서다) 4형제 · tenere(붙들다) 4형제 ·
      ducere · premere · servare · vertere 계열. README 에 뿌리별 표.
      1~3군 정본 60개는 계속 손대지 않았고, 테스트가 각 20개로 못 박는다.
- [x] **160 → 200 확장** — 5군 +20을 **다섯 어근 × 네 형제**로 대칭 저작
      (ferre · capere · spectare · mittere · tendere), 4군 +20은 "쉬운 뜻이 먼저 튀어나와
      지문을 망치는" 부류(`novel` `article` `patient` `just` `plain` …).
- [x] **200 → 240 확장** — 5군 +20을 또 다섯 어근 × 네 형제로
      (ponere · cedere · struere · plicare · vocare), 4군 +20은 "명사로만 외운 단어가
      동사로 나오는" 자리(`book` `stress` `second` `spare` `mine` …).
      `succeed` 가 이 방식의 값을 가장 잘 보여 준다 — core "뒤따라 가다" 하나에서
      성공하다·계승하다가 함께 나온다.
- [x] **240 → 300 확장 · 완주** — 5군 +32를 여덟 어근 × 네 형제로
      (trahere · scribere · portare · currere · venire · stare · fundere · gradi),
      4군 +28은 "추상 지문에서 갑자기 다른 얼굴로 나오는 쉬운 단어"
      (`interest` `nature` `party` `means` `stake` …).
      `circumstance` = 둘레에 서 있는 것들 — 번역어 "상황"보다 정확하다.
- [x] 테스트에 **역방향 과제 300건 전수 검사** 추가. 문맥 600건 검사는 순차 호출로
      5초 타임아웃에 걸려 병렬로 바꿨다 (실패가 아니라 느림이었다).
- [ ] **실제 학습자 검증**  ← 현재 위치

## ⏭️ 다음에 할 일 (Next Actions)

1. **실제 학습자에게 한 번 태워 본다.** 특히 3군(추상 라틴계)의 어원 설명이 통하는지.
   `bridge` 문장이 이 앱의 알맹이라, 여기서 막히면 기능이 아니라 **데이터를 고쳐야 한다**.
2. **데이터는 다 채웠으니 이제 쓰임새를 본다.** 더 넓힐 여지는 있지만(구동사 계열
   `run into`/`stand for`/`put off`, `flectere`·`ligare`·`tangere` 가족) 300 을 채운 지금은
   **개수보다 검증이 남았다.** 넓힐 때는 4·5군 파일에 이어 붙이고 1~3군은 늘리지 않는다.
3. **rate limit 검토.** 저장소가 public 이라 URL 이 퍼지면 `/api/grade-*` 가 그대로 열려 있다.
   Gemini 할당량이 깎이는 통로다 — 사용량을 지켜보고 필요하면 제한을 건다.
4. 새 PC 에서 이어받을 때: `git clone` → `npm install` → `vercel env pull .env.local`
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
