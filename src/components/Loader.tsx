/* eslint-disable @next/next/no-img-element */

// First-paint loader: the logo "paints" in left to right over a thin rainbow
// line in the logo's colours. Pure CSS, so it shows before any JS runs; Motion
// dismisses it once the page is ready, and a CSS failsafe hides it regardless.
export default function Loader() {
  return (
    <div id="loader" className="loader" aria-hidden="true">
      <div className="loader-inner">
        <div className="loader-logo">
          <img src="/logo.png" alt="" width={701} height={65} fetchPriority="high" decoding="async" />
        </div>
        <div className="loader-track">
          <span className="loader-bar" />
        </div>
      </div>
    </div>
  );
}
