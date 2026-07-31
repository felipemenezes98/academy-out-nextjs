import {
  Gamepad2,
  Crosshair,
  Trophy,
  Car,
  ChevronRight,
  Target,
  Users,
  Zap,
} from "lucide-react";


const games = [
  {
    name: "Rocket League",
    icon: <Car size={35} />,
    image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/252950/header.jpg",
    description:
      "Uma mistura única de futebol e carros. Um jogo competitivo que exige reflexo, controle e muito trabalho em equipe.",
    tags: ["Competitivo", "Online", "Multiplayer"],
  },

  {
    name: "Rainbow Six Siege",
    icon: <Crosshair size={35} />,
    image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/359550/header.jpg",
    description:
      "Um FPS tático onde estratégia, comunicação e decisões rápidas fazem toda diferença.",
    tags: ["FPS", "Estratégia", "Tático"],
  },

 {
  name: "EA Sports FC 26",
  icon: <Trophy size={35} />,
  image:
    "https://comicbook.com/wp-content/uploads/sites/4/2025/07/EA-Sports-FC-26-Cover.jpg",
  description:
    "O futebol virtual que une competição, habilidade e diversão com amigos.",
  tags: ["Futebol", "Online", "Competição"],
},
];


export default function Home() {
  return (
    <main className="min-h-screen bg-[#050706] text-white">


      {/* NAVBAR */}

      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div className="flex items-center gap-3 text-xl font-bold text-green-500">
            <Gamepad2 />
            Xbox Favorites
          </div>


          <div className="hidden gap-8 text-gray-300 md:flex">

            <a href="#sobre" className="transition hover:text-green-400">
              Sobre
            </a>

            <a href="#jogos" className="transition hover:text-green-400">
              Jogos
            </a>

            <a href="#final" className="transition hover:text-green-400">
              Final
            </a>

          </div>

        </nav>

      </header>





      {/* HERO */}

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">


        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-transparent to-black"/>


        <div className="relative z-10 max-w-5xl">


          <p className="mb-6 tracking-[5px] text-green-500 font-bold">
            MY XBOX EXPERIENCE
          </p>



          <h1 className="text-5xl font-black uppercase md:text-8xl">

            Meus jogos

            <span className="block text-green-500">
              favoritos
            </span>

          </h1>



          <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400">

            Uma coleção dos jogos que fizeram parte da minha história no Xbox,
            trazendo competição, estratégia e diversão.

          </p>



          <a
            href="#jogos"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 font-bold transition hover:scale-105 hover:bg-green-500"
          >

            Explorar jogos

            <ChevronRight />

          </a>


        </div>

      </section>






      {/* SOBRE */}

      <section
        id="sobre"
        className="mx-auto max-w-6xl px-6 py-24"
      >

        <h2 className="text-4xl font-bold">
          Sobre meu hobby
        </h2>


        <p className="mt-6 max-w-3xl text-gray-400 leading-relaxed">

          Os videogames sempre fizeram parte do meu tempo livre.
          Cada jogo entrega uma experiência diferente:

          <span className="text-green-400">
            {" "}velocidade, estratégia e competição.
          </span>

          <br/><br/>

          Esses três títulos representam diferentes formas de diversão
          dentro do universo gamer.

        </p>


      </section>






      {/* STATS */}

      <section className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">


        <div className="rounded-3xl border border-white/10 bg-[#101413] p-8">

          <Zap className="text-green-500"/>

          <h3 className="mt-5 text-2xl font-bold">
            Competição
          </h3>

          <p className="mt-3 text-gray-400">
            Jogos que desafiam minhas habilidades.
          </p>

        </div>



        <div className="rounded-3xl border border-white/10 bg-[#101413] p-8">

          <Target className="text-green-500"/>

          <h3 className="mt-5 text-2xl font-bold">
            Estratégia
          </h3>

          <p className="mt-3 text-gray-400">
            Pensamento rápido e tomada de decisão.
          </p>

        </div>




        <div className="rounded-3xl border border-white/10 bg-[#101413] p-8">

          <Users className="text-green-500"/>

          <h3 className="mt-5 text-2xl font-bold">
            Multiplayer
          </h3>

          <p className="mt-3 text-gray-400">
            Momentos compartilhados com amigos.
          </p>

        </div>


      </section>








      {/* JOGOS */}

      <section
        id="jogos"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <h2 className="mb-12 text-4xl font-bold">
          Meus jogos favoritos
        </h2>



        <div className="grid gap-8 md:grid-cols-3">


          {games.map((game)=>(

            <article
              key={game.name}
              className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-[#101413]
              transition
              hover:-translate-y-3
              hover:border-green-500
              "
            >


              <div className="h-52 overflow-hidden">

                <img
                  src={game.image}
                  alt={game.name}
                  className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-110
                  "
                />

              </div>



              <div className="p-6">


                <div className="flex items-center gap-3 text-green-500">

                  {game.icon}

                  <h3 className="text-2xl font-bold text-white">
                    {game.name}
                  </h3>

                </div>



                <p className="mt-5 text-gray-400">
                  {game.description}
                </p>



                <div className="mt-6 flex flex-wrap gap-2">

                  {game.tags.map(tag=>(

                    <span
                      key={tag}
                      className="
                      rounded-full
                      bg-green-500/10
                      px-3
                      py-1
                      text-sm
                      text-green-400
                      "
                    >
                      {tag}
                    </span>

                  ))}

                </div>


              </div>


            </article>


          ))}


        </div>


      </section>







      {/* FINAL */}

      <section
        id="final"
        className="px-6 py-24 text-center"
      >

        <h2 className="text-5xl font-black">
          Mais que jogos.
        </h2>


        <p className="mx-auto mt-6 max-w-xl text-gray-400">

          São experiências que desenvolvem estratégia,
          criatividade e conexão com outras pessoas.

        </p>

      </section>






      <footer className="border-t border-white/10 py-8 text-center text-gray-500">

        Desenvolvido com React + Next.js + Tailwind CSS 🎮

      </footer>


    </main>
  );
}