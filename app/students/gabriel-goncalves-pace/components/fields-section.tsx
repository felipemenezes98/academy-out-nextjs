import { fields, highlights } from "../data/printing"

export function FieldsSection() {
  return (
    <section
      id="aplicacoes"
      className="w-full scroll-mt-14 px-6 py-16 sm:px-10 sm:py-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Onde é aplicada
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Ramos
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              A impressão 3D saiu do laboratório de protótipos e virou parte da
              produção em áreas que não conversam entre si.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {fields.map((field) => (
              <li key={field.title} className="flex flex-col gap-3">
                <field.icon
                  className="size-5 text-muted-foreground"
                  aria-hidden="true"
                />
                <h3 className="text-sm font-medium tracking-tight">
                  {field.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {field.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 border-t border-border pt-10 lg:grid-cols-3">
          {highlights.map((highlight) => (
            <li key={highlight.title} className="flex flex-col gap-3">
              <span className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <img
                  src={highlight.image}
                  alt={highlight.alt}
                  className="size-full object-cover"
                />
              </span>
              <h3 className="text-sm font-medium tracking-tight">
                {highlight.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {highlight.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
