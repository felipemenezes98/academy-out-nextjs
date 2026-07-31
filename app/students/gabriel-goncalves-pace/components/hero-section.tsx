import { facts } from "../data/printing"

const HERO_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/3D_printer_farm_at_Hackerspace_Wroc%C5%82aw.jpg/1280px-3D_printer_farm_at_Hackerspace_Wroc%C5%82aw.jpg"

export function HeroSection() {
  return (
    <section className="w-full px-6 pt-16 pb-16 sm:px-10 sm:pt-24 sm:pb-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
              Manufatura aditiva · Guia
            </p>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
              Da ideia à peça pronta, uma camada por vez.
            </h1>
          </div>
        </div>

        <img
          src={HERO_IMAGE}
          alt="Bancada com várias impressoras 3D em funcionamento"
          className="aspect-[16/9] w-full object-cover"
        />

        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1">
              <dt className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {fact.value}
              </dt>
              <dd className="text-xs leading-relaxed text-muted-foreground">
                {fact.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
