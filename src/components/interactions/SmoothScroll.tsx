"use client";

import { useEffect } from "react";
import { initLenis, registerGsap } from "@/lib/gsap";

export default function SmoothScroll() {
  useEffect(() => {
    registerGsap();
    const { lenis, cleanup } = initLenis();

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor || !lenis) return;
      const id = anchor.getAttribute("href")?.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -96, duration: 1.2 });
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      cleanup();
    };
  }, []);

  return null;
}