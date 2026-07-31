import { div } from "motion/react-client"
import React from "react";

export default function Page(){

const processors = [
  {
    name: "Intel 4004",
    year: "1971",
    image:
      "https://cdn.calendarz.com/uploads/events/november/15/111193/intel-4004_new_cp.jpg",
    highlight: true,
    description:
      "O Intel 4004 foi o primeiro microprocessador comercial da história. Criado originalmente para uma calculadora da empresa japonesa Busicom, ele marcou o início da era dos computadores baseados em chips programáveis.",
    technology:
      "Na década de 1970, a tecnologia dos circuitos integrados estava evoluindo rapidamente. O 4004 utilizava uma arquitetura de 4 bits, com apenas cerca de 2.300 transistores, funcionando a aproximadamente 740 kHz. Apesar de extremamente limitado pelos padrões atuais, permitiu substituir vários circuitos eletrônicos por um único chip."
  },
  {
    name: "Intel 8008",
    year: "1972",
    description:
      "Segundo processador de 8 bits da Intel, ampliou as possibilidades de processamento e abriu caminho para computadores pessoais mais simples.",
    technology:
      "A tecnologia da época ainda era baseada em memórias pequenas e sistemas dedicados. O aumento da capacidade de manipulação de dados tornou esses chips importantes para aplicações industriais e experimentais."
  },
  {
    name: "Intel 8080",
    year: "1974",
    description:
      "O Intel 8080 foi um dos primeiros processadores realmente populares, sendo utilizado em computadores como o Altair 8800.",
    technology:
      "Com arquitetura de 8 bits e maior desempenho que seus antecessores, ajudou a iniciar o movimento dos computadores pessoais."
  },
  {
    name: "Intel 8086",
    year: "1978",
    description:
      "Primeiro processador da família x86, introduziu uma arquitetura que se tornaria uma das mais importantes da história da computação.",
    technology:
      "O 8086 trouxe registradores de 16 bits e uma arquitetura que seria mantida e expandida por décadas nos futuros processadores Intel."
  },
  {
    name: "Intel 8088",
    year: "1979",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.9uRuJZBfgjSVrImSXL38zAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    highlight: true,
    description:
      "O Intel 8088 ficou famoso por ser o processador escolhido para o primeiro IBM PC lançado em 1981. Ele foi fundamental para popularizar a arquitetura x86 no mercado doméstico.",
    technology:
      "Embora fosse internamente baseado no 8086 e possuísse arquitetura de 16 bits, utilizava um barramento externo de 8 bits, reduzindo custos de implementação. Essa decisão facilitou sua adoção pela IBM, tornando o padrão PC dominante por décadas."
  },
  {
    name: "Intel 80286",
    year: "1982",
    description:
      "O 80286 trouxe melhorias importantes de desempenho e introduziu o modo protegido.",
    technology:
      "Esse recurso permitiu melhor gerenciamento de memória e maior segurança, preparando o caminho para sistemas operacionais mais avançados."
  },
  {
    name: "Intel 386DX",
    year: "1985",
    image:
      "https://cdn11.bigcommerce.com/s-a1x7hg2jgk/images/stencil/1280x1280/products/9362/269458/Intel-386DX-20-Mhz-CPU-A80386DX-20-SX214_46564__44627.1707360730.jpg?c=2?imbypass=on",
    highlight: true,
    description:
      "O Intel 386DX foi um dos maiores saltos da arquitetura x86. Ele foi o primeiro processador Intel x86 totalmente de 32 bits, mudando o padrão dos computadores pessoais.",
    technology:
      "Com 275 mil transistores, suporte a endereçamento de até 4 GB de memória e novos recursos de gerenciamento, o 386DX permitiu a criação de sistemas operacionais mais complexos. Sua principal característica foi a transição definitiva para 32 bits, possibilitando multitarefa real e melhor desempenho em aplicações profissionais.",
  },
  {
    name: "Intel 486",
    year: "1989",
    description:
      "A família 486 adicionou cache interno e uma unidade de ponto flutuante integrada em alguns modelos.",
    technology:
      "A integração de componentes aumentou muito o desempenho e aproximou o processador dos conceitos modernos de CPUs."
  },
  {
    name: "Intel Pentium",
    year: "1993",
    description:
      "O Pentium substituiu a linha 486 e trouxe melhorias significativas de execução de instruções.",
    technology:
      "Com arquitetura superescalar, podia executar mais de uma instrução por ciclo, tornando-se um marco dos computadores pessoais dos anos 1990."
  }
];

    return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-12">
      <section className="max-w-5xl mx-auto">

        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-400">
            História dos Processadores Intel x86
          </h1>

          <p className="mt-6 text-zinc-300 text-lg">
            Uma viagem pela evolução dos processadores que transformaram
            computadores experimentais em máquinas pessoais poderosas.
          </p>
        </header>


        <div className="relative border-l-4 border-blue-500 space-y-14">

          {processors.map((cpu) => (
            <article
              key={cpu.name}
              className={`ml-8 rounded-2xl p-8 shadow-xl ${
                cpu.highlight
                  ? "bg-blue-950 border border-blue-400"
                  : "bg-zinc-900"
              }`}
            >

              <div className="flex flex-col md:flex-row gap-8">

                {cpu.image && (
                  <img
                    src={cpu.image}
                    alt={cpu.name}
                    className="w-full md:w-72 h-56 object-contain bg-white rounded-xl"
                  />
                )}

                <div>
                  <h2 className="text-3xl font-bold text-blue-300">
                    {cpu.name}
                  </h2>

                  <p className="text-xl text-zinc-400 mb-4">
                    {cpu.year}
                  </p>

                  <p className="mb-5 text-zinc-200 leading-relaxed">
                    {cpu.description}
                  </p>

                  <h3 className="font-semibold text-blue-200">
                    Tecnologia da época:
                  </h3>

                  <p className="text-zinc-300 leading-relaxed">
                    {cpu.technology}
                  </p>

                </div>

              </div>

            </article>
          ))}

        </div>

      </section>
    </main>
  );      
    
}