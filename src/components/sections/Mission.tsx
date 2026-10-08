import { CrayonUnderline } from "../Decor";
import { mission } from "@/content/site";

export default function Mission() {
  const words = mission.statement.split(" ");
  return (
    <section id="about" aria-labelledby="mission-title" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-5xl text-center">
        <p className="eyebrow text-coral-ink" data-reveal="fade">
          Our mission
        </p>
        <h2 id="mission-title" className="mt-6 text-4xl font-semibold text-navy sm:text-6xl lg:text-7xl">
          {words.map((w, i) => (
            <span key={i} data-mission-word className="inline">
              {w === "smile" ? <CrayonUnderline color="var(--color-sun)">{w}</CrayonUnderline> : w}
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </h2>
        <p className="mx-auto mt-10 max-w-2xl text-lg text-navy-soft sm:text-xl" data-reveal="fade">
          {mission.body}
        </p>
      </div>
    </section>
  );
}
