import Icon from "../Icon";
import SectionHeading from "../SectionHeading";
import { comparisonRows } from "@/content/site";

export default function Comparison() {
  return (
    <section aria-labelledby="compare-title" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          id="compare-title"
          align="center"
          eyebrow="Why parents choose us"
          title="Everything you'd hope for, in one place."
        />
        <div className="mt-14 overflow-x-auto rounded-[var(--radius-card)] bg-white shadow-[0_20px_50px_-25px_rgb(30_42_74/0.3)]" data-reveal="fade">
          <table className="w-full min-w-[34rem] border-collapse text-left">
            <caption className="sr-only">What Mickey Academy offers, compared with a typical daycare</caption>
            <thead>
              <tr>
                <th scope="col" className="p-5 font-display text-lg font-semibold sm:p-6">
                  <span className="sr-only">Feature</span>
                </th>
                <th scope="col" className="w-40 bg-navy p-5 text-center font-display text-lg font-semibold text-cream sm:w-48 sm:p-6">
                  Mickey Academy
                </th>
                <th scope="col" className="w-40 p-5 text-center font-display text-lg font-semibold text-navy-soft sm:w-48 sm:p-6">
                  Typical daycare
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row} className="border-t border-navy/10">
                  <th scope="row" className="p-5 font-semibold sm:px-6">
                    {row}
                  </th>
                  <td className={`p-4 text-center ${i % 2 ? "bg-navy" : "bg-[#25335a]"}`}>
                    <span className="inline-flex size-9 items-center justify-center rounded-full bg-sun text-navy">
                      <Icon name="check" className="size-5" strokeWidth={3} />
                    </span>
                    <span className="sr-only">Yes</span>
                  </td>
                  <td className="p-4 text-center text-navy-soft">
                    <span aria-hidden="true">—</span>
                    <span className="sr-only">Varies</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
