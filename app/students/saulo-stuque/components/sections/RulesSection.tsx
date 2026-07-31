import { Container } from "../layout/Container";
import { Icon } from "../ui/Icons";
import { SectionHeading } from "../ui/SectionHeading";

const rules = ["Descanso mínimo entre serviços", "Escalas preta e vermelha", "Confirmação de disponibilidade", "Registro de alterações", "Serviços de final de semana", "Controle de alimentação"];

export function RulesSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <SectionHeading code="ST-005 / Regras" title="Tecnologia construída ao redor das regras reais." description="O diferencial não está apenas na interface. O Sentinela transforma a rotina e as regras de negócio em decisões verificáveis pelo sistema." />
          <p className="border-l border-[#b6c494]/30 pl-5 text-sm leading-7 text-[#8e9588]">Cada regra pode evoluir separadamente, permitindo validar o MVP hoje e ampliar o produto amanhã sem perder a clareza da operação.</p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {rules.map((rule, index) => <div key={rule} className="flex items-center gap-4 bg-[#0e110d] p-5 transition hover:bg-[#131811]"><span className="grid h-8 w-8 shrink-0 place-items-center border border-[#b6c494]/20 text-[#b6c494]"><Icon name="check" className="h-4 w-4" /></span><div><p className="text-sm font-medium text-white">{rule}</p><p className="mt-1 font-mono text-[9px] uppercase tracking-[0.13em] text-[#6f766b]">Regra RN-{String(index + 1).padStart(2, "0")}</p></div></div>)}
        </div>
      </Container>
    </section>
  );
}
