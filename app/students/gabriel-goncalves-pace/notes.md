# Notas

- A página é informativa, não comercial: nada de preço, botão de compra ou
  orçamento. O objetivo é apresentar o panorama da impressão 3D.
- O layout segue os mesmos padrões da home: seções com `max-w-7xl`, respiro
  `px-6 py-16 sm:px-10 sm:py-24` e rótulos em caixa alta com `tracking` largo.
  A home usa imagens em `grayscale`; aqui elas ficam coloridas, porque a cor do
  filamento e do material faz parte da informação.
- Os componentes de UI vêm do projeto (`Badge`, `Separator`).
- Todas as seções são Server Components — não há estado nem interação, então
  nenhum arquivo precisa de `"use client"`.
- As tecnologias aparecem só com texto e ícone, sem foto: não achei imagem livre
  de impressora de resina e de SLS, e legendar uma foto de FDM como se fosse
  outra tecnologia seria errado. As fotos ficam nas seções de produtos e de
  aplicações, onde a imagem corresponde ao que está escrito.
- Números e faixas de camada conferidos: patente da estereolitografia em 1984,
  patente do FDM expirando em 2009 (o que abriu caminho para as impressoras
  domésticas) e as sete famílias de processos da ISO/ASTM 52900.
- Ideias para depois: filtro por ramo na seção de aplicações, uma linha do tempo
  da tecnologia e um glossário de siglas (FDM, SLA, SLS, DMLS).
