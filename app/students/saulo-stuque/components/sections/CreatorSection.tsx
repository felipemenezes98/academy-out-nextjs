import { Container } from "../layout/Container";
import { Icon } from "../ui/Icons";
import { SectionHeading } from "../ui/SectionHeading";

const profile = [["Nome", "Saulo Stuque"], ["Área", "Desenvolvimento back-end"], ["Formação", "Análise e Desenvolvimento de Sistemas"], ["Tecnologias", "Java · Spring Boot · Next.js"], ["Projeto", "Sentinela"], ["Status", "Em desenvolvimento"]];

export function CreatorSection() {
  return (
    <section className="border-y border-white/[0.07] bg-[#0d100c] py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div><SectionHeading code="ST-008 / Origem" title="Idealizado por quem vive essa rotina." description="O Sentinela une experiência prática, desenvolvimento de software e o objetivo de transformar um problema observado em uma solução útil." /><div className="mt-8 flex items-center gap-3 text-sm text-[#a1a899]"><Icon name="shield" className="h-5 w-5 text-[#b6c494]" /><span>Disciplina, propósito e tecnologia aplicada.</span></div></div>
          <div className="selection-corners border border-[#b6c494]/20 bg-[#11150f] p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between border-b border-white/[0.08] pb-5"><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#747b6f]">Identificação do projeto</p><p className="mt-2 text-lg font-semibold tracking-[0.08em] text-white">SNT-001</p></div><div className="grid h-12 w-12 place-items-center border border-[#b6c494]/20 text-[#b6c494]"><Icon name="shield" className="h-6 w-6" /></div></div>
            <dl className="space-y-4">{profile.map(([label, value]) => <div key={label} className="grid gap-1 sm:grid-cols-[110px_1fr]"><dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#71786c]">{label}</dt><dd className="text-sm text-[#d1d5cc]">{value}</dd></div>)}</dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
