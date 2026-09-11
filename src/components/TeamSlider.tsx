"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

import { team } from "@/lib/site";

export default function TeamSlider() {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        grabCursor
        loop
        slidesPerView={1.3}
        spaceBetween={16}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        navigation={{ prevEl: ".team-prev", nextEl: ".team-next" }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="!overflow-visible !p-2"
      >
        {team.map((m, i) => (
          <SwiperSlide key={i}>
            <div className="group relative overflow-hidden rounded-md rounded-tl-none border border-line bg-surface transition-colors duration-300 hover:border-accent/40">
              <div className="relative h-60">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
               
                <span className="pointer-events-none absolute right-3 top-2 font-mono text-3xl font-black leading-none text-foreground/10">
                  0{i + 1}
                </span>
               
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold tracking-tight">{m.name}</h3>
                <p className="mt-0.5 text-[11px] uppercase tracking-widest text-accent">{m.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
    </div>
  );
}