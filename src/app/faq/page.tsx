"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiSearch, FiX, FiArrowUpRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { btnPrimary, circleArrow } from "@/lib/constants";

const faqs = [
  {
    q: "How much does a project cost?",
    cat: "Pricing",
    a: "Every project is scoped individually. Tell us what you need and we'll send a clear, fixed proposal — no surprises, no hourly billing anxiety.",
  },
  {
    q: "What services do you offer?",
    cat: "Services",
    a: "Web development, UI/UX design, digital marketing, brand & strategy, SEO & performance, and ongoing support & care. A full stack under one roof.",
  },
  {
    q: "Is there a retainer option?",
    cat: "Pricing",
    a: "Yes — most longer-term clients move onto a monthly retainer after launch, covering care, growth and new features as the product scales.",
  },
  {
    q: "How long does a project take?",
    cat: "Timelines",
    a: "A marketing site usually lands in 3–6 weeks. Larger platforms take longer. We share a real timeline up front and hold ourselves to it.",
  },
  {
    q: "Do you work with startups?",
    cat: "Projects",
    a: "Absolutely — much of our work is with startups and scale-ups. We scope engagements to fit, from single-site builds to full product platforms.",
  },
  {
    q: "Do you offer ongoing support?",
    cat: "Support",
    a: "Always. Every client gets care after launch, and most stay with us for long-term growth work.",
  },
  {
    q: "Can you back our team or event?",
    cat: "Partnerships",
    a: "Maybe — we love partnering with teams and events that fit our vibe. Tell us what you're planning and let's see what we can do together.",
  },
  {
    q: "Who owns the work after launch?",
    cat: "Projects",
    a: "You do. Once final payment clears, full ownership of the deliverables transfers to you — code, design and content included.",
  },
  {
    q: "How do we get started?",
    cat: "Engagement",
    a: "Send a message through the contact page or book a call. We reply fast, ask smart questions, and send you a written proposal.",
  },
];

export default function FaqPage() {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const q = query.trim().toLowerCase();
  const filtered = q
    ? faqs.filter((f) => (f.q + " " + f.a + " " + f.cat).toLowerCase().includes(q))
    : faqs;

  return (
    <div className="overflow-x-hidden">
      <PageHero
        index="09"
        eyebrow="Support"
        title="Frequently asked"
        highlight="questions"
        description="Straight answers to the things clients ask us most. Search below or drop us a line — someone real replies fast."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-3xl px-4 mt-20 sm:px-6">
        <div className="relative">
          <FiSearch className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-lg text-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions — try “timeline”, “pricing”, “support”…"
            className="w-full border border-line bg-background/60 py-4 pl-14 pr-12 text-sm text-foreground placeholder:text-muted/70 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
            aria-label="Search FAQ"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center text-muted transition-colors hover:text-foreground"
              aria-label="Clear search"
            >
              <FiX />
            </button>
          )}
        </div>
        <p className="mt-3 text-xs uppercase tracking-widest text-muted">
          {q ? `${filtered.length} result${filtered.length === 1 ? "" : "s"}` : `${faqs.length} questions`}
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        {filtered.length === 0 ? (
          <div className="border border-line bg-background p-10 text-center">
            <span className="font-mono text-xs font-bold text-accent">/0</span>
            <h3 className="mt-4 text-xl font-semibold tracking-tight">
              No results for “{query}”
            </h3>
            <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
              Try a shorter keyword, or just ask us directly — we answer everything.
            </p>
            <Link href="/contact" className={`${btnPrimary} mt-6`}>
              Ask us directly{" "}
              <span className={circleArrow}>
                <FiArrowUpRight />
              </span>
            </Link>
          </div>
        ) : (
          <div className="border-t border-line">
            {filtered.map((f, i) => {
              const open = openIndex === i;
              return (
                <Reveal key={i} delay={Math.min(i * 0.04, 0.25)}>
                  <div className="border-b border-line">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                      aria-expanded={open}
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs font-bold text-accent">
                          /0{i + 1}
                        </span>
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                            {f.cat}
                          </span>
                          <h3 className="mt-1 text-base font-semibold tracking-tight sm:text-lg">
                            {f.q}
                          </h3>
                        </div>
                      </div>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center border border-line text-muted transition-all duration-300 ${
                          open ? "border-accent/50 bg-accent text-background" : ""
                        }`}
                      >
                        <FiChevronDown
                          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                        />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-7 pl-12 pr-6 text-sm leading-relaxed text-muted sm:text-base">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}
      </section>

      <section className="border-t border-line py-20 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <SectionHeading
              index="10"
              eyebrow="Still stuck"
              title="Can't find"
              highlight="your answer?"
              description="Every question gets a real reply from a real human — usually within a few hours."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className={btnPrimary}>
                  Contact us
                  <span className={circleArrow}>
                    <FiArrowUpRight />
                  </span>
                </Link>
                <a href="mailto:hello@ambrscale.com" className="border border-line px-6 py-3 text-sm font-semibold text-foreground/90 transition-colors hover:border-accent/50">
                  hello@ambrscale.com
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}