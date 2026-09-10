"use client";

import BlogCard from "@/components/BlogCard";

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
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
      />
  

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
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