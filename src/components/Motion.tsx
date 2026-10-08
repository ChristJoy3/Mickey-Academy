"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setLenis } from "@/lib/lenis";

gsap.registerPlugin(ScrollTrigger);

/**
 * Page-wide motion layer. Sections stay server-rendered and opt in with data
 * attributes; this component wires them up once:
 *   data-reveal="fade|pop"   entrance (pop = scale + back.out on desktop)
 *   data-draw                SVG path drawn on scroll (crayon underlines)
 *   data-hero-letter         hero headline letters
 *   data-parallax="n"        mouse parallax depth; child [data-float] bobs
 *   data-mission-word        words highlighted with scroll
 *   data-rooms / -track      pinned horizontal scroller
 *   data-fan / -card         testimonial cards fanning out
 *   data-wall-item           gallery polaroids settling into place
 */
export default function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // If the boot failsafe already revealed the page (slow script load), don't
    // hide the hero again and replay its intro; just animate what's below.
    const late = !reduce && !root.classList.contains("js-motion");
    (window as unknown as { __maMotion?: boolean }).__maMotion = true;

    let lenis: Lenis | null = null;
    let tick: ((time: number) => void) | null = null;
    if (!reduce) {
      lenis = new Lenis({ autoRaf: false, anchors: { offset: -96 } });
      lenis.on("scroll", ScrollTrigger.update);
      tick = (time) => lenis!.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      setLenis(lenis);
    }

    // Loader: keep it up long enough for the logo wipe to finish, then lift it
    // and start the page intro right after.
    const loader = document.getElementById("loader");
    const minShow = reduce ? 300 : 1150;
    const wait = loader && !late ? Math.max(0, minShow - performance.now()) : 0;
    const introAt = performance.now() + wait + (loader ? 250 : 0);
    const introDelay = () => Math.max(0, (introAt - performance.now()) / 1000);
    let loaderTimer: number | undefined;
    if (loader) {
      lenis?.stop();
      loaderTimer = window.setTimeout(() => {
        loader.classList.add("is-done");
        lenis?.start();
      }, wait);
    }

    const q = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = document) =>
      Array.from(scope.querySelectorAll<T & Element>(sel)) as T[];

    const mm = gsap.matchMedia();

    // Reduced motion: no movement (no bounce, float, pin, or parallax), just
    // gentle opacity fades and the crayon underlines.
    mm.add("(prefers-reduced-motion: reduce)", () => {
      root.classList.remove("js-motion");
      gsap.set("[data-hero-letter]", { autoAlpha: 1 });
      const items = q("[data-reveal]").filter((el) => el.getBoundingClientRect().top > window.innerHeight);
      gsap.set(items, { autoAlpha: 0 });
      ScrollTrigger.batch(items, {
        start: "top 92%",
        once: true,
        onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, duration: 0.6, ease: "none", stagger: 0.05 }),
      });
      q<SVGPathElement>("[data-draw]").forEach((path) => {
        const len = path.getTotalLength();
        gsap.fromTo(
          path,
          { strokeDasharray: len, strokeDashoffset: len },
          {
            strokeDashoffset: 0,
            duration: 0.8,
            ease: "none",
            scrollTrigger: { trigger: path.closest("span") ?? path, start: "top 90%", once: true },
          },
        );
      });
    });

    mm.add(
      {
        desktop: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        mobile: "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        wide: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      },
      (ctx) => {
        const { desktop, mobile, wide } = ctx.conditions as Record<string, boolean>;
        if (!desktop && !mobile) return;
        const cleanups: (() => void)[] = [];

        // --- Entrances -------------------------------------------------------
        // When late, leave whatever is already on screen alone (no flicker).
        const offscreen = (el: HTMLElement) => !late || el.getBoundingClientRect().top > window.innerHeight;
        if (late) gsap.set(q("[data-reveal]").filter((el) => !offscreen(el)), { autoAlpha: 1 });
        const pops = desktop ? q("[data-reveal='pop']").filter(offscreen) : [];
        const fades = (desktop ? q("[data-reveal='fade']") : q("[data-reveal]")).filter(offscreen);

        gsap.set(fades, { autoAlpha: 0, y: 32 });
        ScrollTrigger.batch(fades, {
          start: "top 90%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.08,
              delay: introDelay(),
            }),
        });

        if (pops.length) {
          gsap.set(pops, { autoAlpha: 0, scale: 0.82, y: 40 });
          ScrollTrigger.batch(pops, {
            start: "top 88%",
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                autoAlpha: 1,
                scale: 1,
                y: 0,
                duration: 0.75,
                ease: "back.out(1.7)",
                stagger: 0.1,
                delay: introDelay(),
              }),
          });
        }

        // --- Crayon underlines --------------------------------------------
        q<SVGPathElement>("[data-draw]").forEach((path) => {
          const len = path.getTotalLength();
          gsap.fromTo(
            path,
            { strokeDasharray: len, strokeDashoffset: len },
            {
              strokeDashoffset: 0,
              duration: 1.1,
              ease: "power2.inOut",
              scrollTrigger: { trigger: path.closest("span") ?? path, start: "top 85%", once: true },
            },
          );
        });

        // --- Hero ------------------------------------------------------------
        const letters = q("[data-hero-letter]");
        if (late) {
          gsap.set(letters, { autoAlpha: 1 });
        } else if (desktop) {
          gsap.fromTo(
            letters,
            { autoAlpha: 0, y: 60, rotation: () => gsap.utils.random(-14, 14), scale: 0.6 },
            {
              autoAlpha: 1,
              y: 0,
              rotation: 0,
              scale: 1,
              duration: 0.9,
              ease: "back.out(2.2)",
              stagger: 0.022,
              delay: introDelay() + 0.1,
            },
          );
        } else {
          gsap.fromTo(letters, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6, stagger: 0.008, delay: introDelay() });
        }

        if (desktop) {
          q("[data-float]").forEach((el, i) => {
            gsap.to(el, {
              y: i % 2 ? 22 : -22,
              x: i % 3 ? 10 : -12,
              rotation: i % 2 ? 8 : -8,
              duration: gsap.utils.random(5, 8),
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
            });
          });

          const layers = q("[data-parallax]").map((el) => ({
            depth: Number(el.dataset.parallax) || 1,
            x: gsap.quickTo(el, "x", { duration: 1.2, ease: "power3.out" }),
            y: gsap.quickTo(el, "y", { duration: 1.2, ease: "power3.out" }),
          }));
          const onMove = (e: PointerEvent) => {
            const dx = e.clientX / window.innerWidth - 0.5;
            const dy = e.clientY / window.innerHeight - 0.5;
            layers.forEach((l) => {
              l.x(dx * 40 * l.depth);
              l.y(dy * 40 * l.depth);
            });
          };
          window.addEventListener("pointermove", onMove);
          cleanups.push(() => window.removeEventListener("pointermove", onMove));
        }

        // --- Mission highlight ----------------------------------------------
        const words = q("[data-mission-word]");
        if (words.length) {
          gsap.fromTo(
            words,
            { opacity: 0.18 },
            {
              opacity: 1,
              ease: "none",
              stagger: 0.1,
              scrollTrigger: {
                trigger: words[0].parentElement,
                start: "top 80%",
                end: "bottom 45%",
                scrub: true,
              },
            },
          );
        }

        // --- Rooms: pinned horizontal scroll ---------------------------------
        const rooms = document.querySelector<HTMLElement>("[data-rooms]");
        const track = document.querySelector<HTMLElement>("[data-rooms-track]");
        if (desktop && rooms && track) {
          rooms.classList.add("is-pinned");
          const distance = () => Math.max(0, track.scrollWidth - track.clientWidth);
          gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: rooms,
              start: "top top",
              end: () => "+=" + distance(),
              pin: true,
              scrub: 0.8,
              invalidateOnRefresh: true,
            },
          });
          cleanups.push(() => rooms.classList.remove("is-pinned"));
        }

        // --- Testimonials fan out (wide screens only) ------------------------
        const fan = document.querySelector<HTMLElement>("[data-fan]");
        if (wide && fan) {
          const cards = q("[data-fan-card]", fan);
          const rots = [-7, 3, 9];
          const offset = (el: HTMLElement) => {
            const c = fan.getBoundingClientRect();
            const r = el.getBoundingClientRect();
            return c.left + c.width / 2 - (r.left + r.width / 2);
          };
          gsap.fromTo(
            cards,
            {
              x: (i: number, el: HTMLElement) => offset(el) + (i - 1) * 14,
              y: (i: number) => i * 10,
              rotation: (i: number) => rots[i] ?? 0,
            },
            {
              x: 0,
              y: 0,
              rotation: (i: number) => (i - 1) * 2.5,
              ease: "power2.out",
              stagger: 0.04,
              scrollTrigger: {
                trigger: fan,
                start: "top 85%",
                end: "center 55%",
                scrub: 0.6,
                invalidateOnRefresh: true,
              },
            },
          );
        }

        // --- Gallery polaroids settle ---------------------------------------
        const wall = q("[data-wall-item]");
        if (desktop && wall.length) {
          gsap.fromTo(
            wall,
            {
              autoAlpha: 0,
              y: () => gsap.utils.random(-160, -80),
              x: () => gsap.utils.random(-60, 60),
              rotation: () => gsap.utils.random(-25, 25),
              scale: 1.12,
            },
            {
              autoAlpha: 1,
              y: 0,
              x: 0,
              rotation: 0,
              scale: 1,
              duration: 1,
              ease: "back.out(1.3)",
              stagger: { each: 0.08, from: "random" },
              scrollTrigger: { trigger: wall[0].parentElement, start: "top 75%", once: true },
            },
          );
        }

        return () => cleanups.forEach((fn) => fn());
      },
    );

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    // Keep trigger positions right when content height changes (images,
    // curriculum tabs, FAQ answers).
    let lastHeight = document.body.scrollHeight;
    let timer: number | undefined;
    const ro = new ResizeObserver(() => {
      const h = document.body.scrollHeight;
      if (Math.abs(h - lastHeight) < 2) return;
      lastHeight = h;
      window.clearTimeout(timer);
      timer = window.setTimeout(refresh, 200);
    });
    ro.observe(document.body);

    return () => {
      window.removeEventListener("load", refresh);
      window.clearTimeout(loaderTimer);
      ro.disconnect();
      window.clearTimeout(timer);
      mm.revert();
      if (tick) gsap.ticker.remove(tick);
      lenis?.destroy();
      setLenis(null);
    };
  }, []);

  return null;
}
