import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AmbrScale — Building Technology Products Around Real Problems",
  description:
    "Learn how AmbrScale approaches product building, why we focus on real-world problems, and the people and principles behind the company.",
  openGraph: {
    title: "AmbrScale — A Product Company Built Around Real Problems",
    description:
      "Product thinking, design, engineering and business brought together to build useful products for the real world.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
