import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

export const Route = createFileRoute("/editorial-board")({
  head: () => ({
    meta: [
      { title: "Editorial Board — Ramotitanico" },
      { name: "description", content: "The editorial board of the Ramotitanico Journal: Editor-in-Chief, Associate Editors, and Editorial Board members." },
      { property: "og:title", content: "Editorial Board — Ramotitanico" },
      { property: "og:description", content: "Meet the editors overseeing peer review and editorial decisions for the Ramotitanico Journal." },
      { property: "og:url", content: "/editorial-board" },
    ],
    links: [{ rel: "canonical", href: "/editorial-board" }],
  }),
  component: EditorialBoardPage,
});

interface Editor {
  initials: string;
  name: string;
  role: string;
  affiliation: string;
}

const chief: Editor = {
  initials: "EIC",
  name: "Editor-in-Chief",
  role: "Ramotitanico, Braga",
  affiliation: "Oversees editorial strategy, final decisions, and journal policy.",
};

const associates: Editor[] = [
  { initials: "AE1", name: "Associate Editor", role: "Education Policy", affiliation: "Handles submissions in comparative education and governance." },
  { initials: "AE2", name: "Associate Editor", role: "Sustainability Studies", affiliation: "Handles submissions in sustainability and environmental education." },
  { initials: "AE3", name: "Associate Editor", role: "Research Methodology", affiliation: "Handles submissions on methodology and research design." },
];

const board: Editor[] = [
  { initials: "EB1", name: "Board Member", role: "Higher Education, Europe", affiliation: "Comparative higher education reform." },
  { initials: "EB2", name: "Board Member", role: "EdTech, South Asia", affiliation: "Digital pedagogy and innovation." },
  { initials: "EB3", name: "Board Member", role: "Sustainability, Africa", affiliation: "Sustainable development in education." },
  { initials: "EB4", name: "Board Member", role: "Policy, Americas", affiliation: "Education policy and equity." },
];

function EditorCard({ e, featured = false }: { e: Editor; featured?: boolean }) {
  return (
    <article
      className={`rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)] ${featured ? "md:p-8" : ""}`}
    >
      <div
        className={`grid place-items-center rounded-xl bg-primary text-primary-foreground font-display font-semibold ${featured ? "h-20 w-20 text-2xl" : "h-16 w-16 text-xl"}`}
      >
        {e.initials}
      </div>
      <h3 className={`mt-5 font-display font-semibold text-primary ${featured ? "text-2xl" : "text-lg"}`}>
        {e.name}
      </h3>
      <div className="mt-1 text-xs font-medium uppercase tracking-wider text-accent-foreground/80">{e.role}</div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.affiliation}</p>
    </article>
  );
}

function EditorialBoardPage() {
  return (
    <>
      <PageHero
        eyebrow="Editorial Board"
        title="The editors behind every decision."
        description="Editorial decisions are made by an international board of scholars and practitioners with direct expertise across the journal's subject areas."
      />

      <section className="container-page py-16">
        <SectionTitle eyebrow="Leadership" title="Editor-in-Chief" />
        <div className="mt-10 max-w-xl">
          <EditorCard e={chief} featured />
        </div>
      </section>

      <section className="container-page py-16">
        <SectionTitle eyebrow="Section Editors" title="Associate Editors" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {associates.map((e) => (
            <EditorCard key={e.initials} e={e} />
          ))}
        </div>
      </section>

      <div className="bg-surface">
        <section className="container-page py-16">
          <SectionTitle eyebrow="International Board" title="Editorial Board Members" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {board.map((e) => (
              <EditorCard key={e.initials} e={e} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
