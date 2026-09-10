"use client";

import BlogCard from "@/components/BlogCard";
import Marquee from "@/components/Marquee";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { blog } from "@/lib/site";

export default function BlogPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        index="05"
        eyebrow="Blog"
        title="Notes from"
        highlight="the journal"
        description="Strategy, design and engineering insights — everything we learn on client projects, we write down. No fluff, just the useful parts."
      />
      <Marquee />

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blog.map((post, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}