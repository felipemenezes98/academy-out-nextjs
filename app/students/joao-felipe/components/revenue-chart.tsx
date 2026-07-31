"use client"

import { useState } from "react"

import type { MonthData } from "../data"
import { formatCompact, formatCurrency } from "../data"

const W = 640
const H = 240
const PAD_LEFT = 56
const PAD_RIGHT = 16
const PAD_TOP = 16
const PAD_BOTTOM = 28
const PLOT_W = W - PAD_LEFT - PAD_RIGHT
const PLOT_H = H - PAD_TOP - PAD_BOTTOM

const GRID_STEPS = [0, 0.25, 0.5, 0.75, 1]

export function RevenueChart({ data }: { data: MonthData[] }) {
  const [hovered, setHovered] = useState<number | null>(null)
  const n = data.length
  const max = Math.max(...data.map((d) => d.revenue))

  const x = (i: number) => (n === 1 ? PAD_LEFT + PLOT_W / 2 : PAD_LEFT + (i / (n - 1)) * PLOT_W)
  const y = (value: number) => PAD_TOP + PLOT_H - (value / max) * PLOT_H

  const points = data.map((d, i) => `${x(i)},${y(d.revenue)}`).join(" ")
  const baseline = PAD_TOP + PLOT_H
  const areaPath = `M ${x(0)} ${baseline} L ${points.replaceAll(" ", " L ")} L ${x(n - 1)} ${baseline} Z`

  function handlePointerMove(event: React.PointerEvent<SVGSVGElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    const ratio = (event.clientX - rect.left) / rect.width
    const index = Math.round(Math.max(0, Math.min(1, ratio)) * (n - 1))
    setHovered(index)
  }

  const hoveredPoint = hovered !== null ? data[hovered] : null

  return (
    <section className="rounded-xl border bg-card p-5 text-card-foreground shadow-sm transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-base font-medium tracking-tight">Receita mensal</h2>
          <p className="text-sm text-muted-foreground">Últimos {n} meses</p>
        </div>
      </div>

      <div className="relative">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          onPointerMove={handlePointerMove}
          onPointerLeave={() => setHovered(null)}
          role="img"
          aria-label={`Gráfico de receita mensal dos últimos ${n} meses`}
        >
          {GRID_STEPS.map((step) => (
            <g key={step}>
              <line
                x1={PAD_LEFT}
                x2={W - PAD_RIGHT}
                y1={PAD_TOP + PLOT_H - step * PLOT_H}
                y2={PAD_TOP + PLOT_H - step * PLOT_H}
                className="stroke-border"
                strokeWidth={1}
              />
              <text
                x={PAD_LEFT - 8}
                y={PAD_TOP + PLOT_H - step * PLOT_H + 4}
                textAnchor="end"
                className="fill-muted-foreground text-[11px]"
              >
                {formatCompact(max * step)}
              </text>
            </g>
          ))}

          <path d={areaPath} className="fill-chart-1/15" />
          <polyline
            points={points}
            fill="none"
            className="stroke-chart-1"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {data.map((d, i) =>
            i % 2 === 1 && n > 6 ? null : (
              <text
                key={d.month}
                x={x(i)}
                y={H - 8}
                textAnchor="middle"
                className="fill-muted-foreground text-[11px]"
              >
                {d.month}
              </text>
            )
          )}

          {hovered !== null && (
            <>
              <line
                x1={x(hovered)}
                x2={x(hovered)}
                y1={PAD_TOP}
                y2={baseline}
                className="stroke-border"
                strokeWidth={1}
                strokeDasharray="4 4"
              />
              <circle
                cx={x(hovered)}
                cy={y(data[hovered].revenue)}
                r={4.5}
                className="fill-chart-2"
                strokeWidth={2}
              />
            </>
          )}
        </svg>

        {hovered !== null && hoveredPoint && (
          <div
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-md border bg-popover px-2.5 py-1.5 text-xs text-popover-foreground shadow-sm"
            style={{
              left: `${(x(hovered) / W) * 100}%`,
              top: `${(y(data[hovered].revenue) / H) * 100}%`,
            }}
          >
            <p className="font-medium">{hoveredPoint.month}</p>
            <p className="text-muted-foreground">
              {formatCurrency(hoveredPoint.revenue)}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
