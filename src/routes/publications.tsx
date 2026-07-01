import { createFileRoute } from "@tanstack/react-router";
import { Download, BookOpen, FileText, Library, Mail } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import pubs from "@/assets/publications.jpg";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Ramotitanico" },
      { name: "description", content: "Conference proceedings, edited books, research reports, and the Ramotitanico academic newsletter." },
      { property: "og:title", content: "Publications — Ramotitanico" },
      { property: "og:description", content: "Indexed proceedings, edited volumes, and research reports from Ramotitanico's global network." },
      { property: "og:url", content: "/publications" },
    ],
    links: [{ rel: "canonical", href: "/publications" }],
  }),
  component: PublicationsPage,
});

const items = [
  {
    icon: Library,
    type: "Conference Proceedings",
    title: "Education, Research & Sustainable Innovation — Proceedings 2025",
    desc: "Selected peer-reviewed papers from the 2025 Braga conference, indexed in major academic databases.",
    meta: "PDF · 412 pages · 2025",
  },
  {
    icon: BookOpen,
    type: "Edited Book",
    title: "Comparative Perspectives on Higher Education Reform",
    desc: "An edited volume examining institutional reform across European, Asian, and African universities.",
    meta: "Hardcover · 286 pages · 2024",
  },
  {
    icon: FileText,
    type: "Research Report",
    title: "Digital Pedagogy in Post-Pandemic Universities",
    desc: "A multi-country study of how higher education has integrated digital practice into curricula.",
    meta: "PDF · 88 pages · 2024",
  },
  {
    icon: Mail,
    type: "Academic Newsletter",
    title: "Ramotitanico Quarterly",
    desc: "A curated briefing on calls for papers, fellowships, partnership opportunities, and new publications.",
    meta: "Email · Quarterly",
  },
];

function PublicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Publications"
        title="Scholarship made discoverable."
        description="Proceedings, edited volumes, research reports, and an active academic newsletter — disseminated through our international publishing network."
      />

      <section className="container-page py-20">
        <div className="mb-12 overflow-hidden rounded-2xl border border-border">
          <img
            src={pubs}
            alt="Stack of academic books on a wooden desk with a brass reading lamp"
            width={1400}
            height={900}
            loading="lazy"
            className="aspect-[21/9] w-full object-cover"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((it) => (
            <article
              key={it.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <it.icon className="h-6 w-6" />
                </span>
                <span className="rounded-full bg-accent-soft px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
                  {it.type}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-primary">{it.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{it.desc}</p>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                <span className="text-xs text-muted-foreground">{it.meta}</span>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
                >
                  <Download className="h-3.5 w-3.5" />
                  {it.type === "Academic Newsletter" ? "Subscribe" : "Download"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
