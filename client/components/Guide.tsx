import { useEffect, useMemo } from "react";
import type { Word } from "../../shared/types.ts";
import { TIERS } from "../../shared/types.ts";

/** 어근 가족 예시. 이 앱이 5군을 왜 이렇게 짰는지 한눈에 보여 주는 자리다. */
const ROOT_FAMILIES = [
  {
    root: "sistere",
    ko: "서다",
    kids: [
      ["consist", "함께 서 있다"],
      ["persist", "끝까지 서 있다"],
      ["resist", "맞서 버티고 서다"],
      ["insist", "위에 딱 버티고 서다"],
    ],
  },
  {
    root: "spectare",
    ko: "보다",
    kids: [
      ["aspect", "~쪽에서 본 모습"],
      ["respect", "다시 돌아보다"],
      ["inspect", "안을 들여다보다"],
      ["suspect", "아래에서 슬쩍 올려다보다"],
    ],
  },
  {
    root: "stare",
    ko: "서다",
    kids: [
      ["constant", "굳게 함께 서 있다"],
      ["distance", "떨어져 서 있음"],
      ["substance", "아래에 서서 받치는 것"],
      ["circumstance", "둘레에 서 있는 것들"],
    ],
  },
];

const STEPS = [
  {
    n: "STEP 1",
    name: "제시",
    icon: "📖",
    what: "단어의 core 하나와 그것을 그림으로 바꾼 한 장면을 본다.",
    tip: "여기서 뜻을 외우려 들지 마라. 그림 하나만 머리에 남기면 된다.",
  },
  {
    n: "STEP 2",
    name: "의미확장지도",
    icon: "🗺️",
    what: "가지를 눌러 펼치면 각 뜻이 core와 어떻게 이어지는지 나온다.",
    tip: "🔗 표시된 한 줄이 이 앱의 알맹이다. 뜻보다 그 다리를 읽어라.",
  },
  {
    n: "STEP 3",
    name: "문맥복원",
    icon: "🧩",
    what: "수능형 문장 속에서 그 단어가 무슨 뜻인지 한국어로 직접 쓴다.",
    tip: "사전 뜻을 옮기지 말고 이 문장에서의 뜻을 써라. 그게 채점 기준이다.",
  },
  {
    n: "STEP 4",
    name: "역방향생성",
    icon: "✍️",
    what: "제시된 상황에 맞게 그 단어를 넣어 영어 문장을 직접 만든다.",
    tip: "읽어서 아는 것과 쓸 수 있는 것은 다르다. 여기서 갈린다.",
  },
  {
    n: "STEP 5",
    name: "리포트",
    icon: "📊",
    what: "단어별 숙련도와 군별 진도를 확인한다.",
    tip: "비어 있는 군이 다음에 할 일이다.",
  },
];

interface Props {
  words: Word[];
  onClose: () => void;
}

