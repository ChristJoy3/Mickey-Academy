"use client";

import { useState } from "react";
import Icon from "../Icon";
import SectionHeading from "../SectionHeading";
import { faq } from "@/content/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq-title" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          id="faq-title"
          eyebrow="FAQ"
          title="Questions parents ask."
          intro={
            <>
              Can&apos;t find your answer? Call us at{" "}
              <a href="tel:+19732490707" className="font-semibold text-coral-ink underline underline-offset-4">
                (973) 249-0707
              </a>
              .
            </>
          }
        />
        <ul className="flex flex-col gap-4">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="rounded-[1.75rem] bg-white shadow-[0_10px_30px_-18px_rgb(30_42_74/0.3)]">
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 rounded-[1.75rem] px-6 py-5 text-left font-display text-xl font-semibold sm:text-2xl"
                  >
                    {item.q}
                    <span
                      className={`inline-flex size-10 shrink-0 items-center justify-center rounded-full transition-[rotate,background-color] duration-300 ${
                        isOpen ? "rotate-45 bg-coral" : "bg-sun-tint"
                      }`}
                    >
                      <Icon name="plus" className="size-5" strokeWidth={2.5} />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className={`grid transition-[grid-template-rows,visibility] duration-300 ease-out ${
                    isOpen ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-navy-soft">{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
