import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import CTABanner from "@/components/sections/CTABanner";
import FAQSection from "@/components/sections/FAQSection";
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight, Sparkles, BarChart3, Zap, CheckCircle2, Monitor } from "lucide-react";
import { images } from "@/data/images";

const featureIcons = [Sparkles, BarChart3, Zap, Monitor];
const featureKeys = ["smartAnalysis", "productivity", "integration", "interface"];

const compatibility = [
  "PACS Pixeon",
  "PACS Carestream",
  "RIS MV",
  "RIS Tasy",
  "Sistemas DICOM padrão",
  "Esaote eVision",
];

const stepKeys = ["analysis", "config", "training", "goLive"];
const faqKeys = ["q1", "q2", "q3", "q4"];

const HexAIPage = () => {
  const { t } = useTranslation();

  const faq = faqKeys.map((k) => ({
    question: t(`hexaiPage.faq.${k}.question`),
    answer: t(`hexaiPage.faq.${k}.answer`),
  }));

  return (
    <Layout>
      <Helmet>
        <title>{t("hexaiPage.pageTitle")}</title>
        <meta name="description" content={t("hexaiPage.pageDesc")} />
      </Helmet>

      <PageBreadcrumb items={[{ label: "HexAI" }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-dark-surface text-white">
        <div className="absolute inset-0">
          <img src={images.produtos.hexai.hero} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-surface/75 via-dark-surface/55 to-dark-surface/30" />
        </div>
        <div className="container relative z-10 py-20 md:py-28 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Brain className="h-4 w-4" />
              {t("hexaiPage.aiBadge")}
            </div>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              {t("hexaiPage.heroHeadline").split("<1>")[0]}<span className="text-primary">40%</span>{t("hexaiPage.heroHeadline").split("</1>")[1] || ""}
            </h1>
            <p className="mb-8 text-lg text-white/80 md:text-xl">
              {t("hexaiPage.heroSubtitle")}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/contato">
                  {t("common.requestDemo")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/60 bg-primary/10 text-white hover:bg-primary/20">
                <a href="https://api.whatsapp.com/send?phone=553192368432&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20HexAI." target="_blank" rel="noopener noreferrer">
                  {t("common.talkToSpecialist")}
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
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">{t("hexaiPage.featuresTitle")}</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {t("hexaiPage.featuresSubtitle")}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featureKeys.map((key, i) => {
              const Icon = featureIcons[i];
              return (
                <div key={key} className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-bold text-foreground">{t(`hexaiPage.features.${key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`hexaiPage.features.${key}.description`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compatibility */}
      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">{t("hexaiPage.compatibilityTitle")}</h2>
              <p className="mb-8 text-muted-foreground">
                {t("hexaiPage.compatibilityDesc")}
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
            <div className="overflow-hidden rounded-2xl border border-border">
              <img src={images.produtos.hexai.thumb} alt="HexAI" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Pre-installation Flow */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">{t("hexaiPage.implantationTitle")}</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {t("hexaiPage.implantationSubtitle")}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stepKeys.map((key, i) => (
              <div key={key} className="relative rounded-xl border border-border bg-card p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  {i + 1}
                </div>
                <h3 className="mb-2 font-bold text-foreground">{t(`hexaiPage.steps.${key}.title`)}</h3>
                <p className="text-sm text-muted-foreground">{t(`hexaiPage.steps.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faq} />

      <CTABanner
        headline={t("hexaiPage.ctaHeadline")}
        subtitle={t("hexaiPage.ctaSubtitle")}
      />
    </Layout>
  );
};

export default HexAIPage;