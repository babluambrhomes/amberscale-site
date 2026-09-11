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
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.75, 0.95]);

  return (
    <section
      ref={ref}
      className="relative isolate h-[70vh] min-h-[520px] max-h-[720px] overflow-hidden"
    >
      <motion.div style={{ y: yImg }} className="absolute inset-0 z-0">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-transparent"
      />

      <div className="relative z-20 flex h-full flex-col justify-end px-4 pb-14 sm:px-6 lg:px-8">
        <motion.div style={{ y: yContent, opacity: contentOpacity }} className="mx-auto w-full max-w-6xl">
          <div className="grid-lines absolute inset-0 -z-10 opacity-70" aria-hidden />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <span className="font-mono text-sm text-accent">{index}</span>
          <span className="h-px w-10 bg-accent" />
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-white ">
            {eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-white text-5xl font-black leading-[0.95] tracking-tighter sm:text-7xl"
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
            className="mt-7 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg"
          >
            {description}
          </motion.p>
        )}
        </motion.div>
      </div>
    </section>
  );
}