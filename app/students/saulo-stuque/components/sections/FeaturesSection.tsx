import { Container } from "../layout/Container";
import { Icon, type IconName } from "../ui/Icons";
import { SectionHeading } from "../ui/SectionHeading";

const features: { icon: IconName; title: string; text: string; size: "large" | "small"; detail?: string }[] = [
  { icon: "calendar", title: "Gestão de escalas", text: "Serviços, datas, responsáveis e substituições em uma visão operacional única.", size: "large", detail: "Preta · Vermelha · Fim de semana" },
  { icon: "clock", title: "Descanso mínimo", text: "Alertas automáticos ajudam a evitar conflitos entre serviços próximos.", size: "small" },
  { icon: "meal", title: "Confirmação de marmitas", text: "Controle rápido de pedidos, confirmações e pendências de alimentação.", size: "small" },
  { icon: "radio", title: "Comunicação centralizada", text: "Avisos importantes chegam com contexto, prioridade e registro.", size: "small" },
  { icon: "history", title: "Histórico operacional", text: "Alterações e atividades permanecem registradas para consulta.", size: "small" },
  { icon: "users", title: "Visões por perfil", text: "Cada usuário encontra apenas o que precisa: atirador, comando ou administração.", size: "large", detail: "Permissão · Clareza · Responsabilidade" },
];

export function FeaturesSection() {
  return (
    <section id="recursos" className="border-y border-white/[0.07] bg-[#0c0f0b] py-24 sm:py-32">
      <Container>
        <SectionHeading code="ST-002 / Capacidades" title="Funcionalidades construídas para a rotina real." description="Uma bento grid operacional: cada módulo resolve uma parte concreta do problema sem transformar o sistema em burocracia." />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className={`selection-corners relative overflow-hidden border border-white/[0.08] bg-[#121610] p-7 transition hover:border-[#b6c494]/25 ${feature.size === "large" ? "md:col-span-2 lg:col-span-2" : ""}`}>
              <div className="micro-grid absolute inset-0 opacity-35" />
              <div className="relative flex h-full min-h-48 flex-col">
                <div className="grid h-11 w-11 place-items-center border border-[#b6c494]/20 bg-[#b6c494]/10 text-[#b6c494]"><Icon name={feature.icon} /></div>
                <div className="mt-auto pt-12"><h3 className="text-xl font-semibold text-white">{feature.title}</h3><p className="mt-3 max-w-xl text-sm leading-7 text-[#90978a]">{feature.text}</p>{feature.detail && <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#b6c494]">{feature.detail}</p>}</div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
