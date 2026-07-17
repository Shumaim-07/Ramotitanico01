import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, CheckCircle2, UploadCloud } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";
// import emailjs from "@emailjs/browser"; // Commented out until template ID is available

export const Route = createFileRoute("/submit-manuscript")({
  head: () => ({
    meta: [
      { title: "Submit Manuscript — Ramotitanico" },
      { name: "description", content: "How to submit a manuscript to the Ramotitanico Journal of Education, Research & Sustainable Innovation." },
      { property: "og:title", content: "Submit Manuscript — Ramotitanico" },
      { property: "og:description", content: "Manuscript submission requirements and contact details for the editorial office." },
      { property: "og:url", content: "/submit-manuscript" },
    ],
    links: [{ rel: "canonical", href: "/submit-manuscript" }],
  }),
  component: SubmitManuscriptPage,
});

const requirements = [
  "Manuscript prepared per the Author Guidelines",
  "Structured abstract (200–250 words) and 4–6 keywords",
  "Author details on a separate title page (blind manuscript body)",
  "Signed declaration of originality and no conflicts of interest",
];

const statements = [
  { name: "wordCount", label: "Does your article's word count fit between 4000 and 8000?" },
  { name: "aimsScope", label: "Does your article meet the aims and scope of the journal you are submitting to?" },
  { name: "abstractClear", label: "Is the abstract clear enough for potential reviewers to assess if the article is in their area of expertise?" },
  { name: "clearlyWritten", label: "Is your article clearly written, concise and accessible?" },
  { name: "referencesListed", label: "Have you listed all references you've used?" },
  { name: "citationsClear", label: "Have you clearly cited any adapted/reproduced material in your figure/table captions?" },
  { name: "notElsewhere", label: "My manuscript is not being considered for publication elsewhere nor is it published elsewhere?" },
] as const;

const acknowledgements = [
  {
    name: "ethicsAck",
    label: "Do you acknowledge the Publication Ethics and Publication Malpractice Statement?",
    linkText: "Publication Ethics and Publication Malpractice Statement.",
    to: "/publication-ethics",
  },
  {
    name: "consentAck",
    label: "Do you acknowledge the Informed Consent for Human and Animal Rights Statement?",
    linkText: "Informed Consent for Human and Animal Rights Statement.",
  },
  {
    name: "paymentAck",
    label: "Authors can submit a manuscript and be peer-reviewed at zero cost. Payment may be needed at the Rights Agreement stage.",
    linkText: "Rights Agreement Pathways.",
  },
] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Name required").max(120),
  email: z.string().trim().email("Valid email required").max(200),
  language: z.string().trim().min(1, "Language required"),
  researchNetwork: z.string().trim().max(160).optional().or(z.literal("")),
  journal: z.string().trim().min(2).max(160),
  title: z.string().trim().min(5, "Title required").max(300),
  subtitle: z.string().trim().max(300).optional().or(z.literal("")),
  abstract: z.string().trim().min(50, "Abstract should be approximately 150–250 words").max(3000),
  keywords: z.string().trim().min(3, "List at least three keywords, comma separated"),
  wordCount: z.enum(["yes", "no"], { message: "Please answer this question" }),
  aimsScope: z.enum(["yes", "no"], { message: "Please answer this question" }),
  abstractClear: z.enum(["yes", "no"], { message: "Please answer this question" }),
  clearlyWritten: z.enum(["yes", "no"], { message: "Please answer this question" }),
  referencesListed: z.enum(["yes", "no"], { message: "Please answer this question" }),
  citationsClear: z.enum(["yes", "no"], { message: "Please answer this question" }),
  notElsewhere: z.enum(["yes", "no"], { message: "Please answer this question" }),
  ethicsAck: z.literal("yes", { message: "You must acknowledge the Publication Ethics Statement to submit" }),
  consentAck: z.literal("yes", { message: "You must acknowledge the Informed Consent Statement to submit" }),
  paymentAck: z.literal("yes", { message: "You must acknowledge the submission terms to submit" }),
});

const MAX_FILE_MB = 5;

