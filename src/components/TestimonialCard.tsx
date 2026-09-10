"use client";

import Image from "next/image";
import { FiStar } from "react-icons/fi";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  img: string;
  rating: number;
};

export default function TestimonialCard({
  quote,
  name,
  role,
  img,
  rating,
}: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-3xl rounded-tl-none rounded-br-none border border-line bg-surface/60 p-8">
      <div>
        <div
          className="flex gap-1 text-accent"
          aria-label={`${rating} star rating`}
        >
          {Array.from({ length: rating }).map((_, j) => (
            <FiStar key={j} className="fill-current" />
          ))}
        </div>
        <blockquote className="mt-6 leading-relaxed text-foreground/90">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
      <figcaption className="mt-8 flex items-center gap-4">
        <span className="relative h-12 w-12 overflow-hidden rounded-full border border-line">
          <Image src={img} alt={name} fill sizes="48px" className="object-cover" />
        </span>
        <div>
          <div className="text-sm font-semibold">{name}</div>
          <div className="text-xs text-muted">{role}</div>
        </div>
      </figcaption>
    </figure>
  );
}