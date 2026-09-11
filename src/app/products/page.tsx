"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import PageHero from "@/components/PageHero";

import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/lib/site";

export default function ProductsPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        index="01"
        eyebrow="Products"
        title="Owned & operated,"
        highlight="built for the world"
        description="Everything below is ours — conceived, designed and engineered by the AmbrScale team. Live in production, earning on our own name, with more in the pipeline."
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
      />

      <section id="products" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 0.08}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

    
      <section className="border-y border-line bg-surface/40 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div>
              <SectionHeading
                index="01.1"
                eyebrow="Partners"
                title="Ours is one."
                highlight="Yours can be next."
                description="The same team behind this stack builds for partners too — from fresh ideas to full launches. That&apos;s where our services come in."
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 border border-line px-6 py-3 text-sm font-semibold text-foreground/90 transition-colors hover:border-accent/50"
              >
                View our services
                <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-semibold text-background transition-all hover:shadow-[0_0_28px_-6px_var(--accent)]"
              >
                Pitch your own
                <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}