import { createFileRoute } from "@tanstack/react-router";
import { Sprout, Leaf, FlaskConical, TrendingUp, Globe2, Cpu } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

export const Route = createFileRoute("/agriculture")({
  head: () => ({
    meta: [
      { title: "Agriculture & Agritech — Ramotitanico" },
      { name: "description", content: "Agricultural consultancy, agritech implementation, sustainable farming practices, and research support — helping Portugal's agricultural sector grow and adapt." },
      { property: "og:title", content: "Agriculture & Agritech — Ramotitanico" },
      { property: "og:description", content: "Ramotitanico supports producers, cooperatives, and agribusinesses through expert consultancy, agritech solutions, sustainable farming practices, and market access facilitation." },
      { property: "og:url", content: "/agriculture" },
    ],
    links: [{ rel: "canonical", href: "/agriculture" }],
  }),
  component: AgriculturePage,
});

const services = [
  {
    icon: Sprout,
    title: "Agribusiness Consulting",
    desc: "Strategic advisory for agricultural enterprises at every stage — from smallholder cooperative formation to large-scale agri-industrial venture structuring. We advise on business models, value chain integration, and investment strategy.",
  },
  {
    icon: Leaf,
    title: "Sustainable Farming Practices",
    desc: "Advisory on agroecological transitions, regenerative agriculture, and climate-resilient farming systems. We help producers adopt practices that improve long-term soil health, water efficiency, and biodiversity.",
  },
  {
    icon: FlaskConical,
    title: "Crop Management & Research",
    desc: "Applied research support and agronomic advisory covering crop selection, rotation design, pest and disease management, and yield optimisation. We connect practitioners with cutting-edge research outputs.",
  },
  {
    icon: TrendingUp,
    title: "Agricultural Policy Advisory",
    desc: "Policy review, subsidy reform analysis, and regulatory consulting for ministries and international development agencies. Our advisors engage with rural development policy, food security frameworks, and trade policy.",
  },
  {
    icon: Globe2,
    title: "Market Access & Trade Facilitation",
    desc: "Support for producers, cooperatives, and exporters seeking access to regional and international markets. We advise on standards compliance, certification, buyer relationship development, and export logistics.",
  },
  {
    icon: Cpu,
    title: "Smart Agriculture & Technology",
    desc: "Advisory on precision agriculture technologies, remote sensing, IoT sensor networks, and data-driven farm management. We help agribusinesses identify, pilot, and scale digital tools appropriate to their operating context.",
  },
];

function AgriculturePage() {
  return (
    <>
      <PageHero
        eyebrow="Agriculture & Agritech"
        title="Cultivating sustainable food systems for a changing world."
        description="We work with producers, cooperatives, and agribusinesses to strengthen Portugal's agricultural sector through expert consultancy, technology-driven solutions, and sustainable farming practices that boost productivity and protect the land."
      />

      <section className="container-page py-20">
        <SectionTitle
          eyebrow="What We Offer"
          title="Six agriculture services. Rooted in real-world practice."
          description="Each service is delivered by agronomists, policy specialists, and business advisors with experience across diverse agroecological zones, farming systems, and market contexts."
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
            Agriculture that nourishes people and protects the planet.
          </h2>
          <div className="mt-6 space-y-4 text-primary-foreground/80 leading-relaxed">
            <p>
              Ramotitanico has supported agricultural development programmes across sub-Saharan
              Africa, South Asia, and Southern Europe — advising on food system resilience,
              smallholder inclusion, and the scaling of sustainable practices under diverse
              climate and market conditions.
            </p>
            <p>
              We approach agriculture as a discipline where science, culture, and economics
              intersect. The most durable solutions combine rigorous technical knowledge with
              deep respect for local farming traditions and the ecological systems on which all
              food production ultimately depends.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
