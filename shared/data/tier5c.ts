// Tier 5 확장 3차 — 추상 라틴계 20개.
// 이번엔 **다섯 어근 × 네 형제**로 대칭을 맞췄다. 접두사가 뜻을 어떻게 비트는지가
// 나란히 놓여야 보이기 때문이다. 앱에서 네 개를 차례로 눌러 보는 것이 이 묶음의 사용법이다.
//
//   ferre 나르다   : confer · infer · differ · suffer
//   capere 잡다    : accept · perceive · conceive · receive
//   spectare 보다  : aspect · respect · inspect · suspect
//   mittere 보내다 : admit · commit · permit · submit
//   tendere 뻗다   : attend · intend · pretend · contend
import type { Word } from "../types.ts";

export const TIER5C: Word[] = [
  // ── ferre 나르다 ──────────────────────────────────────────────
  {
    id: "confer",
    word: "confer",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "함께 가져와 놓다",
      image: "각자 가진 것을 한자리에 들고 와 맞대는 그림 (con + ferre, 함께 나르다)",
      exEn: "The judges conferred briefly.",
      exKo: "심사위원들이 잠시 의논했다.",
    },
    senses: [
      {
        key: "grant",
        label: "(자격을) 수여하다",
        exEn: "The degree was conferred in June.",
        exKo: "그 학위는 6월에 수여되었다.",
        bridge: "가진 것을 상대 쪽으로 가져다 놓다",
      },
      {
        key: "discuss",
        label: "협의하다",
        exEn: "She conferred with her lawyer.",
        exKo: "그녀는 변호사와 협의했다.",
        bridge: "각자 의견을 한자리에 가져와 맞대다",
      },
      {
        key: "giveQuality",
        label: "(성질을) 부여하다",
        exEn: "The coating confers resistance to rust.",
        exKo: "그 도막이 녹에 대한 저항성을 준다.",
        bridge: "없던 성질을 실어다 얹어 주다",
      },
    ],
    context: [
      {
        sentence: "Longer legs <b>confer</b> a clear advantage in open ground.",
        senseKey: "giveQuality",
        gloss: "(이점을) 부여하다·주다",
      },
      {
        sentence: "The title was <b>conferred</b> on him after his death.",
        senseKey: "grant",
        gloss: "수여되다",
      },
    ],
    reverse: {
      senseKey: "giveQuality",
      scene: "그 특성이 생존에 이점을 준다는 뜻으로",
      sample: "The trait confers an advantage in survival.",
    },
  },
  {
    id: "infer",
    word: "infer",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "안으로 실어 들이다",
      image: "겉에 드러난 단서에서 속뜻을 실어 오는 그림 (in + ferre, 안으로 나르다)",
      exEn: "What can we infer from this?",
      exKo: "여기서 무엇을 추론할 수 있는가?",
    },
    senses: [
      {
        key: "conclude",
        label: "추론하다·미루어 알다",
        exEn: "We infer the cause from the pattern.",
        exKo: "우리는 그 양상에서 원인을 추론한다.",
        bridge: "밖의 단서에서 속의 뜻을 실어 오다",
      },
      {
        // ⚠️ infer 를 "함축하다(imply)"로 가르치면 안 된다 — 정확히 반대 방향이다.
        // 글이 imply 하고, 읽는 사람이 infer 한다. 수능에서 이 구분을 묻는다.
        key: "estimate",
        label: "(수치를) 추정해 내다",
        exEn: "Astronomers infer a star's mass from its brightness.",
        exKo: "천문학자들은 별의 밝기에서 질량을 추정한다.",
        bridge: "잴 수 없는 값을 잰 값에서 실어 오다",
      },
      {
        key: "deduceIdentity",
        label: "짐작하다",
        exEn: "From her silence he inferred refusal.",
        exKo: "그녀의 침묵에서 그는 거절을 읽었다.",
        bridge: "말하지 않은 것을 안으로 들여 읽다",
      },
    ],
    context: [
      {
        sentence: "Readers must <b>infer</b> the writer's purpose from tone and structure.",
        senseKey: "conclude",
        gloss: "추론하다·읽어 내다",
      },
      {
        sentence: "Scientists <b>infer</b> the age of the ice from the layers within it.",
        senseKey: "estimate",
        gloss: "(수치를) 추정하다",
      },
    ],
    reverse: {
      senseKey: "conclude",
      scene: "우리는 그 결과에서 아무것도 추론할 수 없다는 뜻으로",
      sample: "We cannot infer anything from that result.",
    },
  },
  {
    id: "differ",
    word: "differ",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "따로따로 실려 갈라지다",
      image: "같은 자리에 있던 둘이 서로 다른 쪽으로 실려 가는 그림 (dis + ferre, 따로 나르다)",
      exEn: "The two versions differ slightly.",
      exKo: "그 두 판본은 조금 다르다.",
    },
    senses: [
      {
        key: "vary",
        label: "다르다·차이가 나다",
        exEn: "Customs differ from country to country.",
        exKo: "관습은 나라마다 다르다.",
        bridge: "각기 다른 쪽으로 갈라져 있다",
      },
      {
        key: "disagree",
        label: "의견이 갈리다",
        exEn: "Experts differ on this point.",
        exKo: "전문가들은 이 점에서 의견이 갈린다.",
        bridge: "생각이 서로 다른 쪽으로 실려 가다",
      },
      {
        key: "postpone",
        label: "미루다 (defer — 뒤로 나르다)",
        exEn: "They deferred the decision.",
        exKo: "그들은 결정을 미뤘다.",
        bridge: "같은 뿌리에서 '뒤로 나르면' 미루기가 된다",
      },
    ],
    context: [
      {
        sentence: "Human memory <b>differs</b> from a recording in one crucial way.",
        senseKey: "vary",
        gloss: "다르다·차이가 있다",
      },
      {
        sentence: "Scholars <b>differ</b> sharply over the date of the text.",
        senseKey: "disagree",
        gloss: "의견이 갈리다",
      },
    ],
    reverse: {
      senseKey: "vary",
      scene: "그 두 이론이 근본적으로 다르다는 뜻으로",
      sample: "The two theories differ fundamentally.",
    },
  },
  {
    id: "suffer",
    word: "suffer",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "아래에서 짊어지고 나르다",
      image: "무게를 밑에서 받아 안고 견디며 가는 그림 (sub + ferre, 아래에서 나르다)",
      exEn: "He suffered in silence.",
      exKo: "그는 말없이 견뎠다.",
    },
    senses: [
      {
        key: "undergo",
        label: "(피해를) 입다",
        exEn: "The region suffered severe flooding.",
        exKo: "그 지역은 심한 홍수 피해를 입었다.",
        bridge: "닥친 것을 밑에서 떠안다",
      },
      {
        key: "worsen",
        label: "나빠지다·타격을 받다",
        exEn: "Quality suffers when you rush.",
        exKo: "서두르면 품질이 떨어진다.",
        bridge: "짐을 진 쪽이 눌려 내려앉다",
      },
      {
        key: "ail",
        label: "앓다 (suffer from)",
        exEn: "She suffers from migraines.",
        exKo: "그녀는 편두통을 앓는다.",
        bridge: "병이라는 짐을 지고 있다",
      },
    ],
    context: [
      {
        sentence: "Attention <b>suffers</b> when we switch tasks too often.",
        senseKey: "worsen",
        gloss: "나빠지다·떨어지다",
      },
      {
        sentence: "Millions <b>suffer</b> from a lack of clean water.",
        senseKey: "ail",
        gloss: "(~로) 고통받다",
      },
    ],
    reverse: {
      senseKey: "worsen",
      scene: "잠이 부족하면 기억력이 나빠진다는 뜻으로",
      sample: "Memory suffers when we lack sleep.",
    },
  },

  // ── capere 잡다 ──────────────────────────────────────────────
  {
    id: "accept",
    word: "accept",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "~쪽으로 받아 잡다",
      image: "건네 오는 것을 손을 내밀어 받아 쥐는 그림 (ad + capere, ~를 향해 잡다)",
      exEn: "She accepted the gift.",
      exKo: "그녀는 선물을 받았다.",
    },
    senses: [
      {
        key: "agree",
        label: "받아들이다·인정하다",
        exEn: "Most scientists accept the theory.",
        exKo: "대부분의 과학자가 그 이론을 받아들인다.",
        bridge: "내미는 생각을 손에 받아 쥐다",
      },
      {
        key: "admitIn",
        label: "(입학·입회를) 허락하다",
        exEn: "He was accepted into the program.",
        exKo: "그는 그 과정에 합격했다.",
        bridge: "안으로 받아 들이다",
      },
      {
        key: "resign",
        label: "감수하다·체념하고 받다",
        exEn: "We must accept that some risk remains.",
        exKo: "어느 정도 위험은 남는다는 것을 받아들여야 한다.",
        bridge: "피하지 않고 손에 쥐다",
      },
    ],
    context: [
      {
        sentence: "It took decades for the idea to be widely <b>accepted</b>.",
        senseKey: "agree",
        gloss: "받아들여지다·인정되다",
      },
      {
        sentence: "Good thinkers <b>accept</b> that they may be wrong.",
        senseKey: "resign",
        gloss: "인정하다·감수하다",
      },
    ],
    reverse: {
      senseKey: "agree",
      scene: "학계가 그 설명을 널리 받아들인다는 뜻으로",
      sample: "Scholars widely accept that explanation.",
    },
  },
  {
    id: "perceive",
    word: "perceive",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "속속들이 붙잡아 알다",
      image: "감각이 대상을 통째로 붙들어 마음에 들이는 그림 (per + capere, 철저히 잡다)",
      exEn: "We perceive color differently in dim light.",
      exKo: "우리는 어두운 빛에서 색을 다르게 지각한다.",
    },
    senses: [
      {
        key: "sense",
        label: "지각하다·감지하다",
        exEn: "The eye perceives motion before shape.",
        exKo: "눈은 형태보다 움직임을 먼저 감지한다.",
        bridge: "감각이 대상을 붙들어 오다",
      },
      {
        key: "regardAs",
        label: "~로 인식하다 (perceive as)",
        exEn: "Risk is perceived as greater when it is unfamiliar.",
        exKo: "낯선 위험일수록 더 크게 인식된다.",
        bridge: "붙잡아 온 것을 그렇게 자리매김하다",
      },
      {
        key: "realize",
        label: "알아차리다",
        exEn: "He perceived a change in her tone.",
        exKo: "그는 그녀의 어조가 달라진 것을 알아챘다.",
        bridge: "미세한 것까지 붙들어 알다",
      },
    ],
    context: [
      {
        sentence: "What we <b>perceive</b> is shaped by what we expect to see.",
        senseKey: "sense",
        gloss: "지각하다·인지하다",
      },
      {
        sentence: "Behavior seen as rude in one culture is <b>perceived</b> as honest in another.",
        senseKey: "regardAs",
        gloss: "~로 인식되다",
      },
    ],
    reverse: {
      senseKey: "regardAs",
      scene: "사람들이 그 변화를 위협으로 인식한다는 뜻으로",
      sample: "People perceive the change as a threat.",
    },
  },
  {
    id: "conceive",
    word: "conceive",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "안에 붙들어 품다",
      image: "씨앗을 안에 품어 자라게 하는 그림 (con + capere, 함께 잡아 품다)",
      exEn: "She conceived the idea on a walk.",
      exKo: "그녀는 산책 중에 그 발상을 떠올렸다.",
    },
    senses: [
      {
        key: "imagine",
        label: "생각해 내다·상상하다",
        exEn: "It is hard to conceive of infinity.",
        exKo: "무한을 머릿속에 그리기는 어렵다.",
        bridge: "머릿속에 품어 형태를 만들다",
      },
      {
        key: "devise",
        label: "구상하다",
        exEn: "The plan was conceived in secret.",
        exKo: "그 계획은 비밀리에 구상되었다.",
        bridge: "안에서 품어 키워 내다",
      },
      {
        key: "becomePregnant",
        label: "임신하다",
        exEn: "The species conceives only once a year.",
        exKo: "그 종은 일 년에 한 번만 새끼를 밴다.",
        bridge: "몸 안에 생명을 품다",
      },
    ],
    context: [
      {
        sentence: "Early humans could not <b>conceive</b> of the earth as a sphere.",
        senseKey: "imagine",
        gloss: "생각하다·머릿속에 그리다",
      },
      {
        sentence: "The museum was <b>conceived</b> as a place for children.",
        senseKey: "devise",
        gloss: "구상되다·기획되다",
      },
    ],
    reverse: {
      senseKey: "imagine",
      scene: "그런 세상은 상상하기 어렵다는 뜻으로",
      sample: "It is hard to conceive of such a world.",
    },
  },
  {
    id: "receive",
    word: "receive",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "되돌아온 것을 잡다",
      image: "저쪽에서 온 것을 이쪽에서 받아 쥐는 그림 (re + capere, 되받아 잡다)",
      exEn: "I received your letter.",
      exKo: "네 편지를 받았다.",
    },
    senses: [
      {
        key: "get",
        label: "받다",
        exEn: "The team received an award.",
        exKo: "그 팀은 상을 받았다.",
        bridge: "건너온 것을 손에 쥐다",
      },
      {
        key: "beTreated",
        label: "(대우를) 받다",
        exEn: "The proposal received strong criticism.",
        exKo: "그 제안은 강한 비판을 받았다.",
        bridge: "쏟아진 것을 그대로 받아 안다",
      },
      {
        key: "welcome",
        label: "맞이하다",
        exEn: "The host received us warmly.",
        exKo: "주인은 우리를 따뜻하게 맞았다.",
        bridge: "오는 사람을 받아 들이다",
      },
    ],
    context: [
      {
        sentence: "Ideas that challenge belief rarely <b>receive</b> a fair hearing.",
        senseKey: "beTreated",
        gloss: "(대우를) 받다",
      },
      {
        sentence: "Plants near the window <b>receive</b> more light.",
        senseKey: "get",
        gloss: "받다",
      },
    ],
    reverse: {
      senseKey: "beTreated",
      scene: "그 영화가 엇갈린 평가를 받았다는 뜻으로",
      sample: "The film received mixed reviews.",
    },
  },

  // ── spectare 보다 ────────────────────────────────────────────
  {
    id: "aspect",
    word: "aspect",
    pos: "명사",
    tier: 5,
    rank: 0,
    core: {
      ko: "~쪽에서 본 모습",
      image: "같은 것도 어느 방향에서 보느냐에 따라 달라 보이는 그림 (ad + spectare, ~쪽을 보다)",
      exEn: "Consider every aspect of the plan.",
      exKo: "그 계획의 모든 면을 고려하라.",
    },
    senses: [
      {
        key: "side",
        label: "측면·면",
        exEn: "This aspect is often overlooked.",
        exKo: "이 측면은 자주 간과된다.",
        bridge: "그쪽에서 본 하나의 얼굴",
      },
      {
        key: "appearance",
        label: "겉모습·양상",
        exEn: "The town took on a festive aspect.",
        exKo: "그 마을은 축제 분위기를 띠었다.",
        bridge: "밖에서 보이는 그 모습",
      },
      {
        key: "facing",
        label: "(방향이) 향한 쪽",
        exEn: "The room has a southern aspect.",
        exKo: "그 방은 남향이다.",
        bridge: "어느 쪽을 바라보고 있는가",
      },
    ],
    context: [
      {
        sentence: "The study examines only one <b>aspect</b> of the problem.",
        senseKey: "side",
        gloss: "측면·부분",
      },
      {
        sentence: "The town took on a festive <b>aspect</b> during the holidays.",
        senseKey: "appearance",
        gloss: "겉모습·양상",
      },
    ],
    reverse: {
      senseKey: "side",
      scene: "그 문제의 모든 측면을 살펴야 한다는 뜻으로",
      sample: "We must look at every aspect of the problem.",
    },
  },
  {
    id: "respect",
    word: "respect",
    pos: "명사·동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "다시 돌아보다",
      image: "지나쳤다가 다시 고개를 돌려 눈여겨보는 그림 (re + spectare, 다시 보다)",
      exEn: "They respect their teacher.",
      exKo: "그들은 선생님을 존경한다.",
    },
    senses: [
      {
        key: "honor",
        label: "존중하다",
        exEn: "We must respect other views.",
        exKo: "우리는 다른 견해를 존중해야 한다.",
        bridge: "다시 돌아볼 만큼 값을 두다",
      },
      {
        key: "point",
        label: "점·측면 (in this respect)",
        exEn: "In one respect he was right.",
        exKo: "한 가지 점에서는 그가 옳았다.",
        bridge: "다시 들여다본 그 대목",
      },
      {
        key: "regarding",
        label: "~에 관하여 (with respect to)",
        exEn: "With respect to cost, the plan fails.",
        exKo: "비용에 관해서는 그 계획이 실패다.",
        bridge: "그쪽을 돌아보며 말하면",
      },
    ],
    context: [
      {
        sentence: "In this <b>respect</b>, the two cultures are strikingly alike.",
        senseKey: "point",
        gloss: "점·측면",
      },
      {
        sentence: "Good design <b>respects</b> the limits of the material.",
        senseKey: "honor",
        gloss: "존중하다·따르다",
      },
    ],
    reverse: {
      senseKey: "point",
      scene: "그 점에서는 두 이론이 같다는 뜻으로",
      sample: "In that respect the two theories are the same.",
    },
  },
  {
    id: "inspect",
    word: "inspect",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "안을 들여다보다",
      image: "겉만이 아니라 속까지 눈을 넣어 살피는 그림 (in + spectare, 안을 보다)",
      exEn: "An officer inspected our bags.",
      exKo: "직원이 우리 가방을 검사했다.",
    },
    senses: [
      {
        key: "examine",
        label: "점검하다·검사하다",
        exEn: "Engineers inspect the bridge yearly.",
        exKo: "기술자들이 해마다 다리를 점검한다.",
        bridge: "속까지 눈을 넣어 살피다",
      },
      {
        key: "scrutinize",
        label: "면밀히 살피다",
        exEn: "She inspected the document closely.",
        exKo: "그녀는 그 문서를 꼼꼼히 살폈다.",
        bridge: "빠뜨림 없이 안을 훑다",
      },
      {
        key: "review",
        label: "시찰하다",
        exEn: "The minister inspected the new facility.",
        exKo: "장관이 새 시설을 시찰했다.",
        bridge: "현장 안으로 들어가 보다",
      },
    ],
    context: [
      {
        sentence: "Scientists <b>inspect</b> the same data and reach different conclusions.",
        senseKey: "examine",
        gloss: "살펴보다·검토하다",
      },
      {
        sentence: "Every part is <b>inspected</b> before it leaves the factory.",
        senseKey: "scrutinize",
        gloss: "검사되다",
      },
    ],
    reverse: {
      senseKey: "examine",
      scene: "우리는 그 증거를 더 면밀히 살펴야 한다는 뜻으로",
      sample: "We should inspect the evidence more closely.",
    },
  },
  {
    id: "suspect",
    word: "suspect",
    pos: "동사·명사·형용사",
    tier: 5,
    rank: 0,
    core: {
      ko: "아래에서 슬쩍 올려다보다",
      image: "정면으로 못 보고 아래에서 곁눈질하는 그림 (sub + spectare, 아래에서 보다)",
      exEn: "Police suspect foul play.",
      exKo: "경찰은 범죄를 의심한다.",
    },
    senses: [
      {
        key: "doubt",
        label: "의심하다",
        exEn: "I suspect the data are incomplete.",
        exKo: "그 자료가 불완전하다는 의심이 든다.",
        bridge: "떳떳이 못 보고 곁눈으로 본다",
      },
      {
        key: "guess",
        label: "~인 것 같다·짐작하다",
        exEn: "I suspect she already knew.",
        exKo: "그녀는 이미 알고 있었던 것 같다.",
        bridge: "확신은 없이 넘겨짚어 보다",
      },
      {
        key: "dubious",
        label: "수상한 (형용사)",
        exEn: "The claim rests on suspect evidence.",
        exKo: "그 주장은 미심쩍은 증거에 기대고 있다.",
        bridge: "곁눈질을 받는 처지",
      },
    ],
    context: [
      {
        sentence: "Researchers <b>suspect</b> that the effect is much smaller than reported.",
        senseKey: "guess",
        gloss: "~라고 짐작하다",
      },
      {
        sentence: "Any study funded by the industry is treated as <b>suspect</b>.",
        senseKey: "dubious",
        gloss: "미심쩍은·의심스러운",
      },
    ],
    reverse: {
      senseKey: "guess",
      scene: "나는 그 답이 틀렸다고 짐작한다는 뜻으로",
      sample: "I suspect that the answer is wrong.",
    },
  },

  // ── mittere 보내다 ───────────────────────────────────────────
  {
    id: "admit",
    word: "admit",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "안으로 들여보내다",
      image: "문을 열어 안쪽으로 들여보내는 그림 (ad + mittere, ~로 보내다)",
      exEn: "Only members are admitted.",
      exKo: "회원만 입장할 수 있다.",
    },
    senses: [
      {
        key: "confess",
        label: "인정하다·시인하다",
        exEn: "He admitted his mistake.",
        exKo: "그는 자기 잘못을 인정했다.",
        bridge: "숨기던 사실을 안으로 들이다",
      },
      {
        key: "letIn",
        label: "입장·입학을 허가하다",
        exEn: "She was admitted to the university.",
        exKo: "그녀는 그 대학에 합격했다.",
        bridge: "문 안으로 들여보내다",
      },
      {
        key: "allowOf",
        label: "여지를 주다 (admit of)",
        exEn: "The rule admits of no exception.",
        exKo: "그 규칙에는 예외가 없다.",
        bridge: "그것이 들어올 틈을 주다",
      },
    ],
    context: [
      {
        sentence: "Even critics <b>admit</b> that the method works.",
        senseKey: "confess",
        gloss: "인정하다",
      },
      {
        sentence: "The evidence <b>admits</b> of more than one reading.",
        senseKey: "allowOf",
        gloss: "(~의) 여지가 있다",
      },
    ],
    reverse: {
      senseKey: "confess",
      scene: "그가 실수했다는 것을 인정했다는 뜻으로",
      sample: "He admitted that he had made a mistake.",
    },
  },
  {
    id: "commit",
    word: "commit",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "함께 맡겨 보내다",
      image: "손에 쥔 것을 상대에게 넘겨 맡기는 그림 (con + mittere, 함께 보내다)",
      exEn: "She committed the poem to memory.",
      exKo: "그녀는 그 시를 외웠다.",
    },
    senses: [
      {
        key: "pledge",
        label: "전념하다·약속하다 (commit to)",
        exEn: "The company committed to cutting waste.",
        exKo: "그 회사는 폐기물 감축을 약속했다.",
        bridge: "자기를 그쪽에 맡겨 버리다",
      },
      {
        key: "doWrong",
        label: "(잘못을) 저지르다",
        exEn: "He committed a serious error.",
        exKo: "그는 심각한 오류를 저질렀다.",
        bridge: "손을 떠나 되돌릴 수 없게 보내다",
      },
      {
        key: "entrust",
        label: "맡기다·부치다",
        exEn: "The task was committed to a small team.",
        exKo: "그 일은 소규모 팀에 맡겨졌다.",
        bridge: "남의 손으로 보내 두다",
      },
    ],
    context: [
      {
        sentence: "Learners who <b>commit</b> to a routine progress fastest.",
        senseKey: "pledge",
        gloss: "전념하다·헌신하다",
      },
      {
        sentence: "The same error is <b>committed</b> in almost every textbook.",
        senseKey: "doWrong",
        gloss: "(오류를) 범하다",
      },
    ],
    reverse: {
      senseKey: "pledge",
      scene: "그들이 그 계획에 전념하기로 했다는 뜻으로",
      sample: "They committed to the plan.",
    },
  },
  {
    id: "permit",
    word: "permit",
    pos: "동사·명사",
    tier: 5,
    rank: 0,
    core: {
      ko: "통과해 지나가게 보내다",
      image: "막지 않고 그대로 지나가게 두는 그림 (per + mittere, 통과시켜 보내다)",
      exEn: "Smoking is not permitted here.",
      exKo: "여기서는 흡연이 허용되지 않는다.",
    },
    senses: [
      {
        key: "allow",
        label: "허용하다",
        exEn: "The rules permit two attempts.",
        exKo: "규정은 두 번의 시도를 허용한다.",
        bridge: "막지 않고 지나가게 두다",
      },
      {
        key: "makePossible",
        label: "가능하게 하다",
        exEn: "The new lens permits sharper images.",
        exKo: "새 렌즈는 더 선명한 상을 가능하게 한다.",
        bridge: "길을 터 주어 되게 하다",
      },
      {
        key: "license",
        label: "허가증",
        exEn: "You need a permit to park here.",
        exKo: "여기 주차하려면 허가증이 필요하다.",
        bridge: "지나가도 좋다는 증표",
      },
    ],
    context: [
      {
        sentence: "The data <b>permit</b> only a cautious conclusion.",
        senseKey: "makePossible",
        gloss: "가능하게 하다·허용하다",
      },
      {
        sentence: "Weather <b>permitting</b>, the launch goes ahead tomorrow.",
        senseKey: "allow",
        gloss: "날씨가 허락하면",
      },
    ],
    reverse: {
      senseKey: "makePossible",
      scene: "그 기술이 훨씬 빠른 검사를 가능하게 한다는 뜻으로",
      sample: "The technology permits much faster testing.",
    },
  },
  {
    id: "submit",
    word: "submit",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "아래로 내려보내다",
      image: "윗사람 앞에 몸이나 서류를 낮춰 내미는 그림 (sub + mittere, 아래로 보내다)",
      exEn: "Submit your report by Friday.",
      exKo: "금요일까지 보고서를 제출하라.",
    },
    senses: [
      {
        key: "handIn",
        label: "제출하다",
        exEn: "She submitted the paper to a journal.",
        exKo: "그녀는 그 논문을 학술지에 투고했다.",
        bridge: "심사자 앞으로 내려 보내다",
      },
      {
        key: "yieldTo",
        label: "굴복하다 (submit to)",
        exEn: "They refused to submit to threats.",
        exKo: "그들은 협박에 굴복하기를 거부했다.",
        bridge: "상대 아래로 자기를 내리다",
      },
      {
        key: "propose",
        label: "(의견을) 개진하다",
        exEn: "I submit that the evidence is weak.",
        exKo: "저는 그 증거가 약하다고 봅니다.",
        bridge: "판단을 상대 앞에 낮춰 내놓다",
      },
    ],
    context: [
      {
        sentence: "All findings must be <b>submitted</b> for independent review.",
        senseKey: "handIn",
        gloss: "제출되다",
      },
      {
        sentence: "Wild animals never fully <b>submit</b> to training.",
        senseKey: "yieldTo",
        gloss: "(~에) 순응하다·굴복하다",
      },
    ],
    reverse: {
      senseKey: "handIn",
      scene: "학생들이 다음 주까지 과제를 제출해야 한다는 뜻으로",
      sample: "Students must submit their work by next week.",
    },
  },

  // ── tendere 뻗다 ─────────────────────────────────────────────
  {
    id: "attend",
    word: "attend",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "~쪽으로 마음을 뻗다",
      image: "몸과 마음을 그쪽으로 향해 뻗는 그림 (ad + tendere, ~를 향해 뻗다)",
      exEn: "She attended the meeting.",
      exKo: "그녀는 그 회의에 참석했다.",
    },
    senses: [
      {
        key: "focusOn",
        label: "주의를 기울이다 (attend to)",
        exEn: "We cannot attend to everything at once.",
        exKo: "우리는 모든 것에 동시에 주의를 기울일 수 없다.",
        bridge: "마음을 그쪽으로 뻗어 두다",
      },
      {
        key: "beThere",
        label: "참석하다·다니다",
        exEn: "He attends a school nearby.",
        exKo: "그는 근처 학교에 다닌다.",
        bridge: "몸을 그 자리로 뻗어 가다",
      },
      {
        key: "accompany",
        label: "따르다·수반하다",
        exEn: "Risks attend every new method.",
        exKo: "새 방법에는 늘 위험이 따른다.",
        bridge: "곁으로 뻗어 함께 가다",
      },
    ],
    context: [
      {
        sentence: "Infants <b>attend</b> longer to faces than to objects.",
        senseKey: "focusOn",
        gloss: "(~에) 주의를 기울이다",
      },
      {
        sentence: "Uncertainty <b>attends</b> every prediction about the future.",
        senseKey: "accompany",
        gloss: "따르다·수반되다",
      },
    ],
    reverse: {
      senseKey: "focusOn",
      scene: "우리는 세부 사항에 더 주의를 기울여야 한다는 뜻으로",
      sample: "We must attend to the details more carefully.",
    },
  },
  {
    id: "intend",
    word: "intend",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "마음을 안으로 겨눠 뻗다",
      image: "활시위를 당겨 목표를 겨누는 그림 (in + tendere, ~를 향해 뻗다)",
      exEn: "I intend to finish today.",
      exKo: "나는 오늘 끝낼 작정이다.",
    },
    senses: [
      {
        key: "plan",
        label: "의도하다·작정하다",
        exEn: "She never intended to hurt anyone.",
        exKo: "그녀는 누구도 다치게 할 의도가 없었다.",
        bridge: "마음이 그 목표를 겨누고 있다",
      },
      {
        key: "designFor",
        label: "~용으로 만들다 (be intended for)",
        exEn: "The book is intended for beginners.",
        exKo: "그 책은 초보자를 위한 것이다.",
        bridge: "겨눈 대상이 곧 쓰임새다",
      },
      {
        key: "mean",
        label: "(뜻을) 의도하다",
        exEn: "What did the author intend by this line?",
        exKo: "저자는 이 구절로 무엇을 의도했는가?",
        bridge: "말이 겨눈 지점이 곧 뜻",
      },
    ],
    context: [
      {
        sentence: "The policy produced effects no one <b>intended</b>.",
        senseKey: "plan",
        gloss: "의도하다",
      },
      {
        sentence: "The exhibit is <b>intended</b> for visitors with no background in art.",
        senseKey: "designFor",
        gloss: "~을 대상으로 하다",
      },
    ],
    reverse: {
      senseKey: "plan",
      scene: "그는 그렇게 말할 의도가 아니었다는 뜻으로",
      sample: "He did not intend to say it that way.",
    },
  },
  {
    id: "pretend",
    word: "pretend",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "앞으로 뻗어 내밀다",
      image: "속은 감추고 겉모습만 앞으로 내밀어 보이는 그림 (prae + tendere, 앞으로 뻗다)",
      exEn: "Don't pretend you didn't hear.",
      exKo: "못 들은 척하지 마라.",
    },
    senses: [
      {
        key: "actAs",
        label: "~인 척하다",
        exEn: "He pretended to be asleep.",
        exKo: "그는 자는 척했다.",
        bridge: "겉만 앞으로 내밀어 보이다",
      },
      {
        key: "makeBelieve",
        label: "(놀이로) ~라고 하다",
        exEn: "Children pretend the box is a ship.",
        exKo: "아이들은 상자를 배라고 여기며 논다.",
        bridge: "실제가 아닌 것을 앞에 세우다",
      },
      {
        key: "claim",
        label: "자처하다·주장하다",
        exEn: "I don't pretend to be an expert.",
        exKo: "내가 전문가라고 자처하지는 않는다.",
        bridge: "그런 자격을 앞으로 내밀다",
      },
    ],
    context: [
      {
        sentence: "The essay does not <b>pretend</b> to offer a final answer.",
        senseKey: "claim",
        gloss: "자처하다·~인 양하다",
      },
      {
        sentence: "Some animals <b>pretend</b> to be dead to escape predators.",
        senseKey: "actAs",
        gloss: "~인 척하다",
      },
    ],
    reverse: {
      senseKey: "actAs",
      scene: "그녀는 모르는 척했다는 뜻으로",
      sample: "She pretended not to know.",
    },
  },
  {
    id: "contend",
    word: "contend",
    pos: "동사",
    tier: 5,
    rank: 0,
    core: {
      ko: "맞대고 힘껏 뻗다",
      image: "두 사람이 서로 밀며 팽팽히 맞서는 그림 (con + tendere, 맞서 뻗다)",
      exEn: "Two teams contended for the title.",
      exKo: "두 팀이 우승을 다투었다.",
    },
    senses: [
      {
        key: "argue",
        label: "강하게 주장하다",
        exEn: "He contends that the theory is outdated.",
        exKo: "그는 그 이론이 낡았다고 주장한다.",
        bridge: "상대 주장에 맞서 힘껏 밀다",
      },
      {
        key: "dealWith",
        label: "씨름하다 (contend with)",
        exEn: "Farmers contend with drought every year.",
        exKo: "농민들은 해마다 가뭄과 씨름한다.",
        bridge: "맞붙어 밀고 버티다",
      },
      {
        key: "compete",
        label: "겨루다",
        exEn: "Three candidates contended for the seat.",
        exKo: "세 후보가 그 자리를 놓고 겨루었다.",
        bridge: "서로 맞대고 힘을 뻗다",
      },
    ],
    context: [
      {
        sentence: "Some historians <b>contend</b> that the war was avoidable.",
        senseKey: "argue",
        gloss: "주장하다",
      },
      {
        sentence: "Early cities had to <b>contend</b> with disease and fire.",
        senseKey: "dealWith",
        gloss: "(~와) 싸우다·씨름하다",
      },
    ],
    reverse: {
      senseKey: "argue",
      scene: "그녀는 그 자료가 잘못 해석되었다고 주장한다는 뜻으로",
      sample: "She contends that the data have been misread.",
    },
  },
];
