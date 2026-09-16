"use client";

import { useLayoutEffect, useRef, type ReactNode, type Ref } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
  once?: boolean;
};

export default function StaggerReveal({
  children,
  className,
  stagger = 0.08,
  y = 36,
  once = true,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = Boolean(useReducedMotion());
  const inView = useInView(ref, { once, margin: "-15% 0px" });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion) return;
    const targets = Array.from(el.children) as HTMLElement[];
    targets.forEach((t) => {
      t.style.opacity = "0";
      t.style.transform = `translateY(${y}px)`;
    });
  }, [y, reduceMotion]);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !inView || reduceMotion) return;
    const targets = Array.from(el.children) as HTMLElement[];
    const animations = targets.map((t, i) =>
      animate(
        t,
        { opacity: 1, y: 0 },
        { duration: 0.75, delay: i * stagger, ease: [0.16, 1, 0.3, 1] }
      )
    );
    return () => animations.forEach((a) => a.stop());
  }, [inView, stagger, y, reduceMotion]);

  return (
    <div ref={ref as Ref<HTMLDivElement>} className={className}>
      {children}
    </div>
  );
}