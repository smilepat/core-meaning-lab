// 이 파일은 core-meaning-lab.html 프로토타입에서 자동 추출되었습니다.
// 손으로 고치지 말고 scripts/extract-core30.cjs 를 다시 실행하세요.
import type { Word } from "./types";

export const CORE30: Word[] = [
  {
    "id": "run",
    "word": "run",
    "pos": "동사",
    "core": {
      "ko": "달리다",
      "image": "무언가가 한 방향으로 멈추지 않고 계속 빠르게 나아가는 그림",
      "exEn": "The children ran to the beach.",
      "exKo": "아이들이 해변으로 달려갔다."
    },
    "senses": [
      {
        "key": "operate",
        "label": "운영하다",
        "exEn": "My uncle runs a small café.",
        "exKo": "삼촌은 작은 카페를 운영한다.",
        "bridge": "가게·조직이 멈추지 않고 계속 굴러가게 하다"
      },
      {
        "key": "function",
        "label": "작동하다·돌아가다",
        "exEn": "The engine is running.",
        "exKo": "엔진이 돌아가고 있다.",
        "bridge": "기계가 안에서 계속 움직이며 작동하다"
      },
      {
        "key": "flow",
        "label": "흐르다",
        "exEn": "Tears ran down her face.",
        "exKo": "눈물이 얼굴을 타고 흘렀다.",
        "bridge": "액체가 한 방향으로 계속 이동하다"
      }
    ],
    "context": [
      {
        "sentence": "She <b>runs</b> a language school in Seoul.",
        "senseKey": "operate",
        "gloss": "(학교를) 운영하다"
      },
      {
        "sentence": "Don't leave the water <b>running</b>.",
        "senseKey": "flow",
        "gloss": "(물이) 계속 흐르다·틀어져 있다"
      }
    ],
    "reverse": {
      "senseKey": "function",
      "scene": "새로 산 노트북이 아주 매끄럽게 작동한다는 뜻으로",
      "sample": "My new laptop runs very smoothly."
    }
  },
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
    }
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
    }
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
    }
  },
  {
    "id": "hold",
    "word": "hold",
    "pos": "동사",
    "core": {
      "ko": "잡다·쥐다",
      "image": "손으로 무언가를 놓지 않고 붙들고 있는 그림",
      "exEn": "Hold my hand.",
      "exKo": "내 손을 잡아."
    },
    "senses": [
      {
        "key": "contain",
        "label": "담다·수용하다",
        "exEn": "This bottle holds one liter.",
        "exKo": "이 병은 1리터를 담는다.",
        "bridge": "안에 붙들어 담고 있다"
      },
      {
        "key": "event",
        "label": "열다·개최하다",
        "exEn": "They held a meeting.",
        "exKo": "그들은 회의를 열었다.",
        "bridge": "한자리에 붙들어 모으다"
      },
      {
        "key": "keep",
        "label": "유지하다",
        "exEn": "Hold still!",
        "exKo": "가만히 있어!",
        "bridge": "상태를 놓지 않고 붙들어 두다"
      }
    ],
    "context": [
      {
        "sentence": "The stadium <b>holds</b> 50,000 people.",
        "senseKey": "contain",
        "gloss": "(사람을) 수용하다·담다"
      },
      {
        "sentence": "We will <b>hold</b> a party next week.",
        "senseKey": "event",
        "gloss": "(파티를) 열다·개최하다"
      }
    ],
    "reverse": {
      "senseKey": "keep",
      "scene": "잠시 그 자세를 유지하라는 뜻으로",
      "sample": "Hold that position for a moment."
    }
  },
  {
    "id": "draw",
    "word": "draw",
    "pos": "동사",
    "core": {
      "ko": "끌다·당기다",
      "image": "무언가를 자기 쪽으로 끌어당기는 그림(연필을 끌어 선을 만들면 '그리다')",
      "exEn": "She drew a picture.",
      "exKo": "그녀는 그림을 그렸다."
    },
    "senses": [
      {
        "key": "pull",
        "label": "끌다·당기다",
        "exEn": "The horse drew the cart.",
        "exKo": "말이 수레를 끌었다.",
        "bridge": "자기 쪽으로 당기는 기본 동작"
      },
      {
        "key": "attract",
        "label": "끌어당기다·유인하다",
        "exEn": "The show drew a big crowd.",
        "exKo": "그 공연은 많은 관중을 끌어모았다.",
        "bridge": "사람의 관심을 끌어당기다"
      },
      {
        "key": "takeout",
        "label": "꺼내다·인출하다",
        "exEn": "He drew money from the bank.",
        "exKo": "그는 은행에서 돈을 인출했다.",
        "bridge": "안에 있던 것을 끌어내다"
      }
    ],
    "context": [
      {
        "sentence": "Bright colors <b>draw</b> children's attention.",
        "senseKey": "attract",
        "gloss": "(관심을) 끌다"
      },
      {
        "sentence": "She <b>drew</b> a card from the deck.",
        "senseKey": "takeout",
        "gloss": "(카드를) 꺼내다·뽑다"
      }
    ],
    "reverse": {
      "senseKey": "pull",
      "scene": "그가 커튼을 쳤다(끌어당겼다)는 뜻으로",
      "sample": "He drew the curtains."
    }
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
    }
  },
  {
    "id": "take",
    "word": "take",
    "pos": "동사",
    "core": {
      "ko": "가져가다·취하다",
      "image": "무언가를 잡아 자기 쪽으로 데려가는 그림",
      "exEn": "Take this pen.",
      "exKo": "이 펜을 가져가."
    },
    "senses": [
      {
        "key": "spend",
        "label": "(시간이) 걸리다",
        "exEn": "It takes an hour by bus.",
        "exKo": "버스로 한 시간 걸린다.",
        "bridge": "시간을 취해(써서) 쓰다"
      },
      {
        "key": "ride",
        "label": "타다",
        "exEn": "Let's take the subway.",
        "exKo": "지하철을 타자.",
        "bridge": "그 교통수단을 골라 가져가다"
      },
      {
        "key": "do",
        "label": "하다·받다",
        "exEn": "I take a shower every morning.",
        "exKo": "나는 매일 아침 샤워를 한다.",
        "bridge": "어떤 행동을 취하다"
      }
    ],
    "context": [
      {
        "sentence": "This project will <b>take</b> three days.",
        "senseKey": "spend",
        "gloss": "(시간이) 걸리다"
      },
      {
        "sentence": "She <b>takes</b> a bus to work.",
        "senseKey": "ride",
        "gloss": "(버스를) 타다"
      }
    ],
    "reverse": {
      "senseKey": "do",
      "scene": "회의 전에 잠깐 휴식을 취하자는 뜻으로",
      "sample": "Let's take a short rest before the meeting."
    }
  },
  {
    "id": "turn",
    "word": "turn",
    "pos": "동사·명사",
    "core": {
      "ko": "돌다·돌리다",
      "image": "방향이나 상태가 빙 도는 그림",
      "exEn": "Turn left at the corner.",
      "exKo": "모퉁이에서 왼쪽으로 돌아라."
    },
    "senses": [
      {
        "key": "become",
        "label": "변하다·~이 되다",
        "exEn": "The leaves turned red.",
        "exKo": "잎이 빨갛게 변했다.",
        "bridge": "상태가 다른 쪽으로 돌아 바뀌다"
      },
      {
        "key": "order",
        "label": "차례·순서",
        "exEn": "It's your turn.",
        "exKo": "네 차례야.",
        "bridge": "돌아가며 하는 순서"
      },
      {
        "key": "switch",
        "label": "켜다·끄다",
        "exEn": "Turn off the TV.",
        "exKo": "TV를 꺼라.",
        "bridge": "손잡이를 돌려 상태를 바꾸다"
      }
    ],
    "context": [
      {
        "sentence": "Milk <b>turns</b> sour in hot weather.",
        "senseKey": "become",
        "gloss": "(상해서) ~하게 되다·변하다"
      },
      {
        "sentence": "Please wait for your <b>turn</b>.",
        "senseKey": "order",
        "gloss": "차례·순서"
      }
    ],
    "reverse": {
      "senseKey": "switch",
      "scene": "불 좀 켜 달라고 부탁하는 뜻으로",
      "sample": "Could you turn on the light?"
    }
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
    }
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
    }
  },
  {
    "id": "point",
    "word": "point",
    "pos": "명사·동사",
    "core": {
      "ko": "점·뾰족한 끝",
      "image": "뾰족한 끝으로 한 곳을 콕 가리키는 그림",
      "exEn": "Don't point at people.",
      "exKo": "사람을 가리키지 마라."
    },
    "senses": [
      {
        "key": "idea",
        "label": "요점·핵심",
        "exEn": "What's the point of this story?",
        "exKo": "이 이야기의 요점이 뭐야?",
        "bridge": "콕 집어 말하려는 한 점"
      },
      {
        "key": "moment",
        "label": "시점·지점",
        "exEn": "At this point, we stopped.",
        "exKo": "이 시점에서 우리는 멈췄다.",
        "bridge": "시간·공간의 한 지점"
      },
      {
        "key": "score",
        "label": "점수",
        "exEn": "They scored ten points.",
        "exKo": "그들은 10점을 얻었다.",
        "bridge": "세는 한 점 한 점"
      }
    ],
    "context": [
      {
        "sentence": "You missed the <b>point</b> of my question.",
        "senseKey": "idea",
        "gloss": "요점·핵심"
      },
      {
        "sentence": "Our team is five <b>points</b> ahead.",
        "senseKey": "score",
        "gloss": "점수"
      }
    ],
    "reverse": {
      "senseKey": "moment",
      "scene": "이 지점에서 길이 두 갈래로 나뉜다는 뜻으로",
      "sample": "At this point, the road splits in two."
    }
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
    }
  },
  {
    "id": "face",
    "word": "face",
    "pos": "명사·동사",
    "core": {
      "ko": "얼굴",
      "image": "앞쪽을 향하는, 표정과 정체가 드러나는 부분",
      "exEn": "She has a kind face.",
      "exKo": "그녀는 다정한 얼굴을 가졌다."
    },
    "senses": [
      {
        "key": "surface",
        "label": "면·표면",
        "exEn": "the north face of the mountain",
        "exKo": "산의 북쪽 면",
        "bridge": "바깥으로 드러난 앞면"
      },
      {
        "key": "confront",
        "label": "맞서다·직면하다",
        "exEn": "We must face the problem.",
        "exKo": "우리는 그 문제에 맞서야 한다.",
        "bridge": "얼굴을 돌리지 않고 마주 보다"
      },
      {
        "key": "toward",
        "label": "~을 향하다",
        "exEn": "The house faces the sea.",
        "exKo": "그 집은 바다를 향한다.",
        "bridge": "얼굴을 그쪽으로 두다"
      }
    ],
    "context": [
      {
        "sentence": "He had to <b>face</b> many difficulties.",
        "senseKey": "confront",
        "gloss": "(어려움에) 직면하다·맞서다"
      },
      {
        "sentence": "My room <b>faces</b> the garden.",
        "senseKey": "toward",
        "gloss": "(정원을) 향하다·바라보다"
      }
    ],
    "reverse": {
      "senseKey": "confront",
      "scene": "우리는 큰 도전에 직면해 있다는 뜻으로",
      "sample": "We are facing a big challenge."
    }
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
    }
  },
  {
    "id": "cover",
    "word": "cover",
    "pos": "동사·명사",
    "core": {
      "ko": "덮다",
      "image": "무언가를 위에서 씌워 가리거나 감싸는 그림",
      "exEn": "Cover the pot with a lid.",
      "exKo": "냄비를 뚜껑으로 덮어라."
    },
    "senses": [
      {
        "key": "include",
        "label": "다루다·포함하다",
        "exEn": "The book covers world history.",
        "exKo": "그 책은 세계사를 다룬다.",
        "bridge": "넓게 덮어 전부 포함하다"
      },
      {
        "key": "report",
        "label": "취재·보도하다",
        "exEn": "She covered the election.",
        "exKo": "그녀는 선거를 취재했다.",
        "bridge": "사건 전체를 덮듯 취재하다"
      },
      {
        "key": "enough",
        "label": "충당하다",
        "exEn": "This money will cover the trip.",
        "exKo": "이 돈이면 여행비를 충당할 수 있다.",
        "bridge": "필요한 만큼 덮어 채우다"
      }
    ],
    "context": [
      {
        "sentence": "Today's class <b>covers</b> chapter three.",
        "senseKey": "include",
        "gloss": "(3장을) 다루다·포함하다"
      },
      {
        "sentence": "The reporter <b>covered</b> the accident.",
        "senseKey": "report",
        "gloss": "취재·보도하다"
      }
    ],
    "reverse": {
      "senseKey": "enough",
      "scene": "이 예산으로 비용을 충당할 수 있다는 뜻으로",
      "sample": "This budget will cover the costs."
    }
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
    }
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
    }
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
    }
  },
  {
    "id": "charge",
    "word": "charge",
    "pos": "동사·명사",
    "core": {
      "ko": "채워 싣다",
      "image": "부담이나 힘을 실어 넣는 그림(그래서 '충전하다')",
      "exEn": "Charge your phone.",
      "exKo": "휴대폰을 충전해라."
    },
    "senses": [
      {
        "key": "price",
        "label": "청구하다·값을 매기다",
        "exEn": "They charged me $10.",
        "exKo": "그들은 나에게 10달러를 청구했다.",
        "bridge": "값이라는 부담을 실어 매기다"
      },
      {
        "key": "duty",
        "label": "책임·담당",
        "exEn": "She is in charge of the team.",
        "exKo": "그녀가 팀을 담당한다.",
        "bridge": "책임을 짊어져 싣다"
      },
      {
        "key": "rush",
        "label": "돌진하다",
        "exEn": "The bull charged at him.",
        "exKo": "황소가 그에게 돌진했다.",
        "bridge": "힘을 가득 실어 밀고 나아가다"
      }
    ],
    "context": [
      {
        "sentence": "The hotel <b>charges</b> $100 a night.",
        "senseKey": "price",
        "gloss": "(요금을) 청구하다"
      },
      {
        "sentence": "Who is in <b>charge</b> here?",
        "senseKey": "duty",
        "gloss": "담당·책임"
      }
    ],
    "reverse": {
      "senseKey": "duty",
      "scene": "그가 안전을 책임지고 있다는 뜻으로",
      "sample": "He is in charge of safety."
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  },
  {
    "id": "carry",
    "word": "carry",
    "pos": "동사",
    "core": {
      "ko": "나르다·지니다",
      "image": "무언가를 들고 다른 곳으로 옮기는 그림",
      "exEn": "She carried a heavy bag.",
      "exKo": "그녀는 무거운 가방을 들고 갔다."
    },
    "senses": [
      {
        "key": "havewith",
        "label": "지니다·가지고 다니다",
        "exEn": "I always carry an umbrella.",
        "exKo": "나는 항상 우산을 가지고 다닌다.",
        "bridge": "몸에 지녀 옮기다"
      },
      {
        "key": "stock",
        "label": "취급하다·팔다",
        "exEn": "This shop carries fresh fruit.",
        "exKo": "이 가게는 신선한 과일을 취급한다.",
        "bridge": "물건을 갖춰 나르듯 다루다"
      },
      {
        "key": "spread",
        "label": "옮기다·전달하다",
        "exEn": "Mosquitoes carry disease.",
        "exKo": "모기는 병을 옮긴다.",
        "bridge": "무언가를 실어 다른 데로 옮기다"
      }
    ],
    "context": [
      {
        "sentence": "Do you <b>carry</b> batteries in this store?",
        "senseKey": "stock",
        "gloss": "(물건을) 취급하다·팔다"
      },
      {
        "sentence": "The wind <b>carried</b> the smell far.",
        "senseKey": "spread",
        "gloss": "(냄새를) 옮기다·실어 나르다"
      }
    ],
    "reverse": {
      "senseKey": "havewith",
      "scene": "나는 어디를 가든 물병을 가지고 다닌다는 뜻으로",
      "sample": "I carry a water bottle everywhere."
    }
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
    }
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
    }
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
    }
  }
];
