import "./global.css"

import { Hero } from "./hero.jsx"
import { Section } from "./section"
import { Gallery } from "./gallery"
import { Testimonials } from "./testmonials"

export default function Home() {
  return (
    <main className="samuel samuel-page">
      <Hero />

      <Section
        title="A estrada chama"
        text="Sinta a liberdade de pilotar uma motocicleta custom construída para transformar cada viagem em uma aventura inesquecível."
      />

      <Gallery />

      <Section
        title="Viva sem limites"
        text="Cada curva revela uma nova paisagem. Cada quilômetro aproxima você da verdadeira sensação de liberdade."
      />

      <Testimonials />

      <footer>© 2026 Custom Freedom</footer>
    </main>
  )
}
