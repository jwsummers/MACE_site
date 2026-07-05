"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react"
import { InstagramIcon } from "@/components/instagram-icon"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { site } from "@/lib/site"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Info */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Contact</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Schedule your pickup
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Tell us about your vehicle and what it needs. We'll get right back to you to lock in a pickup time.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href={site.phoneHref}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Call or Text</span>
                <span className="block font-semibold text-foreground">{site.phone}</span>
              </span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Email</span>
                <span className="block font-semibold text-foreground">{site.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Service Area</span>
                <span className="block font-semibold text-foreground">{site.city} &amp; nearby Phoenix</span>
              </span>
            </div>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <InstagramIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Follow along</span>
                <span className="block font-semibold text-foreground">{site.instagramHandle}</span>
              </span>
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-bold text-foreground">Thanks—message received!</h3>
              <p className="mt-2 max-w-sm leading-relaxed text-muted-foreground">
                We'll reach out shortly to confirm your pickup. Need something sooner? Call or text {site.phone}.
              </p>
              <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
                Send another request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Jane Doe" required autoComplete="name" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(480) 555-0123"
                    required
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  required
                  autoComplete="email"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="vin">
                  VIN <span className="font-normal text-muted-foreground">(Optional)</span>
                </Label>
                <Input id="vin" name="vin" placeholder="1HGCM82633A004352" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message">How can we help?</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us your vehicle's year, make, model, and what it needs..."
                  required
                />
              </div>

              <Button type="submit" size="lg" className="mt-1 w-full">
                Request My Pickup
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Prefer to talk? Call or text {site.phone}—we're happy to help.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
