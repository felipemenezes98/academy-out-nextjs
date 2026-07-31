import { productTypes } from "../data/printing"

export function ProductsSection() {
  return (
    <section
      id="produtos"
      className="w-full scroll-mt-14 px-6 py-16 sm:px-10 sm:py-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <div className="flex flex-col gap-2">
          <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Tipos de produto
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            O que sai de uma impressora
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Da miniatura ao prédio. O que define o resultado é menos a máquina e
            mais a escala e o material escolhidos.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {productTypes.map((product, index) => {
            const order = String(index + 1).padStart(2, "0")

            return (
              <li key={product.slug} className="flex flex-col gap-3">
                <div className="flex items-baseline justify-between gap-3 text-[11px] tracking-[0.14em] uppercase">
                  <span className="truncate font-medium">{product.name}</span>
                  <span className="shrink-0 text-muted-foreground">
                    {product.field} / {order}
                  </span>
                </div>

                <span className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="size-full object-cover"
                  />
                </span>

                <div className="flex items-baseline justify-between gap-3 text-xs text-muted-foreground">
                  <span>{product.note}</span>
                  <span className="shrink-0">{product.material}</span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
