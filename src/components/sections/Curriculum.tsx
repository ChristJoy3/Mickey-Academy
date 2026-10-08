"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Icon from "../Icon";
import SectionHeading from "../SectionHeading";
import { curriculum } from "@/content/site";
import { prefersReducedMotion } from "@/lib/lenis";

const dayTints = ["bg-sun-tint", "bg-coral-tint", "bg-sky-tint", "bg-mint-tint", "bg-sun-tint"];
const dayNames: Record<string, string> = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
};

export default function Curriculum() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const grids = useRef<(HTMLUListElement | null)[]>([]);
  const first = useRef(true);

  // Flip the day cards in whenever the week changes (not on first render).
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const grid = grids.current[active];
    if (prefersReducedMotion() || !grid) return;
    const cards = grid.querySelectorAll("li");
    const tween = gsap.fromTo(
      cards,
      { rotationX: -88, autoAlpha: 0, transformPerspective: 900, transformOrigin: "50% 0%" },
      { rotationX: 0, autoAlpha: 1, duration: 0.7, ease: "back.out(1.6)", stagger: 0.07 },
    );
    return () => {
      tween.kill();
    };
  }, [active]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = curriculum.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="curriculum" aria-labelledby="curriculum-title" className="bg-cream-deep px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="curriculum-title"
          eyebrow="Sample monthly curriculum"
          title="A month of discovery."
          intro="Here's a sample month, with a new theme each week."
        />

        <div
          role="tablist"
          aria-label="Curriculum weeks"
          className="mt-10 flex gap-2 overflow-x-auto rounded-full bg-white p-2 shadow-sm sm:inline-flex"
          onKeyDown={onKeyDown}
        >
          {curriculum.map((w, i) => (
            <button
              key={w.theme}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              type="button"
              id={`week-tab-${i}`}
              aria-selected={active === i}
              aria-controls={`week-panel-${i}`}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-full px-5 py-2.5 font-display text-lg font-semibold transition-colors ${
                active === i ? "bg-navy text-cream" : "text-navy hover:bg-sun-tint"
              }`}
            >
              Week {i + 1}
            </button>
          ))}
        </div>

        {curriculum.map((w, i) => (
          <div
            key={w.theme}
            role="tabpanel"
            id={`week-panel-${i}`}
            aria-labelledby={`week-tab-${i}`}
            hidden={active !== i}
            tabIndex={0}
            className="mt-10 rounded-[var(--radius-card)]"
          >
            <p className="flex flex-wrap items-baseline gap-x-3 font-display">
              <span className="text-lg font-semibold text-coral-ink">Theme</span>
              <span className="text-3xl font-semibold text-navy sm:text-4xl">{w.theme}</span>
            </p>
            <ul
              ref={(el) => {
                grids.current[i] = el;
              }}
              className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
            >
              {w.days.map((d, j) => (
                <li key={d.day} className={`flex flex-col gap-3 rounded-[1.75rem] p-6 ${dayTints[j]}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-bold tracking-[0.18em] text-navy uppercase">
                      <abbr title={dayNames[d.day]} className="no-underline">
                        {d.day}
                      </abbr>
                    </span>
                    <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-navy">{d.subject}</span>
                  </div>
                  <p className="text-base text-navy">{d.text}</p>
                </li>
              ))}
            </ul>
            {w.note && (
              <p className="mt-8 flex items-start gap-3 rounded-[1.75rem] border-2 border-dashed border-mint-ink/40 bg-white p-6 text-navy">
                <Icon name="sun" className="mt-0.5 size-7 shrink-0 text-mint-ink" />
                <span>{w.note}</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
