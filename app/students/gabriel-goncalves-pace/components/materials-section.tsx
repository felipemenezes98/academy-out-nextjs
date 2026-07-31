import { materials } from "../data/printing"

export function MaterialsSection() {
  return (
    <section
      id="materiais"
      className="w-full scroll-mt-14 px-6 py-16 sm:px-10 sm:py-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <div className="flex flex-col gap-2">
          <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Tipos de material
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Materiais
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            O material define mais o resultado do que a máquina. Ele chega em
            quatro formas: filamento, líquido, pó e pasta.
          </p>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-3xl border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                <th className="py-3 pr-6 font-medium">Material</th>
                <th className="py-3 pr-6 font-medium">Forma</th>
                <th className="py-3 pr-6 font-medium">Indicado para</th>
                <th className="py-3 font-medium">Característica</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((material) => (
                <tr key={material.name} className="border-b border-border">
                  <td className="py-4 pr-6 font-medium">{material.name}</td>
                  <td className="py-4 pr-6 text-muted-foreground">
                    {material.form}
                  </td>
                  <td className="py-4 pr-6 text-muted-foreground">
                    {material.use}
                  </td>
                  <td className="py-4 text-muted-foreground">
                    {material.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
