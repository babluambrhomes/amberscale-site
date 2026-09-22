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
  if (!match) return { target: 0, suffix: raw, isTextOnly: true, padZero: false };
  const padZero = raw.startsWith("0") && match[1].length > 1;
  return { target: parseInt(match[1], 10), suffix: match[2], isTextOnly: false, padZero };
}

function CountUp({ value, duration = 1.6, className = "" }: { value: string; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { target, suffix, isTextOnly, padZero } = parseValue(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || isTextOnly) return;
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
  }, [inView, target, duration, isTextOnly]);

  return (
    <span
      ref={ref}
      className={`text-3xl font-black tracking-tight sm:text-4xl ${className}`}
    >
      {isTextOnly ? value : `${padZero ? String(display).padStart(2, "0") : display}${suffix}`}
    </span>
  );
}

export default function StatsGrid({ items, className }: StatsGridProps) {
  return (
    <div
      className={`relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem]  bg-gradient-to-b from-surface to-surface-2/60 shadow-[0_1px_2px_rgba(15,17,23,0.05)] ${className ?? ""}`}
    >
      <div className="grid grid-cols-2 divide-x divide-y divide-line/70 sm:grid-cols-4 sm:divide-y-0">
        {items.map((s, i) => (
          <Reveal
            key={i}
            delay={i * 0.07}
            className="px-6 py-10 text-center transition-colors duration-300 hover:bg-accent/[0.04] sm:py-12"
          >
            <CountUp value={s.value} className="text-logo-gradient" />
            <span className="mt-2.5 block text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
              {s.label}
            </span>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
