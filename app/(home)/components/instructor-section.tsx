const IMAGES = [
  "https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/ccmtecnologiadc01/b/website-ccm/o/ec2b8ddf-a2b1-40f5-a248-47672d175fb1.jpg",
  "https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/ccmtecnologiadc01/b/website-ccm/o/WhatsApp%20Image%202026-07-31%20at%2023.00.34.jpeg",
  "https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/ccmtecnologiadc01/b/website-ccm/o/47623129-b063-4187-9f4a-ca96a57a5ae0.jpg",
]

export function InstructorSection() {
  return (
    <section className="w-full px-6 py-12 sm:px-10 sm:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 sm:gap-10">
        <div className="flex max-w-xl flex-col gap-3">
          <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Instrutores
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Quem acompanha o processo
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Profissionais da CCM conduzem as turmas de perto, com mentoria
            prática e olhar de quem entrega no dia a dia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {IMAGES.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              className="h-auto w-full dark:brightness-90"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
