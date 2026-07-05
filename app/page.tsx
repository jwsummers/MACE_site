import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Services />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
