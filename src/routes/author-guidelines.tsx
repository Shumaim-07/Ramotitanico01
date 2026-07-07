import { createFileRoute } from "@tanstack/react-router";
import { FileText, CheckCircle2, Ruler, Quote } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

export const Route = createFileRoute("/author-guidelines")({
  head: () => ({
    meta: [
      { title: "Author Guidelines — Ramotitanico" },
      { name: "description", content: "Manuscript preparation and formatting guidelines for authors submitting to the Ramotitanico Journal." },
      { property: "og:title", content: "Author Guidelines — Ramotitanico" },
      { property: "og:description", content: "Formatting, structure, and submission requirements for prospective journal authors." },
      { property: "og:url", content: "/author-guidelines" },
    ],
    links: [{ rel: "canonical", href: "/author-guidelines" }],
  }),
  component: AuthorGuidelinesPage,
});

const checklist = [
  "Manuscript is original and not under review elsewhere",
  "Word count: 5,000–8,000 words (excluding references)",
  "Structured abstract of 200–250 words with 4–6 keywords",
  "APA 7th edition referencing throughout",
  "All tables and figures numbered with captions",
  "Author identifying information removed for blind review",
];

const sections = [
  { icon: FileText, title: "Manuscript Structure", desc: "Title page, structured abstract, introduction, literature review, methodology, findings, discussion, conclusion, and references." },
  { icon: Ruler, title: "Formatting", desc: "12pt Times New Roman, double-spaced, A4 page size, 2.5cm margins, submitted as a single .docx or .pdf file." },
  { icon: Quote, title: "Referencing Style", desc: "APA 7th edition for in-text citations and the reference list. DOIs should be included wherever available." },
  { icon: CheckCircle2, title: "Pre-Submission Checklist", desc: "Confirm the checklist below is complete before submitting through the manuscript submission page." },
];

function AuthorGuidelinesPage() {
  return (
    <>
      <PageHero
        eyebrow="Author Guidelines"
        title="How to prepare your manuscript."
        description="Manuscripts that follow these guidelines move through initial editorial screening more quickly. Please review each section before submission."
      />

      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="bg-surface">
        <section className="container-page py-20">
          <SectionTitle eyebrow="Before You Submit" title="Pre-submission checklist" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
