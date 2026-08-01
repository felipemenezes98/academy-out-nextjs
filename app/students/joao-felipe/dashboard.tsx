"use client"

import { useEffect, useState } from "react"
import {
  ArrowUpRight,
  Cpu,
  Layers,
  Lock,
  Menu,
  Sparkles,
  TrendingUp,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"

import { CtaLink } from "./components/cta-link"
import { FeatureCard } from "./components/feature-card"
import { Reveal } from "./components/reveal"
import { ShowcaseDashboard } from "./components/showcase-dashboard"

const NAV_LINKS = [
  { href: "#showcase", label: "Showcase" },
  { href: "#features", label: "Recursos" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#cta", label: "Começar" },
]

const FEATURES: {
  icon: LucideIcon
  iconClassName: string
  title: string
  description: string
  size: "lg" | "sm"
  className: string
}[] = [
  {
    icon: TrendingUp,
    iconClassName: "bg-primary/10 text-primary",
    title: "Previsibilidade Financeira Ativa",
    description:
      "Nossos algoritmos analisam o histórico operacional, prevendo as flutuações sazonais do seu fluxo de caixa para guiar tomadas de decisões preventivas.",
    size: "lg",
    className: "md:col-span-8",
  },
  {
    icon: Lock,
    iconClassName: "bg-accent/30 text-accent-foreground",
    title: "Criptografia Militar",
    description:
      "Garantia absoluta de conformidade com padrões PCI-DSS de forma embarcada.",
    size: "sm",
    className: "md:col-span-4",
  },
  {
    icon: Cpu,
    iconClassName: "bg-muted text-foreground",
    title: "Engine Assíncrona",
    description:
      "Processamento distribuído sem filas para picos extremos de tráfego.",
    size: "sm",
    className: "md:col-span-4",
  },
  {
    icon: Layers,
    iconClassName: "bg-primary/10 text-primary",
    title: "Multi-tenant Nativo",
    description:
      "Gerencie múltiplas unidades corporativas e franquias sob o mesmo painel unificado com isolamento seguro e controle de acessos fino e auditável.",
    size: "lg",
    className: "md:col-span-8",
  },
]

const TESTIMONIALS = [
  {
    quote:
      '"A migração para essa nova interface operacional nos economizou mais de 15 horas semanais de análise. A fluidez da atualização de períodos faz parecer um aplicativo nativo."',
    name: "Mariana Vasconcelos",
    role: "Diretora de Finanças, Apex Capital",
    initials: "MV",
    avatarClassName: "bg-primary/20",
  },
  {
    quote:
      '"Segurança integrada e precisão nos gráficos sem latência de banco de dados. Nosso faturamento agora é centralizado sem fricção analítica."',
    name: "Bernardo Aguiar",
    role: "CTO, CoreStack Logística",
    initials: "BA",
    avatarClassName: "bg-accent/20",
  },
]

export function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.style.scrollBehavior = "smooth"
    }
  }, [])

  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden bg-background font-sans text-foreground transition-colors duration-300">
      {/* Background radial gradient mesh with low-opacity noise-like overlays */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] h-[100%] w-[140%] rounded-full bg-radial from-primary/10 via-transparent to-transparent blur-[120px] dark:from-primary/5" />
        <div className="absolute -right-[10%] -bottom-[20%] h-[80%] w-[100%] rounded-full bg-radial from-accent/15 via-transparent to-transparent blur-[100px] dark:from-accent/5" />
      </div>

      {/* Floating Header (Dynamic Island Style) */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 mx-auto mt-4 w-[calc(100%-2rem)] max-w-5xl rounded-full border border-border/40 bg-background/60 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled
            ? "px-6 py-3 shadow-md shadow-foreground/[0.04]"
            : "px-8 py-4"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 hover:scale-105">
              <Sparkles className="size-5" />
            </div>
            <span className="text-base font-semibold tracking-tight text-foreground">
              Vortex<span className="font-bold text-primary">.</span>
            </span>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <CtaLink href="#cta" size="sm">
              Fazer Upgrade
            </CtaLink>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-background/50 text-foreground md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="size-4" />
            ) : (
              <Menu className="size-4" />
            )}
          </button>
        </div>

        {/* Mobile menu modal overlay */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-full mt-3 flex flex-col gap-4 rounded-3xl border border-border/40 bg-background/95 p-6 shadow-xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-4 text-sm font-medium">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <hr className="border-border/40" />
            <a
              href="#cta"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground"
            >
              Começar Grátis <ArrowUpRight className="size-4" />
            </a>
          </div>
        )}
      </nav>

      {/* Cinematic Hero Section */}
      <section className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-36 pb-20 text-center sm:px-8 sm:pt-44">
        {/* Eyebrow badge */}
        <div className="mb-6 flex animate-in items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-primary uppercase duration-700 fade-in">
          <Zap className="size-3" />
          Métricas de Próxima Geração
        </div>

        <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-balance sm:text-5xl md:text-6xl md:leading-[1.1]">
          Faturamento sob controle, <br />
          <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
            sem complexidade analítica.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-balance text-muted-foreground sm:text-base md:text-lg">
          Tome decisões baseadas em dados com um motor operacional que
          simplifica métricas, prevê tendências e unifica seus canais de venda
          em uma interface háptica de alta performance.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <CtaLink href="#cta">Iniciar Demonstração</CtaLink>
          <a
            href="#features"
            className="rounded-full border border-border bg-background/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-xs transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Explorar Recursos
          </a>
        </div>
      </section>

      {/* Showcase Dashboard Section with Double-Bezel Architecture */}
      <section
        id="showcase"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20"
      >
        <Reveal>
          <div className="group relative rounded-[2.5rem] bg-muted/40 p-2.5 shadow-2xl ring-1 ring-border/50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-primary/20 sm:p-4">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="overflow-hidden rounded-[calc(2.5rem-10px)]">
              <ShowcaseDashboard />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Asymmetrical Bento Grid Feature Section */}
      <section id="features" className="mx-auto max-w-5xl px-6 py-24 sm:px-8">
        <Reveal>
          <div className="mb-16 text-center md:flex md:items-end md:justify-between md:text-left">
            <div className="max-w-xl">
              <div className="mb-3 inline-block rounded-full border border-border bg-muted/50 px-3 py-1 text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
                Infraestrutura
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Moldado para performance. <br />
                Construído com obsessão.
              </h2>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground md:mt-0">
              Nossos módulos combinam segurança, precisão de milissegundos e
              layout estruturado para suas operações financeiras.
            </p>
          </div>
        </Reveal>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {FEATURES.map((feature, index) => (
            <Reveal
              key={feature.title}
              delay={index * 0.08}
              className={`${feature.className} h-full`}
            >
              <FeatureCard
                icon={feature.icon}
                iconClassName={feature.iconClassName}
                title={feature.title}
                description={feature.description}
                size={feature.size}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Clean Social Proof / Testimonial section */}
      <section
        id="testimonials"
        className="mx-auto max-w-5xl px-6 py-20 sm:px-8"
      >
        <Reveal>
          <div className="mb-12 text-center">
            <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
              Depoimentos
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
              Aprovado por líderes de operações
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, index) => (
            <Reveal key={t.name} delay={index * 0.1}>
              <div className="rounded-3xl border border-border/40 bg-card p-8 shadow-xs">
                <p className="text-sm leading-relaxed text-muted-foreground italic">
                  {t.quote}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar size="lg">
                    <AvatarFallback className={t.avatarClassName}>
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {t.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Premium Call-to-Action */}
      <section id="cta" className="mx-auto max-w-5xl px-6 py-24 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card px-8 py-16 text-center shadow-xl sm:px-16 sm:py-20">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

            <h2 className="mx-auto max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Pronto para transformar sua análise financeira?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Comece em minutos com nossa demonstração interativa e entenda o
              poder da Vortex.
            </p>

            <div className="mt-8 flex justify-center">
              <CtaLink href="#">Iniciar Gratuitamente</CtaLink>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-5xl border-t border-border/40 px-6 py-12 text-xs text-muted-foreground sm:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary">
              V
            </div>
            <span>
              Vortex &copy; {new Date().getFullYear()} — Todos os direitos
              reservados.
            </span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">
              Políticas
            </a>
            <a href="#" className="hover:text-foreground">
              Termos
            </a>
            <a href="#" className="hover:text-foreground">
              Contato
            </a>
          </div>
        </div>
        <p className="mt-4 text-center text-[10px] text-muted-foreground/60 sm:text-left">
          Made by João Felipe — CCM Academy Out. Dados fictícios e interface de
          alta fidelidade baseada em design system personalizado.
        </p>
      </footer>
    </div>
  )
}
