"use client";

import { JSX, SVGProps, useState } from "react";

/**
 * PIZZARIA DO BARRIGA — Landing Page
 * --------------------------------------------------
 * Arquivo único, pronto para colar em um projeto Next.js
 * (ex: app/page.tsx ou components/PizzariaDoBarrigaLanding.jsx)
 *
 * Stack: Next.js + React + Tailwind CSS
 * Fontes carregadas via Google Fonts (@import) para não depender
 * de next/font e não exigir alterações no tailwind.config.
 *
 * Classes e keyframes usam o prefixo "pdb-" para não colidir
 * com o restante do projeto coletivo.
 */

// ---------- Ícones (SVG inline, sem dependências externas) ----------

const IconWhatsApp = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
    <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.35.66 4.55 1.8 6.43L4 29l7.75-1.75a12.9 12.9 0 0 0 4.27.73C22.62 27.98 28 22.6 28 15.98 28 9.36 22.62 3 16.02 3Zm0 23.36c-1.44 0-2.85-.38-4.08-1.1l-.29-.17-4.6 1.04 1.02-4.47-.19-.3a10.1 10.1 0 0 1-1.6-5.34c0-5.6 4.56-10.16 10.16-10.16 5.6 0 10.16 4.56 10.16 10.16 0 5.6-4.55 10.34-10.58 10.34Zm5.6-7.6c-.3-.15-1.8-.9-2.08-1-.28-.1-.48-.15-.68.15-.2.3-.78 1-.96 1.2-.18.2-.36.23-.66.08-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.8-1.68-2.1-.18-.3-.02-.46.13-.61.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.24-.24-.58-.5-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.8-.73 2.05-1.44.25-.7.25-1.3.18-1.44-.07-.13-.27-.2-.57-.35Z" />
  </svg>
);

const IconPin = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" strokeLinejoin="round" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

const IconClock = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPhone = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M4 5c0 8.3 6.7 15 15 15l1.5-3.3a1 1 0 0 0-.6-1.3l-3.6-1.3a1 1 0 0 0-1.1.3l-1 1.2a11.4 11.4 0 0 1-5.8-5.8l1.2-1a1 1 0 0 0 .3-1.1L8.6 3.1A1 1 0 0 0 7.3 2.5L4 4Z" strokeLinejoin="round" />
  </svg>
);

const IconInstagram = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const IconStar = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.6l-6.1 3.4 1.5-6.8L2.2 9.5l6.9-.7L12 2.5Z" />
  </svg>
);

const IconArrow = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconFlame = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2c1 3-3 4-3 7.5A3.5 3.5 0 0 0 12 13a3.5 3.5 0 0 0 3-5.3c1.6 1.4 2.5 3.4 2.5 5.3a5.5 5.5 0 1 1-11 0C6.5 8.8 9.5 6.3 12 2Z" />
  </svg>
);

// ---------- SVG da pizza (arte hero) ----------

function PizzaHero() {
  const pepperoni = [
    [148, 150], [246, 142], [130, 222], [268, 214],
    [178, 262], [232, 250], [202, 116], [118, 182], [284, 176],
  ];
  const basil = [
    [190, 178, -20], [225, 200, 35], [160, 205, 70],
    [210, 235, -10], [140, 165, 15],
  ];

  return (
    <svg viewBox="0 0 400 400" className="w-full h-auto pdb-spin-slow drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)]">
      <defs>
        <radialGradient id="pdb-cheese" cx="42%" cy="38%" r="70%">
          <stop offset="0%" stopColor="#FFE39B" />
          <stop offset="55%" stopColor="#FFC93C" />
          <stop offset="100%" stopColor="#F5A623" />
        </radialGradient>
        <linearGradient id="pdb-crust" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E7B975" />
          <stop offset="100%" stopColor="#C88A3F" />
        </linearGradient>
        <radialGradient id="pdb-pep" cx="35%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#E4483F" />
          <stop offset="100%" stopColor="#A81F27" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="186" fill="url(#pdb-crust)" />
      <circle cx="200" cy="200" r="186" fill="none" stroke="#7A4B2A" strokeWidth="3" opacity="0.4" />
      <circle cx="200" cy="200" r="163" fill="url(#pdb-cheese)" />

      {/* respingos de molho */}
      {[[170,140],[240,175],[150,230],[220,255],[195,190]].map(([x,y],i)=>(
        <circle key={`sauce-${i}`} cx={x} cy={y} r="7" fill="#D62839" opacity="0.35" />
      ))}

      {pepperoni.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="17" fill="url(#pdb-pep)" />
          <circle cx={x - 3} cy={y - 3} r="2.4" fill="#7A1218" opacity="0.6" />
          <circle cx={x + 4} cy={y + 3} r="1.6" fill="#7A1218" opacity="0.5" />
        </g>
      ))}

      {basil.map(([x, y, rot], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="11"
          ry="5.5"
          fill="#3FA34D"
          transform={`rotate(${rot} ${x} ${y})`}
          opacity="0.95"
        />
      ))}
    </svg>
  );
}

