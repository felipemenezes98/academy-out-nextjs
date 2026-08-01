"use client"

import { motion } from "motion/react"
import type { Tecnologia } from "../data"

type CardCyberProps = {
  tech: Tecnologia
  index: number
  selected: boolean
  onOpen: (tech: Tecnologia) => void
}

export function CardCyber({ tech, index, selected, onOpen }: CardCyberProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className={`group flex h-full flex-col overflow-hidden rounded-xl border bg-black/55 backdrop-blur-sm transition-shadow ${
        selected
          ? "border-[#f9f002] shadow-[0_0_28px_rgba(249,240,2,0.35)]"
          : "border-[#05d9e8]/35 shadow-[0_0_18px_rgba(5,217,232,0.12)] hover:border-[#ff2a6d]/60 hover:shadow-[0_0_24px_rgba(255,42,109,0.25)]"
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={tech.imagem}
          alt={tech.titulo}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <span className="absolute left-3 top-3 rounded border border-[#05d9e8]/50 bg-black/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#05d9e8]">
          {tech.categoria}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold tracking-wide text-white">
            {tech.titulo}
          </h3>
          <span className="shrink-0 rounded bg-[#f9f002]/15 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[#f9f002]">
            {tech.nivel}
          </span>
        </div>

        <p className="line-clamp-3 text-sm leading-relaxed text-zinc-400">
          {tech.descricao}
        </p>

        <button
          type="button"
          onClick={() => onOpen(tech)}
          className="mt-auto w-full rounded border border-[#f9f002] bg-[#f9f002] px-3 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-black hover:border-[#ff2a6d] hover:bg-[#ff2a6d] hover:text-white"
        >
          Acessar arquivo
        </button>
      </div>
    </motion.article>
  )
}
