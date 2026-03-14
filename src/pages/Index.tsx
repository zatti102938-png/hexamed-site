import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import MindrayHighlight from "@/components/sections/MindrayHighlight";
import TestimonialsBlock from "@/components/sections/TestimonialsBlock";
import CeoVideoBlock from "@/components/sections/CeoVideoBlock";
import HexAIHighlight from "@/components/sections/HexAIHighlight";
import BlogHighlight from "@/components/sections/BlogHighlight";
import DifferentialsGrid from "@/components/sections/DifferentialsGrid";
import CTABanner from "@/components/sections/CTABanner";
import ContactForm from "@/components/sections/ContactForm";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/data/images";

const Index = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Helmet>
        <title>Hexamedical — Especialistas em Equipamentos de Diagnóstico por Imagem</title>
        <meta name="description" content="Soluções completas em Ressonância Magnética Esaote, Radiologia Digital Mindray, serviços técnicos especializados e suporte com 16+ anos de experiência. Cobertura nacional." />
      </Helmet>

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-dark-surface text-white">
        <div className="absolute inset-0">
          <img src={images.home.heroBanner} alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-surface via-dark-surface/90 to-dark-surface/60" />
        </div>
        <div className="container relative z-10 py-20 md:py-28 lg:py-36">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-balance text-white md:text-4xl lg:text-5xl">
                {t("hero.headline")}
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/80">
                {t("hero.subtitle")}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a
                    href="https://api.whatsapp.com/send?phone=553192368432&text=Ol%C3%A1!%20Estou%20aqui%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%2C%20por%20favor."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("hero.ctaPrimary")}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary/60 bg-primary/10 text-white hover:bg-primary/20">
                  <Link to="/solucoes">
                    {t("hero.ctaSecondary")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <p className="text-lg leading-relaxed text-white/70">
                {t("hero.sideText")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Produtos + Serviços Cards */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2">
            <Link
              to="/solucoes"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={images.home.cardProdutos} alt={t("cards.productsTitle")} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-foreground">{t("cards.productsTitle")}</h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{t("cards.productsDesc")}</p>
                <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-primary/80">
                  {t("common.viewFullLine")}
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            <Link
              to="/servicos"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={images.home.cardServicos} alt={t("cards.servicesTitle")} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-foreground">{t("cards.servicesTitle")}</h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{t("cards.servicesDesc")}</p>
                <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-primary/80">
                  {t("common.viewServices")}
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Serviços detalhados */}
      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              {t("techSection.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {t("techSection.subtitle")}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Link
              to="/servicos/manutencao"
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={images.home.manutencaoThumb} alt={t("techSection.maintenanceTitle")} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-foreground">{t("techSection.maintenanceTitle")}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{t("techSection.maintenanceDesc")}</p>
                <span className="inline-flex items-center text-sm font-semibold text-primary">
                  {t("common.requestBudget")}
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            <Link
              to="/servicos/reparo"
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={images.home.laboratorioThumb} alt={t("techSection.labTitle")} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-foreground">{t("techSection.labTitle")}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{t("techSection.labDesc")}</p>
                <span className="inline-flex items-center text-sm font-semibold text-primary">
                  {t("common.learnMore")}
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <MindrayHighlight />
      <TestimonialsBlock />
      <CeoVideoBlock />

      {/* Team Hexa */}
      <section className="relative overflow-hidden bg-dark-surface py-16 text-white md:py-24">
        <div className="absolute inset-0">
          <img src={images.home.timeHexa} alt="" className="h-full w-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-dark-surface/80" />
        </div>
        <div className="container relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-2 text-lg font-bold text-primary">{t("team.label")}</h2>
              <h3 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                {t("team.title")}
              </h3>
              <p className="mb-8 text-lg text-white/80">
                {t("team.description")}
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a
                  href="https://api.whatsapp.com/send?phone=553192368432&text=Ol%C3%A1!%20Estou%20aqui%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%2C%20por%20favor."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("common.talkToSales")}
                </a>
              </Button>
            </div>
            <div className="space-y-4">
              {[
                { value: "16+", label: t("team.stats.experience") },
                { value: "5", label: t("team.stats.units") },
                { value: "3", label: t("team.stats.testRooms") },
                { value: "24h", label: t("team.stats.sla") },
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

      <HexAIHighlight />
      <BlogHighlight />
      <DifferentialsGrid />

      {/* Contact Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {t("contactSection.title")}
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                {t("contactSection.subtitle")}
              </p>
              <div className="space-y-4 text-sm text-muted-foreground">
                {[
                  t("contactSection.bullets.response"),
                  t("contactSection.bullets.evaluation"),
                  t("contactSection.bullets.experience"),
                  t("contactSection.bullets.coverage"),
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