// ---------- Dados ----------

const CATEGORIAS = ["Tradicionais", "Especiais", "Doces", "Bebidas"];

const CARDAPIO = [
  { n: "01", categoria: "Tradicionais", nome: "Marguerita", desc: "Molho da casa, mussarela generosa, manjericão fresco e azeite extravirgem.", preco: "52" },
  { n: "02", categoria: "Tradicionais", nome: "Calabresa", desc: "Calabresa fatiada na hora, cebola roxa e azeitonas pretas.", preco: "54" },
  { n: "03", categoria: "Tradicionais", nome: "Portuguesa", desc: "Presunto, ovos caipiras, ervilha, cebola e azeitona.", preco: "58" },
  { n: "04", categoria: "Tradicionais", nome: "Quatro Queijos", desc: "Mussarela, provolone, parmesão e gorgonzola cremoso.", preco: "60" },
  { n: "05", categoria: "Especiais", nome: "Barriga de Fora", desc: "Costela desfiada por 8h, cheddar cremoso e cebola caramelizada.", preco: "68", destaque: true },
  { n: "06", categoria: "Especiais", nome: "Frango com Catupiry", desc: "Frango desfiado, catupiry original e milho doce.", preco: "56" },
  { n: "07", categoria: "Especiais", nome: "Pepperoni Dobrado", desc: "Dupla camada de pepperoni, mussarela e orégano fresco.", preco: "62" },
  { n: "08", categoria: "Doces", nome: "Chocolate com Morango", desc: "Chocolate ao leite derretido com morangos frescos.", preco: "48" },
  { n: "09", categoria: "Doces", nome: "Romeu e Julieta", desc: "Goiabada cremosa artesanal com queijo minas.", preco: "46" },
  { n: "10", categoria: "Bebidas", nome: "Refrigerante Lata", desc: "Gelado, do jeito que combina com pizza.", preco: "6" },
  { n: "11", categoria: "Bebidas", nome: "Suco Natural", desc: "Feito na hora — laranja, maracujá ou limão.", preco: "9" },
  { n: "12", categoria: "Bebidas", nome: "Cerveja Long Neck", desc: "Gelada na medida certa.", preco: "12" },
];

const PASSOS = [
  { n: "01", titulo: "Escolha seu sabor", desc: "Dá uma olhada no cardápio e escolhe — ou pede pra gente sugerir." },
  { n: "02", titulo: "Chama no WhatsApp", desc: "Manda um oi que o pedido já entra na fila do forno." },
  { n: "03", titulo: "Acompanhe em tempo real", desc: "A gente avisa quando sair do forno e quando o motoboy estiver a caminho." },
  { n: "04", titulo: "Aproveite quentinha", desc: "Chegou em casa em até 35 minutos, direto do forno a lenha." },
];

const DEPOIMENTOS = [
  { nome: "Marina T.", texto: "Pizza generosa de verdade, borda que não acaba nunca e chegou quentinha. Virou pedido de toda sexta aqui em casa." },
  { nome: "Eduardo R.", texto: "A Barriga de Fora é surreal. Costela desmanchando, cheddar puxando fio. Vale cada centavo." },
  { nome: "Camila S.", texto: "Atendimento no WhatsApp é rapidinho e a entrega nunca atrasou. Sabor de pizzaria de bairro, do jeito que a gente gosta." },
];

// ---------- Componente principal ----------

