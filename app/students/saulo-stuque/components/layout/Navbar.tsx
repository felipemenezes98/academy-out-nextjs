"use client";

import { useState } from "react";
import { Container } from "./Container";
import { Icon } from "../ui/Icons";

const links = [
  ["Problema", "#problema"],
  ["Recursos", "#recursos"],
  ["Operação", "#operacao"],
  ["Tecnologia", "#tecnologia"],
  ["Projeto", "#projeto"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#090b09]/80 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Sentinela - início">
          <span className="grid h-9 w-9 place-items-center border border-[#b6c494]/30 bg-[#b6c494]/10 text-[#b6c494]"><Icon name="shield" className="h-5 w-5" /></span>
          <span><strong className="block text-sm tracking-[0.22em] text-white">SENTINELA</strong><small className="block font-mono text-[9px] uppercase tracking-[0.18em] text-[#8f9687]">Apoio operacional</small></span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {links.map(([label, href]) => <a key={href} href={href} className="text-xs font-bold uppercase tracking-[0.13em] text-[#a4aa9b] transition hover:text-white">{label}</a>)}
        </nav>

        <a href="#contato" className="hidden border border-[#b6c494]/40 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.13em] text-[#cbd6b2] transition hover:bg-[#b6c494] hover:text-[#090b09] sm:block">Solicitar demonstração</a>
        <button className="grid h-10 w-10 place-items-center border border-white/10 text-white lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Abrir menu" aria-expanded={open}>
          <Icon name={open ? "close" : "menu"} />
        </button>
      </Container>

      {open && (
        <nav className="border-t border-white/[0.07] bg-[#0b0e0a] px-5 py-5 lg:hidden" aria-label="Navegação mobile">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-white/[0.06] py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#c6cabf]">{label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}
