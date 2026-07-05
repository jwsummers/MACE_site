import { UserRound, HandHeart, MapPinned, Clock } from "lucide-react"
import { site } from "@/lib/site"

const points = [
  {
    icon: UserRound,
    title: "One expert, start to finish",
    description: "You work directly with the mechanic servicing your car—no call centers, no rotating staff.",
  },
  {
    icon: HandHeart,
    title: "Personable & honest",
    description: "Clear communication and fair recommendations. We only suggest what your vehicle actually needs.",
  },
  {
    icon: MapPinned,
    title: "Proudly local",
    description: `Based in ${site.city}, built on neighborly trust—not the faceless feel of a corporate chain.`,
  },
  {
    icon: Clock,
    title: "Respects your time",
    description: "Pickup and delivery means your day keeps moving while your car gets the care it deserves.",
  },
]

export function About() {
  return (
    <section id="about" className="border-y border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">About M.A.C.E.</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            A neighbor who happens to be a master mechanic
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-primary-foreground/80">
            After more than two decades under the hood, I started My Auto Care Expert to do car care the way it should
            be: personal, convenient, and genuinely trustworthy. When you hand me your keys, you get an expert who
            treats your vehicle like his own.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/70">
            No upsells, no jargon, no sitting in a lobby. Just quality work delivered right back to your driveway.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <p.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-serif text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
