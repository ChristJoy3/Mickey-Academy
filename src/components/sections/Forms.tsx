import Icon from "../Icon";
import SectionHeading from "../SectionHeading";
import { forms } from "@/content/site";

const tints = ["bg-coral-tint", "bg-sky-tint", "bg-mint-tint", "bg-sun-tint"];

export default function Forms() {
  return (
    <section id="forms" aria-labelledby="forms-title" className="bg-cream-deep px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="forms-title"
          eyebrow="Parents' forms"
          title="Everything you need to enroll."
          intro="Download the registration packet and our policies below."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {forms.map((f, i) => (
            <li key={f.file} data-reveal="pop">
              <a
                href={f.file}
                download
                className="group card flex h-full items-center gap-4 p-5 transition-transform hover:-translate-y-1"
              >
                <span className={`inline-flex size-14 shrink-0 items-center justify-center rounded-2xl ${tints[i % 4]} text-navy`}>
                  <Icon name="pdf" className="size-7" />
                </span>
                <span className="flex-1">
                  <span className="block font-display text-lg leading-tight font-semibold">{f.title}</span>
                  <span className="text-sm text-navy-soft">PDF</span>
                </span>
                <Icon name="download" className="size-6 text-coral-ink transition-transform group-hover:translate-y-0.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
