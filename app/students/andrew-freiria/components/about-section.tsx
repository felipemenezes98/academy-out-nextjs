export function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="section-eyebrow">Why track them?</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Turning astronomical scale into understandable information.</h2>
        </div>
        <p className="leading-8 text-muted-foreground">
          Earth Watch presents fictional near-Earth object data through a
          scientific dashboard. The goal is to make concepts such as distance,
          velocity, size and approach dates easier to explore while keeping the
          experience calm, clear and free from unnecessary sensationalism.
        </p>
      </div>
    </section>
  );
}
