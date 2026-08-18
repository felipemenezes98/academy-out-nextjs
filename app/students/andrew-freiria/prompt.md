# Primeiro prompt (ideia da página de cientistas)
Estou criando um projeto para um curso onde eu devo criar uma página sobre algum assunto da minha escolha. Estou utilizando as tecnologias de React e em arquivos tsx, com tailwind e nextjs. A estrutura já está montada e eu devo apenas adicionar os arquivos na minha pasta denominada andrew-freiria. Minha ideia é criar uma landing page para astrônomos famosos e suas maiores conquistas, histórias e contribuições para a ciência. A ideia é ser uma página spa (Single Page Aplicattion), e no meu arquivo page.tsx conter o código. Gere um código contendo três seções, uma para albert einstein, uma para stephen hawking, e uma para Isaac Newton. A página inicial será a main, e uma navbar navegará entre as seções de cada astronomo. A tela inicial deve conter uma introdução a página, com um hero e um título e uma descrição. Na área de cada astronomo, uma imagem e algumas de suas histórias e descrições.

# Segundo prompt (site de monitoramento de astros)
Vamos criar arquivos novos e do zero, sem utilizar o último projeto. Monte o arquivo com a estrutura de páginas e códigos e me envie. Utilize as especificações abaixo:

Vamos realizar o projeto do rastreador de objetos próximos a terra. Lembre-se, o projeto já existe e é um projeto compartilhado, eu tenho permissão para alterar apenas a pasta andrewfreiria, minha pasta. Dentro dela, você pode criar qualquer estrutura de arquivos para o projeto. A página deve ser uma SPA, e seguir as seguintes especificações:

Tecnologias usadas: Next.js + React + Tailwind + shadcn/ui
Os dados serão fictícios, sem consumo de API
Utilize componentização. Você deve utilizar os componentes do shadcn já prontos, e adequar ao projeto. Caso necessário, crie novos componentes.

Estrutura geral
Navbar com Overview, Objects e About

página inicial:
Hero: título, subtítulo (uma frase mostrando quantos objetos foram registrados esse mês) e CTA "Explore objects"
Informativo com dados em destaque: próximos a terra, a distância do mais próximo, o tamanho do maior, e o que achar relevante. Os destaques devem ser destaque um ao lado do outro, dispostos em uma flexbox responsiva.
Próximas aproximações: O três objetos mais próximos, com suas informações em linha, um abaixo do outro, como uma mini tabela. A seção deve conter um título à esquerda, um subtítulo contendo uma mini introdução a seção, e os objetos abaixo. A tabela não deve conter bordas externas, deve sem simples e conter algumas informações dos três objetos
Deveríamos nos preocupar?: Uma seção educacional, exibindo uma simples explicação sobre como não estamos em perigo, tirando o possível sensacionalismo do site. A seção pode conter uma cor diferente do padrão do site, denunciando atenção
Footer: Com as tecnologias utilizadas, meu nome, e explicando que os dados são fictícios

Página dos objetos:
Explorador de objetos: componentes de busca e filtro, dispostos em uma flexbox. Os resultados devem ser mantidos em uma tabela, disposta em uma scroll área, que mostra os resultados da pesquisa (inicialmente, antes de aplicar pesquisa ou filtro, mostra todos). A tabela deve ter um estilo de dashboard cientifico
Exibição individual de cada objeto: abaixo da tabela, com o nome do objeto em destaque e suas informações, como descoberta, velocidade, mais perto que já esteve, distância, e outros informações importantes.

Sobre:
Um sobre com explicações do propósito do objeto (explorar objetos próximos a terra) e sua importância. Adicione qualquer outra informação que achar pertinente que essa seção deverá conter.

Estilo:
Aproximo o estilo do site com sites científicos como o da Nasa
As cores devem ser predominantemente: preto, cinza escuro, branco, cinza, e usar o azul como destaque. O shadcn possui natividade com temas claros e escuros, construa o projeto e a estilização aproveitando isso (o site deve conter modo claro e escuro)
Dashboard científico