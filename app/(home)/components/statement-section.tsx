const LEFT_IMAGE =
  "https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/ccmtecnologiadc01/b/website-ccm/o/WhatsApp%20Image%202026-07-22%20at%2021.20.11.jpeg"
const RIGHT_IMAGE =
  "https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/ccmtecnologiadc01/b/website-ccm/o/720e9127-ff26-4f2b-9c99-39453b37f0ae.jpg"

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
              Fazer é a única forma de aprender.
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              No Academy Out, cada aluno constrói do zero, testa na prática e
              sai com um projeto que existe de verdade.
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
