"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

type StackItem = {
  name: string;
  tagline: string;
  status: string;
  slug: string;
  src: string;
};

const productItems: StackItem[] = [
  {
    name: "01 · Real",
    tagline: "A problem people actually experience, not one invented to justify a feature.",
    status: "PRINCIPLE",
    slug: "about#principles",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=90&w=1200&auto=format&fit=crop",
  },
  {
    name: "02 · Meaningful",
    tagline: "Important enough to change behaviour, save time, reduce friction or create opportunity.",
    status: "CRITERIA",
    slug: "about#principles",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=90&w=1200&auto=format&fit=crop",
  },
  {
    name: "03 · Underserved",
    tagline: "A space where existing solutions leave a meaningful gap.",
    status: "CRITERIA",
    slug: "about#principles",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=90&w=1200&auto=format&fit=crop",
  },
  {
    name: "04 · Buildable",
    tagline: "A problem where technology can create a materially better experience.",
    status: "CRITERIA",
    slug: "about#principles",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=90&w=1200&auto=format&fit=crop",
  },
  {
    name: "05 · Compounding",
    tagline: "A product that can become more useful as we learn, improve and grow.",
    status: "HORIZON",
    slug: "about#principles",
    src: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=90&w=1200&auto=format&fit=crop",
  },
];

export default function HeroStackedCards() {
  const [cards, setCards] = useState<StackItem[]>(productItems);
  const [direction, setDirection] = useState<number>(1);

  const handleNext = () => {
    setDirection(1);
    setCards((prev) => {
      const copy = [...prev];
      const first = copy.shift();
      if (first) copy.push(first);
      return copy;
    });
  };

  const handlePrev = () => {
    setDirection(-1);
    setCards((prev) => {
      const copy = [...prev];
      const last = copy.pop();
      if (last) copy.unshift(last);
      return copy;
    });
  };

  return (
    <div className="relative flex h-full min-h-[470px] sm:min-h-[480px] w-full flex-col justify-end lg:col-start-3 lg:row-start-1 lg:row-span-2 select-none pt-6">
      {/* Top Floating Hand-drawn hint */}
      <div className="absolute -top-2 right-2 z-30 flex items-center gap-2">
        <span className="font-hand text-sm text-accent-2 -rotate-3">
          slide or drag cards ✦
        </span>
      </div>

      {/* Stacked Cards Area */}
      <div className="relative h-[410px] sm:h-[420px] w-full">
        {cards.map((item, index) => {
          // index 0 is front, index 1 is behind, index 2 is further behind, etc.
          const isFront = index === 0;
          const offsetY = -index * 20;
          const scale = 1 - index * 0.055;
          const zIndex = cards.length - index;
          const rotate = index === 0 ? 0 : index === 1 ? 4 : index === 2 ? -4 : 2;

          return (
            <motion.div
              key={item.name}
              layout
              initial={false}
              animate={{
                top: offsetY,
                scale,
                rotate,
                zIndex,
                opacity: index > 3 ? 0 : 1 - index * 0.1,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 24,
              }}
              drag={isFront ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              onDragEnd={(_, info) => {
                if (Math.abs(info.offset.x) > 50 || Math.abs(info.velocity.x) > 250) {
                  if (info.offset.x > 0) {
                    handlePrev();
                  } else {
                    handleNext();
                  }
                }
              }}
              onClick={() => {
                if (!isFront) {
                  handleNext();
                }
              }}
              className={`absolute inset-x-0 bottom-0 h-[370px] sm:h-[380px] overflow-hidden rounded-[26px] border-2 border-white/90 bg-surface shadow-[0_24px_50px_-20px_rgba(0,0,0,0.35)] transition-shadow ${
                isFront
                  ? "cursor-grab active:cursor-grabbing hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.35)]"
                  : "cursor-pointer hover:brightness-105"
              }`}
            >
              {/* Image Container */}
              <div className="relative h-full w-full">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                  priority={index === 0}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />

                {/* Top Status & Index Badge */}
                <div className="absolute left-4 top-4 right-4 flex items-center justify-between">
                  <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {item.status}
                  </span>
                  <span className="rounded-full border border-white/20 bg-black/40 px-2.5 py-1 font-mono text-[11px] font-semibold text-white/90 backdrop-blur-md">
                    {productItems.findIndex((p) => p.name === item.name) + 1} / {productItems.length}
                  </span>
                </div>

                {/* Bottom Card Content */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl drop-shadow-sm">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs text-white/80 line-clamp-2 leading-relaxed">
                        {item.tagline}
                      </p>
                    </div>

                    <Link
                      href={`/products/${item.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="group/btn flex shrink-0 items-center gap-1.5 rounded-full border border-white/30 bg-white/20 px-3.5 py-2 text-xs font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 shadow-md"
                    >
                      <span>Explore</span>
                      <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Floating Navigation Controls */}
      <div className="relative z-40 mt-4 flex items-center justify-between px-1">
        {/* Step Dots */}
        <div className="flex items-center gap-1.5">
          {productItems.map((prod, idx) => {
            const isActive = cards[0]?.name === prod.name;
            return (
              <button
                key={prod.name}
                type="button"
                onClick={() => {
                  const targetIdx = cards.findIndex((c) => c.name === prod.name);
                  if (targetIdx > 0) {
                    setCards((prev) => {
                      const copy = [...prev];
                      const moved = copy.splice(0, targetIdx);
                      return [...copy, ...moved];
                    });
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isActive ? "w-7 bg-accent" : "w-2 bg-foreground/20 hover:bg-foreground/40"
                }`}
                aria-label={`Jump to ${prod.name}`}
              />
            );
          })}
        </div>

        {/* Slide Controls Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface/90 text-foreground shadow-sm transition-all hover:bg-surface hover:scale-105 active:scale-95"
            aria-label="Previous card"
          >
            <FiChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="grid h-9 w-9 place-items-center rounded-full border border-accent bg-accent text-white shadow-sm transition-all hover:bg-accent/90 hover:scale-105 active:scale-95"
            aria-label="Next card"
          >
            <FiChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
