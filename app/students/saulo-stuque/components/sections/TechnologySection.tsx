import { Container } from "../layout/Container";
import { Icon, type IconName } from "../ui/Icons";
import { SectionHeading } from "../ui/SectionHeading";

const layers: { name: string; label: string; tech: string; icon: IconName; status: string }[] = [
  { name: "tg-web", label: "Interface web", tech: "Next.js · React · TailwindCSS", icon: "code", status: "Em desenvolvimento" },
  { name: "tg-api", label: "Núcleo do sistema", tech: "Java · Spring Boot · REST", icon: "server", status: "MVP ativo" },
  { name: "database", label: "Persistência", tech: "PostgreSQL · JPA · Hibernate", icon: "database", status: "Integrado" },
  { name: "tg-mobile", label: "Aplicativo móvel", tech: "Flutter · Dart", icon: "mobile", status: "Planejado" },
];

export function TechnologySection() {
  return (
    <section id="tecnologia" className="border-y border-white/[0.07] bg-[#0c0f0b] py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading code="ST-006 / Arquitetura" title="Uma base técnica preparada para crescer por etapas." description="A landing page apresenta um produto maior: interface web, API robusta, banco relacional e uma futura experiência mobile." />
          <div className="space-y-3">
            {layers.map((layer, index) => <div key={layer.name} className="group grid items-center gap-4 border border-white/[0.08] bg-white/[0.02] p-4 transition hover:border-[#b6c494]/25 sm:grid-cols-[auto_1fr_auto]"><div className="grid h-10 w-10 place-items-center border border-[#b6c494]/20 bg-[#b6c494]/[0.07] text-[#b6c494]"><Icon name={layer.icon} /></div><div><div className="flex items-center gap-3"><strong className="font-mono text-sm text-white">{layer.name}</strong><span className="text-[9px] uppercase tracking-[0.12em] text-[#6f766a]">0{index + 1}</span></div><p className="mt-1 text-xs text-[#8f9689]">{layer.label} · {layer.tech}</p></div><span className="hidden font-mono text-[9px] uppercase tracking-[0.13em] text-[#9eaa82] sm:block">{layer.status}</span></div>)}
          </div>
        </div>
      </Container>
    </section>
  );
}
