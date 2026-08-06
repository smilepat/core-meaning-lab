---
project: core-meaning-lab
status: active
progress: 35
updated: 2026-08-06
pc: LAPTOP-H10A7AH0
---

# core-meaning-lab — STATUS

## 🎯 한 줄 상태

프로토타입(단일 HTML)을 Vite + React + TS + Express 앱으로 이식 완료. **실제 Gemini
채점이 동작하는 것까지 확인**했다. 키가 없으면 오프라인 폴백으로 떨어진다.
아직 테스트 코드와 배포는 없다.

## 📊 진행 체크리스트

- [x] 저장소 생성 · 스택 결정 (Vite + React + TS + Express)
- [x] 프로토타입 CORE30 데이터 추출 (30단어 / 90의미 / 60문맥 / 30역방향, 무결성 검사 통과)
- [x] 프로토타입 CSS 이식 (다크모드·모바일 대응 그대로)
- [x] 5단계 화면 React 이식 (제시 / 의미확장지도 / 문맥복원 / 역방향생성 / 리포트)
- [x] Express 채점 백엔드 — 구조화 출력 + 오프라인 폴백
- [x] 채점 공급자를 Anthropic → Gemini(`gemini-3.6-flash`)로 교체
- [x] API 키 서버 격리 · 프롬프트 주입 차단(서버가 문장을 조회)
- [x] 실제 API 키로 채점 동작 확인 (문맥·역방향 각각 정답/오답 케이스)
- [ ] 테스트 (채점 스키마 계약 · 오프라인 폴백 · 진도 계산)  ← 현재 위치
- [ ] 배포 (Vercel / Railway 등)
- [ ] 단어 30개 → 확장, `core30.ts` 를 프로토타입에서 독립시키기

## ⏭️ 다음에 할 일 (Next Actions)

1. 최소 테스트 추가 — 오프라인 폴백 점수 계산과 `/api/grade/*` 입력 검증부터.
2. 브라우저에서 5단계 흐름을 직접 한 바퀴 돌려 UI 확인 (`npm run dev` → localhost:5173).
   지금까지 검증은 전부 서버 API 수준이고, 화면은 아직 사람 눈으로 안 봤다.
3. 배포 대상 결정 후 환경변수(`GEMINI_API_KEY`) 설정.

## 🤔 결정 대기 (Decisions Needed)

- **배포 대상**: 서버가 필요하므로 GitHub Pages는 불가. Vercel(서버리스 함수) 또는
  Railway/Render(상시 서버) 중 선택 필요.
- **Gemini 키 공유**: 지금 `.env` 의 키는 `restoration-reader` 와 같은 키다. 할당량을
  공유하므로, 배포하거나 사용량이 늘면 이 프로젝트 전용 키로 분리하는 게 좋다.
- **진도 저장 위치**: 지금은 브라우저 `localStorage` 라 기기 간 공유가 안 된다.
  여러 기기에서 이어서 학습하려면 서버 DB가 필요하다 (부모 저장소는 drizzle 사용).
- **`core30.ts` 독립 시점**: 단어를 늘리기 시작하면 추출 스크립트가 아니라 이 파일이
  정본이 되어야 한다.

## 🔗 Claude Code 재개 프롬프트

"STATUS.md 읽고 core-meaning-lab 이어서 하자"
