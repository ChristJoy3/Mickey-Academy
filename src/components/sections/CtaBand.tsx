import Icon from "../Icon";
import { Blob, Squiggle, Star } from "../Decor";

export default function CtaBand() {
  return (
    <section aria-labelledby="cta-title" className="px-4 py-10 sm:px-6 lg:px-8">
      <div
        className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-sun px-6 py-16 text-center sm:px-12 lg:py-24"
        data-reveal="pop"
      >
        <Blob color="var(--color-coral)" className="absolute -top-28 -left-24 -z-10 w-72" variant={0} />
        <Blob color="var(--color-sky)" className="absolute -right-20 -bottom-32 -z-10 w-80" variant={2} />
        <Star className="absolute top-10 right-[18%] w-10" color="var(--color-cream)" />
        <h2 id="cta-title" className="text-4xl font-semibold text-navy sm:text-6xl">
          Come see us in action.
        </h2>
        <Squiggle className="mx-auto mt-4 w-28" color="var(--color-navy)" />
        <p className="mt-4 font-display text-2xl text-navy">Our doors are always open.</p>
        <a href="#contact" className="btn btn-dark wiggle mt-10 px-8 py-4 text-xl">
          Book a Visit <Icon name="arrow" className="size-5" />
        </a>
      </div>
    </section>
  );
}
