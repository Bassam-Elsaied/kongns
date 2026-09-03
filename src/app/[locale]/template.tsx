/**
 * Remounts on every client navigation within the locale layout, so the enter
 * animation can run while the shared header/footer stay put.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-transition">
      <div className="page-transition-veil" aria-hidden="true">
        <span className="page-transition-veil-sheen" />
      </div>
      <div className="page-transition-content">{children}</div>
    </div>
  );
}
