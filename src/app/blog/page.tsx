"use client";

import BlogCard from "@/components/BlogCard";
import FinalCTA from "@/components/FinalCTA";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { blog } from "@/lib/site";

export default function BlogPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        eyebrow="Journal"
        title="Notes from"
        highlight="the studio"
        description="Strategy, interface design, and systems engineering — field notes, architecture teardowns, and practical frameworks from the AmbrScale build roster."
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blog.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.08}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA
        heading="Have an ambitious"
        highlight="product in mind?"
        description="Let's build a fast, scalable web application tailored for real user retention and growth."
        buttonText="Start a conversation"
      />
    </div>
  );
}