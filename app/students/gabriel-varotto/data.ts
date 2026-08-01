export type Tecnologia = {
  id: number
  titulo: string
  categoria: string
  nivel: string
  imagem: string
  descricao: string
  curiosidade: string
}

export const tecnologias: Tecnologia[] = [
  {
    id: 1,
    titulo: "Braindance",
    categoria: "Tecnologia Neural",
    nivel: "Experimental",
    imagem:
      "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=800&auto=format&fit=crop",
    descricao:
      "Tecnologia capaz de gravar e reproduzir experiências humanas através de sinais neurais, permitindo que o usuário sinta o que outra pessoa viveu.",
    curiosidade:
      "Permite reviver memórias, sensações e emoções de outras pessoas — inclusive como prova em investigações.",
  },
  {
    id: 2,
    titulo: "Cyberware",
    categoria: "Implantes Cibernéticos",
    nivel: "Avançado",
    imagem:
      "https://images.unsplash.com/photo-1698647861553-54943df8212b?q=80&w=800&auto=format&fit=crop",
    descricao:
      "Implantes mecânicos e eletrônicos que substituem ou aprimoram partes do corpo humano, de braços a sistemas oculares.",
    curiosidade:
      "Em Night City, modificações corporais são rotina — mas o excesso pode levar à psicose cibernética.",
  },
  {
    id: 3,
    titulo: "IA Alt Cunningham",
    categoria: "Inteligência Artificial",
    nivel: "Lendário",
    imagem:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    descricao:
      "Uma das inteligências artificiais mais importantes do universo Cyberpunk, ligada à história da netrunning e da Blackwall.",
    curiosidade:
      "As IAs além da Blackwall representam uma ameaça quase incompreensível para a humanidade.",
  },
  {
    id: 4,
    titulo: "Night City",
    categoria: "Megacidade",
    nivel: "Extremo",
    imagem:
      "https://images.unsplash.com/photo-1557515126-1bf9ada5cb93?q=80&w=1000&auto=format&fit=crop",
    descricao:
      "Megacidade dominada por tecnologia, corporações e conflitos permanentes — o coração do mundo de Cyberpunk 2077.",
    curiosidade:
      "É o símbolo máximo do futuro distópico: neon, poder corporativo e sobrevivência diária.",
  },
  {
    id: 5,
    titulo: "Armas Inteligentes",
    categoria: "Tecnologia Militar",
    nivel: "Militar",
    imagem:
      "https://images.unsplash.com/photo-1533972751724-9135a8410a4c?q=80&w=800&auto=format&fit=crop",
    descricao:
      "Armas equipadas com sistemas inteligentes de rastreamento e assistência de mira para o usuário.",
    curiosidade:
      "Projetadas para aumentar a precisão — ideais para quem investe em cyberware de combate.",
  },
  {
    id: 6,
    titulo: "Veículos Autônomos",
    categoria: "Mobilidade",
    nivel: "Avançado",
    imagem:
      "https://images.unsplash.com/photo-1661715328971-83cd2179df82?q=80&w=1000&auto=format&fit=crop",
    descricao:
      "Transportes com sistemas automatizados que atravessam Night City sem motorista humano.",
    curiosidade:
      "A mobilidade urbana depende de tecnologia extrema — e ainda assim o trânsito continua caótico.",
  },
  {
    id: 7,
    titulo: "Netrunning",
    categoria: "Ciberespaço",
    nivel: "Crítico",
    imagem:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    descricao:
      "A arte de invadir redes, sistemas e mentes digitais usando interfaces neurais e software ilegal.",
    curiosidade:
      "Um bom netrunner pode derrubar corporações — ou morrer com o cérebro frito em segundos.",
  },
  {
    id: 8,
    titulo: "Blackwall",
    categoria: "Segurança Digital",
    nivel: "Lendário",
    imagem:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    descricao:
      "Barreira digital construída para isolar a humanidade de inteligências artificiais hostis na Net profunda.",
    curiosidade:
      "Poucos ousam cruzá-la. Menos ainda voltam para contar o que encontraram do outro lado.",
  },
]
