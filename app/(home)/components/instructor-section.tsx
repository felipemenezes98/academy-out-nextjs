const INSTRUCTOR_IMAGE =
  "https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/ccmtecnologiadc01/b/website-ccm/o/WhatsApp%20Image%202026-07-28%20at%2018.16.54.jpeg"

export function InstructorSection() {
  return (
    <section className="w-full px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-5">
          <img
            src={INSTRUCTOR_IMAGE}
            alt="Instrutor do Academy Out"
            className="aspect-[6/5] w-full object-cover grayscale-50 dark:brightness-90 dark:grayscale"
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
              Senior Software Engineer · CCM Tecnologia
            </p>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Mentoria prática em frontend, produto e IA, com foco em quem
            realmente entrega o trabalho.
          </p>
        </div>
      </div>
    </section>
  )
}
