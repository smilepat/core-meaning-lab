// Tier 4 확장 6차 — 수능 최고빈도 다의어 18개.
//
// 이 묶음은 감이 아니라 **수능 565 정본 기출 지문의 실제 빈도**로 골랐다
// (csat-vocab-coverage 레포의 csat-bridge-passages.json, 88,712 토큰).
// make 230회 · use 222회 · become 138회 … 이만큼 나오는데 300개에 없었다.
//
// 같은 대조에서 저빈도 18개(vessel·strain·draft·transfer·deduce 등)를 뺐다.
// 그 자리를 이 파일이 채운다. 교체 이유는 HANDOFF 참고.
//
// 공통점: **너무 쉬워 보여서 사전을 안 찾는 단어들**이다. make 를 "만들다"로만,
// well 을 "잘"로만, out 을 "밖으로"로만 알고 지문에 들어가면 문장이 어긋난다.
import type { Word } from "../types.ts";

export const TIER4G: Word[] = [
  {
    id: "make",
    word: "make",
    pos: "동사",
    tier: 4,
    rank: 0,
    core: {
      ko: "없던 것을 있게 하다",
      image: "손을 대어 형태가 없던 것에서 무언가를 빚어내는 그림",
      exEn: "She made a table from old wood.",
      exKo: "그녀는 낡은 나무로 탁자를 만들었다.",
    },
    senses: [
      {
        key: "cause",
        label: "~하게 만들다",
        exEn: "The news made everyone nervous.",
        exKo: "그 소식이 모두를 불안하게 했다.",
        bridge: "없던 상태를 있게 만들다",
      },
      {
        key: "amountTo",
        label: "~이 되다·이루다",
        exEn: "Two and two make four.",
        exKo: "2 더하기 2는 4다.",
        bridge: "합쳐져 하나를 이루어 내다",
      },
      {
        key: "succeedIn",
        label: "해내다 (make it)",
        exEn: "She made it to the final round.",
        exKo: "그녀는 결승까지 올라갔다.",
        bridge: "없던 결과를 기어이 있게 하다",
      },
    ],
    context: [
      {
        sentence: "What <b>makes</b> a story memorable is not the plot but the voice.",
        senseKey: "cause",
        gloss: "~하게 만들다·~이게 하다",
      },
      {
        sentence: "These three findings together <b>make</b> a strong case.",
        senseKey: "amountTo",
        gloss: "이루다·구성하다",
      },
    ],
    reverse: {
      senseKey: "cause",
      scene: "그 경험이 그를 더 신중하게 만들었다는 뜻으로",
      sample: "The experience made him more careful.",
    },
  },
  {
    id: "use",
    word: "use",
    pos: "동사·명사",
    tier: 4,
    rank: 0,
    core: {
      ko: "쓸모에 맞게 부리다",
      image: "손에 쥔 것을 제 쓸모대로 부려 쓰는 그림",
      exEn: "Use a pencil, not a pen.",
      exKo: "펜 말고 연필을 써라.",
    },
    senses: [
      {
        key: "purpose",
        label: "쓸모·용도",
        exEn: "This tool has many uses.",
        exKo: "이 도구는 쓰임새가 많다.",
        bridge: "부릴 수 있는 방식이 곧 쓸모다",
      },
      {
        key: "usedTo",
        label: "예전에는 ~했다 (used to)",
        exEn: "There used to be a school here.",
        exKo: "여기에 예전엔 학교가 있었다.",
        bridge: "그렇게 쓰이던 시절이 있었다",
      },
      {
        key: "exploit",
        label: "이용하다·써먹다",
        exEn: "He used her kindness.",
        exKo: "그는 그녀의 호의를 이용했다.",
        bridge: "사람도 도구처럼 부리면 이용이 된다",
      },
    ],
    context: [
      {
        sentence: "Languages that are no longer <b>used</b> disappear within a generation.",
        senseKey: "purpose",
        gloss: "쓰이다·사용되다",
      },
      {
        sentence: "Scientists <b>used</b> to believe the brain stopped changing in adulthood.",
        senseKey: "usedTo",
        gloss: "예전에는 ~했다",
      },
    ],
    reverse: {
      senseKey: "usedTo",
      scene: "사람들이 예전에는 지구가 평평하다고 믿었다는 뜻으로 used to 를 써서",
      sample: "People used to believe the earth was flat.",
    },
  },
  {
    id: "become",
    word: "become",
    pos: "동사",
    tier: 4,
    rank: 0,
    core: {
      ko: "~쪽으로 되어 가다",
      image: "지금 모습에서 다른 모습 쪽으로 옮겨 가는 그림",
      exEn: "The sky became dark.",
      exKo: "하늘이 어두워졌다.",
    },
    senses: [
      {
        key: "turnInto",
        label: "~이 되다",
        exEn: "She became a teacher.",
        exKo: "그녀는 교사가 되었다.",
        bridge: "다른 상태로 옮겨 가 그것이 되다",
      },
      {
        key: "suit",
        label: "어울리다",
        exEn: "That color becomes you.",
        exKo: "그 색이 너에게 잘 어울린다.",
        bridge: "그 사람 쪽으로 어울려 들다",
      },
      {
        key: "happenTo",
        label: "어떻게 되다 (become of)",
        exEn: "What became of the old plan?",
        exKo: "그 옛 계획은 어떻게 되었나?",
        bridge: "그것이 어느 쪽으로 갔는가",
      },
    ],
    context: [
      {
        sentence: "What was once a luxury has <b>become</b> a necessity.",
        senseKey: "turnInto",
        gloss: "~이 되다",
      },
      {
        sentence: "No one knows what <b>became</b> of the original manuscript.",
        senseKey: "happenTo",
        gloss: "어떻게 되다",
      },
    ],
    reverse: {
      senseKey: "turnInto",
      scene: "그 습관이 결국 문제가 되었다는 뜻으로",
      sample: "The habit eventually became a problem.",
    },
  },
  {
    id: "like",
    word: "like",
    pos: "동사·전치사·접속사",
    tier: 4,
    rank: 0,
    core: {
      ko: "닮아 마음이 끌리다",
      image: "둘을 나란히 놓고 보니 닮았고, 그래서 끌리는 그림",
      exEn: "I like this song.",
      exKo: "나는 이 노래가 좋다.",
    },
    senses: [
      {
        key: "similar",
        label: "~같은·~처럼",
        exEn: "He works like a machine.",
        exKo: "그는 기계처럼 일한다.",
        bridge: "닮았다는 것이 이 단어의 뿌리다",
      },
      {
        key: "suchAs",
        label: "예컨대 ~같은",
        exEn: "Gases like carbon dioxide trap heat.",
        exKo: "이산화탄소 같은 기체가 열을 가둔다.",
        bridge: "그와 닮은 것들을 예로 들다",
      },
      {
        key: "enjoy",
        label: "좋아하다",
        exEn: "She likes working alone.",
        exKo: "그녀는 혼자 일하는 것을 좋아한다.",
        bridge: "내 마음과 닮아 끌린다",
      },
    ],
    context: [
      {
        sentence: "Memory works less <b>like</b> a recording than like a retelling.",
        senseKey: "similar",
        gloss: "~처럼·~같이",
      },
      {
        sentence: "Skills <b>like</b> patience are hard to teach directly.",
        senseKey: "suchAs",
        gloss: "예컨대 ~같은",
      },
    ],
    reverse: {
      senseKey: "similar",
      scene: "뇌가 컴퓨터처럼 작동하지는 않는다는 뜻으로",
      sample: "The brain does not work like a computer.",
    },
  },
  {
    id: "change",
    word: "change",
    pos: "동사·명사",
    tier: 4,
    rank: 0,
    core: {
      ko: "다른 것으로 바꾸다",
      image: "있던 자리에 다른 것이 들어서는 그림",
      exEn: "She changed her clothes.",
      exKo: "그녀는 옷을 갈아입었다.",
    },
    senses: [
      {
        key: "shift",
        label: "변화·달라짐",
        exEn: "The change came slowly.",
        exKo: "그 변화는 천천히 왔다.",
        bridge: "바뀐 결과가 곧 변화다",
      },
      {
        key: "money",
        label: "거스름돈·잔돈",
        exEn: "Keep the change.",
        exKo: "거스름돈은 가지세요.",
        bridge: "큰돈을 잔돈으로 바꾼 것",
      },
      {
        key: "swap",
        label: "갈아타다·교체하다",
        exEn: "We change trains at the next stop.",
        exKo: "다음 정거장에서 기차를 갈아탄다.",
        bridge: "타던 것을 다른 것으로 바꾸다",
      },
    ],
    context: [
      {
        sentence: "Climate <b>change</b> is measured in decades, not seasons.",
        senseKey: "shift",
        gloss: "변화",
      },
      {
        sentence: "The machine gives no <b>change</b>, so please bring exact coins.",
        senseKey: "money",
        gloss: "거스름돈·잔돈",
      },
    ],
    reverse: {
      senseKey: "shift",
      scene: "그 정책이 큰 변화를 가져왔다는 뜻으로",
      sample: "The policy brought about a great change.",
    },
  },
  {
    id: "find",
    word: "find",
    pos: "동사",
    tier: 4,
    rank: 0,
    core: {
      ko: "찾아 마주치다",
      image: "찾던 것이 눈앞에 나타나 마주치는 그림",
      exEn: "I found my keys.",
      exKo: "열쇠를 찾았다.",
    },
    senses: [
      {
        key: "realize",
        label: "알게 되다·깨닫다",
        exEn: "Researchers found that sleep aids memory.",
        exKo: "연구자들은 잠이 기억을 돕는다는 것을 밝혔다.",
        bridge: "몰랐던 사실과 마주치다",
      },
      {
        key: "feelIt",
        label: "~라고 여기다 (find it hard)",
        exEn: "Many students find grammar dull.",
        exKo: "많은 학생이 문법을 지루하게 여긴다.",
        bridge: "겪어 보니 그렇더라",
      },
      {
        key: "rule",
        label: "판결하다",
        exEn: "The court found him innocent.",
        exKo: "법원은 그에게 무죄를 선고했다.",
        bridge: "따져 보니 그러하더라",
      },
    ],
    context: [
      {
        sentence: "The study <b>found</b> no link between the two habits.",
        senseKey: "realize",
        gloss: "밝혀내다·알아내다",
      },
      {
        sentence: "Readers <b>find</b> the ending unsatisfying for a reason.",
        senseKey: "feelIt",
        gloss: "~라고 여기다",
      },
    ],
    reverse: {
      senseKey: "feelIt",
      scene: "많은 사람이 그 설명을 이해하기 어렵다고 여긴다는 뜻으로",
      sample: "Many people find the explanation hard to follow.",
    },
  },
  {
    id: "look",
    word: "look",
    pos: "동사·명사",
    tier: 4,
    rank: 0,
    core: {
      ko: "눈길을 그쪽으로 두다",
      image: "고개를 돌려 시선을 한쪽에 얹는 그림",
      exEn: "Look at the board.",
      exKo: "칠판을 봐라.",
    },
    senses: [
      {
        key: "seem",
        label: "~해 보이다",
        exEn: "The plan looks risky.",
        exKo: "그 계획은 위험해 보인다.",
        bridge: "눈에 그렇게 비쳐 온다",
      },
      {
        key: "search",
        label: "찾다 (look for)",
        exEn: "They looked for a simpler answer.",
        exKo: "그들은 더 간단한 답을 찾았다.",
        bridge: "눈길을 두고 뒤지다",
      },
      {
        key: "appearance",
        label: "표정·외모",
        exEn: "She gave him a puzzled look.",
        exKo: "그녀는 그에게 의아한 표정을 지었다.",
        bridge: "눈에 담긴 그 모습",
      },
    ],
    context: [
      {
        sentence: "What <b>looks</b> like generosity is often self-interest.",
        senseKey: "seem",
        gloss: "~처럼 보이다",
      },
      {
        sentence: "Scientists <b>look</b> for patterns that repeat across cases.",
        senseKey: "search",
        gloss: "찾다·살피다",
      },
    ],
    reverse: {
      senseKey: "seem",
      scene: "그 문제가 처음에는 쉬워 보인다는 뜻으로",
      sample: "The problem looks easy at first.",
    },
  },
  {
    id: "give",
    word: "give",
    pos: "동사",
    tier: 4,
    rank: 0,
    core: {
      ko: "내 손에서 내어 놓다",
      image: "쥐고 있던 것을 상대 쪽으로 넘겨 놓는 그림",
      exEn: "He gave me a book.",
      exKo: "그는 내게 책을 주었다.",
    },
    senses: [
      {
        key: "produce",
        label: "(결과를) 내놓다",
        exEn: "The method gives consistent results.",
        exKo: "그 방법은 일관된 결과를 낸다.",
        bridge: "안에 있던 것을 밖으로 내어 놓다",
      },
      {
        key: "yieldTo",
        label: "무너지다·굴복하다 (give in / give way)",
        exEn: "The old bridge finally gave way.",
        exKo: "낡은 다리가 결국 무너졌다.",
        bridge: "버티던 것을 놓아 버리다",
      },
      {
        key: "devote",
        label: "쏟다·바치다",
        exEn: "She gave her life to the work.",
        exKo: "그녀는 그 일에 평생을 바쳤다.",
        bridge: "가진 것을 통째로 내어 놓다",
      },
    ],
    context: [
      {
        sentence: "The experiment <b>gave</b> results no one expected.",
        senseKey: "produce",
        gloss: "(결과를) 내놓다",
      },
      {
        sentence: "Under pressure, most people <b>give</b> in to the majority view.",
        senseKey: "yieldTo",
        gloss: "굴복하다·따르다",
      },
    ],
    reverse: {
      senseKey: "produce",
      scene: "그 방법이 훨씬 나은 결과를 내놓는다는 뜻으로",
      sample: "The method gives far better results.",
    },
  },
  {
    id: "out",
    word: "out",
    pos: "부사·전치사",
    tier: 4,
    rank: 0,
    core: {
      ko: "안에서 밖으로",
      image: "테두리 안에 있던 것이 바깥으로 나가는 그림",
      exEn: "He walked out of the room.",
      exKo: "그는 방에서 걸어 나갔다.",
    },
    senses: [
      {
        key: "exhausted",
        label: "다 떨어진 (run out of)",
        exEn: "We ran out of time.",
        exKo: "시간이 다 떨어졌다.",
        bridge: "안에 있던 것이 다 나가 버렸다",
      },
      {
        key: "revealed",
        label: "드러난 (find out / turn out)",
        exEn: "It turned out to be false.",
        exKo: "그것은 거짓으로 드러났다.",
        bridge: "감춰져 있던 것이 밖으로 나오다",
      },
      {
        key: "absent",
        label: "자리에 없는",
        exEn: "She is out this afternoon.",
        exKo: "그녀는 오늘 오후에 자리에 없다.",
        bridge: "안에 있어야 할 사람이 밖에 있다",
      },
    ],
    context: [
      {
        sentence: "The theory turned <b>out</b> to be wrong in one crucial way.",
        senseKey: "revealed",
        gloss: "(~인 것으로) 드러나다",
      },
      {
        sentence: "Cities that run <b>out</b> of water do not recover quickly.",
        senseKey: "exhausted",
        gloss: "다 떨어지다·고갈되다",
      },
    ],
    reverse: {
      senseKey: "revealed",
      scene: "그 소문이 사실이 아닌 것으로 드러났다는 뜻으로 turn out 을 써서",
      sample: "The rumor turned out to be untrue.",
    },
  },
  {
    id: "feel",
    word: "feel",
    pos: "동사",
    tier: 4,
    rank: 0,
    core: {
      ko: "닿아서 알다",
      image: "손이나 마음이 닿아 그 상태를 아는 그림",
      exEn: "Feel how soft this is.",
      exKo: "이게 얼마나 부드러운지 만져 봐.",
    },
    senses: [
      {
        key: "think",
        label: "~라고 생각하다",
        exEn: "I feel he is right.",
        exKo: "나는 그가 옳다고 생각한다.",
        bridge: "따져서가 아니라 닿아서 아는 판단",
      },
      {
        key: "seemTo",
        label: "~한 느낌이 나다",
        exEn: "The room feels smaller than it is.",
        exKo: "그 방은 실제보다 좁게 느껴진다.",
        bridge: "닿아 오는 인상이 그러하다",
      },
      {
        key: "wantTo",
        label: "~하고 싶다 (feel like)",
        exEn: "I don't feel like talking.",
        exKo: "말하고 싶지 않다.",
        bridge: "마음이 그쪽으로 닿아 있다",
      },
    ],
    context: [
      {
        sentence: "Time <b>feels</b> shorter as we age, though it does not change.",
        senseKey: "seemTo",
        gloss: "~하게 느껴지다",
      },
      {
        sentence: "Many experts <b>feel</b> the standard is too low.",
        senseKey: "think",
        gloss: "~라고 생각하다",
      },
    ],
    reverse: {
      senseKey: "seemTo",
      scene: "그 일이 실제보다 오래 걸리는 것처럼 느껴진다는 뜻으로",
      sample: "The task feels longer than it really is.",
    },
  },
  {
    id: "show",
    word: "show",
    pos: "동사·명사",
    tier: 4,
    rank: 0,
    core: {
      ko: "눈에 보이게 내놓다",
      image: "가려져 있던 것을 앞으로 내어 보게 하는 그림",
      exEn: "Show me your ticket.",
      exKo: "표를 보여 주세요.",
    },
    senses: [
      {
        key: "prove",
        label: "보여주다·입증하다",
        exEn: "The data show a clear trend.",
        exKo: "그 자료는 분명한 추세를 보여 준다.",
        bridge: "증거를 눈앞에 내어놓다",
      },
      {
        key: "appear",
        label: "나타나다·드러나다",
        exEn: "The effect shows only after a year.",
        exKo: "그 효과는 1년이 지나야 나타난다.",
        bridge: "숨어 있던 것이 보이게 되다",
      },
      {
        key: "guide",
        label: "안내하다 (show around)",
        exEn: "He showed us around the lab.",
        exKo: "그가 실험실을 안내해 주었다.",
        bridge: "볼 것을 짚어 가며 데리고 다니다",
      },
    ],
    context: [
      {
        sentence: "Recent studies <b>show</b> that the effect is much smaller.",
        senseKey: "prove",
        gloss: "보여주다·밝히다",
      },
      {
        sentence: "Damage from the drought did not <b>show</b> until the next season.",
        senseKey: "appear",
        gloss: "드러나다·나타나다",
      },
    ],
    reverse: {
      senseKey: "prove",
      scene: "그 실험이 정반대를 보여 준다는 뜻으로",
      sample: "The experiment shows the opposite.",
    },
  },
  {
    id: "result",
    word: "result",
    pos: "명사·동사",
    tier: 4,
    rank: 0,
    core: {
      ko: "튀어나온 끝",
      image: "일이 굴러간 끝에 튀어나온 것의 그림 (re + salire, 되튀어 오르다)",
      exEn: "We are waiting for the results.",
      exKo: "우리는 결과를 기다리고 있다.",
    },
    senses: [
      {
        key: "arise",
        label: "~에서 비롯되다 (result from)",
        exEn: "The delay resulted from bad weather.",
        exKo: "그 지연은 악천후에서 비롯되었다.",
        bridge: "그것을 딛고 튀어나왔다",
      },
      {
        key: "leadTo",
        label: "~을 낳다 (result in)",
        exEn: "Rapid growth resulted in shortages.",
        exKo: "급격한 성장이 부족 사태를 낳았다.",
        bridge: "튀어나온 끝이 저것이었다",
      },
      {
        key: "outcome",
        label: "결과·성적",
        exEn: "The results were published last week.",
        exKo: "그 결과는 지난주에 발표되었다.",
        bridge: "일의 끝에 남은 것",
      },
    ],
    context: [
      {
        sentence: "Most accidents <b>result</b> from a chain of small errors.",
        senseKey: "arise",
        gloss: "(~에서) 비롯되다",
      },
      {
        sentence: "Cutting the budget <b>resulted</b> in longer waiting times.",
        senseKey: "leadTo",
        gloss: "(~을) 낳다·초래하다",
      },
    ],
    reverse: {
      senseKey: "leadTo",
      scene: "그 결정이 큰 혼란을 낳았다는 뜻으로 result in 을 써서",
      sample: "The decision resulted in great confusion.",
    },
  },
  {
    id: "well",
    word: "well",
    pos: "부사·형용사·명사",
    tier: 4,
    rank: 0,
    core: {
      ko: "부족함 없이 제대로",
      image: "모자란 데 없이 제 몫을 다하는 그림",
      exEn: "She sings well.",
      exKo: "그녀는 노래를 잘한다.",
    },
    senses: [
      {
        key: "healthy",
        label: "건강한",
        exEn: "He is not well today.",
        exKo: "그는 오늘 몸이 좋지 않다.",
        bridge: "몸이 부족함 없는 상태",
      },
      {
        key: "considerably",
        label: "훨씬·족히 (well over)",
        exEn: "It costs well over a million.",
        exKo: "그것은 족히 백만이 넘는다.",
        bridge: "모자람 없이 그 선을 넘었다",
      },
      {
        key: "spring",
        label: "우물·샘",
        exEn: "They dug a well behind the house.",
        exKo: "그들은 집 뒤에 우물을 팠다.",
        bridge: "물이 모자람 없이 솟는 자리",
      },
    ],
    context: [
      {
        sentence: "The theory has been tested <b>well</b> beyond its original field.",
        senseKey: "considerably",
        gloss: "훨씬·한참",
      },
      {
        sentence: "Villages grew wherever a <b>well</b> could be dug.",
        senseKey: "spring",
        gloss: "우물",
      },
    ],
    reverse: {
      senseKey: "considerably",
      scene: "그 수치가 예상을 훨씬 웃돌았다는 뜻으로 well above 를 써서",
      sample: "The figure was well above expectations.",
    },
  },
  {
    id: "good",
    word: "good",
    pos: "형용사·명사",
    tier: 4,
    rank: 0,
    core: {
      ko: "제 값을 하는",
      image: "쓸모나 값이 모자라지 않는 그림",
      exEn: "That was a good meal.",
      exKo: "좋은 식사였다.",
    },
    senses: [
      {
        key: "benefit",
        label: "이익·유익",
        exEn: "It was done for the common good.",
        exKo: "그것은 공익을 위해 행해졌다.",
        bridge: "값을 하는 것이 곧 이익이다",
      },
      {
        key: "goods",
        label: "상품·재화 (goods)",
        exEn: "The port handles goods from Asia.",
        exKo: "그 항구는 아시아산 물품을 다룬다.",
        bridge: "값을 지닌 물건들",
      },
      {
        key: "permanently",
        label: "영영 (for good)",
        exEn: "He left for good.",
        exKo: "그는 아주 떠났다.",
        bridge: "되돌릴 것 없이 값이 매겨졌다",
      },
    ],
    context: [
      {
        sentence: "Policy should serve the public <b>good</b>, not one group.",
        senseKey: "benefit",
        gloss: "이익·공익",
      },
      {
        sentence: "Once a species is gone, it is gone for <b>good</b>.",
        senseKey: "permanently",
        gloss: "영영·영구히",
      },
    ],
    reverse: {
      senseKey: "benefit",
      scene: "그 결정이 공동의 이익을 위한 것이었다는 뜻으로",
      sample: "The decision was made for the common good.",
    },
  },
  {
    id: "view",
    word: "view",
    pos: "명사·동사",
    tier: 4,
    rank: 0,
    core: {
      ko: "바라본 그림",
      image: "어느 자리에서 바라보아 눈에 담긴 장면 (videre, 보다)",
      exEn: "The room has a fine view.",
      exKo: "그 방은 전망이 좋다.",
    },
    senses: [
      {
        key: "opinion",
        label: "견해·관점",
        exEn: "That is a common view among experts.",
        exKo: "그것은 전문가들 사이의 흔한 견해다.",
        bridge: "어디서 보느냐가 곧 견해다",
      },
      {
        key: "regardAs",
        label: "~로 여기다 (view as)",
        exEn: "Failure is viewed as data here.",
        exKo: "여기서 실패는 자료로 여겨진다.",
        bridge: "그렇게 바라보면 그것이 된다",
      },
      {
        key: "scene",
        label: "전망·경관",
        exEn: "A view of the sea opened up.",
        exKo: "바다 전망이 펼쳐졌다.",
        bridge: "눈에 담긴 장면 그 자체",
      },
    ],
    context: [
      {
        sentence: "This <b>view</b> has been challenged by recent evidence.",
        senseKey: "opinion",
        gloss: "견해·주장",
      },
      {
        sentence: "Sleep is now <b>viewed</b> as active work, not rest.",
        senseKey: "regardAs",
        gloss: "~로 여겨지다",
      },
    ],
    reverse: {
      senseKey: "regardAs",
      scene: "실수를 배움의 일부로 여겨야 한다는 뜻으로 view as 를 써서",
      sample: "We should view mistakes as part of learning.",
    },
  },
  {
    id: "high",
    word: "high",
    pos: "형용사·부사·명사",
    tier: 4,
    rank: 0,
    core: {
      ko: "위쪽으로 멀리",
      image: "바닥에서 위로 멀리 떨어져 있는 그림",
      exEn: "The wall is two meters high.",
      exKo: "그 벽은 높이가 2미터다.",
    },
    senses: [
      {
        key: "amount",
        label: "(수치가) 많은·큰",
        exEn: "The cost is too high.",
        exKo: "비용이 너무 높다.",
        bridge: "숫자도 위쪽으로 멀리 올라간다",
      },
      {
        key: "peak",
        label: "한창인·절정의",
        exEn: "It happened in high summer.",
        exKo: "그것은 한여름에 일어났다.",
        bridge: "가장 위까지 올라간 때",
      },
      {
        key: "important",
        label: "높은 지위의·중대한",
        exEn: "The matter went to a high court.",
        exKo: "그 사안은 상급 법원으로 갔다.",
        bridge: "위에 놓일수록 무겁다",
      },
    ],
    context: [
      {
        sentence: "Countries with <b>high</b> literacy rates recover faster.",
        senseKey: "amount",
        gloss: "높은·많은",
      },
      {
        sentence: "The debate reached its <b>high</b> point in the 1980s.",
        senseKey: "peak",
        gloss: "절정의·한창인",
      },
    ],
    reverse: {
      senseKey: "amount",
      scene: "그 지역은 실업률이 높다는 뜻으로",
      sample: "The region has a high unemployment rate.",
    },
  },
  {
    id: "back",
    word: "back",
    pos: "명사·부사·동사",
    tier: 4,
    rank: 0,
    core: {
      ko: "앞의 반대쪽",
      image: "얼굴이 향한 쪽의 반대, 등 쪽의 그림",
      exEn: "He hurt his back.",
      exKo: "그는 등을 다쳤다.",
    },
    senses: [
      {
        key: "support",
        label: "후원하다·지지하다",
        exEn: "Two firms backed the project.",
        exKo: "두 회사가 그 사업을 후원했다.",
        bridge: "뒤에 서서 받쳐 주다",
      },
      {
        key: "again",
        label: "되돌려·다시",
        exEn: "Put it back where it was.",
        exKo: "있던 자리에 도로 놓아라.",
        bridge: "왔던 쪽으로 되돌아가다",
      },
      {
        key: "past",
        label: "(시간을) 거슬러",
        exEn: "The custom goes back to the Middle Ages.",
        exKo: "그 관습은 중세까지 거슬러 올라간다.",
        bridge: "시간의 뒤쪽으로 가다",
      },
    ],
    context: [
      {
        sentence: "The evidence <b>backs</b> the second explanation.",
        senseKey: "support",
        gloss: "뒷받침하다·지지하다",
      },
      {
        sentence: "The practice dates <b>back</b> more than a thousand years.",
        senseKey: "past",
        gloss: "(시간을) 거슬러 올라가다",
      },
    ],
    reverse: {
      senseKey: "support",
      scene: "여러 연구가 그 주장을 뒷받침한다는 뜻으로",
      sample: "Several studies back that claim.",
    },
  },
  {
    id: "call",
    word: "call",
    pos: "동사·명사",
    tier: 4,
    rank: 0,
    core: {
      ko: "소리 내어 부르다",
      image: "목소리를 뻗어 상대를 이쪽으로 부르는 그림",
      exEn: "She called his name.",
      exKo: "그녀는 그의 이름을 불렀다.",
    },
    senses: [
      {
        key: "name",
        label: "~라고 부르다",
        exEn: "We call this stage adolescence.",
        exKo: "우리는 이 시기를 청소년기라 부른다.",
        bridge: "그 이름으로 불러 세우다",
      },
      {
        key: "demand",
        label: "요구하다 (call for)",
        exEn: "The report calls for stricter rules.",
        exKo: "그 보고서는 더 엄격한 규정을 요구한다.",
        bridge: "그것을 이리 오라고 부르다",
      },
      {
        key: "visit",
        label: "잠깐 들르다 (call on)",
        exEn: "He called on an old friend.",
        exKo: "그는 옛 친구를 찾아갔다.",
        bridge: "가서 문 앞에서 부르다",
      },
    ],
    context: [
      {
        sentence: "The situation <b>calls</b> for caution, not speed.",
        senseKey: "demand",
        gloss: "요구하다·필요로 하다",
      },
      {
        sentence: "Scientists <b>call</b> this effect the observer bias.",
        senseKey: "name",
        gloss: "~라고 부르다",
      },
    ],
    reverse: {
      senseKey: "demand",
      scene: "그 문제가 즉각적인 조치를 요구한다는 뜻으로 call for 를 써서",
      sample: "The problem calls for immediate action.",
    },
  },
];