export function Guide({ words, onClose }: Props) {
  // 숫자는 실제 카탈로그에서 뽑는다 — 단어를 늘려도 이 화면이 낡지 않는다.
  const stats = useMemo(() => {
    const senses = words.reduce((sum, w) => sum + w.senses.length, 0);
    const tasks = words.reduce((sum, w) => sum + w.context.length + 1, 0);
    const byTier = TIERS.map((t) => ({
      ...t,
      count: words.filter((w) => w.tier === t.tier).length,
    }));
    return { total: words.length, senses, tasks, byTier };
  }, [words]);

  // 열려 있는 동안 뒤 배경이 따라 스크롤되지 않게 막는다.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="guide-back" role="dialog" aria-modal="true" aria-label="앱 소개와 사용법">
      <div className="guide">
        <div className="guide-bar">
          <strong>Core Meaning Lab 안내</strong>
          <button className="guide-x" onClick={onClose} aria-label="닫기">
            ✕
          </button>
        </div>

        <div className="guide-body">
          {/* ── 목적 ─────────────────────────────────────── */}
          <section className="gsec">
            <h2 className="gh">뜻을 외우지 않습니다</h2>
            <p className="gp">
              수능 영어에서 발목을 잡는 단어는 모르는 단어가 아닙니다. <b>아는 단어가 모르는
              뜻으로 나올 때</b>입니다. <code>run</code> 을 "달리다"로만, <code>ground</code> 를
              "땅"으로만 알고 지문에 들어가면 문장이 통째로 어긋납니다.
            </p>
            <p className="gp">
              뜻을 다섯 개씩 외우는 것은 끝이 없습니다. 이 앱은 반대로 갑니다 —
              <b> 핵심 의미(core) 하나를 먼저 잡고, 나머지 뜻이 거기서 어떻게 뻗어 나오는지</b>를
              따라갑니다. 그러면 시험장에서 처음 보는 쓰임이 나와도 스스로 복원할 수 있습니다.
            </p>
          </section>

          {/* ── rationale ─────────────────────────────────── */}
          <section className="gsec">
            <h2 className="gh">왜 이 방법이 통하는가</h2>
            <p className="gp">
              <code>run</code> 의 core 는 <b>계속 움직이다</b> 입니다. 이 그림 하나에서:
            </p>
            <div className="gmap">
              <div className="gmap-core">run · 계속 움직이다</div>
              <ul className="gmap-kids">
                <li>
                  <b>운영하다</b>
                  <span>가게·조직이 멈추지 않고 계속 굴러가게 하다</span>
                </li>
                <li>
                  <b>작동하다</b>
                  <span>기계가 안에서 계속 움직이며 돌다</span>
                </li>
                <li>
                  <b>이어지다</b>
                  <span>시간이나 길이가 끊기지 않고 쭉 뻗다</span>
                </li>
              </ul>
            </div>
            <p className="gp">
              가운데 붙은 <b>한 줄 설명이 이 앱의 전부</b>입니다. 뜻과 뜻 사이를 잇는 이 다리를
              읽고 나면, 뜻 세 개가 따로따로가 아니라 하나의 그림으로 남습니다.
            </p>

            <h3 className="gh3">라틴어 어휘는 접두사만 갈아 끼운 한 식구입니다</h3>
            <p className="gp">
              논설·과학 지문을 막는 추상 어휘는 대부분 라틴어 어근에 접두사를 붙인 것입니다.
              <b> 뿌리 하나를 잡으면 네 단어가 한꺼번에 열립니다.</b>
            </p>
            {ROOT_FAMILIES.map((f) => (
              <div key={f.root} className="groot">
                <div className="groot-h">
                  <code>{f.root}</code> {f.ko}
                </div>
                {f.kids.map(([w, meaning]) => (
                  <div key={w} className="groot-row">
                    <span className="gw">{w}</span>
                    <span className="gm">{meaning}</span>
                  </div>
                ))}
              </div>
            ))}
            <p className="gp gnote">
              💡 <code>succeed</code> 가 "성공하다"와 "계승하다"를 함께 갖는 이유도 같습니다.
              core 가 <b>뒤따라 가다</b>이기 때문입니다 — 앞사람 뒤를 이으면 계승,
              끝까지 따라가 닿으면 성공입니다.
            </p>
          </section>

          {/* ── 학습 체계 ─────────────────────────────────── */}
          <section className="gsec">
            <h2 className="gh">무엇을 배우나 — {stats.total}개 단어</h2>
            <div className="gstats">
              <div>
                <b>{stats.total}</b>
                <span>단어</span>
              </div>
              <div>
                <b>{stats.senses}</b>
                <span>확장 의미</span>
              </div>
              <div>
                <b>{stats.tasks}</b>
                <span>연습 과제</span>
              </div>
            </div>
            <p className="gp">
              단어는 아무렇게나 고른 것이 아니라 <b>수능·평가원·EBS 에서 쓸모가 큰 순서</b>로
              줄을 세웠습니다. 화면 위쪽 탭이 이 구분입니다.
            </p>
            <div className="gtiers">
              <div className="gtier gtier-top">
                <div className="gt-name">최우선 30</div>
                <div className="gt-desc">
                  군을 가로지르는 순위 1~30. <b>어디서 시작할지 모르겠으면 1번부터 순서대로.</b>
                </div>
              </div>
              {stats.byTier.map((t) => (
                <div key={t.tier} className="gtier">
                  <div className="gt-name">
                    {t.tier}군 {t.name} <span className="gt-n">{t.count}</span>
                  </div>
                  <div className="gt-desc">{t.blurb}</div>
                </div>
              ))}
            </div>
            <p className="gp gnote">
              1~3군 60개는 <b>설계에서 확정한 정본</b>이라 개수를 늘리지 않습니다.
              4·5군은 그 위에 넓힌 확장분입니다.
            </p>
          </section>

          {/* ── 사용 가이드 ───────────────────────────────── */}
          <section className="gsec">
            <h2 className="gh">어떻게 쓰나 — 단어 하나에 5단계</h2>
            <p className="gp">
              아래쪽 탭으로 단계를 오갑니다. 순서대로 한 바퀴 도는 것이 기본이지만,
              아무 단계로나 건너뛰어도 됩니다.
            </p>
            {STEPS.map((s) => (
              <div key={s.n} className="gstep">
                <div className="gstep-h">
                  <span className="gstep-ic">{s.icon}</span>
                  <span className="gstep-n">{s.n}</span>
                  <b>{s.name}</b>
                </div>
                <div className="gstep-what">{s.what}</div>
                <div className="gstep-tip">{s.tip}</div>
              </div>
            ))}

            <h3 className="gh3">채점 결과 읽는 법</h3>
            <p className="gp">
              STEP 3·4 의 답은 3단계로 채점되고, 한국어 피드백과 모범 답안이 함께 나옵니다.
            </p>
            <div className="gscore">
              <span className="badge s2">우수</span>
              <span>뜻이 정확하고 core 와의 연결도 자연스럽다</span>
            </div>
            <div className="gscore">
              <span className="badge s1">보통</span>
              <span>뜻은 대체로 맞다</span>
            </div>
            <div className="gscore">
              <span className="badge s0">미흡</span>
              <span>틀렸거나 관련이 없다 · 무응답</span>
            </div>
            <p className="gp gnote">
              피드백은 <b>틀린 곳만 짚는 것이 아니라 core 에서 그 뜻이 어떻게 나오는지</b>를
              함께 설명합니다. 점수보다 그 문장을 읽으세요.
            </p>

            <h3 className="gh3">알아 두면 좋은 것</h3>
            <ul className="glist">
              <li>
                단어 칩의 작은 점은 <b>숙련도</b>입니다. 회색 → 빨강 → 주황 → 초록 순으로 오릅니다.
              </li>
              <li>
                진도는 이 브라우저에 저장됩니다. <b>다른 기기와는 공유되지 않습니다.</b>
              </li>
              <li>
                헤더의 점이 초록이면 AI 채점, 회색이면 오프라인 채점(글자 맞춰보기)입니다.
                오프라인일 때도 학습 흐름은 전부 돌아갑니다.
              </li>
              <li>같은 문제를 다시 풀어도 됩니다. 점수는 최고점만 남습니다.</li>
            </ul>
          </section>

          <button className="btn" onClick={onClose}>
            시작하기 →
          </button>
        </div>
      </div>
    </div>
  );
}
