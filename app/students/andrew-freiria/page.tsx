"use client";

import { AboutSection } from "@/app/students/andrew-freiria/components/about-section";
import { HeroSection } from "@/app/students/andrew-freiria/components/hero-section";
import { Highlights } from "@/app/students/andrew-freiria/components/highlights";
import { Navbar } from "@/app/students/andrew-freiria/components/navbar";
import { RiskSection } from "@/app/students/andrew-freiria/components/risk-section";
import { UpcomingApproaches } from "@/app/students/andrew-freiria/components/upcoming-approaches";
  import { Footer } from "@/app/students/andrew-freiria/components/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <Highlights />
      <UpcomingApproaches />
      <RiskSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
