import { Container } from "../layout/Container";
import { Icon, type IconName } from "../ui/Icons";
import { SectionHeading } from "../ui/SectionHeading";

const problems: { code: string; icon: IconName; title: string; text: string }[] = [
  { code: "OC-01", icon: "radio", title: "Comunicação dispersa", text: "Informações importantes podem se perder entre mensagens, grupos e avisos informais." },
  { code: "OC-02", icon: "calendar", title: "Escalas difíceis de acompanhar", text: "Alterações, substituições e confirmações exigem acompanhamento constante." },
  { code: "OC-03", icon: "database", title: "Falta de visão centralizada", text: "Atiradores e responsáveis não possuem uma visão única da situação operacional." },
];

export function ProblemSection() {
  return (
    <section id="problema" className="py-24 sm:py-32">
      <Container>
        <SectionHeading code="ST-001 / Diagnóstico" title="Quando a informação fica espalhada, a operação perde clareza." description="O Sentinela organiza os pontos críticos da rotina em um fluxo simples, rastreável e acessível." />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {problems.map((problem) => (
            <article key={problem.code} className="selection-corners group border border-white/[0.08] bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-[#b6c494]/25 hover:bg-[#b6c494]/[0.04] sm:p-8">
              <div className="mb-12 flex items-center justify-between"><span className="font-mono text-[10px] font-bold tracking-[0.18em] text-[#7c8376]">{problem.code}</span><Icon name={problem.icon} className="h-5 w-5 text-[#b6c494]" /></div>
              <h3 className="text-xl font-semibold tracking-[-0.025em] text-white">{problem.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#939a8d]">{problem.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
