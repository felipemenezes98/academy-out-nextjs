# Prompts

## Iterativo (base)

Certo, agora vamos colocar as modificações. Eu passarei o código atual, depois você me passará o código que eu tenho que modificar e o local que eu tenho que modificar (copiar e colar). A linha que vamos seguir é o Cyberpunk 2077 e suas curiosidades/tecnologias, em cards utilizando o modelo que já estávamos seguindo.

Em vez disso vamos criar um protótipo. Me dê as partes por partes de 1 a 5.

## Prompt direto

Crie uma aplicação web em React/Next.js usando TypeScript e Tailwind CSS com tema Cyberpunk 2077.

O projeto deve ser um "Cyber Archive", um banco de dados futurista de tecnologias, inspirado em interfaces de jogos sci-fi.

Requisitos:

- Usar React com componentes separados.
- Usar useState para controle de estados.
- Usar Framer Motion para animações.
- Criar uma interface totalmente responsiva.
- Usar estilo visual Cyberpunk:
  - Fundo preto futurista.
  - Cores neon: ciano, amarelo, rosa e roxo.
  - Efeitos de brilho.
  - Bordas neon.
  - Sombras luminosas.
  - Interface parecida com terminal tecnológico.

Estrutura:

Criar um array chamado tecnologias contendo objetos com: id, titulo, categoria, nivel, imagem, descricao, curiosidade.

Componentes:

1. AuroraCyber — fundo animado com três círculos neon (rosa, ciano, amarelo).
2. CardCyber — cards com imagem, categoria, título, nível, descrição e botão "ACESSAR ARQUIVO".
3. ModalCyber — detalhes com blur, animação, descrição completa e curiosidade.
4. Sistema principal — estados, grid responsivo, dark mode, mostrar todos.

Identidade:

- Título: "CYBER ARCHIVE"
- Subtítulo: "Banco de tecnologias do futuro"
