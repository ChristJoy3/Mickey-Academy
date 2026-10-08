import Icon from "../Icon";
import Polaroid from "../Polaroid";
import SectionHeading from "../SectionHeading";
import { Blob, CrayonUnderline } from "../Decor";
import { difference, photos } from "@/content/site";

const tints = ["bg-sun-tint", "bg-coral-tint", "bg-sky-tint", "bg-mint-tint"];

export default function Difference() {
  return (
    <section aria-labelledby="difference-title" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-lg" data-reveal="pop">
            <Blob color="var(--color-coral-tint)" className="absolute -inset-10 -z-10 w-[120%]" variant={1} />
            <Polaroid photo={photos.toddlers} rotate={-3} />
          </div>
          <div className="flex flex-col gap-6">
            <SectionHeading
              id="difference-title"
              eyebrow="About us"
              title={
                <>
                  The Mickey Academy <CrayonUnderline color="var(--color-coral)">difference</CrayonUnderline>
                </>
              }
              intro={difference.intro}
            />
          </div>
        </div>

        <ul className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {difference.cards.map((c, i) => (
            <li key={c.title} className="card flex flex-col gap-4" data-reveal="pop">
              <span className={`inline-flex size-14 items-center justify-center rounded-2xl ${tints[i]} text-navy`}>
                <Icon name={c.icon} className="size-7" />
              </span>
              <h3 className="text-2xl font-semibold">{c.title}</h3>
              <p className="text-base text-navy-soft">{c.body}</p>
            </li>
          ))}
        </ul>

        <p
          className="mx-auto mt-16 max-w-3xl text-center font-display text-2xl font-medium text-navy sm:text-3xl"
          data-reveal="fade"
        >
          “{difference.closing}”
        </p>
      </div>
    </section>
  );
}
