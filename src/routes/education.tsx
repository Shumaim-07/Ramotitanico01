import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, BookOpen, Monitor, Award, Users2, Globe2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education Services — Ramotitanico" },
      { name: "description", content: "Expert education consulting services including curriculum design, teacher development, e-learning integration, and institutional accreditation support." },
      { property: "og:title", content: "Education Services — Ramotitanico" },
      { property: "og:description", content: "Ramotitanico's education sector services: curriculum design, teacher training, e-learning, policy advisory, accreditation, and student mobility." },
      { property: "og:url", content: "/education" },
    ],
    links: [{ rel: "canonical", href: "/education" }],
  }),
  component: EducationPage,
});

const services = [
  {
    icon: GraduationCap,
    title: "Curriculum Design & Review",
    desc: "Evidence-based curriculum development and programme review for schools, universities, and training institutions. We align learning frameworks with international standards and sector-specific competency models.",
  },
  {
    icon: Users2,
    title: "Teacher Professional Development",
    desc: "Structured capacity-building programmes for educators at all levels. Our workshops, coaching cycles, and certified short courses strengthen pedagogical practice, classroom leadership, and subject mastery.",
  },
  {
    icon: Monitor,
    title: "E-Learning & EdTech Integration",
    desc: "Strategic advisory on digital transformation in education. We guide institutions through LMS selection, blended learning design, and the integration of interactive technologies that enhance student outcomes.",
  },
  {
    icon: BookOpen,
    title: "Educational Policy Advisory",
    desc: "Policy analysis, reform planning, and legislative consultation for ministries and education authorities. Our advisors draw on comparative international research to support evidence-led decision-making.",
  },
  {
    icon: Award,
    title: "Institutional Accreditation Support",
    desc: "End-to-end guidance through national and international accreditation processes. We prepare documentation, conduct internal audits, train quality assurance committees, and liaise with accrediting bodies.",
  },
  {
    icon: Globe2,
    title: "Student Exchange & Mobility Programs",
    desc: "Design and administration of bilateral and multilateral student mobility frameworks. We build structured partnerships that deliver measurable academic, cultural, and professional outcomes for participants.",
  },
];

function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Education Services"
        title="Strengthening education systems from classroom to policy."
        description="Our education specialists partner with institutions, governments, and educators to design programmes that raise standards, widen access, and build lasting capacity."
      />

      <section className="container-page py-20">
        <SectionTitle
          eyebrow="What We Offer"
          title="Six education services. One commitment to excellence."
          description="Each service is delivered by practitioners with direct experience in education reform, institutional management, and international academic cooperation."
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
            Education that travels across borders and generations.
          </h2>
          <div className="mt-6 space-y-4 text-primary-foreground/80 leading-relaxed">
            <p>
              Ramotitanico has supported education reform initiatives spanning four continents,
              working alongside ministries, regional authorities, and individual institutions to
              redesign curricula, strengthen teaching practice, and build quality assurance systems
              that endure beyond the engagement.
            </p>
            <p>
              Our education work is grounded in the belief that rigorous, well-resourced schooling
              is the foundation of every other development goal — and that the professionals who
              deliver it deserve expert, sustained support.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
