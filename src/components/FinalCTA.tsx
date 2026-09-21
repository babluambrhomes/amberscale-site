"use client";

import Link from "next/link";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/interactions/Magnetic";

export default function FinalCTA({
  heading = "Have a problem",
  highlightPrefix,
  highlight = "worth solving?",
  description = "If you are building something meaningful, working on a difficult problem or see an opportunity worth exploring, we would like to hear it.",
  buttonText = "Start a conversation",
  href = "/contact",
  secondaryText = "Meet AmbrScale",
  secondaryHref = "/about",
}: {
  heading?: string;
  highlightPrefix?: string;
  highlight?: string;
  description?: string;
  buttonText?: string;
  href?: string;
  secondaryText?: string;
  secondaryHref?: string;
} = {}) {
  return (
    <section id="contact-cta" className="relative overflow-hidden border-t border-line">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden">
            <div className="relative grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <span className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent">07</span>
                  <span className="h-px w-10 bg-accent" />
                  <span className="font-hand text-xl text-accent -rotate-1">
                    Let&apos;s Build Together
                  </span>
                </span>

                <h2 className="mt-6 text-3xl font-black leading-[1.04] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  {heading}
                  <br />
                  {highlightPrefix && (
                    <span className="text-accent">{highlightPrefix} </span>
                  )}
                  <span className="hand-underline inline-block text-accent">
                    {highlight}
                  </span>
                </h2>
              </div>

              <div className="lg:pb-2">
                <p className="max-w-md text-base leading-relaxed text-muted">
                  {description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <Magnetic>
                    <Link
                      href={href}
                      className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-base font-bold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30"
                    >
                      {buttonText}
                      <FiArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                    </Link>
                  </Magnetic>

                  {secondaryText && secondaryHref && (
                    <Link
                      href={secondaryHref}
                      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-foreground"
                    >
                      {secondaryText}
                      <FiArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>

                <div className="mt-4 flex items-center gap-2 font-hand text-base sm:text-lg text-accent -rotate-1">
                  <span>✦ direct conversation, zero sales fluff</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}