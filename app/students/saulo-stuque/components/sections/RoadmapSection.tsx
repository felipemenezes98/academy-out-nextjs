import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";

const roadmap = [
  ["Validação do problema", "Concluído", "A rotina real definiu o escopo inicial."],
  ["Desenvolvimento do MVP", "Em andamento", "CRUD, persistência e regras essenciais."],
  ["Testes com usuários", "Próxima etapa", "Coleta de feedback e ajustes de fluxo."],
  ["Aplicação mobile", "Planejado", "Acesso rápido para o atirador em serviço."],
  ["Evolução institucional", "Visão futura", "Escala e adoção em outras unidades."],
];

export function RoadmapSection() {
  return (
    <section id="projeto" className="py-24 sm:py-32">
      <Container>
        <SectionHeading code="ST-007 / Roadmap" title="Pensar grande. Construir em etapas verificáveis." description="O projeto cresce com foco: primeiro resolver o essencial, depois validar e expandir." />
        <div className="mt-14 border-t border-white/[0.08]">
          {roadmap.map(([title, status, description], index) => <div key={title} className="grid gap-4 border-b border-white/[0.08] py-6 sm:grid-cols-[70px_1fr_150px] sm:items-center"><span className="font-mono text-xs text-[#687064]">{String(index + 1).padStart(2, "0")}</span><div><h3 className="text-base font-medium text-white">{title}</h3><p className="mt-1 text-sm text-[#888f82]">{description}</p></div><span className={`w-fit border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] ${index === 0 ? "border-[#b6c494]/25 text-[#b6c494]" : index === 1 ? "border-[#d8ad55]/25 text-[#d8ad55]" : "border-white/10 text-[#70776c]"}`}>{status}</span></div>)}
        </div>
      </Container>
    </section>
  );
}
