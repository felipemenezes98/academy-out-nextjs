import type { Metadata } from "next"

import { FieldsSection } from "./components/fields-section"
import { HeroSection } from "./components/hero-section"
import { IntroSection } from "./components/intro-section"
import { MaterialsSection } from "./components/materials-section"
import { PageFooter } from "./components/page-footer"
import { PageHeader } from "./components/page-header"
import { ProcessSection } from "./components/process-section"
import { ProductsSection } from "./components/products-section"
import { TechnologiesSection } from "./components/technologies-section"
import { TrendsSection } from "./components/trends-section"

export const metadata: Metadata = {
  title: "Camada Zero",
  description:
    "Um panorama da impressão 3D: como funciona o processo, os tipos de impressora, os materiais e os ramos onde a manufatura aditiva já é usada.",
}

export default function GabrielGoncalvesPace() {
  return (
    <div className="w-full">
      <PageHeader />
      <main className="w-full">
        <HeroSection />
        <IntroSection />
        <ProcessSection />
        <TechnologiesSection />
        <ProductsSection />
        <MaterialsSection />
        <FieldsSection />
        <TrendsSection />
      </main>
      <PageFooter />
    </div>
  )
}
