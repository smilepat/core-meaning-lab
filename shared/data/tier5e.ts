// Tier 5 확장 5차 — 추상 라틴계 32개. 여덟 어근 × 네 형제.
//
//   trahere 끌다   : attract · contract · extract · distract
//   scribere 쓰다  : describe · prescribe · subscribe · inscribe
//   portare 나르다 : export · import · report · transport
//   currere 달리다 : occur · recur · concur · incur
//   venire 오다    : prevent · intervene · convention · event
//   stare 서다     : constant · distance · substance · circumstance
//   fundere 붓다   : confuse · refuse · diffuse · infuse
//   gradi 걷다     : progress · regress · aggressive · gradual
//
// stare 가족이 특히 값지다. circumstance 가 "둘레에 서 있는 것"이라는 걸 알면
// "상황"이라는 번역어보다 훨씬 정확하게 읽힌다 — 나를 둘러싸고 서 있는 조건들.
import type { Word } from "../types.ts";

export const TIER5E: Word[] = [
  // ── trahere 끌다 ─────────────────────────────────────────────
  {
    id: "attract",
    word: "attract",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "~쪽으로 끌어당기다",
      image: "자석처럼 상대를 내 쪽으로 끌어오는 그림 (ad + trahere, ~로 끌다)",
      exEn: "Magnets attract iron.",
      exKo: "자석은 철을 끌어당긴다.",
    },
    senses: [
      {
        key: "drawInterest",
        label: "(관심을) 끌다",
        exEn: "The exhibit attracted huge crowds.",
        exKo: "그 전시는 엄청난 인파를 끌었다.",
        bridge: "시선을 내 쪽으로 당겨오다",
      },
      {
        key: "appeal",
        label: "매력을 느끼게 하다",
        exEn: "What attracted her to the job?",
        exKo: "무엇이 그녀를 그 일로 이끌었는가?",
        bridge: "마음이 그쪽으로 끌려가다",
      },
      {
        key: "pull",
        label: "(물리적으로) 끌다",
        exEn: "Gravity attracts every mass.",
        exKo: "중력은 모든 질량을 끌어당긴다.",
        bridge: "힘으로 이쪽으로 당기다",
      },
    ],
    context: [
      {
        sentence: "Flowers that <b>attract</b> more insects leave more offspring.",
        senseKey: "drawInterest",
        gloss: "끌어들이다·유인하다",
      },
      {
        sentence: "The moon <b>attracts</b> the oceans and creates the tides.",
        senseKey: "pull",
        gloss: "(물리적으로) 끌어당기다",
      },
    ],
    reverse: {
      senseKey: "drawInterest",
      scene: "그 발표가 전 세계의 관심을 끌었다는 뜻으로",
      sample: "The announcement attracted worldwide attention.",
    },
  },
  {
    id: "contract",
    word: "contract",
    pos: "명사·동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "함께 끌어당겨 조이다",
      image: "양쪽에서 끌어당겨 하나로 죄어 묶는 그림 (con + trahere, 함께 끌다)",
      exEn: "They signed a contract.",
      exKo: "그들은 계약을 맺었다.",
    },
    senses: [
      {
        key: "shrink",
        label: "수축하다·줄어들다",
        exEn: "Metal contracts as it cools.",
        exKo: "금속은 식으면서 수축한다.",
        bridge: "안쪽으로 끌려 조여들다",
      },
      {
        key: "agreement",
        label: "계약",
        exEn: "The contract runs for three years.",
        exKo: "그 계약은 3년간 유효하다.",
        bridge: "양쪽을 끌어당겨 묶어 놓은 것",
      },
      {
        key: "catch",
        label: "(병에) 걸리다",
        exEn: "He contracted the disease abroad.",
        exKo: "그는 해외에서 그 병에 걸렸다.",
        bridge: "병을 몸 쪽으로 끌어들이다",
      },
    ],
    context: [
      {
        sentence: "Muscles <b>contract</b> and relax in a steady rhythm.",
        senseKey: "shrink",
        gloss: "수축하다",
      },
      {
        sentence: "He <b>contracted</b> malaria while working abroad.",
        senseKey: "catch",
        gloss: "(병에) 걸리다",
      },
    ],
    reverse: {
      senseKey: "shrink",
      scene: "추운 날씨에 그 물질이 수축한다는 뜻으로",
      sample: "The material contracts in cold weather.",
    },
  },
  {
    id: "extract",
    word: "extract",
    pos: "동사·명사",
    tier: 5,
    rank: 0,
    core: {
      ko: "밖으로 끌어내다",
      image: "박혀 있던 것을 힘주어 뽑아내는 그림 (ex + trahere, 밖으로 끌다)",
      exEn: "The dentist extracted a tooth.",
      exKo: "치과의사가 이를 뽑았다.",
    },
    senses: [
      {
        key: "obtain",
        label: "뽑아내다·추출하다",
        exEn: "Oil is extracted from the seeds.",
        exKo: "기름은 그 씨앗에서 추출된다.",
        bridge: "속에 든 것을 밖으로 끌어내다",
      },
      {
        key: "elicit",
        label: "(정보를) 얻어 내다",
        exEn: "They extracted a confession from him.",
        exKo: "그들은 그에게서 자백을 받아 냈다.",
        bridge: "감춘 것을 끌어내다",
      },
      {
        key: "excerpt",
        label: "발췌",
        exEn: "Read this extract from the novel.",
        exKo: "그 소설의 이 발췌문을 읽어라.",
        bridge: "전체에서 뽑아낸 한 토막",
      },
    ],
    context: [
      {
        sentence: "Researchers <b>extract</b> DNA from bones thousands of years old.",
        senseKey: "obtain",
        gloss: "추출하다·뽑아내다",
      },
      {
        sentence: "Good readers <b>extract</b> the argument from a mass of detail.",
        senseKey: "elicit",
        gloss: "끌어내다·건져 내다",
      },
    ],
    reverse: {
      senseKey: "obtain",
      scene: "과학자들이 그 식물에서 유용한 물질을 추출한다는 뜻으로",
      sample: "Scientists extract a useful substance from the plant.",
    },
  },
  {
    id: "distract",
    word: "distract",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "딴 데로 끌어 흩다",
      image: "한곳에 모여 있던 주의를 옆으로 잡아 끌어 흩뜨리는 그림 (dis + trahere, 따로 끌다)",
      exEn: "Noise distracted him.",
      exKo: "소음이 그의 주의를 흩뜨렸다.",
    },
    senses: [
      {
        key: "divert",
        label: "주의를 돌리다",
        exEn: "The debate distracted attention from the real issue.",
        exKo: "그 논쟁은 진짜 쟁점에서 관심을 돌려놓았다.",
        bridge: "주의를 딴 데로 끌어가다",
      },
      {
        key: "disturb",
        label: "집중을 방해하다",
        exEn: "Phones distract students during class.",
        exKo: "휴대폰이 수업 중 학생들의 집중을 방해한다.",
        bridge: "모아 둔 주의를 흩어 놓다",
      },
      {
        key: "unsettle",
        label: "심란하게 하다",
        exEn: "He seemed distracted all morning.",
        exKo: "그는 아침 내내 정신이 딴 데 가 있었다.",
        bridge: "마음이 여러 갈래로 끌려 다니다",
      },
    ],
    context: [
      {
        sentence: "A single notification is enough to <b>distract</b> the reader for minutes.",
        senseKey: "disturb",
        gloss: "주의를 흩뜨리다",
      },
      {
        sentence: "The argument <b>distracts</b> from a much simpler explanation.",
        senseKey: "divert",
        gloss: "(~에서) 눈을 돌리게 하다",
      },
    ],
    reverse: {
      senseKey: "disturb",
      scene: "작은 소리도 그녀의 집중을 방해한다는 뜻으로",
      sample: "Even a small sound distracts her.",
    },
  },

  // ── scribere 쓰다 ────────────────────────────────────────────
  {
    id: "describe",
    word: "describe",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "따라 그리듯 써 내려가다",
      image: "본 것의 윤곽을 따라가며 그대로 적는 그림 (de + scribere, 따라 쓰다)",
      exEn: "Describe what you saw.",
      exKo: "본 것을 말해 보라.",
    },
    senses: [
      {
        key: "depict",
        label: "묘사하다·설명하다",
        exEn: "The report describes the process in detail.",
        exKo: "그 보고서는 과정을 자세히 설명한다.",
        bridge: "대상을 따라가며 그려 내다",
      },
      {
        key: "characterize",
        label: "~라고 일컫다 (describe as)",
        exEn: "He described the plan as reckless.",
        exKo: "그는 그 계획을 무모하다고 평했다.",
        bridge: "그렇게 그려서 이름 붙이다",
      },
      {
        key: "trace",
        label: "(도형을) 그리다",
        exEn: "The planet describes an ellipse.",
        exKo: "그 행성은 타원을 그린다.",
        bridge: "지나간 자리가 선을 그린다",
      },
    ],
    context: [
      {
        sentence: "Most species have never been <b>described</b> by science.",
        senseKey: "depict",
        gloss: "기재되다·기술되다",
      },
      {
        sentence: "Critics <b>described</b> the result as a turning point.",
        senseKey: "characterize",
        gloss: "~라고 평하다",
      },
    ],
    reverse: {
      senseKey: "characterize",
      scene: "그녀는 그 발견을 우연이라고 표현했다는 뜻으로",
      sample: "She described the discovery as an accident.",
    },
  },
  {
    id: "prescribe",
    word: "prescribe",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "미리 써서 정해 놓다",
      image: "무엇을 할지 앞서 적어 두어 따르게 하는 그림 (prae + scribere, 앞서 쓰다)",
      exEn: "The doctor prescribed rest.",
      exKo: "의사는 휴식을 처방했다.",
    },
    senses: [
      {
        key: "order",
        label: "규정하다·정해 두다",
        exEn: "The law prescribes strict penalties.",
        exKo: "그 법은 엄격한 처벌을 규정한다.",
        bridge: "앞서 적어 두어 따르게 하다",
      },
      {
        key: "medicine",
        label: "처방하다",
        exEn: "Antibiotics are prescribed too often.",
        exKo: "항생제가 너무 자주 처방된다.",
        bridge: "쓸 약을 미리 적어 주다",
      },
      {
        key: "recommend",
        label: "권하다",
        exEn: "The book prescribes no single method.",
        exKo: "그 책은 단 하나의 방법을 내세우지 않는다.",
        bridge: "이렇게 하라고 적어 주다",
      },
    ],
    context: [
      {
        sentence: "Grammar books <b>prescribe</b> rules that speakers often ignore.",
        senseKey: "order",
        gloss: "규정하다·처방하듯 정하다",
      },
      {
        sentence: "The treatment was <b>prescribed</b> for a different illness.",
        senseKey: "medicine",
        gloss: "처방되다",
      },
    ],
    reverse: {
      senseKey: "order",
      scene: "그 규정이 정확한 절차를 정해 둔다는 뜻으로",
      sample: "The rule prescribes the exact procedure.",
    },
  },
  {
    id: "subscribe",
    word: "subscribe",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "아래에 이름을 써넣다",
      image: "문서 아래에 서명해 그 뜻에 자기를 얹는 그림 (sub + scribere, 아래에 쓰다)",
      exEn: "She subscribes to two magazines.",
      exKo: "그녀는 잡지 두 종을 구독한다.",
    },
    senses: [
      {
        key: "agreeWith",
        label: "(견해에) 동의하다 (subscribe to)",
        exEn: "Few scientists subscribe to that view.",
        exKo: "그 견해에 동의하는 과학자는 드물다.",
        bridge: "그 주장 아래에 이름을 적다",
      },
      {
        key: "receive",
        label: "구독하다",
        exEn: "Millions subscribe to the service.",
        exKo: "수백만 명이 그 서비스를 구독한다.",
        bridge: "명부 아래에 이름을 올리다",
      },
      {
        key: "pledge",
        label: "기부를 약정하다",
        exEn: "Residents subscribed to the building fund.",
        exKo: "주민들이 건축 기금에 출연을 약정했다.",
        bridge: "약정서 아래에 서명하다",
      },
    ],
    context: [
      {
        sentence: "Most economists no longer <b>subscribe</b> to that model.",
        senseKey: "agreeWith",
        gloss: "(견해에) 동의하다·지지하다",
      },
      {
        sentence: "The journal is <b>subscribed</b> to by every major library.",
        senseKey: "receive",
        gloss: "구독되다",
      },
    ],
    reverse: {
      senseKey: "agreeWith",
      scene: "나는 그 의견에 동의하지 않는다는 뜻으로",
      sample: "I do not subscribe to that opinion.",
    },
  },
  {
    id: "inscribe",
    word: "inscribe",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "안에 새겨 넣다",
      image: "돌이나 금속에 파서 지워지지 않게 새기는 그림 (in + scribere, 안에 쓰다)",
      exEn: "His name is inscribed on the stone.",
      exKo: "그의 이름이 그 돌에 새겨져 있다.",
    },
    senses: [
      {
        key: "engrave",
        label: "새기다",
        exEn: "The date was inscribed above the door.",
        exKo: "문 위에 그 날짜가 새겨져 있었다.",
        bridge: "표면을 파서 안으로 써 넣다",
      },
      {
        key: "dedicate",
        label: "(헌사를) 적어 넣다",
        exEn: "She inscribed the book to her teacher.",
        exKo: "그녀는 그 책에 선생님께 드리는 글을 적었다.",
        bridge: "안쪽 면에 마음을 써 넣다",
      },
      {
        key: "imprint",
        label: "(마음에) 깊이 새기다",
        exEn: "The scene is inscribed in my memory.",
        exKo: "그 장면이 내 기억에 새겨져 있다.",
        bridge: "지워지지 않게 안에 파 넣다",
      },
    ],
    context: [
      {
        sentence: "The names of the dead are <b>inscribed</b> on the monument.",
        senseKey: "engrave",
        gloss: "새겨지다",
      },
      {
        sentence: "These habits are <b>inscribed</b> in the culture itself.",
        senseKey: "imprint",
        gloss: "깊이 배어 있다·각인되다",
      },
    ],
    reverse: {
      senseKey: "engrave",
      scene: "그 문구가 벽에 새겨져 있다는 뜻으로",
      sample: "The words are inscribed on the wall.",
    },
  },

  // ── portare 나르다 ───────────────────────────────────────────
  {
    id: "export",
    word: "export",
    pos: "동사·명사",
    tier: 5,
    rank: 0,
    core: {
      ko: "밖으로 실어 내다",
      image: "국경 밖으로 짐을 실어 보내는 그림 (ex + portare, 밖으로 나르다)",
      exEn: "The country exports rice.",
      exKo: "그 나라는 쌀을 수출한다.",
    },
    senses: [
      {
        key: "sendOut",
        label: "수출하다",
        exEn: "They export to more than forty markets.",
        exKo: "그들은 마흔 곳이 넘는 시장에 수출한다.",
        bridge: "국경 밖으로 실어 내다",
      },
      {
        key: "spread",
        label: "(문화를) 내보내다",
        exEn: "The style was exported worldwide.",
        exKo: "그 양식은 전 세계로 퍼져 나갔다.",
        bridge: "물건이 아닌 것도 실어 내보낸다",
      },
      {
        key: "goods",
        label: "수출품",
        exEn: "Exports fell sharply last year.",
        exKo: "작년에 수출이 크게 줄었다.",
        bridge: "실어 내보낸 그것",
      },
    ],
    context: [
      {
        sentence: "Rich nations often <b>export</b> their waste to poorer ones.",
        senseKey: "sendOut",
        gloss: "내보내다·수출하다",
      },
      {
        sentence: "The idea was <b>exported</b> long before the product was.",
        senseKey: "spread",
        gloss: "퍼져 나가다·전파되다",
      },
    ],
    reverse: {
      senseKey: "sendOut",
      scene: "그 나라가 자동차를 유럽에 수출한다는 뜻으로",
      sample: "The country exports cars to Europe.",
    },
  },
  {
    id: "import",
    word: "import",
    pos: "동사·명사",
    tier: 5,
    rank: 0,
    core: {
      ko: "안으로 실어 들이다",
      image: "국경 안쪽으로 짐을 들여오는 그림 (in + portare, 안으로 나르다)",
      exEn: "Japan imports most of its oil.",
      exKo: "일본은 석유 대부분을 수입한다.",
    },
    senses: [
      {
        key: "bringIn",
        label: "수입하다",
        exEn: "The store imports goods from Italy.",
        exKo: "그 가게는 이탈리아에서 물건을 들여온다.",
        bridge: "국경 안으로 실어 들이다",
      },
      {
        key: "adopt",
        label: "(제도를) 들여오다",
        exEn: "The system was imported from abroad.",
        exKo: "그 제도는 외국에서 들여온 것이다.",
        bridge: "남의 것을 안으로 실어 오다",
      },
      {
        key: "significance",
        label: "중요성·함의",
        exEn: "The decision is of great import.",
        exKo: "그 결정은 중대한 의미를 지닌다.",
        bridge: "안으로 실어 온 무게",
      },
    ],
    context: [
      {
        sentence: "Many words in English were <b>imported</b> from French.",
        senseKey: "adopt",
        gloss: "들여오다·차용하다",
      },
      {
        sentence: "The country <b>imports</b> nearly all of its grain.",
        senseKey: "bringIn",
        gloss: "수입하다",
      },
    ],
    reverse: {
      senseKey: "adopt",
      scene: "그 나라가 서구의 교육 제도를 들여왔다는 뜻으로",
      sample: "The country imported the Western school system.",
    },
  },
  {
    id: "report",
    word: "report",
    pos: "동사·명사",
    tier: 5,
    rank: 0,
    core: {
      ko: "되가져와 전하다",
      image: "가서 본 것을 도로 실어 와 알리는 그림 (re + portare, 되날라 오다)",
      exEn: "She reported the accident.",
      exKo: "그녀는 그 사고를 신고했다.",
    },
    senses: [
      {
        key: "state",
        label: "보고하다·전하다",
        exEn: "The study reports a strong effect.",
        exKo: "그 연구는 강한 효과를 보고한다.",
        bridge: "알아낸 것을 되가져와 알리다",
      },
      {
        key: "news",
        label: "보도하다",
        exEn: "The paper reported it on page one.",
        exKo: "그 신문은 그것을 1면에 보도했다.",
        bridge: "본 것을 실어 와 널리 전하다",
      },
      {
        key: "answerTo",
        label: "(~에게) 보고 체계상 속하다 (report to)",
        exEn: "She reports directly to the director.",
        exKo: "그녀는 관장에게 직접 보고한다.",
        bridge: "결과를 되가져가야 하는 상대",
      },
    ],
    context: [
      {
        sentence: "Participants <b>reported</b> feeling calmer after the change.",
        senseKey: "state",
        gloss: "(스스로) 보고하다·진술하다",
      },
      {
        sentence: "Studies that find nothing are less often <b>reported</b>.",
        senseKey: "news",
        gloss: "발표되다·보고되다",
      },
    ],
    reverse: {
      senseKey: "state",
      scene: "참가자들이 통증이 줄었다고 보고했다는 뜻으로",
      sample: "Participants reported less pain.",
    },
  },
  {
    id: "transport",
    word: "transport",
    pos: "동사·명사",
    tier: 5,
    rank: 0,
    core: {
      ko: "건너 실어 나르다",
      image: "이쪽에서 저쪽으로 짐을 통째로 실어 옮기는 그림 (trans + portare, 건너 나르다)",
      exEn: "Trucks transport the goods.",
      exKo: "트럭이 그 물건을 실어 나른다.",
    },
    senses: [
      {
        key: "carry",
        label: "수송하다",
        exEn: "Blood transports oxygen to the cells.",
        exKo: "피가 세포로 산소를 나른다.",
        bridge: "저쪽까지 실어 옮기다",
      },
      {
        key: "system",
        label: "교통·운송 수단",
        exEn: "Public transport is free here.",
        exKo: "여기서는 대중교통이 무료다.",
        bridge: "나르는 일을 맡은 체계",
      },
      {
        key: "carryAway",
        label: "(마음을) 사로잡다",
        exEn: "The music transported her.",
        exKo: "그 음악이 그녀를 사로잡았다.",
        bridge: "마음을 다른 데로 실어 가다",
      },
    ],
    context: [
      {
        sentence: "Rivers <b>transport</b> sediment thousands of kilometers.",
        senseKey: "carry",
        gloss: "실어 나르다·운반하다",
      },
      {
        sentence: "Cities that invest in <b>transport</b> grow faster.",
        senseKey: "system",
        gloss: "교통·수송",
      },
    ],
    reverse: {
      senseKey: "carry",
      scene: "바람이 씨앗을 먼 곳까지 실어 나른다는 뜻으로",
      sample: "The wind transports seeds over long distances.",
    },
  },

  // ── currere 달리다 ───────────────────────────────────────────
  {
    id: "occur",
    word: "occur",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "마주 달려와 나타나다",
      image: "가는 길에 무언가가 달려와 눈앞에 나타나는 그림 (ob + currere, 앞으로 달려오다)",
      exEn: "The accident occurred at night.",
      exKo: "그 사고는 밤에 일어났다.",
    },
    senses: [
      {
        key: "happen",
        label: "일어나다·발생하다",
        exEn: "Earthquakes occur along fault lines.",
        exKo: "지진은 단층선을 따라 일어난다.",
        bridge: "눈앞에 달려와 벌어지다",
      },
      {
        key: "exist",
        label: "(자연에) 존재하다",
        exEn: "The mineral occurs only in two regions.",
        exKo: "그 광물은 두 지역에서만 발견된다.",
        bridge: "그곳에 나타나 있다",
      },
      {
        key: "comeToMind",
        label: "떠오르다 (occur to)",
        exEn: "It never occurred to me.",
        exKo: "그 생각은 한 번도 떠오르지 않았다.",
        bridge: "생각이 마음으로 달려 들어오다",
      },
    ],
    context: [
      {
        sentence: "Most errors <b>occur</b> in the first minutes of a task.",
        senseKey: "happen",
        gloss: "발생하다",
      },
      {
        sentence: "It never <b>occurred</b> to them that the question itself was wrong.",
        senseKey: "comeToMind",
        gloss: "(생각이) 떠오르다",
      },
    ],
    reverse: {
      senseKey: "comeToMind",
      scene: "그런 생각은 내게 떠오른 적이 없다는 뜻으로",
      sample: "That idea never occurred to me.",
    },
  },
  {
    id: "recur",
    word: "recur",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "되돌아 달려오다",
      image: "지나간 줄 알았던 것이 다시 달려오는 그림 (re + currere, 되돌아 달리다)",
      exEn: "The problem keeps recurring.",
      exKo: "그 문제가 자꾸 되풀이된다.",
    },
    senses: [
      {
        key: "repeat",
        label: "반복해 일어나다",
        exEn: "The same pattern recurs in every culture.",
        exKo: "같은 유형이 모든 문화에서 되풀이된다.",
        bridge: "갔던 것이 다시 달려오다",
      },
      {
        key: "comeBack",
        label: "(생각이) 자꾸 떠오르다",
        exEn: "The image recurred in her dreams.",
        exKo: "그 이미지가 그녀의 꿈에 자꾸 나타났다.",
        bridge: "마음속으로 되돌아 달려오다",
      },
      {
        key: "periodic",
        label: "주기적인 (recurrent)",
        exEn: "These are recurrent themes in his work.",
        exKo: "이것들은 그의 작품에 되풀이되는 주제다.",
        bridge: "돌아오기를 거듭하다",
      },
    ],
    context: [
      {
        sentence: "The same misunderstanding <b>recurs</b> in every generation.",
        senseKey: "repeat",
        gloss: "되풀이되다",
      },
      {
        sentence: "The same image <b>recurred</b> in her dreams for weeks.",
        senseKey: "comeBack",
        gloss: "자꾸 떠오르다·되살아나다",
      },
    ],
    reverse: {
      senseKey: "repeat",
      scene: "같은 실수가 해마다 되풀이된다는 뜻으로",
      sample: "The same mistake recurs every year.",
    },
  },
  {
    id: "concur",
    word: "concur",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "함께 달려 한자리에 모이다",
      image: "여러 갈래가 한 지점으로 달려와 겹치는 그림 (con + currere, 함께 달리다)",
      exEn: "The experts concur.",
      exKo: "전문가들의 의견이 일치한다.",
    },
    senses: [
      {
        key: "agree",
        label: "의견이 일치하다",
        exEn: "Most historians concur on this point.",
        exKo: "대부분의 역사가가 이 점에 동의한다.",
        bridge: "생각이 한 지점으로 달려와 겹치다",
      },
      {
        key: "coincide",
        label: "동시에 일어나다",
        exEn: "Two rare events concurred that year.",
        exKo: "그해에 드문 사건 둘이 겹쳤다.",
        bridge: "같은 때로 달려와 만나다",
      },
      {
        key: "combine",
        label: "(요인이) 함께 작용하다",
        exEn: "Several causes concurred to produce the crisis.",
        exKo: "여러 원인이 겹쳐 그 위기를 낳았다.",
        bridge: "힘이 한곳으로 모여 들다",
      },
    ],
    context: [
      {
        sentence: "The two independent studies <b>concur</b> almost exactly.",
        senseKey: "agree",
        gloss: "일치하다",
      },
      {
        sentence: "Several factors <b>concurred</b> to make the collapse inevitable.",
        senseKey: "combine",
        gloss: "함께 작용하다",
      },
    ],
    reverse: {
      senseKey: "agree",
      scene: "나는 그 결론에 동의한다는 뜻으로",
      sample: "I concur with that conclusion.",
    },
  },
  {
    id: "incur",
    word: "incur",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "달려 들어가 뒤집어쓰다",
      image: "제 발로 달려 들어가 그 결과를 뒤집어쓰는 그림 (in + currere, 안으로 달리다)",
      exEn: "He incurred heavy debts.",
      exKo: "그는 큰 빚을 졌다.",
    },
    senses: [
      {
        key: "bringOn",
        label: "(비용·손실을) 떠안다",
        exEn: "The delay incurred extra costs.",
        exKo: "그 지연으로 추가 비용이 발생했다.",
        bridge: "달려 들어가 그 값을 뒤집어쓰다",
      },
      {
        key: "provoke",
        label: "(비난을) 자초하다",
        exEn: "The remark incurred widespread anger.",
        exKo: "그 발언은 광범위한 분노를 샀다.",
        bridge: "제 발로 그 결과 속으로 들어가다",
      },
      {
        key: "riskIt",
        label: "(위험을) 무릅쓰다",
        exEn: "They incurred great risk to save the site.",
        exKo: "그들은 그 유적을 지키려 큰 위험을 무릅썼다.",
        bridge: "위험 안으로 달려 들어가다",
      },
    ],
    context: [
      {
        sentence: "Firms that ignore the rule <b>incur</b> heavy penalties.",
        senseKey: "bringOn",
        gloss: "(벌을) 받다·떠안다",
      },
      {
        sentence: "The policy <b>incurred</b> criticism from every side.",
        senseKey: "provoke",
        gloss: "자초하다·사다",
      },
    ],
    reverse: {
      senseKey: "bringOn",
      scene: "그 사업이 예상 밖의 비용을 떠안았다는 뜻으로",
      sample: "The project incurred unexpected costs.",
    },
  },

  // ── venire 오다 ──────────────────────────────────────────────
  {
    id: "prevent",
    word: "prevent",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "앞질러 와서 막다",
      image: "일이 벌어지기 전에 먼저 가서 길을 막는 그림 (prae + venire, 앞서 오다)",
      exEn: "Rain prevented the game.",
      exKo: "비 때문에 경기가 열리지 못했다.",
    },
    senses: [
      {
        key: "stop",
        label: "막다·예방하다",
        exEn: "Washing hands prevents infection.",
        exKo: "손을 씻으면 감염을 막는다.",
        bridge: "먼저 가서 못 오게 막다",
      },
      {
        key: "hinder",
        label: "~하지 못하게 하다 (prevent from)",
        exEn: "Fear prevents people from asking.",
        exKo: "두려움이 사람들을 묻지 못하게 한다.",
        bridge: "앞을 가로막아 못 가게 하다",
      },
      {
        key: "avert",
        label: "(사태를) 미리 피하다",
        exEn: "Quick action prevented a disaster.",
        exKo: "빠른 조치가 참사를 막았다.",
        bridge: "닥치기 전에 앞질러 끊다",
      },
    ],
    context: [
      {
        sentence: "Nothing <b>prevents</b> two opposite ideas from both being useful.",
        senseKey: "hinder",
        gloss: "~하지 못하게 하다",
      },
      {
        sentence: "Early treatment can <b>prevent</b> permanent damage.",
        senseKey: "stop",
        gloss: "예방하다·막다",
      },
    ],
    reverse: {
      senseKey: "hinder",
      scene: "그 규칙이 학생들의 질문을 막는다는 뜻으로",
      sample: "The rule prevents students from asking questions.",
    },
  },
  {
    id: "intervene",
    word: "intervene",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "사이로 들어오다",
      image: "두 사람 사이로 끼어들어 서는 그림 (inter + venire, 사이로 오다)",
      exEn: "A teacher intervened in the fight.",
      exKo: "선생님이 싸움에 끼어들었다.",
    },
    senses: [
      {
        key: "stepIn",
        label: "개입하다",
        exEn: "The government intervened in the market.",
        exKo: "정부가 시장에 개입했다.",
        bridge: "둘 사이로 들어와 손을 대다",
      },
      {
        key: "comeBetween",
        label: "(사건이) 끼어들다",
        exEn: "The war intervened before the plan was finished.",
        exKo: "계획이 끝나기 전에 전쟁이 끼어들었다.",
        bridge: "그사이에 다른 일이 오다",
      },
      {
        key: "elapse",
        label: "(시간이) 사이에 흐르다",
        exEn: "Ten years intervened between the two books.",
        exKo: "두 책 사이에 10년이 흘렀다.",
        bridge: "사이를 채우며 지나가다",
      },
    ],
    context: [
      {
        sentence: "Central banks <b>intervene</b> only when markets stop working.",
        senseKey: "stepIn",
        gloss: "개입하다",
      },
      {
        sentence: "Several decades <b>intervened</b> before anyone tested the claim.",
        senseKey: "elapse",
        gloss: "(사이에) 흐르다",
      },
    ],
    reverse: {
      senseKey: "stepIn",
      scene: "정부가 그 분쟁에 개입해야 한다는 뜻으로",
      sample: "The government should intervene in the dispute.",
    },
  },
  {
    id: "convention",
    word: "convention",
    pos: "명사",
    tier: 5,
    rank: 0,
    core: {
      ko: "함께 모여 정한 것",
      image: "사람들이 한자리에 모여 이렇게 하자고 정하는 그림 (con + venire, 함께 오다)",
      exEn: "The convention drew 5,000 people.",
      exKo: "그 대회에 5천 명이 모였다.",
    },
    senses: [
      {
        key: "custom",
        label: "관습·관례",
        exEn: "It is mere convention, not law.",
        exKo: "그것은 법이 아니라 단지 관례다.",
        bridge: "모여서 정해 굳어진 것",
      },
      {
        key: "treaty",
        label: "협약",
        exEn: "The convention was signed by 90 states.",
        exKo: "그 협약에 90개국이 서명했다.",
        bridge: "함께 모여 맺은 약속",
      },
      {
        key: "meeting",
        label: "대회·집회",
        exEn: "She spoke at the annual convention.",
        exKo: "그녀는 연례 대회에서 연설했다.",
        bridge: "함께 모이는 자리 그 자체",
      },
    ],
    context: [
      {
        sentence: "The link between a word and its meaning is pure <b>convention</b>.",
        senseKey: "custom",
        gloss: "관습·약속",
      },
      {
        sentence: "The <b>convention</b> on climate change was signed by 195 countries.",
        senseKey: "treaty",
        gloss: "협약",
      },
    ],
    reverse: {
      senseKey: "custom",
      scene: "그것은 규칙이 아니라 사회적 관습일 뿐이라는 뜻으로",
      sample: "It is not a rule but only a social convention.",
    },
  },
  {
    id: "event",
    word: "event",
    pos: "명사",
    tier: 5,
    rank: 0,
    core: {
      ko: "밖으로 나와 벌어진 일",
      image: "속에 있던 것이 밖으로 나와 눈앞에서 벌어지는 그림 (ex + venire, 밖으로 오다)",
      exEn: "It was a memorable event.",
      exKo: "기억에 남는 행사였다.",
    },
    senses: [
      {
        key: "happening",
        label: "사건",
        exEn: "The events of that year changed everything.",
        exKo: "그해의 사건들이 모든 것을 바꿨다.",
        bridge: "밖으로 나와 벌어진 일",
      },
      {
        key: "inCase",
        label: "경우 (in the event of)",
        exEn: "In the event of fire, use the stairs.",
        exKo: "화재 시에는 계단을 이용하세요.",
        bridge: "그 일이 벌어지는 경우",
      },
      {
        key: "contest",
        label: "종목·경기",
        exEn: "She won three events.",
        exKo: "그녀는 세 종목에서 우승했다.",
        bridge: "따로 벌어지는 한 판",
      },
    ],
    context: [
      {
        sentence: "Rare <b>events</b> shape history more than steady trends.",
        senseKey: "happening",
        gloss: "사건",
      },
      {
        sentence: "In the <b>event</b> that funding fails, the study stops.",
        senseKey: "inCase",
        gloss: "~하는 경우에는",
      },
    ],
    reverse: {
      senseKey: "inCase",
      scene: "비상시에는 이 문을 사용하라는 뜻으로 in the event of 를 써서",
      sample: "In the event of an emergency, use this door.",
    },
  },

  // ── stare 서다 ───────────────────────────────────────────────
  {
    id: "constant",
    word: "constant",
    pos: "형용사·명사",
    tier: 5,
    rank: 0,
    core: {
      ko: "굳게 함께 서 있다",
      image: "흔들리지 않고 늘 같은 자리에 서 있는 그림 (con + stare, 함께 서다)",
      exEn: "The temperature stayed constant.",
      exKo: "온도가 일정하게 유지되었다.",
    },
    senses: [
      {
        key: "unchanging",
        label: "일정한·변함없는",
        exEn: "The speed of light is a constant.",
        exKo: "빛의 속도는 상수다.",
        bridge: "언제 봐도 같은 자리에 서 있다",
      },
      {
        key: "continual",
        label: "끊임없는",
        exEn: "She works under constant pressure.",
        exKo: "그녀는 끊임없는 압박 속에서 일한다.",
        bridge: "쉬지 않고 계속 서 있다",
      },
      {
        key: "loyal",
        label: "한결같은",
        exEn: "He was a constant friend.",
        exKo: "그는 한결같은 친구였다.",
        bridge: "마음이 같은 자리를 지키다",
      },
    ],
    context: [
      {
        sentence: "Body temperature must stay <b>constant</b> within a narrow range.",
        senseKey: "unchanging",
        gloss: "일정한",
      },
      {
        sentence: "Cities are in a state of <b>constant</b> rebuilding.",
        senseKey: "continual",
        gloss: "끊임없는",
      },
    ],
    reverse: {
      senseKey: "unchanging",
      scene: "그 비율이 수년간 일정하게 유지되었다는 뜻으로",
      sample: "The rate has stayed constant for years.",
    },
  },
  {
    id: "distance",
    word: "distance",
    pos: "명사·동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "떨어져 서 있음",
      image: "둘이 서로 떨어진 자리에 서 있는 그림 (dis + stare, 떨어져 서다)",
      exEn: "The distance is about ten kilometers.",
      exKo: "거리는 약 10킬로미터다.",
    },
    senses: [
      {
        key: "gap",
        label: "거리·간격",
        exEn: "Keep a safe distance.",
        exKo: "안전거리를 유지하라.",
        bridge: "떨어져 선 만큼의 사이",
      },
      {
        key: "detach",
        label: "거리를 두다 (distance oneself)",
        exEn: "He distanced himself from the group.",
        exKo: "그는 그 무리와 거리를 두었다.",
        bridge: "떨어진 자리로 물러서다",
      },
      {
        key: "aloofness",
        label: "(감정적) 거리감",
        exEn: "There was a distance in her voice.",
        exKo: "그녀의 목소리에는 거리감이 있었다.",
        bridge: "마음이 떨어져 서 있다",
      },
    ],
    context: [
      {
        sentence: "Historical <b>distance</b> makes judgment easier and less honest.",
        senseKey: "gap",
        gloss: "거리·간격",
      },
      {
        sentence: "The author carefully <b>distances</b> herself from her subject.",
        senseKey: "detach",
        gloss: "거리를 두다",
      },
    ],
    reverse: {
      senseKey: "detach",
      scene: "그 정당이 그 발언과 거리를 두었다는 뜻으로",
      sample: "The party distanced itself from the remark.",
    },
  },
  {
    id: "substance",
    word: "substance",
    pos: "명사",
    tier: 5,
    rank: 0,
    core: {
      ko: "아래에 서서 받치는 것",
      image: "겉모습 밑에서 그것을 떠받치고 있는 알맹이의 그림 (sub + stare, 아래에 서다)",
      exEn: "The bottle held a clear substance.",
      exKo: "그 병에는 투명한 물질이 들어 있었다.",
    },
    senses: [
      {
        key: "essence",
        label: "실질·알맹이",
        exEn: "The speech had no substance.",
        exKo: "그 연설에는 알맹이가 없었다.",
        bridge: "겉을 받치는 속의 것",
      },
      {
        key: "material",
        label: "물질",
        exEn: "The substance dissolves in water.",
        exKo: "그 물질은 물에 녹는다.",
        bridge: "실제로 자리를 차지하는 것",
      },
      {
        key: "gist",
        label: "요지 (in substance)",
        exEn: "In substance, the two plans agree.",
        exKo: "요지에서 두 계획은 같다.",
        bridge: "겉치레를 걷어 낸 속",
      },
    ],
    context: [
      {
        sentence: "The debate was long on style and short on <b>substance</b>.",
        senseKey: "essence",
        gloss: "실질·내용",
      },
      {
        sentence: "In <b>substance</b>, the two theories say the same thing.",
        senseKey: "gist",
        gloss: "본질적으로·요지에서",
      },
    ],
    reverse: {
      senseKey: "essence",
      scene: "그 주장에는 알맹이가 거의 없다는 뜻으로",
      sample: "There is little substance to that claim.",
    },
  },
  {
    id: "circumstance",
    word: "circumstance",
    pos: "명사",
    tier: 5,
    rank: 0,
    core: {
      ko: "둘레에 서 있는 것들",
      image: "나를 빙 둘러싸고 서 있는 조건들의 그림 (circum + stare, 둘레에 서다)",
      exEn: "The circumstances were unusual.",
      exKo: "정황이 예사롭지 않았다.",
    },
    senses: [
      {
        key: "situation",
        label: "상황·정황",
        exEn: "Under these circumstances, we must wait.",
        exKo: "이런 상황에서는 기다려야 한다.",
        bridge: "나를 둘러싸고 서 있는 조건들",
      },
      {
        key: "condition",
        label: "형편·처지",
        exEn: "She grew up in difficult circumstances.",
        exKo: "그녀는 어려운 형편에서 자랐다.",
        bridge: "둘레에 놓인 것이 곧 처지다",
      },
      {
        key: "chance",
        label: "우연한 사정",
        exEn: "By a strange circumstance they met again.",
        exKo: "묘한 사정으로 그들은 다시 만났다.",
        bridge: "둘러선 것들이 그렇게 놓였다",
      },
    ],
    context: [
      {
        sentence: "We judge others by character and ourselves by <b>circumstance</b>.",
        senseKey: "situation",
        gloss: "상황·정황",
      },
      {
        sentence: "She rose to prominence despite humble <b>circumstances</b>.",
        senseKey: "condition",
        gloss: "형편·처지",
      },
    ],
    reverse: {
      senseKey: "situation",
      scene: "이런 상황에서는 그 계획이 통하지 않는다는 뜻으로",
      sample: "Under these circumstances the plan will not work.",
    },
  },

  // ── fundere 붓다 ─────────────────────────────────────────────
  {
    id: "confuse",
    word: "confuse",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "함께 부어 뒤섞다",
      image: "다른 것들을 한 그릇에 부어 구별이 안 되게 만드는 그림 (con + fundere, 함께 붓다)",
      exEn: "Don't confuse me with my brother.",
      exKo: "나를 형과 혼동하지 마라.",
    },
    senses: [
      {
        key: "mixUp",
        label: "혼동하다",
        exEn: "People confuse correlation with cause.",
        exKo: "사람들은 상관관계를 원인과 혼동한다.",
        bridge: "둘을 한데 부어 섞어 버리다",
      },
      {
        key: "bewilder",
        label: "혼란스럽게 하다",
        exEn: "The instructions confused everyone.",
        exKo: "그 설명서가 모두를 헷갈리게 했다.",
        bridge: "머릿속을 뒤섞어 놓다",
      },
      {
        key: "blur",
        label: "(구별을) 흐리다",
        exEn: "The film confuses fact and fiction.",
        exKo: "그 영화는 사실과 허구를 뒤섞는다.",
        bridge: "경계를 부어 흐려 놓다",
      },
    ],
    context: [
      {
        sentence: "It is easy to <b>confuse</b> being busy with being useful.",
        senseKey: "mixUp",
        gloss: "혼동하다",
      },
      {
        sentence: "Too many choices <b>confuse</b> rather than help.",
        senseKey: "bewilder",
        gloss: "혼란스럽게 하다",
      },
    ],
    reverse: {
      senseKey: "mixUp",
      scene: "학생들이 이 두 단어를 자주 혼동한다는 뜻으로",
      sample: "Students often confuse these two words.",
    },
  },
  {
    id: "refuse",
    word: "refuse",
    pos: "동사·명사",
    tier: 5,
    rank: 0,
    core: {
      ko: "도로 부어 되돌려 보내다",
      image: "내민 것을 받지 않고 도로 밀어 돌려주는 그림 (re + fundere, 되부어 보내다)",
      exEn: "She refused the offer.",
      exKo: "그녀는 그 제안을 거절했다.",
    },
    senses: [
      {
        key: "decline",
        label: "거절하다",
        exEn: "He refused to answer.",
        exKo: "그는 답하기를 거부했다.",
        bridge: "받지 않고 되돌려 보내다",
      },
      {
        key: "notWork",
        label: "(기계가) 말을 안 듣다",
        exEn: "The engine refused to start.",
        exKo: "엔진이 도무지 걸리지 않았다.",
        bridge: "시키는 것을 되받아치다",
      },
      {
        key: "waste",
        label: "쓰레기",
        exEn: "Household refuse is collected weekly.",
        exKo: "생활 쓰레기는 주 1회 수거된다.",
        bridge: "받아들이지 않고 버린 것",
      },
    ],
    context: [
      {
        sentence: "The body <b>refuses</b> to treat the new tissue as its own.",
        senseKey: "decline",
        gloss: "거부하다",
      },
      {
        sentence: "Some questions <b>refuse</b> to go away.",
        senseKey: "notWork",
        gloss: "좀처럼 ~하지 않다",
      },
    ],
    reverse: {
      senseKey: "decline",
      scene: "그들이 그 조건을 받아들이기를 거부했다는 뜻으로",
      sample: "They refused to accept the terms.",
    },
  },
  {
    id: "diffuse",
    word: "diffuse",
    pos: "동사·형용사",
    tier: 5,
    rank: 0,
    core: {
      ko: "따로따로 부어 퍼뜨리다",
      image: "한곳에 있던 것이 사방으로 부어져 흩어지는 그림 (dis + fundere, 흩어 붓다)",
      exEn: "The scent diffused through the room.",
      exKo: "그 향이 방 안에 퍼졌다.",
    },
    senses: [
      {
        key: "spread",
        label: "확산되다·퍼지다",
        exEn: "Ideas diffuse faster than goods.",
        exKo: "생각은 물건보다 빠르게 퍼진다.",
        bridge: "부어 흩어져 넓게 번지다",
      },
      {
        key: "soften",
        label: "(빛을) 부드럽게 하다",
        exEn: "Clouds diffuse the sunlight.",
        exKo: "구름이 햇빛을 부드럽게 흩는다.",
        bridge: "한곳에 몰린 것을 흩어 누그러뜨리다",
      },
      {
        key: "scattered",
        label: "산만한·장황한",
        exEn: "The essay is diffuse and hard to follow.",
        exKo: "그 글은 산만해서 따라가기 어렵다.",
        bridge: "초점 없이 흩어져 있다",
      },
    ],
    context: [
      {
        sentence: "New technologies <b>diffuse</b> unevenly across societies.",
        senseKey: "spread",
        gloss: "확산되다·퍼져 나가다",
      },
      {
        sentence: "Responsibility becomes <b>diffuse</b> when everyone is in charge.",
        senseKey: "scattered",
        gloss: "분산된·흐릿해진",
      },
    ],
    reverse: {
      senseKey: "spread",
      scene: "그 관습이 이웃 지역으로 퍼져 나갔다는 뜻으로",
      sample: "The custom diffused into neighboring regions.",
    },
  },
  {
    id: "infuse",
    word: "infuse",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "안으로 부어 넣다",
      image: "그릇 안으로 부어 속까지 스미게 하는 그림 (in + fundere, 안으로 붓다)",
      exEn: "Infuse the leaves in hot water.",
      exKo: "잎을 뜨거운 물에 우려라.",
    },
    senses: [
      {
        key: "instill",
        label: "(기운을) 불어넣다",
        exEn: "The win infused the team with confidence.",
        exKo: "그 승리가 팀에 자신감을 불어넣었다.",
        bridge: "안으로 부어 속까지 스미게 하다",
      },
      {
        key: "steep",
        label: "우려내다",
        exEn: "Let the tea infuse for three minutes.",
        exKo: "차를 3분간 우려라.",
        bridge: "물속으로 맛이 배어 나오게 하다",
      },
      {
        key: "imbue",
        label: "(성격을) 배게 하다",
        exEn: "The work is infused with quiet humor.",
        exKo: "그 작품에는 잔잔한 유머가 배어 있다.",
        bridge: "속속들이 부어 물들이다",
      },
    ],
    context: [
      {
        sentence: "Good teaching <b>infuses</b> facts with meaning.",
        senseKey: "instill",
        gloss: "불어넣다·스미게 하다",
      },
      {
        sentence: "The whole novel is <b>infused</b> with a sense of loss.",
        senseKey: "imbue",
        gloss: "배어 있다",
      },
    ],
    reverse: {
      senseKey: "instill",
      scene: "그 경험이 그에게 새로운 목적의식을 불어넣었다는 뜻으로",
      sample: "The experience infused him with a new sense of purpose.",
    },
  },

  // ── gradi 걷다 ───────────────────────────────────────────────
  {
    id: "progress",
    word: "progress",
    pos: "명사·동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "앞으로 걸어 나가다",
      image: "한 걸음씩 앞으로 옮겨 가는 그림 (pro + gradi, 앞으로 걷다)",
      exEn: "We are making progress.",
      exKo: "우리는 진전을 보이고 있다.",
    },
    senses: [
      {
        key: "advance",
        label: "진전·발전",
        exEn: "Progress has been slow but steady.",
        exKo: "진전은 느리지만 꾸준했다.",
        bridge: "앞으로 걸어간 만큼이 진전이다",
      },
      {
        key: "proceed",
        label: "나아가다·진행되다",
        exEn: "The disease progressed rapidly.",
        exKo: "그 병은 빠르게 진행되었다.",
        bridge: "걸음이 계속 앞으로 옮겨 가다",
      },
      {
        key: "underway",
        label: "진행 중인 (in progress)",
        exEn: "Work is in progress.",
        exKo: "작업이 진행 중이다.",
        bridge: "아직 걷고 있는 중",
      },
    ],
    context: [
      {
        sentence: "<b>Progress</b> in science is rarely a straight line.",
        senseKey: "advance",
        gloss: "진보·발전",
      },
      {
        sentence: "The talks <b>progressed</b> more slowly than anyone hoped.",
        senseKey: "proceed",
        gloss: "진행되다",
      },
    ],
    reverse: {
      senseKey: "advance",
      scene: "그 분야에서 큰 진전이 있었다는 뜻으로",
      sample: "There has been great progress in that field.",
    },
  },
  {
    id: "regress",
    word: "regress",
    pos: "동사·명사",
    tier: 5,
    rank: 0,
    core: {
      ko: "뒤로 걸어 돌아가다",
      image: "앞으로 갔던 걸음을 도로 뒤로 옮기는 그림 (re + gradi, 뒤로 걷다)",
      exEn: "The patient regressed after surgery.",
      exKo: "환자는 수술 후 상태가 나빠졌다.",
    },
    senses: [
      {
        key: "goBack",
        label: "퇴행하다·후퇴하다",
        exEn: "Skills regress without practice.",
        exKo: "연습하지 않으면 기술은 퇴보한다.",
        bridge: "앞선 자리에서 뒤로 물러나다",
      },
      {
        key: "revert",
        label: "이전 상태로 돌아가다",
        exEn: "Under stress, people regress to old habits.",
        exKo: "스트레스를 받으면 사람은 옛 습관으로 돌아간다.",
        bridge: "걸어온 길을 되짚어 가다",
      },
      {
        key: "statistics",
        label: "회귀 (regression)",
        exEn: "Extreme scores regress toward the mean.",
        exKo: "극단적인 점수는 평균으로 회귀한다.",
        bridge: "튀어 나갔던 값이 되돌아오다",
      },
    ],
    context: [
      {
        sentence: "Without use, a second language slowly <b>regresses</b>.",
        senseKey: "goBack",
        gloss: "퇴보하다",
      },
      {
        sentence: "Unusually high results tend to <b>regress</b> toward the average.",
        senseKey: "statistics",
        gloss: "회귀하다",
      },
    ],
    reverse: {
      senseKey: "goBack",
      scene: "연습을 멈추면 실력이 퇴보한다는 뜻으로",
      sample: "Your skills regress when you stop practicing.",
    },
  },
  {
    id: "aggressive",
    word: "aggressive",
    pos: "형용사",
    tier: 5,
    rank: 0,
    core: {
      ko: "~쪽으로 걸어 들어가다",
      image: "상대 쪽으로 성큼 걸어 들어가 부딪는 그림 (ad + gradi, ~로 걸어가다)",
      exEn: "The dog became aggressive.",
      exKo: "그 개는 공격적으로 변했다.",
    },
    senses: [
      {
        key: "hostile",
        label: "공격적인",
        exEn: "He used aggressive language.",
        exKo: "그는 공격적인 말을 썼다.",
        bridge: "상대 쪽으로 밀고 들어가다",
      },
      {
        key: "bold",
        label: "적극적인·과감한",
        exEn: "The city took an aggressive approach to housing.",
        exKo: "시는 주택 문제에 과감한 접근을 취했다.",
        bridge: "물러서지 않고 앞으로 나아가다",
      },
      {
        key: "fastGrowing",
        label: "(병이) 빠르게 번지는",
        exEn: "It is an aggressive form of the disease.",
        exKo: "그것은 진행이 빠른 형태의 병이다.",
        bridge: "거침없이 밀고 나가다",
      },
    ],
    context: [
      {
        sentence: "An <b>aggressive</b> timetable left no room for error.",
        senseKey: "bold",
        gloss: "공격적인·과감한",
      },
      {
        sentence: "Species that are too <b>aggressive</b> often destroy their own habitat.",
        senseKey: "hostile",
        gloss: "공격적인",
      },
    ],
    reverse: {
      senseKey: "bold",
      scene: "그 회사가 과감한 전략을 채택했다는 뜻으로",
      sample: "The company adopted an aggressive strategy.",
    },
  },
  {
    id: "gradual",
    word: "gradual",
    pos: "형용사",
    tier: 5,
    rank: 0,
    core: {
      ko: "한 걸음씩",
      image: "계단을 한 칸씩 밟아 올라가는 그림 (gradus, 걸음·계단)",
      exEn: "There was a gradual improvement.",
      exKo: "점진적인 개선이 있었다.",
    },
    senses: [
      {
        key: "stepByStep",
        label: "점진적인",
        exEn: "Change here is gradual, not sudden.",
        exKo: "여기서 변화는 갑작스럽지 않고 점진적이다.",
        bridge: "한 걸음씩 밟아 간다",
      },
      {
        key: "gentle",
        label: "완만한",
        exEn: "The path has a gradual slope.",
        exKo: "그 길은 경사가 완만하다.",
        bridge: "계단이 낮아 오르기 수월하다",
      },
      {
        key: "slow",
        label: "서서히 이루어지는",
        exEn: "Recovery was gradual but complete.",
        exKo: "회복은 더뎠지만 완전했다.",
        bridge: "한 칸씩이라 천천히 간다",
      },
    ],
    context: [
      {
        sentence: "Evolution works through <b>gradual</b> change over long spans.",
        senseKey: "stepByStep",
        gloss: "점진적인",
      },
      {
        sentence: "The decline was so <b>gradual</b> that no one noticed.",
        senseKey: "slow",
        gloss: "서서히 진행되는",
      },
    ],
    reverse: {
      senseKey: "stepByStep",
      scene: "그 변화는 갑작스럽지 않고 점진적이었다는 뜻으로",
      sample: "The change was gradual, not sudden.",
    },
  },
];
