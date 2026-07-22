const INSTRUCTOR_IMAGE =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"

export function InstructorSection() {
  return (
    <section className="w-full px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-5">
          <img
            src={INSTRUCTOR_IMAGE}
            alt="Instrutor do Academy Out"
            className="aspect-[4/5] w-full object-cover grayscale"
          />
        </div>

        <div className="flex flex-col gap-5 lg:col-span-7">
          <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Instrutor
          </p>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Felipe Menezes
            </h2>
            <p className="text-sm text-muted-foreground">
              Software Engineer · CCM Tecnologia
            </p>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Mentoria prática em frontend, produto e IA. Foco em construir com
            critério, publicar com clareza e formar quem entrega.
          </p>
        </div>
      </div>
    </section>
  )
}
