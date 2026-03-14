import { Wrench, FileText, Truck, Cog, ClipboardCheck } from "lucide-react";
import { images } from "@/data/images";

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: typeof Wrench;
  image?: string;
  heroHeadline: string;
  heroSubtitle: string;
  scope: string[];
  coverage: string;
  teamHighlights: string[];
  faq: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "manutencao",
    title: "Manutenção de Equipamentos",
    description: "Manutenção preventiva e corretiva para Ressonância Magnética, Tomografia Computadorizada e Hemodinâmica de diversos fabricantes.",
    icon: Wrench,
    image: images.servicos.manutencao,
    heroHeadline: "Manutenção Técnica Especializada em Diagnóstico por Imagem",
    heroSubtitle: "Oferecemos serviços de manutenção preventiva e corretiva para equipamentos de diagnóstico por imagem de diversos fabricantes — RM, TC e Hemodinâmica — com equipe certificada internacionalmente.",
    scope: [
      "Manutenção preventiva programada",
      "Manutenção corretiva emergencial",
      "Calibração e ajuste de equipamentos",
      "Atualização de software e firmware",
      "Relatórios técnicos detalhados",
      "Suporte remoto imediato",
    ],
    coverage: "Unidades estrategicamente localizadas em São Paulo, Rio de Janeiro, Belo Horizonte, Goiânia e Florianópolis. Cobertura em todo o território nacional.",
    teamHighlights: [
      "16 anos de experiência em manutenção de equipamentos médicos",
      "3 salas de testes para equipamentos",
      "Técnicos de campo especializados com vasta experiência",
      "Técnicos de laboratório de eletrônica especialistas",
      "Time de logística para entrega de peças express",
    ],
    faq: [
      { question: "Qual o tempo de resposta para chamados emergenciais?", answer: "Nosso SLA padrão é de até 24 horas para atendimento presencial em todo o território nacional, com suporte remoto imediato." },
      { question: "Vocês atendem equipamentos de outros fabricantes além de Esaote?", answer: "Sim. Atuamos com manutenção de equipamentos de diversos fabricantes de Ressonância Magnética, Tomografia Computadorizada e Hemodinâmica." },
      { question: "Vocês utilizam peças originais?", answer: "Sim, trabalhamos com peças originais e homologadas, garantindo a integridade e performance do equipamento." },
    ],
  },
  {
    slug: "contratos",
    title: "Contratos de Manutenção",
    description: "Contratos personalizados com planos flexíveis, com ou sem peças, contemplando manutenção preventiva e corretiva.",
    icon: FileText,
    image: images.servicos.contratos,
    heroHeadline: "Contratos de Manutenção Sob Medida",
    heroSubtitle: "Contratos personalizados para garantir máxima performance e disponibilidade dos seus equipamentos. Planos flexíveis com ou sem peças, preventiva e corretiva.",
    scope: [
      "Planos preventivos e corretivos personalizados",
      "Opções com ou sem inclusão de peças",
      "SLA com tempo de resposta garantido",
      "Atendimento técnico especializado contínuo",
      "Relatórios periódicos de desempenho",
      "Suporte remoto ilimitado",
    ],
    coverage: "Unidades em São Paulo, Rio de Janeiro, Belo Horizonte, Goiânia e Florianópolis. Cobertura nacional.",
    teamHighlights: [
      "16 anos de experiência em manutenção de equipamentos médicos",
      "3 salas de testes para equipamentos",
      "Técnicos de campo especializados com vasta experiência",
      "Time de logística para entrega de peças express",
    ],
    faq: [
      { question: "Quais tipos de contrato estão disponíveis?", answer: "Oferecemos contratos básicos (preventiva), intermediários (preventiva + corretiva) e completos (all-inclusive com peças). Cada contrato é personalizado para suas necessidades." },
      { question: "Qual a vantagem de um contrato vs. manutenção avulsa?", answer: "O contrato garante previsibilidade financeira, prioridade no atendimento, SLA garantido e minimiza o tempo de inatividade do equipamento." },
    ],
  },
  {
    slug: "instalacao",
    title: "Instalação e Desinstalação",
    description: "Serviço completo de instalação, desinstalação e manutenções avulsas com equipe especializada e cobertura nacional.",
    icon: Truck,
    image: images.servicos.instalacao,
    heroHeadline: "Instalação e Desinstalação Profissional de Equipamentos",
    heroSubtitle: "Atuamos com serviços de instalação, desinstalação e manutenções avulsas como visita técnica, preventivas e corretivas. Contratos com e sem peças para todo o Brasil.",
    scope: [
      "Projeto técnico da sala de RM",
      "Logística e transporte especializado",
      "Instalação e comissionamento",
      "Testes de aceitação e qualidade",
      "Desinstalação segura de equipamentos",
      "Remanejamento entre unidades",
    ],
    coverage: "Unidades em São Paulo, Rio de Janeiro, Belo Horizonte, Goiânia e Florianópolis. Cobertura em todo o território nacional.",
    teamHighlights: [
      "16 anos de experiência em manutenção de equipamentos médicos",
      "3 salas de testes para equipamentos",
      "Técnicos de campo especializados com vasta experiência",
      "Técnicos de laboratório de eletrônica especialistas",
      "Time de logística para entrega de peças express",
    ],
    faq: [
      { question: "Vocês fazem o projeto da sala de RM?", answer: "Sim, nossa equipe de engenharia elabora o projeto completo da sala, incluindo blindagem, climatização e infraestrutura elétrica." },
      { question: "Atendem todo o Brasil?", answer: "Sim. Temos unidades estratégicas em 5 estados e cobertura para todo o território nacional." },
    ],
  },
  {
    slug: "reparo",
    title: "Reparo de Peças e Periféricos",
    description: "Reparo especializado em bobinas de RM, placas eletrônicas, módulos, fontes de alimentação e periféricos em laboratório próprio.",
    icon: Cog,
    image: images.servicos.reparo,
    heroHeadline: "Reparo Especializado: Laboratório Próprio de Componentes",
    heroSubtitle: "Tecnologia avançada e expertise técnica para restaurar bobinas de ressonância magnética, placas eletrônicas, módulos, fontes de alimentação e periféricos com qualidade e confiabilidade.",
    scope: [
      "Reparo de bobinas de ressonância magnética",
      "Reparo de placas eletrônicas e módulos",
      "Reparo de fontes de alimentação",
      "Recondicionamento de periféricos",
      "Análise e diagnóstico rigoroso de cada peça",
      "Testes de qualidade e confiabilidade pós-reparo",
    ],
    coverage: "Unidades em São Paulo, Rio de Janeiro, Belo Horizonte, Goiânia e Florianópolis.",
    teamHighlights: [
      "Laboratório próprio especializado",
      "16 anos de experiência em equipamentos médicos",
      "Processo rigoroso de análise, recuperação e testes",
      "Objetivo: prolongar vida útil e reduzir custos",
    ],
    faq: [
      { question: "Qual a garantia do reparo?", answer: "Todos os reparos possuem garantia de 6 a 12 meses, dependendo do componente, com suporte técnico durante todo o período." },
      { question: "Vocês reparam bobinas de RM?", answer: "Sim. Somos especializados no reparo de bobinas de ressonância magnética, com laboratório dedicado e processos rigorosos de teste." },
      { question: "O reparo é mais vantajoso que a troca da peça?", answer: "Na maioria dos casos, sim. O reparo prolonga a vida útil, reduz custos e evita substituições desnecessárias." },
    ],
  },
  {
    slug: "visita-tecnica",
    title: "Visita Técnica",
    description: "Avaliação técnica presencial para diagnóstico de problemas, consultoria e planejamento de manutenção em todo o Brasil.",
    icon: ClipboardCheck,
    image: images.servicos.visitaTecnica,
    heroHeadline: "Visita Técnica Especializada",
    heroSubtitle: "Diagnóstico presencial preciso para identificar problemas e oportunidades de melhoria no seu parque de equipamentos de diagnóstico por imagem.",
    scope: [
      "Diagnóstico técnico presencial",
      "Relatório detalhado com recomendações",
      "Avaliação de performance do equipamento",
      "Consultoria para upgrade ou substituição",
      "Planejamento de manutenção preventiva",
      "Orçamento de correções necessárias",
    ],
    coverage: "Atendimento em todo o território nacional com base em 5 unidades estratégicas.",
    teamHighlights: [
      "Equipe certificada internacionalmente",
      "16 anos de experiência em equipamentos médicos",
      "Relatórios técnicos detalhados e transparentes",
    ],
    faq: [
      { question: "Quanto custa uma visita técnica?", answer: "O valor varia conforme a localização e escopo. Entre em contato para um orçamento personalizado." },
      { question: "A visita técnica inclui reparo?", answer: "A visita é focada em diagnóstico e avaliação. Caso necessário, geramos um orçamento separado para os reparos identificados." },
    ],
  },
];
