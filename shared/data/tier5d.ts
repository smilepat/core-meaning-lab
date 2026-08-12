// Tier 5 확장 4차 — 추상 라틴계 20개. 다시 다섯 어근 × 네 형제.
//
//   ponere 놓다   : dispose · oppose · propose · suppose
//   cedere 가다   : proceed · exceed · precede · succeed
//   struere 쌓다  : construct · instruct · obstruct · destroy
//   plicare 접다  : imply · comply · reply · employ
//   vocare 부르다 : evoke · provoke · invoke · advocate
//
// cedere 가족이 특히 값지다. succeed 가 "성공하다"와 "계승하다"를 함께 갖는 이유가
// core 하나로 풀린다 — 뒤따라 가다. 뒤를 이으면 계승이고, 끝까지 따라가 닿으면 성공이다.
import type { Word } from "../types.ts";

export const TIER5D: Word[] = [
  // ── ponere 놓다 ──────────────────────────────────────────────
  {
    id: "dispose",
    word: "dispose",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "따로따로 놓아 치우다",
      image: "한데 있던 것을 갈라 제자리에 놓아 정리하는 그림 (dis + ponere, 흩어 놓다)",
      exEn: "Please dispose of the wrapper.",
      exKo: "포장지를 버려 주세요.",
    },
    senses: [
      {
        key: "getRidOf",
        label: "처리하다·버리다 (dispose of)",
        exEn: "Cities struggle to dispose of waste.",
        exKo: "도시들은 폐기물 처리에 애를 먹는다.",
        bridge: "치울 자리에 갈라 놓아 없애다",
      },
      {
        key: "incline",
        label: "~하게 만들다 (be disposed to)",
        exEn: "People are disposed to trust familiar faces.",
        exKo: "사람들은 익숙한 얼굴을 믿는 경향이 있다.",
        bridge: "마음이 그쪽으로 놓여 있다",
      },
      {
        key: "arrange",
        label: "배치하다",
        exEn: "The troops were disposed along the river.",
        exKo: "병력이 강을 따라 배치되었다.",
        bridge: "각자 놓일 자리에 나누어 놓다",
      },
    ],
    context: [
      {
        sentence: "Modern societies produce more than they can safely <b>dispose</b> of.",
        senseKey: "getRidOf",
        gloss: "처리하다·없애다",
      },
      {
        sentence: "Early experience <b>disposes</b> us to see threat where there is none.",
        senseKey: "incline",
        gloss: "~하게 만들다·성향을 갖게 하다",
      },
    ],
    reverse: {
      senseKey: "getRidOf",
      scene: "우리는 이 쓰레기를 안전하게 처리해야 한다는 뜻으로",
      sample: "We must safely dispose of this waste.",
    },
  },
  {
    id: "oppose",
    word: "oppose",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "앞을 막아 놓다",
      image: "가는 길 앞에 딱 버티고 놓여 막아서는 그림 (ob + ponere, 앞에 놓다)",
      exEn: "Most members opposed the plan.",
      exKo: "대부분의 회원이 그 계획에 반대했다.",
    },
    senses: [
      {
        key: "resistIt",
        label: "반대하다",
        exEn: "Residents opposed the new road.",
        exKo: "주민들은 새 도로에 반대했다.",
        bridge: "앞을 가로막고 놓이다",
      },
      {
        key: "contrast",
        label: "대립시키다 (as opposed to)",
        exEn: "Quality, as opposed to quantity, matters here.",
        exKo: "여기서는 양이 아니라 질이 중요하다.",
        bridge: "둘을 마주 놓아 견주다",
      },
      {
        key: "counter",
        label: "맞서다",
        exEn: "Two forces oppose each other.",
        exKo: "두 힘이 서로 맞선다.",
        bridge: "서로 앞을 막고 서다",
      },
    ],
    context: [
      {
        sentence: "Learning is a process, as <b>opposed</b> to a single event.",
        senseKey: "contrast",
        gloss: "~와 달리·~과 대비되어",
      },
      {
        sentence: "Scientists who <b>opposed</b> the theory were later proved right.",
        senseKey: "resistIt",
        gloss: "반대하다",
      },
    ],
    reverse: {
      senseKey: "contrast",
      scene: "결과가 아니라 과정이 중요하다는 뜻을 as opposed to 로",
      sample: "The process matters, as opposed to the result.",
    },
  },
  {
    id: "propose",
    word: "propose",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "앞으로 내어 놓다",
      image: "생각을 상대 앞쪽에 꺼내 놓는 그림 (pro + ponere, 앞에 놓다)",
      exEn: "She proposed a new schedule.",
      exKo: "그녀는 새 일정을 제안했다.",
    },
    senses: [
      {
        key: "suggestIdea",
        label: "제안하다",
        exEn: "The report proposes three changes.",
        exKo: "그 보고서는 세 가지 변화를 제안한다.",
        bridge: "생각을 앞에 꺼내 놓다",
      },
      {
        key: "putForward",
        label: "(이론을) 내놓다",
        exEn: "Darwin proposed a mechanism, not just an idea.",
        exKo: "다윈은 착상이 아니라 작동 원리를 내놓았다.",
        bridge: "학계 앞에 세워 놓다",
      },
      {
        key: "intendTo",
        label: "~할 작정이다",
        exEn: "How do you propose to pay for it?",
        exKo: "그 비용은 어떻게 댈 작정인가?",
        bridge: "할 일을 앞에 놓아 두다",
      },
    ],
    context: [
      {
        sentence: "The author <b>proposes</b> that memory is rebuilt, not replayed.",
        senseKey: "putForward",
        gloss: "제안하다·주장하다",
      },
      {
        sentence: "Several solutions have been <b>proposed</b>, none of them cheap.",
        senseKey: "suggestIdea",
        gloss: "제안되다",
      },
    ],
    reverse: {
      senseKey: "suggestIdea",
      scene: "그가 문제를 푸는 새로운 방법을 제안했다는 뜻으로",
      sample: "He proposed a new way to solve the problem.",
    },
  },
  {
    id: "suppose",
    word: "suppose",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "밑에 깔아 놓다",
      image: "확인 안 된 것을 논의의 바닥에 깔아 두고 시작하는 그림 (sub + ponere, 아래에 놓다)",
      exEn: "Suppose it rains — what then?",
      exKo: "비가 온다고 치자. 그럼 어쩌지?",
    },
    senses: [
      {
        key: "assume",
        label: "가정하다",
        exEn: "Suppose the earth were flat.",
        exKo: "지구가 평평하다고 해 보자.",
        bridge: "일단 바닥에 깔고 이야기를 얹다",
      },
      {
        key: "think",
        label: "~라고 생각하다",
        exEn: "I suppose she was tired.",
        exKo: "그녀가 피곤했나 보다.",
        bridge: "밑에 그렇게 깔아 두고 여기다",
      },
      {
        key: "expected",
        label: "~하기로 되어 있다 (be supposed to)",
        exEn: "You're supposed to sign here.",
        exKo: "여기 서명하시게 되어 있습니다.",
        bridge: "그렇게 하도록 깔려 있는 전제",
      },
    ],
    context: [
      {
        sentence: "The model <b>supposes</b> that people always act rationally.",
        senseKey: "assume",
        gloss: "전제하다·가정하다",
      },
      {
        sentence: "Schools are <b>supposed</b> to teach thinking, not only facts.",
        senseKey: "expected",
        gloss: "~하기로 되어 있다",
      },
    ],
    reverse: {
      senseKey: "assume",
      scene: "그 이론은 자원이 무한하다고 가정한다는 뜻으로",
      sample: "The theory supposes that resources are unlimited.",
    },
  },

  // ── cedere 가다·물러나다 ─────────────────────────────────────
  {
    id: "proceed",
    word: "proceed",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "앞으로 나아가다",
      image: "멈췄던 걸음을 다시 앞으로 옮기는 그림 (pro + cedere, 앞으로 가다)",
      exEn: "Please proceed to gate 12.",
      exKo: "12번 게이트로 이동하세요.",
    },
    senses: [
      {
        key: "continue",
        label: "계속 진행하다",
        exEn: "The trial proceeded without him.",
        exKo: "재판은 그 없이 진행되었다.",
        bridge: "멈추지 않고 앞으로 가다",
      },
      {
        key: "goOnTo",
        label: "이어서 ~하다 (proceed to)",
        exEn: "She proceeded to explain her reasons.",
        exKo: "그녀는 이어서 이유를 설명했다.",
        bridge: "다음 걸음으로 넘어가다",
      },
      {
        key: "arise",
        label: "비롯되다 (proceed from)",
        exEn: "The error proceeds from a false premise.",
        exKo: "그 오류는 잘못된 전제에서 비롯된다.",
        bridge: "거기서부터 걸어 나오다",
      },
    ],
    context: [
      {
        sentence: "Science <b>proceeds</b> by discarding what fails the test.",
        senseKey: "continue",
        gloss: "나아가다·진행되다",
      },
      {
        sentence: "Much confusion <b>proceeds</b> from a single ambiguous word.",
        senseKey: "arise",
        gloss: "(~에서) 비롯되다",
      },
    ],
    reverse: {
      senseKey: "continue",
      scene: "그 공사가 계획대로 진행되고 있다는 뜻으로",
      sample: "The work is proceeding as planned.",
    },
  },
  {
    id: "exceed",
    word: "exceed",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "선을 넘어 나가다",
      image: "그어 둔 금을 밟고 그 바깥으로 넘어가는 그림 (ex + cedere, 밖으로 가다)",
      exEn: "Do not exceed the speed limit.",
      exKo: "제한 속도를 넘기지 마라.",
    },
    senses: [
      {
        key: "surpass",
        label: "초과하다·넘어서다",
        exEn: "Demand exceeded supply.",
        exKo: "수요가 공급을 넘어섰다.",
        bridge: "정해진 선 밖으로 나가다",
      },
      {
        key: "beBetter",
        label: "능가하다",
        exEn: "The results exceeded our hopes.",
        exKo: "결과는 우리 기대를 뛰어넘었다.",
        bridge: "기대선을 넘어 저쪽까지",
      },
      {
        key: "goBeyond",
        label: "(권한을) 벗어나다",
        exEn: "The officer exceeded his authority.",
        exKo: "그 관리는 권한을 넘어섰다.",
        bridge: "허락된 테두리를 넘다",
      },
    ],
    context: [
      {
        sentence: "The costs <b>exceeded</b> every early estimate.",
        senseKey: "surpass",
        gloss: "넘어서다·초과하다",
      },
      {
        sentence: "The machine's speed now <b>exceeds</b> that of any human.",
        senseKey: "beBetter",
        gloss: "능가하다",
      },
    ],
    reverse: {
      senseKey: "surpass",
      scene: "그 수치가 지난해 기록을 넘어섰다는 뜻으로",
      sample: "The figure exceeded last year's record.",
    },
  },
  {
    id: "precede",
    word: "precede",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "앞서서 가다",
      image: "남보다 먼저 나가 앞자리를 차지하는 그림 (prae + cedere, 앞서 가다)",
      exEn: "A short speech preceded the concert.",
      exKo: "짧은 연설이 공연에 앞섰다.",
    },
    senses: [
      {
        key: "comeBefore",
        label: "~보다 먼저 일어나다",
        exEn: "Lightning precedes thunder.",
        exKo: "번개가 천둥보다 먼저다.",
        bridge: "시간의 줄에서 앞에 서다",
      },
      {
        key: "rank",
        label: "(순위가) 앞서다",
        exEn: "Safety precedes speed.",
        exKo: "속도보다 안전이 우선이다.",
        bridge: "중요도의 줄에서 앞에 놓이다",
      },
      {
        key: "introduce",
        label: "앞에 놓여 이끌다",
        exEn: "A brief note precedes each chapter.",
        exKo: "각 장 앞에 짧은 안내가 붙어 있다.",
        bridge: "본문보다 먼저 나서다",
      },
    ],
    context: [
      {
        sentence: "In most languages, the subject <b>precedes</b> the verb.",
        senseKey: "comeBefore",
        gloss: "앞에 오다·선행하다",
      },
      {
        sentence: "In every safety code, caution <b>precedes</b> speed.",
        senseKey: "rank",
        gloss: "(순위가) 앞서다·우선하다",
      },
    ],
    reverse: {
      senseKey: "comeBefore",
      scene: "그 발견에 오랜 실패가 앞섰다는 뜻으로",
      sample: "Years of failure preceded the discovery.",
    },
  },
  {
    id: "succeed",
    word: "succeed",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "뒤따라 가다",
      image: "앞사람 바로 뒤를 이어 걸어가는 그림 (sub + cedere, 아래·뒤로 가다)",
      exEn: "She succeeded her father as director.",
      exKo: "그녀는 아버지의 뒤를 이어 관장이 되었다.",
    },
    senses: [
      {
        key: "achieve",
        label: "성공하다",
        exEn: "Few succeed on the first try.",
        exKo: "첫 시도에 성공하는 사람은 드물다.",
        bridge: "끝까지 따라가 결국 닿다",
      },
      {
        key: "followAfter",
        label: "뒤를 잇다·계승하다",
        exEn: "Winter succeeds autumn.",
        exKo: "가을 다음에 겨울이 온다.",
        bridge: "바로 뒤에 이어 오다",
      },
      {
        key: "consecutive",
        label: "연이은 (successive)",
        exEn: "Three successive failures followed.",
        exKo: "세 번의 연이은 실패가 뒤따랐다.",
        bridge: "줄줄이 뒤를 이어 가다",
      },
    ],
    context: [
      {
        sentence: "No civilization has ever <b>succeeded</b> in stopping change.",
        senseKey: "achieve",
        gloss: "성공하다·해내다",
      },
      {
        sentence: "Each ruler <b>succeeded</b> the last without conflict.",
        senseKey: "followAfter",
        gloss: "뒤를 잇다·계승하다",
      },
    ],
    reverse: {
      senseKey: "followAfter",
      scene: "그가 형의 뒤를 이어 왕이 되었다는 뜻으로",
      sample: "He succeeded his brother as king.",
    },
  },

  // ── struere 쌓다 ─────────────────────────────────────────────
  {
    id: "construct",
    word: "construct",
    pos: "동사·명사",
    tier: 5,
    rank: 0,
    core: {
      ko: "함께 쌓아 세우다",
      image: "조각들을 차곡차곡 쌓아 하나를 세우는 그림 (con + struere, 함께 쌓다)",
      exEn: "They constructed a bridge.",
      exKo: "그들은 다리를 건설했다.",
    },
    senses: [
      {
        key: "build",
        label: "구성하다·짜다",
        exEn: "He constructed a careful argument.",
        exKo: "그는 치밀한 논증을 짰다.",
        bridge: "논리도 벽돌처럼 쌓아 올린다",
      },
      {
        key: "createIdea",
        label: "(개념을) 만들어 내다",
        exEn: "Memory is constructed, not recorded.",
        exKo: "기억은 기록되는 것이 아니라 구성되는 것이다.",
        bridge: "조각을 모아 그때그때 세우다",
      },
      {
        key: "concept",
        label: "구성 개념",
        exEn: "\"Race\" is a social construct.",
        exKo: "'인종'은 사회적 구성물이다.",
        bridge: "사람이 쌓아 만든 것",
      },
    ],
    context: [
      {
        sentence: "The brain <b>constructs</b> what we see from incomplete signals.",
        senseKey: "createIdea",
        gloss: "구성하다·만들어 내다",
      },
      {
        sentence: "Childhood is partly a social <b>construct</b>.",
        senseKey: "concept",
        gloss: "구성 개념·만들어진 것",
      },
    ],
    reverse: {
      senseKey: "createIdea",
      scene: "우리는 기억을 그때그때 새로 구성한다는 뜻으로",
      sample: "We construct our memories each time we recall them.",
    },
  },
  {
    id: "instruct",
    word: "instruct",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "안에 차곡차곡 쌓아 주다",
      image: "머릿속에 지식을 한 겹씩 쌓아 넣는 그림 (in + struere, 안에 쌓다)",
      exEn: "She instructs beginners.",
      exKo: "그녀는 초보자를 가르친다.",
    },
    senses: [
      {
        key: "teach",
        label: "가르치다",
        exEn: "The manual instructs users step by step.",
        exKo: "그 설명서는 사용자를 단계별로 안내한다.",
        bridge: "머릿속에 순서대로 쌓아 주다",
      },
      {
        key: "order",
        label: "지시하다",
        exEn: "We were instructed to wait.",
        exKo: "우리는 기다리라는 지시를 받았다.",
        bridge: "할 일을 짜서 얹어 주다",
      },
      {
        key: "inform",
        label: "알려 주다",
        exEn: "The findings instruct future policy.",
        exKo: "그 결과는 향후 정책에 참고가 된다.",
        bridge: "쌓아 준 것이 판단의 바탕이 되다",
      },
    ],
    context: [
      {
        sentence: "Good textbooks <b>instruct</b> without telling students what to think.",
        senseKey: "teach",
        gloss: "가르치다·이끌다",
      },
      {
        sentence: "Participants were <b>instructed</b> not to discuss the task.",
        senseKey: "order",
        gloss: "지시받다",
      },
    ],
    reverse: {
      senseKey: "order",
      scene: "학생들은 조용히 있으라는 지시를 받았다는 뜻으로",
      sample: "The students were instructed to stay quiet.",
    },
  },
  {
    id: "obstruct",
    word: "obstruct",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "앞에 쌓아 막다",
      image: "길 앞에 돌을 쌓아 못 지나가게 하는 그림 (ob + struere, 앞에 쌓다)",
      exEn: "A fallen tree obstructed the road.",
      exKo: "쓰러진 나무가 길을 막았다.",
    },
    senses: [
      {
        key: "block",
        label: "가로막다",
        exEn: "Tall buildings obstruct the view.",
        exKo: "높은 건물이 전망을 가린다.",
        bridge: "앞에 쌓여 지나갈 수 없다",
      },
      {
        key: "hinder",
        label: "방해하다",
        exEn: "Red tape obstructs progress.",
        exKo: "관료적 절차가 진전을 방해한다.",
        bridge: "나아가려는 길에 쌓여 걸리다",
      },
      {
        key: "clog",
        label: "(통로를) 막다",
        exEn: "Fat can obstruct the arteries.",
        exKo: "지방이 동맥을 막을 수 있다.",
        bridge: "통로 안에 쌓여 흐름을 끊다",
      },
    ],
    context: [
      {
        sentence: "Fear of failure <b>obstructs</b> learning more than lack of talent.",
        senseKey: "hinder",
        gloss: "방해하다·가로막다",
      },
      {
        sentence: "Sediment gradually <b>obstructed</b> the harbor.",
        senseKey: "clog",
        gloss: "막다·메우다",
      },
    ],
    reverse: {
      senseKey: "hinder",
      scene: "낡은 규정이 개혁을 가로막는다는 뜻으로",
      sample: "Old rules obstruct reform.",
    },
  },
  {
    id: "destroy",
    word: "destroy",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "쌓은 것을 헐어 내리다",
      image: "차곡차곡 쌓아 올린 것을 무너뜨려 흩는 그림 (de + struere, 쌓은 것을 거꾸로)",
      exEn: "Fire destroyed the building.",
      exKo: "불이 그 건물을 무너뜨렸다.",
    },
    senses: [
      {
        key: "ruin",
        label: "파괴하다",
        exEn: "The storm destroyed the crops.",
        exKo: "폭풍이 농작물을 망쳤다.",
        bridge: "세워진 것을 헐어 없애다",
      },
      {
        key: "undo",
        label: "(관계·신뢰를) 무너뜨리다",
        exEn: "One lie destroyed years of trust.",
        exKo: "거짓말 하나가 수년의 신뢰를 무너뜨렸다.",
        bridge: "쌓아 온 것을 한 번에 헐다",
      },
      {
        key: "eliminate",
        label: "없애다·박멸하다",
        exEn: "The disease was destroyed by vaccination.",
        exKo: "그 병은 예방접종으로 박멸되었다.",
        bridge: "남김없이 헐어 치우다",
      },
    ],
    context: [
      {
        sentence: "Habitat loss <b>destroys</b> more species than hunting does.",
        senseKey: "ruin",
        gloss: "파괴하다·멸종시키다",
      },
      {
        sentence: "A single scandal <b>destroyed</b> the party's credibility.",
        senseKey: "undo",
        gloss: "무너뜨리다",
      },
    ],
    reverse: {
      senseKey: "undo",
      scene: "그 사건이 두 나라의 신뢰를 무너뜨렸다는 뜻으로",
      sample: "The incident destroyed trust between the two countries.",
    },
  },

  // ── plicare 접다 ─────────────────────────────────────────────
  {
    id: "imply",
    word: "imply",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "안으로 접어 넣다",
      image: "말 속에 뜻을 접어 넣어 겉으로 안 보이게 하는 그림 (in + plicare, 안으로 접다)",
      exEn: "His tone implied doubt.",
      exKo: "그의 어조에는 의심이 담겨 있었다.",
    },
    senses: [
      {
        key: "suggest",
        label: "암시하다·함축하다",
        exEn: "Silence does not imply agreement.",
        exKo: "침묵이 동의를 뜻하지는 않는다.",
        bridge: "겉말 안에 뜻을 접어 두다",
      },
      {
        key: "entail",
        label: "필연적으로 뜻하다",
        exEn: "Freedom implies responsibility.",
        exKo: "자유는 곧 책임을 뜻한다.",
        bridge: "안에 이미 접혀 들어 있다",
      },
      {
        key: "hint",
        label: "넌지시 내비치다",
        exEn: "Are you implying that I lied?",
        exKo: "내가 거짓말했다는 말인가?",
        bridge: "펴 놓지 않고 접은 채 건네다",
      },
    ],
    context: [
      {
        sentence: "Correlation does not <b>imply</b> causation.",
        senseKey: "entail",
        gloss: "의미하다·함축하다",
      },
      {
        sentence: "The author never says it outright, but the ending <b>implies</b> failure.",
        senseKey: "suggest",
        gloss: "암시하다",
      },
    ],
    reverse: {
      senseKey: "suggest",
      scene: "그 결과가 정반대를 암시한다는 뜻으로",
      sample: "The result implies the opposite.",
    },
  },
  {
    id: "comply",
    word: "comply",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "요구에 맞게 접어 맞추다",
      image: "정해진 틀에 맞도록 자기를 접어 넣는 그림 (com + plicare, 함께 접다)",
      exEn: "All drivers must comply.",
      exKo: "모든 운전자는 따라야 한다.",
    },
    senses: [
      {
        key: "obey",
        label: "따르다·준수하다 (comply with)",
        exEn: "The factory complies with safety rules.",
        exKo: "그 공장은 안전 규정을 준수한다.",
        bridge: "규정 모양에 자기를 맞춰 접다",
      },
      {
        key: "agreeTo",
        label: "응하다",
        exEn: "She complied with his request.",
        exKo: "그녀는 그의 요청에 응했다.",
        bridge: "요구에 맞춰 몸을 접다",
      },
      {
        key: "conform",
        label: "부합하다",
        exEn: "The design complies with the standard.",
        exKo: "그 설계는 규격에 부합한다.",
        bridge: "틀에 딱 맞게 접히다",
      },
    ],
    context: [
      {
        sentence: "Companies that fail to <b>comply</b> face heavy fines.",
        senseKey: "obey",
        gloss: "(규정을) 준수하다",
      },
      {
        sentence: "People <b>comply</b> more readily when they see others doing so.",
        senseKey: "agreeTo",
        gloss: "따르다·응하다",
      },
    ],
    reverse: {
      senseKey: "obey",
      scene: "모든 학교가 그 규정을 준수해야 한다는 뜻으로",
      sample: "Every school must comply with the rule.",
    },
  },
  {
    id: "reply",
    word: "reply",
    pos: "동사·명사",
    tier: 5,
    rank: 0,
    core: {
      ko: "되접어 돌려보내다",
      image: "받은 것을 접어 그대로 되돌려 보내는 그림 (re + plicare, 되접다)",
      exEn: "He replied at once.",
      exKo: "그는 즉시 답했다.",
    },
    senses: [
      {
        key: "answer",
        label: "대답하다",
        exEn: "She replied that it was too late.",
        exKo: "그녀는 너무 늦었다고 답했다.",
        bridge: "온 말을 되접어 돌려주다",
      },
      {
        key: "respondTo",
        label: "회신하다 (reply to)",
        exEn: "Please reply to this email.",
        exKo: "이 메일에 회신해 주세요.",
        bridge: "받은 쪽으로 되돌려 보내다",
      },
      {
        key: "response",
        label: "답변",
        exEn: "We received no reply.",
        exKo: "우리는 아무 답도 받지 못했다.",
        bridge: "되돌아온 그것",
      },
    ],
    context: [
      {
        sentence: "Critics attacked the claim; the author never <b>replied</b>.",
        senseKey: "answer",
        gloss: "답하다·응수하다",
      },
      {
        sentence: "Only a third of those asked sent a <b>reply</b>.",
        senseKey: "response",
        gloss: "답변·회신",
      },
    ],
    reverse: {
      senseKey: "answer",
      scene: "그녀는 그 질문에 답하지 않았다는 뜻으로",
      sample: "She did not reply to the question.",
    },
  },
  {
    id: "employ",
    word: "employ",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "안으로 접어 넣어 쓰다",
      image: "사람이나 수단을 일 안으로 끌어 접어 넣는 그림 (in + plicare, 안으로 접다)",
      exEn: "The company employs 200 people.",
      exKo: "그 회사는 200명을 고용한다.",
    },
    senses: [
      {
        key: "use",
        label: "(방법을) 쓰다·활용하다",
        exEn: "The study employs a new method.",
        exKo: "그 연구는 새로운 방법을 쓴다.",
        bridge: "수단을 일 안으로 끌어들여 쓰다",
      },
      {
        key: "hire",
        label: "고용하다",
        exEn: "They employed a local guide.",
        exKo: "그들은 현지 안내인을 고용했다.",
        bridge: "사람을 일 안으로 접어 넣다",
      },
      {
        key: "occupy",
        label: "(시간을) 쓰다",
        exEn: "He employed the evening in reading.",
        exKo: "그는 저녁 시간을 독서로 보냈다.",
        bridge: "시간을 그 일에 접어 넣다",
      },
    ],
    context: [
      {
        sentence: "Writers <b>employ</b> metaphor to make the abstract visible.",
        senseKey: "use",
        gloss: "사용하다·구사하다",
      },
      {
        sentence: "The factory <b>employs</b> nearly a thousand workers.",
        senseKey: "hire",
        gloss: "고용하다",
      },
    ],
    reverse: {
      senseKey: "use",
      scene: "그 연구가 전혀 다른 방법을 사용한다는 뜻으로",
      sample: "The study employs a very different method.",
    },
  },

  // ── vocare 부르다 ────────────────────────────────────────────
  {
    id: "evoke",
    word: "evoke",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "불러내다",
      image: "속에 잠자던 것을 소리쳐 밖으로 불러내는 그림 (e + vocare, 밖으로 부르다)",
      exEn: "The song evoked old memories.",
      exKo: "그 노래가 옛 기억을 불러냈다.",
    },
    senses: [
      {
        key: "recall",
        label: "(기억·감정을) 떠올리게 하다",
        exEn: "The smell evokes childhood.",
        exKo: "그 냄새가 어린 시절을 떠올리게 한다.",
        bridge: "묻혀 있던 것을 불러 올리다",
      },
      {
        key: "produce",
        label: "(반응을) 자아내다",
        exEn: "The image evoked strong reactions.",
        exKo: "그 이미지는 강한 반응을 자아냈다.",
        bridge: "없던 반응을 불러 일으키다",
      },
      {
        key: "conjure",
        label: "생생히 그려 내다",
        exEn: "The novel evokes a lost world.",
        exKo: "그 소설은 사라진 세계를 생생히 그려 낸다.",
        bridge: "말로 불러내 눈앞에 세우다",
      },
    ],
    context: [
      {
        sentence: "Music <b>evokes</b> emotion faster than words do.",
        senseKey: "produce",
        gloss: "불러일으키다·자아내다",
      },
      {
        sentence: "The poem <b>evokes</b> a village that no longer exists.",
        senseKey: "conjure",
        gloss: "떠올리게 하다·그려 내다",
      },
    ],
    reverse: {
      senseKey: "recall",
      scene: "그 사진이 오래된 기억을 떠올리게 했다는 뜻으로",
      sample: "The photograph evoked old memories.",
    },
  },
  {
    id: "provoke",
    word: "provoke",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "앞으로 불러내 건드리다",
      image: "가만있는 것을 앞으로 불러내 자극하는 그림 (pro + vocare, 앞으로 부르다)",
      exEn: "Don't provoke the dog.",
      exKo: "개를 건드리지 마라.",
    },
    senses: [
      {
        key: "trigger",
        label: "(반응을) 유발하다",
        exEn: "The remark provoked laughter.",
        exKo: "그 말이 웃음을 자아냈다.",
        bridge: "건드려 반응을 불러내다",
      },
      {
        key: "anger",
        label: "화나게 하다·자극하다",
        exEn: "He was provoked into shouting.",
        exKo: "그는 자극을 받아 소리쳤다.",
        bridge: "앞으로 불러내 성을 돋우다",
      },
      {
        key: "stimulate",
        label: "(생각을) 불러일으키다",
        exEn: "A good question provokes thought.",
        exKo: "좋은 질문은 생각을 불러일으킨다.",
        bridge: "잠자던 생각을 건드려 깨우다",
      },
    ],
    context: [
      {
        sentence: "The article <b>provoked</b> a debate that lasted for years.",
        senseKey: "trigger",
        gloss: "촉발하다·불러일으키다",
      },
      {
        sentence: "Art that <b>provokes</b> is often more useful than art that pleases.",
        senseKey: "stimulate",
        gloss: "자극하다·생각하게 하다",
      },
    ],
    reverse: {
      senseKey: "trigger",
      scene: "그 발언이 강한 반발을 불러일으켰다는 뜻으로",
      sample: "The remark provoked strong opposition.",
    },
  },
  {
    id: "invoke",
    word: "invoke",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "안으로 불러들이다",
      image: "필요할 때 그 이름을 불러 이쪽으로 데려오는 그림 (in + vocare, 안으로 부르다)",
      exEn: "She invoked an old law.",
      exKo: "그녀는 오래된 법을 근거로 들었다.",
    },
    senses: [
      {
        key: "cite",
        label: "(근거를) 들이대다",
        exEn: "He invoked tradition to justify the rule.",
        exKo: "그는 전통을 들어 그 규칙을 정당화했다.",
        bridge: "필요한 권위를 불러 세우다",
      },
      {
        key: "applyRule",
        label: "(권한을) 발동하다",
        exEn: "The government invoked emergency powers.",
        exKo: "정부는 비상 권한을 발동했다.",
        bridge: "잠자던 조항을 불러 쓰다",
      },
      {
        key: "callUp",
        label: "(감정을) 불러오다",
        exEn: "The word invokes a sense of loss.",
        exKo: "그 단어는 상실감을 불러온다.",
        bridge: "이름을 불러 그것을 데려오다",
      },
    ],
    context: [
      {
        sentence: "Writers often <b>invoke</b> science to lend weight to weak claims.",
        senseKey: "cite",
        gloss: "끌어대다·내세우다",
      },
      {
        sentence: "The court <b>invoked</b> a clause written a century earlier.",
        senseKey: "applyRule",
        gloss: "적용하다·발동하다",
      },
    ],
    reverse: {
      senseKey: "cite",
      scene: "그가 자기 주장을 뒷받침하려고 그 연구를 끌어댔다는 뜻으로",
      sample: "He invoked the study to support his claim.",
    },
  },
  {
    id: "advocate",
    word: "advocate",
    pos: "동사·명사",
    tier: 5,
    rank: 0,
    core: {
      ko: "곁으로 불러 편들다",
      image: "법정에서 그 사람 곁으로 불려 나가 대신 말해 주는 그림 (ad + vocare, ~쪽으로 부르다)",
      exEn: "She advocates for children's rights.",
      exKo: "그녀는 아동 권리를 옹호한다.",
    },
    senses: [
      {
        key: "support",
        label: "지지하다·주장하다",
        exEn: "Many scientists advocate stricter limits.",
        exKo: "많은 과학자가 더 엄격한 제한을 주장한다.",
        bridge: "그 편으로 불려 나가 말하다",
      },
      {
        key: "person",
        label: "옹호자·지지자",
        exEn: "He became an advocate of reform.",
        exKo: "그는 개혁의 옹호자가 되었다.",
        bridge: "그 편에 서서 말해 주는 사람",
      },
      {
        key: "recommend",
        label: "권장하다",
        exEn: "Doctors advocate regular exercise.",
        exKo: "의사들은 규칙적인 운동을 권한다.",
        bridge: "좋다고 편들어 내세우다",
      },
    ],
    context: [
      {
        sentence: "The report <b>advocates</b> teaching failure as part of the curriculum.",
        senseKey: "support",
        gloss: "주장하다·지지하다",
      },
      {
        sentence: "She was an early <b>advocate</b> of open data.",
        senseKey: "person",
        gloss: "옹호자·지지자",
      },
    ],
    reverse: {
      senseKey: "support",
      scene: "그 단체가 더 강력한 환경 규제를 주장한다는 뜻으로",
      sample: "The group advocates stronger environmental rules.",
    },
  },
];
