// Tier 4 — 확장 후보. Core Meaning 300 으로 넓힐 때 먼저 편입할 구체어 다의어.
// 초기 프로토타입 30개 중 우선순위 1~3군에 들지 않은 단어들이다.
import type { Word } from "../types.ts";

export const TIER4: Word[] = [
  {
    "id": "head",
    "word": "head",
    "pos": "명사·동사",
    "core": {
      "ko": "머리",
      "image": "몸에서 가장 위에 있어 방향과 판단을 이끄는 부분",
      "exEn": "He hit his head on the door.",
      "exKo": "그는 머리를 문에 부딪혔다."
    },
    "senses": [
      {
        "key": "lead",
        "label": "이끌다·총괄하다",
        "exEn": "She heads the design team.",
        "exKo": "그녀가 디자인 팀을 이끈다.",
        "bridge": "맨 위에서 이끄는 존재"
      },
      {
        "key": "front",
        "label": "맨 앞·선두",
        "exEn": "His name is at the head of the list.",
        "exKo": "그의 이름이 명단 맨 위에 있다.",
        "bridge": "머리가 몸의 맨 위인 것처럼 맨 앞"
      },
      {
        "key": "go",
        "label": "~로 향하다",
        "exEn": "We're heading home.",
        "exKo": "우리는 집으로 향하고 있다.",
        "bridge": "머리를 둔 방향으로 나아가다"
      }
    ],
    "context": [
      {
        "sentence": "A famous chef <b>heads</b> this restaurant.",
        "senseKey": "lead",
        "gloss": "(식당을) 이끌다·총괄하다"
      },
      {
        "sentence": "Let's <b>head</b> to the station now.",
        "senseKey": "go",
        "gloss": "(역으로) 향하다·가다"
      }
    ],
    "reverse": {
      "senseKey": "front",
      "scene": "네 이름이 목록 맨 위에 있다는 뜻으로",
      "sample": "Your name is at the head of the list."
    },
    "tier": 4,
    "rank": 0
  },
  {
    "id": "break",
    "word": "break",
    "pos": "동사·명사",
    "core": {
      "ko": "깨다·부수다",
      "image": "하나였던 것이 힘을 받아 갈라지거나 못 쓰게 되는 그림",
      "exEn": "He broke the glass.",
      "exKo": "그는 유리컵을 깼다."
    },
    "senses": [
      {
        "key": "rest",
        "label": "휴식·쉬는 시간",
        "exEn": "Let's take a short break.",
        "exKo": "잠깐 쉬자.",
        "bridge": "계속되던 흐름을 잠시 끊다"
      },
      {
        "key": "broken",
        "label": "고장 나다",
        "exEn": "The printer broke again.",
        "exKo": "프린터가 또 고장 났다.",
        "bridge": "기계의 온전함이 깨져 못 쓰게 되다"
      },
      {
        "key": "violate",
        "label": "어기다",
        "exEn": "You broke your promise.",
        "exKo": "너는 약속을 어겼다.",
        "bridge": "지켜지던 약속을 깨뜨리다"
      }
    ],
    "context": [
      {
        "sentence": "We worked for hours without a <b>break</b>.",
        "senseKey": "rest",
        "gloss": "쉬는 시간·휴식"
      },
      {
        "sentence": "He always <b>breaks</b> the rules.",
        "senseKey": "violate",
        "gloss": "(규칙을) 어기다"
      }
    ],
    "reverse": {
      "senseKey": "broken",
      "scene": "내 휴대폰이 어제 고장 났다는 뜻으로",
      "sample": "My phone broke yesterday."
    },
    "tier": 4,
    "rank": 0
  },
  {
    "id": "light",
    "word": "light",
    "pos": "명사·형용사",
    "core": {
      "ko": "빛",
      "image": "어둠을 밝히는, 가볍고 밝은 성질",
      "exEn": "Turn on the light.",
      "exKo": "불을 켜라."
    },
    "senses": [
      {
        "key": "weight",
        "label": "가벼운",
        "exEn": "This bag is very light.",
        "exKo": "이 가방은 아주 가볍다.",
        "bridge": "빛처럼 무게가 거의 없는 느낌"
      },
      {
        "key": "pale",
        "label": "연한 색",
        "exEn": "She wore a light blue dress.",
        "exKo": "연한 파란색 드레스를 입었다.",
        "bridge": "빛이 많이 섞여 옅은 색"
      },
      {
        "key": "easy",
        "label": "부담 없는·가벼운",
        "exEn": "We had a light meal.",
        "exKo": "우리는 가벼운 식사를 했다.",
        "bridge": "무겁지 않고 부담 없는"
      }
    ],
    "context": [
      {
        "sentence": "The doctor gave me some <b>light</b> exercise.",
        "senseKey": "easy",
        "gloss": "가벼운·부담 없는"
      },
      {
        "sentence": "Paint the wall a <b>light</b> green.",
        "senseKey": "pale",
        "gloss": "연한 (초록)색"
      }
    ],
    "reverse": {
      "senseKey": "weight",
      "scene": "이 상자는 보기보다 가볍다는 뜻으로",
      "sample": "This box is lighter than it looks."
    },
    "tier": 4,
    "rank": 0
  },
  {
    "id": "get",
    "word": "get",
    "pos": "동사",
    "core": {
      "ko": "얻다·가지게 되다",
      "image": "없던 것을 손에 넣어 내 것이 되는 그림",
      "exEn": "I got a letter.",
      "exKo": "나는 편지를 받았다."
    },
    "senses": [
      {
        "key": "become",
        "label": "~하게 되다",
        "exEn": "It's getting dark.",
        "exKo": "어두워지고 있다.",
        "bridge": "어떤 상태를 새로 가지게 되다"
      },
      {
        "key": "arrive",
        "label": "도착하다",
        "exEn": "We got to school late.",
        "exKo": "우리는 학교에 늦게 도착했다.",
        "bridge": "어떤 장소에 이르러 그곳을 얻다"
      },
      {
        "key": "understand",
        "label": "이해하다",
        "exEn": "I don't get the joke.",
        "exKo": "나는 그 농담을 이해 못 하겠다.",
        "bridge": "뜻을 붙잡아 내 것으로 만들다"
      }
    ],
    "context": [
      {
        "sentence": "The weather is <b>getting</b> colder.",
        "senseKey": "become",
        "gloss": "(추워)지다"
      },
      {
        "sentence": "Sorry, I didn't <b>get</b> what you said.",
        "senseKey": "understand",
        "gloss": "(말을) 이해하다"
      }
    ],
    "reverse": {
      "senseKey": "arrive",
      "scene": "공항에 몇 시에 도착하는지 묻는 뜻으로",
      "sample": "What time do we get to the airport?"
    },
    "tier": 4,
    "rank": 0
  },
  {
    "id": "fall",
    "word": "fall",
    "pos": "동사",
    "core": {
      "ko": "떨어지다",
      "image": "위에서 아래로 뚝 내려가는 그림",
      "exEn": "Leaves fall in autumn.",
      "exKo": "가을에는 잎이 떨어진다."
    },
    "senses": [
      {
        "key": "decrease",
        "label": "줄다·내려가다",
        "exEn": "Prices fell last month.",
        "exKo": "지난달 가격이 내렸다.",
        "bridge": "수치가 아래로 떨어지다"
      },
      {
        "key": "become",
        "label": "~한 상태가 되다",
        "exEn": "He fell asleep.",
        "exKo": "그는 잠들었다.",
        "bridge": "어떤 상태로 뚝 빠져들다"
      },
      {
        "key": "date",
        "label": "(날짜가) ~에 있다",
        "exEn": "My birthday falls on Sunday.",
        "exKo": "내 생일은 일요일이다.",
        "bridge": "달력 위 어느 칸에 내려앉다"
      }
    ],
    "context": [
      {
        "sentence": "The temperature <b>fell</b> below zero.",
        "senseKey": "decrease",
        "gloss": "(온도가) 내려가다"
      },
      {
        "sentence": "The baby <b>fell</b> ill last night.",
        "senseKey": "become",
        "gloss": "(아픈 상태가) 되다"
      }
    ],
    "reverse": {
      "senseKey": "decrease",
      "scene": "지난해 매출이 크게 줄었다는 뜻으로",
      "sample": "Sales fell sharply last year."
    },
    "tier": 4,
    "rank": 0
  },
  {
    "id": "cut",
    "word": "cut",
    "pos": "동사",
    "core": {
      "ko": "자르다",
      "image": "날카로운 것으로 하나를 둘로 가르는 그림",
      "exEn": "Cut the paper in half.",
      "exKo": "종이를 반으로 잘라라."
    },
    "senses": [
      {
        "key": "reduce",
        "label": "줄이다·삭감하다",
        "exEn": "The company cut costs.",
        "exKo": "그 회사는 비용을 줄였다.",
        "bridge": "양을 잘라내어 줄이다"
      },
      {
        "key": "stop",
        "label": "끊다·중단하다",
        "exEn": "They cut the power.",
        "exKo": "그들은 전기를 끊었다.",
        "bridge": "이어지던 것을 잘라 끊다"
      },
      {
        "key": "skip",
        "label": "빠지다·거르다",
        "exEn": "He cut class today.",
        "exKo": "그는 오늘 수업을 빠졌다.",
        "bridge": "해야 할 것을 잘라내고 건너뛰다"
      }
    ],
    "context": [
      {
        "sentence": "We need to <b>cut</b> our spending.",
        "senseKey": "reduce",
        "gloss": "(지출을) 줄이다"
      },
      {
        "sentence": "The call was suddenly <b>cut</b>.",
        "senseKey": "stop",
        "gloss": "(통화가) 끊기다"
      }
    ],
    "reverse": {
      "senseKey": "reduce",
      "scene": "정부가 세금을 인하했다는 뜻으로",
      "sample": "The government cut taxes."
    },
    "tier": 4,
    "rank": 0
  },
  {
    "id": "hand",
    "word": "hand",
    "pos": "명사·동사",
    "core": {
      "ko": "손",
      "image": "무언가를 잡고 건네고 다루는 신체 부분",
      "exEn": "Wash your hands.",
      "exKo": "손을 씻어라."
    },
    "senses": [
      {
        "key": "give",
        "label": "건네주다",
        "exEn": "Hand me the salt, please.",
        "exKo": "소금 좀 건네줘.",
        "bridge": "손으로 넘겨주다"
      },
      {
        "key": "help",
        "label": "도움",
        "exEn": "Give me a hand with this box.",
        "exKo": "이 상자 드는 것 좀 도와줘.",
        "bridge": "손을 보태 돕다"
      },
      {
        "key": "clock",
        "label": "시곗바늘",
        "exEn": "The hour hand points to five.",
        "exKo": "시침이 5를 가리킨다.",
        "bridge": "가리키는 손 모양"
      }
    ],
    "context": [
      {
        "sentence": "Please <b>hand</b> in your homework.",
        "senseKey": "give",
        "gloss": "(숙제를) 제출하다·내다"
      },
      {
        "sentence": "Everyone gave a <b>hand</b> to clean up.",
        "senseKey": "help",
        "gloss": "도움(을 주다)"
      }
    ],
    "reverse": {
      "senseKey": "give",
      "scene": "여권을 건네 달라고 부탁하는 뜻으로",
      "sample": "Please hand me your passport."
    },
    "tier": 4,
    "rank": 0
  },
  {
    "id": "key",
    "word": "key",
    "pos": "명사·형용사",
    "core": {
      "ko": "열쇠",
      "image": "잠긴 것을 여는, 문제를 푸는 결정적 도구",
      "exEn": "I lost my house key.",
      "exKo": "나는 집 열쇠를 잃어버렸다."
    },
    "senses": [
      {
        "key": "solution",
        "label": "비결·해답",
        "exEn": "Practice is the key to success.",
        "exKo": "연습이 성공의 비결이다.",
        "bridge": "잠긴 문제를 여는 열쇠"
      },
      {
        "key": "important",
        "label": "핵심의·중요한",
        "exEn": "He is a key member.",
        "exKo": "그는 핵심 구성원이다.",
        "bridge": "열쇠처럼 결정적으로 중요한"
      },
      {
        "key": "button",
        "label": "자판·건반",
        "exEn": "Press the Enter key.",
        "exKo": "엔터 키를 눌러라.",
        "bridge": "손가락으로 누르는 열쇠 모양 버튼"
      }
    ],
    "context": [
      {
        "sentence": "Hard work is the <b>key</b> to good grades.",
        "senseKey": "solution",
        "gloss": "비결·해답"
      },
      {
        "sentence": "Water plays a <b>key</b> role in life.",
        "senseKey": "important",
        "gloss": "핵심적인·중요한"
      }
    ],
    "reverse": {
      "senseKey": "important",
      "scene": "그녀가 이 프로젝트의 핵심 인물이라는 뜻으로",
      "sample": "She is a key person in this project."
    },
    "tier": 4,
    "rank": 0
  },
  {
    "id": "catch",
    "word": "catch",
    "pos": "동사",
    "core": {
      "ko": "잡다",
      "image": "움직이는 것을 붙잡아 손에 넣는 그림",
      "exEn": "Catch the ball!",
      "exKo": "공을 잡아!"
    },
    "senses": [
      {
        "key": "intime",
        "label": "시간 맞춰 타다",
        "exEn": "I ran to catch the bus.",
        "exKo": "나는 버스를 타려고 달렸다.",
        "bridge": "떠나는 것을 붙잡아 타다"
      },
      {
        "key": "sick",
        "label": "(병에) 걸리다",
        "exEn": "He caught a cold.",
        "exKo": "그는 감기에 걸렸다.",
        "bridge": "병을 붙잡히듯 얻다"
      },
      {
        "key": "notice",
        "label": "알아채다",
        "exEn": "She caught my mistake.",
        "exKo": "그녀는 내 실수를 알아챘다.",
        "bridge": "지나가는 것을 눈으로 붙잡다"
      }
    ],
    "context": [
      {
        "sentence": "Hurry, we must <b>catch</b> the train.",
        "senseKey": "intime",
        "gloss": "(기차를) 시간 맞춰 타다"
      },
      {
        "sentence": "I <b>caught</b> the flu last winter.",
        "senseKey": "sick",
        "gloss": "(독감에) 걸리다"
      }
    ],
    "reverse": {
      "senseKey": "notice",
      "scene": "아무도 그 오류를 알아채지 못했다는 뜻으로",
      "sample": "No one caught the error."
    },
    "tier": 4,
    "rank": 0
  },
  {
    "id": "drop",
    "word": "drop",
    "pos": "동사·명사",
    "core": {
      "ko": "떨어뜨리다",
      "image": "잡고 있던 것을 아래로 놓아 떨어지게 하는 그림",
      "exEn": "I dropped my phone.",
      "exKo": "나는 휴대폰을 떨어뜨렸다."
    },
    "senses": [
      {
        "key": "decrease",
        "label": "낮추다·떨어지다",
        "exEn": "The price dropped fast.",
        "exKo": "가격이 빠르게 떨어졌다.",
        "bridge": "수치가 아래로 떨어지다"
      },
      {
        "key": "quit",
        "label": "그만두다",
        "exEn": "He dropped the class.",
        "exKo": "그는 그 수업을 그만뒀다.",
        "bridge": "쥐고 있던 것을 손에서 놓다"
      },
      {
        "key": "letoff",
        "label": "내려주다",
        "exEn": "Drop me at the station.",
        "exKo": "역에서 내려줘.",
        "bridge": "사람을 차에서 떨어뜨려 놓다"
      }
    ],
    "context": [
      {
        "sentence": "The temperature <b>dropped</b> quickly.",
        "senseKey": "decrease",
        "gloss": "(온도가) 떨어지다"
      },
      {
        "sentence": "Can you <b>drop</b> me off here?",
        "senseKey": "letoff",
        "gloss": "(여기서) 내려주다"
      }
    ],
    "reverse": {
      "senseKey": "quit",
      "scene": "그녀가 그 계획을 접었다(그만뒀다)는 뜻으로",
      "sample": "She dropped the plan."
    },
    "tier": 4,
    "rank": 0
  },
  {
    "id": "stand",
    "word": "stand",
    "pos": "동사",
    "core": {
      "ko": "서다",
      "image": "두 발로 똑바로 서 있는 그림",
      "exEn": "Please stand up.",
      "exKo": "일어서 주세요."
    },
    "senses": [
      {
        "key": "endure",
        "label": "견디다·참다",
        "exEn": "I can't stand the noise.",
        "exKo": "나는 그 소음을 참을 수 없다.",
        "bridge": "쓰러지지 않고 버티고 서 있다"
      },
      {
        "key": "located",
        "label": "위치하다",
        "exEn": "A tree stands by the gate.",
        "exKo": "나무 한 그루가 문 옆에 서 있다.",
        "bridge": "어떤 자리에 서 있다"
      },
      {
        "key": "mean",
        "label": "나타내다·의미하다",
        "exEn": "USA stands for United States of America.",
        "exKo": "USA는 미합중국을 나타낸다.",
        "bridge": "그 자리를 대신해 서 있다"
      }
    ],
    "context": [
      {
        "sentence": "She can't <b>stand</b> rude people.",
        "senseKey": "endure",
        "gloss": "(무례한 사람을) 참지 못하다"
      },
      {
        "sentence": "An old castle <b>stands</b> on the hill.",
        "senseKey": "located",
        "gloss": "(언덕에) 서 있다·위치하다"
      }
    ],
    "reverse": {
      "senseKey": "mean",
      "scene": "이 표시가 '위험'을 나타낸다는 뜻으로",
      "sample": "This sign stands for danger."
    },
    "tier": 4,
    "rank": 0
  },
  {
    "id": "sharp",
    "word": "sharp",
    "pos": "형용사·부사",
    "core": {
      "ko": "날카로운",
      "image": "끝이 뾰족해 잘 베거나 또렷한 성질",
      "exEn": "a sharp knife",
      "exKo": "날카로운 칼"
    },
    "senses": [
      {
        "key": "clever",
        "label": "예리한·똑똑한",
        "exEn": "She has a sharp mind.",
        "exKo": "그녀는 예리한 사고를 지녔다.",
        "bridge": "생각이 칼처럼 날카롭다"
      },
      {
        "key": "clear",
        "label": "선명한",
        "exEn": "a sharp image",
        "exKo": "선명한 이미지",
        "bridge": "경계가 뚜렷해 또렷하다"
      },
      {
        "key": "exact",
        "label": "정각·정확히",
        "exEn": "at 3 o'clock sharp",
        "exKo": "3시 정각에",
        "bridge": "오차 없이 뾰족하게 딱 맞는"
      }
    ],
    "context": [
      {
        "sentence": "He gave a <b>sharp</b> answer.",
        "senseKey": "clever",
        "gloss": "예리한·날카로운"
      },
      {
        "sentence": "The meeting starts at nine <b>sharp</b>.",
        "senseKey": "exact",
        "gloss": "정각(에)"
      }
    ],
    "reverse": {
      "senseKey": "clear",
      "scene": "새 화면이 아주 선명하다는 뜻으로",
      "sample": "The new screen is very sharp."
    },
    "tier": 4,
    "rank": 0
  },
  {
    "id": "deep",
    "word": "deep",
    "pos": "형용사",
    "core": {
      "ko": "깊은",
      "image": "표면에서 속까지 멀리 들어간 그림",
      "exEn": "a deep river",
      "exKo": "깊은 강"
    },
    "senses": [
      {
        "key": "strong",
        "label": "깊은·강한(감정)",
        "exEn": "deep love",
        "exKo": "깊은 사랑",
        "bridge": "마음 속 깊이 들어간 감정"
      },
      {
        "key": "hard",
        "label": "심오한·진지한",
        "exEn": "a deep question",
        "exKo": "심오한 질문",
        "bridge": "속까지 파고들어야 하는"
      },
      {
        "key": "low",
        "label": "낮은·짙은",
        "exEn": "a deep voice",
        "exKo": "낮고 굵은 목소리",
        "bridge": "바닥까지 내려간 낮은 것"
      }
    ],
    "context": [
      {
        "sentence": "They had a <b>deep</b> talk about life.",
        "senseKey": "hard",
        "gloss": "깊이 있는·진지한"
      },
      {
        "sentence": "She wore a <b>deep</b> red coat.",
        "senseKey": "low",
        "gloss": "짙은 (빨간)색"
      }
    ],
    "reverse": {
      "senseKey": "strong",
      "scene": "그가 음악에 깊은 관심을 가지고 있다는 뜻으로",
      "sample": "He has a deep interest in music."
    },
    "tier": 4,
    "rank": 0
  },
  {
    "id": "close",
    "word": "close",
    "pos": "동사·형용사",
    "core": {
      "ko": "닫다·가까운",
      "image": "사이를 좁혀 붙이거나 닫는 그림",
      "exEn": "Close the door.",
      "exKo": "문을 닫아라."
    },
    "senses": [
      {
        "key": "near",
        "label": "가까운",
        "exEn": "The shop is close to my house.",
        "exKo": "그 가게는 우리 집과 가깝다.",
        "bridge": "거리가 좁혀져 붙어 있다"
      },
      {
        "key": "intimate",
        "label": "친한",
        "exEn": "We are close friends.",
        "exKo": "우리는 친한 친구다.",
        "bridge": "마음의 거리가 가깝다"
      },
      {
        "key": "end",
        "label": "끝내다·마치다",
        "exEn": "The store closes at nine.",
        "exKo": "그 가게는 9시에 문을 닫는다.",
        "bridge": "열려 있던 것을 닫아 끝내다"
      }
    ],
    "context": [
      {
        "sentence": "My office is <b>close</b> to the station.",
        "senseKey": "near",
        "gloss": "(역과) 가까운"
      },
      {
        "sentence": "They are very <b>close</b> friends.",
        "senseKey": "intimate",
        "gloss": "친한·가까운"
      }
    ],
    "reverse": {
      "senseKey": "end",
      "scene": "박물관이 6시에 문을 닫는다는 뜻으로",
      "sample": "The museum closes at six."
    },
    "tier": 4,
    "rank": 0
  },
  {
    "id": "strike",
    "word": "strike",
    "pos": "동사·명사",
    "core": {
      "ko": "치다·때리다",
      "image": "세게 부딪쳐 충격을 주는 그림",
      "exEn": "He struck the drum.",
      "exKo": "그는 북을 쳤다."
    },
    "senses": [
      {
        "key": "idea",
        "label": "문득 떠오르다",
        "exEn": "An idea struck me.",
        "exKo": "한 생각이 문득 떠올랐다.",
        "bridge": "생각이 머리를 치듯 떠오르다"
      },
      {
        "key": "impress",
        "label": "인상을 주다",
        "exEn": "The view struck us as amazing.",
        "exKo": "그 경치는 놀랍게 느껴졌다.",
        "bridge": "마음을 세게 치다"
      },
      {
        "key": "strikework",
        "label": "파업하다",
        "exEn": "The workers went on strike.",
        "exKo": "노동자들이 파업했다.",
        "bridge": "일을 멈추어 맞서 치다"
      }
    ],
    "context": [
      {
        "sentence": "It suddenly <b>struck</b> me that I was wrong.",
        "senseKey": "idea",
        "gloss": "문득 (생각이) 들다·떠오르다"
      },
      {
        "sentence": "Her kindness <b>struck</b> everyone.",
        "senseKey": "impress",
        "gloss": "(깊은) 인상을 주다"
      }
    ],
    "reverse": {
      "senseKey": "strikework",
      "scene": "기사들이 더 나은 임금을 위해 파업 중이라는 뜻으로",
      "sample": "The drivers are on strike for better pay."
    },
    "tier": 4,
    "rank": 0
  },
  {
    "id": "set",
    "word": "set",
    "pos": "동사·명사",
    "core": {
      "ko": "놓다·두다",
      "image": "무언가를 어떤 자리에 자리 잡게 놓는 그림",
      "exEn": "She set the cup on the table.",
      "exKo": "그녀는 컵을 탁자에 놓았다."
    },
    "senses": [
      {
        "key": "decide",
        "label": "정하다",
        "exEn": "Let's set a date.",
        "exKo": "날짜를 정하자.",
        "bridge": "어떤 값을 자리에 딱 놓아 정하다"
      },
      {
        "key": "godown",
        "label": "(해가) 지다",
        "exEn": "The sun sets in the west.",
        "exKo": "해는 서쪽으로 진다.",
        "bridge": "해가 지평선 아래로 놓이다"
      },
      {
        "key": "group",
        "label": "세트·한 벌",
        "exEn": "a set of tools",
        "exKo": "공구 한 세트",
        "bridge": "함께 놓인 한 묶음"
      }
    ],
    "context": [
      {
        "sentence": "We <b>set</b> the meeting for Monday.",
        "senseKey": "decide",
        "gloss": "(회의 날짜를) 정하다"
      },
      {
        "sentence": "The sun was <b>setting</b> behind the hills.",
        "senseKey": "godown",
        "gloss": "(해가) 지다"
      }
    ],
    "reverse": {
      "senseKey": "decide",
      "scene": "선생님이 마감일을 정했다는 뜻으로",
      "sample": "The teacher set a deadline."
    },
    "tier": 4,
    "rank": 0
  },
  {
    "id": "play",
    "word": "play",
    "pos": "동사·명사",
    "core": {
      "ko": "놀다",
      "image": "즐겁게 움직이며 활동하는 그림",
      "exEn": "Children play in the park.",
      "exKo": "아이들이 공원에서 논다."
    },
    "senses": [
      {
        "key": "sport",
        "label": "경기하다",
        "exEn": "They play soccer.",
        "exKo": "그들은 축구를 한다.",
        "bridge": "규칙 안에서 즐기며 겨루다"
      },
      {
        "key": "instrument",
        "label": "연주하다",
        "exEn": "She plays the piano.",
        "exKo": "그녀는 피아노를 친다.",
        "bridge": "악기를 다루며 소리로 놀다"
      },
      {
        "key": "role",
        "label": "역할을 하다·연기하다",
        "exEn": "He plays the hero.",
        "exKo": "그는 주인공을 연기한다.",
        "bridge": "어떤 역을 맡아 하다"
      }
    ],
    "context": [
      {
        "sentence": "Our team <b>plays</b> against them tomorrow.",
        "senseKey": "sport",
        "gloss": "(경기를) 하다·맞붙다"
      },
      {
        "sentence": "Music <b>plays</b> an important role in film.",
        "senseKey": "role",
        "gloss": "역할을 하다"
      }
    ],
    "reverse": {
      "senseKey": "instrument",
      "scene": "그가 기타를 아주 잘 친다는 뜻으로",
      "sample": "He plays the guitar very well."
    },
    "tier": 4,
    "rank": 0
  },
  {
    "id": "bright",
    "word": "bright",
    "pos": "형용사",
    "core": {
      "ko": "밝은",
      "image": "빛이 강해 환한 그림",
      "exEn": "a bright sun",
      "exKo": "밝은 해"
    },
    "senses": [
      {
        "key": "clever",
        "label": "똑똑한",
        "exEn": "a bright student",
        "exKo": "똑똑한 학생",
        "bridge": "머리가 환하게 밝은"
      },
      {
        "key": "vivid",
        "label": "선명한 색",
        "exEn": "bright yellow",
        "exKo": "선명한 노란색",
        "bridge": "빛이 강해 색이 또렷한"
      },
      {
        "key": "hopeful",
        "label": "희망찬",
        "exEn": "a bright future",
        "exKo": "밝은 미래",
        "bridge": "앞이 환하게 밝은"
      }
    ],
    "context": [
      {
        "sentence": "She is a <b>bright</b> child who learns fast.",
        "senseKey": "clever",
        "gloss": "똑똑한·영리한"
      },
      {
        "sentence": "The team has a <b>bright</b> future.",
        "senseKey": "hopeful",
        "gloss": "밝은·희망찬"
      }
    ],
    "reverse": {
      "senseKey": "vivid",
      "scene": "그가 선명한 파란색 셔츠를 입고 있다는 뜻으로",
      "sample": "He is wearing a bright blue shirt."
    },
    "tier": 4,
    "rank": 0
  },
  {
    "id": "spring",
    "word": "spring",
    "pos": "명사·동사",
    "core": {
      "ko": "튀어 오르다",
      "image": "눌렸다가 갑자기 위로 솟는 그림(그래서 '봄·용수철·샘물')",
      "exEn": "The cat sprang onto the sofa.",
      "exKo": "고양이가 소파 위로 튀어 올랐다."
    },
    "senses": [
      {
        "key": "season",
        "label": "봄",
        "exEn": "Flowers bloom in spring.",
        "exKo": "봄에 꽃이 핀다.",
        "bridge": "땅에서 생명이 솟아오르는 계절"
      },
      {
        "key": "coil",
        "label": "용수철·스프링",
        "exEn": "The spring in the pen is broken.",
        "exKo": "펜 속 용수철이 부러졌다.",
        "bridge": "눌리면 튀어 오르는 물건"
      },
      {
        "key": "water",
        "label": "샘",
        "exEn": "fresh spring water",
        "exKo": "신선한 샘물",
        "bridge": "땅에서 물이 솟아오르는 곳"
      }
    ],
    "context": [
      {
        "sentence": "We plant seeds in <b>spring</b>.",
        "senseKey": "season",
        "gloss": "봄"
      },
      {
        "sentence": "They drank cold water from a <b>spring</b>.",
        "senseKey": "water",
        "gloss": "샘·샘물"
      }
    ],
    "reverse": {
      "senseKey": "coil",
      "scene": "이 침대는 용수철이 너무 딱딱하다는 뜻으로",
      "sample": "This bed's springs are too hard."
    },
    "tier": 4,
    "rank": 0
  },
  {
    "id": "line",
    "word": "line",
    "pos": "명사",
    "core": {
      "ko": "선·줄",
      "image": "한 방향으로 죽 이어진 가늘고 긴 그림",
      "exEn": "Draw a straight line.",
      "exKo": "직선을 그어라."
    },
    "senses": [
      {
        "key": "queue",
        "label": "줄·대기줄",
        "exEn": "Wait in line, please.",
        "exKo": "줄을 서서 기다리세요.",
        "bridge": "사람들이 한 줄로 이어진 것"
      },
      {
        "key": "phone",
        "label": "전화선·통화",
        "exEn": "The line is busy.",
        "exKo": "통화 중이다.",
        "bridge": "소리가 오가는 이어진 줄"
      },
      {
        "key": "words",
        "label": "대사·글줄",
        "exEn": "An actor forgot his lines.",
        "exKo": "배우가 대사를 잊었다.",
        "bridge": "글이 한 줄로 이어진 것"
      }
    ],
    "context": [
      {
        "sentence": "There was a long <b>line</b> at the bank.",
        "senseKey": "queue",
        "gloss": "줄·대기 행렬"
      },
      {
        "sentence": "Please hold the <b>line</b> for a moment.",
        "senseKey": "phone",
        "gloss": "(전화를) 끊지 말고 기다리다·통화"
      }
    ],
    "reverse": {
      "senseKey": "words",
      "scene": "그 배우가 자신의 대사를 완벽하게 외웠다는 뜻으로",
      "sample": "The actor memorized all his lines."
    },
    "tier": 4,
    "rank": 0
  }
];
