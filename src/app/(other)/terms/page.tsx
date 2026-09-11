import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import { btnPrimary, circleArrow } from "@/lib/constants";

const sections = [
  {
    title: "Engagement",
    body: "When you engage AmbrScale for a project we agree a scope, a timeline and a fixed price in writing before any work begins. Emails or verbal discussions do not constitute a binding engagement.",
  },
  {
    title: "Scope & deliverables",
    body: "Every project ships against the agreed scope. If you'd like changes beyond it, we'll quote them transparently before starting — no surprise invoices, ever.",
  },
  {
    title: "Payments",
    body: "Projects are typically billed in two or three milestones. Invoices are due within 14 days. Work pauses on overdue invoices, and late milestones can shift the timeline.",
  },
  {
    title: "Intellectual property",
    body: "Once your final payment clears, full ownership of the deliverables transfers to you. We love being listed as the builder, but never as the owner of your work.",
  },
  {
    title: "Confidentiality & liability",
    body: "Both sides agree to keep sensitive information confidential. Our aggregate liability under any engagement is limited to the fees we've received for that project.",
  },
  {
    title: "Termination",
    body: "Either side can end an engagement in writing, owing only for work completed to that date. Anything already paid and delivered stays yours.",
  },
];

export const metadata = {
  title: "Terms & Conditions — AmbrScale",
  description: "The terms that govern work and engagements with AmbrScale.",
};

export default function TermsPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        index="07"
        eyebrow="Legal"
        title="Terms &"
        highlight="Conditions"
        description="Plain-language terms for working with AmbrScale. Fair for both sides, written so you can actually read them."
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="space-y-14">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="flex items-baseline gap-4 text-2xl font-bold tracking-tight sm:text-3xl">
                <span className="font-mono text-sm font-bold text-accent">0{i + 1}</span>
                {s.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <p className="text-sm text-muted">Last updated: September 2026</p>
          <Link href="/contact" className={`${btnPrimary} mt-6`}>
            Start a project{" "}
            <span className={circleArrow}>
              <FiArrowUpRight />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}