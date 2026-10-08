"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Icon from "../Icon";
import SectionHeading from "../SectionHeading";
import { gallery } from "@/content/site";
import { startScroll, stopScroll } from "@/lib/lenis";

// Preset scatter: rotation (deg) and vertical nudge (rem) per tile.
const scatter = [
  [-6, 0],
  [4, 2],
  [-3, -1],
  [7, 1.5],
  [-5, 0.5],
  [3, -1.5],
  [-7, 1],
  [5, 0],
  [-2, 2],
  [6, -0.5],
];

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);
  const lastTrigger = useRef<number>(0);

  const open = (i: number) => {
    lastTrigger.current = i;
    setIndex(i);
  };
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: number) => setIndex((i) => (i === null ? i : (i + dir + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (index !== null && !d.open) {
      d.showModal();
      d.querySelector<HTMLButtonElement>("[data-close]")?.focus();
      stopScroll();
    } else if (index === null && d.open) {
      d.close();
    }
  }, [index]);

  const onClose = () => {
    setIndex(null);
    startScroll();
    triggers.current[lastTrigger.current]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  };

  const photo = index !== null ? gallery[index] : null;

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="gallery-title"
          eyebrow="Gallery"
          title="Life at Mickey Academy."
          intro="Tap any photo to take a closer look."
        />

        <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-y-10">
          {gallery.map((p, i) => (
            <li
              key={p.src}
              data-wall-item
              style={{ translate: `0 ${scatter[i][1]}rem` }}
              className="flex justify-center"
            >
              <button
                type="button"
                ref={(el) => {
                  triggers.current[i] = el;
                }}
                onClick={() => open(i)}
                aria-label={`View larger: ${p.alt}`}
                className="polaroid group w-full cursor-zoom-in pb-8 transition-[rotate,scale,box-shadow] duration-300 rotate-(--r) hover:z-10 hover:scale-105 hover:rotate-0 focus-visible:rotate-0"
                style={{ "--r": `${scatter[i][0]}deg` } as React.CSSProperties}
              >
                <Image
                  src={p.src}
                  alt=""
                  width={p.width}
                  height={p.height}
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 30vw, 45vw"
                  className="aspect-square w-full rounded-md object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialog}
        onClose={onClose}
        onCancel={close}
        onKeyDown={onKeyDown}
        onClick={(e) => {
          if (e.target === dialog.current) close();
        }}
        aria-label="Photo viewer"
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-navy/85 backdrop:backdrop-blur-sm"
        data-lenis-prevent
      >
        {photo && (
          <figure className="relative flex w-[min(92vw,1100px)] flex-col items-center gap-4 p-2">
            <div className="polaroid w-full pb-3">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="92vw"
                className="max-h-[75svh] w-full rounded-lg object-contain"
              />
            </div>
            <figcaption className="max-w-2xl text-center text-cream">
              {photo.alt} <span className="text-cream/70">({(index ?? 0) + 1} / {gallery.length})</span>
            </figcaption>
            <div className="flex gap-3">
              <button type="button" onClick={() => step(-1)} className="btn btn-secondary bg-white px-4" aria-label="Previous photo">
                <Icon name="arrow" className="size-5 rotate-180" />
              </button>
              <button type="button" onClick={close} className="btn btn-primary px-5" data-close>
                <Icon name="close" className="size-5" /> Close
              </button>
              <button type="button" onClick={() => step(1)} className="btn btn-secondary bg-white px-4" aria-label="Next photo">
                <Icon name="arrow" className="size-5" />
              </button>
            </div>
          </figure>
        )}
      </dialog>
    </section>
  );
}
