import Link from "next/link";
import { FiArrowUpRight, FiHome, FiMail } from "react-icons/fi";
import Reveal from "@/components/Reveal";
import { btnPrimary } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[calc(100vh-20rem)] items-center overflow-hidden py-24 sm:py-32">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-20" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[140px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-10 right-1/4 h-[360px] w-[360px] rounded-full bg-cyan/15 blur-[130px]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="hand-radius inline-flex items-center gap-2 border border-line bg-surface px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            404 · Page not found
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-8 text-[9rem] font-black leading-none tracking-tighter text-foreground/5 select-none sm:text-[16rem]">
            404
          </h1>
        </Reveal>

        <Reveal delay={0.18} className="-mt-6 sm:-mt-16">
          <p className="font-hand text-2xl text-foreground sm:text-4xl">
            This page wandered{" "}
            <span className="hand-underline inline-block text-accent">off the map</span>.
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            The page you're looking for doesn't exist, was moved, or never shipped.
            Let's get you back to something useful.
          </p>
        </Reveal>

        <Reveal delay={0.34}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/" className={btnPrimary}>
              Back to home
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/5 text-foreground transition-all duration-300 group-hover:rotate-45 group-hover:bg-white/20 group-hover:text-white">
                <FiHome />
              </span>
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/[0.04] py-2.5 pl-7 pr-3 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:border-accent-2 hover:bg-accent-2 hover:text-white"
            >
              Contact support
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/5 text-foreground transition-all duration-300 group-hover:rotate-45 group-hover:bg-white/20 group-hover:text-white">
                <FiArrowUpRight />
              </span>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.42}>
          <div className="mt-16 flex items-center justify-center gap-3 text-xs text-muted">
            <span className="h-px w-12 bg-line" />
            <span className="inline-flex items-center gap-1.5">
              <FiMail className="text-accent" />
              hello@ambrscale.com
            </span>
            <span className="h-px w-12 bg-line" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}