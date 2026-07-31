import type { LucideIcon } from "lucide-react"
import {
  Building2Icon,
  DropletIcon,
  FactoryIcon,
  GemIcon,
  GraduationCapIcon,
  HeartPulseIcon,
  LayersIcon,
  PaletteIcon,
  PlaneIcon,
  PrinterIcon,
  SquareStackIcon,
  UtensilsIcon,
  ZapIcon,
} from "lucide-react"

export type Fact = {
  value: string
  label: string
}

export type Technology = {
  slug: string
  name: string
  acronym: string
  description: string
  materials: string
  layer: string
  icon: LucideIcon
}

export type ProductType = {
  slug: string
  name: string
  field: string
  material: string
  note: string
  image: string
}

export type Material = {
  name: string
  form: string
  use: string
  note: string
}

export type Field = {
  title: string
  description: string
  icon: LucideIcon
}

export type Step = {
  title: string
  description: string
}

export type Highlight = {
  title: string
  description: string
  image: string
  alt: string
}

export const facts: Fact[] = [
  { value: "1984", label: "Patente da estereolitografia" },
  { value: "2009", label: "Patente do FDM expira e o hobby nasce" },
  { value: "7", label: "Famílias de processos (ISO/ASTM 52900)" },
  { value: "0,02 mm", label: "Camada mais fina, em resina" },
]

export const technologies: Technology[] = [
  {
    slug: "fdm",
    name: "Deposição de filamento",
    acronym: "FDM / FFF",
    description:
      "Um bico aquecido derrete o filamento e desenha a peça camada por camada. É a tecnologia mais comum, mais barata e a que quase todo mundo conhece.",
    materials: "PLA, PETG, ABS, TPU",
    layer: "0,10 – 0,30 mm",
    icon: LayersIcon,
  },
  {
    slug: "resina",
    name: "Cura de resina",
    acronym: "SLA / DLP / LCD",
    description:
      "Uma luz ultravioleta solidifica resina líquida dentro de uma cuba. Entrega o melhor detalhe de superfície, mas exige lavagem e cura depois.",
    materials: "Resinas fotopoliméricas",
    layer: "0,02 – 0,10 mm",
    icon: DropletIcon,
  },
  {
    slug: "sls",
    name: "Sinterização a laser",
    acronym: "SLS",
    description:
      "Um laser funde pó de polímero dentro de uma câmara aquecida. O próprio pó sustenta a peça, então dá para imprimir geometrias impossíveis sem suporte.",
    materials: "Nylon PA11 e PA12",
    layer: "0,08 – 0,15 mm",
    icon: SquareStackIcon,
  },
  {
    slug: "metal",
    name: "Fusão de metal",
    acronym: "SLM / DMLS",
    description:
      "Laser de alta potência funde pó metálico em leito. É como se fabrica peça de uso final em titânio, alumínio e aço para aeronáutica e medicina.",
    materials: "Titânio, alumínio, aço, Inconel",
    layer: "0,02 – 0,05 mm",
    icon: ZapIcon,
  },
  {
    slug: "jateamento",
    name: "Jateamento de material",
    acronym: "PolyJet / MJF",
    description:
      "Cabeças de jato depositam gotas de fotopolímero ou agentes de fusão sobre pó. Permite cor e rigidez diferentes na mesma peça.",
    materials: "Fotopolímeros, pó de nylon",
    layer: "0,014 – 0,10 mm",
    icon: PrinterIcon,
  },
  {
    slug: "pasta",
    name: "Extrusão de pasta",
    acronym: "Concreto, argila, alimentos",
    description:
      "O mesmo princípio do FDM em escala de obra: um bico deposita material pastoso que endurece sozinho. Sai desde uma xícara de cerâmica até uma parede.",
    materials: "Concreto, argila, chocolate",
    layer: "5 – 20 mm",
    icon: Building2Icon,
  },
]

export const productTypes: ProductType[] = [
  {
    slug: "maquetes",
    name: "Maquetes e modelos",
    field: "Arquitetura",
    material: "PLA, resina",
    note: "Estudo de volume antes da obra",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Architectural_model_printed_with_an_Ultimaker_3D_printer.jpg/1280px-Architectural_model_printed_with_an_Ultimaker_3D_printer.jpg",
  },
  {
    slug: "orteses",
    name: "Órteses e próteses",
    field: "Saúde",
    material: "PETG, nylon",
    note: "Feitas na medida de cada paciente",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/3d_printed_hand_%2815642062429%29.jpg/1280px-3d_printed_hand_%2815642062429%29.jpg",
  },
  {
    slug: "mecanismos",
    name: "Mecanismos e robótica",
    field: "Engenharia",
    material: "PLA, nylon",
    note: "Articulações impressas já montadas",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Robohand_at_the_3D%2C_printing_the_future_exhibition_at_the_Science_Museum%2C_London.JPG/1280px-Robohand_at_the_3D%2C_printing_the_future_exhibition_at_the_Science_Museum%2C_London.JPG",
  },
  {
    slug: "pecas-metalicas",
    name: "Peças metálicas",
    field: "Indústria",
    material: "Pó metálico",
    note: "Corpos de prova saindo do leito de pó",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/FZU_3Dprinting_3.jpg/1280px-FZU_3Dprinting_3.jpg",
  },
  {
    slug: "objetos-de-uso",
    name: "Objetos de uso e decoração",
    field: "Design",
    material: "PLA, PETG",
    note: "Geometria que o molde não faria",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/3D_PRINTED_VASE.jpg/1280px-3D_PRINTED_VASE.jpg",
  },
  {
    slug: "edificacoes",
    name: "Edificações",
    field: "Construção",
    material: "Argila crua",
    note: "Paredes impressas no próprio terreno",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Eco-sustainable_3D_printed_house_%22Tecla%22.jpg/1280px-Eco-sustainable_3D_printed_house_%22Tecla%22.jpg",
  },
]

