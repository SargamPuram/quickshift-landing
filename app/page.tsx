import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Problems } from "@/components/problems"
import { Features } from "@/components/features"
import { Architecture } from "@/components/architecture"
import { UseCases } from "@/components/use-cases"
import { Technical } from "@/components/technical"
import { CTA } from "@/components/cta"

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] text-white overflow-hidden">
      <Header />
      <Hero />
      <Problems />
      <Features />
      <Architecture />
      <UseCases />
      <Technical />
      <CTA />
    </main>
  )
}
