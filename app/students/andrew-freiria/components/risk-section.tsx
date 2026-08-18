import { AlertTriangle, ShieldCheck } from "lucide-react";

export function RiskSection() {
  return (
    <section id="risk-section" className="border-y border-blue-500/40 bg-blue-500/20">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <p className="section-eyebrow">Risk explained</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Should we be worried?</h2>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <ShieldCheck className="mt-1 size-5 shrink-0 text-blue-500" />
              <p className="leading-7">
                Usually, no. In astronomy, an object described as “near Earth”
                can still be millions of kilometers away. Proximity alone does
                not mean an impact is likely.
              </p>
            </div>
            <div className="flex gap-4">
              <AlertTriangle className="mt-1 size-5 shrink-0 text-blue-500" />
              <p className="leading-7">
                Real risk assessment considers size, trajectory, probability of
                impact and the uncertainty of the available observations.
              </p>
            </div>
            <p className="border-t border-blue-500/20 pt-5 text-sm text-muted-foreground">
              This project uses fictional data and is intended for interface and
              educational purposes, not real-world risk assessment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
