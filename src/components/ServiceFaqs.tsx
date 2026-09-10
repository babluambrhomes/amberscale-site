"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

type Faq = { q: string; a: string };

export default function ServiceFaqs({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        index="05"
        eyebrow="Got questions"
        title="Frequently asked"
        highlight="questions"
        align="center"
      />
      <div className="mt-14 border-t border-line">
        {faqs.map((f, i) => {
          const open = openIndex === i;
          return (
            <Reveal key={i} delay={Math.min(i * 0.04, 0.2)}>
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
                    <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                      {f.q}
                    </h3>
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
    </section>
  );
}
