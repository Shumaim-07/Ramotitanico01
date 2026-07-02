import { createFileRoute } from "@tanstack/react-router";
import { Building2, Wrench, Leaf, Shield, Layers, BarChart3 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

export const Route = createFileRoute("/construction")({
  head: () => ({
    meta: [
      { title: "Construction & Development — Ramotitanico" },
      { name: "description", content: "Residential, commercial, and infrastructure construction across Portugal — from project planning and sustainable building to full delivery and green certification." },
      { property: "og:title", content: "Construction & Development — Ramotitanico" },
      { property: "og:description", content: "Ramotitanico plans, manages, and delivers residential, commercial, and infrastructure projects across Portugal with a commitment to sustainability and modern building standards." },
      { property: "og:url", content: "/construction" },
    ],
    links: [{ rel: "canonical", href: "/construction" }],
  }),
  component: ConstructionPage,
});

const services = [
  {
    icon: Building2,
    title: "Project Planning & Development",
    desc: "We take projects from concept to groundbreaking. Site assessment, planning permissions, budget modelling, stakeholder coordination — comprehensive pre-construction work that de-risks development before any building begins.",
  },
  {
    icon: Leaf,
    title: "Sustainable Building",
    desc: "Low-carbon construction methods, circular material sourcing, and energy-efficient design are embedded in every project we deliver — not treated as optional extras. We build sustainably because it is the right way to build.",
  },
  {
    icon: Layers,
    title: "Infrastructure Development",
    desc: "We deliver transport, utilities, and public works infrastructure from concept through to commissioning. Our teams manage complex multi-stakeholder schemes on behalf of governments and developers across Portugal.",
  },
  {
    icon: Shield,
    title: "Building Standards & Compliance",
    desc: "Interpretation and application of national and international construction codes, environmental regulations, and safety standards. We protect clients through proactive compliance management at every project stage.",
  },
  {
    icon: Wrench,
    title: "Project Management & Oversight",
    desc: "Independent project management and owner's representative services. We provide schedule control, cost management, contractor coordination, and quality assurance on behalf of project owners.",
  },
  {
    icon: BarChart3,
    title: "Green Building Certification",
    desc: "End-to-end support for LEED, BREEAM, and equivalent certification pathways. We audit design documents, coordinate evidence gathering, and liaise with certification bodies to achieve target ratings.",
  },
];

function ConstructionPage() {
  return (
    <>
      <PageHero
        eyebrow="Construction & Development"
        title="We plan, manage, and build."
        description="From residential homes to commercial premises and public infrastructure, Ramotitanico delivers construction projects across Portugal with sustainability, compliance, and quality built in at every stage."
      />

      <section className="container-page py-20">
        <SectionTitle
          eyebrow="What We Deliver"
          title="Six construction capabilities. One integrated team."
          description="Our engineers, sustainability specialists, and project managers work together across every project phase — from feasibility through to handover — on public and private sector schemes across Portugal."
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
            Buildings and infrastructure that serve communities for generations.
          </h2>
          <div className="mt-6 space-y-4 text-primary-foreground/80 leading-relaxed">
            <p>
              Ramotitanico has planned, managed, and delivered construction and infrastructure
              projects across Portugal — from residential developments and commercial premises to
              public works and infrastructure upgrades. Our approach integrates technical rigour
              with community sensitivity and long-term sustainability planning.
            </p>
            <p>
              We believe that built environments shape social outcomes. Every project we deliver
              carries a responsibility to the people who will use, maintain, and inherit it — a
              responsibility we take seriously at every stage of the project lifecycle.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
