import Icon from "../Icon";
import SectionHeading from "../SectionHeading";
import { Blob, Star } from "../Decor";
import { rooms } from "@/content/site";

const tint: Record<string, { bg: string; blob: string; ink: string }> = {
  coral: { bg: "bg-coral-tint", blob: "var(--color-coral)", ink: "text-coral-ink" },
  sky: { bg: "bg-sky-tint", blob: "var(--color-sky)", ink: "text-sky-ink" },
  mint: { bg: "bg-mint-tint", blob: "var(--color-mint)", ink: "text-mint-ink" },
  sun: { bg: "bg-sun-tint", blob: "var(--color-sun)", ink: "text-coral-ink" },
};

export default function Rooms() {
  return (
    <section
      id="rooms"
      aria-labelledby="rooms-title"
      data-rooms
      className="relative overflow-hidden bg-white py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="rooms-title"
          eyebrow="Our rooms"
          title="A room for every age and stage."
          intro="Age-specific rooms, from our youngest babies to school-age children."
        />
      </div>

      <div
        data-rooms-viewport
        className="mt-12 snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-6 [scrollbar-width:thin]"
      >
        <ol
          data-rooms-track
          className="flex w-full gap-6 px-4 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
        >
          {rooms.map((room, i) => {
            const t = tint[room.tint];
            return (
              <li
                key={room.name}
                className={`relative flex min-h-[20rem] w-[82vw] max-w-[26rem] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-[var(--radius-card)] p-8 sm:w-[24rem] ${t.bg}`}
              >
                <Blob color={t.blob} variant={i} className="absolute -right-16 -bottom-16 w-56 opacity-40" />
                <div className="relative flex items-start justify-between">
                  <span className="inline-flex size-16 items-center justify-center rounded-2xl bg-white text-navy shadow-sm">
                    <Icon name={room.icon} className="size-8" />
                  </span>
                  <span className={`font-display text-5xl font-bold ${t.ink}`} aria-hidden="true">
                    0{i + 1}
                  </span>
                </div>
                <div className="relative">
                  <h3 className="text-3xl font-semibold">{room.name}</h3>
                  <p className="mt-3 text-navy-soft">{room.detail}</p>
                </div>
              </li>
            );
          })}
          <li aria-hidden="true" className="flex w-40 shrink-0 items-center justify-center">
            <Star className="w-16" />
          </li>
        </ol>
      </div>
    </section>
  );
}
