"use client"

import * as React from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"

export function HomeHero() {
  const ref = React.useRef<HTMLElement>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, -48])

  return (
    <section ref={ref} className="relative h-[200vh] w-full">
      <div className="sticky top-0 flex h-svh items-center justify-center px-6">
        <motion.div
          style={reduce ? undefined : { opacity, y }}
          className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 text-center"
        >
          <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
            CCM Tecnologia
          </p>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Academy Out
          </h1>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Programa prático de formação em frontend, produto e inteligência
            artificial.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
