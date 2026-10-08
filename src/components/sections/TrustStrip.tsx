import Icon from "../Icon";
import { trust } from "@/content/site";

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {trust.map((item) => (
        <li key={item} className="flex items-center gap-4 px-5 font-display text-xl font-medium whitespace-nowrap sm:text-2xl">
          <Icon name="star" className="size-5 fill-sun text-sun" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function TrustStrip() {
  return (
    <section aria-label="Why families trust us" className="overflow-hidden py-6">
      <div className="relative -left-[5%] flex w-[110%] -rotate-1 overflow-hidden bg-navy py-5 text-cream">
        <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
