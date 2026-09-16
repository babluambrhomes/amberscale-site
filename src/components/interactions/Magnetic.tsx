"use client";

import { useRef, type ReactNode, type Ref } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";

type MagneticProps = {
  children: ReactNode;
  strength?: number;
  className?: string;
  disabled?: boolean;
};

export default function Magnetic({
  children,
  strength = 0.1,
  className,
  disabled = false,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = Boolean(useReducedMotion());
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (disabled || reduceMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const onMouseLeave = () => {
    if (disabled) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref as Ref<HTMLDivElement>}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
}