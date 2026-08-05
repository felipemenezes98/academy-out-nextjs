# Vortex - Dashboard Financeiro

Dashboard financeiro moderno e interativo desenvolvido em **Next.js**, **React**, **Tailwind CSS**.

---

## Visão Geral

Este projeto consiste em uma página de apresentação (Landing Page) integrada a um **Showcase de Dashboard Financeiro Operacional**, combinando design elegante, animações suaves de entrada, alternância de tema (Light/Dark Mode) e cálculos dinâmicos de métricas (KPIs).

---

## Funcionalidades Principais

- **Filtro Dinâmico**: Seleção de janelas de tempo (3, 6, 12 e 24 meses) com atualização instantânea dos KPIs e gráficos.
- **Cálculo de Métricas (KPIs)**:
  - **Receita Total**: Soma acumulada no período selecionado e comparação percentual (_delta_) com o período anterior.
  - **Volume de Pedidos**: Quantidade total de vendas no intervalo.
  - **Taxa de Conversão**: Percentual médio de conversão das operações.
  - **Novos Clientes**: Total de novos clientes conquistados.
- **Gráficos Interativos**: Visualização daevolução da receita mensal com barras responsivas.
- **Tabela de Pedidos Recentes**: Listagem detalhada das últimas transações com status e valores formatados.
- **Suporte a Temas**: Alternador entre modo claro e escuro (`theme-toggle.tsx`).
- **Seções de Landing Page**:
  - Hero com chamadas de ação e badge animada (`reveal.tsx`).
  - Seção de recursos em formato _bento grid_ (`feature-card.tsx`).
  - Depoimentos de clientes.
  - Chamada para ação final (CTA).

---

## Estrutura de Arquivos

```text
app/students/joao-felipe/
├── page.tsx                     # Ponto de entrada da rota do Next.js
├── dashboard.tsx                # Componente principal da página e landing page
├── data.ts                      # Dados mockados e utilitários matemáticos de KPIs
├── kpi-math.test.mjs            # Testes unitários para cálculos matemáticos e KPIs
├── README.md                    # Documentação do projeto
└── components/                  # Componentes reutilizáveis do módulo
    ├── cta-link.tsx             # Botão/link estilizado de call-to-action
    ├── feature-card.tsx         # Card de destaques/recursos
    ├── kpi-cards.tsx            # Exibição dos cards de indicadores chave
    ├── orders-table.tsx         # Tabela de pedidos recentes
    ├── reveal.tsx               # Animações de revelação em rolagem
    ├── revenue-chart.tsx        # Gráfico de barras de receita
    ├── showcase-dashboard.tsx   # Painel interativo com filtros e estados de exibição
    └── theme-toggle.tsx         # Alternador de tema Light/Dark
```

---

## Testes Unitários

O projeto conta com testes unitários para validar a precisão matemática dos cálculos de KPIs e proteção contra divisão por zero. Os testes utilizam o test runner nativo do Node.js (`node:test`).

Para executar os testes, rode no terminal:

```bash
node --test app/students/joao-felipe/kpi-math.test.mjs
```
