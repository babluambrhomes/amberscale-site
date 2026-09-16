"use client";

import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

const workSteps = [
  {
    step: "01",
    title: "Discover",
    desc: "We dig into your goals, audience and market to define what winning looks like.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
  },
  {
    step: "02",
    title: "Design",
    desc: "We shape strategy into an experience and visual language that is unmistakably yours.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
  },
  {
    step: "03",
    title: "Build",
    desc: "We engineer with obsessive detail — fast, secure and ready to grow.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600&auto=format&fit=crop",
  },
  {
    step: "04",
    title: "Launch",
    desc: "We ship to production with QA, monitoring and a rollout that protects your revenue.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
  },
  {
    step: "05",
    title: "Scale",
    desc: "We launch, measure and iterate, standing beside you well beyond day one.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
  },
];

export default function WorkSlider() {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        grabCursor
        loop
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        navigation={{ prevEl: ".work-prev", nextEl: ".work-next" }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="!overflow-visible !pb-16"
      >
        {workSteps.map((s, i) => (
          <SwiperSlide key={s.step} className="!h-auto">
            <div className="flex h-full flex-col border-r border-line pr-5 relative sm:pr-7">
              
<span className="font-mono text-2xl absolute right-4 font-black leading-none text-foreground/[0.06]">
                  {s.step}
                </span>
              <h5 className="text-lg font-semibold tracking-tight">{s.title}</h5>

              <figure className="relative mt-4 aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-line">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </figure>

              <p className="mt-3 text-sm leading-relaxed text-muted">{s.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute -top-24 right-0 z-10 flex items-center gap-3">
        <button
          aria-label="Previous step"
          className="work-prev flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-foreground/80 transition-colors hover:border-accent/50 hover:text-accent"
        >
          <FiArrowLeft />
        </button>
        <button
          aria-label="Next step"
          className="work-next flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-foreground/80 transition-colors hover:border-accent/50 hover:text-accent"
        >
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
}