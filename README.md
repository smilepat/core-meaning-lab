# Core Meaning Lab

영어 단어를 **핵심 의미(core) 하나**에서 출발해 여러 뜻으로 확장되는 과정을 따라가며
익히는 한국어 학습 앱. 뜻을 따로따로 외우는 대신, "왜 그 뜻으로 뻗어나가는지"를
연결해서 기억하게 하는 것이 목표다.

`run` 을 예로 들면 — 달리다(core) → 운영하다 · 작동하다 · 흐르다. 세 갈래 모두
"한 방향으로 멈추지 않고 계속 나아간다"는 하나의 그림에서 나온다.

## 5단계 학습 흐름

| 단계 | 이름 | 하는 일 |
|---|---|---|
| STEP 1 | 제시 | 단어의 핵심 의미와 이미지를 본다 |
| STEP 2 | 의미확장지도 | 가지를 펼쳐 각 뜻이 core와 어떻게 이어지는지 확인한다 |
| STEP 3 | 문맥복원 | 문장 속 뜻을 한국어로 직접 써서 채점받는다 |
| STEP 4 | 역방향생성 | 목표 의미에 맞는 영어 문장을 직접 만든다 |
| STEP 5 | 리포트 | 단어별 숙련도(0~100%)를 확인한다 |

STEP 3·4는 3단계(0 미흡 / 1 보통 / 2 우수)로 채점되고, 한국어 피드백과 모범 답안이 함께 나온다.

현재 데이터: **30개 단어 · 90개 확장 의미 · 60개 문맥 과제 · 30개 역방향 과제.**

## 실행

```bash
npm install
cp .env.example .env      # Windows: copy .env.example .env
# .env 에 ANTHROPIC_API_KEY 를 채운다
npm run dev
```

`http://localhost:5173` 으로 접속한다. Vite(5173)가 `/api` 요청을 Express(5174)로 넘긴다.

### API 키가 없어도 실행된다

`ANTHROPIC_API_KEY` 가 없으면 앱이 **오프라인 폴백 채점**으로 동작한다. 문자열 매칭
수준이라 정확하지 않지만 학습 흐름 자체는 전부 돌아간다. 헤더의 점 표시로 현재 어떤
엔진을 쓰는지 확인할 수 있다.

### 운영 빌드

```bash
npm run build      # dist/ 생성
npm start          # Express가 API + dist/ 를 함께 서빙 (기본 5174)
```

## 구조

```
core-meaning-lab/
├─ client/                Vite + React + TypeScript
│   ├─ App.tsx            단어 선택 · 단계 전환 · 진도 상태
│   ├─ components/        단계별 화면 5종 + 결과 카드
│   ├─ lib/api.ts         /api 호출 래퍼
│   ├─ lib/progress.ts    localStorage 진도 기록
│   └─ styles.css         프로토타입 CSS 그대로 (다크모드 대응)
├─ server/                Express + Anthropic SDK
│   ├─ index.ts           라우트 · 입력 검증 · 운영 시 정적 서빙
│   ├─ grade.ts           Claude 채점 (구조화 출력)
│   └─ offline.ts         폴백 채점
├─ shared/
│   ├─ types.ts           client·server 공용 타입
│   └─ core30.ts          단어 데이터 (자동 생성 — 손으로 고치지 말 것)
└─ scripts/
    └─ extract-core30.cjs 프로토타입 HTML → core30.ts 추출기
```

## 채점이 동작하는 방식

`server/grade.ts` 가 `claude-opus-5` 를 호출한다. 형식은 프롬프트로 부탁하는 대신
**구조화 출력(`output_config.format`)의 JSON 스키마로 강제**하므로, 파싱 실패나
마크다운 코드펜스가 섞여 나오는 문제가 없다.

```ts
output_config: {
  effort: "low",                                    // 짧은 답안 판단이라 낮게
  format: { type: "json_schema", schema: GRADE_SCHEMA },
}
```

호출이 실패하거나 응답을 해석하지 못하면 오프라인 폴백으로 넘어간다 — 학습이 끊기지 않는다.

### 두 가지 안전 장치

1. **API 키는 서버에만 있다.** 브라우저는 `/api/grade/*` 만 호출하므로 키가 번들에
   실리지 않는다.
2. **프롬프트에 클라이언트 문자열을 넣지 않는다.** 클라이언트는 `wordId` 와 `taskIndex`
   만 보내고, 채점 대상 문장·정답은 서버가 `CORE30` 에서 찾는다. 임의의 텍스트를
   프롬프트에 밀어 넣을 수 없다.

## 단어 데이터 고치기

`shared/core30.ts` 는 원본 프로토타입에서 자동 추출된 파일이다. 직접 편집하지 말고
추출기를 다시 돌린다:

```bash
node scripts/extract-core30.cjs <원본 HTML 경로> shared/core30.ts
```

추출기는 `senseKey` 가 실제 `senses` 에 존재하는지, 필수 필드가 빠지지 않았는지까지
검사한다. 프로토타입에서 완전히 독립할 시점이 되면 이 파일을 정본으로 삼고 위
규칙을 지우면 된다.

## 원본

이 저장소는 `smilepat/LexileTest-Reading` 의 브랜치
`claude/core-meaning-lab-phase-0-iv1xag` 에 있던 단일 파일 프로토타입
`core-meaning-lab.html`(739줄)에서 출발했다. 프로토타입은 Claude 아티팩트 런타임의
`window.claude.complete` 에 의존해 독립 실행이 불가능했고, 이 저장소는 그 자리에
실제 백엔드를 넣은 것이다.
