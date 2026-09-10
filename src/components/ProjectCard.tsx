"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

type Project = {
  slug: string;
  title: string;
  tag: string;
  category: string;
  year: string;
  img: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group relative block overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden border border-line">
        <Image
          src={project.img}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-5">
          <span className="border border-white/20 bg-background/60 px-3 py-1 text-[11px] font-semibold backdrop-blur-md">
            {project.category}
          </span>
          <span className="font-mono text-xs text-white/70">{project.year}</span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-white/70">{project.tag}</p>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/30 bg-white/10 text-white backdrop-blur transition-all duration-300 group-hover:bg-accent group-hover:border-accent">
            <FiArrowUpRight className="text-lg" />
          </span>
        </div>
      </div>
    </Link>
  );
}
