import { highlights } from "@/app/students/andrew-freiria/data/objects";

export function Highlights() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-10">
        <p className="section-eyebrow">Earth at a glance</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">Current monitoring snapshot</h2>
      </div>

      <div className="flex flex-col divide-y divide-border border-y border-border sm:flex-row sm:divide-x sm:divide-y-0">
        {highlights.map((item) => (
          <div key={item.label} className="flex-1 px-5 py-7 first:pl-0 last:pr-0">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.label}</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight">{item.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
