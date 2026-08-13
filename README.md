# Core Meaning Lab

영어 단어를 **핵심 의미(core) 하나**에서 출발해 여러 뜻으로 확장되는 과정을 따라가며
익히는 한국어 학습 앱. 뜻을 따로따로 외우는 대신, "왜 그 뜻으로 뻗어나가는지"를
연결해서 기억하게 하는 것이 목표다.

`run` 을 예로 들면 — 계속 움직이다(core) → 운영하다 · 작동하다 · 이어지다. 세 갈래 모두
"한 방향으로 멈추지 않고 계속 나아간다"는 하나의 그림에서 나온다.

단어는 아무렇게나 고른 게 아니라 **수능·평가원·EBS 에서 쓸모가 큰 순서**로 줄을 세웠다.
자세한 것은 아래 [단어 우선순위](#단어-우선순위) 참고.

앱을 처음 열면 **안내 화면**이 먼저 뜬다 — 목적·원리·학습 체계·사용법. 한 번 닫으면
다시 뜨지 않고, 헤더의 **안내** 버튼으로 언제든 다시 열 수 있다
(`client/components/Guide.tsx`). 화면의 숫자와 어근 표는 카탈로그에서 직접 뽑으므로
데이터를 늘려도 같이 갱신된다.

### 300개에서 단어를 찾는 세 가지 길

단어가 300개가 되자 칩 한 줄로는 4군에서 **25화면**, 5군에서 **27화면**을 밀어야 했다.
그래서 셋을 두었다.

| | 언제 | 어떻게 |
|---|---|---|
| **검색** | 아는 단어를 찾을 때 | 맨 위 검색창. 군을 무시하고 300개 전체에서 철자·뜻으로 찾는다 |
| **어근 가족** | 5군을 훑을 때 | 어근 29가족을 먼저 고르면 그 안의 네 형제만 칩으로 (`shared/data/roots.ts`) |
| **30개 단계** | 4군을 훑을 때 | 알파벳 순 30개씩. 자연스러운 축이 없어 **임의적이지만 기준이 투명하다** |

리포트 맨 위에는 **"다음 단어"** 카드가 있다. 안 한 것 먼저, 다 했으면 숙련도가 가장
낮은 것을 고른다. 간격 반복(SRS)은 일부러 넣지 않았다 — 실제 학습자가 쓰는 것을 보기
전에는 복습 주기를 정할 근거가 없다.

## 5단계 학습 흐름

| 단계 | 이름 | 하는 일 |
|---|---|---|
| STEP 1 | 제시 | 단어의 핵심 의미와 이미지를 본다 |
| STEP 2 | 의미확장지도 | 가지를 펼쳐 각 뜻이 core와 어떻게 이어지는지 확인한다 |
| STEP 3 | 문맥복원 | 문장 속 뜻을 한국어로 직접 써서 채점받는다 |
| STEP 4 | 역방향생성 | 목표 의미에 맞는 영어 문장을 직접 만든다 |
| STEP 5 | 리포트 | 단어별 숙련도(0~100%)를 확인한다 |

STEP 3·4는 3단계(0 미흡 / 1 보통 / 2 우수)로 채점되고, 한국어 피드백과 모범 답안이 함께 나온다.

현재 데이터: **300개 단어 · 900개 확장 의미 · 600개 문맥 과제 · 300개 역방향 과제.**
**Core Meaning 300 완주** (2026-08-07).

## 단어 우선순위

뜻이 여러 개인 단어를 다 외우려 들면 끝이 없다. 그래서 "core 하나를 알면 나머지가
따라오는" 정도가 큰 것부터 군을 나눴다. 화면 위쪽 탭이 이 구분이다.

| 군 | 개수 | 성격 |
|---|---|---|
| **최우선 30** | 30 | 군을 가로지르는 순위 1~30. 시작점을 못 정하겠으면 1번부터. |
| 1군 최우선 핵심 | 20 | 하나의 core 에서 가장 많은 뜻이 뻗어나간다. `run` `address` `hold` `draw` `take` … |
| 2군 매우 중요 | 20 | 지문 전 영역에 고르게 깔린다. `account` `claim` `deal` `figure` `regard` … |
| 3군 추상 지문 빈출 | 20 | 논설·과학 지문의 라틴계 어휘. 어원이 곧 core 다. `derive` `assume` `suggest` … |
| 4군 확장 · 구체어 | 133 | 뜻이 쉬워 보여 오히려 틀리는 자리. `make` `use` `well` `out` `ground` `novel` … |
| 5군 확장 · 추상어 | 107 | 접두사만 갈아 끼운 한 식구. `persist` `succeed` `circumstance` `occur` `imply` … |

### 단어를 어떻게 골랐는지 — 코퍼스 대조 (2026-08-12)

1~3군 60개는 설계에서 확정한 목록이고, 4·5군 240개는 처음에 **판단으로** 채웠다.
나중에 `csat-vocab-coverage` 레포의 **수능 565 정본 기출 지문**(88,712 토큰)에 대조해 보니
쏠림이 드러났다 — 어근 가족을 "네 형제"로 맞추려고 넣은 5군 단어가 실제 지문에는
거의 안 나왔고, 반대로 `make`(230회) `use`(222회) 같은 최고빈도 다의어가 빠져 있었다.

그래서 **18개를 교체했다.**

| | 뺀 것 | 넣은 것 |
|---|---|---|
| 기준 | 565 정본에서 0~2회 | 50회 이상 + 진짜 다의어 |
| 예 | `vessel` `strain` `transfer` `deduce` `extract` | `make` `use` `become` `like` `change` `find` |

어근 가족이 4개 밑으로 떨어지지 않는 선에서만 뺐다. `persist` `inspect` `admit` 등도
0회지만 4인 가족이라 남겼다 — **빈도보다 학습 장치를 지키는 쪽을 택한 자리**다.

`group` `number` `problem` 처럼 빈도가 높아도 다의어가 아닌 단어는 넣지 않았다.
이 앱이 다루는 것은 어휘량이 아니라 다의성이다.

결과: 565 정본에 한 번도 안 나오는 단어 28개 → **18개**, 6회 이상 203개 → **221개**.

**1~3군은 설계에서 확정한 정본이라 개수를 늘리지 않는다** (각 20개, 테스트가 못 박고 있다).
300 으로 넓히는 분량은 4·5군에 쌓는다.

최우선 30개는 순서 자체가 설계다 — 1번 `run`, 2번 `address`, 3번 `hold` … 30번 `respond`.
앱은 이 순서를 기본 학습 경로로 쓴다.

3군과 5군을 따로 둔 이유: 이 단어들은 라틴어 어근이 그대로 core 라서 설명 방식이 다르다.
`involve` = in(안으로) + volvere(말다) → "안으로 말아 넣다" → 포함하다·수반하다.
데이터의 `core.image` 에 어원 그림을 함께 적어 두었다. 5군은 특히 **접두사만 갈아 끼운
한 식구**가 많아서, 한 뿌리를 잡으면 여러 단어가 한꺼번에 열린다:

| 뿌리 | 단어 |
|---|---|
| `sistere` 서다 | con**sist**(함께) · per**sist**(끝까지) · re**sist**(맞서) · in**sist**(위에) |
| `tenere` 붙들다 | con**tain**(함께) · re**tain**(뒤로) · ob**tain**(~향해) · at**tain**(닿아) |
| `ferre` 나르다 | con**fer**(함께) · in**fer**(안으로) · dif**fer**(따로) · suf**fer**(아래에서) · re**fer** · **offer** |
| `capere` 잡다 | ac**cept**(~쪽으로) · per**ceive**(속속들이) · con**ceive**(품어) · re**ceive**(되받아) |
| `spectare` 보다 | a**spect**(~쪽에서) · re**spect**(다시) · in**spect**(안을) · su**spect**(아래에서) |
| `mittere` 보내다 | ad**mit**(안으로) · com**mit**(맡겨) · per**mit**(통과시켜) · sub**mit**(아래로) |
| `tendere` 뻗다 | at**tend**(~쪽으로) · in**tend**(겨눠) · pre**tend**(앞으로) · con**tend**(맞대고) |
| `cedere` 가다 | pro**ceed**(앞으로) · ex**ceed**(선 밖으로) · pre**cede**(앞서) · suc**ceed**(뒤따라) |
| `stare` 서다 | con**stant**(굳게) · di**stance**(떨어져) · sub**stance**(아래서 받쳐) · circum**stance**(둘레에) |
| `trahere` 끌다 | at**tract**(~쪽으로) · con**tract**(함께 조여) · di**stract**(딴 데로) |
| `scribere` 쓰다 | de**scribe**(따라) · pre**scribe**(미리) · sub**scribe**(아래에) · in**scribe**(새겨) |
| `portare` 나르다 | ex**port**(밖으로) · re**port**(되가져와) · trans**port**(건너) · sup**port** |
| `currere` 달리다 | oc**cur**(마주 달려와) · re**cur**(되돌아) · con**cur**(함께) · in**cur**(달려 들어가) |
| `venire` 오다 | pre**vent**(앞질러) · inter**vene**(사이로) · con**vention**(함께) · **event**(밖으로) |
| `fundere` 붓다 | con**fuse**(뒤섞어) · re**fuse**(되돌려) · dif**fuse**(흩어) · in**fuse**(안으로) |
| `gradi` 걷다 | pro**gress**(앞으로) · re**gress**(뒤로) · ag**gressive**(~쪽으로) · **gradual**(한 걸음씩) |
| `ponere` 놓다 | com**pose**(함께) · ex**pose**(밖에) · im**pose**(위에) · dis**pose**(흩어) · op**pose**(앞을 막아) · pro**pose**(앞으로) · sup**pose**(밑에) |
| `struere` 쌓다 | con**struct**(함께) · in**struct**(안에) · ob**struct**(앞을 막아) · de**stroy**(헐어) |
| `plicare` 접다 | im**ply**(안으로) · com**ply**(맞춰) · re**ply**(되접어) · em**ploy**(끌어 넣어) |
| `vocare` 부르다 | e**voke**(밖으로) · pro**voke**(앞으로) · in**voke**(안으로) · ad**vocate**(곁으로) |
| `jacere` 던지다 | sub**ject**(아래에) · ob**ject**(앞에) · pro**ject**(앞으로) |
| `ducere` 이끌다 | in**duce**(안으로) · intro**duce**(안쪽으로) · con**duct**(함께) |
| `servare` 지키다 | pre**serve**(앞서) · con**serve**(축내지 않고) · re**serve**(뒤로) |
| `premere` 누르다 | im**press**(안으로) · sup**press**(아래로) · ex**press**(밖으로) |
| `tribuere` 나눠 주다 | at**tribute**(~쪽으로) · con**tribute**(함께) |
| `volvere` 말다 | in**volve**(안으로 말다) · e**volve**(밖으로 풀리다) |
| `vertere` 돌리다 | con**vert**(통째로) · re**verse**(뒤로) |

한 뿌리를 잡으면 넷이 한꺼번에 열린다. 앱에서 5군 탭을 열고 네 형제를 차례로 눌러 보면
core 가 접두사만큼만 달라지는 것이 보인다:

```text
con·sist  함께 서 있다        per·sist  끝까지 서 있다
re·sist   맞서 버티고 서다     in·sist   위에 딱 버티고 서다

a·spect   ~쪽에서 본 모습      re·spect  다시 돌아보다
in·spect  안을 들여다보다      su·spect  아래에서 슬쩍 올려다보다
```

`succeed` 가 이 방식의 값을 가장 잘 보여 준다. "성공하다"와 "계승하다"가 왜 한 단어인지는
따로 외울 일이 아니다 — core 가 **뒤따라 가다**이기 때문이다.
앞사람 뒤를 이으면 계승이고, 끝까지 따라가 닿으면 성공이다.

`circumstance` 도 마찬가지다. "상황"이라는 번역어보다 **둘레에 서 있는 것들**이 훨씬 정확하다 —
나를 빙 둘러싸고 서 있는 조건들. 같은 `stare`(서다) 뿌리에서 `substance` 는 **아래에 서서 받치는 것**,
`distance` 는 **떨어져 서 있음**, `constant` 는 **굳게 함께 서 있다** 가 된다.

⚠️ 닮았다고 다 한 식구는 아니다. `preserve` `conserve` `reserve` `observe` 의 뿌리는
**servare(지키다)** 인데 `serve` 는 **servire(섬기다)** 로 다른 낱말이다. 묶어서 설명하면 틀린다.

## 실행

```bash
npm install
cp .env.example .env      # Windows: copy .env.example .env
# .env 에 GEMINI_API_KEY 를 채운다 (https://aistudio.google.com/apikey)
npm run dev
```

`http://localhost:5173` 으로 접속한다. Vite(5173)가 `/api` 요청을 Express(5174)로 넘긴다.

### API 키가 없어도 실행된다

`GEMINI_API_KEY` 가 없으면 앱이 **오프라인 폴백 채점**으로 동작한다. 문자열 매칭
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
│   ├─ components/        단계별 화면 5종 + 결과 카드 + Guide(안내 화면)
│   ├─ lib/api.ts         /api 호출 래퍼
│   ├─ lib/progress.ts    localStorage 진도 기록
│   └─ styles.css         프로토타입 CSS 그대로 (다크모드 대응)
├─ server/                Express + Google Gen AI SDK
│   ├─ app.ts             createApp() — 라우트 · 입력 검증 (listen 하지 않는다)
│   ├─ index.ts           로컬 개발·자체 호스팅 진입점 (listen)
│   ├─ grade.ts           Gemini 채점 (구조화 출력)
│   └─ offline.ts         폴백 채점
├─ api/
│   └─ [...path].js       Vercel 서버리스 진입점 — 커밋되는 한 줄 shim (아래 설명)
├─ shared/
│   ├─ types.ts           client·server 공용 타입
│   ├─ catalog.ts         tier 파일 합치기 + 무결성 검사 (정본 조립)
│   └─ data/              단어 데이터 (손으로 고치는 정본)
│       ├─ tier1~3.ts       정본 60개 — 개수를 늘리지 않는다
│       ├─ tier4.ts         확장·구체어 (프로토타입 유산 20)
│       ├─ tier4b~4g.ts     확장·구체어 (저작분 6차)
│       ├─ tier5~5e.ts      확장·추상어 (5차)
│       └─ roots.ts         라틴 어근 가족 — 단어마다 붙이지 않고 한곳에 모은다
│                           파일 이름 = 군 + 저작 차수. 넓힐 때 새 파일을 만들어
│                           catalog.ts 의 ALL 에 이어 붙인다.
└─ tests/                 vitest — 카탈로그 · 폴백 채점 · API 계약 · 진도
```

## 채점이 동작하는 방식

`server/grade.ts` 가 `@google/genai` SDK로 `gemini-3.6-flash` 를 호출한다. 형식은
프롬프트로 부탁하는 대신 **구조화 출력의 스키마로 강제**하므로, 파싱 실패나 마크다운
코드펜스가 섞여 나오는 문제가 없다.

```ts
config: {
  systemInstruction: system,
  responseMimeType: "application/json",
  responseSchema: GRADE_SCHEMA,
}
```

스키마에서 `score` 를 문자열 enum `["0","1","2"]` 로 둔 이유가 있다 — Gemini 스키마의
`enum` 은 **문자열 배열만** 받는다(`Schema.enum?: string[]`). 정수 타입으로 두면 값
자체를 강제할 수 없어 3이나 -1 이 올 수 있다. 받은 뒤 `normalize()` 에서 숫자로
되돌리고, `level` 은 응답을 믿지 않고 `score` 에서 다시 계산한다.

호출이 실패하거나 응답을 해석하지 못하면 오프라인 폴백으로 넘어간다 — 학습이 끊기지 않는다.

### 두 가지 안전 장치

1. **API 키는 서버에만 있다.** 브라우저는 `/api/grade-context` 와 `/api/grade-reverse`
   만 호출하므로 키가 번들에 실리지 않는다.
2. **프롬프트에 클라이언트 문자열을 넣지 않는다.** 클라이언트는 `wordId` 와 `taskIndex`
   만 보내고, 채점 대상 문장·정답은 서버가 카탈로그에서 찾는다. 임의의 텍스트를
   프롬프트에 밀어 넣을 수 없다.

## 단어 데이터 고치기

`shared/data/` 아래 tier 파일들이 정본이다. **직접 고치면 된다.**
(2026-08-07 이전에는 프로토타입 HTML 에서 자동 추출한 `core30.ts` 가 정본이라
직접 편집이 금지였다. 지금은 추출기와 함께 졸업했다.)

단어 하나는 이렇게 생겼다:

```ts
{
  id: "involve", word: "involve", pos: "동사",
  tier: 1, rank: 16,                      // rank 0 = 최우선 30위 밖
  core:    { ko, image, exEn, exKo },     // ① core meaning
  senses:  [ { key, label, exEn, exKo, bridge }, … ],  // ② 의미 확장 지도 (3개 이상)
  context: [ { sentence, senseKey, gloss }, … ],       // ③④ 예문 + 복원 과제 (2개 이상)
  reverse: { senseKey, scene, sample },                // ⑤ 역방향 생성 과제
}
```

`bridge` 가 이 앱의 핵심이다 — core 와 그 뜻을 잇는 한 문장. 이게 부실하면
그냥 뜻 나열이 되어 버린다. `context[].sentence` 의 대상 단어는 `<b>` 로 감싼다.

`shared/catalog.ts` 가 tier 파일 전부를 합치면서 검사한다: `senseKey` 가 실제 가지를
가리키는지, `<b>` 강조가 있는지, 순위가 겹치지 않는지. 어긋나면 **앱이 뜰 때 바로
예외로 죽는다** — 조용히 잘못된 채로 돌지 않는다. 같은 검사를 `npm test` 도 돈다.

### 더 넓히기

목표였던 Core Meaning 300 은 채웠다. 더 넓힐 때는 **4·5군 파일에 이어 붙인다** —
1~3군은 정본이라 개수를 고정해 두었고 테스트가 그걸 못 박고 있다.
군을 새로 늘릴 때는 `shared/types.ts` 의 `Tier` 와 `TIERS` 만 고치면 화면 탭·리포트·
그룹 검사가 전부 따라온다 (`GroupKey` 도 `Tier` 에서 파생된다).

새 단어를 쓸 때 지킬 것:

- `core.ko` 는 **한 줄로 그림이 그려지는 말**이어야 한다. "다루다" 보다 "손으로 다루다".
- 라틴계면 `core.image` 끝에 어원을 괄호로 붙인다 — `(sub + tenere, 아래에서 붙들다)`.
- `bridge` 가 부실하면 그냥 뜻 나열이 된다. "왜 그 뜻이 되는가"를 한 문장으로.
- `context` 문장은 **수능 지문의 결**로 쓴다. 추상어일수록 논설문 문장이 낫다.

## 테스트

```bash
npm test            # vitest 1회 실행
npm run test:watch
npm run check       # typecheck + test + build — 커밋 전에 이걸 돌린다
```

`GEMINI_API_KEY` 없이 도는 것을 전제로 쓰여 있다. 채점 테스트는 오프라인 폴백을
대상으로 하고, 확인하는 것은 채점 품질이 아니라 **입력 검증과 응답 계약**이다.

## 배포 (Vercel)

<https://core-meaning-lab.vercel.app> — `main` 에 푸시하면 자동 배포된다.

정적 파일은 `dist/`, API 는 서버리스 함수 하나가 받는다. 둘 다 `server/app.ts` 의 같은
`createApp()` 을 쓰므로 로컬과 배포의 동작이 갈리지 않는다.

```bash
vercel --prod        # 수동 배포가 필요할 때
```

`GEMINI_API_KEY` 는 Vercel 환경변수에 넣는다 (Production·Preview·Development 모두 체크).
안 넣어도 배포는 되고, 그때는 오프라인 폴백으로 동작한다.

### 여기서 세 번 넘어졌다 — 건드리기 전에 읽을 것

배포해 봐야만 드러난 제약들이고, 구조가 지금 모양인 이유가 전부 여기 있다.

1. **`api/` 엔트리는 저장소에 커밋돼 있어야 한다.** Vercel 은 **소스**의 `api/` 를 보고
   함수를 등록한다. 빌드 중에 만들어 내면 CLI 배포는 통해도 **git 푸시 배포에서는 함수가
   통째로 없다** — 모든 `/api/*` 가 플랫폼 404 다. 그래서 `api/[...path].js` 는 커밋되는
   한 줄 shim 이고, 알맹이만 `dist-api/handler.js` 로 생성된다(`vercel.json` 의
   `functions.includeFiles` 가 함수 번들에 넣어 준다).
2. **엔트리에서 `.ts` 를 직접 import 하면 안 된다.** Vercel 은 `api/*.ts` 를 트랜스파일만
   하고 import 경로를 손대지 않는다. 이 저장소는 import 에 `.ts` 확장자를 쓰므로
   (`allowImportingTsExtensions`) 런타임에 `ERR_MODULE_NOT_FOUND` 로 죽는다.
   → `scripts/build-api.mjs` 가 esbuild 로 미리 한 파일로 묶는다.
3. **catch-all 은 `/api` 아래 한 단계까지만 잡는다.** `/api/grade/context` 는 함수에 닿기도
   전에 플랫폼 404 였다. 그래서 라우트가 `/api/grade-context` 로 평탄하다.
   진단법: 그 경로에 POST 해 보고 **Express 404**(`Cannot POST …`)면 함수까지 간 것,
   **Vercel 404**(`NOT_FOUND` + 요청 ID)면 라우팅이 못 간 것이다.

배포 후에는 반드시 실제로 찔러 본다 — 빌드 성공은 함수가 산다는 뜻이 아니다:

```bash
curl https://core-meaning-lab.vercel.app/api/health
# {"ok":true,"aiEnabled":false,"words":80}
```

## 원본

이 저장소는 `smilepat/LexileTest-Reading` 의 브랜치
`claude/core-meaning-lab-phase-0-iv1xag` 에 있던 단일 파일 프로토타입
`core-meaning-lab.html`(739줄)에서 출발했다. 프로토타입은 Claude 아티팩트 런타임의
`window.claude.complete` 에 의존해 독립 실행이 불가능했고, 이 저장소는 그 자리에
실제 백엔드를 넣은 것이다.
