import SectionHeading from "../SectionHeading";
import { Star } from "../Decor";
import { testimonials } from "@/content/site";

const tints = ["bg-sun-tint", "bg-sky-tint", "bg-coral-tint"];

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="testimonials-title"
          align="center"
          eyebrow="What parents say"
          title="In their own words."
        />
        <ul
          data-fan
          className="-mx-4 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pt-4 pb-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0"
        >
          {testimonials.map((t, i) => (
            <li
              key={t.name}
              data-fan-card
              className={`relative flex w-[85vw] max-w-md shrink-0 snap-center flex-col rounded-[var(--radius-card)] p-8 shadow-[0_20px_40px_-20px_rgb(30_42_74/0.35)] lg:w-auto lg:max-w-none ${tints[i]}`}
              style={{ zIndex: i === 1 ? 3 : 2 - i }}
            >
              <figure className="flex h-full flex-col">
                <span aria-hidden="true" className="font-display text-7xl leading-none text-coral-ink">
                  “
                </span>
                <blockquote className="-mt-4 flex-1 text-base text-navy sm:text-[1.05rem]">
                  <p>{t.quote}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-navy/10 pt-5">
                  <Star className="w-7" color={i === 1 ? "var(--color-coral)" : "var(--color-sun)"} />
                  <span>
                    <span className="block font-display text-xl font-semibold">{t.name}</span>
                    <span className="text-sm text-navy-soft">{t.role.charAt(0).toUpperCase() + t.role.slice(1)}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
