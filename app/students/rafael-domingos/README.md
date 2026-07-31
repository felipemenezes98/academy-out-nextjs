# Leaf Garage — Landing Page

Protótipo de landing page institucional para a **Leaf Garage**, oficina
especializada em eletrônica automotiva, reprogramação de centrais (remap) e
ganho de potência, com atuação em Ribeirão Preto — SP e região.

Projeto desenvolvido por **Rafael Domingos** como entrega de conclusão do
programa **Academy Out — CCM Tecnologia**.

| Item               | Valor                                |
| ------------------ | ------------------------------------ |
| Rota               | `/students/rafael-domingos`          |
| Status             | Protótipo (não conectado a back-end) |
| Responsável        | Rafael Domingos                      |
| Última atualização | 31/07/2026                           |

---

## 1. Visão geral

A página tem como objetivo apresentar a oficina, explicar de forma acessível o
que é remap e quais são suas vantagens, transmitir credibilidade técnica e
direcionar o visitante para o contato telefônico.

**Público-alvo:** proprietários de veículos aspirados e turbo interessados em
performance, economia de combustível ou diagnóstico eletrônico.

**Objetivo de negócio:** gerar contato qualificado por telefone/WhatsApp.

### Escopo entregue

- [x] Header fixo com identidade e telefone de contato
- [x] Seção hero com imagem de fundo e logotipo sobreposto
- [x] Seção institucional sobre remap com grid de 3 cards
- [x] Seção em 2 colunas com imagem e história da oficina
- [x] Footer com logotipo, contato e área de atendimento
- [x] Layout responsivo (mobile, tablet e desktop)

### Fora de escopo

- Formulário de contato com envio real (back-end/serviço de e-mail)
- Integração com WhatsApp Business API
- CMS para edição de conteúdo
- Analytics, SEO técnico avançado e testes automatizados

---

## 2. Stack técnica

| Camada    | Tecnologia                     |
| --------- | ------------------------------ |
| Framework | Next.js 16 (App Router)        |
| UI        | React 19                       |
| Estilo    | Tailwind CSS v4                |
| Ícones    | lucide-react                   |
| Imagens   | `next/image` (import estático) |
| Linguagem | TypeScript                     |
| Qualidade | ESLint + Prettier              |

A página é um **React Server Component**. Não há `"use client"`, estado ou
efeitos — todo o conteúdo é estático e renderizado no servidor, o que reduz o
JavaScript enviado ao navegador.

---

## 3. Estrutura de arquivos

```
app/students/rafael-domingos/
├── README.md         # esta documentação
├── hero-remap.png    # imagem de fundo da seção hero
├── notes.md          # anotações do curso
├── page.tsx          # página completa (rota /students/rafael-domingos)
└── prompt.md         # registro dos prompts usados
```

Toda a implementação está contida em `page.tsx`, conforme a restrição do
programa de que cada aluno altere apenas a própria pasta. Os componentes são
locais ao arquivo e não são exportados, já que não há reuso fora desta rota.

---

## 4. Arquitetura de componentes

```
Page
├── Header ──────────── Logo
├── main
│   ├── Hero ────────── next/image + LogoMark
│   ├── RemapSection ── grid de cards (dados em `cards`)
│   └── StorySection ── DynoChart + lista (dados em `services`)
└── Footer ──────────── Logo
```

| Componente     | Responsabilidade                                                        |
| -------------- | ----------------------------------------------------------------------- |
| `Page`         | Composição da página e definição do tema base (fundo e cor de texto)    |
| `Header`       | Barra fixa com logotipo à esquerda e telefone à direita                 |
| `Hero`         | Bloco de abertura: imagem de fundo, logotipo, título e chamadas de ação |
| `RemapSection` | Explicação sobre remap e grid de vantagens                              |
| `StorySection` | Gráfico de dinamômetro, história da oficina e lista de serviços         |
| `DynoChart`    | Ilustração SVG comparando a curva de potência original com a Stage 1    |
| `Footer`       | Logotipo, canais de contato e região de atendimento                     |
| `Logo`         | Logotipo completo (símbolo + nome + assinatura)                         |
| `LogoMark`     | Símbolo da marca em SVG: folha desenhada como ponteiro de conta-giros   |

