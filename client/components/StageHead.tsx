export function StageHead({ n, title, sub }: { n: string; title: string; sub: string }) {
  return (
    <div className="stagehead">
      <span className="n">{n}</span>
      <h2>{title}</h2>
      <span className="sub">{sub}</span>
    </div>
  );
}
