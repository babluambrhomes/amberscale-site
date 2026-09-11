"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

const highlightClass =
  "bg-gradient-to-r from-accent to-cyan bg-clip-text text-transparent";

type WordProps = {
  progress: MotionValue<number>;
  range: [number, number];
  opacityStart: number;
  highlight: boolean;
  children: ReactNode;
};

function Word({ progress, range, opacityStart, highlight, children }: WordProps) {
  const opacity = useTransform(progress, range, [opacityStart, 1]);
  return (
    <motion.span
      className={highlight ? highlightClass : undefined}
      style={{ opacity }}
    >
      {children}
    </motion.span>
  );
}

type ScrollTextProps = {
  text: string;
  className?: string;
  opacityStart?: number;
  highlight?: boolean;
};

export default function ScrollText({
  text,
  className,
  opacityStart = 0.2,
  highlight = false,
}: ScrollTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "center 0.5"],
  });

  return (
    <motion.span ref={ref} className={className}>
      {words.map((word, i) => (
        <Word
          key={i}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
          opacityStart={opacityStart}
          highlight={highlight}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </Word>
      ))}
    </motion.span>
  );
}