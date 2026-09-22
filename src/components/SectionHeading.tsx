"use client";

import Reveal from "./Reveal";
import SplitWords from "@/components/interactions/SplitWords";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  highlightPrefix?: string;
  description?: string;
  align?: "left" | "center";
  size?: "md" | "lg";
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  highlightPrefix,
  description,
  align = "left",
  size = "lg",
}: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <Reveal>
        <div
          className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}
        >
          <span className="h-px w-8 bg-accent" />
          <span className="font-hand text-xl text-muted -rotate-1">{eyebrow}</span>
        </div>
      </Reveal>
      <h2
        className={`mt-4 text-3xl font-bold tracking-tight ${
          size === "lg" ? "sm:text-5xl" : "sm:text-4xl"
        }`}
      >
        <SplitWords text={title} y={20} />
        {(highlight || highlightPrefix) && " "}
        {highlightPrefix && (
          <span className="text-accent">
            <SplitWords text={highlightPrefix} y={20} className="text-[1.15em]" />{" "}
          </span>
        )}
        {highlight && (
          <span className="hand-underline inline-block text-accent">
            <SplitWords text={highlight} y={20} className="text-[1.15em]" />
          </span>
        )}
      </h2>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 leading-relaxed text-muted">{description}</p>
        </Reveal>
      )}
    </div>
  );
}