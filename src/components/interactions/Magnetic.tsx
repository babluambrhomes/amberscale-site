"use client";

import { useRef, type ReactNode, type Ref } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type MagneticProps = {
  children: ReactNode;
  strength?: number;
  className?: string;
  disabled?: boolean;
};

export default function Magnetic({
  children,
  strength = 0.3,
  className,
  disabled = false,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    if (disabled || prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, {
      x: relX * strength,
      y: relY * strength,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const onMouseLeave = () => {
    if (disabled || prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <div
      ref={ref as Ref<HTMLDivElement>}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      {children}
    </div>
  );
}