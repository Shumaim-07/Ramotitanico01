import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Globe2, CalendarClock, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

export const Route = createFileRoute("/about-the-journal")({
  head: () => ({
    meta: [
      { title: "About the Journal — Ramotitanico" },
      { name: "description", content: "About the Ramotitanico Journal of Education, Research & Sustainable Innovation — scope, publisher, frequency, and licensing." },
      { property: "og:title", content: "About the Journal — Ramotitanico" },
      { property: "og:description", content: "An open-access, peer-reviewed journal publishing original research in education, sustainability, and innovation." },
      { property: "og:url", content: "/about-the-journal" },
    ],
    links: [{ rel: "canonical", href: "/about-the-journal" }],
  }),
  component: AboutJournalPage,
});

const facts = [
  { icon: Globe2, label: "Access", value: "Fully open access, no reader fees" },
  { icon: CalendarClock, label: "Frequency", value: "Two issues per year" },
  { icon: ShieldCheck, label: "Review", value: "Double-blind peer review" },
  { icon: BookOpen, label: "Publisher", value: "Ramotitanico, Braga, Portugal" },
];

function AboutJournalPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Journal"
        title="Ramotitanico Journal of Education, Research & Sustainable Innovation."
        description="A peer-reviewed, open-access journal publishing original research at the intersection of education, sustainability, and innovation studies."
      />

      <section className="container-page py-20">
        <SectionTitle
          eyebrow="Overview"
          title="Scholarship that connects theory to practice."
          description="The journal publishes empirical studies, systematic reviews, and policy-oriented analysis from scholars and practitioners working across education systems, sustainability research, and applied innovation — with a particular interest in comparative and cross-cultural perspectives."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div
              key={f.label}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]"
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                <f.icon className="h-6 w-6" />
              </span>
              <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent-foreground/80">
                {f.label}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{f.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            All articles are published under a Creative Commons Attribution (CC BY 4.0) licence,
            allowing free reuse with appropriate credit. Authors retain copyright of their work.
          </p>
          <p>
            The journal is indexed across major academic databases and abides by the editorial
            standards of the Committee on Publication Ethics (COPE). Editorial decisions are made
            independently of any commercial or institutional interest.
          </p>
        </div>
      </section>
    </>
  );
}
