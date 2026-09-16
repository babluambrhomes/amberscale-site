"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

type ProcessStep = {
  step: string;
  title: string;
  desc: string;
  tag?: string;
};

type ProcessStepsProps = {
  steps: ProcessStep[];

};

function StepCard({ step, i }: { step: ProcessStep; i: number }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden bg-background p-7 transition-colors duration-300 hover:bg-surface/50">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-foreground/5">
        <div className="h-full bg-gradient-to-r from-[#23cb6b] via-[#10b4af] to-[#1378ef] transition-all duration-500 group-hover:w-full" />
      </div>

      <span className="pointer-events-none absolute right-2 top-2 font-mono text-6xl font-black leading-none text-foreground/[0.05] transition-colors duration-300 group-hover:text-foreground/[0.09]">
        {step.step}
      </span>

      <div className="relative flex flex-1 flex-col">
        <span className="font-hand text-lg text-logo-gradient">
          Step 0{i + 1}
        </span>
        <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>

        {step.tag && (
          <div className="mt-auto flex items-center gap-2 pt-6">
            <span className="h-px w-8 bg-gradient-to-r from-[#23cb6b] via-[#10b4af] to-[#1378ef] transition-all duration-500 group-hover:w-12" />
            <span className="text-xs font-medium text-muted transition-colors duration-300 group-hover:text-foreground">
              {step.tag}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
 
  return (
     
      <div className="relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          grabCursor
          loop
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          navigation={{ prevEl: ".procs-prev", nextEl: ".procs-next" }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="!overflow-visible"
        >
          {steps.map((p, i) => (
            <SwiperSlide key={i} className="!h-auto">
              <div className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-background">
                <StepCard step={p} i={i} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

       
      </div>
    
  );
}