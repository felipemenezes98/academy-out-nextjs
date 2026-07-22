const LEFT_IMAGE =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop"
const RIGHT_IMAGE =
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=900&auto=format&fit=crop"

export function StatementSection() {
  return (
    <section className="w-full px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12">
        <div className="flex w-full flex-col items-center gap-8 lg:grid lg:grid-cols-[1fr_1.2fr_1fr] lg:items-center lg:gap-8">
          <img
            src={LEFT_IMAGE}
            alt=""
            className="order-2 aspect-[3/4] w-full max-w-sm object-cover grayscale lg:order-1 lg:max-w-none"
          />

          <div className="order-1 flex flex-col items-center gap-4 px-2 text-center lg:order-2 lg:px-4">
            <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              Filosofia
            </p>
            <h2 className="max-w-md text-2xl leading-tight font-semibold tracking-tight sm:text-3xl md:text-4xl">
              IA acelera. Critério define.
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              No Academy Out, a inteligência artificial é parceira de trabalho,
              não substituto de pensamento. O resultado final é do aluno.
            </p>
          </div>

          <img
            src={RIGHT_IMAGE}
            alt=""
            className="order-3 aspect-[3/4] w-full max-w-sm object-cover grayscale lg:max-w-none"
          />
        </div>
      </div>
    </section>
  )
}
