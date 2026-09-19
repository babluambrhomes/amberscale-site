"use client";

import React from "react";
import { motion } from "framer-motion";

interface HandCircleProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export function HandCircle({
  children,
  className = "",
  color = "#4f46e5",
}: HandCircleProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <svg
        viewBox="0 0 160 55"
        fill="none"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -inset-x-2.5 -inset-y-1.5 h-[calc(100%+12px)] w-[calc(100%+20px)] -rotate-1 select-none"
        aria-hidden="true"
      >
        <path
          d="M 18,28 C 15,10 50,4 90,6 C 130,8 152,18 150,34 C 148,48 115,52 75,51 C 32,50 8,42 12,25 C 14,16 35,9 70,8"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
      </svg>
    </span>
  );
}

interface HandArrowProps {
  label?: string;
  direction?: "down-left" | "down-right" | "top-right" | "curved-down";
  className?: string;
  color?: string;
}

export function HandArrow({
  label,
  direction = "down-left",
  className = "",
  color = "#4f46e5",
}: HandArrowProps) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 font-hand select-none ${className}`}
      style={{ color }}
    >
      {label && <span className="text-base sm:text-lg tracking-wide -rotate-2">{label}</span>}
      <svg
        width="38"
        height="32"
        viewBox="0 0 44 36"
        fill="none"
        className={`inline-block ${
          direction === "down-right"
            ? "scale-x-[-1]"
            : direction === "top-right"
            ? "-rotate-45"
            : direction === "curved-down"
            ? "rotate-12"
            : ""
        }`}
        aria-hidden="true"
      >
        <path
          d="M 6,6 C 18,8 32,16 34,28 M 34,28 L 24,26 M 34,28 L 32,18"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function HandSparkle({
  className = "",
  color = "#4f46e5",
  size = 20,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`inline-block select-none ${className}`}
      aria-hidden="true"
    >
      <path
        d="M12 2 C12 7.5 16.5 12 22 12 C16.5 12 12 16.5 12 22 C12 16.5 7.5 12 2 12 C7.5 12 12 7.5 12 2 Z"
        fill={color}
        opacity="0.9"
      />
    </svg>
  );
}

export function HandBadge({
  text,
  className = "",
  color = "text-accent border-accent/30 bg-accent/10",
  rotation = "-rotate-2",
}: {
  text: string;
  className?: string;
  color?: string;
  rotation?: string;
}) {
  return (
    <span
      className={`hand-radius inline-flex items-center gap-1.5 px-3 py-1 font-hand text-base sm:text-lg font-semibold tracking-wide border shadow-sm backdrop-blur-sm select-none ${rotation} ${color} ${className}`}
    >
      <HandSparkle size={13} color="currentColor" />
      {text}
    </span>
  );
}

export function HandStickyNote({
  title,
  text,
  author,
  className = "",
}: {
  title?: string;
  text: string;
  author?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl border border-line bg-surface/95 p-6 backdrop-blur-md shadow-xl shadow-black/5 ring-1 ring-accent/10 hand-radius -rotate-1 ${className}`}
    >
      {/* Translucent tape strip at top */}
      <div className="absolute -top-3 left-1/2 h-5 w-20 -translate-x-1/2 -rotate-2 rounded-sm bg-surface-2/90 border border-line backdrop-blur-md shadow-sm" />

      {title && (
        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-accent">
          {title}
        </span>
      )}
      <p className="mt-2 font-hand text-lg sm:text-xl leading-relaxed text-foreground font-medium">
        &ldquo;{text}&rdquo;
      </p>
      {author && (
        <p className="mt-3 text-right font-hand text-sm text-muted">
          — {author}
        </p>
      )}
    </div>
  );
}

export function HandStamp({
  text,
  className = "",
  rotation = "rotate-3",
}: {
  text: string;
  className?: string;
  rotation?: string;
}) {
  return (
    <span
      className={`inline-block select-none border-2 border-dashed border-accent/70 px-3 py-1 font-mono text-[10px] font-black uppercase tracking-widest text-accent bg-accent/5 hand-radius ${rotation} ${className}`}
    >
      {text}
    </span>
  );
}
