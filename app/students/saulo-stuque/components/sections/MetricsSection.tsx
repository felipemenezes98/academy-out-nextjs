import { Container } from "../layout/Container";

const metrics = [["100%", "Escalas centralizadas"], ["24h", "Acesso às informações"], ["01", "Canal operacional"], ["0", "Informações sem contexto"]];

export function MetricsSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid border-y border-white/[0.08] md:grid-cols-4">
          {metrics.map(([value, label]) => <div key={label} className="border-b border-white/[0.08] px-6 py-10 text-center last:border-0 md:border-b-0 md:border-r md:last:border-r-0"><strong className="font-mono text-4xl font-medium tracking-[-0.05em] text-[#d8cfb1] sm:text-5xl">{value}</strong><p className="mt-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#7d8478]">{label}</p></div>)}
        </div>
      </Container>
    </section>
  );
}
