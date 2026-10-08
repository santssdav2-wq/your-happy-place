// Todos os textos, preços, categorias, bônus e depoimentos da página ficam aqui.
// Troque as URLs abaixo pelas URLs reais dos checkouts. Enquanto forem "#", os botões não navegam.
export const CHECKOUT_ESSENCIAL = "#";
export const CHECKOUT_COMPLETO = "#";
export const CHECKOUT_UPGRADE = "#"; // Upgrade do Essencial para o Completo (popup) — R$ 17,90

export const brand = "Moldes Fitness";

export const topBar = "ACESSO IMEDIATO • MATERIAL DIGITAL • BIBLIOTECA DE MOLDES";

export const hero = {
  highlight: "+500 Moldes de Moda Fitness",
  rest: "em uma única biblioteca",
  sub: "Leggings, tops, shorts, conjuntos, croppeds, regatas e muito mais, organizados em um só lugar. Escolha o modelo que precisa e comece a produzir sem criar cada modelagem do zero.",
  cta: "QUERO ACESSAR OS MOLDES",
  trust: "Pagamento seguro • Acesso digital • Material organizado por categoria",
  tags: ["Leggings", "Tops", "Shorts", "Conjuntos", "Croppeds", "Regatas"],
};

export const cta = "QUERO OS MOLDES";

export const benefits = [
  "Acesso imediato",
  "Biblioteca organizada",
  "Diversos modelos",
  "Material digital",
  "Para uso próprio e profissional",
];

export const contents = [
  { title: "Leggings", text: "Diferentes estilos e cortes, do essencial ao mais elaborado." },
  { title: "Tops fitness", text: "Modelos para cada tipo de apoio e cada estilo de produção." },
  { title: "Shorts", text: "Opções femininas e masculinas para completar o catálogo." },
  { title: "Conjuntos", text: "Peças que já se combinam entre si para criar looks completos." },
  { title: "Croppeds", text: "Modelos curtos que acompanham as tendências da moda fitness." },
  { title: "Regatas", text: "Opções simples para diferentes públicos e estilos." },
  { title: "Modelagens femininas", text: "Uma ampla seleção focada no público feminino." },
  { title: "Modelagens masculinas", text: "Modelos masculinos para quem quer variar ainda mais." },
];

export const steps = [
  { title: "Escolha o modelo", text: "Navegue pela biblioteca e encontre o modelo que procura." },
  {
    title: "Baixe o arquivo",
    text: "O material é digital e o acesso é liberado após a confirmação do pagamento.",
  },
  { title: "Imprima ou prepare", text: "Deixe o molde pronto do jeito que a sua produção exige." },
  { title: "Comece a confeccionar", text: "Corte, costure e monte a sua peça." },
];

export const categories = [
  "Leggings",
  "Tops",
  "Shorts",
  "Croppeds",
  "Conjuntos",
  "Regatas",
  "Feminino",
  "Masculino",
];

export const testimonials = [
  {
    name: "Juliana Martins",
    role: "Costureira",
    text: "Estava sempre procurando modelos diferentes para variar o catálogo. Aqui encontro várias opções prontas e acabo perdendo muito menos tempo pensando em o que produzir.",
  },
  {
    name: "Camila Souza",
    role: "Modelista",
    text: "O material é bem organizado. É muito mais prático do que ficar procurando molde por molde quando surge um pedido novo.",
  },
  {
    name: "Patrícia Almeida",
    role: "Confecção",
    text: "A variedade foi o que mais me chamou atenção. Dá para trabalhar com muitos estilos de peças e sempre encontrar uma opção nova.",
  },
];

export const bonuses = [
  {
    title: "Coleção de Moldes Extras",
    text: "Mais modelos para ampliar suas opções de criação.",
    value: "39,90",
  },
  {
    title: "Modelos Fitness em Destaque",
    text: "Uma seleção de modelagens para ampliar sua variedade.",
    value: "34,90",
  },
  {
    title: "Coleção Especial de Conjuntos",
    text: "Combinações de peças para criar looks completos.",
    value: "29,90",
  },
  {
    title: "Modelos Fitness Masculinos",
    text: "Opções masculinas para ampliar a variedade da biblioteca.",
    value: "29,90",
  },
];

// Soma dos valores individuais de referência dos bônus: 39,90 + 34,90 + 29,90 + 29,90
export const bonusesTotal = "134,60";

export const plans = [
  {
    name: "Plano Essencial",
    price: "10,00",
    featured: false,
    cta: "QUERO COMEÇAR",
    href: CHECKOUT_ESSENCIAL,
    items: ["Material principal", "Biblioteca principal", "Acesso imediato", "Material digital"],
    excluded: [
      "Coleção de Moldes Extras",
      "Modelos Fitness em Destaque",
      "Coleção Especial de Conjuntos",
      "Modelos Fitness Masculinos",
    ],
  },
  {
    name: "Plano Completo",
    price: "29,90",
    featured: true,
    cta: "QUERO O PLANO COMPLETO",
    href: CHECKOUT_COMPLETO,
    items: ["Tudo do Essencial", "Todos os 4 bônus", "Acesso completo à biblioteca"],
    excluded: [] as string[],
  },
];

export const planComparison =
  "Por apenas R$ 19,90 a mais, você leva o Plano Completo com todos os bônus.";

export const offerLine =
  "De R$ {bonusesTotal} em bônus inclusos no Plano Completo, por apenas R$ {price}.";

export const upgrade = {
  badge: "ÚLTIMA CHANCE",
  title: "Leve o Plano Completo por apenas",
  price: "17,90",
  note: "Pagamento único • Bônus inclusos",
  items: ["Biblioteca completa", "Todos os 4 bônus"],
  cta: "SIM, QUERO O PLANO COMPLETO",
  decline: "Não, continuar com o Essencial",
};

export const guarantee =
  "Você tem 7 dias para conhecer o material. Se entender que ele não é para você, é só solicitar o reembolso seguindo as condições de garantia da oferta.";

export const faq = [
  {
    q: "O que vou receber?",
    a: "Acesso à biblioteca digital de moldes de moda fitness do plano escolhido. No Plano Completo, os bônus também estão inclusos.",
  },
  { q: "Os moldes são digitais?", a: "Sim. Todo o material é digital e não há envio físico." },
  {
    q: "Como recebo o acesso?",
    a: "Assim que o pagamento for confirmado, você recebe as instruções de acesso no e-mail informado na compra.",
  },
  {
    q: "Posso imprimir os moldes?",
    a: "Sim. O material foi pensado para ser impresso ou preparado da forma que a sua produção precisar.",
  },
  {
    q: "Preciso saber costurar?",
    a: "Ter noções de costura ajuda a aproveitar melhor os moldes. O material atende tanto quem já trabalha com costura quanto quem quer produzir as próprias peças e está começando.",
  },
  {
    q: "Os moldes servem para quais peças?",
    a: "Leggings, tops, shorts, croppeds, conjuntos, regatas e modelagens femininas e masculinos.",
  },
  {
    q: "Posso usar os moldes profissionalmente?",
    a: "Sim. O material foi pensado tanto para uso próprio quanto para produção profissional. As condições completas de uso estão descritas nos termos de uso.",
  },
  {
    q: "Por quanto tempo terei acesso?",
    a: "O período de acesso é informado no momento da compra e vem descrito nas instruções enviadas por e-mail após a confirmação do pagamento.",
  },
  {
    q: "Existe garantia?",
    a: "Sim. Você tem 7 dias de garantia, conforme as condições da oferta.",
  },
];
