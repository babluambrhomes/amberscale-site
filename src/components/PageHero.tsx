"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  image: string;
};

export default function PageHero({
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
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.82, 0.98]);

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
        className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/70 to-black"
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
          <span className="font-hand text-2xl text-white -rotate-1">
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
              <span className="hand-underline inline-block text-gray-300">
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
            className="mt-7 max-w-5xl text-base leading-relaxed text-white/90 sm:text-lg"
          >
            {description}
          </motion.p>
        )}
        </motion.div>
      </div>
    </section>
  );
}