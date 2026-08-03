import { FeaturesSection } from "./components/features"

import { CodePreviewSection } from "./components/code-preview"
import { Navbar } from "./components/navbar"
import { HeroSection } from "./components/hero"
import { TrustedBySection } from "./components/trusted-by"
import { StatisticsSection } from "./components/statistics"
import { Footer } from "./components/footer"
import { CTA } from "./components/cta"
import { DashboardSection } from "./components/dashboard"

/**
 * Landing Page principal.
 *
 * Esta página possui apenas conteúdo estático,
 * portanto não realiza nenhuma chamada de API.
 *
 * A responsabilidade deste componente é apenas organizar
 * as seções da landing page.
 */
export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0D1117] text-zinc-50 select-none">
      {/* Glow superior */}
      <div
        aria-hidden
        className="absolute -top-87.5 left-1/2 h-175 w-175 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]"
      />

      {/* Glow inferior */}
      <div
        aria-hidden
        className="absolute -right-62.5 -bottom-87.5 h-162.5 w-162.5 rounded-full bg-cyan-500/5 blur-[180px]"
      />

      {/* Grid de fundo inspirado no GitHub */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] mask-[radial-gradient(circle_at_center,black,transparent_90%)] bg-size-[48px_48px]"
      />

      <div className="relative z-10">
        <Navbar />

        <main>
          <HeroSection />

          <TrustedBySection />

          <FeaturesSection />

          <DashboardSection />

          <StatisticsSection />

          <CodePreviewSection />

          <CTA />
        </main>

        <Footer />
      </div>
    </div>
  )
}
