import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Building2, FlaskConical, HeartHandshake, BookMarked } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

export const Route = createFileRoute("/partnerships")({
  head: () => ({
    meta: [
      { title: "Partnerships — Ramotitanico" },
      { name: "description", content: "Universities, research centres, NGOs, and publishers collaborating with Ramotitanico across continents." },
      { property: "og:title", content: "Partnerships — Ramotitanico" },
      { property: "og:description", content: "Join our network of universities, research centres, NGOs, and publishers." },
      { property: "og:url", content: "/partnerships" },
    ],
    links: [{ rel: "canonical", href: "/partnerships" }],
  }),
  component: PartnershipsPage,
});

const categories = [
  { icon: Building2, title: "Universities", desc: "Joint programmes, exchanges, and accredited conferences with leading universities across Europe, Asia, Africa, and the Americas." },
  { icon: FlaskConical, title: "Research Centres", desc: "Collaborative research projects, methodology workshops, and co-published reports with specialised research institutes." },
  { icon: HeartHandshake, title: "NGOs", desc: "Programmes that connect academic knowledge with practice — training, advocacy support, and policy briefings." },
  { icon: BookMarked, title: "Publishers", desc: "Indexing, editorial partnerships, and co-published volumes through established academic publishing houses." },
];

const schema = z.object({
  organization: z.string().trim().min(2, "Organization is required").max(200),
  contact: z.string().trim().min(2, "Contact name is required").max(120),
  email: z.string().trim().email("Valid email required").max(200),
  type: z.string().trim().min(2).max(80),
  message: z.string().trim().min(10, "Please share a brief proposal").max(2000),
});

function PartnershipsPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please review your input.");
      setSubmitting(false);
      return;
    }
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Thank you — our partnerships team will respond within five business days.");
    form.reset();
    setSubmitting(false);
  };

  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Collaborate with a Global Academic Organization."
        description="We build long-term partnerships with institutions whose work aligns with our mission of advancing education, research, and sustainable innovation."
      />

      <section className="container-page py-20">
        <SectionTitle align="center" eyebrow="Who We Partner With" title="Four Pillars of Collaboration." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground">
                <c.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-primary">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionTitle
            eyebrow="Start a Conversation"
            title="Propose a Collaboration."
            description="Tell us about your organization and how you would like to work together. Our partnerships team reviews every enquiry personally."
          />
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Organization" name="organization" />
              <Field label="Contact Name" name="contact" />
              <Field label="Email" name="email" type="email" />
              <Field label="Organization Type" name="type" placeholder="University, NGO, etc." />
            </div>
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Proposal
              </label>
              <textarea
                name="message"
                rows={5}
                maxLength={2000}
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
                placeholder="Briefly describe the proposed collaboration."
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send Proposal"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={200}
        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}
