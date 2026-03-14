import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import SolutionCard from "@/components/sections/SolutionCard";
import ServiceCard from "@/components/sections/ServiceCard";
import DifferentialsGrid from "@/components/sections/DifferentialsGrid";
import TrustBlock from "@/components/sections/TrustBlock";
import HexAIHighlight from "@/components/sections/HexAIHighlight";
import BlogHighlight from "@/components/sections/BlogHighlight";
import MindrayHighlight from "@/components/sections/MindrayHighlight";
import TestimonialsBlock from "@/components/sections/TestimonialsBlock";
import CTABanner from "@/components/sections/CTABanner";
import ContactForm from "@/components/sections/ContactForm";
import { solutionCategories } from "@/data/solutions";
import { services } from "@/data/services";
import { ArrowRight, Wrench, Microscope, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/data/images";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Hexamedical — Especialistas em Equipamentos de Diagnóstico por Imagem</title>
        <meta name="description" content="Soluções completas em Ressonância Magnética Esaote, Radiologia Digital Mindray, serviços técnicos especializados e suporte com 16+ anos de experiência. Cobertura nacional." />
      </Helmet>

      {/* 1. Hero — matching original site */}
      <section className="relative overflow-hidden bg-dark-surface text-white">
        <div className="absolute inset-0">
          <img src={images.home.heroBanner} alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-surface via-dark-surface/90 to-dark-surface/60" />
        </div>
        <div className="container relative z-10 py-20 md:py-28 lg:py-36">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-balance text-white md:text-4xl lg:text-5xl">
                Seu negócio merece as soluções certas.
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/80">
                Ofereça aos seus pacientes o melhor em prevenção, diagnóstico, terapia e acompanhamento, elevando o padrão do seu atendimento enquanto reduz riscos operacionais e custos com manutenções graças à robustez e alta durabilidade dos nossos equipamentos.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a
                    href="https://api.whatsapp.com/send?phone=553192368432&text=Ol%C3%A1!%20Estou%20aqui%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%2C%20por%20favor."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar com equipe de vendas
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary/60 bg-primary/10 text-white hover:bg-primary/20">
                  <Link to="/solucoes">
                    Conheça nossas soluções
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <p className="text-lg leading-relaxed text-white/70">
                Entregamos mais que produtos, soluções personalizadas para atender as necessidades para serviços exigentes com soluções efetivas para cada realidade e expectativa sendo clínicas, universidades e hospitais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Produtos + Serviços Cards — matching original */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Produtos */}
            <Link
              to="/solucoes"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 h-40 -mx-8 -mt-8 overflow-hidden rounded-t-2xl">
                <img src={images.home.cardProdutos} alt="Produtos Hexamedical" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Produtos</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                Tecnologia Italiana para as mais diversas áreas da saúde. Tenha eficiência energética e alta qualidade e confiabilidade, da Esaote.
              </p>
              <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-primary/80">
                Ver linha completa
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            {/* Serviços */}
            <Link
              to="/servicos"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Wrench className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Serviços</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                Seja uma visita técnica, manutenção ou uma consultoria completa. Estamos aqui para te atender com excelência.
              </p>
              <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-primary/80">
                Ver serviços
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            {/* Veterinário */}
            <Link
              to="/area-veterinaria"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <PawPrint className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Soluções para seus pacientes</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                Oferecemos ressonância magnética com os mais altos padrões de qualidade do mercado. Diagnóstico preciso e otimização energética.
              </p>
              <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-primary/80">
                Área Veterinária
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Serviços detalhados — Manutenção + Lab */}
      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Tecnologia e expertise reunidas em um só lugar
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Um centro equipado para atender todas as demandas em manutenção, testes e reparos de equipamentos médicos, com equipe certificada internacionalmente e cobertura nacional.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Manutenção */}
            <Link
              to="/servicos/manutencao"
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
            >
              <h3 className="mb-3 text-xl font-bold text-foreground">Serviços de Manutenção</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Atuamos com nossos serviços em todo território nacional realizando manutenções preventivas e corretivas que podem ser realizadas avulsas ou em contratos de prestação de serviço de mão de obra com e sem peças.
              </p>
              <span className="inline-flex items-center text-sm font-semibold text-primary">
                Peça um orçamento
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            {/* Laboratório */}
            <Link
              to="/servicos/reparo"
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
            >
              <h3 className="mb-3 text-xl font-bold text-foreground">Laboratório de Eletrônica</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Contamos com um laboratório próprio especializado no reparo de bobinas, fontes, placas e periféricos. Processo rigoroso de análise, recuperação e testes.
              </p>
              <span className="inline-flex items-center text-sm font-semibold text-primary">
                Saiba mais
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Produtos Mindray */}
      <MindrayHighlight />

      {/* 5. Clientes e Depoimentos */}
      <TestimonialsBlock />

      {/* 6. Time Hexa / Diferenciais */}
      <section className="relative overflow-hidden bg-dark-surface py-16 text-white md:py-24">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 bg-gradient-to-b from-primary/5 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-2 text-lg font-bold text-primary">Time Hexa</h2>
              <h3 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                Comprometidos com o sucesso de nossos clientes
              </h3>
              <p className="mb-8 text-lg text-white/80">
                Nosso time tem como premissa a busca pela melhoria contínua, entendendo a necessidade do cliente e oferecendo desde o atendimento eficiente até o suporte técnico rápido e assertivo.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a
                  href="https://api.whatsapp.com/send?phone=553192368432&text=Ol%C3%A1!%20Estou%20aqui%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%2C%20por%20favor."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar com equipe de vendas
                </a>
              </Button>
            </div>
            <div className="space-y-4">
              {[
                { value: "16+", label: "Anos de experiência em equipamentos médicos" },
                { value: "5", label: "Unidades estratégicas pelo Brasil" },
                { value: "3", label: "Salas de testes para equipamentos" },
                { value: "24h", label: "SLA de atendimento presencial" },
              ].map((stat) => (
                <div key={stat.value} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
                  <div className="text-3xl font-extrabold text-primary">{stat.value}</div>
                  <p className="text-sm text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. HexAI */}
      <HexAIHighlight />

      {/* 8. Blog */}
      <BlogHighlight />

      {/* 9. Diferenciais */}
      <DifferentialsGrid />

      {/* 10. CTA Final + Contato rápido */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Vamos conversar sobre sua operação?
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Preencha o formulário e receba uma avaliação personalizada de um especialista Hexamedical. Sem compromisso.
              </p>
              <div className="space-y-4 text-sm text-muted-foreground">
                {[
                  "Resposta em até 24 horas úteis",
                  "Avaliação técnica gratuita",
                  "16+ anos de experiência em equipamentos médicos",
                  "Cobertura em todo o território nacional",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
              <ContactForm variant="compact" />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default Index;
