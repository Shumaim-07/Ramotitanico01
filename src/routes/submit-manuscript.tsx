import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

export const Route = createFileRoute("/submit-manuscript")({
  head: () => ({
    meta: [
      { title: "Submit Manuscript — Ramotitanico" },
      { name: "description", content: "How to submit a manuscript to the Ramotitanico Journal of Education, Research & Sustainable Innovation." },
      { property: "og:title", content: "Submit Manuscript — Ramotitanico" },
      { property: "og:description", content: "Manuscript submission requirements and contact details for the editorial office." },
      { property: "og:url", content: "/submit-manuscript" },
    ],
    links: [{ rel: "canonical", href: "/submit-manuscript" }],
  }),
  component: SubmitManuscriptPage,
});

const requirements = [
  "Manuscript prepared per the Author Guidelines",
  "Structured abstract (200–250 words) and 4–6 keywords",
  "Author details on a separate title page (blind manuscript body)",
  "Signed declaration of originality and no conflicts of interest",
];

function SubmitManuscriptPage() {
  return (
    <>
      <PageHero
        eyebrow="Submit Manuscript"
        title="Ready to submit? Here's how."
        description="Manuscripts are submitted directly to the editorial office by email. Please review the requirements below before sending your submission."
      />

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionTitle
              eyebrow="Before You Send"
              title="Submission requirements."
              description="Manuscripts that don't meet these requirements are returned for revision before entering editorial screening."
            />
            <ul className="mt-8 space-y-3">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">
              Full formatting and structure requirements are detailed in the{" "}
              <Link to="/author-guidelines" className="font-medium text-primary underline underline-offset-4">
                Author Guidelines
              </Link>
              .
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <span className="grid h-14 w-14 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Mail className="h-7 w-7" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-primary">Send Your Manuscript</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Email your manuscript and title page as separate attachments, with the subject line
              "Manuscript Submission — [Your Name]".
            </p>
            <a
              href="mailto:info@ramotitanico.com?subject=Manuscript%20Submission"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:brightness-95"
            >
              info@ramotitanico.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
