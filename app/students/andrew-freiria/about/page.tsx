import { Navbar } from "@/app/students/andrew-freiria/components/navbar";
import { Footer } from "@/app/students/andrew-freiria/components/footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-28 lg:px-8">
        <p className="mb-3 section-eyebrow">
          About Earth Watch
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Understanding what passes near our planet.
        </h1>
        <div className="mt-10 space-y-8 text-base leading-8 text-muted-foreground">
          <p>
            Earth Watch is an educational interface designed to explore
            near-Earth objects and make astronomical distances, sizes and
            trajectories easier to understand.
          </p>
          <p>
            The project deliberately uses fictional data. Its purpose is to
            demonstrate how scientific information can be organized into a
            clear, interactive dashboard without presenting simulated values
            as real observations.
          </p>
          <div className="border-l-2 border-primary pl-6">
            <p className="text-foreground">
              “Near Earth” does not automatically mean “dangerous”. Astronomical
              distances are enormous, and risk assessment depends on several
              variables rather than proximity alone.
            </p>
          </div>
          <p>
            The interface was created as a frontend project using Next.js,
            React, Tailwind CSS and shadcn/ui, with a visual language inspired
            by scientific observatories and space agencies.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
