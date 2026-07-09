import { createFileRoute } from "@tanstack/react-router";
import { Car, Key, CalendarDays, MapPin, ShieldCheck, Smartphone } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

export const Route = createFileRoute("/transport")({
  head: () => ({
    meta: [
      { title: "Car Rental & Mobility — Ramotitanico" },
      { name: "description", content: "Rent a car directly from Ramotitanico or list your own vehicle and earn. Portugal's peer-to-peer car rental marketplace based in Braga." },
      { property: "og:title", content: "Car Rental & Mobility — Ramotitanico" },
      { property: "og:description", content: "Rent a vehicle from Ramotitanico's fleet, or register your car on our platform and rent it to others. Flexible short and long-term plans across Portugal." },
      { property: "og:url", content: "/transport" },
    ],
    links: [{ rel: "canonical", href: "/transport" }],
  }),
  component: TransportPage,
});

const services = [
  {
    icon: Car,
    title: "Direct Vehicle Rental",
    desc: "Rent from Ramotitanico's own managed fleet. Choose from economy hatchbacks to spacious SUVs, with competitive daily and weekly rates, instant online booking, and no hidden fees.",
  },
  {
    icon: Key,
    title: "List Your Car & Earn",
    desc: "Own a vehicle you're not always using? Register it on our platform and rent it to verified customers. We handle payments, insurance coordination, and customer support — you just collect earnings from your car.",
  },
  {
    icon: CalendarDays,
    title: "Flexible Rental Plans",
    desc: "Whether you need a car for a few hours, a weekend, or several months, we have a plan to match. Hourly, daily, weekly, and long-term monthly rates with straightforward pricing and digital contracts.",
  },
  {
    icon: MapPin,
    title: "Portugal-Wide Coverage",
    desc: "Pick up in Braga, Porto, Lisbon, and other key cities. Our growing network of pickup points and owner-registered vehicles means you'll find a car wherever you need one across Portugal.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured Rentals",
    desc: "Every vehicle in our fleet carries comprehensive insurance. Owner-listed cars are verified and covered under our P2P rental protection scheme, so both renters and owners have peace of mind.",
  },
  {
    icon: Smartphone,
    title: "Easy Online Booking",
    desc: "Search availability, compare vehicles, and book in minutes through our platform. Real-time availability, instant confirmation, digital rental agreements, and support whenever you need it.",
  },
];

function TransportPage() {
  return (
    <>
      <PageHero
        eyebrow="Car Rental & Mobility"
        title={
  <>
    Rent a Car
    <br />
    Or Rent Out Yours 
  </>
}
        description="Ramotitanico operates a peer-to-peer car rental marketplace across Portugal. Rent directly from our managed fleet, or register your own vehicle and earn while it sits idle."
      />

      <section className="container-page py-20">
        <SectionTitle
          eyebrow="What We Offer"
          title="Everything you need to rent or earn."
          description="Whether you're looking for a vehicle across Portugal or want to put your parked car to work, our platform connects both sides simply and safely."
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

      <section className="bg-surface py-20">
        <div className="container-page grid gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              For Car Owners
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold text-primary">
              Your car earns while you don't drive it.
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Registering your vehicle takes minutes. We verify the car, manage bookings, coordinate
              payments, and handle customer enquiries on your behalf. You set your availability and
              pricing — we do the rest.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Quick vehicle registration",
                "You control availability and rates",
                "Payments deposited to your account",
                "P2P insurance protection included",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-foreground/80">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              For Renters
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold text-primary">
              The right car, wherever you are in Portugal.
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Browse our fleet and owner-listed vehicles by location, date, and category. Compare
              rates, book instantly, and collect your car with a digital contract. No queues, no
              paperwork surprises.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Economy, saloon, SUV, and minivan options",
                "Hourly to monthly rental plans",
                "Pickup points across Portugal",
                "All rentals fully insured",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-foreground/80">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-page max-w-4xl">
          <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Our Impact
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
            Mobility that works for both sides of the market.
          </h2>
          <div className="mt-6 space-y-4 text-primary-foreground/80 leading-relaxed">
            <p>
              Ramotitanico's car rental platform was built to solve two problems at once: the cost
              and inflexibility of traditional car hire, and the under-utilisation of privately owned
              vehicles across Portugal. By connecting renters with both our managed fleet and
              registered owner vehicles, we create value on both sides of the market.
            </p>
            <p>
              For renters, that means more choice, better prices, and a digital-first experience
              without the friction of traditional rental counters. For car owners, it means a simple,
              hands-off way to generate income from an asset that would otherwise sit parked. For
              Portugal, it means fewer idle vehicles, more efficient use of existing capacity, and a
              transport option built for how people actually live today.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
