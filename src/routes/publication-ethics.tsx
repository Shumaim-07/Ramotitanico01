import { createFileRoute } from "@tanstack/react-router";
import { ShieldAlert, UserCheck, GitPullRequestArrow, Undo2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

export const Route = createFileRoute("/publication-ethics")({
  head: () => ({
    meta: [
      { title: "Publication Ethics — Ramotitanico" },
      { name: "description", content: "The Ramotitanico Journal's publication ethics policy on authorship, plagiarism, conflicts of interest, and retraction, aligned with COPE guidelines." },
      { property: "og:title", content: "Publication Ethics — Ramotitanico" },
      { property: "og:description", content: "Authorship criteria, originality checks, conflict-of-interest disclosure, and retraction policy." },
      { property: "og:url", content: "/publication-ethics" },
    ],
    links: [{ rel: "canonical", href: "/publication-ethics" }],
  }),
  component: PublicationEthicsPage,
});

const policies = [
  {
    icon: UserCheck,
    title: "Authorship",
    desc: "Authorship is limited to those who made a substantial contribution to conception, analysis, or drafting, and who approve the final manuscript. All contributors must be named; guest and ghost authorship are prohibited.",
  },
  {
    icon: ShieldAlert,
    title: "Originality & Plagiarism",
    desc: "All submissions are screened for originality. Manuscripts found to contain plagiarised content, duplicate publication, or falsified data are rejected, and may result in an editorial notice to the author's institution.",
  },
  {
    icon: GitPullRequestArrow,
    title: "Conflicts of Interest",
    desc: "Authors, reviewers, and editors must disclose any financial, institutional, or personal relationships that could be perceived to influence the work. Undisclosed conflicts may lead to reconsideration of a decision.",
  },
  {
    icon: Undo2,
    title: "Corrections & Retractions",
    desc: "Errors identified after publication are corrected via a published erratum. Serious violations of research or publication integrity may result in formal retraction, following COPE retraction guidelines.",
  },
];

function PublicationEthicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Publication Ethics"
        title="Integrity is non-negotiable."
        description="The journal follows the Committee on Publication Ethics (COPE) core practices for authorship, originality, conflicts of interest, and corrections."
      />

      <section className="container-page py-20">
        <SectionTitle
          eyebrow="Our Standards"
          title="Four principles that guide every decision."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {policies.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
            >
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-primary text-primary-foreground">
                <p.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-primary">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </article>
          ))}
        </div>

        <p className="mt-14 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Suspected violations of this policy can be reported in confidence to the editorial
          office. All reports are reviewed by the Editor-in-Chief in line with COPE flowcharts for
          handling allegations of misconduct.
        </p>
      </section>
    </>
  );
}