export const materials: Material[] = [
  {
    name: "PLA",
    form: "Filamento",
    use: "Maquete, protótipo, ensino",
    note: "Fácil de imprimir, feito de fonte vegetal",
  },
  {
    name: "PETG",
    form: "Filamento",
    use: "Peça de uso diário",
    note: "Resistente e menos quebradiço que o PLA",
  },
  {
    name: "ABS / ASA",
    form: "Filamento",
    use: "Peça técnica, uso externo",
    note: "Aguenta calor, mas pede câmara fechada",
  },
  {
    name: "TPU",
    form: "Filamento",
    use: "Vedação, calçado, amortecimento",
    note: "Flexível, volta ao formato original",
  },
  {
    name: "Nylon (PA12)",
    form: "Filamento ou pó",
    use: "Engrenagem, articulação, dobradiça",
    note: "Alta resistência ao desgaste",
  },
  {
    name: "Resina fotopolimérica",
    form: "Líquido",
    use: "Joia, odontologia, miniatura",
    note: "Detalhe fino, exige lavagem e cura",
  },
  {
    name: "Titânio, aço, alumínio",
    form: "Pó metálico",
    use: "Aeroespacial, implante, ferramental",
    note: "Peça de uso final, com propriedade de metal",
  },
  {
    name: "Concreto e argila",
    form: "Pasta",
    use: "Parede, mobiliário urbano, cerâmica",
    note: "Impressão feita no canteiro de obra",
  },
]

export const fields: Field[] = [
  {
    title: "Saúde",
    description:
      "Guias cirúrgicos, próteses sob medida, modelos anatômicos para planejar cirurgia e implantes de titânio.",
    icon: HeartPulseIcon,
  },
  {
    title: "Indústria e manutenção",
    description:
      "Peças de reposição fora de linha, gabaritos de montagem e ferramental sem custo de molde.",
    icon: FactoryIcon,
  },
  {
    title: "Arquitetura e construção",
    description:
      "Maquetes de estudo, formas para concreto e paredes impressas direto no terreno.",
    icon: Building2Icon,
  },
  {
    title: "Aeroespacial e automotivo",
    description:
      "Componentes leves com geometria otimizada, que reduzem peso sem perder resistência.",
    icon: PlaneIcon,
  },
  {
    title: "Educação e pesquisa",
    description:
      "Material didático tridimensional e equipamento de laboratório feito sob demanda, a custo baixo.",
    icon: GraduationCapIcon,
  },
  {
    title: "Moda e joalheria",
    description:
      "Modelos em cera para fundição, calçados com entressola impressa e acessórios paramétricos.",
    icon: GemIcon,
  },
  {
    title: "Arte e cultura",
    description:
      "Esculturas, cenografia e réplicas de acervo que podem ser tocadas em exposições.",
    icon: PaletteIcon,
  },
  {
    title: "Alimentos",
    description:
      "Chocolate, massas e purês depositados camada a camada em cozinhas experimentais.",
    icon: UtensilsIcon,
  },
]

export const steps: Step[] = [
  {
    title: "Modelagem ou digitalização",
    description:
      "A peça nasce em um software de CAD ou é capturada de um objeto real com um scanner 3D.",
  },
  {
    title: "Fatiamento",
    description:
      "Um programa corta o modelo em centenas de camadas e gera o caminho que a máquina vai percorrer.",
  },
  {
    title: "Impressão",
    description:
      "A impressora repete a mesma rotina camada após camada, adicionando material apenas onde ele é necessário.",
  },
  {
    title: "Pós-processamento",
    description:
      "Remoção de suportes, lavagem, cura, lixamento ou tratamento térmico, conforme a tecnologia usada.",
  },
]

export const highlights: Highlight[] = [
  {
    title: "Obra impressa",
    description:
      "Pórticos de vários metros extrudam concreto e levantam paredes inteiras sem forma de madeira.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/3D_Concrete_Printer.jpg/1280px-3D_Concrete_Printer.jpg",
    alt: "Impressora 3D de concreto em escala industrial dentro de um galpão",
  },
  {
    title: "Bioimpressão",
    description:
      "Bioimpressoras depositam células vivas em gel para criar tecidos usados em pesquisa e testes de medicamento.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Organovo_BioPrinter.jpg/1280px-Organovo_BioPrinter.jpg",
    alt: "Bioimpressora de laboratório com dois cabeçotes de deposição",
  },
  {
    title: "Sala de aula",
    description:
      "Escolas e makerspaces usam impressoras abertas para ensinar projeto, mecânica e eletrônica na prática.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Delaware_Libraries_Ultimaker_3D_Printer_Build-03.jpg/1280px-Delaware_Libraries_Ultimaker_3D_Printer_Build-03.jpg",
    alt: "Duas pessoas montando uma impressora 3D em uma oficina",
  },
]

export const trends: Step[] = [
  {
    title: "Materiais reciclados",
    description:
      "Filamento feito a partir de resíduo plástico, inclusive das próprias peças descartadas.",
  },
  {
    title: "Peças multimaterial",
    description:
      "Rigidez, flexibilidade e cor diferentes convivendo em uma única impressão.",
  },
  {
    title: "Fabricação distribuída",
    description:
      "O arquivo viaja pela internet e a peça é impressa perto de quem vai usar.",
  },
]
