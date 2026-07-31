export type MonthData = {
  month: string
  revenue: number
  orders: number
  newCustomers: number
}

export type OrderStatus = "Pago" | "Pendente" | "Cancelado" | "Reembolsado"

export type Order = {
  id: string
  customer: string
  date: string
  amount: number
  status: OrderStatus
}

export type PeriodMonths = 3 | 6 | 12

export const monthlyData: MonthData[] = [
  { month: "Jul/25", revenue: 12400, orders: 54, newCustomers: 12 },
  { month: "Ago/25", revenue: 13800, orders: 61, newCustomers: 15 },
  { month: "Set/25", revenue: 13100, orders: 57, newCustomers: 11 },
  { month: "Out/25", revenue: 15200, orders: 66, newCustomers: 17 },
  { month: "Nov/25", revenue: 16800, orders: 72, newCustomers: 19 },
  { month: "Dez/25", revenue: 19400, orders: 84, newCustomers: 22 },
  { month: "Jan/26", revenue: 17200, orders: 74, newCustomers: 18 },
  { month: "Fev/26", revenue: 16100, orders: 69, newCustomers: 16 },
  { month: "Mar/26", revenue: 18800, orders: 81, newCustomers: 21 },
  { month: "Abr/26", revenue: 20400, orders: 88, newCustomers: 24 },
  { month: "Mai/26", revenue: 22600, orders: 96, newCustomers: 27 },
  { month: "Jun/26", revenue: 24800, orders: 105, newCustomers: 31 },
]

// ponytail: gerador determinístico de pedidos fictícios (sem Math.random) para volume de dados mock
const CUSTOMER_NAMES = [
  "Mariana Souza", "Rafael Lima", "Camila Rocha", "Bruno Carvalho", "Fernanda Alves",
  "Diego Martins", "Juliana Castro", "Pedro Nogueira", "Larissa Mendes", "Thiago Barbosa",
  "Amanda Pires", "Gustavo Teixeira", "Beatriz Cunha", "Henrique Freitas", "Patrícia Ramos",
  "Rodrigo Azevedo", "Vanessa Duarte", "Leonardo Farias", "Sofia Cardoso", "André Melo",
  "Carolina Nascimento", "Felipe Araújo", "Letícia Monteiro", "Otávio Peixoto", "Renata Figueiredo",
  "Marcelo Tavares", "Isabela Pinto", "Vinícius Aguiar", "Natália Braga", "Caio Moreira",
]

const AMOUNTS = [349.9, 129.9, 89.5, 459.0, 219.9, 74.9, 189.9, 599.0, 99.9, 269.9, 149.9, 399.0]

const STATUS_POOL: OrderStatus[] = [
  "Pago", "Pago", "Pago", "Pago", "Pendente", "Cancelado", "Reembolsado",
]

function pad2(value: number) {
  return String(value).padStart(2, "0")
}

function dateDaysBack(daysBack: number) {
  const date = new Date(2026, 5, 28)
  date.setDate(date.getDate() - daysBack)
  return `${pad2(date.getDate())}/${pad2(date.getMonth() + 1)}/${date.getFullYear()}`
}

function generateOrders(count: number): Order[] {
  return Array.from({ length: count }, (_, index) => ({
    id: `#${1105 - index}`,
    customer: CUSTOMER_NAMES[index % CUSTOMER_NAMES.length],
    date: dateDaysBack(index),
    amount: AMOUNTS[index % AMOUNTS.length],
    status: STATUS_POOL[index % STATUS_POOL.length],
  }))
}

export const orders: Order[] = generateOrders(45)

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
})

const numberFormatter = new Intl.NumberFormat("pt-BR")

const compactFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  notation: "compact",
  maximumSignificantDigits: 2,
})

export function formatCurrency(value: number) {
  return currencyFormatter.format(value)
}

export function formatNumber(value: number) {
  return numberFormatter.format(value)
}

export function formatCompact(value: number) {
  return compactFormatter.format(value)
}

export type KpiKey = "revenue" | "orders" | "ticket" | "newCustomers"

export type Kpi = {
  key: KpiKey
  label: string
  value: string
  delta: number | null
}

export function sum(values: number[]) {
  return values.reduce((acc, value) => acc + value, 0)
}

export function deltaPercent(current: number, previous: number) {
  if (previous === 0) {
    return null
  }
  return ((current - previous) / previous) * 100
}

export function buildKpis(data: MonthData[], previous: MonthData[]): Kpi[] {
  const revenue = sum(data.map((d) => d.revenue))
  const prevRevenue = sum(previous.map((d) => d.revenue))
  const orders = sum(data.map((d) => d.orders))
  const prevOrders = sum(previous.map((d) => d.orders))
  const newCustomers = sum(data.map((d) => d.newCustomers))
  const prevNewCustomers = sum(previous.map((d) => d.newCustomers))
  const ticket = orders > 0 ? revenue / orders : 0
  const prevTicket = prevOrders > 0 ? prevRevenue / prevOrders : 0

  return [
    {
      key: "revenue",
      label: "Receita total",
      value: formatCurrency(revenue),
      delta: deltaPercent(revenue, prevRevenue),
    },
    {
      key: "orders",
      label: "Pedidos",
      value: formatNumber(orders),
      delta: deltaPercent(orders, prevOrders),
    },
    {
      key: "ticket",
      label: "Ticket médio",
      value: formatCurrency(ticket),
      delta: deltaPercent(ticket, prevTicket),
    },
    {
      key: "newCustomers",
      label: "Novos clientes",
      value: formatNumber(newCustomers),
      delta: deltaPercent(newCustomers, prevNewCustomers),
    },
  ]
}
