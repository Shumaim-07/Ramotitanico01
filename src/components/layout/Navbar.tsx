import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/Ramotitanico.png";
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/team", label: "Team" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

const serviceLinks = [
  { to: "/education", label: "Education" },
  { to: "/transport", label: "Transport" },
  { to: "/agriculture", label: "Agriculture" },
  { to: "/construction", label: "Construction" },
] as const;

const journalLinks = [
  { to: "/submit-manuscript", label: "Submit Manuscript" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/60 backdrop-blur-sm",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-2.5 shrink-0">
  <span className="flex min-w-0 flex-col leading-tight">
    <img 
      src={logo} 
      alt="Ramotitanico" 
      className="h-16 w-auto object-contain mix-blend-multiply" 
    />
  </span>
</Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              activeProps={{ className: "text-primary bg-secondary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}

          {/* Services hover dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary">
              Services
              <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 top-full hidden pt-1 group-hover:block z-50 w-48">
              <div className="rounded-xl border border-border bg-background py-1.5 shadow-[var(--shadow-elevated)]">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="block px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                    activeProps={{ className: "text-primary bg-secondary" }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/become-a-consultant"
            className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:brightness-95"
          >
            Become a Consultant
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>


      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
                activeProps={{ className: "text-primary bg-secondary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}

            {/* Mobile Services expandable */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                Services
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    mobileServicesOpen && "rotate-180",
                  )}
                />
              </button>
              {mobileServicesOpen && (
                <div className="ml-3 mt-1 flex flex-col gap-0.5 border-l border-border pl-3">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      onClick={() => {
                        setOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="rounded-md px-3 py-2 text-sm text-foreground/70 hover:bg-secondary hover:text-primary"
                      activeProps={{ className: "text-primary bg-secondary" }}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/become-a-consultant"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground"
            >
              Become a Consultant
            </Link>

            {/* Journal links: flat list, matching the desktop sub-nav */}
            <div className="mt-3 border-t border-border pt-3">
              <p className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Journal
              </p>
              <div className="mt-1 flex flex-col gap-0.5">
                {journalLinks.map((j) => (
                  <Link
                    key={j.to}
                    to={j.to}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary"
                    activeProps={{ className: "text-primary bg-secondary" }}
                  >
                    {j.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
