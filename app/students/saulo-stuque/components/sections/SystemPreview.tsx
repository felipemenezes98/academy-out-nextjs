"use client";

import { useState } from "react";
import { Container } from "../layout/Container";
import { Icon } from "../ui/Icons";
import { SectionHeading } from "../ui/SectionHeading";
import { StatusBadge } from "../ui/StatusBadge";

const views = {
  atirador: {
    title: "Minha operação",
    cards: [
      { label: "Próximo serviço", value: "02 AGO", note: "Guarda · 06:00" },
      { label: "Descanso atual", value: "42h", note: "Dentro da regra" },
      { label: "Alimentação", value: "SIM", note: "Marmita confirmada" },
    ],
    list: ["Apresentação no corpo da guarda às 05:45", "Uniforme e material conferidos", "Confirmação realizada em 31 JUL · 18:22"],
  },
  comando: {
    title: "Visão do comando",
    cards: [
      { label: "Efetivo confirmado", value: "18/20", note: "90% da escala" },
      { label: "Alertas ativos", value: "02", note: "Requer atenção" },
      { label: "Marmitas", value: "18", note: "2 pendentes" },
    ],
    list: ["At. Santos ainda não confirmou o serviço", "Uma possível quebra de descanso foi detectada", "Escala de domingo publicada para todo o efetivo"],
  },
};

export function SystemPreview() {
  const [active, setActive] = useState<keyof typeof views>("atirador");
  const view = views[active];
  return (
    <section id="operacao" className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <SectionHeading code="ST-003 / Operação" title="Toda a situação operacional em um único lugar." description="Alterne entre as perspectivas para visualizar como o mesmo sistema atende necessidades diferentes sem perder simplicidade." />
            <div className="mt-8 inline-flex border border-white/[0.09] bg-white/[0.025] p-1">
              {(["atirador", "comando"] as const).map((tab) => <button key={tab} onClick={() => setActive(tab)} className={`px-4 py-2.5 text-xs font-bold uppercase tracking-[0.13em] transition ${active === tab ? "bg-[#b6c494] text-[#090b09]" : "text-[#92998c] hover:text-white"}`}>{tab === "atirador" ? "Visão do atirador" : "Visão do comando"}</button>)}
            </div>
          </div>

          <div className="relative overflow-hidden border border-white/10 bg-[#0e120d] p-4 shadow-2xl shadow-black/30 sm:p-7">
            <div className="micro-grid absolute inset-0 opacity-40" />
            <div className="relative">
              <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] pb-5 sm:flex-row sm:items-center"><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#737a6e]">Sentinela / Dashboard</p><h3 className="mt-2 text-xl font-semibold text-white">{view.title}</h3></div><StatusBadge tone={active === "comando" ? "warning" : "olive"}>{active === "comando" ? "Atenção" : "Confirmado"}</StatusBadge></div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {view.cards.map((card) => <div key={card.label} className="border border-white/[0.07] bg-black/15 p-4"><p className="text-[10px] uppercase tracking-[0.12em] text-[#737a6e]">{card.label}</p><strong className="mt-4 block text-2xl text-white">{card.value}</strong><p className="mt-2 font-mono text-[9px] uppercase tracking-[0.1em] text-[#aab78a]">{card.note}</p></div>)}
              </div>
              <div className="mt-3 border border-white/[0.07] bg-black/15 p-4 sm:p-5"><div className="mb-4 flex items-center justify-between"><p className="text-xs font-bold uppercase tracking-[0.13em] text-[#d3d7ce]">Atualizações operacionais</p><Icon name="radio" className="h-4 w-4 text-[#b6c494]" /></div><div className="space-y-3">{view.list.map((item, index) => <div key={item} className="flex gap-3 border-t border-white/[0.06] pt-3 first:border-0 first:pt-0"><span className="font-mono text-[9px] text-[#71786c]">0{index + 1}</span><p className="text-xs leading-6 text-[#9ba295]">{item}</p></div>)}</div></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
