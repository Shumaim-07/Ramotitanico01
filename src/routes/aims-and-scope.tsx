import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Leaf, Lightbulb, Scale, Users2, Globe2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

export const Route = createFileRoute("/aims-and-scope")({
  head: () => ({
    meta: [
      { title: "Aims and Scope — Ramotitanico" },
      { name: "description", content: "Aims and scope of the Ramotitanico Journal: subject areas, article types, and editorial priorities." },
      { property: "og:title", content: "Aims and Scope — Ramotitanico" },
      { property: "og:description", content: "The journal's core aims and the subject areas it welcomes for submission." },
      { property: "og:url", content: "/aims-and-scope" },
    ],
    links: [{ rel: "canonical", href: "/aims-and-scope" }],
  }),
  component: AimsScopePage,
});

const scopeAreas = [
  { icon: GraduationCap, title: "Education Systems & Policy", desc: "Curriculum reform, governance, access, and comparative education policy." },
  { icon: Leaf, title: "Sustainability & Environment", desc: "Sustainability integration in curricula, campus practice, and community development." },
  { icon: Lightbulb, title: "Innovation & Technology", desc: "Digital pedagogy, EdTech adoption, and innovation management in academic institutions." },
  { icon: Users2, title: "Equity & Inclusion", desc: "Access, representation, and inclusive practice across educational and research settings." },
  { icon: Scale, title: "Research Methodology & Ethics", desc: "Methodological innovation, mixed-methods design, and research integrity." },
  { icon: Globe2, title: "Comparative & Cross-Cultural Studies", desc: "Cross-national and cross-cultural analysis of education and development outcomes." },
];

function AimsScopePage() {
  return (
    <>
      <PageHero
        eyebrow="Aims and Scope"
        title="What the journal publishes, and why."
        description="The journal aims to advance rigorous, policy-relevant scholarship that helps education systems, institutions, and communities respond to the challenges of sustainability and innovation."
      />

      <section className="container-page py-20">
        <SectionTitle
          eyebrow="Subject Areas"
          title="Six core areas of interest."
          description="Submissions are welcome across, and at the intersections of, the following areas. Interdisciplinary and comparative work is especially encouraged."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scopeAreas.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            The journal accepts original research articles, systematic and narrative reviews,
            case studies, and short policy commentaries. Purely descriptive or promotional
            submissions, and work without a clear methodological or analytical contribution, fall
            outside the journal's scope.
          </p>
        </div>
      </section>
    </>
  );
}
