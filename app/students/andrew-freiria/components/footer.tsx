export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="font-medium text-foreground">EARTH WATCH</p>
          <p className="mt-1">Built by Andrew Freiria.</p>
        </div>
        <div className="sm:text-right">
          <p>Next.js · React · Tailwind CSS · shadcn/ui</p>
          <p className="mt-1">All object data shown is fictional.</p>
        </div>
      </div>
    </footer>
  );
}
