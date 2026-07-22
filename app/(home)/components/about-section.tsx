const IMAGE =
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop"

export function AboutSection() {
  return (
    <section className="w-full px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-12 lg:items-center lg:gap-20">
        <div className="flex flex-col gap-5 lg:col-span-5">
          <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Sobre
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            O Academy Out
          </h2>
          <div className="flex max-w-sm flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              É o programa de formação prática da CCM Tecnologia. A turma
              aprende frontend construindo um projeto real, com apoio de
              ferramentas de IA.
            </p>
            <p>
              No fim, cada aluno publica sua landing page nesta vitrine open
              source.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <img
            src={IMAGE}
            alt=""
            className="aspect-[16/10] w-full object-cover grayscale"
          />
        </div>
      </div>
    </section>
  )
}