export default function PizzariaDoBarrigaLanding() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Tradicionais");
  const [menuAberto, setMenuAberto] = useState(false);

  const whatsappLink =
    "https://wa.me/5516999991994?text=" +
    encodeURIComponent("Olá! Vim pelo site e quero pedir uma pizza 🍕");

  const itensFiltrados = CARDAPIO.filter((i) => i.categoria === categoriaAtiva);

  return (
    <div className="font-['Manrope'] bg-[#1C1410] text-[#FFF6E9] antialiased selection:bg-[#FFC93C] selection:text-[#1C1410]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,500&family=Manrope:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

        @keyframes pdb-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .pdb-spin-slow { animation: pdb-spin 60s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .pdb-spin-slow { animation: none; } }

        @keyframes pdb-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .pdb-marquee-track { animation: pdb-marquee 22s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .pdb-marquee-track { animation: none; } }

        .pdb-ticket {
          background-image: radial-gradient(circle at 0 0, transparent 8px, #FFF6E9 8.5px),
                             radial-gradient(circle at 100% 0, transparent 8px, #FFF6E9 8.5px);
          background-repeat: no-repeat;
          background-position: top left, top right;
          background-size: 50% 100%;
        }
        .pdb-ticket-edge {
          background-image: repeating-linear-gradient(90deg, transparent 0 6px, #1C1410 6px 8px);
          background-size: 14px 2px;
          background-repeat: repeat-x;
        }
      `}</style>

      {/* ---------------- NAV ---------------- */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#1C1410]/80 border-b border-[#3A2A20]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <a href="#topo" className="font-['Fraunces'] font-bold text-lg tracking-tight text-[#FFF6E9]">
            Pizzaria <span className="text-[#FF4438]">do Barriga</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#F1E4D3]">
            <a href="#cardapio" className="hover:text-[#FFC93C] transition-colors">Cardápio</a>
            <a href="#sobre" className="hover:text-[#FFC93C] transition-colors">Nossa história</a>
            <a href="#como-pedir" className="hover:text-[#FFC93C] transition-colors">Como pedir</a>
            <a href="#contato" className="hover:text-[#FFC93C] transition-colors">Contato</a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#FF4438] hover:bg-[#D62839] transition-colors text-white font-semibold text-sm px-4 py-2 rounded-full"
          >
            <IconWhatsApp className="w-4 h-4" />
            Pedir agora
          </a>

          <button
            onClick={() => setMenuAberto((v) => !v)}
            aria-label="Abrir menu"
            className="md:hidden text-[#FFF6E9] p-2"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              {menuAberto ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {menuAberto && (
          <div className="md:hidden bg-[#1C1410] border-t border-[#3A2A20] px-5 py-4 flex flex-col gap-4 text-sm font-medium">
            <a href="#cardapio" onClick={() => setMenuAberto(false)} className="hover:text-[#FFC93C]">Cardápio</a>
            <a href="#sobre" onClick={() => setMenuAberto(false)} className="hover:text-[#FFC93C]">Nossa história</a>
            <a href="#como-pedir" onClick={() => setMenuAberto(false)} className="hover:text-[#FFC93C]">Como pedir</a>
            <a href="#contato" onClick={() => setMenuAberto(false)} className="hover:text-[#FFC93C]">Contato</a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FF4438] text-white font-semibold px-4 py-2.5 rounded-full"
            >
              <IconWhatsApp className="w-4 h-4" /> Pedir agora
            </a>
          </div>
        )}
      </header>

      {/* ---------------- HERO ---------------- */}
      <section id="topo" className="relative pt-32 pb-20 px-5 sm:px-8 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#FFC93C 1.5px, transparent 1.5px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
          <div>
            <span className="inline-flex items-center gap-2 text-[#FFC93C] font-['Space_Mono'] text-xs tracking-widest uppercase">
              <IconFlame className="w-4 h-4" /> Forno a lenha desde 1994
            </span>
            <h1 className="font-['Fraunces'] font-black text-[2.6rem] leading-[1.05] sm:text-6xl mt-5 text-[#FFF6E9]">
              Pizza que enche
              <br />
              <span className="italic font-medium text-[#FF4438]">o prato</span> e a{" "}
              <span className="italic font-medium text-[#FFC93C]">saudade.</span>
            </h1>
            <p className="mt-6 text-[#D8C4AE] text-lg max-w-md">
              Massa fermentada por 48 horas, borda generosa e aquele tanto a mais
              de recheio que só quem tem barriga grande entende de fazer.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF4438] hover:bg-[#D62839] transition-colors text-white font-semibold px-6 py-3.5 rounded-full shadow-[0_10px_30px_-8px_rgba(255,68,56,0.6)]"
              >
                <IconWhatsApp className="w-5 h-5" /> Pedir no WhatsApp
              </a>
              <a
                href="#cardapio"
                className="inline-flex items-center gap-2 border border-[#4A3527] hover:border-[#FFC93C] hover:text-[#FFC93C] transition-colors font-semibold px-6 py-3.5 rounded-full"
              >
                Ver cardápio <IconArrow className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
              {[
                ["30", "anos de forno aceso"],
                ["+40", "sabores no cardápio"],
                ["35min", "tempo médio de entrega"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="font-['Fraunces'] font-bold text-2xl text-[#FFC93C]">{num}</div>
                  <div className="text-xs text-[#B29B84] mt-1 leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative max-w-sm mx-auto md:max-w-none">
            <PizzaHero />
          </div>
        </div>
      </section>

      {/* ---------------- FAIXA / MARQUEE ---------------- */}
      <div className="bg-[#FFC93C] text-[#1C1410] py-3 -rotate-1 overflow-hidden select-none">
        <div className="flex whitespace-nowrap pdb-marquee-track font-['Space_Mono'] text-sm font-bold tracking-widest">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex shrink-0">
              {Array.from({ length: 8 }).map((_, j) => (
                <span key={j} className="mx-4">
                  MASSA DE FERMENTAÇÃO LENTA • FORNO A LENHA • FEITA NA HORA •
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ---------------- CARDÁPIO ---------------- */}
      <section id="cardapio" className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <span className="text-[#FF4438] font-['Space_Mono'] text-xs uppercase tracking-widest">Cardápio</span>
            <h2 className="font-['Fraunces'] font-bold text-3xl sm:text-4xl mt-2">O que sai do forno hoje</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIAS.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaAtiva(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                  categoriaAtiva === cat
                    ? "bg-[#FF4438] border-[#FF4438] text-white"
                    : "border-[#3A2A20] text-[#D8C4AE] hover:border-[#FFC93C] hover:text-[#FFC93C]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {itensFiltrados.map((item, i) => (
            <div
              key={item.n}
              className="pdb-ticket pt-5 pb-6 px-6 text-[#1C1410] shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:rotate-0"
              style={{ transform: `rotate(${i % 2 === 0 ? -1.2 : 1.4}deg)` }}
            >
              <div className="flex items-center justify-between font-['Space_Mono'] text-xs text-[#8A6B4F] mb-3">
                <span>PEDIDO Nº {item.n}</span>
                {item.destaque && (
                  <span className="border-2 border-[#D62839] text-[#D62839] rounded-full px-2 py-0.5 -rotate-6 font-bold text-[10px] tracking-wide">
                    ESPECIAL DA CASA
                  </span>
                )}
              </div>
              <h3 className="font-['Fraunces'] font-bold text-xl">{item.nome}</h3>
              <p className="text-sm text-[#5C4630] mt-2 leading-relaxed">{item.desc}</p>
              <div className="pdb-ticket-edge h-px my-4" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-['Space_Mono'] text-[#8A6B4F]">{item.categoria}</span>
                <span className="font-['Fraunces'] font-black text-2xl text-[#D62839]">
                  R$ {item.preco}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- SOBRE ---------------- */}
      <section id="sobre" className="bg-[#150F0C] py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-14 items-center">
          <div className="order-2 md:order-1">
            <span className="text-[#4CAF50] font-['Space_Mono'] text-xs uppercase tracking-widest">Nossa história</span>
            <h2 className="font-['Fraunces'] font-bold text-3xl sm:text-4xl mt-2 leading-tight">
              Tudo começou com o Seu Barriga e um forno emprestado.
            </h2>
            <p className="mt-6 text-[#D8C4AE] leading-relaxed">
              Em 1994, Domingos &ldquo;Barriga&rdquo; Fontana abriu as portas de um
              pequeno salão no centro de Ribeirão Preto com um forno a lenha
              construído pelas próprias mãos. A promessa era simples: nenhuma
              pizza sairia daquele forno pela metade.
            </p>
            <p className="mt-4 text-[#D8C4AE] leading-relaxed">
              Trinta anos depois, são os filhos do Seu Barriga que tocam a casa —
              mas a massa ainda descansa por 48 horas, o molho ainda é feito de
              manhã cedo, e a régua de recheio continua a mesma: generosa demais
              para caber no prato.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#FF4438]/15 border border-[#FF4438]/40 flex items-center justify-center">
                <IconFlame className="w-6 h-6 text-[#FF4438]" />
              </div>
              <div className="text-sm text-[#B29B84]">
                Mesmo forno a lenha original,
                <br /> reformado em 2018.
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#FF4438] via-[#D62839] to-[#7A1218] flex items-center justify-center overflow-hidden relative">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(#FFC93C 2px, transparent 2px)",
                  backgroundSize: "26px 26px",
                }}
              />
              <span className="font-['Fraunces'] italic text-[#FFF6E9] text-2xl px-10 text-center relative">
                &ldquo;Pizza boa não se apressa.&rdquo;
                <span className="block mt-4 text-sm font-['Space_Mono'] not-italic text-[#FFE39B]">
                  — Seu Barriga, fundador
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- COMO PEDIR ---------------- */}
      <section id="como-pedir" className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <span className="text-[#FFC93C] font-['Space_Mono'] text-xs uppercase tracking-widest">Como pedir</span>
        <h2 className="font-['Fraunces'] font-bold text-3xl sm:text-4xl mt-2 mb-12">Do WhatsApp ao seu forno.</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PASSOS.map((passo, i) => (
            <div key={passo.n} className="relative">
              <div className="font-['Fraunces'] font-black text-5xl text-[#3A2A20]">{passo.n}</div>
              <h3 className="font-['Fraunces'] font-bold text-lg mt-3">{passo.titulo}</h3>
              <p className="text-sm text-[#B29B84] mt-2 leading-relaxed">{passo.desc}</p>
              {i < PASSOS.length - 1 && (
                <IconArrow className="hidden lg:block absolute -right-4 top-2 w-5 h-5 text-[#4A3527]" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- DEPOIMENTOS ---------------- */}
      <section className="bg-[#150F0C] py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <span className="text-[#FF4438] font-['Space_Mono'] text-xs uppercase tracking-widest">Quem já provou</span>
          <h2 className="font-['Fraunces'] font-bold text-3xl sm:text-4xl mt-2 mb-12">Comentários de quem pede toda semana.</h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {DEPOIMENTOS.map((dep) => (
              <div key={dep.nome} className="bg-[#1C1410] border border-[#3A2A20] rounded-2xl p-6 relative">
                <div className="flex gap-1 text-[#FFC93C] mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} className="w-4 h-4" />
                  ))}
                </div>
                <p className="text-[#D8C4AE] text-sm leading-relaxed">&ldquo;{dep.texto}&rdquo;</p>
                <div className="mt-5 font-['Fraunces'] font-semibold text-[#FFF6E9]">{dep.nome}</div>
                <span className="absolute top-5 right-5 border-2 border-[#4CAF50] text-[#4CAF50] text-[10px] font-bold tracking-wide rounded-full px-2 py-0.5 rotate-6">
                  APROVADO
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CONTATO ---------------- */}
      <section id="contato" className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-[#FFC93C] font-['Space_Mono'] text-xs uppercase tracking-widest">Contato</span>
            <h2 className="font-['Fraunces'] font-bold text-3xl sm:text-4xl mt-2 mb-8">
              Bora pedir a sua?
            </h2>

            <div className="space-y-5 text-[#D8C4AE]">
              <div className="flex items-start gap-3">
                <IconPin className="w-5 h-5 mt-0.5 text-[#FF4438] shrink-0" />
                <span>Rua Voluntários da Pátria, 1842 — Centro, Ribeirão Preto/SP</span>
              </div>
              <div className="flex items-start gap-3">
                <IconClock className="w-5 h-5 mt-0.5 text-[#FF4438] shrink-0" />
                <span>Terça a domingo, das 18h às 23h30 · Segunda fechado</span>
              </div>
              <div className="flex items-start gap-3">
                <IconPhone className="w-5 h-5 mt-0.5 text-[#FF4438] shrink-0" />
                <span>(16) 99999-1994</span>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 bg-[#FF4438] hover:bg-[#D62839] transition-colors text-white font-semibold px-6 py-3.5 rounded-full shadow-[0_10px_30px_-8px_rgba(255,68,56,0.6)]"
            >
              <IconWhatsApp className="w-5 h-5" /> Chamar no WhatsApp
            </a>
          </div>

          <div className="rounded-3xl border border-[#3A2A20] bg-[#150F0C] flex items-center justify-center min-h-[260px] relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(#3A2A20 1px, transparent 1px), linear-gradient(90deg, #3A2A20 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="relative flex flex-col items-center text-center px-6">
              <IconPin className="w-8 h-8 text-[#FFC93C] mb-3" />
              <span className="text-[#D8C4AE] text-sm">
                Centro de Ribeirão Preto — SP
                <br />
                Entregamos num raio de 6km
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-[#3A2A20] py-10 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-['Fraunces'] font-bold text-[#FFF6E9]">
            Pizzaria <span className="text-[#FF4438]">do Barriga</span>
          </span>
          <p className="text-xs text-[#8A6B4F] text-center">
            © {new Date().getFullYear()} Pizzaria do Barriga · Ribeirão Preto/SP · Feita com fome e carinho.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-[#D8C4AE] hover:text-[#FFC93C] transition-colors">
              <IconInstagram className="w-5 h-5" />
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-[#D8C4AE] hover:text-[#FFC93C] transition-colors">
              <IconWhatsApp className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
