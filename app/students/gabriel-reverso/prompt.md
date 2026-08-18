# Prompts

> [!NOTE]
> Foi uma conversa meio longa, então pedi para a IA resumir para mim o que foi feito em toda a conversa.

## Prompt inicial

```
Eu tenho um projeto para o CCM Academy Out, preciso que crie para mim uma landing page simples, porém elegante em nextjs.

Crie primeiro a estrutura de arquivos e diretórios para a página, considere que ela fica em /students/gabriel-reverso/

Essa landing page deve seguir o seguinte tema:

DevPilot AI:

Your AI Software Engineer.

Uma IA que auxilia desenvolvedores durante todo o ciclo de desenvolvimento.

Recursos:
- Revisão de Pull Requests
- Explicação de código
- Geração de documentação
- Correção de bugs
- Sugestão de arquitetura
- Geração de testes
- Visual

Bem inspirado em Stripe, Vercel e Linear:

- Hero elegante
- Dashboard escuro
- Cards com estatísticas
- Código em destaque
- Gradientes suaves

Use typescript, deixe o código bem documentado, código segue padrão de boas práticas do nextjs com comentários em português.

A landing page não haverá recursos de API nem dados vindos de servidor.

Quero que seja bem profissional e use shadcn + tailwind para um visual elegante.

Primeiro me forneça as ideias para essa landing page antes de começarmos a desenvolver
```

---

# DevPilot AI - Landing Page

**Projeto:** CCM Academy Out  
**Tecnologias:** Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui

---

# Objetivo

Desenvolver uma landing page profissional para o projeto **DevPilot AI**, inspirada em produtos SaaS modernos como:

- Stripe
- Vercel
- Linear
- GitHub

A página deve transmitir a ideia de um produto premium, utilizando um design minimalista, moderno e elegante, sem qualquer integração com APIs ou backend.

---

# Tema da Landing Page

## DevPilot AI

**Your AI Software Engineer.**

Uma inteligência artificial que auxilia desenvolvedores durante todo o ciclo de desenvolvimento de software.

### Recursos apresentados

- Revisão de Pull Requests
- Explicação de código
- Geração de documentação
- Correção de bugs
- Sugestão de arquitetura
- Geração de testes
- Assistência visual

---

# Requisitos definidos

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Componentização
- Código documentado
- Comentários em português
- Nenhuma chamada de API
- Dados totalmente estáticos
- Arquitetura limpa
- Componentes reutilizáveis

---

# Identidade Visual

Após algumas iterações, foi definido utilizar uma identidade visual semelhante ao GitHub Dark.

### Paleta

- Fundo principal: `#0D1117`
- Cards: `#11161C`
- Bordas: `zinc-800`
- Destaques:
  - Blue
  - Cyan
- Muito contraste
- Gradientes suaves
- Glow azul discreto

---

# Estrutura do projeto

```
students/
└── gabriel-reverso/
    ├── layout.tsx
    ├── page.tsx
    │
    ├── components/
    │   ├── navbar.tsx
    │   ├── hero.tsx
    │   ├── dashboard-preview.tsx
    │   ├── trusted-by.tsx
    │   ├── feature-card.tsx
    │   ├── features.tsx
    │   ├── dashboard-card.tsx
    │   ├── dashboard.tsx
    │   ├── stat-card.tsx
    │   ├── statistics.tsx
    │   ├── code-line.tsx
    │   ├── code-preview.tsx
    │   ├── cta.tsx
    │   └── footer.tsx
    │
    └── data/
        └── features.ts
```

---

# Componentes desenvolvidos

## Layout

Foi criado o layout principal da aplicação contendo:

- fundo GitHub Dark
- glows decorativos
- grid de fundo
- organização das seções
- estrutura preparada para futuras animações

---

## Navbar

Desenvolvida uma navbar inspirada em Vercel.

Características:

- Logo
- Navegação
- Botão CTA
- Preparada para efeito glassmorphism
- Posteriormente sugerida alteração de `sticky` para `fixed`

---

## Hero

Criada uma hero section contendo:

- título grande
- gradiente no texto
- descrição
- botões CTA
- dashboard preview ao lado
- estatísticas iniciais

