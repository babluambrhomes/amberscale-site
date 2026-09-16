"use client";

import { useRef, type ReactNode, type Ref } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";

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
  const reduceMotion = Boolean(useReducedMotion());
  const rotateX = useSpring(0, { stiffness: 150, damping: 15 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (reduceMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(-py * maxRotate * 2);
    rotateY.set(px * maxRotate * 2);
    y.set(-lift);
  };

  const onMouseLeave = () => {
    if (reduceMotion) return;
    rotateX.set(0);
    rotateY.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref as Ref<HTMLDivElement>}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{
        rotateX,
        rotateY,
        y,
        transformPerspective: 800,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  );
}