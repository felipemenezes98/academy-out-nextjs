import { Navbar } from "@/app/students/andrew-freiria/components/navbar";
import { ObjectExplorer } from "@/app/students/andrew-freiria/components/object-explorer";
import { Footer } from "@/app/students/andrew-freiria/components/footer";

export default function ObjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-28 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 section-eyebrow">
            Object database
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Explore near-Earth objects.
          </h1>
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            Search and filter the monitored objects, then select one to inspect
            its orbital and observation data.
          </p>
        </div>
        <div className="mt-12">
          <ObjectExplorer />
        </div>
      </section>
      <Footer />
    </main>
  );
}
