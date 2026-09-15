"use client";

import { useLayoutEffect, useRef, type ReactNode, type Ref } from "react";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import { useEffect } from "react";

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

  useEffect(() => {
    registerGsap();
  }, []);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    const targets = el.children;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once,
          },
        }
      );
    }, el);

    return () => {
      ctx.revert();
    };
  }, [stagger, y, once]);

  return (
    <div ref={ref as Ref<HTMLDivElement>} className={className}>
      {children}
    </div>
  );
}