"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Reveal from "./Reveal";

type Stat = { value: string; label: string };

type StatsGridProps = {
  items: Stat[];
  className?: string;
};

function parseValue(raw: string) {
  const match = raw.match(/^(\d+)(.*)/);
  if (!match) return { target: 0, suffix: raw };
  return { target: parseInt(match[1], 10), suffix: match[2] };
}

function CountUp({ value, duration = 1.6 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { target, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setDisplay(current);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="bg-gradient-to-r from-accent to-cyan bg-clip-text text-3xl font-black text-transparent sm:text-4xl">
      {display}{suffix}
    </span>
  );
}

export default function StatsGrid({ items, className }: StatsGridProps) {
  return (
    <div
      className={`grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-4 max-w-7xl ${className ?? ""}`}
    >
      {items.map((s, i) => (
        <Reveal
          key={i}
          delay={i * 0.07}
          className="bg-background px-6 py-12 text-center"
        >
          <CountUp value={s.value} />
          <span className="mt-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {s.label}
          </span>
        </Reveal>
      ))}
    </div>
  );
}
