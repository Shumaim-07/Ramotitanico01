import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Archive,
  ArrowRight,
  BookOpen,
  FileSearch,
  FileText,
  FileUp,
  Globe2,
  Landmark,
  Layers3,
  Newspaper,
  Scale,
  Send,
  ShieldCheck,
  Target,
  Users2,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Publication Support — Ramotitanico" },
      { name: "description", content: "Research and publication support services including manuscript development, editorial review, journal matching, indexing, and dissemination for scholars worldwide." },
      { property: "og:title", content: "Publication Support — Ramotitanico" },
      { property: "og:description", content: "Ramotitanico's publication support services: manuscript guidance, peer review coordination, journal matching, indexing, dissemination, and proceedings publishing." },
      { property: "og:url", content: "/journal" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: JournalPage,
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

const journalPages = [
  {
    to: "/about-the-journal",
    label: "About the Journal",
    icon: BookOpen,
    desc: "Editorial mission, publication policies, and journal overview — the foundation of our scholarly publishing standards and commitment to quality research."
  },
  {
    to: "/aims-and-scope",
    label: "Aims and Scope",
    icon: Target,
    desc: "Disciplinary focus, thematic priorities, and the types of contributions we welcome. Find out if your research aligns with our editorial vision."
  },
  {
    to: "/editorial-board",
    label: "Editorial Board",
    icon: Users2,
    desc: "Meet our distinguished editors and reviewers — leading experts who ensure rigorous peer review and maintain the journal's academic integrity."
  },
  {
    to: "/author-guidelines",
    label: "Author Guidelines",
    icon: FileText,
    desc: "Submission requirements, formatting standards, and step-by-step instructions — everything you need to prepare your manuscript for submission."
  },
  {
    to: "/peer-review-policy",
    label: "Peer Review Policy",
    icon: ShieldCheck,
    desc: "Our double-blind review process, evaluation criteria, and timelines — ensuring fair, constructive, and timely assessment of all submissions."
  },
  {
    to: "/publication-ethics",
    label: "Publication Ethics",
    icon: Scale,
    desc: "Authorship standards, originality requirements, and research integrity guidelines — upholding the highest ethical practices in scholarly publishing."
  },
  {
    to: "/current-issue",
    label: "Current Issue",
    icon: Newspaper,
    desc: "The latest published research — explore cutting-edge scholarship and recent contributions from the global academic community."
  },
  {
    to: "/archives",
    label: "Archives",
    icon: Archive,
    desc: "Past issues and historical content — browse our complete collection of published articles spanning multiple years and disciplines."
  },
  {
    to: "/call-for-papers",
    label: "Call for Papers",
    icon: Send,
    desc: "Upcoming themes, submission deadlines, and special issues — opportunities to contribute your research to focused scholarly conversations."
  },
  {
    to: "/submit-manuscript",
    label: "Submit Manuscript",
    icon: FileUp,
    desc: "Ready to publish? Submit your manuscript through our secure online system and begin the peer review process today."
  },
] as const;

function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal Services"
        title="Academia Humanities Review"
        description="From first draft to indexed publication, our editorial specialists help scholars navigate the path to credible, discoverable, and properly attributed academic work."
      />

      {/* <section className="container-page py-20">
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
      </section> */}

      <div className="bg-surface">
        <section className="container-page py-20">
          <SectionTitle
            eyebrow="Journal Resources"
            title="Everything an author needs, in one place."
            description="Policies, guidelines, and current scholarship — organised for authors, reviewers, and readers of the journal."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {journalPages.map((j) => (
              <Link
                key={j.to}
                to={j.to}
                className="group relative flex flex-col gap-2 rounded-xl border border-border bg-card px-6 py-5 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <j.icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1 font-display text-base font-semibold text-primary">{j.label}</span>
                </div>
                <p className="pl-15 text-xs leading-relaxed text-muted-foreground">
                  {j.desc}
                </p>
                {/* ✨ Arrow moved to bottom-right corner */}
                <ArrowRight className="absolute bottom-4 right-4 h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </section>
      </div>

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
