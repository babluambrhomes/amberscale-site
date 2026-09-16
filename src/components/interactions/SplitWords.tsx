"use client";

import { motion, useReducedMotion } from "framer-motion";

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
  const reduceMotion = Boolean(useReducedMotion());
  const words = text.split(" ").filter(Boolean);

  return (
    <motion.span
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-12% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={className ? `split-word ${className}` : "split-word"}
          variants={{
            hidden: reduceMotion ? {} : { y, opacity: 0 },
            show: reduceMotion
              ? {}
              : { y: 0, opacity: 1, transition: { duration, ease: [0.16, 1, 0.3, 1] } },
          }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}