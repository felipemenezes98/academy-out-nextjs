"use client";

import { useEffect, useState } from "react";

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
  const characters = [
  {
    name: "Frodo Bolseiro",
    image:
      "https://images.unsplash.com/photo-1587256961522-9baaa5a730da?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "O portador do Um Anel. Mesmo sendo um simples hobbit, assume a difícil missão de levar o Anel até Mordor para destruí-lo, demonstrando coragem e perseverança durante toda a jornada.",
  },
  {
    name: "Aragorn",
    image:
      "https://images.unsplash.com/photo-1440711085503-89d8ec455791?q=80&w=798&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Conhecido inicialmente como Passolargo, é o herdeiro legítimo do trono de Gondor. Torna-se um dos maiores líderes da Guerra do Anel e simboliza coragem, honra e esperança.",
  },
  {
    name: "Gandalf",
    image:
      "https://plus.unsplash.com/premium_photo-1661434884467-7bc4b67f752c?q=80&w=861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Um dos Istari enviados para ajudar os povos livres da Terra-média. Sua sabedoria e liderança são fundamentais durante toda a missão contra Sauron.",
  },
  {
    name: "Legolas",
    image:
      "https://images.unsplash.com/photo-1510925758641-869d353cecc7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Príncipe dos elfos da Floresta das Trevas. Exímio arqueiro, representa a agilidade e a elegância dos elfos e desenvolve uma amizade histórica com Gimli.",
  },
  {
    name: "Gimli",
    image:
      "https://images.unsplash.com/photo-1779908782225-002814ec6da9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Um guerreiro anão extremamente habilidoso com seu machado. Sua amizade com Legolas mostra que antigas rivalidades podem ser superadas.",
  },
  {
    name: "Samwise Gamgee",
    image:
      "https://plus.unsplash.com/premium_photo-1678469638472-85dccd2910a0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Companheiro inseparável de Frodo. Sua lealdade, humildade e coragem fazem dele um dos personagens mais importantes de toda a história.",
  },
];
const curiosities = [
  {
    title: "Professor em Oxford",
    text: "Tolkien foi professor de Língua e Literatura Anglo-Saxônica na Universidade de Oxford."
  },
  {
    title: "Primeira Guerra",
    text: "Serviu como oficial durante a Primeira Guerra Mundial."
  },
  {
    title: "Idiomas Élficos",
    text: "Criou idiomas completos, como Quenya e Sindarin."
  },
  {
    title: "Mais de 20 idiomas",
    text: "Tolkien estudava e conhecia dezenas de idiomas."
  },
  {
    title: "O Hobbit",
    text: "A história começou como um conto contado para seus filhos."
  },
  {
    title: "O Um Anel",
    text: "O Anel não fazia parte da ideia original de O Hobbit."
  },
  {
    title: "Valorizava mapas",
    text: "Grande parte da Terra-média foi desenhada pelo próprio Tolkien."
  },
  {
    title: "Amizade Literária",
    text: "Era grande amigo de C. S. Lewis, autor de As Crônicas de Nárnia."
  },
  {
    title: "Décadas escrevendo",
    text: "O legendário da Terra-média levou décadas para ser desenvolvido."
  },
  {
    title: "Filho organizador",
    text: "Christopher Tolkien publicou diversas obras após a morte do pai."
  },
  {
    title: "Silmarillion",
    text: "Foi publicado apenas em 1977, quatro anos após sua morte."
  },
  {
    title: "Inspiração",
    text: "A mitologia nórdica influenciou profundamente sua obra."
  },
  {
    title: "Detalhes",
    text: "Cada povo da Terra-média possui história, cultura e idioma próprios."
  },
  {
    title: "Adaptações",
    text: "A trilogia dirigida por Peter Jackson ganhou diversos Oscars."
  },
  {
    title: "Legado",
    text: "Tolkien é considerado o pai da fantasia moderna."
  }
];

const [currentCharacter, setCurrentCharacter] = useState(0);

const [isModalOpen, setIsModalOpen] = useState(false);

const nextCharacter = () => {
  setCurrentCharacter((prev) => (prev + 1) % characters.length);
};

const previousCharacter = () => {
  setCurrentCharacter((prev) =>
    prev === 0 ? characters.length - 1 : prev - 1
  );
};

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentCharacter((prev) => (prev + 1) % characters.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const handleEsc = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsModalOpen(false);
    }
  };

  if (isModalOpen) {
    window.addEventListener("keydown", handleEsc);
  }

  return () => {
    window.removeEventListener("keydown", handleEsc);
  };
}, [isModalOpen]);


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

      {/* PERSONAGENS */}

