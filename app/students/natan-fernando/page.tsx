export default function Home() {
  const books = [
    {
      title: "O Hobbit",
      image:
        "https://images.unsplash.com/photo-1719620131158-fb8c560abbc3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      synopsis:
        "A aventura de Bilbo Bolseiro começa quando o mago Gandalf o convida para acompanhar um grupo de anões em uma jornada para recuperar um tesouro perdido.",
      date: "21 de setembro de 1937",
      description:
        "O Hobbit apresenta a Terra-média ao leitor por meio da jornada de Bilbo Bolseiro, um hobbit que leva uma vida tranquila até ser surpreendido por Gandalf e treze anões. Durante sua aventura, Bilbo enfrenta trolls, goblins, aranhas gigantes e o dragão Smaug. É nesse caminho que encontra o Um Anel, objeto que mudaria o destino de toda a Terra-média. A obra mistura fantasia, aventura e amadurecimento, sendo considerada a porta de entrada para o universo criado por J. R. R. Tolkien.",
    },
    {
      title: "A Sociedade do Anel",
      image:
        "https://images.unsplash.com/photo-1618845072579-853968656c0e?q=80&w=783&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      synopsis:
        "Frodo recebe a missão de destruir o Um Anel e parte em uma jornada ao lado da Sociedade formada por homens, elfos, anões, hobbits e um mago.",
      date: "29 de julho de 1954",
      description:
        "A Sociedade do Anel inicia a maior jornada da Terra-média. Frodo Bolseiro herda o Um Anel de Bilbo e descobre seu verdadeiro poder. Com a ajuda de Gandalf, Aragorn, Legolas, Gimli, Boromir, Sam, Merry e Pippin, forma-se a Sociedade do Anel. O grupo enfrenta inúmeros perigos enquanto tenta levar o Anel até Mordor para destruí-lo. O livro destaca amizade, coragem, esperança e o peso das escolhas individuais diante do mal.",
    },
    {
      title: "As Duas Torres",
      image:
        "https://images.unsplash.com/photo-1648278050930-275d5d7c15e3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      synopsis:
        "A Sociedade se divide enquanto Frodo continua sua missão e Aragorn lidera a resistência contra as forças de Saruman.",
      date: "11 de novembro de 1954",
      description:
        "Após a separação da Sociedade, a história acompanha diferentes grupos. Frodo e Sam seguem rumo a Mordor acompanhados por Gollum, enquanto Aragorn, Legolas e Gimli ajudam o povo de Rohan contra Saruman. O livro apresenta batalhas épicas, como a do Abismo de Helm, e aprofunda o conflito entre o bem e o mal. A narrativa mostra como diferentes povos precisam se unir para enfrentar uma ameaça comum.",
    },
    {
      title: "O Retorno do Rei",
      image:
        "https://images.unsplash.com/photo-1650737845108-3b551c9cd1ee?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      synopsis:
        "A batalha final contra Sauron acontece enquanto Frodo e Sam enfrentam os últimos desafios para destruir o Um Anel.",
      date: "20 de outubro de 1955",
      description:
        "O último volume conclui a Guerra do Anel. Aragorn assume seu destino como rei de Gondor enquanto os exércitos da Terra-média enfrentam Sauron na batalha decisiva. Paralelamente, Frodo e Sam chegam a Mordor para destruir o Um Anel na Montanha da Perdição. A obra encerra a jornada dos personagens com temas como sacrifício, amizade, esperança e renovação, consolidando O Senhor dos Anéis como uma das maiores obras da literatura fantástica.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#4B3621]] text-[#4A3425]">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-8 py-16 text-center">
        <h1 className="text-5xl text-[#F5F1E8] mb-6">
          Um breve resumo sobre O Senhor dos Anéis de J. R. R. Tolkien
        </h1>

        <p className="text-lg text-[#F5F1E8] max-w-4xl mx-auto">
          Explore a fantástica Terra-média criada por J. R. R. Tolkien por meio
          de seus livros mais importantes. Uma jornada repleta de coragem,
          amizade, magia e batalhas épicas que marcou gerações de leitores.
        </p>
      </section>

      {/* CARDS */}
      <section className="max-w-7xl mx-auto px-8 pb-20">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {books.map((book) => (
            <div
              key={book.title}
              className="bg-[#FFF8EC] rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">{book.title}</h2>

                <p className="text-[#5E4B3C] text-sm line-clamp-3 mb-4">
                  {book.synopsis}
                </p>

                <p className="font-semibold text-[#7C5C3D]">
                  📅 {book.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DETALHES */}
      <section className="max-w-7xl mx-auto px-8 pb-24 space-y-16">
        {books.map((book, index) => (
          <div
            key={book.title}
            className={`grid lg:grid-cols-2 gap-10 items-center ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <img
              src={book.image}
              alt={book.title}
              className="rounded-3xl shadow-xl w-full h-[520px] object-cover"
            />

            <div className="bg-[#FFF8EC] rounded-3xl shadow-lg p-10">
              <h2 className="text-4xl font-bold mb-6">{book.title}</h2>

              <p className="leading-8 text-lg text-[#5B4738]">
                {book.description}
              </p>

              <div className="mt-8">
                <span className="font-bold text-[#7C5C3D]">
                  Publicação:
                </span>{" "}
                {book.date}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}