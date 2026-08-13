/**
 * 학습 화면 맨 위의 제호. 이 앱이 무엇을 하자는 것인지 한눈에 밝힌다.
 *
 * 헤더의 작은 워드마크는 스크롤·이동 중에도 남는 '표지'이고, 이쪽은 학습을 시작하는
 * 자리에서 **주장**을 말한다. 안내 화면은 한 번 닫으면 다시 안 뜨므로,
 * 앱의 전제는 매번 보이는 자리에도 있어야 한다.
 */
export function Masthead() {
  return (
    <div className="masthead">
      <h2 className="mh-title">
        Core Meaning <span>Lab</span>
      </h2>
      <p className="mh-lead">
        다의어는 <b>사전 뜻을 여러 개 외워서</b> 풀리지 않습니다. 그 뜻들을 관통하는{" "}
        <b>공통 개념(conceptual meaning)</b> 하나를 잡아야 합니다.
      </p>
      <p className="mh-tail">이 앱은 그 하나를 <b>core</b> 라고 부릅니다.</p>
    </div>
  );
}
