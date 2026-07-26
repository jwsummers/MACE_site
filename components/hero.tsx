import Image from "next/image"
import { Phone, MapPin, ShieldCheck, Star } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { site } from "@/lib/site"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-2 lg:gap-8 lg:py-24">
        {/* Copy */}
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            Serving {site.city} &amp; nearby Phoenix
          </span>

          <h1 className="mt-6 text-balance font-serif text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            We pick it up, fix it, and bring it back.
          </h1>

          <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Concierge-style car care from a mechanic with{" "}
            <span className="font-semibold text-foreground">20+ years of hands-on experience</span>. No waiting rooms,
            no wasted afternoons—we handle your routine maintenance so you never have to.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {/* FIXED: Primary button styled directly on anchor tag */}
            <a 
              href="#contact" 
              className={buttonVariants({ size: "lg", className: "gap-2" })}
            >
              Schedule a Pickup
            </a>

            {/* FIXED: Outline button styled directly on anchor tag */}
            <a 
              href={site.phoneHref} 
              className={buttonVariants({ size: "lg", variant: "outline", className: "gap-2" })}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call or Text {site.phone}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
              Trusted local expert
            </span>
            <span className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
              Personable, honest service
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          {/* FIXED: Changed aspect-[4/3] to canonical aspect-4/3 */}
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border shadow-xl shadow-primary/5">
            <Image
              src="/images/hero-pickup.png"
              alt="Friendly mechanic receiving car keys from a customer in a Maricopa driveway"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-5 -left-2 hidden rounded-xl border border-border bg-card p-4 shadow-lg sm:block md:-left-5">
            <p className="font-serif text-2xl font-bold text-foreground">20+ yrs</p>
            <p className="text-xs text-muted-foreground">of expert experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}