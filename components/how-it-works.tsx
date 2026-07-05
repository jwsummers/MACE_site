import { CalendarClock, Wrench, Car } from "lucide-react"

const steps = [
  {
    icon: CalendarClock,
    step: "01",
    title: "Schedule & Pickup",
    description:
      "Call or text to book a time. We come to you, collect your vehicle, and leave you free to get on with your day.",
  },
  {
    icon: Wrench,
    step: "02",
    title: "Expert Service at Our Shop",
    description:
      "Your car is serviced at our dedicated home shop with 20+ years of expertise and genuine care for the details.",
  },
  {
    icon: Car,
    step: "03",
    title: "Delivered Back to You",
    description:
      "Once the work is done and double-checked, we return your vehicle right to your driveway. Simple as that.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">How It Works</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Car care without the hassle
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Three easy steps stand between you and a freshly serviced vehicle.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((s) => (
            <li key={s.step} className="relative flex flex-col items-start rounded-2xl border border-border bg-background p-8">
              <span className="absolute right-6 top-6 font-serif text-4xl font-bold text-secondary">{s.step}</span>
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-serif text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-2.5 leading-relaxed text-muted-foreground">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
