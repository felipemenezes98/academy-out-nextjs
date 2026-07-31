import type { Metadata } from "next"
import Image from "next/image"
import {
  Clock,
  Cpu,
  Fuel,
  Gauge,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  TrendingUp,
} from "lucide-react"

import heroImage from "./hero-remap.png"

export const metadata: Metadata = {
  title: "Leaf Garage",
  description:
    "Leaf Garage — especialistas em eletrônica automotiva, remap e ganho de potência em Ribeirão Preto.",
}

const PHONE_LABEL = "(16) 98115-6904"

const cards = [
  {
    icon: Gauge,
    title: "Ganho de potência",
    description:
      "Recalibramos as tabelas de injeção, ignição e pressão de turbo para liberar o potencial que veio bloqueado de fábrica.",
    highlight: "+30% de torque em motores turbo",
  },
  {
    icon: Fuel,
    title: "Economia real",
    description:
      "Um mapa bem ajustado melhora a queima e a resposta do acelerador — menos pé fundo para andar igual, menos consumo no dia a dia.",
    highlight: "Até 12% menos consumo em estrada",
  },
  {
    icon: Cpu,
    title: "Eletrônica sob medida",
    description:
      "Leitura, gravação e clonagem de ECU, correção de erros e desativação de limitadores com equipamento profissional.",
    highlight: "Backup original sempre salvo",
  },
]

const services = [
  "Remap Stage 1 e Stage 2",
  "Diagnóstico eletrônico completo",
  "Clonagem e reparo de módulos",
  "Pop & bang e ajuste de resposta",
  "Acompanhamento em dinamômetro",
  "Revisão pós-remap sem custo",
]

