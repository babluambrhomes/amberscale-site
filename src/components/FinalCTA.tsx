import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "@/components/Reveal";

export default function FinalCTA({
  heading = "Got an idea?",
  highlight = "Let's scale it.",
  description = "Tell us where you want to go. We'll figure out how to get you there faster than you thought possible.",
  buttonText = "Start the conversation",
  href = "/contact",
}: {
  heading?: string;
  highlight?: string;
  description?: string;
  buttonText?: string;
  href?: string;
} = {}) {
  return (
    <section id="contact-cta" className="relative overflow-hidden border-t border-line">
      <div className="relative bg-accent px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden
        />

        <span
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[18vw] font-black leading-none text-background/10 whitespace-nowrap"
          aria-hidden
        >
          SCALE
        </span>

        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="text-4xl font-black leading-[0.95] tracking-tighter text-background sm:text-6xl lg:text-7xl">
              {heading}
              <br />
              <span className="text-background/50">{highlight}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-background/60 sm:text-lg">
              {description}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <Link
              href={href}
              className="group mt-11 inline-flex items-center gap-2 rounded-full border-2 border-background/20 bg-background px-8 py-3.5 text-sm font-semibold text-accent transition-all hover:border-background/40 hover:bg-foreground"
            >
              {buttonText}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20">
                <FiArrowUpRight />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}