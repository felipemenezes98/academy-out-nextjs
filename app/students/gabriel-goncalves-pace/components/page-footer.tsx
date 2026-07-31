import Link from "next/link"

import { Separator } from "@/components/ui/separator"

export function PageFooter() {
  return (
    <footer className="w-full px-6 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <Separator />

        <div className="grid gap-8 py-12 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="flex flex-col gap-2 lg:col-span-5">
            <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Camada Zero
            </p>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Um panorama da impressão 3D
            </h2>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-7 lg:items-start">
            <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
              Página de estudo feita no CCM Academy Out. As faixas de precisão
              seguem a classificação de processos da norma ISO/ASTM 52900 e as
              fotos vêm do Wikimedia Commons.
            </p>
          </div>
        </div>

        <Separator />

        <div className="flex flex-col gap-2 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>Gabriel Gonçalves Pace · CCM Academy Out</span>
          <Link
            href="/"
            className="tracking-[0.12em] uppercase transition-opacity duration-150 hover:opacity-60"
          >
            Voltar para a vitrine
          </Link>
        </div>
      </div>
    </footer>
  )
}
