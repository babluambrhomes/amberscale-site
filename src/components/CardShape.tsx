"use client";

const SHAPES = [
  "circle",
  "square",
  "triangle",
  "cross",
  "ring",
  "plus",
] as const;

function pickShape(index: number) {
  return SHAPES[index % SHAPES.length];
}

type CardShapeProps = {
  seed?: number;
  className?: string;
};

export default function CardShape({
  seed = 0,
  className = "text-accent/10",
}: CardShapeProps) {
  const shape = pickShape(seed);
  const common = "pointer-events-none absolute select-none";

  return (
    <span aria-hidden className={`${common} ${className}`}>
      {shape === "circle" && (
        <svg viewBox="0 0 100 100" className="h-40 w-40 fill-current">
          <circle cx="50" cy="50" r="48" />
        </svg>
      )}
      {shape === "square" && (
        <svg viewBox="0 0 100 100" className="h-36 w-36 fill-current">
          <rect x="10" y="10" width="80" height="80" transform="rotate(12 50 50)" />
        </svg>
      )}
      {shape === "triangle" && (
        <svg viewBox="0 0 100 100" className="h-36 w-36 fill-current">
          <path d="M50 12 88 88H12Z" />
        </svg>
      )}
      {shape === "cross" && (
        <svg viewBox="0 0 100 100" className="h-32 w-32 fill-current">
          <path d="M38 0h24v38h38v24H62v38H38V62H0V38h38Z" />
        </svg>
      )}
      {shape === "ring" && (
        <svg viewBox="0 0 100 100" className="h-40 w-40 fill-current">
          <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="16" />
        </svg>
      )}
      {shape === "plus" && (
        <svg viewBox="0 0 100 100" className="h-40 w-40 fill-current">
          <path d="M42 0h16v42h42v16H58v42H42V58H0V42h42Z" />
        </svg>
      )}
    </span>
  );
}