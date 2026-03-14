export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  highlight?: boolean;
}

export const navigation: NavItem[] = [
  {
    label: "Produtos",
    href: "/solucoes",
    children: [
      { label: "Magnifico Open", href: "/solucoes/rm-magnifico-open" },
      { label: "S-Scan", href: "/solucoes/rm-s-scan" },
      { label: "O-Scan", href: "/solucoes/rm-o-scan" },
      { label: "G-Scan", href: "/solucoes/rm-g-scan" },
      { label: "Bombas Injetoras", href: "/solucoes/bombas-injetoras" },
      { label: "HexAI", href: "/solucoes/hexai" },
    ],
  },
  {
    label: "Serviços",
    href: "/servicos",
    children: [
      { label: "Manutenção de Equipamentos", href: "/servicos/manutencao" },
      { label: "Desinstalação e Instalação", href: "/servicos/instalacao" },
      { label: "Contratos de Manutenção", href: "/servicos/contratos" },
      { label: "Reparo de Peças e Periféricos", href: "/servicos/reparo" },
      { label: "Visita Técnica", href: "/servicos/visita-tecnica" },
    ],
  },
  {
    label: "Produtos Mindray",
    href: "/produtos-mindray",
    children: [
      { label: "Detector Flat Panel", href: "/produtos-mindray/detector-flat-panel" },
      { label: "DigiEye 330", href: "/produtos-mindray/digieye-330" },
      { label: "DigiEye 350", href: "/produtos-mindray/digieye-350" },
      { label: "MobiEye 700", href: "/produtos-mindray/mobieye-700" },
    ],
  },
  {
    label: "Estrutura",
    href: "/estrutura",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contato",
    href: "/contato",
  },
];
