"use client"

import { useState } from "react"
import { CalendarRangeIcon } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { KpiCards } from "./components/kpi-cards"
import { OrdersTable } from "./components/orders-table"
import { RevenueChart } from "./components/revenue-chart"
import { ThemeToggle } from "./components/theme-toggle"
import { monthlyData, type PeriodMonths } from "./data"

const PERIODS: { value: PeriodMonths; label: string }[] = [
  { value: 3, label: "Últimos 3 meses" },
  { value: 6, label: "Últimos 6 meses" },
  { value: 12, label: "Últimos 12 meses" },
]

export function Dashboard() {
  const [period, setPeriod] = useState<PeriodMonths>(6)

  const current = monthlyData.slice(-period)
  const previous = monthlyData.slice(-period * 2, -period)

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
      <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Visão Geral</h1>
          <p className="text-sm text-muted-foreground">
            Painel de vendas com dados mockados
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select
            value={String(period)}
            onValueChange={(value) => setPeriod(Number(value) as PeriodMonths)}
          >
            <SelectTrigger size="sm">
              <CalendarRangeIcon />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {PERIODS.map((option) => (
                <SelectItem key={option.value} value={String(option.value)}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <ThemeToggle />
        </div>
      </header>

      <div className="flex flex-col gap-6">
        <KpiCards data={current} previous={previous} />
        <RevenueChart data={current} />
        <OrdersTable />
      </div>

      <footer className="mt-8 border-t pt-4 text-xs text-muted-foreground">
        <p>Made by João Felipe — CCM Academy Out. Dados fictícios somente para demonstração.</p>
      </footer>
    </div>
  )
}
