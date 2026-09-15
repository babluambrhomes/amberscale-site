"use client";

import { useRef, type ReactNode, type Ref } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type TiltCardProps = {
  children: ReactNode;
  maxRotate?: number;
  lift?: number;
  className?: string;
};

export default function TiltCard({
  children,
  maxRotate = 5,
  lift = 8,
  className,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(el, {
      rotateY: px * maxRotate * 2,
      rotateX: -py * maxRotate * 2,
      y: -lift,
      transformPerspective: 800,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const onMouseLeave = () => {
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <div
      ref={ref as Ref<HTMLDivElement>}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {children}
    </div>
  );
}