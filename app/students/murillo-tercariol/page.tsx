"use client";

/**
 * Landing page tributo a Ayrton Senna — ARQUIVO ÚNICO.
 *
 * De propósito, tudo (componentes, dados, estilos) está neste único
 * arquivo. Não há nenhum import local (nada de "./components/..." ou
 * "@/..."), só pacotes do node_modules já presentes no package.json do
 * projeto: motion, lucide-react, react-wrap-balancer, clsx,
 * tailwind-merge. Isso elimina qualquer possibilidade de erro de
 * "Module not found" por causa de estrutura de pastas.
 *
 * COMO USAR:
 * Copie este arquivo para app/ayrton-senna/page.tsx (o nome da pasta
 * vira a rota — ficará em /ayrton-senna). Não precisa de mais nada:
 * sem tocar em tsconfig.json, tailwind.config ou globals.css.
 */

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useSpring,
  useInView,
  animate,
} from "motion/react";
import {
  ChevronDown,
  Flag,
  Heart,
  CloudRain,
  Trophy,
  Gauge,
  Timer,
  Award,
  TrendingUp,
  RadioTower,
  type LucideIcon,
} from "lucide-react";
import Balancer from "react-wrap-balancer";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// -----------------------------------------------------------------------
// DADOS — carreira, conquistas, desafios e integração com a Jolpica-F1 API
// -----------------------------------------------------------------------

const JOLPICA_BASE = "https://api.jolpi.ca/ergast/f1";

interface SennaStats {
  championships: number;
  wins: number;
  podiums: number;
  poles: number;
  fastestLaps: number;
  races: number;
  points: number;
  source: "live" | "fallback";
}

const FALLBACK_STATS: SennaStats = {
  championships: 3,
  wins: 41,
  podiums: 80,
  poles: 65,
  fastestLaps: 19,
  races: 161,
  points: 610,
  source: "fallback",
};

interface JolpicaRace {
  season: string;
  raceName: string;
  Results?: Array<{ position: string; points: string }>;
}

async function fetchSennaStats(): Promise<SennaStats> {
  try {
    const limit = 100;
    let offset = 0;
    let total = Infinity;
    const races: JolpicaRace[] = [];

    while (offset < total) {
      const res = await fetch(
        `${JOLPICA_BASE}/drivers/senna/results.json?limit=${limit}&offset=${offset}`,
      );
      if (!res.ok) throw new Error(`Jolpica respondeu ${res.status}`);

      const json = await res.json();
      const chunk: JolpicaRace[] = json?.MRData?.RaceTable?.Races ?? [];
      total = Number(json?.MRData?.total ?? chunk.length);
      races.push(...chunk);
      offset += limit;
      if (chunk.length === 0) break;
    }

    if (races.length === 0) throw new Error("Nenhuma corrida retornada");

    let wins = 0;
    let podiums = 0;
    let points = 0;

    for (const race of races) {
      const result = race.Results?.[0];
      if (!result) continue;
      const position = Number(result.position);
      if (position === 1) wins += 1;
      if (position > 0 && position <= 3) podiums += 1;
      points += Number(result.points ?? 0);
    }

    return {
      championships: FALLBACK_STATS.championships,
      wins,
      podiums,
      poles: FALLBACK_STATS.poles,
      fastestLaps: FALLBACK_STATS.fastestLaps,
      races: races.length,
      points,
      source: "live",
    };
  } catch {
    return FALLBACK_STATS;
  }
}

interface TimelineEntry {
  year: string;
  title: string;
  team?: string;
  body: string;
}

const RISE: TimelineEntry[] = [
  {
    year: "1973",
    title: "As primeiras curvas",
    body: "Aos quatro anos ganha o primeiro kart, presente do pai, num terreno baldio em São Paulo. Aos treze, já disputa o Campeonato Sul-Americano de kart.",
  },
  {
    year: "1981",
    title: "Rumo à Europa",
    body: "Muda-se para a Inglaterra para correr na Fórmula Ford. Vence na estreia e domina as categorias de acesso com uma velocidade que já incomoda os veteranos.",
  },
  {
    year: "1983",
    title: "Campeão da Fórmula 3 britânica",
    body: "Decide o título na última volta, sob chuva, em Thruxton — um prenúncio do piloto que se tornaria referência absoluta em pista molhada.",
  },
  {
    year: "1984",
    title: "Estreia na Fórmula 1",
    body: "Chega à F1 pela Toleman. Em Mônaco, sob temporal, sobe do 13º ao 2º lugar antes da corrida ser interrompida — o mundo passa a prestar atenção.",
  },
];

