"use client"

import { useState } from "react"
import { Menu, X, Phone, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InstagramIcon } from "@/components/instagram-icon"
import { site } from "@/lib/site"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-20 md:px-6">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Wrench className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-sm font-bold tracking-tight text-foreground md:text-base">
              My Auto Care Expert
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {site.abbr}
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <Button asChild>
            <a href={site.phoneHref} className="gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call or Text: {site.phone}
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-3 px-3">
              <Button asChild className="w-full">
                <a href={site.phoneHref} className="gap-2">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call or Text: {site.phone}
                </a>
              </Button>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <InstagramIcon className="h-5 w-5" />
                {site.instagramHandle}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
