"use client";

import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  desc: string;
};

export default function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <div className="group h-full rounded-3xl border border-line bg-surface/50 p-7 transition-colors hover:border-accent/40">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-2xl text-accent transition-colors group-hover:bg-accent group-hover:text-background">
        {icon}
      </span>
      <div className="mt-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
      </div>
    </div>
  );
}