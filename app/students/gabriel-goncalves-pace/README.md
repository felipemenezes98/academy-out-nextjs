# Camada Zero

Tema escolhido:
Impressão 3D

Ferramenta de IA:
Claude Code

Prompt principal:
Crie uma página informativa sobre o mundo da impressão 3D — tipos de produtos, tipos de impressoras, tipos de materiais e os ramos onde a tecnologia é aplicada. Design simples e minimalista, usando os componentes do projeto.

O que aprendi:
...

## Estrutura

```
gabriel-goncalves-pace/
├── components/     seções da página
├── data/           conteúdo (tecnologias, produtos, materiais, aplicações)
└── page.tsx        composição das seções
```

## Seções

1. `PageHeader` — navegação fixa com âncoras
2. `HeroSection` — abertura, imagem e marcos da tecnologia
3. `IntroSection` — o que é manufatura aditiva, em uma frase
4. `ProcessSection` — as quatro etapas de uma impressão
5. `TechnologiesSection` — tipos de impressora (FDM, resina, SLS, metal, jateamento, pasta)
6. `ProductsSection` — tipos de produto que saem de uma impressora
7. `MaterialsSection` — tabela de materiais por forma e uso
8. `FieldsSection` — ramos de aplicação e três destaques
9. `TrendsSection` — para onde a tecnologia caminha
10. `PageFooter` — créditos e volta para a vitrine

## Conteúdo

Todo o texto vem de [`data/printing.ts`](data/printing.ts). É uma página de
estudo, não comercial: não há preço, catálogo nem chamada de venda. As faixas de
camada seguem a classificação de processos da ISO/ASTM 52900 e as fotos são do
Wikimedia Commons.
