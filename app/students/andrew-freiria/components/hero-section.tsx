"user client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { objects } from "@/app/students/andrew-freiria/data/objects";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[82vh] items-center overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(37,99,235,0.14),transparent_38%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.18)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.18)_1px,transparent_1px)] bg-size-[64px_64px] mask-[linear-gradient(to_bottom,black,transparent)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-28 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-8 flex items-center gap-3 section-eyebrow">
            <span className="status-dot" />
            Near-Earth object monitoring
          </div>

          <h1 className="text-balance text-5xl font-semibold tracking-[-0.04em] sm:text-7xl lg:text-8xl">
            Something is always passing by.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            Explore the objects moving through Earth&apos;s neighborhood and
            understand how close they really come.
          </p>

          <p className="mt-5 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{objects.length} objects</span>{" "}
            registered in the current fictional dataset this month.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button size="lg" onClick={() => window.location.href = "/students/andrew-freiria/objects"}>
                Explore objects <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.location.href = "#approaches"}>
                View approaches <ArrowDown className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