const McLAREN: TimelineEntry[] = [
  {
    year: "1985",
    title: "Primeira vitória",
    team: "Lotus-Renault",
    body: "Sob chuva forte em Estoril, vence com uma volta de vantagem sobre o segundo colocado. É a confirmação: Senna e a chuva formam uma dupla imbatível.",
  },
  {
    year: "1988",
    title: "Primeiro título mundial",
    team: "McLaren MP4/4 · TAG Porsche",
    body: "Ao lado de Alain Prost, forma a dupla mais dominante da história: 15 vitórias em 16 corridas. Senna vence 8 delas e conquista seu primeiro campeonato.",
  },
  {
    year: "1989",
    title: "A rivalidade Prost x Senna",
    team: "McLaren MP4/5",
    body: "A parceria racha. A colisão em Suzuka entre os dois companheiros de equipe decide o título a favor de Prost, em uma das polêmicas mais discutidas do esporte.",
  },
  {
    year: "1990",
    title: "Segundo título mundial",
    team: "McLaren MP4/5B",
    body: "Nova batalha decisiva em Suzuka — desta vez o resultado favorece Senna, que conquista seu segundo campeonato em meio a uma disputa igualmente controversa.",
  },
  {
    year: "1991",
    title: "Terceiro título mundial",
    team: "McLaren MP4/6",
    body: "Vence as seis primeiras corridas da temporada e sela o tricampeonato — o auge de sua parceria com a McLaren e o ano de maior domínio absoluto.",
  },
  {
    year: "1993",
    title: "A volta mágica de Donington",
    team: "McLaren MP4/8",
    body: "Larga em quarto sob chuva e ultrapassa todos os rivais na primeira volta. Considerada por muitos a volta de abertura mais espetacular já vista na Fórmula 1.",
  },
];

const CHALLENGES: TimelineEntry[] = [
  {
    year: "1989 – 1990",
    title: "Suzuka: duas colisões, dois títulos",
    body: "As batidas com Prost no Japão tornaram-se símbolo da rivalidade mais intensa do automobilismo — competitividade levada ao limite entre dois dos maiores nomes do esporte.",
  },
  {
    year: "1992 – 1993",
    title: "A era Williams",
    body: "Com a McLaren perdendo competitividade técnica, Senna enfrenta os Williams dominantes de Mansell e Prost. Ainda assim, vence pela força pura do talento ao volante.",
  },
  {
    year: "1994",
    title: "A pressão de uma nova era",
    body: "Muda-se para a Williams-Renault buscando o quarto título, mas a temporada começa marcada por mudanças regulatórias e um carro ainda em desenvolvimento.",
  },
];

const QUOTE =
  "Enquanto eu tiver a chance de lutar, vou lutar. Enquanto o coração bater, vou até o limite.";

// -----------------------------------------------------------------------
// COMPONENTES INTERNOS
// -----------------------------------------------------------------------

