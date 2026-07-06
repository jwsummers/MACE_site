import { Wrench, Phone, Mail, MapPin, Clock } from "lucide-react"
import { InstagramIcon } from "@/components/instagram-icon"
import { site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
           {/* Logo */}
<a href="#top" className="flex items-center" aria-label={`${site.name} home`}>
  <img 
    src="/Logo Blue.png" 
    alt="M.A.C.E. Logo" 
    className="h-10 w-auto md:h-12 object-contain" 
  />
</a>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Concierge pickup-and-delivery car care from a trusted local expert with 20+ years of experience.
          </p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-foreground">Contact</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-2 transition-colors hover:text-primary">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call or Text: {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition-colors hover:text-primary">
                <Mail className="h-4 w-4" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {site.city}
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="flex items-center gap-2 font-serif text-sm font-bold uppercase tracking-wider text-foreground">
            <Clock className="h-4 w-4" aria-hidden="true" />
            Business Hours
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
            {site.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="font-medium text-foreground">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Service area */}
        <div>
          <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-foreground">Service Area</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Primary service in {site.city}, with limited pickups available in the greater Phoenix area. Reach out to
            confirm we cover your location before scheduling.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground md:flex-row md:px-6">
          <p>
            &copy; {new Date().getFullYear()} My Auto Care Expert (M.A.C.E.). All rights reserved.
          </p>
          <p>Routine maintenance specialists · Not a mobile repair service.</p>
        </div>
      </div>
    </footer>
  )
}
