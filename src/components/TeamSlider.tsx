"use client";

import Image from "next/image";
import { FiArrowLeft, FiArrowRight, FiDribbble, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

import { team } from "@/lib/site";

const socials = [
  { icon: FiLinkedin, label: "LinkedIn" },
  { icon: FiGithub, label: "GitHub" },
  { icon: FiInstagram, label: "Instagram" },
  { icon: FiDribbble, label: "Dribbble" },
];

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
            <div className="group relative overflow-hidden rounded-3xl border border-line bg-surface">
              <div className="relative h-80">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {socials.map((s, j) => (
                    <a
                      key={j}
                      href="#"
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-background/70 text-foreground backdrop-blur transition-colors hover:bg-accent hover:text-background"
                    >
                      <s.icon className="text-sm" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold tracking-tight">{m.name}</h3>
                <p className="mt-0.5 text-xs uppercase tracking-widest text-accent">{m.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
    </div>
  );
}