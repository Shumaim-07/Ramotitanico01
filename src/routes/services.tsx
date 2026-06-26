import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Calendar, Compass, GraduationCap, Globe, Handshake } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Ramotitanico" },
      { name: "description", content: "Educational consultancy, conferences, research support, training, exchange, and international collaboration services." },
      { property: "og:title", content: "Services — Ramotitanico" },
      { property: "og:description", content: "Six interconnected service areas serving universities, researchers, and institutions worldwide." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: GraduationCap,
    title: "Educational Consultancy",
    desc: "Strategic advisory engagements with universities, ministries, and educational foundations. Curriculum review, programme accreditation support, governance reform, and institutional development planning grounded in comparative international practice.",
  },
  {
    icon: Calendar,
    title: "Conference & Event Management",
    desc: "End-to-end orchestration of international academic conferences, symposia, executive seminars, and policy roundtables. We handle scientific programming, peer review, logistics, communications, and post-event proceedings.",
  },
  {
    icon: BookOpen,
    title: "Research Support & Publication Assistance",
    desc: "Methodological consultation, manuscript development, editorial review, and pathways to publication. We assist authors in placing work with reputable indexed journals and edited volumes within our network.",
  },
  {
    icon: Compass,
    title: "Professional Training Programs",
    desc: "Certified short courses and intensive academies for educators, researchers, administrators, and professionals. Topics span pedagogy, research methods, scholarly publishing, leadership, and digital scholarship.",
  },
  {
    icon: Globe,
    title: "Cultural & Academic Exchange Programs",
    desc: "Bilateral and multilateral mobility frameworks connecting students, faculty, and practitioners across institutions. Curated placements, cultural immersion, and structured academic outcomes.",
  },
  {
    icon: Handshake,
    title: "International Collaboration Services",
    desc: "Partnership facilitation between universities, research centres, NGOs, and policy bodies. MoU drafting, joint programme design, consortia formation, and coordination of multi-country research initiatives.",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Six practice areas. One institutional standard."
        description="Each service area is staffed by senior practitioners and supported by our global advisory network."
      />

      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-2">
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
    </>
  );
}
