"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type PageHeroProps = {
  index: string;
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  image: string;
};

export default function PageHero({
  index,
  eyebrow,
  title,
  highlight,
  description,
  image,
}: PageHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-4 pb-16 pt-40 sm:px-6 sm:pb-20 "
    >
      <div className="pointer-events-none absolute inset-x-0 top-28 -z-10 bottom-0" aria-hidden>
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.30] "
          />
        </div>
      <motion.div style={{ y: yBg, opacity }} className="relative mx-auto max-w-5xl">
        <div className="grid-lines absolute inset-0 -z-10 opacity-70" aria-hidden />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <span className="font-mono text-sm text-accent">{index}</span>
          <span className="h-px w-10 bg-accent" />
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-black ">
            {eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-5xl font-black leading-[0.95] tracking-tighter sm:text-7xl"
        >
          {title}
          {highlight && (
            <>
              <br />
              <span className="bg-gradient-to-r from-accent to-cyan bg-clip-text text-transparent">
                {highlight}
              </span>
            </>
          )}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-black sm:text-lg"
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}