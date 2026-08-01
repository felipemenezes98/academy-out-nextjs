"use client"

import { useMemo, useState } from "react"
import "./cyber-archive.css"
import { tecnologias as seed, type Tecnologia } from "./data"
import { AuroraCyber } from "./components/AuroraCyber"
import { CardCyber } from "./components/CardCyber"
import { ModalCyber } from "./components/ModalCyber"

export default function GabrielVarottoPage() {
  const [dados, setDados] = useState<Tecnologia[]>(seed)
  const [darkMode, setDarkMode] = useState(true)
  const [categoria, setCategoria] = useState("Todas")
  const [mostrarTodos, setMostrarTodos] = useState(false)
  const [selecionado, setSelecionado] = useState<Tecnologia | null>(null)
  const [modalAberto, setModalAberto] = useState(false)

  const categorias = useMemo(
    () => ["Todas", ...Array.from(new Set(dados.map((t) => t.categoria)))],
    [dados]
  )

  const filtrados = useMemo(() => {
    const base =
      categoria === "Todas"
        ? dados
        : dados.filter((item) => item.categoria === categoria)
    return mostrarTodos ? base : base.slice(0, 6)
  }, [dados, categoria, mostrarTodos])

  function abrirArquivo(tech: Tecnologia) {
    setSelecionado(tech)
    setModalAberto(true)
  }

  function adicionarCard() {
    const id = Math.max(0, ...dados.map((d) => d.id)) + 1
    const novo: Tecnologia = {
      id,
      titulo: `Arquivo #${id}`,
      categoria: "Protótipo",
      nivel: "Rascunho",
      imagem:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
      descricao:
        "Novo arquivo adicionado ao Cyber Archive. Edite este protótipo com sua própria curiosidade.",
      curiosidade:
        "Botão de adicionar cards — pedido nas notas do projeto para expandir o acervo.",
    }
    setDados((prev) => [...prev, novo])
    setMostrarTodos(true)
    setCategoria("Todas")
  }

  return (
    <main
      className={`gv-archive relative min-h-screen overflow-x-hidden ${
        darkMode ? "bg-[#050508] text-zinc-100" : "bg-[#ece8f4] text-zinc-900"
      }`}
    >
      <AuroraCyber />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <header className="mb-10 text-center sm:mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#05d9e8]">
            Terminal // Night City
          </p>
          <h1
            className={`gv-glitch mt-3 text-4xl font-black tracking-[0.12em] sm:text-6xl ${
              darkMode ? "text-white" : "text-[#120818]"
            }`}
          >
            CYBER ARCHIVE
          </h1>
          <p
            className={`mt-3 text-sm sm:text-base ${
              darkMode ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Banco de tecnologias do futuro
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setMostrarTodos((v) => !v)}
              className="rounded border border-[#f9f002] bg-[#f9f002] px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-black hover:border-[#ff2a6d] hover:bg-[#ff2a6d] hover:text-white"
            >
              {mostrarTodos ? "Mostrar resumo" : "Mostrar todos"}
            </button>
            <button
              type="button"
              onClick={() => setDarkMode((v) => !v)}
              className="rounded border border-[#05d9e8]/60 bg-black/50 px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#05d9e8] hover:border-[#ff2a6d] hover:text-[#ff2a6d]"
            >
              {darkMode ? "Tema claro" : "Tema escuro"}
            </button>
            <button
              type="button"
              onClick={adicionarCard}
              className="rounded border border-[#ff2a6d]/70 bg-[#ff2a6d]/15 px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#ff2a6d] hover:bg-[#ff2a6d] hover:text-white"
            >
              + Novo card
            </button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {categorias.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoria(cat)}
                className={`rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] ${
                  categoria === cat
                    ? "border-[#f9f002] bg-[#f9f002] text-black"
                    : "border-white/15 bg-black/40 text-zinc-300 hover:border-[#05d9e8]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((tech, index) => (
            <CardCyber
              key={tech.id}
              tech={tech}
              index={index}
              selected={selecionado?.id === tech.id}
              onOpen={abrirArquivo}
            />
          ))}
        </section>

        {filtrados.length === 0 ? (
          <p className="mt-10 text-center font-mono text-sm text-zinc-500">
            Nenhum arquivo nesta categoria.
          </p>
        ) : null}

        <footer className="mt-14 border-t border-white/10 pt-6 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
          Gabriel Varotto · Cyber Archive · Cyberpunk 2077
        </footer>
      </div>

      <ModalCyber
        tech={selecionado}
        open={modalAberto}
        onClose={() => setModalAberto(false)}
      />
    </main>
  )
}
