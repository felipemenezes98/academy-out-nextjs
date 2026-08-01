# The Beatles & Co. - Landing Page

Este projeto é uma Single Page Application (SPA) desenvolvida com Next.js, React e Tailwind CSS. O site tem como tema central a história da banda The Beatles e o impacto de seus instrumentos (baixo e violão) na música, além de contar com uma seção de apresentação pessoal.

## Tecnologias Utilizadas

- Next.js
- React
- Tailwind CSS
- TypeScript

## Estrutura do Projeto

O projeto está concentrado na pasta `nicolas-ferreira` e utiliza a componentização para otimizar a manutenção e evitar repetição de código.

- `page.tsx`: Gerenciador de estado da SPA e renderização principal do layout.
- `data.ts`: Base de dados estática contendo as informações textuais e links de imagens.
- `components/`:
  - `Header.tsx`: Barra de navegação superior responsiva.
  - `HomeContent.tsx`: Seção inicial do site.
  - `InstrumentContent.tsx`: Componente dinâmico e reutilizável para renderizar dados tanto do baixo quanto do violão.
  - `Carousel.tsx`: Galeria de imagens horizontal com rolagem automática.
  - `AboutContent.tsx`: Seção contendo informações sobre o autor, interesses acadêmicos e profissionais.

## Funcionalidades

- Navegação via SPA (Single Page Application), garantindo transições fluidas sem recarregar a página.
- Design totalmente responsivo com interface baseada em tema escuro (Dark Mode).
- Carrossel de imagens em CSS e React com auto-scroll suave.
- Uso intensivo de utilitários do Tailwind CSS para efeitos de hover e transições.

## Como Executar Localmente

1. Certifique-se de ter o Node.js instalado em seu ambiente.
2. Acesse a raiz do seu projeto Next.js pelo terminal.
3. Instale as dependências necessárias executando:

```bash
npm install
```

4. Inicie o servidor local de desenvolvimento:

```bash
npm run dev
```

5. Abra o navegador e acesse `http://localhost:6006`.

## Autor

Desenvolvido por Nicolas Ferreira.