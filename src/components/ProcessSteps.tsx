"use client";

import { useEffect, useLayoutEffect, useRef, type RefObject } from "react";
import StaggerReveal from "@/components/interactions/StaggerReveal";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";

type ProcessStep = {
  step: string;
  title: string;
  desc: string;
  tag?: string;
};

type ProcessStepsProps = {
  steps: ProcessStep[];
  horizontal?: boolean;
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
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-logo-gradient">
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

export default function ProcessSteps({ steps, horizontal = false }: ProcessStepsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (horizontal) registerGsap();
  }, [horizontal]);

  useLayoutEffect(() => {
    if (!horizontal) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    const bar = barRef.current;
    if (!section || !track) return;

    if (prefersReducedMotion()) {
      section.style.overflow = "auto";
      return;
    }

    const ctx = gsap.context(() => {
      const amount = () => track.scrollWidth - window.innerWidth;
      if (amount() <= 0) return;

      gsap.to(track, {
        x: () => -amount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          end: () => `+=${amount()}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (bar) {
              gsap.set(bar, { scaleX: self.progress, transformOrigin: "left center" });
            }
          },
        },
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, [horizontal, steps]);

  if (horizontal) {
    return (
      <div ref={sectionRef as RefObject<HTMLDivElement>} className="relative overflow-hidden">
        <div
          ref={trackRef as RefObject<HTMLDivElement>}
          className="flex w-max items-stretch gap-px bg-line pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pr-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
        >
          {steps.map((p, i) => (
            <div key={i} className="w-[82vw] border-r border-line bg-background sm:w-[420px] lg:w-[440px]">
              <StepCard step={p} i={i} />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full overflow-hidden bg-line" aria-hidden>
            <div
              ref={barRef as RefObject<HTMLDivElement>}
              className="h-full w-full origin-left bg-gradient-to-r from-[#23cb6b] via-[#10b4af] to-[#1378ef]"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <StaggerReveal className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((p, i) => (
        <div key={i} className="bg-background">
          <StepCard step={p} i={i} />
        </div>
      ))}
    </StaggerReveal>
  );
}