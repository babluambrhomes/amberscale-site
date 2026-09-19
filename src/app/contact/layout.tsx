import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact AmbrScale — Start a Product Conversation",
  description:
    "Have a product idea, partnership opportunity or problem worth solving? Start a conversation with AmbrScale.",
  openGraph: {
    title: "Have a Problem Worth Solving? — AmbrScale",
    description:
      "Tell AmbrScale what you are building, what is not working or what you think could be better.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
