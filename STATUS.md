---
project: core-meaning-lab
status: active
progress: 25
updated: 2026-08-06
pc: LAPTOP-H10A7AH0
---

# core-meaning-lab — STATUS

## 🎯 한 줄 상태

프로토타입(단일 HTML)을 Vite + React + TS + Express 앱으로 이식 완료. 채점은 Gemini
API를 쓰며, 키가 없으면 오프라인 폴백으로 떨어진다. 아직 테스트와 배포는 없다.

## 📊 진행 체크리스트

- [x] 저장소 생성 · 스택 결정 (Vite + React + TS + Express)
- [x] 프로토타입 CORE30 데이터 추출 (30단어 / 90의미 / 60문맥 / 30역방향, 무결성 검사 통과)
- [x] 프로토타입 CSS 이식 (다크모드·모바일 대응 그대로)
- [x] 5단계 화면 React 이식 (제시 / 의미확장지도 / 문맥복원 / 역방향생성 / 리포트)
- [x] Express 채점 백엔드 — 구조화 출력 + 오프라인 폴백
- [x] 채점 공급자를 Anthropic → Gemini(`gemini-3.6-flash`)로 교체
- [x] API 키 서버 격리 · 프롬프트 주입 차단(서버가 문장을 조회)
- [ ] 실제 API 키로 채점 동작 확인  ← 현재 위치
- [ ] 테스트 (채점 스키마 계약 · 오프라인 폴백 · 진도 계산)
- [ ] 배포 (Vercel / Railway 등)
- [ ] 단어 30개 → 확장, `core30.ts` 를 프로토타입에서 독립시키기

## ⏭️ 다음에 할 일 (Next Actions)

1. `.env` 에 `GEMINI_API_KEY` 를 넣고 `npm run dev` 로 STEP 3·4 채점을 실제로 확인.
   헤더 점이 초록이면 AI 채점, 회색이면 오프라인 폴백이다.
   키 발급: <https://aistudio.google.com/apikey>
2. 채점 품질 확인 후 모델 조정 여부 결정 (`gemini-3.6-flash` → 더 큰 모델).
3. 최소 테스트 추가 — 오프라인 폴백 점수 계산과 `/api/grade/*` 입력 검증부터.

## 🤔 결정 대기 (Decisions Needed)

- **배포 대상**: 서버가 필요하므로 GitHub Pages는 불가. Vercel(서버리스 함수) 또는
  Railway/Render(상시 서버) 중 선택 필요.
- **진도 저장 위치**: 지금은 브라우저 `localStorage` 라 기기 간 공유가 안 된다.
  여러 기기에서 이어서 학습하려면 서버 DB가 필요하다 (부모 저장소는 drizzle 사용).
- **`core30.ts` 독립 시점**: 단어를 늘리기 시작하면 추출 스크립트가 아니라 이 파일이
  정본이 되어야 한다.

## 🔗 Claude Code 재개 프롬프트

"STATUS.md 읽고 core-meaning-lab 이어서 하자"
