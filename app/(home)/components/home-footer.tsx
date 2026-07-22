import { Separator } from "@/components/ui/separator"

export function HomeFooter() {
  return (
    <footer className="w-full px-6 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <Separator />

        <div className="grid gap-8 py-12 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="flex flex-col gap-2 lg:col-span-5">
            <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
              CCM Academy Out
            </p>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Próxima turma em breve
            </h2>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-7 lg:items-start">
            <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
              Formação prática em frontend e IA, com mentoria da CCM Tecnologia.
            </p>
            <a
              href="https://www.linkedin.com/company/ccm-tecnologia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.14em] text-foreground uppercase transition-opacity duration-150 hover:opacity-60"
            >
              Saber mais
            </a>
          </div>
        </div>

        <Separator />

        <div className="flex flex-col gap-2 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} CCM Tecnologia</span>
          <span className="tracking-[0.12em] uppercase">Frontend + IA</span>
        </div>
      </div>
    </footer>
  )
}
