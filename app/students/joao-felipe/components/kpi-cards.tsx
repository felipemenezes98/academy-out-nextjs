import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  DollarSignIcon,
  ReceiptIcon,
  ShoppingCartIcon,
  UserPlusIcon,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

import type { KpiKey, MonthData } from "../data"
import { buildKpis } from "../data"

const ICONS: Record<KpiKey, LucideIcon> = {
  revenue: DollarSignIcon,
  orders: ShoppingCartIcon,
  ticket: ReceiptIcon,
  newCustomers: UserPlusIcon,
}

function Delta({ delta }: { delta: number | null }) {
  if (delta === null) {
    return <span className="text-xs text-muted-foreground">—</span>
  }

  const positive = delta >= 0
  const Icon = positive ? ArrowUpRightIcon : ArrowDownRightIcon
  const formatted = `${positive ? "+" : ""}${new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 1,
  }).format(delta)}%`

  return (
    <span
      className={`inline-flex items-center gap-0.5 text-xs font-medium ${positive ? "text-primary" : "text-destructive"}`}
    >
      <Icon className="size-3.5" />
      {formatted}
    </span>
  )
}

export function KpiCards({
  data,
  previous,
}: {
  data: MonthData[]
  previous: MonthData[]
}) {
  const kpis = buildKpis(data, previous)

  return (
    <section
      aria-label="Indicadores"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
      {kpis.map((kpi) => {
        const Icon = ICONS[kpi.key]
        return (
          <div
            key={kpi.key}
            className="rounded-xl border bg-card p-5 text-card-foreground shadow-sm transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm text-muted-foreground">{kpi.label}</p>
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground [&_svg]:size-4">
                <Icon />
              </span>
            </div>
            <p className="mt-2 truncate text-2xl font-semibold tracking-tight">
              {kpi.value}
            </p>
            <div className="mt-1">
              <Delta delta={kpi.delta} />
              <span className="ml-1 text-xs text-muted-foreground">
                vs período anterior
              </span>
            </div>
          </div>
        )
      })}
    </section>
  )
}
