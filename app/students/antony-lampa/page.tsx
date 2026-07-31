export default function Page() {
  const stats = [
    { title: "Anime", value: "127 episódios" },
    { title: "Lançamento", value: "2008" },
    { title: "Mangá", value: "2008–2011" },
    { title: "Estúdio", value: "OLM" },
  ];

  const games = [
    {
      title: "Inazuma Eleven",
      year: "2008",
      platform: "Nintendo DS",
      description:
        "Primeiro jogo da franquia, lançado inicialmente no Japão.",
    },
    {
      title: "Inazuma Eleven 2",
      year: "2009",
      platform: "Nintendo DS",
      description:
        "Introduziu os Aliens Academy e expandiu bastante a história.",
    },
    {
      title: "Inazuma Eleven 3",
      year: "2010",
      platform: "Nintendo DS",
      description:
        "Focado no torneio mundial Football Frontier International.",
    },
    {
      title: "Inazuma Eleven GO",
      year: "2011",
      platform: "Nintendo 3DS",
      description:
        "Nova geração de protagonistas liderada por Matsukaze Tenma.",
    },
  ];

  const timeline = [
    {
      year: "2008",
      event: "Lançamento do primeiro jogo para Nintendo DS.",
    },
    {
      year: "2008",
      event: "Estreia do anime Super Onze.",
    },
    {
      year: "2008",
      event: "Início da publicação do mangá.",
    },
    {
      year: "2011",
      event: "Chegada da série Inazuma Eleven GO.",
    },
    {
      year: "2018",
      event: "Lançamento de Inazuma Eleven Ares.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-cyan-600 to-orange-500 opacity-30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
          <span className="rounded-full border border-cyan-400 px-4 py-2 text-sm text-cyan-300">
             Anime • Jogos • Mangá
          </span>

          <h1 className="mt-8 text-5xl font-extrabold md:text-7xl">
            Super Onze
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Um dos maiores animes de futebol já criados. Misturando amizade,
            competição e técnicas impossíveis, Super Onze marcou uma geração e
            continua conquistando fãs até hoje.
          </p>

          {/*<div className="mt-10 flex justify-center gap-4">
            <button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold transition hover:bg-cyan-400">
              Conhecer a História
            </button>

            <button className="rounded-xl border border-slate-600 px-6 py-3 transition hover:bg-slate-800">
              Ver Curiosidades
            </button>
          </div> */}
        </div>
      </section>

      {/* Sobre */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold">Sobre o Anime</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="leading-8 text-slate-300">
              Super Onze (Inazuma Eleven) acompanha Endou Mamoru, um goleiro
              apaixonado por futebol que sonha em levar a Escola Raimon ao topo.
              Ao longo da jornada, ele reúne companheiros talentosos, enfrenta
              rivais memoráveis e aprende que amizade e trabalho em equipe são
              tão importantes quanto vencer.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="mb-4 text-xl font-semibold">
              Informações Gerais
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>📅 Estreia: Outubro de 2008</li>
              <li>🏁 Episódio final: Abril de 2011</li>
              <li>🎬 Total: 127 episódios</li>
              <li>📺 Estúdio: OLM</li>
              <li>⚽ Gêneros: Esporte, Aventura, Shounen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center"
            >
              <h3 className="text-lg text-slate-400">{item.title}</h3>
              <p className="mt-3 text-3xl font-bold text-cyan-400">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Técnicas */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-3xl font-bold">
            Técnicas Mais Icônicas
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              "God Hand",
              "Fire Tornado",
              "Majin The Hand",
              "God Catch",
              "Eternal Blizzard",
              "Dragon Crash",
            ].map((move) => (
              <div
                key={move}
                className="rounded-xl border border-slate-700 p-6 transition hover:border-cyan-400"
              >
                <h3 className="text-xl font-semibold">{move}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jogos */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-3xl font-bold">
          Jogos Originais
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {games.map((game) => (
            <div
              key={game.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-2xl font-bold">{game.title}</h3>

              <p className="mt-2 text-cyan-400">
                {game.year} • {game.platform}
              </p>

              <p className="mt-4 text-slate-300">
                {game.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mangá */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-3xl font-bold">
            O Mangá
          </h2>

          <div className="rounded-2xl border border-slate-700 p-8">
            <p className="leading-8 text-slate-300">
              O mangá foi ilustrado por Tenya Yabuno e publicado entre
              2008 e 2011. Embora siga a mesma base da história do anime,
              possui diferenças em alguns acontecimentos e personagens.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div>
                <h4 className="font-bold text-cyan-400">Autor</h4>
                <p>Tenya Yabuno</p>
              </div>

              <div>
                <h4 className="font-bold text-cyan-400">Volumes</h4>
                <p>10</p>
              </div>

              <div>
                <h4 className="font-bold text-cyan-400">Publicação</h4>
                <p>2008–2011</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curiosidades */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-3xl font-bold">
          Curiosidades
        </h2>

        <div className="space-y-5">
          {[
            "⚽ A franquia nasceu primeiro como um jogo para Nintendo DS.",
            "🌍 O anime foi exibido em dezenas de países.",
            "🎮 A Level-5 desenvolveu toda a franquia.",
            "🏆 A série possui vários filmes e continuações.",
            "🔥 As técnicas especiais foram inspiradas em golpes de animes shounen.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Linha do Tempo
          </h2>

          <div className="space-y-6 border-l-2 border-cyan-500 pl-8">
            {timeline.map((item) => (
              <div key={`${item.year}-${item.event}`}>
                <span className="text-cyan-400 font-bold">
                  {item.year}
                </span>

                <p className="text-slate-300">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
        <footer className="border-t border-slate-800 bg-slate-950 py-12">
            <div className="mx-auto max-w-4xl px-6 text-center">
                <h2 className="mb-4 text-2xl font-bold text-cyan-400">
                Sobre mim
                </h2>

                <p className="leading-8 text-slate-300">
                Meu nome é <span className="font-semibold text-white">Antony Lampa</span>,
                tenho <span className="font-semibold text-white">23 anos</span> e curso
                <span className="font-semibold text-white">
                    {" "}Engenharia da Computação
                </span>.
                Sou um grande fã da franquia <span className="font-semibold text-cyan-400">Super Onze (Inazuma Eleven)</span>,
                que marcou minha infância e continua sendo uma das minhas obras favoritas.
                Ao longo dos anos, assisti ao anime, joguei alguns dos jogos da série e
                também li o mangá completo, o que fez com que eu admirasse ainda mais esse
                universo e seus personagens.
                </p>

                <p className="mt-8 text-sm text-slate-500">
                Desenvolvido com React, Vite e TailwindCSS.
                </p>
            </div>
        </footer>
    </main>
  );
}