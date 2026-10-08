import type Lenis from "lenis";

// Shared handle so overlays (menu, lightbox) can pause smooth scrolling.
let instance: Lenis | null = null;

export const setLenis = (l: Lenis | null) => {
  instance = l;
};

export const stopScroll = () => instance?.stop();
export const startScroll = () => instance?.start();

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
