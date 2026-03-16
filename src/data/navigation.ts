export interface NavChild {
  label: string;
  href: string;
}

export interface NavGroup {
  groupLabel: string;
  items: NavChild[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  /** Grouped children render as columns with headers */
  groups?: NavGroup[];
  highlight?: boolean;
}

export const navigation: NavItem[] = [
  {
    label: "Produtos",
    href: "/solucoes",
    groups: [
      {
        groupLabel: "Ressonância Magnética",
        items: [
          { label: "Magnifico Open", href: "/solucoes/rm-magnifico-open" },
          { label: "S-Scan", href: "/solucoes/rm-s-scan" },
          { label: "O-Scan", href: "/solucoes/rm-o-scan" },
          { label: "G-Scan", href: "/solucoes/rm-g-scan" },
        ],
      },
      {
        groupLabel: "Raio-X",
        items: [
          { label: "Detector Flat Panel", href: "/produtos-mindray/detector-flat-panel" },
          { label: "DigiEye 330", href: "/produtos-mindray/digieye-330" },
          { label: "DigiEye 350", href: "/produtos-mindray/digieye-350" },
          { label: "MobiEye 700", href: "/produtos-mindray/mobieye-700" },
        ],
      },
      {
        groupLabel: "Inteligência Artificial",
        items: [
          { label: "HexAI", href: "/hexai" },
        ],
      },
      {
        groupLabel: "Bombas Injetoras",
        items: [
          { label: "Bombas Injetoras", href: "/solucoes/bombas-injetoras" },
        ],
      },
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
    label: "Estrutura",
    href: "/estrutura",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Apoio",
    href: "/apoio",
  },
  {
    label: "Contato",
    href: "/contato",
  },
];
