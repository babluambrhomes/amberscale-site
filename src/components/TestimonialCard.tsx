"use client";

import Image from "next/image";
import { FiStar } from "react-icons/fi";
import CardShape from "./CardShape";

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
  const seed = name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const shapePos = ["-right-8 -top-8 rotate-12", "-left-10 -bottom-10 rotate-12", "-right-6 -bottom-6"][seed % 3];
  return (
    <figure className="relative flex h-full flex-col justify-between overflow-hidden rounded-md rounded-tl-none rounded-br-none border border-line bg-surface/60 p-8">
      <CardShape seed={seed} className={`text-accent/10 ${shapePos}`} />
      <div className="relative z-10">
        <div
          className="flex gap-1"
          aria-label={`${rating} out of 5 star rating`}
        >
          {Array.from({ length: 5 }).map((_, j) => (
            <FiStar
              key={j}
              className={`fill-current ${
                j < rating ? "text-accent" : "text-muted/30"
              }`}
            />
          ))}
        </div>
        <blockquote className="mt-6 leading-relaxed text-foreground/90">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
      <figcaption className="mt-8 flex items-center gap-4">
        <span className="relative h-12 w-12 overflow-hidden rounded-2 border border-line">
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