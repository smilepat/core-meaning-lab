// 라틴 어근 가족.
//
// 단어마다 root 필드를 붙이지 않고 여기 한곳에 모아 둔다. 112개 단어를 일일이 고치는
// 것보다 안전하고, 가족을 통째로 옮기거나 이름을 바꿀 때 한 줄만 건드리면 된다.
// member 에 적은 id 가 카탈로그에 없으면 shared/catalog.ts 의 검사가 앱 기동 시 잡는다.
//
// **이 목록은 5군을 찾기 쉽게 하려고 만든 것이지, 어원 학습을 앱의 두 번째 축으로
// 삼으려는 게 아니다.** 이 앱의 단위는 여전히 "단어 하나 → core 하나 → 여러 뜻"이다.
// 다른 군에 있는 식구는 링크로만 걸어 준다(members 에 함께 적되 탭은 늘리지 않는다).
//
// ⚠️ 닮았다고 한 식구로 묶지 말 것. preserve·conserve·reserve·observe 는 servare(지키다)
// 이고 serve 는 servire(섬기다)라 다른 낱말이다. 그래서 serve 는 여기 없다.

export interface RootFamily {
  /** 라틴 어근 (표제형). */
  latin: string;
  /** 그 어근의 뜻. */
  ko: string;
  /** 이 가족에 속한 단어 id. 카탈로그에 실재해야 한다. */
  members: string[];
}

export const ROOT_FAMILIES: RootFamily[] = [
  { latin: "sistere", ko: "서다", members: ["consist", "persist", "resist", "insist"] },
  {
    latin: "stare",
    ko: "서 있다",
    members: ["constant", "distance", "substance", "circumstance", "constitute", "establish", "state"],
  },
  { latin: "tenere", ko: "붙들다", members: ["contain", "retain", "obtain", "sustain", "maintain"] },
  {
    latin: "ferre",
    ko: "나르다",
    members: ["confer", "infer", "differ", "suffer", "refer", "offer"],
  },
  { latin: "capere", ko: "잡다", members: ["accept", "perceive", "conceive", "receive", "capacity"] },
  { latin: "spectare", ko: "보다", members: ["aspect", "respect", "inspect", "suspect"] },
  { latin: "mittere", ko: "보내다", members: ["admit", "commit", "permit", "submit"] },
  { latin: "tendere", ko: "뻗다", members: ["attend", "intend", "pretend", "contend", "extend"] },
  { latin: "cedere", ko: "가다", members: ["proceed", "exceed", "precede", "succeed"] },
  {
    latin: "ponere",
    ko: "놓다",
    members: ["compose", "expose", "impose", "dispose", "oppose", "propose", "suppose", "post"],
  },
  { latin: "struere", ko: "쌓다", members: ["construct", "instruct", "obstruct", "destroy"] },
  { latin: "plicare", ko: "접다", members: ["imply", "comply", "reply", "employ", "apply"] },
  { latin: "vocare", ko: "부르다", members: ["evoke", "provoke", "invoke", "advocate"] },
  { latin: "trahere", ko: "끌다", members: ["attract", "contract", "distract", "treat", "train"] },
  { latin: "scribere", ko: "쓰다", members: ["describe", "prescribe", "subscribe", "inscribe"] },
  { latin: "portare", ko: "나르다", members: ["export", "report", "transport", "support"] },
  { latin: "currere", ko: "달리다", members: ["occur", "recur", "concur", "incur", "current"] },
  { latin: "venire", ko: "오다", members: ["prevent", "intervene", "convention", "event"] },
  { latin: "fundere", ko: "붓다", members: ["confuse", "refuse", "diffuse", "infuse"] },
  { latin: "gradi", ko: "걷다", members: ["progress", "regress", "aggressive", "gradual", "degree"] },
  { latin: "ducere", ko: "이끌다", members: ["induce", "introduce", "reduce", "conduct", "produce"] },
  { latin: "servare", ko: "지키다", members: ["preserve", "conserve", "reserve", "observe"] },
  { latin: "premere", ko: "누르다", members: ["impress", "suppress", "express"] },
  { latin: "volvere", ko: "말다", members: ["evolve", "involve", "volume"] },
  { latin: "jacere", ko: "던지다", members: ["subject", "object", "project"] },
  { latin: "vertere", ko: "돌리다", members: ["convert", "reverse"] },
  { latin: "tribuere", ko: "나눠 주다", members: ["attribute", "contribute"] },
  { latin: "terminus", ko: "경계", members: ["determine", "term"] },
  { latin: "finis", ko: "끝·경계", members: ["define", "fine"] },
];
