import { Container } from "../layout/Container";

export function MissionSection() {
  return (
    <section className="border-y border-white/[0.07] bg-[#0d100c] py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#b6c494]">Problema real · Solução real</p>
          <h2 className="text-balance mt-6 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Criado a partir de uma necessidade vivida de perto.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#9da497] sm:text-lg">O Sentinela nasceu dentro da rotina do Tiro de Guerra, observando dificuldades reais de comunicação, organização de escalas e acompanhamento de serviços.</p>
        </div>
      </Container>
    </section>
  );
}
