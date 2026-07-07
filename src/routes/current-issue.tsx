import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

export const Route = createFileRoute("/current-issue")({
  head: () => ({
    meta: [
      { title: "Current Issue — Ramotitanico" },
      { name: "description", content: "Table of contents for the current issue of the Ramotitanico Journal of Education, Research & Sustainable Innovation." },
      { property: "og:title", content: "Current Issue — Ramotitanico" },
      { property: "og:description", content: "Read the latest issue's table of contents." },
      { property: "og:url", content: "/current-issue" },
    ],
    links: [{ rel: "canonical", href: "/current-issue" }],
  }),
  component: CurrentIssuePage,
});

const articles = [
  { title: "Curriculum Reform and Institutional Resistance: A Comparative Study", authors: "A. Santos, M. Ferreira", pages: "1–18" },
  { title: "Sustainability Literacy Among First-Year University Students", authors: "R. Costa", pages: "19–34" },
  { title: "Digital Pedagogy Adoption in Under-Resourced Schools", authors: "P. Almeida, J. Silva", pages: "35–52" },
  { title: "Equity Gaps in Doctoral Supervision: A Cross-Country Analysis", authors: "H. Vasques, T. Coelho", pages: "53–71" },
  { title: "Policy Diffusion in Comparative Education Reform", authors: "L. Mendes", pages: "72–89" },
];

function CurrentIssuePage() {
  return (
    <>
      <PageHero
        eyebrow="Current Issue"
        title="Volume 3, Issue 1 — 2026."
        description="Five peer-reviewed articles on curriculum reform, sustainability literacy, digital pedagogy, and comparative education policy."
      />

      <section className="container-page py-20">
        <SectionTitle eyebrow="Table of Contents" title="In this issue" />
        <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
          {articles.map((a) => (
            <div key={a.title} className="flex items-start gap-4 p-6">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                <FileText className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg font-semibold text-primary">{a.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.authors}</p>
              </div>
              <span className="shrink-0 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                pp. {a.pages}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
