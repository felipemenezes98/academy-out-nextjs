"use client"

import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import type { OrderStatus } from "../data"
import { orders as allOrders } from "../data"
import { formatCurrency } from "../data"

const STATUS_VARIANTS: Record<OrderStatus, "default" | "outline" | "secondary" | "destructive"> = {
  Pago: "default",
  Pendente: "outline",
  Cancelado: "destructive",
  Reembolsado: "secondary",
}

const STATUS_FILTERS = ["Todos", "Pago", "Pendente", "Cancelado", "Reembolsado"] as const

const PAGE_SIZE = 8

type StatusFilter = (typeof STATUS_FILTERS)[number]

export function OrdersTable() {
  const [filter, setFilter] = useState<StatusFilter>("Todos")
  const [page, setPage] = useState(1)
  const filteredOrders =
    filter === "Todos" ? allOrders : allOrders.filter((order) => order.status === filter)

  const totalPages = Math.max(1, Math.ceil(filteredOrders.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const pagedOrders = filteredOrders.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  )

  return (
    <section className="rounded-xl border bg-card text-card-foreground shadow-sm transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none">
      <div className="flex flex-wrap items-center justify-between gap-4 p-5">
        <div>
          <h2 className="text-base font-medium tracking-tight">Pedidos recentes</h2>
          <p className="text-sm text-muted-foreground">
            {filteredOrders.length} de {allOrders.length} pedidos
          </p>
        </div>
        <Select
          value={filter}
          onValueChange={(value) => {
            setFilter(value as StatusFilter)
            setPage(1)
          }}
        >
          <SelectTrigger size="sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {STATUS_FILTERS.map((status) => (
              <SelectItem key={status} value={status}>
                {status === "Todos" ? "Todos os status" : status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-t text-xs uppercase text-muted-foreground">
              <th scope="col" className="px-5 py-2.5 text-left font-medium">
                Pedido
              </th>
              <th scope="col" className="px-5 py-2.5 text-left font-medium">
                Cliente
              </th>
              <th scope="col" className="px-5 py-2.5 text-left font-medium">
                Data
              </th>
              <th scope="col" className="px-5 py-2.5 text-right font-medium">
                Valor
              </th>
              <th scope="col" className="px-5 py-2.5 text-left font-medium">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {pagedOrders.map((order) => (
              <tr key={order.id} className="border-t odd:bg-muted/50">
                <td className="px-5 py-3 font-medium">{order.id}</td>
                <td className="px-5 py-3 text-muted-foreground">{order.customer}</td>
                <td className="px-5 py-3 text-muted-foreground">{order.date}</td>
                <td className="px-5 py-3 text-right">{formatCurrency(order.amount)}</td>
                <td className="px-5 py-3">
                  <Badge variant={STATUS_VARIANTS[order.status]}>{order.status}</Badge>
                </td>
              </tr>
            ))}
            {pagedOrders.length === 0 && (
              <tr>
                <td colSpan={5} className="px-5 py-10 text-center text-muted-foreground">
                  Nenhum pedido com este status.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between gap-4 border-t p-4">
        <p className="text-sm text-muted-foreground">
          Página {currentPage} de {totalPages}
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage <= 1}
            onClick={() => setPage(currentPage - 1)}
          >
            <ChevronLeftIcon />
            Anterior
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage >= totalPages}
            onClick={() => setPage(currentPage + 1)}
          >
            Próxima
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </section>
  )
}
