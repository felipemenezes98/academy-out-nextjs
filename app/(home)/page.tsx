import { AboutSection } from "./components/about-section"
import { Description } from "./components/description"
import { HomeFooter } from "./components/home-footer"
import { HomeHero } from "./components/home-hero"
import { InstructorSection } from "./components/instructor-section"
import { StatementSection } from "./components/statement-section"
import { StudentsGrid } from "./components/students-grid"
import { students } from "./data/students"

export default function HomePage() {
  return (
    <main className="w-full">
      <HomeHero />
      <Description />
      <StudentsGrid students={students} />
      <AboutSection />
      <InstructorSection />
      <StatementSection />
      <HomeFooter />
    </main>
  )
}
