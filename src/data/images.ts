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
      gallery01: `${BASE}/mindray/detector-flat/detector-flat-gallery-01.webp`,
      cleanroom: `${BASE}/mindray/detector-flat/detector-flat-cleanroom.jpg`,
      ip54: `${BASE}/mindray/detector-flat/detector-flat-ip54.jpg`,
      factory: `${BASE}/mindray/detector-flat/detector-flat-factory.jpg`,
      folhetoP1: `${BASE}/mindray/detector-flat/detector-flat-folheto-p1.jpg`,
      folhetoP2: `${BASE}/mindray/detector-flat/detector-flat-folheto-p2.jpg`,
    },
    digieye330: {
      hero: `${BASE}/mindray/digieye-330/digieye-330-hero.webp`,
      thumb: `${BASE}/mindray/digieye-330/digieye-330-thumb.webp`,
      gallery01: `${BASE}/mindray/digieye-330/digieye-330-gallery-01.webp`,
      product: `${BASE}/mindray/digieye-330/digieye-330-product.jpg`,
      detail: `${BASE}/mindray/digieye-330/digieye-330-detail.jpg`,
      mico: `${BASE}/mindray/digieye-330/digieye-330-mico.jpg`,
      folhetoP1: `${BASE}/mindray/digieye-330/digieye-330-folheto-p1.jpg`,
      folhetoP2: `${BASE}/mindray/digieye-330/digieye-330-folheto-p2.jpg`,
    },
    digieye350: {
      hero: `${BASE}/mindray/digieye-350/digieye-350-hero.webp`,
      thumb: `${BASE}/mindray/digieye-350/digieye-350-thumb.webp`,
      gallery01: `${BASE}/mindray/digieye-350/digieye-350-gallery-01.webp`,
      annotated: `${BASE}/mindray/digieye-350/digieye-350-annotated.jpg`,
      product: `${BASE}/mindray/digieye-350/digieye-350-product.jpg`,
      mico: `${BASE}/mindray/digieye-350/digieye-350-mico.jpg`,
      folhetoP1: `${BASE}/mindray/digieye-350/digieye-350-folheto-p1.jpg`,
      folhetoP2: `${BASE}/mindray/digieye-350/digieye-350-folheto-p2.jpg`,
    },
    mobileye700: {
      hero: `${BASE}/mindray/mobileye/mobileye-700-hero.webp`,
      thumb: `${BASE}/mindray/mobileye/mobileye-700-thumb.webp`,
      gallery01: `${BASE}/mindray/mobileye/mobileye-700-gallery-01.webp`,
      console: `${BASE}/mindray/mobileye/mobileye-700-console.jpg`,
      detail: `${BASE}/mindray/mobileye/mobileye-700-detail.jpg`,
      folhetoP1: `${BASE}/mindray/mobileye/mobileye-700-folheto-p1.jpg`,
      folhetoP2: `${BASE}/mindray/mobileye/mobileye-700-folheto-p2.jpg`,
    },
  },
  /** Raw source assets uploaded from original site — organized by origin */
  raw: {
    esaote: {
      gScanBrio: `${BASE}/esaote/esaote-wp-content-csm-esaote-g-scan-brio-7563a8df6a-043.webp`,
      sScanHero: `${BASE}/esaote/esaote-wp-content-csm-esaote-s-scan-hero-46ed91e4e2-044.jpg`,
      oScanHero: `${BASE}/esaote/esaote-wp-content-csm-old-esaote-o-scan-hero-feb99a79af-024.png`,
      gScanBrioHero: `${BASE}/esaote/esaote-wp-content-csm-old-esaote-g-scan-brio-hero-47b1844ff1-023.png`,
      magnificoOpen: `${BASE}/esaote/esaote-wp-content-magnifico-open-050.png`,
      magnifico2: `${BASE}/esaote/esaote-wp-content-magnifico2-052.png`,
      oScan: `${BASE}/esaote/esaote-wp-content-esaote-o-scan-047.webp`,
      sScan: `${BASE}/esaote/esaote-wp-content-esaote-s-scan-048.png`,
      magnificoVet: `${BASE}/esaote/esaote-wp-content-magnifico-vet-051.webp`,
      vetMrGrande: `${BASE}/esaote/esaote-wp-content-esaote-grande-vet-mr-015.png`,
      vetMrGrandeHero: `${BASE}/esaote/esaote-wp-content-csm-esaote-vet-mr-grande-hero-d211219025-1024x802-045.webp`,
    },
    servicos: {
      manutencao: `${BASE}/servicos/servico-wp-content-imagem-manutencao-059.webp`,
      contratos: `${BASE}/servicos/servico-wp-content-contrato-de-manutencoes-foto-055.webp`,
      instalacao: `${BASE}/servicos/servico-wp-content-desinstalacao-e-instalacao-057.webp`,
      reparo: `${BASE}/servicos/servico-wp-content-reparo-de-pecas-e-eletronicas-foto-061.webp`,
      estrutura: `${BASE}/servicos/servico-wp-content-estrutura-1-049.webp`,
    },
    gerais: {
      ceoVideo1: `${BASE}/gerais-site/geral-wp-content-capa-video-fabio-2-096.jpg`,
      ceoVideo2: `${BASE}/gerais-site/geral-wp-content-capa-video-fabio-4-097.webp`,
      hexaiVarredura: `${BASE}/gerais-site/geral-wp-content-varredura-hexai-1024x576-086.png`,
      blogCapa1: `${BASE}/gerais-site/geral-wp-content-hexamedical-templates-capa-de-blog-069.webp`,
      blogCapa2: `${BASE}/gerais-site/geral-wp-content-hexamedical-templates-capa-de-blog-1-768x432-063.webp`,
      blogCapa3: `${BASE}/gerais-site/geral-wp-content-hexamedical-templates-capa-de-blog-2-768x432-065.webp`,
      blogCapa4: `${BASE}/gerais-site/geral-wp-content-hexamedical-templates-capa-de-blog-3-768x432-067.webp`,
    },
  },
} as const;
