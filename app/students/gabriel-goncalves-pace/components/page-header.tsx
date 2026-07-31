import Link from "next/link"

const LINKS = [
  { label: "Processo", href: "#processo" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Produtos", href: "#produtos" },
  { label: "Materiais", href: "#materiais" },
  { label: "Aplicações", href: "#aplicacoes" },
]

export function PageHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-6 px-6 sm:px-10">
        <Link
          href="/students/gabriel-goncalves-pace"
          className="text-sm font-medium tracking-[0.14em] uppercase"
        >
          Camada Zero
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.12em] text-muted-foreground uppercase transition-colors duration-150 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <span className="text-xs tracking-[0.12em] text-muted-foreground uppercase md:hidden">
          Guia
        </span>
      </div>
    </header>
  )
}
