import { Container } from "./Container";
import { Icon } from "../ui/Icons";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#080a08] py-10">
      <Container className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div><div className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center border border-[#b6c494]/25 text-[#b6c494]"><Icon name="shield" className="h-4 w-4" /></span><strong className="text-sm tracking-[0.2em] text-white">SENTINELA</strong></div><p className="mt-4 max-w-md text-xs leading-6 text-[#747b6f]">Sistema de apoio operacional. Projeto desenvolvido para o CCM Academy.</p></div>
        <div className="md:text-right"><div className="flex gap-5 md:justify-end"><a href="#" className="text-xs uppercase tracking-[0.12em] text-[#858c7f] hover:text-white">GitHub</a><a href="#" className="text-xs uppercase tracking-[0.12em] text-[#858c7f] hover:text-white">LinkedIn</a><a href="#contato" className="text-xs uppercase tracking-[0.12em] text-[#858c7f] hover:text-white">Contato</a></div><p className="mt-5 font-mono text-[9px] uppercase tracking-[0.14em] text-[#555c52]">Desenvolvido com disciplina, propósito e tecnologia.</p></div>
      </Container>
    </footer>
  );
}
