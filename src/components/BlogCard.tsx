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
      className="group flex h-full flex-col overflow-hidden bg-background transition-colors duration-300 hover:bg-surface/50"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={post.img}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 border border-line bg-background/70 px-3 py-1 text-[11px] font-semibold backdrop-blur">
          {post.cat}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs text-muted">
          <span>{post.date}</span>
          <span className="h-1 w-1 bg-muted" />
          <span>{post.read} read</span>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-accent">
          {post.title}
        </h3>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-semibold text-accent transition-all group-hover:gap-2.5">
          Read article <FiArrowUpRight />
        </span>
      </div>
    </Link>
  );
}