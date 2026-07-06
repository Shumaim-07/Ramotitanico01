import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, FileSearch, Landmark, ShieldCheck, Layers3, Globe2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

export const Route = createFileRoute("/general")({
  head: () => ({
    meta: [
      { title: "Publication Support — Ramotitanico" },
      { name: "description", content: "Research and publication support services including manuscript development, editorial review, journal matching, indexing, and dissemination for scholars worldwide." },
      { property: "og:title", content: "Publication Support — Ramotitanico" },
      { property: "og:description", content: "Ramotitanico's publication support services: manuscript guidance, peer review coordination, journal matching, indexing, dissemination, and proceedings publishing." },
      { property: "og:url", content: "/general" },
    ],
    links: [{ rel: "canonical", href: "/general" }],
  }),
  component: GeneralPage,
});

const services = [
  {
    icon: FileSearch,
    title: "Manuscript Development & Methodological Guidance",
    desc: "Structured feedback on research design, data analysis, and argumentation. Our reviewers help authors strengthen manuscripts before submission, improving clarity and methodological rigour.",
  },
  {
    icon: ShieldCheck,
    title: "Editorial Review & Peer Review Coordination",
    desc: "Independent editorial assessment and coordination of double-blind peer review, giving authors constructive, timely feedback aligned with journal and conference standards.",
  },
  {
    icon: Landmark,
    title: "Journal & Publisher Matching",
    desc: "Guidance on selecting reputable journals, edited volumes, and publishers suited to a manuscript's discipline, scope, and target readership — avoiding predatory or mismatched outlets.",
  },
  {
    icon: Globe2,
    title: "Indexing & Dissemination",
    desc: "Support navigating indexing requirements across major academic databases, and strategies for wider dissemination of published work to relevant scholarly and policy audiences.",
  },
  {
    icon: Layers3,
    title: "Conference Proceedings Publishing",
    desc: "End-to-end coordination of conference proceedings, from abstract compilation through formatting, ISBN/DOI registration, and final indexed publication.",
  },
  {
    icon: BookOpen,
    title: "Research Ethics & Plagiarism Compliance",
    desc: "Screening and advisory support on research integrity, authorship standards, and originality checks to ensure submissions meet international publication ethics requirements.",
  },
];

function GeneralPage() {
  return (
    <>
      <PageHero
        eyebrow="General Services"
        title="Publication support for researchers who deserve to be read."
        description="From first draft to indexed publication, our editorial specialists help scholars navigate the path to credible, discoverable, and properly attributed academic work."
      />

      <section className="container-page py-20">
        <SectionTitle
          eyebrow="What We Offer"
          title="Six publication services. One goal: getting your research seen."
          description="Each service is delivered by editorial practitioners with direct experience in academic publishing, peer review, and scholarly dissemination."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="flex items-start gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <s.icon className="h-7 w-7" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-semibold text-primary">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-page max-w-4xl">
          <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Our Impact
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
            Eighty-five publications and counting.
          </h2>
          <div className="mt-6 space-y-4 text-primary-foreground/80 leading-relaxed">
            <p>
              Ramotitanico has supported researchers across dozens of disciplines in bringing
              their work to reputable, indexed publication — reviewing manuscripts, coordinating
              peer review, and matching authors with the journals and proceedings best suited to
              their contribution.
            </p>
            <p>
              We believe rigorous scholarship deserves a credible platform, and that the path from
              draft to dissemination should be guided by editorial expertise rather than left to
              chance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
