import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { objects } from "@/app/students/andrew-freiria/data/objects";

export function UpcomingApproaches() {
  const upcoming = [...objects].sort((a, b) => a.distanceKm - b.distanceKm).slice(0, 3);

  return (
    <section id="approaches" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="max-w-2xl">
        <p className="section-eyebrow">Upcoming approaches</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">The closest objects in our dataset.</h2>
        <p className="mt-4 leading-7 text-muted-foreground">
          A simplified view of the three nearest recorded approaches. Select an
          object to inspect its full profile.
        </p>
      </div>

      <div className="mt-10 overflow-x-auto">
        <div className="min-w-180">
          <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] border-b border-border px-4 pb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span>Object</span><span>Approach</span><span>Distance</span><span>Size</span>
          </div>

          {upcoming.map((object) => (
            <Link
              href={`/students/andrew-freiria/objects?object=${object.id}`}
              key={object.id}
              className="grid grid-cols-[1.5fr_1fr_1fr_1fr] items-center px-4 py-5 transition-colors hover:bg-muted/80"
            >
              <div>
                <p className="font-medium">{object.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{object.type}</p>
              </div>
              <span className="text-sm text-muted-foreground">{object.approachDate}</span>
              <span className="text-sm">{object.distanceLabel}</span>
              <span className="flex items-center justify-between text-sm">
                {object.sizeLabel}
                <ArrowUpRight className="size-4 text-muted-foreground" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
