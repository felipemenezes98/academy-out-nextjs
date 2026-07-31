import assert from "node:assert/strict"
import { test } from "node:test"

import { buildKpis, deltaPercent, monthlyData, sum } from "./data.ts"

test("sum soma os valores", () => {
  assert.equal(sum([1, 2, 3]), 6)
  assert.equal(sum([]), 0)
})

test("deltaPercent calcula variação e protege divisão por zero", () => {
  assert.equal(deltaPercent(120, 100), 20)
  assert.equal(deltaPercent(90, 100), -10)
  assert.equal(deltaPercent(100, 0), null)
})

test("buildKpis dos últimos 6 meses bate com os valores esperados", () => {
  const data = monthlyData.slice(-6)
  const previous = monthlyData.slice(-12, -6)
  const byKey = Object.fromEntries(buildKpis(data, previous).map((k) => [k.key, k]))

  assert.ok(byKey.revenue.value.includes("119.900"))
  assert.equal(byKey.orders.value, "513")
  assert.equal(byKey.newCustomers.value, "137")
  assert.ok(
    Math.abs(byKey.revenue.delta - ((119900 - 90700) / 90700) * 100) < 1e-9
  )
  assert.ok(Math.abs(byKey.orders.delta - ((513 - 394) / 394) * 100) < 1e-9)
})
