import { createFileRoute, Link } from "@tanstack/react-router";
import { Archive } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

export const Route = createFileRoute("/archives")({
  head: () => ({
    meta: [
      { title: "Archives — Ramotitanico" },
      { name: "description", content: "Past volumes and issues of the Ramotitanico Journal of Education, Research & Sustainable Innovation." },
      { property: "og:title", content: "Archives — Ramotitanico" },
      { property: "og:description", content: "Browse past issues of the journal by volume and year." },
      { property: "og:url", content: "/archives" },
    ],
    links: [{ rel: "canonical", href: "/archives" }],
  }),
  component: ArchivesPage,
});

const issues = [
  { volume: "Volume 3, Issue 1", year: "2026", articles: 5 },
  { volume: "Volume 2, Issue 2", year: "2025", articles: 6 },
  { volume: "Volume 2, Issue 1", year: "2025", articles: 5 },
  { volume: "Volume 1, Issue 2", year: "2024", articles: 4 },
  { volume: "Volume 1, Issue 1", year: "2024", articles: 4 },
];

function ArchivesPage() {
  return (
    <>
      <PageHero
        eyebrow="Archives"
        title="Every Issue, Since Volume 1."
        description="Browse past issues of the Ramotitanico Journal of Education, Research & Sustainable Innovation."
      />

      <section className="container-page py-20">
        <SectionTitle eyebrow="Past Issues" title="Issue Archive" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {issues.map((iss) => (
            <div
              key={iss.volume}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Archive className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-primary">{iss.volume}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {iss.year} · {iss.articles} articles
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          Looking for the latest issue?{" "}
          <Link to="/current-issue" className="font-medium text-primary underline underline-offset-4">
            View the current issue
          </Link>
          .
        </p>
      </section>
    </>
  );
}
