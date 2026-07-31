export function SectionHeading({ code, title, description, align = "left" }: { code: string; title: string; description?: string; align?: "left" | "center" }) {
  const centered = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-3xl ${centered}`}>
      <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.26em] text-[#b6c494]">{code}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-5 max-w-2xl text-base leading-8 text-[#a4aa9b] sm:text-lg">{description}</p>}
    </div>
  );
}
