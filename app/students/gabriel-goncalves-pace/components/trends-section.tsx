import { trends } from "../data/printing"

export function TrendsSection() {
  return (
    <section className="w-full px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12">
        <div className="flex max-w-md flex-col items-center gap-4 text-center">
          <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Para onde vai
          </p>
          <h2 className="text-2xl leading-tight font-semibold tracking-tight text-balance sm:text-3xl md:text-4xl">
            A tecnologia deixou de ser sobre a máquina e passou a ser sobre o
            material.
          </h2>
        </div>

        <ul className="grid w-full grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-3">
          {trends.map((trend) => (
            <li
              key={trend.title}
              className="flex flex-col gap-2 border-t border-border pt-4"
            >
              <h3 className="text-sm font-medium tracking-tight">
                {trend.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {trend.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
