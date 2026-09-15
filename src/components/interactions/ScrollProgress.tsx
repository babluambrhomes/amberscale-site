"use client";

import { useLayoutEffect, useRef, type Ref } from "react";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import { useEffect } from "react";

type ScrollProgressProps = {
  className?: string;
};

export default function ScrollProgress({ className }: ScrollProgressProps) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
  }, []);

  useLayoutEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bar,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: document.documentElement,
            start: 0,
            end: "max",
            scrub: 0.3,
          },
        }
      );
    }, bar);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className={className} aria-hidden>
      <div ref={barRef as Ref<HTMLDivElement>} className="h-full w-full bg-gradient-to-r from-accent to-cyan" />
    </div>
  );
}