function SubmitManuscriptPage() {
  const [submitting, setSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");

  const onFileChange = (file: File | null) => {
    if (!file) {
      setFileName("");
      return;
    }
    if (file.size > MAX_FILE_MB * 1024 * 1024) {
      toast.error(`File is larger than ${MAX_FILE_MB}MB. Please email it directly to info@ramotitanico.com.`);
      return;
    }
    setFileName(file.name);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please review your submission.");
      setSubmitting(false);
      return;
    }

    const statementsSummary = [...statements, ...acknowledgements]
      .map((s) => `${s.label} ${parsed.data[s.name as keyof typeof parsed.data] === "yes" ? "Yes" : "No"}`)
      .join("\n");

    // TEMPORARY: Log form data to console instead of sending via EmailJS
    console.log("=== MANUSCRIPT SUBMISSION DATA ===");
    console.log("Name:", parsed.data.name);
    console.log("Email:", parsed.data.email);
    console.log("Language:", parsed.data.language);
    console.log("Research Network:", parsed.data.researchNetwork || "—");
    console.log("Journal:", parsed.data.journal);
    console.log("Title:", parsed.data.title);
    console.log("Subtitle:", parsed.data.subtitle || "—");
    console.log("Abstract:", parsed.data.abstract);
    console.log("Keywords:", parsed.data.keywords);
    console.log("File:", fileName || "No file attached");
    console.log("Statements:\n", statementsSummary);
    console.log("==================================");

    // Commented out until EmailJS template ID is available
    /*
    try {
      await emailjs.send(
        "service_jp0tlbk",
        "template_manuscript_submission", // Replace with your template ID
        {
          name: parsed.data.name,
          email: parsed.data.email,
          language: parsed.data.language,
          researchNetwork: parsed.data.researchNetwork || "—",
          journal: parsed.data.journal,
          title: parsed.data.title,
          subtitle: parsed.data.subtitle || "—",
          abstract: parsed.data.abstract,
          keywords: parsed.data.keywords,
          statements: statementsSummary,
          fileName: fileName || "No file attached — author will email manuscript separately",
        },
        "HhAU4iWFJNLELPwv3" // Your public key
      );
      toast.success("Submission received. Our editorial office will be in touch.");
      form.reset();
      setFileName("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send submission. Please try again or email us directly.");
    }
    */

    // Temporary success message while EmailJS is disabled
    toast.success("Submission data logged successfully. EmailJS integration will be enabled soon.");
    form.reset();
    setFileName("");
    setSubmitting(false);
  };

  return (
    <>
      <PageHero
        backTo="/journal"
        backLabel="Journal Services"
        eyebrow="Submit Manuscript"
        title="Ready to Submit? Here's How."
        description="Complete the submission form below, or email your manuscript directly to our editorial office."
      />

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionTitle
              eyebrow="Before You Send"
              title="Submission Requirements."
              description="Manuscripts that don't meet these requirements are returned for revision before entering editorial screening."
            />
            <ul className="mt-8 space-y-3">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">
              Full formatting and structure requirements are detailed in the{" "}
              <Link to="/author-guidelines" className="font-medium text-primary underline underline-offset-4">
                Author Guidelines
              </Link>
              .
            </p>

            <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Mail className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-primary">Prefer Email?</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Email your manuscript and title page as separate attachments, with the subject line
                "Manuscript Submission — [Your Name]".
              </p>
              <a
                href="mailto:info@ramotitanico.com?subject=Manuscript%20Submission"
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:brightness-95"
              >
                info@ramotitanico.com
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
          >
            <h3 className="font-display text-xl font-semibold text-primary">New Submission</h3>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Article Basics</h4>
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Language</label>
                  <select
                    name="language"
                    defaultValue="English"
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
                  >
                    <option>English</option>
                    <option>Portuguese</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>Other</option>
                  </select>
                </div>
                <Field label="Research Network (optional)" name="researchNetwork" />
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Journal</label>
                  <input
                    name="journal"
                    readOnly
                    defaultValue="Academia Humanities Review"
                    className="mt-2 w-full rounded-md border border-input bg-secondary px-3 py-2 text-sm text-foreground/80"
                  />
                </div>
                <div className="sm:col-span-2">
                  <TextArea label="Title" name="title" rows={2} />
                </div>
                <div className="sm:col-span-2">
                  <TextArea label="Subtitle (optional)" name="subtitle" rows={2} />
                </div>
                <div className="sm:col-span-2">
                  <TextArea label="Abstract" name="abstract" rows={5} hint="150–250 words" />
                </div>
                <div className="sm:col-span-2">
                  <TextArea label="Keywords" name="keywords" rows={2} hint="Minimum of three, title case, comma separated" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    File Upload {`(optional, max ${MAX_FILE_MB}MB)`}
                  </label>
                  <label
                    htmlFor="manuscript-file"
                    className="mt-2 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-input bg-secondary/40 px-4 py-8 text-center transition-colors hover:border-primary"
                  >
                    <UploadCloud className="h-6 w-6 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {fileName || (
                        <>
                          Drag & Drop your file or <span className="font-medium text-primary underline underline-offset-4">Browse</span>
                        </>
                      )}
                    </span>
                    <input
                      id="manuscript-file"
                      type="file"
                      className="hidden"
                      onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Author Statements</h4>
              <div className="mt-4 space-y-4">
                {statements.map((s) => (
                  <YesNoQuestion key={s.name} name={s.name} label={s.label} />
                ))}
                {acknowledgements.map((a) => (
                  <YesNoQuestion key={a.name} name={a.name} label={a.label} linkText={a.linkText}   />
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover disabled:opacity-60 sm:w-auto"
            >
              {submitting ? "Submitting…" : "Save & Submit"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        maxLength={200}
        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}

function TextArea({ label, name, rows = 3, hint }: { label: string; name: string; rows?: number; hint?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      {hint && <p className="mt-0.5 text-xs text-muted-foreground">{hint}</p>}
      <textarea
        name={name}
        rows={rows}
        maxLength={3000}
        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}

function YesNoQuestion({
  name,
  label,
  linkText,
  to,
}: {
  name: string;
  label: string;
  linkText?: string;
  to?: string;
}) {
  return (
    <fieldset className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <legend className="sr-only">{label}</legend>
      <div className="text-sm text-foreground/85">
        {label}
        {linkText && (
          <>
            {" "}
            Please read and acknowledge the{" "}
            {to ? (
              <Link to={to} className="font-medium text-primary underline underline-offset-4">
                {linkText}
              </Link>
            ) : (
              <span className="font-medium text-primary underline underline-offset-4">{linkText}</span>
            )}
          </>
        )}
      </div>
      <div className="flex shrink-0 items-center gap-4">
        <label className="flex items-center gap-1.5 text-sm">
          <input type="radio" name={name} value="yes" required className="h-4 w-4 accent-primary" />
          Yes
        </label>
        <label className="flex items-center gap-1.5 text-sm">
          <input type="radio" name={name} value="no" className="h-4 w-4 accent-primary" />
          No
        </label>
      </div>
    </fieldset>
  );
}