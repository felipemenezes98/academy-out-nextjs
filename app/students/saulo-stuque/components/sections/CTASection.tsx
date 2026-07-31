import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

export function CTASection() {
  return (
    <section id="contato" className="relative overflow-hidden py-24 sm:py-32">
      <div className="tactical-grid absolute inset-0 opacity-70" />
      <Container className="relative">
        <div className="border border-[#b6c494]/20 bg-[#10140e]/90 px-6 py-16 text-center sm:px-10 sm:py-20">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#b6c494]">Vigilância · Organização · Eficiência</p>
          <h2 className="text-balance mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">Uma nova forma de organizar a rotina operacional.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#9ba294]">O Sentinela transforma informações dispersas em uma operação mais clara, organizada e confiável.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Button href="mailto:contato@sentinela.dev" arrow>Conhecer o projeto</Button><Button href="#inicio" variant="secondary">Voltar ao início</Button></div>
        </div>
      </Container>
    </section>
  );
}
