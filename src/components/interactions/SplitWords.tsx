"use client";

import {
  useLayoutEffect,
  useRef,
  type RefObject,
} from "react";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import { useEffect } from "react";

type SplitWordsProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  y?: number;
  once?: boolean;
};

export default function SplitWords({
  text,
  className,
  delay = 0,
  stagger = 0.035,
  duration = 0.8,
  y = 28,
  once = true,
}: SplitWordsProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const words = text.split(" ").filter(Boolean);

  useEffect(() => {
    registerGsap();
  }, []);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    const targets = el.querySelectorAll<HTMLElement>(".gsap-reveal-word");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          ease: "power3.out",
          delay,
          stagger,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once,
          },
        }
      );
    }, el);

    return () => {
      ctx.revert();
    };
  }, [text, delay, stagger, duration, y, once]);

  return (
    <span ref={ref as RefObject<HTMLSpanElement>}>
      {words.map((word, i) => (
        <span
          key={i}
          className={className ? `gsap-reveal-word ${className}` : "gsap-reveal-word"}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}