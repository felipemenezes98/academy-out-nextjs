import "./sentinela.css";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

import { HeroSection } from "./components/sections/HeroSection";
import { MissionSection } from "./components/sections/MissionSection";
import { ProblemSection } from "./components/sections/ProblemSection";
import { FeaturesSection } from "./components/sections/FeaturesSection";
import { SystemPreview } from "./components/sections/SystemPreview";
import { WorkflowSection } from "./components/sections/WorkflowSection";
import { MetricsSection } from "./components/sections/MetricsSection";
import { RulesSection } from "./components/sections/RulesSection";
import { TechnologySection } from "./components/sections/TechnologySection";
import { RoadmapSection } from "./components/sections/RoadmapSection";
import { CreatorSection } from "./components/sections/CreatorSection";
import { CTASection } from "./components/sections/CTASection";

export default function SauloStuquePage() {
  return (
    <main className="sentinela overflow-hidden">
      <Navbar />

      <HeroSection />
      <MissionSection />
      <ProblemSection />
      <FeaturesSection />
      <SystemPreview />
      <WorkflowSection />
      <MetricsSection />
      <RulesSection />
      <TechnologySection />
      <RoadmapSection />
      <CreatorSection />
      <CTASection />

      <Footer />
    </main>
  );
}