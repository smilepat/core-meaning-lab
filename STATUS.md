---
project: core-meaning-lab
status: active
progress: 70
updated: 2026-08-07
pc: DESKTOP-JDF6C5D
---

# core-meaning-lab — STATUS

## 🎯 한 줄 상태

수능 우선순위 체계(1~3군 60개 + 확장 후보 20개 = **80단어**)를 넣고, 테스트 49개를 붙이고,
**Vercel 프로덕션 배포까지 끝냈다** — <https://core-meaning-lab.vercel.app>.
지금은 `GEMINI_API_KEY` 가 배포 환경에 없어서 오프라인 폴백으로 돈다. 키만 넣으면 AI 채점이 켜진다.

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
- [ ] 배포 환경에 `GEMINI_API_KEY` 설정 → AI 채점 켜기  ← 현재 위치 (키 선택은 아래 결정 대기)
- [ ] 80 → 300 확장 (Core Meaning 300)

## ⏭️ 다음에 할 일 (Next Actions)

1. **`GEMINI_API_KEY` 를 Vercel 에 넣는다.** 아래 "결정 대기"의 키 선택을 먼저 정할 것.

   ```bash
   vercel env add GEMINI_API_KEY production   # preview, development 도 각각
   vercel env pull .env.local                 # 로컬 동기화
   vercel deploy --prod --yes
   ```

   확인: `curl https://core-meaning-lab.vercel.app/api/health` 의 `aiEnabled` 가 `true` 가 되면 켜진 것.
2. 실제 학습자에게 한 번 태워 보고 3군(추상 라틴계) 설명이 통하는지 본다.
   `bridge` 문장이 이 앱의 알맹이라 여기서 막히면 데이터를 고쳐야 한다.
3. 단어 확장. 3군이 수능 지문에서 효용이 가장 크므로 여기부터 늘리는 게 낫다.

> 이 PC(DESKTOP-JDF6C5D)에서는 다른 프로젝트가 5173/5174 를 이미 쓰고 있었다.
> 먼저 뜬 쪽이 `::1` 에 바인드하면 `localhost` 요청이 통째로 그쪽으로 가서
> "우리 서버는 떴다는데 응답은 남의 앱"이 된다. 겹치면 포트를 바꿔 띄운다:
> `CLIENT_PORT=5183 PORT=5184 npm run dev`

## 🤔 결정 대기 (Decisions Needed)

- **Gemini 키 선택** ⚠️ 지금 배포에는 키가 없다. `restoration-reader` 와 같은 키를 쓸지,
  이 프로젝트 전용 키를 새로 발급할지 정해야 한다. 배포된 앱은 사용량이 늘 수 있으므로
  전용 키 쪽이 낫다고 본다. (키를 다루는 일이라 사람이 결정할 몫으로 남겨 둠.)
- **진도 저장 위치**: 지금은 브라우저 `localStorage` 라 기기 간 공유가 안 된다.
  여러 기기에서 이어서 학습하려면 서버 DB가 필요하다.
- **4군(확장 후보) 20개의 처지**: `break` `light` `set` `line` 등 옛 프로토타입 단어다.
  수능 우선순위 목록에는 없지만 다의어로는 값이 있어 일단 남겨 두었다.
  Core Meaning 300 에 정식 편입할지, 빼고 3군을 늘릴지 판단 필요.
- **300개 확장 방식**: 지금은 단어마다 사람이 쓴다(core·bridge·예문 5종). 품질은 좋지만 느리다.
  LLM 초안 → 사람 검수로 갈지 결정 필요.

## 🔗 Claude Code 재개 프롬프트

"STATUS.md 읽고 core-meaning-lab 이어서 하자"
