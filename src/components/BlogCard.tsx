"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";


type BlogPost = {
  title: string;
  cat: string;
  date: string;
  read: string;
  img: string;
  slug: string;
};

export default function BlogCard({ post, href }: { post: BlogPost; href?: string }) {
  const target = href ?? `/blog/${post.slug}`;
  return (
    <Link
      href={target}
      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-surface/90 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-xl"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={post.img}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 hand-radius border border-line bg-background/80 px-3 py-1 text-[11px] font-semibold text-foreground backdrop-blur-md">
          {post.cat}
        </span>
      </div>
      <div className="relative flex flex-1 flex-col overflow-hidden p-6">
        <div className="relative z-10 flex flex-1 flex-col">
          <div className="flex items-center gap-3 text-xs font-mono text-muted">
            <span>{post.date}</span>
            <span className="h-1 w-1 rounded-full bg-muted/60" />
            <span>{post.read} read</span>
          </div>
          <h3 className="mt-3 text-lg font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent">
            {post.title}
          </h3>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-xs font-semibold text-accent transition-all group-hover:gap-2.5">
            Read article <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
          </span>
        </div>
      </div>
    </Link>
  );
}