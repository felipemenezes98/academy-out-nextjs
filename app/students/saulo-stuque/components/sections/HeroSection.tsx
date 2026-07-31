import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icons";
import { StatusBadge } from "../ui/StatusBadge";

function DashboardPreview() {
  const services = [
    { name: "Cb. Almeida", task: "Guarda", time: "06:00", status: "Confirmado" },
    { name: "At. Pereira", task: "Permanência", time: "12:00", status: "Confirmado" },
    { name: "At. Santos", task: "Guarda", time: "18:00", status: "Pendente" },
  ];

  return (
    <div className="float-slow relative mx-auto w-full max-w-xl border border-white/10 bg-[#0e120d]/95 p-3 shadow-2xl shadow-black/40 sm:p-5">
      <div className="scan-line" />
      <div className="mb-4 flex items-center justify-between border-b border-white/[0.07] pb-4">
        <div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#818878]">Painel operacional</p><p className="mt-1 text-sm font-semibold text-white">Sexta-feira · 31 JUL</p></div>
        <StatusBadge>Operacional</StatusBadge>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="border border-white/[0.07] bg-white/[0.025] p-4 sm:col-span-2">
          <div className="mb-4 flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c7ccbf]">Serviços de hoje</span><Icon name="calendar" className="h-4 w-4 text-[#b6c494]" /></div>
          <div className="space-y-2">
            {services.map((service) => (
              <div key={service.name} className="grid grid-cols-[1fr_auto] gap-3 border-t border-white/[0.06] py-3 first:border-0 first:pt-0">
                <div><p className="text-xs font-medium text-white">{service.name}</p><p className="mt-1 font-mono text-[9px] uppercase tracking-[0.13em] text-[#747b6f]">{service.task} · {service.time}</p></div>
                <span className={`self-center font-mono text-[9px] uppercase tracking-[0.1em] ${service.status === "Pendente" ? "text-[#d8ad55]" : "text-[#9eaf7c]"}`}>{service.status}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-3">
          <div className="border border-[#b6c494]/15 bg-[#b6c494]/[0.06] p-4"><Icon name="clock" className="mb-4 h-5 w-5 text-[#b6c494]" /><p className="text-2xl font-semibold text-white">36h</p><p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[#7f8779]">Descanso mínimo</p></div>
          <div className="border border-white/[0.07] bg-white/[0.025] p-4"><Icon name="meal" className="mb-4 h-5 w-5 text-[#d8cfb1]" /><p className="text-2xl font-semibold text-white">18/20</p><p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[#7f8779]">Marmitas confirmadas</p></div>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-3 border border-[#d8ad55]/15 bg-[#d8ad55]/[0.06] p-3 text-[#d8ad55]"><Icon name="alert" className="h-4 w-4 shrink-0" /><p className="text-[10px] uppercase tracking-[0.1em]">Uma confirmação pendente para o próximo turno</p></div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden pt-18">
      <div className="tactical-grid absolute inset-0" />
      <div className="absolute left-[8%] top-32 h-48 w-48 rounded-full bg-[#879264]/10 blur-3xl" />
      <Container className="relative grid min-h-[calc(100vh-4.5rem)] items-center gap-14 py-20 lg:grid-cols-[0.94fr_1.06fr] lg:py-24">
        <div className="max-w-2xl">
          <div className="mb-7 flex items-center gap-3"><span className="h-px w-10 bg-[#b6c494]" /><span className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#b6c494]">Sistema de apoio operacional</span></div>
          <h1 className="text-balance text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-[5.2rem]">Mais organização.<br /><span className="text-[#b6c494]">Menos improviso.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#a3aa9c] sm:text-lg">Uma plataforma criada para centralizar escalas, comunicação e regras operacionais na rotina dos atiradores.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href="#recursos" arrow>Conhecer o Sentinela</Button><Button href="#operacao" variant="secondary">Ver operação</Button></div>
          <div className="mt-10 grid max-w-lg grid-cols-3 border-y border-white/[0.08] py-5">
            {[['01','Problema real'],['03','Plataformas'],['MVP','Em evolução']].map(([value,label]) => <div key={label} className="border-l border-white/[0.08] px-4 first:border-0 first:pl-0"><strong className="block font-mono text-sm text-[#d8cfb1]">{value}</strong><span className="mt-1 block text-[10px] uppercase tracking-[0.13em] text-[#72796d]">{label}</span></div>)}
          </div>
        </div>
        <DashboardPreview />
      </Container>
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[#6f766a] lg:flex"><span className="h-px w-12 bg-white/10" />Role para explorar<span className="h-px w-12 bg-white/10" /></div>
    </section>
  );
}
