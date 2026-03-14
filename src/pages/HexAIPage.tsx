import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import CTABanner from "@/components/sections/CTABanner";
import FAQSection from "@/components/sections/FAQSection";
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight, Sparkles, BarChart3, Zap, CheckCircle2, Monitor, Server } from "lucide-react";

const features = [
  { icon: Sparkles, title: "Análise Inteligente", description: "IA que auxilia na interpretação de exames com precisão e agilidade, reduzindo o tempo de laudo." },
  { icon: BarChart3, title: "Aumente sua Produção em até 40%", description: "Reduza o tempo de análise e aumente o volume de atendimentos sem comprometer a qualidade diagnóstica." },
  { icon: Zap, title: "Integração Total", description: "Compatível com os principais sistemas PACS e RIS do mercado. Instalação simples e rápida." },
  { icon: Monitor, title: "Interface Intuitiva", description: "Dashboard amigável para radiologistas, com visualização otimizada e ferramentas de anotação." },
];

const compatibility = [
  "PACS Pixeon",
  "PACS Carestream",
  "RIS MV",
  "RIS Tasy",
  "Sistemas DICOM padrão",
  "Esaote eVision",
];

const preInstallation = [
  { step: "1", title: "Análise do Ambiente", description: "Avaliamos sua infraestrutura de TI e fluxo de trabalho atual." },
  { step: "2", title: "Configuração", description: "Instalação e integração com seus sistemas PACS/RIS existentes." },
  { step: "3", title: "Treinamento", description: "Capacitação da equipe médica e técnica para uso da plataforma." },
  { step: "4", title: "Go-Live & Suporte", description: "Acompanhamento pós-implantação com suporte dedicado." },
];

const faq = [
  { question: "O HexAI substitui o radiologista?", answer: "Não. O HexAI é uma ferramenta de apoio à decisão que auxilia o radiologista, aumentando produtividade e precisão, mas a interpretação final é sempre do médico." },
  { question: "Quanto tempo leva a implantação?", answer: "Em média, a implantação completa leva de 2 a 4 semanas, incluindo integração, testes e treinamento." },
  { question: "É compatível com meu PACS?", answer: "O HexAI é compatível com os principais sistemas PACS e RIS do mercado que suportam o padrão DICOM." },
  { question: "Preciso de hardware adicional?", answer: "Na maioria dos casos, não. O HexAI opera em nuvem com requisitos mínimos de infraestrutura local." },
];

const HexAIPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>HexAI — Inteligência Artificial para Diagnóstico por Imagem | Hexamedical</title>
        <meta name="description" content="Potencialize a precisão diagnóstica e a produtividade com inteligência artificial aplicada à análise de exames de ressonância magnética. Aumente sua produção em até 40%." />
      </Helmet>

      <PageBreadcrumb items={[{ label: "HexAI" }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-dark-surface text-white">
        <div className="absolute inset-0">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="container relative z-10 py-20 md:py-28 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Brain className="h-4 w-4" />
              Inteligência Artificial
            </div>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              Aumente sua produção em até <span className="text-primary">40%</span>
            </h1>
            <p className="mb-8 text-lg text-white/80 md:text-xl">
              Potencialize a precisão diagnóstica e a produtividade da sua equipe com inteligência artificial aplicada à análise de exames de ressonância magnética.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/contato">
                  Solicitar Demonstração
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/60 bg-primary/10 text-white hover:bg-primary/20">
                <a href="https://api.whatsapp.com/send?phone=553192368432&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20HexAI." target="_blank" rel="noopener noreferrer">
                  Falar com Especialista
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">Por que escolher o HexAI?</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Tecnologia de ponta que transforma o fluxo de trabalho do seu centro de imagem.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feat) => (
              <div key={feat.title} className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feat.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-bold text-foreground">{feat.title}</h3>
                <p className="text-sm text-muted-foreground">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility */}
      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Compatibilidade</h2>
              <p className="mb-8 text-muted-foreground">
                O HexAI integra-se nativamente com os sistemas mais utilizados no mercado brasileiro de diagnóstico por imagem.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {compatibility.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center rounded-2xl border border-border bg-card p-12">
              <Server className="h-24 w-24 text-primary/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Pre-installation Flow */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">Como funciona a implantação</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Processo simplificado para que você comece a usar o HexAI rapidamente.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {preInstallation.map((item) => (
              <div key={item.step} className="relative rounded-xl border border-border bg-card p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="mb-2 font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faq} />

      <CTABanner
        headline="Pronto para revolucionar seu centro de imagem?"
        subtitle="Solicite uma demonstração gratuita do HexAI e descubra como aumentar a produtividade da sua equipe."
      />
    </Layout>
  );
};

export default HexAIPage;
