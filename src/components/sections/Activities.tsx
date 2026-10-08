import Icon from "../Icon";
import SectionHeading from "../SectionHeading";
import { CrayonUnderline } from "../Decor";
import { activities } from "@/content/site";

const tints = ["bg-sun", "bg-coral", "bg-sky", "bg-mint"];

export default function Activities() {
  return (
    <section aria-labelledby="activities-title" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="activities-title"
          align="center"
          eyebrow="Daily activities"
          title={
            <>
              Every day is <CrayonUnderline color="var(--color-sky)">full</CrayonUnderline>.
            </>
          }
          intro="Age-appropriate, monitored activities."
        />
        <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {activities.map((a, i) => (
            <li
              key={a.label}
              data-reveal="pop"
              className="card flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:p-7 sm:text-left"
            >
              <span
                className={`inline-flex size-14 shrink-0 items-center justify-center rounded-[1.1rem] ${tints[i % 4]} text-navy`}
                style={{ rotate: `${(i % 3) * 4 - 4}deg` }}
              >
                <Icon name={a.icon} className="size-7" />
              </span>
              <span className="font-display text-lg leading-tight font-semibold sm:text-xl">{a.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
