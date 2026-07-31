export default function Home() {
  const scientists = [
    {
      id: "einstein",
      name: "Albert Einstein",
      image:
        "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1000&auto=format&fit=crop",
      born: "1879 - 1955",
      description:
        "Albert Einstein revolucionou a física moderna com a Teoria da Relatividade, mudando para sempre a maneira como entendemos espaço, tempo e gravidade.",
      achievements: [
        "Criador da Teoria da Relatividade Especial (1905).",
        "Desenvolveu a Teoria da Relatividade Geral (1915).",
        "Explicou o efeito fotoelétrico, recebendo o Nobel de Física em 1921.",
        "Seus estudos influenciaram diretamente a cosmologia moderna."
      ]
    },
    {
      id: "hawking",
      name: "Stephen Hawking",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
      born: "1942 - 2018",
      description:
        "Stephen Hawking dedicou sua carreira ao estudo dos buracos negros, da origem do universo e das leis fundamentais da física.",
      achievements: [
        "Propôs a famosa Radiação Hawking.",
        "Pesquisou a origem do universo juntamente com Roger Penrose.",
        "Popularizou a ciência com o livro 'Uma Breve História do Tempo'.",
        "Tornou-se um símbolo mundial da perseverança científica."
      ]
    },
    {
      id: "newton",
      name: "Isaac Newton",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop",
      born: "1643 - 1727",
      description:
        "Isaac Newton lançou as bases da física clássica e da matemática moderna, permitindo compreender o movimento dos corpos celestes.",
      achievements: [
        "Formulou as três Leis do Movimento.",
        "Descobriu a Lei da Gravitação Universal.",
        "Desenvolveu o cálculo diferencial e integral.",
        "Construiu um dos primeiros telescópios refletores."
      ]
    }
  ];

  return (
    <main className="bg-slate-950 text-white scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur border-b border-slate-700 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <h1 className="font-bold text-xl text-cyan-400">
            Universo da Ciência
          </h1>

          <ul className="flex gap-8 text-sm">
            <li>
              <a href="#home" className="hover:text-cyan-400 transition">
                Início
              </a>
            </li>
            <li>
              <a href="#einstein" className="hover:text-cyan-400 transition">
                Einstein
              </a>
            </li>
            <li>
              <a href="#hawking" className="hover:text-cyan-400 transition">
                Hawking
              </a>
            </li>
            <li>
              <a href="#newton" className="hover:text-cyan-400 transition">
                Newton
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <h2 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Cientistas que Mudaram o Universo
        </h2>

        <p className="max-w-3xl text-xl text-slate-300 leading-8">
          Conheça três dos maiores nomes da história da ciência. Suas ideias
          transformaram nossa compreensão do espaço, do tempo, da gravidade e
          do próprio universo.
        </p>

        <a
          href="#einstein"
          className="mt-12 bg-cyan-500 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 transition"
        >
          Explorar
        </a>
      </section>

      {/* Cientistas */}
      {scientists.map((scientist) => (
        <section
          key={scientist.id}
          id={scientist.id}
          className="min-h-screen flex items-center"
        >
          <div className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">

            <img
              src={scientist.image}
              alt={scientist.name}
              className="rounded-2xl shadow-2xl h-[500px] w-full object-cover"
            />

            <div>
              <p className="text-cyan-400 font-semibold mb-2">
                {scientist.born}
              </p>

              <h2 className="text-5xl font-bold mb-6">
                {scientist.name}
              </h2>

              <p className="text-slate-300 leading-8 mb-8">
                {scientist.description}
              </p>

              <h3 className="text-2xl font-semibold mb-4">
                Principais Contribuições
              </h3>

              <ul className="space-y-4 text-slate-300">
                {scientist.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex gap-3"
                  >
                    <span className="text-cyan-400 font-bold">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        Desenvolvido em React + Next.js + Tailwind CSS
      </footer>
    </main>
  );
}