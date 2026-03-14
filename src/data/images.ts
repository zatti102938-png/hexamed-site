/**
 * Centralized image path map for the entire site.
 * All components should import paths from here.
 * To swap in real images, just update the path strings below.
 */

const BASE = "/images/hexamedical";

export const images = {
  global: {
    logoHorizontal: `${BASE}/global/logo-horizontal.png`,
    logoIcon: `${BASE}/global/logo-icon.png`,
    bgPattern: `${BASE}/global/bg-pattern.webp`,
    ogDefault: `${BASE}/global/og-default.jpg`,
  },
  home: {
    heroBanner: `${BASE}/home/hero-banner.webp`,
    heroMobile: `${BASE}/home/hero-mobile.webp`,
    cardProdutos: `${BASE}/home/card-produtos.webp`,
    cardServicos: `${BASE}/home/card-servicos.webp`,
    cardVeterinario: `${BASE}/home/card-veterinario.webp`,
    manutencaoThumb: `${BASE}/home/manutencao-thumb.webp`,
    laboratorioThumb: `${BASE}/home/laboratorio-thumb.webp`,
    timeHexa: `${BASE}/home/time-hexa.webp`,
    ceoVideoCover: `${BASE}/home/ceo-video-cover.webp`,
    depoimentoBg: `${BASE}/home/depoimento-bg.webp`,
  },
  produtos: {
    magnificoOpen: {
      hero: `${BASE}/produtos/esaote/magnifico-open-hero.webp`,
      thumb: `${BASE}/produtos/esaote/magnifico-open-thumb.webp`,
    },
    sScan: {
      hero: `${BASE}/produtos/esaote/s-scan-hero.webp`,
      thumb: `${BASE}/produtos/esaote/s-scan-thumb.webp`,
    },
    oScan: {
      hero: `${BASE}/produtos/esaote/o-scan-hero.webp`,
      thumb: `${BASE}/produtos/esaote/o-scan-thumb.webp`,
    },
    gScan: {
      hero: `${BASE}/produtos/esaote/g-scan-hero.webp`,
      thumb: `${BASE}/produtos/esaote/g-scan-thumb.webp`,
    },
    bombasInjetoras: {
      hero: `${BASE}/produtos/esaote/bombas-injetoras-hero.webp`,
      thumb: `${BASE}/produtos/esaote/bombas-injetoras-thumb.webp`,
    },
    hexai: {
      hero: `${BASE}/produtos/esaote/hexai-hero.webp`,
      thumb: `${BASE}/produtos/esaote/hexai-thumb.webp`,
    },
  },
  servicos: {
    hubHero: `${BASE}/servicos/servicos-hub-hero.webp`,
    manutencao: `${BASE}/servicos/manutencao-hero.webp`,
    contratos: `${BASE}/servicos/contratos-hero.webp`,
    instalacao: `${BASE}/servicos/instalacao-hero.webp`,
    reparo: `${BASE}/servicos/reparo-hero.webp`,
    visitaTecnica: `${BASE}/servicos/visita-tecnica-hero.webp`,
  },
  estrutura: {
    hero: `${BASE}/estrutura/estrutura-hero.webp`,
    lab01: `${BASE}/estrutura/lab-01.webp`,
    lab02: `${BASE}/estrutura/lab-02.webp`,
    lab03: `${BASE}/estrutura/lab-03.webp`,
    salaTestes: `${BASE}/estrutura/sala-testes.webp`,
    fachada: `${BASE}/estrutura/fachada.webp`,
  },
  veterinaria: {
    hero: `${BASE}/veterinaria/vet-hero.webp`,
    magnificoVet: `${BASE}/veterinaria/magnifico-vet.webp`,
    vetMrGrande: `${BASE}/veterinaria/vet-mr-grande.webp`,
    oScanEquine: `${BASE}/veterinaria/o-scan-equine.webp`,
  },
  blog: {
    avancosRessonancia: `${BASE}/blog/avancos-ressonancia-coluna.webp`,
    mitosEVerdades: `${BASE}/blog/mitos-e-verdades-rm.webp`,
    rmBaixoCampo: `${BASE}/blog/rm-baixo-campo.webp`,
    defaultThumb: `${BASE}/blog/blog-default-thumb.webp`,
  },
  mindray: {
    detectorFlat: {
      hero: `${BASE}/mindray/detector-flat/detector-flat-hero.webp`,
      thumb: `${BASE}/mindray/detector-flat/detector-flat-thumb.webp`,
    },
    digieye330: {
      hero: `${BASE}/mindray/digieye-330/digieye-330-hero.webp`,
      thumb: `${BASE}/mindray/digieye-330/digieye-330-thumb.webp`,
    },
    digieye350: {
      hero: `${BASE}/mindray/digieye-350/digieye-350-hero.webp`,
      thumb: `${BASE}/mindray/digieye-350/digieye-350-thumb.webp`,
    },
    mobileye700: {
      hero: `${BASE}/mindray/mobileye/mobileye-700-hero.webp`,
      thumb: `${BASE}/mindray/mobileye/mobileye-700-thumb.webp`,
    },
  },
} as const;
