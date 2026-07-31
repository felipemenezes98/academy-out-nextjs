export function StatusBadge({ children, tone = "olive" }: { children: React.ReactNode; tone?: "olive" | "warning" | "danger" }) {
  const tones = {
    olive: "border-[#b6c494]/25 bg-[#b6c494]/10 text-[#c9d5ad]",
    warning: "border-[#d8ad55]/25 bg-[#d8ad55]/10 text-[#e8c879]",
    danger: "border-[#c46a5d]/25 bg-[#c46a5d]/10 text-[#dc958a]",
  };
  return <span className={`inline-flex items-center gap-2 border px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] ${tones[tone]}`}><span className="h-1.5 w-1.5 rounded-full bg-current" />{children}</span>;
}
