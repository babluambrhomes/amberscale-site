"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

type Card = { img: string };

type ShowcaseSectionProps = {
  eyebrow: string;
  title: string;
  description?: string;
  link?: string;
  linkLabel?: string;
  bg: { src: string; alt: string };
  cards: Card[];
};

function ParallaxFrame({ img, rotate }: { img: string; rotate: string }) {
  return (
    <div className={`relative overflow-hidden hand-radius border border-line shadow-xl ${rotate}`}>
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={img}
          alt=""
          fill
          sizes="(max-width: 1024px) 50vw, 30vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default function ShowcaseSection({
  eyebrow,
  title,
  description,
  link,
  linkLabel,
  bg,
  cards,
}: ShowcaseSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const scaleBg = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const yText = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const card1Y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const card3Y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-foreground"
    >
      <motion.div
        style={{ y: yBg, scale: scaleBg }}
        className="absolute -inset-y-[15%] inset-x-0"
      >
        <Image
          src={bg.src}
          alt={bg.alt}
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground via-foreground/40 to-foreground" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-accent/10 to-transparent" />

      <div className="relative mx-auto grid min-h-[70vh] max-w-7xl items-center gap-10 px-4 sm:px-6 lg:px-8 lg:grid-cols-[1fr_1.1fr]">
        <motion.div style={{ y: yText }} className="relative z-10 py-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent">06</span>
            <span className="h-px w-10 bg-accent" />
            <span className="font-hand text-2xl text-accent-2 -rotate-1">
              {eyebrow}
            </span>
          </div>
          <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {title}
          </h2>
          {description && (
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
              {description}
            </p>
          )}
          {link && (
            <Link
              href={link}
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white hover:text-black"
            >
              {linkLabel}
              <FiArrowUpRight className="text-base transition-transform group-hover:rotate-45" />
            </Link>
          )}
        </motion.div>

        <div className="relative mx-auto my-auto h-[420px] w-full max-w-[520px]">
          {cards[0] && (
            <motion.div
              style={{ y: card1Y }}
              className="absolute left-0 top-0 z-30 w-[52%]"
            >
              <ParallaxFrame img={cards[0].img} rotate="-rotate-2" />
            </motion.div>
          )}
          {cards[1] && (
            <motion.div
              style={{ y: card2Y }}
              className="absolute right-[6%] top-[24%] z-20 w-[48%]"
            >
              <ParallaxFrame img={cards[1].img} rotate="rotate-3" />
            </motion.div>
          )}
          {cards[2] && (
            <motion.div
              style={{ y: card3Y }}
              className="absolute left-[16%] bottom-0 z-10 w-[44%]"
            >
              <ParallaxFrame img={cards[2].img} rotate="-rotate-1" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
