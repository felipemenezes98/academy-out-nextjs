"use client"

import { useEffect } from "react"
import { AnimatePresence, motion } from "motion/react"
import type { Tecnologia } from "../data"

type ModalCyberProps = {
  tech: Tecnologia | null
  open: boolean
  onClose: () => void
}

export function ModalCyber({ tech, open, onClose }: ModalCyberProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && tech ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center p-3 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Fechar modal"
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="gv-modal-title"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex max-h-[min(92dvh,840px)] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-[#05d9e8]/50 bg-[#0a0a0f] shadow-[0_0_40px_rgba(5,217,232,0.25)]"
          >
            <div className="relative h-44 shrink-0 sm:h-56">
              <img
                src={tech.imagem}
                alt={tech.titulo}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />
              <button
                type="button"
                onClick={onClose}
                className="absolute right-3 top-3 rounded border border-white/20 bg-black/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white hover:border-[#ff2a6d] hover:text-[#ff2a6d]"
              >
                Fechar
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-5 sm:p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#05d9e8]">
                {tech.categoria} · {tech.nivel}
              </p>
              <h2
                id="gv-modal-title"
                className="mt-2 text-2xl font-bold tracking-wide text-white sm:text-3xl"
              >
                {tech.titulo}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                {tech.descricao}
              </p>

              <div className="mt-6 rounded-lg border border-[#f9f002]/35 bg-[#f9f002]/10 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#f9f002]">
                  Curiosidade
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#f5f0c8]">
                  {tech.curiosidade}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
