"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

let _registered = false;

export function registerGsap() {
  if (_registered) return;
  gsap.registerPlugin(ScrollTrigger, SplitText);
  _registered = true;
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function initLenis(): { lenis: Lenis | null; cleanup: () => void } {
  if (typeof window === "undefined") return { lenis: null, cleanup: () => {} };

  if (prefersReducedMotion()) return { lenis: null, cleanup: () => {} };

  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    wheelMultiplier: 0.95,
    smoothWheel: true,
  });

  lenis.on("scroll", ScrollTrigger.update);

  const raf = (time: number) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);

  const cleanup = () => {
    gsap.ticker.remove(raf);
    lenis.destroy();
  };

  return { lenis, cleanup };
}

export { gsap, ScrollTrigger, SplitText };