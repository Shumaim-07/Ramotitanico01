import { createFileRoute } from "@tanstack/react-router";
import { Truck, Map, Navigation, Zap, Globe2, BarChart3 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

export const Route = createFileRoute("/transport")({
  head: () => ({
    meta: [
      { title: "Transport Services — Ramotitanico" },
      { name: "description", content: "Transport and logistics consulting services including infrastructure planning, fleet management, multimodal integration, and smart mobility solutions." },
      { property: "og:title", content: "Transport Services — Ramotitanico" },
      { property: "og:description", content: "Ramotitanico's transport sector services: logistics advisory, infrastructure planning, fleet management, multimodal integration, regulatory consulting, and smart mobility." },
      { property: "og:url", content: "/transport" },
    ],
    links: [{ rel: "canonical", href: "/transport" }],
  }),
  component: TransportPage,
});

const services = [
  {
    icon: Truck,
    title: "Logistics & Supply Chain Advisory",
    desc: "End-to-end supply chain analysis and optimisation for public bodies and private operators. We identify bottlenecks, model alternative configurations, and develop implementation roadmaps that reduce cost and improve resilience.",
  },
  {
    icon: Map,
    title: "Transport Infrastructure Planning",
    desc: "Strategic planning for roads, rail, ports, and urban transit networks. Our planners integrate demand modelling, environmental assessment, and stakeholder engagement into coherent, fundable infrastructure strategies.",
  },
  {
    icon: Navigation,
    title: "Fleet Management Solutions",
    desc: "Advisory on fleet procurement, maintenance strategy, electrification planning, and telematics integration. We help operators reduce operating costs while meeting regulatory and sustainability targets.",
  },
  {
    icon: Globe2,
    title: "Multimodal Transport Integration",
    desc: "Frameworks for seamless passenger and freight movement across modes. We design interchange infrastructure, ticketing integration strategies, and governance models for multimodal authorities.",
  },
  {
    icon: BarChart3,
    title: "Regulatory & Policy Consulting",
    desc: "Policy review, regulatory impact assessment, and reform design for transport authorities. Our consultants support legislative drafting, licensing reform, and alignment with international transport conventions.",
  },
  {
    icon: Zap,
    title: "Smart Mobility Solutions",
    desc: "Advisory on MaaS platforms, autonomous vehicle frameworks, intelligent transport systems, and data-driven mobility governance. We help public and private clients navigate the transition to connected, digital transport.",
  },
];

function TransportPage() {
  return (
    <>
      <PageHero
        eyebrow="Transport Services"
        title="Connecting people and goods with smarter mobility."
        description="Our transport specialists advise governments, operators, and investors on infrastructure, logistics, and the technologies reshaping how people and freight move across the world."
      />

      <section className="container-page py-20">
        <SectionTitle
          eyebrow="What We Offer"
          title="Six transport services. One integrated perspective."
          description="Each service is delivered by professionals with hands-on experience in transport planning, logistics operations, and mobility policy across multiple geographies and transport modes."
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
            Transport systems that power economic growth.
          </h2>
          <div className="mt-6 space-y-4 text-primary-foreground/80 leading-relaxed">
            <p>
              Ramotitanico has contributed to transport reforms, infrastructure masterplans, and
              logistics strategies across Europe, Africa, and South-East Asia. Our work spans
              urban transit to international freight corridors, always anchored in the practical
              realities of implementation and the needs of end users.
            </p>
            <p>
              We recognise that transport is not just an economic enabler — it is a social
              equaliser. Accessible, affordable, and efficient mobility determines who participates
              in economic life and who is left behind. That conviction shapes every engagement we
              take on.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
