# Earth Watch

O **Earth Watch** é uma aplicação web desenvolvida para explorar e visualizar Objetos Próximos à Terra (Near-Earth Objects — NEOs) por meio de uma interface inspirada em dashboards científicos.

O projeto apresenta dados astronômicos fictícios de forma interativa e acessível, permitindo explorar objetos que passaram próximos à Terra, consultar suas características e compreender por que a maioria desses objetos não representa uma ameaça imediata.

A interface foi desenvolvida com inspiração em plataformas científicas e projetos relacionados à exploração espacial, priorizando uma identidade visual limpa, apresentação de dados, responsividade e equilíbrio entre informações técnicas e acessibilidade.

> **Observação:** todos os dados astronômicos utilizados neste projeto são fictícios e existem exclusivamente para fins de demonstração e desenvolvimento. A aplicação não consome APIs astronômicas externas.

## Visão geral

O Earth Watch possui três áreas principais:

* **Overview** — apresenta uma visão geral dos Objetos Próximos à Terra, destacando estatísticas e próximas aproximações.
* **Objects** — disponibiliza um explorador interativo com busca, filtros, seleção e informações detalhadas sobre os objetos.
* **About** — apresenta o propósito do projeto, informações sobre Objetos Próximos à Terra e a importância de monitorá-los.

A aplicação foi desenvolvida como uma experiência de Single Page Application dentro da estrutura de rotas do Next.js.

## Funcionalidades

### Overview

A página inicial apresenta uma visão geral dos dados disponíveis sobre os objetos.

Entre os principais elementos estão:

* Seção Hero com apresentação do projeto
* Quantidade de objetos registrados no mês
* Call-to-action para explorar os objetos
* Estatísticas astronômicas em destaque
* Seção de próximas aproximações
* Informações sobre os objetos mais próximos
* Seção educacional sobre os riscos reais relacionados aos NEOs
* Rodapé com informações sobre o projeto e tecnologias utilizadas

### Explorador de Objetos

A seção Objects funciona como um dashboard científico para exploração dos objetos disponíveis.

Entre suas funcionalidades estão:

* Busca por nome do objeto
* Filtros por características
* Apresentação dos resultados em tabela
* Área de resultados com rolagem
* Indicação visual do objeto selecionado
* Exibição detalhada do objeto selecionado
* Seleção de objetos por meio da URL
* Navegação direta para um objeto a partir de outras seções da aplicação

O objeto selecionado pode ser representado na URL por meio de um parâmetro de consulta:

```text
/objects?object=2026-ab12
```

Dessa forma, o estado atual do explorador pode ser preservado durante a navegação.

### Detalhes do Objeto

Cada objeto pode apresentar informações como:

* Nome
* Informações sobre sua descoberta
* Tamanho estimado
* Velocidade
* Distância em relação à Terra
* Aproximação mais próxima registrada
* Classificação
* Outras informações astronômicas relevantes

### Suporte a temas

A interface possui suporte aos modos claro e escuro.

A identidade visual utiliza principalmente:

* Preto e tons de cinza escuro
* Branco e cinza claro
* Azul como cor de destaque
* Ajustes de contraste específicos para cada tema
* Estilização própria para elementos do dashboard científico

O modo escuro reforça a identidade visual relacionada ao espaço, enquanto o modo claro prioriza legibilidade por meio de tipografia e contraste ajustados.

## Design

A identidade visual do Earth Watch foi inspirada em dashboards científicos e interfaces relacionadas à exploração espacial.

Os principais princípios utilizados no desenvolvimento foram:

* Interface minimalista
* Hierarquia clara de informações
* Estética de dashboard científico
* Uso controlado de cores
* Azul como destaque para informações e interações
* Apresentação objetiva de dados
* Layouts responsivos
* Tipografia consistente
* Redução de elementos visuais desnecessários
* Contraste adequado entre os elementos

A interface também busca evitar uma abordagem sensacionalista sobre os objetos próximos à Terra. O objetivo é apresentar informações astronômicas de maneira clara e educativa, em vez de associar automaticamente esses objetos a situações de perigo.

## Tecnologias

### Next.js

Utilizado como framework principal da aplicação, fornecendo:

* Arquitetura baseada em React
* Roteamento baseado na estrutura de arquivos
* Server Components e Client Components
* Organização da aplicação
* Ferramentas de desenvolvimento e produção

### React

Utilizado para construção da interface baseada em componentes.

A aplicação utiliza componentes para separar as principais seções e criar elementos reutilizáveis.

### TypeScript

Utilizado para tipagem estática, maior segurança durante o desenvolvimento e melhor manutenção do código.

### Tailwind CSS

Utilizado para estilização baseada em classes utilitárias e construção dos layouts responsivos.

Entre suas principais utilizações estão:

* Espaçamento
* Layout
* Tipografia
* Responsividade
* Estados de componentes
* Estilização de elementos

### shadcn/ui

Utilizado como base para os componentes reutilizáveis da interface.

Os componentes do shadcn/ui foram adaptados à identidade visual do projeto, incluindo elementos como:

