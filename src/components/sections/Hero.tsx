import Image from "next/image";
import Icon from "../Icon";
import Polaroid from "../Polaroid";
import { Blob, Loop, Squiggle, Star } from "../Decor";
import { contact, photos, tel } from "@/content/site";

const headline = "A haven where your child grows, every single day.";

/** Splits the headline into per-letter spans, keeping words unbreakable. */
function Letters({ text }: { text: string }) {
  return (
    <span aria-hidden="true">
      {text.split(" ").map((word, w, words) => (
        <span key={w} className="inline-block whitespace-nowrap">
          {Array.from(word).map((ch, i) => (
            <span key={i} data-hero-letter className="inline-block">
              {ch}
            </span>
          ))}
          {w < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      {/* Floating background shapes (mouse parallax on desktop) */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div data-parallax="1.2" className="absolute -top-24 -left-24 w-[26rem] opacity-70">
          <div data-float>
            <Blob color="var(--color-sun-tint)" variant={0} className="w-full" />
          </div>
        </div>
        <div data-parallax="-0.8" className="absolute top-1/3 -right-32 w-[30rem] opacity-80">
          <div data-float>
            <Blob color="var(--color-sky-tint)" variant={1} className="w-full" />
          </div>
        </div>
        <div data-parallax="1.6" className="absolute bottom-[-6rem] left-1/3 w-72 opacity-80">
          <div data-float>
            <Blob color="var(--color-mint-tint)" variant={2} className="w-full" />
          </div>
        </div>
        <div data-parallax="2.2" className="absolute top-24 left-[46%] hidden w-10 lg:block">
          <div data-float>
            <Star className="w-full" />
          </div>
        </div>
        <div data-parallax="-1.6" className="absolute bottom-24 left-8 w-8">
          <div data-float>
            <Star color="var(--color-coral)" className="w-full" />
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pt-12 pb-20 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-8 lg:pt-20 lg:pb-28">
        <div className="flex flex-col items-start gap-7">
          <p className="eyebrow inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-navy shadow-sm" data-reveal="fade">
            <span className="size-2 rounded-full bg-coral" aria-hidden="true" />
            Daycare • Clifton, NJ • Ages 2 weeks to 5 years
          </p>

          <h1
            id="hero-title"
            aria-label={headline}
            className="text-[2.6rem] font-semibold text-navy sm:text-6xl lg:text-[4.4rem] lg:leading-[1.04]"
          >
            <Letters text={headline} />
          </h1>

          <Squiggle className="-mt-2 w-32" />

          <p className="max-w-xl text-lg text-navy-soft sm:text-xl" data-reveal="fade">
            Tender care from a qualified, caring staff in a clean, healthy environment, making the move from home
            to daycare as smooth as possible for children and parents.
          </p>

          <div className="flex flex-wrap gap-4" data-reveal="fade">
            <a href="#contact" className="btn btn-primary wiggle">
              Book a Visit <Icon name="arrow" className="size-5" />
            </a>
            <a href={tel(contact.phones[0])} className="btn btn-secondary wiggle">
              <Icon name="phone" className="size-5" /> Call {contact.phones[0]}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl pb-10 lg:max-w-none">
          <div
            className="relative overflow-hidden rounded-[2.5rem] border-[6px] border-white shadow-[0_30px_60px_-25px_rgb(30_42_74/0.45)]"
            data-reveal="pop"
          >
            <Image
              src={photos.front.src}
              alt={photos.front.alt}
              width={photos.front.width}
              height={photos.front.height}
              preload
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -left-4 w-[44%] sm:-left-10" data-reveal="pop">
            <Polaroid photo={photos.circleTime} rotate={-7} preload sizes="(min-width: 1024px) 20vw, 40vw" />
          </div>
          <div className="absolute -top-8 -right-3 w-[38%] sm:-right-8" data-reveal="pop">
            <Polaroid photo={photos.babyRoom} rotate={6} preload sizes="(min-width: 1024px) 18vw, 36vw" />
          </div>
          <Loop className="absolute -right-2 bottom-4 w-24" color="var(--color-coral)" />
        </div>
      </div>
    </section>
  );
}
