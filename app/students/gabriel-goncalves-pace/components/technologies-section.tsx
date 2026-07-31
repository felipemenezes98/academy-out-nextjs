import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

import { technologies } from "../data/printing"

export function TechnologiesSection() {
  return (
    <section
      id="tecnologias"
      className="w-full scroll-mt-14 px-6 py-16 sm:px-10 sm:py-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <div className="flex flex-col gap-2">
          <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Tipos de impressora
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Tecnologias
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Impressora 3D é um nome só para processos bem diferentes. O que muda
            é o estado do material e a maneira de solidificá-lo.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <li key={technology.slug} className="flex flex-col gap-4">
              <div className="flex items-start justify-between gap-3">
                <technology.icon
                  className="size-5 text-muted-foreground"
                  aria-hidden="true"
                />
                <Badge variant="outline" className="shrink-0">
                  {technology.acronym}
                </Badge>
              </div>

              <h3 className="text-base font-medium tracking-tight">
                {technology.name}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {technology.description}
              </p>

              <Separator />

              <dl className="flex flex-col gap-1.5 text-xs">
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="tracking-[0.12em] text-muted-foreground uppercase">
                    Materiais
                  </dt>
                  <dd className="text-right">{technology.materials}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="tracking-[0.12em] text-muted-foreground uppercase">
                    Camada
                  </dt>
                  <dd className="text-right">{technology.layer}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
