import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  backTo?: string;
  backLabel?: string;
}

export function PageHero({ eyebrow, title, description, children, align = "left", backTo, backLabel }: Props) {
  const centered = align === "center";

  return (
    <>
      <section
        className="relative overflow-hidden text-primary-foreground"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 10%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
            backgroundSize: "32px 32px, 48px 48px",
          }}
        />
        <div className={cn("container-page relative py-20 sm:py-28", centered && "text-center")}>
          {eyebrow && (
            <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </span>
          )}
          <h1
            className={cn(
              "mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl",
              centered && "mx-auto",
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                "mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg",
                centered && "mx-auto",
              )}
            >
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </section>
      {backTo && (
        <div className="container-page pt-6">
          <Link
            to={backTo}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            <ArrowLeft className="h-4 w-4" /> {backLabel ?? "Back"}
          </Link>
        </div>
      )}
    </>
  );
}