export default function Page() {
  return (
    <div className="min-h-svh bg-[#0a0a0a] text-zinc-100 selection:bg-red-500/40">
      <Header />
      <main>
        <Hero />
        <RemapSection />
        <StorySection />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <Logo className="h-8 sm:h-9" />
        <a
          href="tel:+5516981156904"
          className="flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/20 sm:px-4"
        >
          <Phone className="size-4 shrink-0" aria-hidden />
          <span className="hidden sm:inline">{PHONE_LABEL}</span>
          <span className="sm:hidden">Contato</span>
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[78svh] items-center overflow-hidden px-4 py-20 sm:min-h-[85svh] sm:px-6">
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt="Carro esportivo em uma oficina de remap, com o gráfico de curva de potência ao fundo"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/40 lg:via-[#0a0a0a]/70 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/60" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="flex max-w-xl flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <LogoMark className="size-20 drop-shadow-[0_0_35px_rgba(239,68,68,0.45)] sm:size-28" />
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Leaf Garage
          </h1>
          <p className="text-xs tracking-[0.3em] text-red-400 uppercase sm:text-sm">
            Eletrônica automotiva · Remap · Potência
          </p>
          <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
            Reprogramação de centrais eletrônicas feita com calma, medição e
            responsabilidade. Seu carro entregando tudo o que o motor já sabe
            fazer.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="tel:+5516981156904"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-500"
            >
              <MessageCircle className="size-4" aria-hidden />
              Agendar avaliação
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-zinc-100 transition-colors hover:border-white/40 hover:bg-white/5"
            >
              Ver serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function RemapSection() {
  return (
    <section id="servicos" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.25em] text-red-500 uppercase">
            O que é remap
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Reprogramação eletrônica, não milagre
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            O remap é o ajuste do software da central eletrônica (ECU) que
            comanda o seu motor. A fábrica calibra pensando em combustível ruim,
            manutenção atrasada e clima extremo do mundo inteiro. Aqui a
            calibração é feita para o seu carro, o seu combustível e o seu uso.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-red-500/50 hover:bg-white/[0.06] sm:p-7"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 ring-1 ring-red-500/30">
                <card.icon className="size-6" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {card.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {card.description}
              </p>
              <p className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-sm font-medium text-red-400">
                <TrendingUp className="size-4 shrink-0" aria-hidden />
                {card.highlight}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function StorySection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <DynoChart />

        <div>
          <p className="text-xs font-medium tracking-[0.25em] text-red-500 uppercase">
            Nossa história
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Da garagem de casa para a bancada
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            A Leaf Garage começou como hobby: um Golf GTI, um notebook velho e a
            teimosia de entender por que aquele motor entregava menos do que
            podia. Depois de muitos fins de semana lendo mapa de injeção, o
            hobby virou bancada, e a bancada virou oficina.
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            Hoje trabalhamos com carros aspirados e turbo, sempre com o mesmo
            método: diagnóstico antes, backup do arquivo original, calibração
            gradual e teste em dinamômetro. Se o motor não estiver saudável, a
            gente avisa e não grava nada — potência sem manutenção é conta que
            chega depois.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <li
                key={service}
                className="flex items-start gap-2 text-sm text-zinc-300"
              >
                <span
                  className="mt-1.5 size-1.5 shrink-0 rounded-full bg-red-500"
                  aria-hidden
                />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/** Imagem da seção — gráfico de dinamômetro (original x Stage 1), em SVG. */
function DynoChart() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <svg
        viewBox="0 0 640 480"
        className="h-auto w-full"
        role="img"
        aria-label="Gráfico de dinamômetro comparando a curva de potência original com a curva após o remap Stage 1"
      >
        <defs>
          <linearGradient id="dyno-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
          </linearGradient>
          <pattern
            id="dyno-grid"
            width="64"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M64 0H0V48"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.06"
            />
          </pattern>
        </defs>

        <rect width="640" height="480" fill="#0a0a0a" />
        <rect
          x="48"
          y="48"
          width="544"
          height="336"
          fill="url(#dyno-grid)"
          stroke="#ffffff"
          strokeOpacity="0.1"
        />

        {/* curva stage 1 */}
        <path
          d="M48 384 C 160 350, 240 220, 330 140 S 470 78, 592 96 L592 384Z"
          fill="url(#dyno-fill)"
        />
        <path
          d="M48 384 C 160 350, 240 220, 330 140 S 470 78, 592 96"
          fill="none"
          stroke="#ef4444"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* curva original */}
        <path
          d="M48 384 C 170 366, 260 288, 350 232 S 480 190, 592 206"
          fill="none"
          stroke="#71717a"
          strokeWidth="3"
          strokeDasharray="8 8"
          strokeLinecap="round"
        />

        {/* eixos */}
        <g stroke="#ffffff" strokeOpacity="0.2" strokeWidth="2">
          <path d="M48 384h544" />
          <path d="M48 48v336" />
        </g>

        <g
          fill="#a1a1aa"
          fontFamily="var(--font-mono, monospace)"
          fontSize="15"
        >
          <text x="48" y="416">
            2.000 rpm
          </text>
          <text x="480" y="416">
            6.500 rpm
          </text>
          <text x="48" y="34">
            Potência (cv)
          </text>
        </g>

        <g fontFamily="var(--font-sans, sans-serif)" fontSize="16">
          <rect
            x="360"
            y="66"
            width="16"
            height="4"
            rx="2"
            fill="#ef4444"
            transform="translate(0 -4)"
          />
          <text x="386" y="70" fill="#ef4444">
            Stage 1 · 212 cv
          </text>
          <rect
            x="360"
            y="96"
            width="16"
            height="3"
            rx="1.5"
            fill="#71717a"
            transform="translate(0 -4)"
          />
          <text x="386" y="100" fill="#a1a1aa">
            Original · 170 cv
          </text>
        </g>
      </svg>

      <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 px-6 py-5 text-sm">
        <span className="text-zinc-400">
          Ganho médio medido:{" "}
          <strong className="font-semibold text-red-400">+42 cv</strong>
        </span>
        <span className="text-zinc-400">
          Torque: <strong className="font-semibold text-red-400">+68 Nm</strong>
        </span>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Logo className="h-9" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
            Eletrônica automotiva e reprogramação de centrais. Potência com
            método, medição e responsabilidade.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-zinc-400">
            <li>
              <a
                href="tel:+5516981156904"
                className="flex items-center gap-2 transition-colors hover:text-red-400"
              >
                <Phone className="size-4 shrink-0 text-red-500" aria-hidden />
                {PHONE_LABEL}
              </a>
            </li>
            <li>
              <a
                href="mailto:contato@leafgarage.com.br"
                className="flex items-center gap-2 transition-colors hover:text-red-400"
              >
                <Mail className="size-4 shrink-0 text-red-500" aria-hidden />
                contato@leafgarage.com.br
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 shrink-0 text-red-500" aria-hidden />
              Seg. a sex., 8h às 18h · sáb., 8h às 12h
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
            Onde estamos
          </h3>
          <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-zinc-400">
            <MapPin
              className="mt-0.5 size-4 shrink-0 text-red-500"
              aria-hidden
            />
            <span>
              Ribeirão Preto — SP
              <br />
              Atendemos toda a região: Sertãozinho, Cravinhos, Jardinópolis,
              Bonfim Paulista e Franca.
            </span>
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Leaf Garage. Todos os direitos
          reservados.
        </p>
        <p>Protótipo criado por Rafael Domingos · Academy Out</p>
      </div>
    </footer>
  )
}

function Logo({ className }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className="h-full w-auto" />
      <span className="flex flex-col leading-none">
        <span className="text-base font-semibold tracking-tight text-white sm:text-lg">
          Leaf Garage
        </span>
        <span className="mt-0.5 text-[10px] tracking-[0.2em] text-red-500 uppercase">
          Remap &amp; Tuning
        </span>
      </span>
    </span>
  )
}

/** Símbolo da marca: uma folha desenhada como ponteiro de conta-giros. */
function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id="leaf-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>
      </defs>
      <circle
        cx="32"
        cy="32"
        r="29"
        fill="none"
        stroke="url(#leaf-mark)"
        strokeWidth="2.5"
        strokeDasharray="128 54"
        strokeLinecap="round"
        transform="rotate(125 32 32)"
      />
      <path
        d="M46 15c2 18-6 30-19 32-4 1-7-1-8-5-2-11 8-23 27-27Z"
        fill="url(#leaf-mark)"
      />
      <path
        d="M44 18C33 25 26 33 22 45"
        fill="none"
        stroke="#0a0a0a"
        strokeOpacity="0.6"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="32" cy="32" r="3.5" fill="#0a0a0a" />
      <circle
        cx="32"
        cy="32"
        r="3.5"
        fill="none"
        stroke="#ef4444"
        strokeWidth="2"
      />
    </svg>
  )
}