function ScrollReveal({
  children,
  className,
  travel = 32,
  delayFraction = 0,
}: {
  children: ReactNode;
  className?: string;
  travel?: number;
  delayFraction?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.18, margin: "0px 0px -8% 0px" });

  if (reduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: travel }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: travel }}
      transition={{
        duration: 0.65,
        delay: delayFraction * 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface MediaCardProps {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  href: string;
  className?: string;
}

function MediaCard({ src, alt, caption, credit, href, className }: MediaCardProps) {
  return (
    <figure className={cn("mx-auto w-full max-w-5xl", className)}>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group block overflow-hidden border border-white/10 bg-white/[0.03]"
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="block h-auto max-h-[620px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
        />
      </a>
      <figcaption
        style={{ fontFamily: "var(--senna-mono)" }}
        className="mt-2 flex flex-col gap-1 text-[9px] uppercase tracking-[0.14em] text-[#5C5F66] sm:flex-row sm:items-center sm:justify-between"
      >
        <span>{caption}</span>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-dotted underline-offset-2 hover:text-[#8A8D93]"
        >
          {credit}
        </a>
      </figcaption>
    </figure>
  );
}

const MEDIA = {
  hero: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ayrton_Senna_1991_Monaco.jpg",
    alt: "Ayrton Senna no Grande Prêmio de Mônaco de 1991",
    caption: "Ayrton Senna · Mônaco, 1991",
    credit: "Wikimedia Commons · CC BY-SA",
    href: "https://commons.wikimedia.org/wiki/File:Ayrton_Senna_1991_Monaco.jpg",
  },
  kart: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ayrton_Senna_Karting.jpg",
    alt: "Ayrton Senna pilotando um kart em 1973",
    caption: "As primeiras curvas · 1973",
    credit: "Instituto Ayrton Senna · CC BY 2.0",
    href: "https://commons.wikimedia.org/wiki/File:Ayrton_Senna_Karting.jpg",
  },
  mclaren: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/McLaren_MP4-4_at_Formula_1_Exhibition%2C_London_01.jpg",
    alt: "McLaren MP4/4 de 1988 associado ao primeiro título de Ayrton Senna",
    caption: "McLaren MP4/4 · carro do primeiro título",
    credit: "Hullian111 · CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:McLaren_MP4-4_at_Formula_1_Exhibition,_London_01.jpg",
  },
  imola: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Circuit_Imola_1992_Tamburello.png",
    alt: "Mapa do circuito de Imola com a curva Tamburello destacada",
    caption: "Ímola · traçado de 1992 · Tamburello",
    credit: "Alexander Jones · domínio público",
    href: "https://commons.wikimedia.org/wiki/File:Circuit_Imola_1992_Tamburello.png",
  },
};

function HelmetLine() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.3 });

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-y-0 left-0 z-40 hidden w-[6px] sm:block md:w-[8px]"
    >
      <div className="absolute inset-0 bg-[#141416]/80" />
      <motion.div style={{ scaleY: progress }} className="absolute inset-x-0 top-0 h-full origin-top">
        <div className="h-full w-full bg-[linear-gradient(180deg,#FFD500_0%,#FFD500_33%,#0046AD_33%,#0046AD_66%,#00843D_66%,#00843D_100%)] shadow-[0_0_18px_rgba(255,213,0,0.35)]" />
      </motion.div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
  accent = "red",
  index = 0,
}: {
  icon: LucideIcon;
  value: number;
  label: string;
  accent?: "yellow" | "blue" | "green" | "red";
  index?: number;
}) {
  const ACCENTS: Record<string, string> = {
    yellow: "text-[#FFD500]",
    blue: "text-[#3D6BFF]",
    green: "text-[#1FAE5C]",
    red: "text-[#E23A54]",
  };

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      delay: index * 0.08,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-white/20 sm:p-7"
    >
      <Icon className={cn("mb-4 h-5 w-5 opacity-70", ACCENTS[accent])} strokeWidth={1.75} />
      <div
        style={{ fontFamily: "var(--senna-display)" }}
        className="flex items-baseline gap-1 text-4xl tabular-nums leading-none text-[#F2EFE9] sm:text-5xl"
      >
        {display}
      </div>
      <p
        style={{ fontFamily: "var(--senna-mono)" }}
        className="mt-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8D93]"
      >
        {label}
      </p>
    </motion.div>
  );
}

