const IMAGE =
  "https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/ccmtecnologiadc01/b/website-ccm/o/WhatsApp%20Image%202026-07-29%20at%2021.09.37%20(1).jpeg"

export function AboutSection() {
  return (
    <section className="w-full px-6 py-12 sm:px-10 sm:py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="flex flex-col gap-5 lg:col-span-5">
          <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Sobre
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            O Academy Out
          </h2>
          <div className="flex max-w-sm flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              O Academy Out é o programa de educação da CCM Tecnologia, em
              parceria com universidades e instituições. São várias trilhas
              práticas. Esta página mostra a turma de frontend com IA, em que
              cada aluno construiu um projeto real.
            </p>
            <p>No fim, cada um publica sua landing page nesta vitrine.</p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <img
            src={IMAGE}
            alt=""
            className="aspect-[16/10] w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
