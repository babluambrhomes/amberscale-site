"use client";

import { useState } from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import FinalCTA from "@/components/FinalCTA";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StatsGrid from "@/components/StatsGrid";
import { btnPrimary, circleArrow } from "@/lib/constants";
import { projects, products, flagship } from "@/lib/site";

const tabs = ["All", "Our products", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");

  const showProducts = active === "Our products";
  const filtered =
    !showProducts && active !== "All"
      ? projects.filter((p) => p.category === active)
      : projects;

  return (
    <div className="overflow-x-hidden">
      <PageHero
        index="03"
        eyebrow="Portfolio"
        title="What we"
        highlight="back"
        description="Products we own, brands we power and builds we're proud of — all running on the same AmbrScale team."
        image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2">
          {tabs.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                active === cat
                  ? "border-accent bg-accent text-background"
                  : "border-line text-muted hover:border-accent/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {showProducts ? (
            <>
              <Link
                href="/contact"
                className="group relative flex min-h-72 flex-col justify-end overflow-hidden border border-accent/30 bg-foreground p-7 transition-all duration-300 hover:border-accent/60"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-violet/30 blur-[80px]"
                  aria-hidden
                />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                  CODENAME · {flagship.status}
                </span>
                <h3 className="mt-3 text-3xl font-black tracking-tight text-background">
                  {flagship.codename}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  The big one — in build now, targeting {flagship.target}.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Get early access
                  <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
                </span>
              </Link>
              {products.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </>
          ) : (
            filtered.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <ProjectCard project={p} />
              </Reveal>
            ))
          )}
        </div>

        {filtered.length === 0 && !showProducts && (
          <div className="border border-line bg-background p-16 text-center">
            <span className="font-mono text-xs font-bold text-accent">/0</span>
            <h3 className="mt-4 text-xl font-semibold tracking-tight">Nothing here yet</h3>
            <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
              Try a different category.
            </p>
          </div>
        )}
      </section>

      <section className="border-y border-line bg-surface/40 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                index="03.1"
                eyebrow="Our approach"
                title="Built for"
                highlight="measurable results"
                br
              />
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-md leading-relaxed text-muted">
                  Every project starts with a business problem, not a design trend. We measure success
                  by outcomes — revenue, retention, speed — not just aesthetics.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className={btnPrimary}>
                    Pitch us
                    <span className={circleArrow}>
                      <FiArrowUpRight />
                    </span>
                  </Link>
                  <Link
                    href="/services"
                    className="group inline-flex items-center gap-2 border border-line px-6 py-3 text-sm font-semibold text-foreground/90 transition-colors hover:border-accent/50"
                  >
                    Our services
                    <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <StatsGrid
                items={[
                  { value: "50+", label: "Projects delivered" },
                  { value: "30+", label: "Happy clients" },
                  { value: "3x", label: "Avg. client ROI" },
                  { value: "98%", label: "Client retention" },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCTA
        heading="Have a bold"
        highlight="product idea?"
        description="We ship our own stuff, and we power ideas we believe in. Tell us yours — if it's worth building, we'll partner."
        buttonText="Pitch us"
      />
    </div>
  );
}
