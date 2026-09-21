"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

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
    <div
      className="relative flex h-full min-h-[440px] sm:min-h-[460px] lg:min-h-0 w-full flex-col justify-end lg:col-start-3 lg:row-start-1 lg:row-span-2 select-none"
    >
      {/* Right-Peeking Straight Slider Cards Area */}
      <div className="relative h-full min-h-[430px] sm:min-h-[450px] lg:min-h-0 w-full">
        {cards.map((item, index) => {
          // Cards are equal height and align vertically; cards behind only peek from the right side
          const isFront = index === 0;
          const offsetX = index === 0 ? 0 : index === 1 ? 22 : index === 2 ? 42 : 55;
          const zIndex = cards.length - index;
          const opacity = index > 2 ? 0 : index === 0 ? 1 : index === 1 ? 0.95 : 0.8;

          return (
            <motion.div
              key={item.name}
              layout
              initial={false}
              animate={{
                x: offsetX,
                scale: 1,
                rotate: 0,
                zIndex,
                opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 28,
                mass: 0.8,
              }}
              drag={isFront ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.35}
              onDragEnd={(_, info) => {
                if (Math.abs(info.offset.x) > 35 || Math.abs(info.velocity.x) > 200) {
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
              className={`absolute inset-y-0 left-0 w-[calc(100%-44px)] sm:w-[calc(100%-48px)] overflow-hidden rounded-[24px] border-2 border-white/90 bg-surface shadow-[0_20px_45px_-18px_rgba(0,0,0,0.4)] transition-shadow ${
                isFront
                  ? "cursor-grab active:cursor-grabbing hover:shadow-[0_28px_55px_-15px_rgba(79,70,229,0.35)]"
                  : index <= 2
                  ? "cursor-pointer hover:brightness-110"
                  : "pointer-events-none"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />

                {/* Top Status & Index Badge */}
                <div className="absolute left-4 top-4 right-4 flex items-center justify-between sm:left-5 sm:top-5 sm:right-5">
                  <span className="rounded-full border border-white/20 bg-black/50 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {item.status}
                  </span>
                  <span className="rounded-full border border-white/20 bg-black/50 px-2.5 py-1 font-mono text-xs font-semibold text-white/90 backdrop-blur-md">
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
                      <p className="mt-1 text-sm text-white/90 line-clamp-2 leading-relaxed">
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
    </div>
  );
}

