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
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden">
           

            <div className="relative grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <span className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent">05</span>
                  <span className="h-px w-10 bg-accent" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted">
                    Contact
                  </span>
                </span>

                <h2 className="mt-8 text-5xl font-black leading-[0.92] tracking-tighter text-foreground sm:text-5xl lg:text-7xl">
                  {heading}
                  <br />
                  <span className="bg-gradient-to-r from-accent to-cyan bg-clip-text text-transparent">
                    {highlight}
                  </span>
                </h2>
              </div>

              <div className="lg:pb-2">
                <p className="max-w-sm text-base leading-relaxed text-muted">
                  {description}
                </p>

                <Link
                  href={href}
                  className="group mt-8 inline-flex items-center gap-3  pb-2 text-base font-semibold text-foreground transition-colors hover:text-accent"
                >
                  {buttonText}
                  <FiArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}