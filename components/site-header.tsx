"use client"

import { useState } from "react"
import { Menu, X, Phone, Wrench } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { InstagramIcon } from "@/components/instagram-icon"
import { site } from "@/lib/site"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-20 md:px-6">
        {/* Logo */}
<a href="#top" className="flex items-center" aria-label={`${site.name} home`}>
  <img 
    src="/Logo Blue.png" 
    alt="M.A.C.E. Logo" 
    className="h-10 w-auto md:h-12 object-contain" 
  />
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
          
          {/* FIXED: Removed <Button asChild> and styled the <a> tag directly */}
          <a 
            href={site.phoneHref} 
            className={buttonVariants({ className: "gap-2" })}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call or Text: {site.phone}
          </a>
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
              
              {/* FIXED: Removed <Button asChild> and styled the mobile <a> tag directly */}
              <a 
                href={site.phoneHref} 
                className={buttonVariants({ className: "w-full gap-2" })}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call or Text: {site.phone}
              </a>
              
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