* Botões
* Selects
* Cards
* Tabelas
* Controles de interface

O projeto utiliza a implementação baseada em **Base UI**, e não Radix UI, como primitiva dos componentes.

### Lucide React

Utilizado para os ícones presentes na interface.

## Dados

O projeto não utiliza uma API externa.

Todas as informações astronômicas são fictícias e armazenadas localmente na aplicação.

Essa abordagem permite desenvolver a interface, a arquitetura dos componentes, os filtros, a navegação e as interações independentemente de um serviço externo.

Em uma versão futura, o conjunto de dados local poderia ser substituído por uma API astronômica real sem exigir uma reformulação completa da interface.

## Estrutura do projeto

O projeto está contido dentro da pasta `andrewfreiria` de uma aplicação Next.js compartilhada.

```text
andrewfreiria/
├── about/
│   └── page.tsx
├── objects/
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── navbar.tsx
│   ├── hero-section.tsx
│   ├── object-explorer.tsx
│   ├── object-details.tsx
│   └── ...
├── styles/
│   └── style.css
├── layout.tsx
├── page.tsx
└── ...
```

A estrutura específica do projeto e seu stylesheet são mantidos dentro da pasta `andrewfreiria`, evitando alterações desnecessárias na estrutura compartilhada da aplicação.

## Como executar

Instale as dependências do projeto:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O ambiente de desenvolvimento está configurado para utilizar a porta `6006`.

```text
http://localhost:6006
```

## Scripts disponíveis

Os scripts disponíveis dependem da configuração do projeto compartilhado. Os principais comandos são:

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

### Desenvolvimento

Inicia o servidor de desenvolvimento do Next.js com atualização automática.

```bash
npm run dev
```

### Build de produção

Gera uma versão otimizada da aplicação para produção.

```bash
npm run build
```

### Servidor de produção

Executa a versão de produção previamente gerada.

```bash
npm run start
```

### Lint

Executa as verificações configuradas pelo ESLint.

```bash
npm run lint
```

### Verificação de tipos

Executa as verificações do TypeScript configuradas no projeto.

```bash
npm run typecheck
```

## Responsividade

A aplicação foi desenvolvida para funcionar em diferentes tamanhos de tela.

Os layouts se adaptam a:

* Computadores
* Tablets
* Dispositivos móveis

Um cuidado especial foi aplicado ao Explorador de Objetos, onde a tabela do dashboard precisa continuar utilizável em telas menores por meio de rolagem controlada e layouts responsivos.

## Acessibilidade

A interface busca seguir boas práticas de acessibilidade, incluindo:

* Utilização de HTML semântico
* Elementos interativos descritivos
* Controles acessíveis pelo teclado
* Estados visuais de interação
* Contraste adequado
* Layout responsivo
* Hierarquia clara de informações

Elementos como links, botões, filtros e controles de seleção foram desenvolvidos para permanecerem utilizáveis sem depender exclusivamente de elementos visuais.

## Possíveis melhorias

O projeto possui diversas possibilidades de expansão.

Entre elas:

* Integração com uma API real de Objetos Próximos à Terra
* Dados astronômicos em tempo real
* Filtros mais avançados
* Ordenação por características orbitais e físicas
* Visualização das trajetórias dos objetos
* Diagramas orbitais interativos
* Histórico de aproximações
* Dashboards estatísticos
* Gráficos de distância e velocidade
* Visualizações de classificação dos objetos
* Páginas individuais para cada objeto
* Navegação direta para objetos específicos
* Estados de carregamento e erro para dados externos
* Melhorias avançadas de acessibilidade

Uma fonte de dados real poderia ser adicionada futuramente preservando grande parte da arquitetura atual dos componentes e da interface.

## Objetivos do projeto

O Earth Watch foi desenvolvido como um projeto frontend voltado à combinação entre desenvolvimento web moderno e apresentação de informações científicas.

Os principais objetivos são:

1. Praticar arquitetura baseada em componentes.
2. Desenvolver um dashboard científico responsivo.
3. Explorar recursos modernos do Next.js e React.
4. Praticar Tailwind CSS e customização do shadcn/ui.
5. Desenvolver interações sem depender de APIs externas.
6. Criar uma interface que possa posteriormente utilizar dados astronômicos reais.
7. Apresentar informações científicas de maneira clara e visualmente interessante.

## Status

O projeto atualmente é um protótipo frontend que utiliza dados fictícios.

A interface principal, navegação, exploração dos objetos, filtros, seleção de objetos, suporte aos temas e apresentação responsiva fazem parte do escopo atual do projeto.

## Autor

**Andrew Freiria**

Estudante de Engenharia de Computação, com interesse em desenvolvimento de software e tecnologias modernas para aplicações web.

## Licença

Este projeto foi desenvolvido para fins educacionais e de portfólio.

Os dados astronômicos utilizados são fictícios e fazem parte exclusivamente da demonstração. As informações apresentadas pela aplicação não devem ser consideradas uma fonte real de dados astronômicos.

