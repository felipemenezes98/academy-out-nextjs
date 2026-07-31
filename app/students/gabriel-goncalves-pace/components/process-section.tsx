import { steps } from "../data/printing"

export function ProcessSection() {
  return (
    <section
      id="processo"
      className="w-full scroll-mt-14 px-6 py-16 sm:px-10 sm:py-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <div className="flex flex-col gap-2">
          <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Processo
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Como uma peça é impressa
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            O caminho é o mesmo em qualquer tecnologia, do filamento de mesa à
            máquina de metal que custa o preço de um apartamento.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex flex-col gap-2 border-t border-border pt-4"
            >
              <span className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-sm font-medium tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
