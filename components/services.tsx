import { Droplet, Disc3, Wind, BatteryCharging, Waypoints, Gauge, CheckCircle2, XCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Droplet,
    title: "Oil Changes",
    description: "Full-service oil and filter changes to keep your engine running smoothly.",
  },
  {
    icon: Disc3,
    title: "Brake Service",
    description: "Pad replacements and brake inspections for confident, safe stopping.",
  },
  {
    icon: Wind,
    title: "Air Filters",
    description: "Engine and cabin air filter replacements for cleaner air and performance.",
  },
  {
    icon: BatteryCharging,
    title: "Battery Replacement",
    description: "Testing and replacement so you're never left stranded with a dead battery.",
  },
  {
    icon: Waypoints,
    title: "Light Suspension Work",
    description: "Struts, shocks, and light suspension repairs for a smoother ride.",
  },
  {
    icon: Gauge,
    title: "Routine Maintenance",
    description: "Fluids, wipers, bulbs, and the small upkeep that extends your car's life.",
  },
]

const excluded = [
  "Heavy engine diagnostics",
  "Check engine light tracing",
  "Tire mounting & balancing",
  "Jobs requiring a commercial lift",
]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Services</p>
        <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Routine maintenance, done right
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          We specialize in the everyday upkeep that keeps your vehicle reliable, safe, and on the road.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card key={s.title} className="border-border transition-shadow hover:shadow-md">
            <CardContent className="flex flex-col items-start gap-4 p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/15 text-accent-foreground">
                <s.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-serif text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-1.5 leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Excluded services */}
      <div className="mt-8 grid gap-6 rounded-2xl border border-border bg-secondary/60 p-8 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <h3 className="font-serif text-xl font-bold text-foreground">A quick, honest note on scope</h3>
          <p className="mt-2 max-w-md leading-relaxed text-muted-foreground">
            To give every customer our best work, we focus on routine maintenance. For now, the following are outside
            what we offer—we're always happy to point you toward a trusted specialist.
          </p>
        </div>
        <ul className="grid gap-3">
          {excluded.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm font-medium text-foreground">
              <XCircle className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
        <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
        Not sure if your service qualifies? Just ask—we'll always be straight with you.
      </p>
    </section>
  )
}