### Conteúdo

Os textos repetitivos ficam em constantes no topo do arquivo, separados da
marcação, para facilitar edição sem mexer em JSX:

| Constante     | Uso                                                      |
| ------------- | -------------------------------------------------------- |
| `PHONE_LABEL` | Telefone formatado exibido no header e no footer         |
| `cards`       | Os 3 cards de vantagens (ícone, título, texto, destaque) |
| `services`    | Lista de serviços exibida na seção de história           |

Para adicionar um card, basta incluir um objeto em `cards` — o grid se ajusta
sozinho.

---

## 5. Design system

### Paleta

Tema escuro fixo, em preto e vermelho. A página não usa os tokens do projeto
(`--background`, `--primary` etc.) de propósito: a oficina tem identidade
visual própria e a página deve ter a mesma aparência independentemente do tema
claro/escuro selecionado no site da Academy.

| Uso                         | Valor                         |
| --------------------------- | ----------------------------- |
| Fundo principal             | `#0a0a0a`                     |
| Texto principal             | `zinc-100`                    |
| Texto secundário            | `zinc-400`                    |
| Destaque / rótulos          | `red-500` (`#ef4444`)         |
| Destaque sobre fundo escuro | `red-400`                     |
| Botão primário              | `red-600` → `red-500` (hover) |
| Bordas e divisores          | `white/10`                    |
| Superfície de card          | `white/[0.03]`                |

### Tipografia

Herda as fontes definidas no layout raiz do projeto: **Inter** para texto
(`--font-sans`) e **JetBrains Mono** para os rótulos numéricos do gráfico
(`--font-mono`).

### Espaçamento

Seções usam `py-20` no mobile e `sm:py-28` a partir de tablet. O conteúdo é
limitado a `max-w-6xl` e centralizado, com `px-4` / `sm:px-6` de respiro
lateral.

---

## 6. Responsividade

Abordagem _mobile-first_: o estilo base atende telas pequenas e os breakpoints
progressivamente ampliam o layout.

| Breakpoint | Largura  | Comportamento                                                                                     |
| ---------- | -------- | ------------------------------------------------------------------------------------------------- |
| base       | < 640px  | Coluna única; telefone do header vira "Contato"; hero centralizado; botões empilhados             |
| `sm`       | ≥ 640px  | Cards em 2 colunas; footer em 2 colunas; botões lado a lado; telefone completo no header          |
| `lg`       | ≥ 1024px | Cards em 3 colunas; seção de história em 2 colunas; hero alinhado à esquerda; footer em 3 colunas |

O hero usa altura relativa à viewport (`min-h-[78svh]`, `sm:min-h-[85svh]`) com
a unidade `svh`, que evita o salto de altura causado pela barra de endereço em
navegadores móveis.

---

## 7. Imagens e assets

| Arquivo           | Uso                    | Observação                                       |
| ----------------- | ---------------------- | ------------------------------------------------ |
| `hero-remap.png`  | Fundo da seção hero    | Import estático, servido via `next/image`        |
| `LogoMark` (SVG)  | Logotipo da marca      | Inline no `page.tsx`, escala sem perda           |
| `DynoChart` (SVG) | Gráfico de dinamômetro | Inline no `page.tsx`, sem biblioteca de gráficos |

**Decisão:** logotipo e gráfico são SVG inline em vez de arquivos de imagem.
Isso mantém a nitidez em qualquer resolução, permite herdar as cores do tema e
evita requisições HTTP adicionais.

A imagem do hero é importada estaticamente, o que dá ao `next/image` as
dimensões em tempo de build e habilita:

