import { createFileRoute } from "@tanstack/react-router";
import { Building2, Wrench, Leaf, Shield, Layers, BarChart3 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

export const Route = createFileRoute("/construction")({
  head: () => ({
    meta: [
      { title: "Construction Services — Ramotitanico" },
      { name: "description", content: "Construction and infrastructure consulting services including project planning, sustainable building advisory, compliance management, and development oversight." },
      { property: "og:title", content: "Construction Services — Ramotitanico" },
      { property: "og:description", content: "Ramotitanico's construction sector services: project planning, sustainable building, infrastructure development, compliance, oversight, and green certification." },
      { property: "og:url", content: "/construction" },
    ],
    links: [{ rel: "canonical", href: "/construction" }],
  }),
  component: ConstructionPage,
});

const services = [
  {
    icon: Building2,
    title: "Project Planning & Feasibility",
    desc: "Rigorous pre-construction analysis including site assessment, stakeholder mapping, budget modelling, and risk evaluation. We help clients make informed investment decisions before breaking ground.",
  },
  {
    icon: Leaf,
    title: "Sustainable Construction Advisory",
    desc: "Strategic guidance on low-carbon construction methods, circular material sourcing, and net-zero building design. We translate sustainability commitments into practical specification and procurement decisions.",
  },
  {
    icon: Layers,
    title: "Infrastructure Development Consulting",
    desc: "Advisory services across transport, utilities, and public works infrastructure. Our specialists support governments and developers from concept design through to commissioning and handover.",
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
        eyebrow="Construction Services"
        title="Building resilient infrastructure with global expertise."
        description="Our construction specialists advise on complex projects from initial feasibility to final handover — integrating sustainability, compliance, and performance at every stage."
      />

      <section className="container-page py-20">
        <SectionTitle
          eyebrow="What We Offer"
          title="Six construction services. Built on solid expertise."
          description="Each service draws on a team of engineers, sustainability specialists, and project managers with international experience across public and private sector schemes."
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
            Infrastructure that serves communities for generations.
          </h2>
          <div className="mt-6 space-y-4 text-primary-foreground/80 leading-relaxed">
            <p>
              Ramotitanico has advised on construction and infrastructure projects across Europe,
              Africa, and Asia — from public school renovations and hospital builds to large-scale
              transport infrastructure. Our approach integrates technical rigour with community
              sensitivity and long-term sustainability planning.
            </p>
            <p>
              We believe that built environments shape social outcomes. Every project we advise on
              carries a responsibility to the people who will use, maintain, and inherit it — a
              responsibility we take seriously at every stage of the project lifecycle.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
