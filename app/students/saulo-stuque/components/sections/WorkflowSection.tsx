import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";

const steps = [
  ["01", "A escala é cadastrada", "O responsável define serviço, horário e integrantes."],
  ["02", "O atirador é informado", "Cada convocação aparece de forma clara e individual."],
  ["03", "O serviço é confirmado", "Pendências ficam visíveis antes de virarem problemas."],
  ["04", "A operação é registrada", "O histórico preserva alterações e responsabilidades."],
];

export function WorkflowSection() {
  return (
    <section className="border-y border-white/[0.07] bg-[#0d100c] py-24 sm:py-32">
      <Container>
        <SectionHeading code="ST-004 / Fluxo" title="Da publicação ao registro, sem ruído." align="center" />
        <div className="relative mt-16 grid gap-8 md:grid-cols-4 md:gap-5">
          <div className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-gradient-to-r from-transparent via-[#b6c494]/35 to-transparent md:block" />
          {steps.map(([number, title, text]) => <article key={number} className="relative text-center"><div className="relative z-10 mx-auto grid h-12 w-12 place-items-center border border-[#b6c494]/30 bg-[#0d100c] font-mono text-xs font-bold text-[#b6c494]">{number}</div><h3 className="mt-6 text-base font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-[#8f9689]">{text}</p></article>)}
        </div>
      </Container>
    </section>
  );
}
