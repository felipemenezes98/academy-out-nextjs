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

import { KpiCards } from "./kpi-cards"
import { OrdersTable } from "./orders-table"
import { RevenueChart } from "./revenue-chart"
import { ThemeToggle } from "./theme-toggle"
import { monthlyData, type PeriodMonths } from "../data"

const PERIODS: { value: PeriodMonths; label: string }[] = [
  { value: 3, label: "Últimos 3 meses" },
  { value: 6, label: "Últimos 6 meses" },
  { value: 12, label: "Últimos 12 meses" },
]

export function ShowcaseDashboard() {
  const [period, setPeriod] = useState<PeriodMonths>(6)

  const current = monthlyData.slice(-period)
  const previous = monthlyData.slice(-period * 2, -period)

  return (
    <div className="w-full bg-card text-card-foreground rounded-2xl p-4 sm:p-6 md:p-8 border border-border shadow-xs">
      <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Painel Operacional
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Dados de faturamento e vendas em tempo real
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select
            value={String(period)}
            onValueChange={(value) => setPeriod(Number(value) as PeriodMonths)}
          >
            <SelectTrigger size="sm" className="h-8 text-xs">
              <CalendarRangeIcon className="size-3.5" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {PERIODS.map((option) => (
                <SelectItem key={option.value} value={String(option.value)} className="text-xs">
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
    </div>
  )
}