- `priority` — carregamento antecipado, por ser o maior elemento visível
  na primeira dobra (LCP);
- `placeholder="blur"` — desfoque automático durante o carregamento;
- otimização de formato e tamanho conforme o dispositivo.

O enquadramento usa `object-right` para preservar o carro, que está no lado
direito da foto. Duas camadas de gradiente sobre a imagem garantem contraste do
texto e a transição para o fundo preto da página.

---

## 8. Acessibilidade

- Estrutura semântica: `header`, `main`, `section`, `article`, `footer` e
  hierarquia de títulos `h1` → `h2` → `h3` sem saltos.
- Imagem do hero com texto alternativo descritivo; o gráfico SVG usa
  `role="img"` com `aria-label` explicando a comparação das curvas.
- Elementos puramente decorativos (ícones, marcadores de lista, símbolo da
  marca) são marcados com `aria-hidden` para não poluir o leitor de tela.
- Contraste: texto claro sobre fundo escuro, com o vermelho reservado a
  destaques sobre `#0a0a0a`.
- Telefone e e-mail usam `tel:` e `mailto:`, permitindo ação direta no celular.

---

## 9. Como executar

Na raiz do projeto (`academy-out-nextjs`):

```bash
npm install
```

```bash
npm run dev
```

A aplicação sobe em `http://localhost:6006`. A página fica em
`http://localhost:6006/students/rafael-domingos`.

### Scripts de qualidade

```bash
npm run typecheck
```

```bash
npm run lint
```

```bash
npm run format
```

---

## 10. Padrões de código adotados

- Sem ponto e vírgula, aspas duplas, indentação de 2 espaços e largura de 80
  colunas — configuração do Prettier na raiz do projeto.
- Classes do Tailwind ordenadas automaticamente pelo
  `prettier-plugin-tailwindcss`.
- Componentes em `PascalCase`, constantes de dados em `camelCase` e constantes
  fixas em `SCREAMING_SNAKE_CASE`.
- Comentários apenas onde explicam uma decisão, não o óbvio.

---

## 11. Roadmap

| Prioridade | Item                                                         |
| ---------- | ------------------------------------------------------------ |
| Alta       | Botão de WhatsApp com link `wa.me` e mensagem pré-preenchida |
| Alta       | Formulário de orçamento com envio real                       |
| Média      | Seção de depoimentos de clientes                             |
| Média      | Galeria de fotos de serviços executados                      |
| Média      | Metadados Open Graph próprios da oficina                     |
| Baixa      | Animação de entrada das seções com `motion`                  |
| Baixa      | Mapa incorporado com a localização da oficina                |

---

## 12. Entrega do curso

**Tema escolhido:** Carros — oficina de remap e eletrônica automotiva.

**Ferramenta de IA:** Claude (Claude Code).

**Prompt principal:** criação de uma landing page para a Leaf Garage, oficina
especializada em eletrônica automotiva e ganho de potência, com header, hero
com imagem de fundo e logotipo, seção de cards sobre remap, seção em duas
colunas com imagem e história, e footer com contato e região de Ribeirão Preto.

**O que aprendi:**

- Como o App Router do Next.js organiza rotas por pastas e por que uma página
  sem interatividade não precisa de `"use client"`.
- A diferença prática entre import estático de imagem e caminho em `public/`, e
  o que o `next/image` faz por baixo (otimização, `priority`, `blur`).
- Construir layouts responsivos com grid do Tailwind pensando primeiro no
  mobile e só depois ampliando com breakpoints.
- Usar SVG inline para logotipo e gráfico, ganhando nitidez e controle de cor
  sem depender de biblioteca externa.
- Separar conteúdo (arrays de dados) da marcação para facilitar manutenção.

---

**Aviso:** os números de performance, o e-mail e a história apresentados na
página são fictícios e servem apenas para fins de demonstração deste protótipo.
