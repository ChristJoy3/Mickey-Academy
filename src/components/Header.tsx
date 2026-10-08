"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import { contact, nav, tel } from "@/content/site";
import { startScroll, stopScroll } from "@/lib/lenis";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    stopScroll();
    const drawer = drawerRef.current!;
    drawer.querySelector<HTMLElement>("a, button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab") {
        const items = Array.from(drawer.querySelectorAll<HTMLElement>("a, button"));
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      startScroll();
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled ? "bg-cream/80 shadow-[0_8px_30px_-18px_rgb(30_42_74/0.35)] backdrop-blur-xl" : "bg-cream/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-[84rem] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="rounded-xl" aria-label="Mickey Academy, back to top">
          <Logo preload />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3.5 py-2 font-display text-[1.05rem] font-medium text-navy transition-colors hover:bg-sun-tint"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn btn-primary wiggle hidden px-5 py-2.5 sm:inline-flex">
            Book a Visit
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border-2 border-navy bg-white text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={drawerRef}
        hidden={!open}
        className="border-t border-navy/10 bg-cream px-4 pt-2 pb-6 lg:hidden"
        data-lenis-prevent
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-3 py-3 font-display text-2xl font-medium text-navy hover:bg-sun-tint"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-4 flex flex-col gap-3">
          <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary">
            Book a Visit
          </a>
          <a href={tel(contact.phones[0])} className="btn btn-secondary">
            <Icon name="phone" className="size-5" /> Call {contact.phones[0]}
          </a>
        </div>
      </div>
    </header>
  );
}
