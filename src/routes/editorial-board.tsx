import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";
import { Users2, Globe2, BookOpen, ShieldCheck, UserCheck } from "lucide-react";

export const Route = createFileRoute("/editorial-board")({
  head: () => ({
    meta: [
      { title: "Editorial Board — Academia Humanities Review" },
      { name: "description", content: "The editorial board of Academia Humanities Review: Editor-in-Chief, Managing Editor, Associate Editor, Editorial Board, Advisory Board, and Reviewers' Panel." },
      { property: "og:title", content: "Editorial Board — Academia Humanities Review" },
      { property: "og:description", content: "Meet the editors, board members, and reviewers overseeing peer review and editorial decisions for Academia Humanities Review." },
      { property: "og:url", content: "/editorial-board" },
    ],
    links: [{ rel: "canonical", href: "/editorial-board" }],
  }),
  component: EditorialBoardPage,
});

interface Editor {
  name: string;
  role: string;
  description?: string;
  icon?: React.ElementType;
}

const chiefEditors: Editor[] = [
  { 
    name: "Dr. Rasib Mahmood", 
    role: "Editor-in-Chief",
    description: "Oversees editorial strategy, final decisions, and journal policy."
  },
  { 
    name: "Dr. Huma Ahmed", 
    role: "Managing Editor",
    description: "Manages editorial operations, submissions, and peer review coordination."
  },
];

const associateEditors: Editor[] = [
  { 
    name: "Dr. Inam Ullah", 
    role: "Associate Editor",
    description: "Handles submissions across humanities and interdisciplinary studies."
  },
];

const boardMembers = [
  { name: "International Academics", role: "Editorial Board", description: "Experts from literature, linguistics, cultural studies, education, translation studies, and interdisciplinary humanities." },
];

const advisoryBoard = [
  { name: "Senior Scholars & Professionals", role: "Advisory Board", description: "Guide the journal's academic direction and strategic development." },
];

const reviewersPanel = [
  { name: "Subject Specialists", role: "Reviewers' Panel", description: "Responsible for conducting double-blind peer review across all subject areas." },
];

function EditorCard({ e, featured = false }: { e: Editor; featured?: boolean }) {
  const Icon = e.icon || UserCheck;
  
  return (
    <article
      className={`rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)] ${featured ? "md:p-8" : ""}`}
    >
      <div
        className={`grid place-items-center rounded-xl bg-primary text-primary-foreground ${featured ? "h-20 w-20" : "h-14 w-14"}`}
      >
        <Icon className={`${featured ? "h-10 w-10" : "h-6 w-6"}`} />
      </div>
      <h3 className={`mt-5 font-display font-semibold text-primary ${featured ? "text-2xl" : "text-lg"}`}>
        {e.name}
      </h3>
      <div className="mt-1 text-xs font-medium uppercase tracking-wider text-accent-foreground/80">{e.role}</div>
      {e.description && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
      )}
    </article>
  );
}

function EditorialBoardPage() {
  return (
    <>
      <PageHero
        eyebrow="Editorial Board"
        title="The Editors Behind Every Decision"
        description="Editorial decisions are made by an international board of scholars and practitioners with direct expertise across the journal's subject areas."
      />

      {/* Editor-in-Chief & Managing Editor */}
      <section className="container-page py-16">
        <SectionTitle eyebrow="Leadership" title="Editorial Leadership" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {chiefEditors.map((e) => (
            <EditorCard key={e.role} e={e} featured />
          ))}
        </div>
      </section>

      {/* Associate Editor */}
      <div className="bg-surface">
        <section className="container-page py-16">
          <SectionTitle eyebrow="Section Editors" title="Associate Editor" />
          <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {associateEditors.map((e) => (
              <EditorCard key={e.role} e={e} />
            ))}
          </div>
        </section>
      </div>

      {/* Editorial Board */}
      <section className="container-page py-16">
        <SectionTitle eyebrow="International Board" title="Editorial Board" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {boardMembers.map((e) => (
            <EditorCard key={e.role} e={{ ...e, icon: Users2 }} />
          ))}
        </div>
      </section>

      {/* Advisory Board */}
      <div className="bg-surface">
        <section className="container-page py-16">
          <SectionTitle eyebrow="Advisory" title="Advisory Board" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advisoryBoard.map((e) => (
              <EditorCard key={e.role} e={{ ...e, icon: Globe2 }} />
            ))}
          </div>
        </section>
      </div>

      {/* Reviewers' Panel */}
      <section className="container-page py-16">
        <SectionTitle eyebrow="Peer Review" title="Reviewers' Panel" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviewersPanel.map((e) => (
            <EditorCard key={e.role} e={{ ...e, icon: ShieldCheck }} />
          ))}
        </div>
      </section>
    </>
  );
}