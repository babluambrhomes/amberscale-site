"use client";

import Reveal from "@/components/Reveal";

type ProcessStep = {
  step: string;
  title: string;
  desc: string;
  tag?: string;
};

const fills = [25, 50, 75, 100];

export default function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((p, i) => {
        
        return (
          <Reveal key={i} delay={i * 0.08} className="bg-background">
            <div className="group relative flex h-full flex-col overflow-hidden bg-background p-7 transition-colors duration-300 hover:bg-surface/50">
              <div className="absolute inset-x-0 top-0 h-0.5 bg-foreground/5">
                <div
                  className="h-full bg-gradient-to-r from-[#23cb6b] via-[#10b4af] to-[#1378ef] transition-all duration-500"
                  
                />
              </div>

              <span className="pointer-events-none absolute right-2 top-2 font-mono text-6xl font-black leading-none text-foreground/[0.05] transition-colors duration-300 group-hover:text-foreground/[0.09]">
                {p.step}
              </span>

              <div className="relative flex flex-1 flex-col">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-logo-gradient">
                  Step 0{i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>

                {p.tag && (
                  <div className="mt-auto flex items-center gap-2 pt-6">
                    <span className="h-px w-8 bg-gradient-to-r from-[#23cb6b] via-[#10b4af] to-[#1378ef] transition-all duration-500 group-hover:w-12" />
                    <span className="text-xs font-medium text-muted transition-colors duration-300 group-hover:text-foreground">
                      {p.tag}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}