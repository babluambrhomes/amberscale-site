"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Reveal from "@/components/Reveal";

type Faq = { q: string; a: string };

export default function ProductFaqs({
  faqs,
  productName,
}: {
  faqs: Faq[];
  productName: string;
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="text-center">
        <Reveal>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
            QUESTIONS &amp; ANSWERS
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-3 text-sm text-muted">
            Everything you need to know about {productName} and early access.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 space-y-4">
        {faqs.map((faq, idx) => (
          <Reveal key={idx} delay={idx * 0.08}>
            <div className="overflow-hidden rounded-2xl border border-line bg-surface/80 transition-colors hover:border-accent/40">
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-base font-bold text-foreground">
                  {faq.q}
                </span>
                <FiChevronDown
                  className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                    openFaq === idx ? "rotate-180 text-accent" : ""
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="border-t border-line/60 px-6 pb-6 pt-3">
                  <p className="text-sm leading-relaxed text-muted">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
