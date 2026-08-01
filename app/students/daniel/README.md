# PhiloFlix

# 📚 PhiloFlix

> Uma plataforma de streaming de conhecimento baseada em filósofos, escritores e grandes pensadores da humanidade.

## Sobre o projeto

O **PhiloFlix** é uma aplicação inspirada na experiência visual de plataformas de streaming como a Netflix, porém com foco em **filosofia, literatura e pensamento humano**.

A plataforma organiza filósofos e escritores em diferentes escolas filosóficas e literárias, permitindo que o usuário explore autores, conheça suas histórias, leia frases famosas e descubra novos pensamentos através de uma experiência moderna e intuitiva.

O objetivo é transformar o estudo da filosofia e literatura em uma experiência visual, interativa e acessível.

---

# ✨ Funcionalidades

## 🎬 Catálogo estilo streaming

O conteúdo é organizado em carrosséis horizontais semelhantes aos encontrados em plataformas de filmes:

* Filosofia Grega
* Estoicismo
* Epicurismo
* Iluminismo
* Romantismo
* Existencialismo
* Modernismo
* Literatura Brasileira
* Filosofia Oriental
* Entre outras categorias

Cada categoria apresenta seus autores em cards navegáveis.

---

## 👤 Perfil dos autores

Ao selecionar um filósofo ou escritor, o usuário pode visualizar:

* Nome do autor
* Período histórico
* País de origem
* Resumo biográfico
* Principais obras
* Escola filosófica/literária
* Tags relacionadas
* Frases famosas separadas por categorias

Exemplo de categorias:

* Amor
* Motivação
* Reflexão
* Vida
* Política
* Conhecimento
* Existência

---

## 💭 Frase do dia

O sistema pode selecionar uma frase aleatória diariamente, criando uma experiência semelhante a uma recomendação personalizada.

Exemplo:

> "A felicidade depende de nós mesmos."
> — Aristóteles

---

## 🔎 Sistema de busca

O usuário pode pesquisar:

* Filósofos
* Escritores
* Pensadores
* Categorias filosóficas

Exemplo:

```
Nietzsche
```

Retorna:

```
Existencialismo

[Friedrich Nietzsche]
```

---

## 🧭 Sidebar de navegação

A interface possui uma barra lateral inspirada em plataformas de streaming contendo:

* Início
* Busca
* Escolas filosóficas
* Categorias literárias

Funcionalidades:

* Retornar ao início da página
* Filtrar categorias
* Navegar pelo catálogo

---

## 🎞️ Carrosséis interativos

Cada categoria possui:

* Cards padronizados
* Botões laterais de navegação
* Scroll suave
* Animações de hover
* Layout responsivo

---

# 🛠️ Tecnologias utilizadas

## Front-end

* React
* Next.js
* TypeScript
* Tailwind CSS
* Lucide React

## Arquitetura

* Componentização
* Dados separados em JSON
* Renderização dinâmica
* Estados React para filtros e busca

---

# 📂 Estrutura do projeto

```
src
│
├── app
│   └── page.tsx
│
├── components
│   │
│   ├── Sidebar.tsx
│   ├── SearchBar.tsx
│   ├── HeroBanner.tsx
│   ├── AuthorCard.tsx
│   ├── CategoryCarousel.tsx
│   ├── AuthorModal.tsx
│   └── QuoteOfDay.tsx
│
├── data
│   └── philosophers.json
│
└── types
    └── index.ts
```

---

# 📦 Instalação

Clone o projeto:

```bash
git clone https://github.com/seu-usuario/philo-flix.git
```

Entre na pasta:

```bash
cd philo-flix
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:3000
```

---

# 🗂️ Modelo de dados

Os autores são armazenados em JSON:

```json
{
  "name": "Platão",
  "period": "428 a.C - 348 a.C",
  "country": "Grécia",
  "summary": "Filósofo grego fundador da Academia de Atenas.",
  "works": [
    "A República",
    "O Banquete"
  ],
  "genres": {
    "reflexao": [
      "O conhecimento começa pelo questionamento."
    ]
  }
}
```

---

# 🎨 Design

O projeto segue uma identidade visual inspirada em plataformas de streaming:

Características:

* Tema escuro
* Cards horizontais
* Grandes banners
* Navegação por categorias
* Animações suaves
* Layout responsivo

---

# 📱 Responsividade

O site foi desenvolvido para funcionar em:

* Desktop
* Notebook
* Tablet
* Smartphone

Adaptando:

* Cards
* Sidebar
* Carrosséis
* Banner principal
* Busca

---

# 🚀 Próximas melhorias

Possíveis evoluções:

## Sistema de usuários

* Login
* Perfil personalizado
* Histórico de leitura

## Favoritos

Permitir salvar:

* Filósofos favoritos
* Frases favoritas
* Obras favoritas

## Inteligência artificial

Adicionar:

* Chat com filósofos
* Explicações de conceitos
* Comparação entre pensamentos

## Gamificação

Criar:

* Trilhas de aprendizado
* Conquistas
* Ranking de conhecimento

---

# 📖 Objetivo

O PhiloFlix busca aproximar pessoas da filosofia e literatura através de uma experiência familiar e moderna.

Transformando pensamentos de grandes autores em uma biblioteca visual onde conhecimento, história e reflexão se encontram.

---

## Autor

Desenvolvido por **Daniel Victor Castro**

Projeto criado para estudo de:

* React
* Next.js
* UI Design
* Estruturação de dados
* Experiência de usuário
