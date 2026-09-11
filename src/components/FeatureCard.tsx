"use client";

import type { ReactNode } from "react";


type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  desc: string;
};

export default function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  const seed = title.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const position = ["-right-8 -top-8 rotate-12", "-left-10 -bottom-10 -rotate-12", "-right-6 -bottom-6"][seed % 3];
  return (
    <div className="group relative flex h-full flex-col overflow-hidden bg-background p-7 transition-colors hover:bg-surface/50">
    
      <div className="relative z-10 flex h-full flex-col">
        <span className="flex h-12 w-12 items-center justify-center  text-2xl text-accent transition-colors group-hover:bg-accent group-hover:text-background">
          {icon}
        </span>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
        </div>
      </div>
    </div>
  );
}