"use client";

import Reveal from "./Reveal";
import { trustedBy } from "@/lib/site";

function Brand({ brand }: { brand: string }) {
  return (
    <span className="flex shrink-0 items-center gap-6 px-8 text-2xl font-black uppercase tracking-tight text-foreground/25">
      {brand}
      <span
        className="h-1 w-1 shrink-0 rounded-full bg-accent/40"
        aria-hidden
      />
    </span>
  );
}

function Marquee({ reverse = false }: { reverse?: boolean }) {
  // Enough copies to prevent empty space
  const items = [...trustedBy, ...trustedBy, ...trustedBy, ...trustedBy];

  return (
    <div className="marquee-wrapper">
      <div
        className={`marquee-track ${
          reverse ? "marquee-reverse" : "marquee-forward"
        }`}
      >
        <div className="marquee-content">
          {items.map((brand, index) => (
            <Brand key={`a-${index}`} brand={brand} />
          ))}
        </div>

        <div className="marquee-content" aria-hidden="true">
          {items.map((brand, index) => (
            <Brand key={`b-${index}`} brand={brand} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SponsoredMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-surface/40">
     

      <div
        className="flex flex-col gap-5 py-8"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {/* Row 1 */}
        <Marquee />

        <div className="h-2" />

        {/* Row 2 */}
        <Marquee reverse />
      </div>
    </section>
  );
}