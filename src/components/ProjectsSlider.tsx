"use client";

import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { projects } from "@/lib/site";

export default function ProjectsSlider() {
  return (
    <div className="relative">
      <Swiper
        modules={[EffectCoverflow, Autoplay, Navigation]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView={1.15}
        spaceBetween={16}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 140,
          modifier: 2,
          slideShadows: false,
        }}
        autoplay={{ delay: 3200, disableOnInteraction: false }}
        navigation={{ prevEl: ".proj-prev", nextEl: ".proj-next" }}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 20 },
          1280: { slidesPerView: 3, spaceBetween: 28 },
        }}
        className="!overflow-visible !p-2"
      >
        {projects.map((p, i) => (
          <SwiperSlide key={i}>
            <div className="group relative h-72 overflow-hidden rounded-3xl border border-line bg-surface sm:h-80">
              <Image
                src={p.img}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full border border-line bg-background/60 px-3 py-1 text-[11px] font-semibold text-foreground backdrop-blur">
                {p.tag}
              </span>
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted">
                    {p.year}
                  </p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-background opacity-0 transition-opacity group-hover:opacity-100">
                  <FiArrowRight />
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    
    </div>
  );
}