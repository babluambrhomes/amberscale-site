import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import { btnPrimary, circleArrow } from "@/lib/constants";

const sections = [
  {
    title: "What we collect",
    body: "We collect the information you give us directly — like your name and email when you fill a form or subscribe to the newsletter — and standard technical data such as browser type, device and pages visited.",
  },
  {
    title: "How we use it",
    body: "We use your data to respond to enquiries, deliver the services you ask for, send the newsletter you opted into, and improve how our site behaves. We never sell your personal data to anyone.",
  },
  {
    title: "Cookies",
    body: "We use a small number of cookies for core functionality and basic analytics. You can disable cookies in your browser at any time without losing access to most of the site.",
  },
  {
    title: "Your rights",
    body: "You can ask us to access, correct or delete the personal data we hold about you, or to stop sending you email at any time. Just write to hello@ambrscale.com and we'll action it within 30 days.",
  },
  {
    title: "Contact",
    body: "Questions about this policy? Reach out at hello@ambrscale.com or by post to AmbrScale, 221B Creative District, Indiranagar, Bengaluru 560038, India.",
  },
];

export const metadata = {
  title: "Privacy Policy — AmbrScale",
  description: "How AmbrScale collects, uses and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        index="06"
        eyebrow="Legal"
        title="Privacy"
        highlight="Policy"
        description="The short, honest version of how we handle your data — what we collect, why, and the rights you always keep."
        image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
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
            Ask us anything{" "}
            <span className={circleArrow}>
              <FiArrowUpRight />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}