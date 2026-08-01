export function AuroraCyber() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="gv-aurora gv-aurora-pink absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#ff2a6d]/40 blur-3xl" />
      <div className="gv-aurora gv-aurora-cyan absolute right-0 top-40 h-80 w-80 rounded-full bg-[#05d9e8]/35 blur-3xl" />
      <div className="gv-aurora gv-aurora-yellow absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-[#f9f002]/25 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5,217,232,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(5,217,232,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="gv-scanlines absolute inset-0 opacity-[0.12]" />
    </div>
  )
}