<section className="max-w-7xl mx-auto px-8 py-24">

    <h2 className="text-5xl text-[#F5F1E8] font-bold text-center mb-16">
        Principais Personagens
    </h2>

    <div className="grid grid-cols-[80px_1fr_80px] items-center gap-8">

        {/* Botão Esquerda */}

        <button
            onClick={previousCharacter}
            className="h-16 w-16 rounded-full bg-[#6F4E37] text-white text-3xl hover:bg-[#8B6B3F] transition"
        >
            ←
        </button>

        {/* Card */}

        <div className="bg-[#FFF8EC] rounded-3xl shadow-xl overflow-hidden">

            <div className="grid lg:grid-cols-2">

                <img
                    src={characters[currentCharacter].image}
                    alt={characters[currentCharacter].name}
                    className="w-full h-[500px] object-cover"
                />

                <div className="flex flex-col justify-center p-10">

                    <div className="bg-[#6F4E37] text-white rounded-xl py-3 px-6 inline-block w-fit mb-8">
                        <h3 className="text-3xl font-bold">
                            {characters[currentCharacter].name}
                        </h3>
                    </div>

                    <p className="leading-8 text-lg text-[#4A3425]">
                        {characters[currentCharacter].description}
                    </p>

                </div>

            </div>

        </div>

        {/* Botão Direita */}

        <button
            onClick={nextCharacter}
            className="h-16 w-16 rounded-full bg-[#6F4E37] text-white text-3xl hover:bg-[#8B6B3F] transition"
        >
            →
        </button>

    </div>

    {/* Indicadores */}

    <div className="flex justify-center gap-4 mt-10">

        {characters.map((_, index) => (

            <button
                key={index}
                onClick={() => setCurrentCharacter(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                    currentCharacter === index
                        ? "bg-[#8B6B3F] w-8"
                        : "bg-[#D8C4A3]"
                }`}
            />

        ))}

    </div>

</section>

<div className="flex justify-center mt-12">
  <button
    onClick={() => setIsModalOpen(true)}
    className="bg-[#6F4E37] hover:bg-[#8B6B3F] text-white px-8 py-4 rounded-xl font-semibold text-lg transition duration-300 shadow-lg hover:shadow-xl"
  >
    📚 Explorar todas as curiosidades
  </button>
</div>



      {/* TOLKIEN */}
<section className="max-w-7xl mx-auto px-8 pb-24">
  <div className="grid lg:grid-cols-2 gap-10 items-center bg-[#FFF8EC] rounded-3xl shadow-xl overflow-hidden">

    {/* Imagem */}
    <div>
      <img
        src="https://cdn.britannica.com/65/66765-050-63A945A7/JRR-Tolkien.jpg"
        alt="J. R. R. Tolkien"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Conteúdo */}
    <div className="p-10">
      <h2 className="text-4xl font-bold mb-6 text-[#4A3425]">
        J. R. R. Tolkien
      </h2>

      <div className="bg-[#F5E6C8] border-l-4 border-[#8B6B3F] rounded-xl p-6 italic text-lg leading-8 text-[#5B4738] mb-8">
        "Nem tudo que reluz é ouro,Nem todos os que vagueiam estão perdidos;O velho que é forte não murcha,Raízes profundas não são atingidas pela geada.Das cinzas um fogo será despertado,Uma luz das sombras surgirá;Renovada será a lâmina que foi quebrada,O sem coroa novamente será rei"
      </div>

        <p className="leading-8 text-lg text-[#5B4738]">
        Esse é o início de um dos poemas mais conhecidos escritos por Tolkien.
        A composição aparece em <strong>A Sociedade do Anel</strong> e é
        apresentada por Bilbo Bolseiro para descrever Aragorn, conhecido na
        época como Passolargo. O poema destaca que o verdadeiro valor de uma
        pessoa nem sempre é percebido à primeira vista e que a aparência pode
        esconder coragem, sabedoria e grandeza. A mensagem tornou-se uma das
        citações mais emblemáticas da literatura fantástica e representa temas
        centrais da obra, como esperança, humildade e destino.
        </p>
      </div>
    </div>
  </section>

{
  isModalOpen && (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-6 overflow-hidden"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#F5E6C8] w-full max-w-6xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Header */}

        <div className="bg-[#4A3425] text-white px-10 py-6 flex justify-between items-center">

          <h2 className="text-4xl font-bold">
            Curiosidades do Universo Tolkien
          </h2>

          <button
            onClick={() => setIsModalOpen(false)}
            className="text-4xl hover:text-[#D4AF37] transition"
          >
            ✕
          </button>

        </div>

        {/* Conteúdo */}

        <div className="overflow-y-auto max-h-[75vh] p-10 overscroll-contain">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {curiosities.map((item, index) => (

              <div
                key={index}
                className="bg-[#FFF8EC] rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300 border border-[#D8C4A3]"
              >
                <div className="text-3xl mb-4">
                  📖
                </div>

                <h3 className="text-xl font-bold text-[#4A3425] mb-4">
                  {item.title}
                </h3>

                <p className="text-[#5B4738] leading-7">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </div>
  )
}

{/* FOOTER */}

<footer className="bg-[#2F1F18] text-[#F7F2E8] mt-24">

    <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid lg:grid-cols-2 gap-16">

            {/* Sobre */}

            <div>

                <h2 className="text-4xl font-bold mb-6">
                    Sobre o Desenvolvedor
                </h2>

                <p className="leading-8 text-lg text-[#D8C4A3]">
                    Olá! Meu nome é <strong>Natan Fernando</strong> e sou estudante
                    de tecnologia com foco em Desenvolvimento de Software e
                    Análise de Dados. Este projeto foi desenvolvido durante o
                    Academy Out da CCM com o objetivo de praticar conceitos de
                    Front-end utilizando Next.js, Tailwind CSS e integração com
                    Inteligência Artificial.
                </p>

                <div className="flex flex-wrap gap-3 mt-8">

                    <span className="bg-[#6F4E37] px-4 py-2 rounded-full">
                        Next.js
                    </span>

                    <span className="bg-[#6F4E37] px-4 py-2 rounded-full">
                        React
                    </span>

                    <span className="bg-[#6F4E37] px-4 py-2 rounded-full">
                        TypeScript
                    </span>

                    <span className="bg-[#6F4E37] px-4 py-2 rounded-full">
                        Tailwind CSS
                    </span>

                    <span className="bg-[#6F4E37] px-4 py-2 rounded-full">
                        OpenAI
                    </span>

                </div>

                <a
                    href="https://www.linkedin.com/in/natan-fernando/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-8 bg-[#8B6B3F] hover:bg-[#A67C52]
                    px-8 py-3 rounded-xl transition font-semibold"
                >
                    💼 Visitar meu LinkedIn
                </a>

            </div>

            {/* LiteArt */}

            <div className="bg-[#3E2723] rounded-3xl p-10 shadow-xl">

                <div className="flex items-center gap-4 mb-4">

                    <h2 className="text-3xl font-bold">
                        LiteArt
                    </h2>

                    <span className="bg-[#D4AF37] text-[#2F1F18] px-3 py-1 rounded-full text-sm font-semibold">
                        Em desenvolvimento
                    </span>

                </div>

                <p className="leading-8 text-[#D8C4A3]">
                    LiteArt é uma plataforma educacional que utiliza Inteligência
                    Artificial para oferecer respostas personalizadas,
                    acompanhamento do desempenho do estudante e apoio ao processo
                    de aprendizagem. Atualmente o projeto encontra-se em fase de
                    planejamento e documentação, sendo desenvolvido como parte da
                    minha jornada de estudos em Engenharia de Software,
                    Desenvolvimento Full Stack e IA.
                </p>

                <a
                    href="https://miro.com/app/board/uXjVH3-xMjs=/?share_link_id=589467137863SEU_LINK_MIRO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-8 bg-[#8B6B3F] hover:bg-[#A67C52]
                    px-8 py-3 rounded-xl transition font-semibold"
                >
                    📋 Visualizar documentação no Miro
                </a>

            </div>

        </div>

        {/* Linha */}

        <div className="border-t border-[#5C4033] my-12"></div>

        {/* Contato */}

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

            <div>

                <h3 className="text-2xl font-bold mb-6">
                    Contato
                </h3>

                <div className="flex flex-wrap gap-4">

                    <a
                        href="mailto:natancardeal1506@gmail.com"
                        className="bg-[#6F4E37] hover:bg-[#8B6B3F]
                        px-6 py-3 rounded-xl transition"
                    >
                        📧 E-mail
                    </a>
                    
                    <a
                        href="https://github.com/MrNemo31"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#6F4E37] hover:bg-[#8B6B3F]
                        px-6 py-3 rounded-xl transition"
                    >
                        💻 GitHub
                    </a>

                </div>

            </div>

            <div className="text-center lg:text-right">

                <p className="text-[#D8C4A3]">
                    Desenvolvido utilizando Next.js, React, Tailwind CSS e IA.
                </p>

                <p className="mt-2 text-sm text-[#BDA98B]">
                    © 2026 Natan Fernando. Todos os direitos reservados.
                </p>

            </div>

        </div>

    </div>

</footer>

</main>
  );
}