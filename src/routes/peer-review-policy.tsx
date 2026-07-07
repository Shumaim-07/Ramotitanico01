import { createFileRoute } from "@tanstack/react-router";
import { Send, ShieldCheck, Users2, FileCheck2, MessageSquare, Award } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

export const Route = createFileRoute("/peer-review-policy")({
  head: () => ({
    meta: [
      { title: "Peer Review Policy — Ramotitanico" },
      { name: "description", content: "The Ramotitanico Journal's double-blind peer review process, from initial screening to final decision." },
      { property: "og:title", content: "Peer Review Policy — Ramotitanico" },
      { property: "og:description", content: "How manuscripts are reviewed: editorial screening, double-blind review, and decision timelines." },
      { property: "og:url", content: "/peer-review-policy" },
    ],
    links: [{ rel: "canonical", href: "/peer-review-policy" }],
  }),
  component: PeerReviewPage,
});

const steps = [
  { icon: Send, title: "Submission & Screening", desc: "Editorial team checks scope fit, formatting, and originality before assigning reviewers.", duration: "1–2 weeks" },
  { icon: Users2, title: "Reviewer Assignment", desc: "At least two independent reviewers with relevant expertise are assigned under double-blind conditions.", duration: "1 week" },
  { icon: ShieldCheck, title: "Double-Blind Review", desc: "Reviewers assess originality, methodology, and contribution without knowledge of author identity.", duration: "4–6 weeks" },
  { icon: MessageSquare, title: "Author Response", desc: "Authors receive consolidated reviewer feedback and submit a revised manuscript with a response letter.", duration: "2–4 weeks" },
  { icon: FileCheck2, title: "Editorial Decision", desc: "The handling editor reaches a final decision: accept, minor revisions, major revisions, or reject.", duration: "1–2 weeks" },
  { icon: Award, title: "Production", desc: "Accepted manuscripts proceed to copyediting, typesetting, and assignment to an upcoming issue.", duration: "2–3 weeks" },
];

function PeerReviewPage() {
  return (
    <>
      <PageHero
        eyebrow="Peer Review Policy"
        title="Rigorous, double-blind, and transparent."
        description="Every submission that passes initial screening undergoes double-blind peer review by at least two independent experts in the relevant field."
      />

      <section className="container-page py-20">
        <SectionTitle
          eyebrow="Process"
          title="From submission to decision."
          description="Typical timelines are shown for each stage; complex manuscripts or reviewer availability may extend these slightly."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <article
              key={s.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <s.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent-foreground/80">
                {s.duration}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
