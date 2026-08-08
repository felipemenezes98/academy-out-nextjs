"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, ChevronDown } from "lucide-react";
import { objects, type NEO } from "@/app/students/andrew-freiria/data/objects";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/app/students/andrew-freiria/components/ui/scroll-area";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export function ObjectExplorer() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<string>("all");
  const [selected, setSelected] = useState<NEO>(objects[0]);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const id = searchParams.get("object");

    if (!id) return;

    const object = objects.find((item) => item.id === id);

    if (object) {
      setSelected(object);

      requestAnimationFrame(() => {
        document
          .getElementById(`object-details-${object.id}`)
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      });
    }
  }, [searchParams]);

  const filtered = useMemo(() => {
    return objects.filter((object) => {
      const matchesQuery = object.name.toLowerCase().includes(query.toLowerCase());
      const matchesType = type === "all" || object.type === type;
      return matchesQuery && matchesType;
    });
  }, [query, type]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search object..."
            className="rounded-none pl-9"
          />
        </div>
        <Select value={type} onValueChange={(value) => setType(String(value))}>
          <SelectTrigger className="w-full rounded-none md:w-52">
            <SelectValue placeholder="Object type" />
          </SelectTrigger>
          <SelectContent className={"rounded-none"}>
            <SelectItem className={"rounded-none"} value="all">All types</SelectItem>
            <SelectItem className={"rounded-none"} value="Asteroid">Asteroid</SelectItem>
            <SelectItem className={"rounded-none"} value="Comet">Comet</SelectItem>
          </SelectContent>
        </Select>
        <Button className={"rounded-none"} variant="outline" onClick={() => { setQuery(""); setType("all"); }}>
          Reset
        </Button>
      </div>

      <div className="border-y border-border">
        <ScrollArea className="h-70">
          <div className="min-w-190">
            <div className="bg-card grid grid-cols-[1.4fr_0.8fr_0.9fr_1fr_0.8fr] border-b border-border px-5 py-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <span>Object</span><span>Type</span><span>Size</span><span>Closest approach</span><span>Risk</span>
            </div>
            {filtered.map((object) => (
              <button
                id={object.id}
                key={object.id}
                onClick={() => {
                  setSelected(object);
                  router.replace(`?object=${object.id}`);
                }}
                className={cn(
                  "grid w-full grid-cols-[1.4fr_0.8fr_0.9fr_1fr_0.8fr] items-center border-b border-border/60 px-5 py-4 text-left transition-colors hover:bg-muted/50",
                  selected.id === object.id &&
                  "bg-(--selection) text-foreground hover:bg-(--selection-hover)"
                )}
              >
                <span className="font-medium">{object.name}</span>
                <span className="text-sm text-muted-foreground">{object.type}</span>
                <span className="text-sm">{object.sizeLabel}</span>
                <span className="text-sm text-muted-foreground">{object.distanceLabel}</span>
                <Badge variant={object.risk === "Low" ? "secondary" : "outline"}>
                  {object.risk}
                </Badge>
              </button>
            ))}
            {!filtered.length && (
              <div className="px-5 py-12 text-center text-sm text-muted-foreground">
                No objects match your search.
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      <ObjectDetails object={selected} />
    </div>
  );
}

function ObjectDetails({ object }: { object: NEO }) {
  return (
    <article id={`object-details-${object.id}`} className="object-details rounded-lg border border-border bg-card p-6 sm:p-8">
      <div className="flex flex-col gap-3 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-eyebrow">Selected object</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">{object.name}</h2>
        </div>
        <Badge variant="outline">{object.type}</Badge>
      </div>

      <div className="mt-7 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
        <Detail label="Discovery" value={object.discovery} />
        <Detail label="Velocity" value={object.velocity} />
        <Detail label="Closest approach" value={object.distanceLabel} />
        <Detail label="Approach date" value={object.approachDate} />
        <Detail label="Estimated size" value={object.sizeLabel} />
        <Detail label="Orbit class" value={object.orbitClass} />
        <Detail label="Risk assessment" value={object.risk} />
        <Detail label="Observations" value={object.observations} />
      </div>

      <div className="mt-8 border-t border-border pt-6">
        <p className="text-sm leading-7 text-muted-foreground">{object.description}</p>
      </div>
    </article>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-2">
      <p className="data-label">{label}</p>
      <p className="data-value">{value}</p>
    </div>
  );
}