---

## Dashboard Preview

Mockup simplificado do produto.

Objetivo:

- mostrar rapidamente o funcionamento do DevPilot AI
- servir como destaque visual da Hero

---

## Trusted By

Seção contendo empresas inspiradoras.

Lista utilizada:

- GitHub
- Vercel
- Docker
- TypeScript
- Cloudflare
- Supabase

Foi sugerido posteriormente evoluir esta seção utilizando logos ou efeitos semelhantes aos utilizados pela Vercel.

---

## Features

Criada uma seção completa contendo seis recursos.

Os dados foram separados da interface.

### Arquivos

```
data/features.ts
components/feature-card.tsx
components/features.tsx
```

Cada card possui:

- ícone
- título
- descrição
- hover
- animações CSS

---

## Dashboard

Foi criado um dashboard completo simulando um workspace.

Elementos:

- Sidebar
- AI Status
- Pull Request Review
- Sugestões
- Métricas
- Indicador Online

Arquitetura baseada em componentes reutilizáveis.

---

## Dashboard Card

Criado componente base reutilizável.

Objetivo:

- manter identidade visual única
- evitar repetição

---

## Statistics

Criada uma seção contendo métricas do produto.

Dados utilizados:

- 500K+ Reviews
- 98% Accuracy
- 120K+ Repositories
- 40% Faster Development

Foi utilizada uma abordagem semelhante à Vercel, utilizando divisórias ao invés de cards completos.

---

## Code Preview

Criada uma demonstração visual contendo:

Editor de código

-

Painel de sugestões da IA

Também foi criado:

```
code-line.tsx
```

para representar cada linha do editor.

---

## CTA

Desenvolvida uma seção final contendo:

- badge
- título
- descrição
- botão principal
- glow azul

Objetivo:

simular o encerramento de uma landing page SaaS.

---

## Footer

Criado footer contendo:

- marca
- navegação
- GitHub
- copyright

Posteriormente foi refinado para:

- reduzir altura
- diminuir paddings
- deixar semelhante ao padrão Vercel/Linear
- tornar mais compacto

---

# Melhorias realizadas

Durante o desenvolvimento foram sugeridas diversas melhorias.

## Arquitetura

- Componentes menores
- Dados separados da interface
- Componentes reutilizáveis
- Tipagem forte
- Comentários em português

---

## Design

A identidade visual foi refinada para:

- GitHub Dark
- Muito espaço em branco
- Pouco ruído visual
- Bordas discretas
- Hover suave
- Gradientes leves

---

## Correções sugeridas

Foi identificado um problema contendo duas barras de rolagem.

As possíveis causas encontradas foram:

- uso de `overflow-x-hidden`
- elementos absolutos dos glows
- navbar utilizando `sticky`

Foi sugerido:

- trocar `overflow-x-hidden` por `overflow-hidden`
- utilizar navbar `fixed`
- adicionar `padding-top` ao conteúdo
- melhorar o glass effect da navbar

---

# Filosofia adotada

Durante todo o desenvolvimento buscou-se seguir os princípios de:

- Componentização
- Clean Code
- Reutilização
- Responsabilidade única
- Boa organização de arquivos
- Código legível
- Facilidade para futuras animações

---

# Próximas melhorias sugeridas

## UX

- animações utilizando Framer Motion
- efeito de entrada nas seções
- animação do dashboard
- contador animado nas estatísticas
- animação das sugestões da IA

## UI

- glow dinâmico
- glassmorphism refinado
- partículas discretas
- gradientes mais suaves

## Performance

- otimização de imagens
- lazy loading
- metadata completa
- Open Graph
- favicon personalizado

---

# Resultado

Foi construída uma landing page estática completa para o projeto **DevPilot AI**, composta por uma arquitetura modular em Next.js, utilizando TypeScript, Tailwind CSS e shadcn/ui.

A interface segue uma estética inspirada em produtos SaaS modernos, com foco em legibilidade, componentização, reutilização e facilidade para futuras evoluções, mantendo todo o conteúdo estático e sem dependência de APIs ou serviços externos.
