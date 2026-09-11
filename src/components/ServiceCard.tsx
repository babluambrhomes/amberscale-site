"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";


type ServiceCardProps = {
  title: string;
  desc: string;
  tags?: string[];
  index: number;
  href?: string;
  showIndex?: boolean;
};

export default function ServiceCard({
  title,
  desc,
  tags,
  index,
  href,
  showIndex = true,
}: ServiceCardProps) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        {showIndex && (
          <span className="font-mono text-sm font-bold text-accent">
            /0{index + 1}
          </span>
        )}
        {href && (
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-foreground transition-all duration-300 group-hover:bg-accent group-hover:text-background">
            <FiArrowUpRight />
          </span>
        )}
      </div>
      <h3 className="mt-8 text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
      {tags && tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((t, j) => (
            <span
              key={j}
              className="rounded-2 border border-line px-3 py-1 text-[11px] font-medium text-muted transition-colors duration-300 group-hover:border-accent/40 group-hover:text-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </>
  );

  const cardClass =
    "group relative flex h-full flex-col overflow-hidden bg-background p-7 transition-colors duration-300 hover:bg-surface/50";

  const shapePositions = [
    "-right-8 -top-8 rotate-12",
    "-left-10 -bottom-10 -rotate-12",
    "-right-6 -bottom-6",
  ];

  return href ? (
    <Link href={href} className={cardClass}>
     
      <div className="relative z-10">{content}</div>
    </Link>
  ) : (
    <div className={cardClass}>
      
      <div className="relative z-10">{content}</div>
    </div>
  );
}