function StatsSection() {
  const [stats, setStats] = useState<SennaStats>(FALLBACK_STATS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetchSennaStats().then((result) => {
      if (!cancelled) {
        setStats(result);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="estatisticas" className="relative mx-auto max-w-6xl px-6 py-32 sm:px-10">
      <ScrollReveal>
        <div className="mb-12 flex flex-col gap-3 sm:mb-16">
          <div
            style={{ fontFamily: "var(--senna-mono)" }}
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#8A8D93]"
          >
            <RadioTower className="h-3.5 w-3.5" strokeWidth={1.75} />
            {loading
              ? "Sincronizando telemetria…"
              : stats.source === "live"
                ? "Dados ao vivo — Jolpica-F1 API"
                : "Dados de referência (API indisponível)"}
          </div>
          <h2
            style={{ fontFamily: "var(--senna-display)" }}
            className="text-4xl leading-[0.95] text-[#F2EFE9] sm:text-6xl"
          >
            Uma carreira em números
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        <ScrollReveal delayFraction={0}>
          <StatCard icon={Trophy} value={stats.championships} label="Títulos mundiais" accent="yellow" index={0} />
        </ScrollReveal>
        <ScrollReveal delayFraction={0.02}>
          <StatCard icon={Flag} value={stats.wins} label="Vitórias" accent="red" index={1} />
        </ScrollReveal>
        <ScrollReveal delayFraction={0.04}>
          <StatCard icon={Award} value={stats.podiums} label="Pódios" accent="blue" index={2} />
        </ScrollReveal>
        <ScrollReveal delayFraction={0.06}>
          <StatCard icon={Gauge} value={stats.poles} label="Poles" accent="green" index={3} />
        </ScrollReveal>
        <ScrollReveal delayFraction={0.08}>
          <StatCard icon={Timer} value={stats.fastestLaps} label="Voltas mais rápidas" accent="yellow" index={4} />
        </ScrollReveal>
        <ScrollReveal delayFraction={0.1}>
          <StatCard icon={TrendingUp} value={stats.races} label="Corridas disputadas" accent="red" index={5} />
        </ScrollReveal>
        <ScrollReveal delayFraction={0.12}>
          <StatCard icon={Trophy} value={stats.points} label="Pontos na carreira" accent="blue" index={6} />
        </ScrollReveal>
        <ScrollReveal delayFraction={0.14}>
          <StatCard icon={Award} value={1994 - 1960} label="Anos de vida" accent="green" index={7} />
        </ScrollReveal>
      </div>

      <p style={{ fontFamily: "var(--senna-mono)" }} className="mt-6 max-w-2xl text-[11px] leading-relaxed text-[#5C5F66]">
        Vitórias, pódios, pontos e corridas são recalculados a partir da{" "}
        <a
          href="https://github.com/jolpica/jolpica-f1"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-dotted underline-offset-2 hover:text-[#8A8D93]"
        >
          Jolpica-F1 API
        </a>
        , sucessora aberta e gratuita da extinta Ergast API. Poles e voltas mais rápidas usam dados
        de referência, não totalmente cobertos pelo histórico público de 1984–1994.
      </p>
    </section>
  );
}

function TimelineSection({
  id,
  eyebrow,
  title,
  entries,
}: {
  id: string;
  eyebrow: string;
  title: string;
  entries: TimelineEntry[];
}) {
  return (
    <section id={id} className="relative mx-auto max-w-5xl px-6 py-28 sm:px-10 sm:py-36">
      <ScrollReveal>
        <div className="mb-16 flex flex-col gap-3 sm:mb-20">
          <span style={{ fontFamily: "var(--senna-mono)" }} className="text-[11px] uppercase tracking-[0.2em] text-[#8A8D93]">
            {eyebrow}
          </span>
          <h2 style={{ fontFamily: "var(--senna-display)" }} className="text-4xl leading-[0.95] text-[#F2EFE9] sm:text-6xl">
            {title}
          </h2>
        </div>
      </ScrollReveal>

      {id === "ascensao" && (
        <ScrollReveal travel={24}>
          <MediaCard {...MEDIA.kart} className="mb-14 sm:mb-20" />
        </ScrollReveal>
      )}

      {id === "conquistas" && (
        <ScrollReveal travel={24}>
          <MediaCard {...MEDIA.mclaren} className="mb-14 sm:mb-20" />
        </ScrollReveal>
      )}

      {id === "desafios" && (
        <ScrollReveal travel={24}>
          <MediaCard {...MEDIA.imola} className="mb-14 max-w-3xl sm:mb-20" />
        </ScrollReveal>
      )}

      <div className="mx-auto flex w-full max-w-4xl flex-col">
        {entries.map((entry, i) => (
          <ScrollReveal key={`${id}-${entry.year}`} delayFraction={i * 0.015}>
            <div className="mx-auto grid w-full grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-white/10 py-8 sm:grid-cols-[9rem_1fr] sm:gap-x-10 sm:py-10">
              <div style={{ fontFamily: "var(--senna-display)" }} className="text-2xl leading-none text-[#E23A54] sm:text-3xl">
                {entry.year}
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--senna-display)" }} className="text-xl text-[#F2EFE9] sm:text-2xl">
                  {entry.title}
                </h3>
                {entry.team && (
                  <p style={{ fontFamily: "var(--senna-mono)" }} className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[#8A8D93]">
                    {entry.team}
                  </p>
                )}
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#B9BBC0] sm:text-base">{entry.body}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------
// PÁGINA
// -----------------------------------------------------------------------

export default function Page() {
  return (
    <main
      style={
        {
          "--senna-display": "'Racing Sans One', 'Arial Narrow', sans-serif",
          "--senna-mono": "'JetBrains Mono', ui-monospace, monospace",
          fontFamily: "'Barlow', 'Helvetica Neue', sans-serif",
        } as React.CSSProperties
      }
      className="relative min-h-screen w-full overflow-x-hidden bg-[#0A0A0C] text-[#F2EFE9]"
    >
      {/* Fontes carregadas só dentro desta página, via <style> comum — não
          toca em nenhum arquivo global do projeto. */}
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Racing+Sans+One&family=Barlow:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap");
      `}</style>

      <HelmetLine />

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 14px)",
        }}
      />

      {/* HERO */}
      <section className="relative flex min-h-[100svh] flex-col justify-between px-6 pb-10 pt-28 sm:px-10 sm:pt-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[70svh]"
          style={{
            background: "radial-gradient(80% 60% at 30% 0%, rgba(200,30,60,0.16) 0%, rgba(10,10,12,0) 70%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "var(--senna-mono)" }}
          className="relative z-10 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#8A8D93]"
        >
          <span>McLaren MP4 · #1</span>
          <span>1960 — 1994</span>
        </motion.div>

        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "var(--senna-mono)" }}
            className="mb-4 text-[11px] uppercase tracking-[0.25em] text-[#E23A54]"
          >
            Um tributo · Fórmula 1
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "var(--senna-display)" }}
            className="text-[15vw] leading-[0.82] text-[#F2EFE9] sm:text-[9vw] lg:text-[7.5vw]"
          >
            <Balancer>AYRTON SENNA</Balancer>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-[#B9BBC0] sm:text-lg"
          >
            Três vezes campeão mundial. O piloto que redefiniu o limite entre talento e obsessão
            — e que, mesmo décadas após sua última volta, continua sendo a régua pela qual a
            Fórmula 1 mede a grandeza.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mt-10 hidden sm:block"
        >
          <MediaCard {...MEDIA.hero} className="max-w-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ fontFamily: "var(--senna-mono)" }}
          className="relative z-10 flex items-center gap-2 self-center text-[11px] uppercase tracking-[0.2em] text-[#8A8D93]"
        >
          <span>Role para começar a corrida</span>
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown className="h-4 w-4" strokeWidth={1.75} />
          </motion.span>
        </motion.div>
      </section>

      <TimelineSection id="ascensao" eyebrow="01 — A ascensão" title="Do kart em São Paulo à Fórmula 1" entries={RISE} />
      <TimelineSection id="conquistas" eyebrow="02 — Os títulos" title="Vermelho, branco e a MP4" entries={McLAREN} />

      <StatsSection />

      <TimelineSection id="desafios" eyebrow="03 — Os desafios" title="Cada vitória teve seu preço" entries={CHALLENGES} />

      {/* IMOLA 1994 */}
      <section id="imola" className="relative mx-auto max-w-4xl px-6 py-32 text-center sm:px-10 sm:py-44">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-6">
            <span style={{ fontFamily: "var(--senna-mono)" }} className="text-[11px] uppercase tracking-[0.2em] text-[#8A8D93]">
              1º de maio de 1994 · Ímola
            </span>
            <h2
              style={{ fontFamily: "var(--senna-display)" }}
              className="max-w-3xl text-4xl leading-[1.02] text-[#F2EFE9] sm:text-6xl"
            >
              <Balancer>Uma volta que o mundo inteiro sentiu</Balancer>
            </h2>
            <p className="max-w-2xl text-[15px] leading-relaxed text-[#B9BBC0] sm:text-base">
              No Grande Prêmio de San Marino, Senna sofreu um acidente fatal na curva de
              Tamburello, ao volante da Williams. Sua morte parou o esporte, mudou para sempre os
              padrões de segurança da Fórmula 1 e encerrou, aos 34 anos, a carreira do piloto mais
              admirado de sua geração.
            </p>
            <div className="mt-2 h-px w-16 bg-[#E23A54]/60" />
            <p style={{ fontFamily: "var(--senna-display)" }} className="max-w-xl text-lg text-[#8A8D93] sm:text-xl">
              &ldquo;{QUOTE}&rdquo;
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* LEGADO */}
      <section id="legado" className="relative mx-auto max-w-5xl px-6 py-28 sm:px-10 sm:py-36">
        <ScrollReveal>
          <div className="mb-14 flex flex-col gap-3 sm:mb-16">
            <span style={{ fontFamily: "var(--senna-mono)" }} className="text-[11px] uppercase tracking-[0.2em] text-[#8A8D93]">
              04 — O legado
            </span>
            <h2 style={{ fontFamily: "var(--senna-display)" }} className="text-4xl leading-[0.95] text-[#F2EFE9] sm:text-6xl">
              Sempre vivo
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-3 sm:gap-10">
          <ScrollReveal delayFraction={0}>
            <div className="flex flex-col gap-3">
              <Heart className="h-5 w-5 text-[#E23A54]" strokeWidth={1.75} />
              <h3 style={{ fontFamily: "var(--senna-display)" }} className="text-xl text-[#F2EFE9]">
                Instituto Ayrton Senna
              </h3>
              <p className="text-sm leading-relaxed text-[#B9BBC0]">
                Criado em 1994 pela irmã de Senna, Viviane, o instituto direciona parte dos
                rendimentos de sua imagem para a educação pública no Brasil, impactando milhões de
                crianças desde então.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delayFraction={0.04}>
            <div className="flex flex-col gap-3">
              <CloudRain className="h-5 w-5 text-[#3D6BFF]" strokeWidth={1.75} />
              <h3 style={{ fontFamily: "var(--senna-display)" }} className="text-xl text-[#F2EFE9]">
                O mestre da chuva
              </h3>
              <p className="text-sm leading-relaxed text-[#B9BBC0]">
                Suas performances em pista molhada — Mônaco 1984, Estoril 1985, Donington 1993 —
                ainda são estudadas como o padrão-ouro de pilotagem em condições extremas.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delayFraction={0.08}>
            <div className="flex flex-col gap-3">
              <Flag className="h-5 w-5 text-[#1FAE5C]" strokeWidth={1.75} />
              <h3 style={{ fontFamily: "var(--senna-display)" }} className="text-xl text-[#F2EFE9]">
                Ídolo nacional
              </h3>
              <p className="text-sm leading-relaxed text-[#B9BBC0]">
                No Brasil, tornou-se símbolo de superação. Suas cores — verde, amarelo e azul no
                capacete — seguem entre os ícones mais reconhecíveis do esporte mundial.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/10 px-6 py-14 sm:px-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <span style={{ fontFamily: "var(--senna-display)" }} className="text-2xl text-[#F2EFE9]">
            Ayrton Senna
          </span>
          <p style={{ fontFamily: "var(--senna-mono)" }} className="text-[11px] uppercase tracking-[0.2em] text-[#5C5F66]">
            21.03.1960 — 01.05.1994 · São Paulo → Ímola
          </p>
          <p className="max-w-md text-xs leading-relaxed text-[#5C5F66]">
            Página tributo não oficial. Estatísticas de carreira via{" "}
            <a
              href="https://api.jolpi.ca"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-dotted underline-offset-2"
            >
              Jolpica-F1 API
            </a>
            .
          </p>
        </div>
      </footer>
    </main>
  );
}
