import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Software Fleet | AmbrScale",
  description:
    "Explore software products built, owned, and operated by AmbrScale — designed around real-world problems for the long term.",
  openGraph: {
    title: "AmbrScale Software Fleet — Built Around Real Problems",
    description:
      "A portfolio of software products engineered and operated by AmbrScale.",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
