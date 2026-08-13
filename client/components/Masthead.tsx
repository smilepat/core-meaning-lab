/**
 * 페이지 맨 위의 제호. 이 앱이 무엇을 하자는 것인지 한눈에 밝힌다.
 *
 * 자리: sticky 헤더(검색·군 탭·단어 칩)보다 **위**다. 그래서 화면을 열면 가장 먼저
 * 보이고, 스크롤하면 밀려 올라가며 그 자리를 검색·탭이 차지한다. 헤더 안에 넣으면
 * 매 화면 상단을 계속 차지해 학습을 방해한다.
 *
 * 안내 화면은 한 번 닫으면 다시 안 뜨므로, 앱의 전제는 매번 보이는 자리에도 있어야 한다.
 */
export function Masthead() {
  return (
    <div className="masthead">
      <div className="wrap">
        <h1 className="mh-title">
          Core Meaning <span>Lab</span>
        </h1>
        <p className="mh-lead">
          다의어는 <b>사전 뜻을 여러 개 외워서</b> 풀리지 않습니다. 그 뜻들을 관통하는{" "}
          <b>공통 개념(conceptual meaning)</b> 하나를 잡아야 합니다.
        </p>
        {/* 주장을 한 줄 그림으로. 글보다 이쪽이 먼저 읽힌다. */}
        <div className="mh-swap">
          <span className="mh-chip off">뜻을 하나씩 외우기</span>
          <span className="mh-arrow" aria-hidden="true">
            →
          </span>
          <span className="mh-chip on">core 하나로 꿰기</span>
        </div>
      </div>
    </div>
  );
}
