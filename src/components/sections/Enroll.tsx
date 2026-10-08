import Icon from "../Icon";
import SectionHeading from "../SectionHeading";
import { enrollSteps } from "@/content/site";

const tints = ["bg-sun", "bg-sky", "bg-coral"];

export default function Enroll() {
  return (
    <section aria-labelledby="enroll-title" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading id="enroll-title" eyebrow="How to enroll" title="Three easy steps." />
        <ol className="relative mt-14 grid gap-6 md:grid-cols-3">
          {enrollSteps.map((s, i) => (
            <li key={s.n} className="card relative flex flex-col gap-4 pt-10" data-reveal="pop">
              <span
                className={`absolute -top-6 left-7 inline-flex size-14 items-center justify-center rounded-2xl font-display text-2xl font-bold text-navy shadow-md ${tints[i]}`}
                style={{ rotate: `${i % 2 ? 6 : -6}deg` }}
              >
                {s.n}
              </span>
              <h3 className="text-2xl font-semibold">{s.title}</h3>
              <p className="text-navy-soft">{s.body}</p>
              <a
                href={s.link.href}
                className="mt-auto inline-flex items-center gap-2 font-display text-lg font-semibold text-coral-ink underline-offset-4 hover:underline"
              >
                {s.link.label} <Icon name="arrow" className="size-5" />
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
