import Icon from "../Icon";
import Polaroid from "../Polaroid";
import { Blob, CrayonUnderline, Star } from "../Decor";
import { photos, teachers } from "@/content/site";

export default function Teachers() {
  return (
    <section aria-labelledby="teachers-title" className="relative overflow-hidden bg-navy px-4 py-20 text-cream sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="flex flex-col gap-6" data-reveal="fade">
          <p className="eyebrow text-sun">Our teachers</p>
          <h2 id="teachers-title" className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Teachers who <CrayonUnderline color="var(--color-coral)">love</CrayonUnderline> what they do.
          </h2>
          <p className="text-lg text-cream/90 sm:text-xl">{teachers.body}</p>
          <ul className="flex flex-wrap gap-3">
            {["CPR & First Aid trained", "Rigorously screened", "Nurturing personalities"].map((t) => (
              <li key={t} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-semibold">
                <Icon name="check" className="size-5 text-sun" /> {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-lg">
          <Blob color="var(--color-sun)" className="absolute -top-10 -left-10 w-[115%]" variant={2} />
          <div data-reveal="pop">
            <Polaroid photo={photos.costumes} rotate={3} />
          </div>
          <Star className="absolute -top-6 -left-4 w-12" />
        </div>
      </div>
    </section>
  );
}
