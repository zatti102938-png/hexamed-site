import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import HeroSection from "@/components/sections/HeroSection";
import SolutionCard from "@/components/sections/SolutionCard";
import CTABanner from "@/components/sections/CTABanner";
import { solutionCategories } from "@/data/solutions";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { images } from "@/data/images";

const rmProductKeys = [
  { slug: "rm-magnifico-open", key: "magnificoOpen", image: images.produtos.magnificoOpen.thumb },
  { slug: "rm-s-scan", key: "sScan", image: images.produtos.sScan.thumb },
  { slug: "rm-o-scan", key: "oScan", image: images.produtos.oScan.thumb },
  { slug: "rm-g-scan", key: "gScan", image: images.produtos.gScan.thumb },
];

const categoryI18nMap: Record<string, string> = {
  "ressonancia-magnetica": "solutionCategories.ressonanciaMagnetica",
  "bombas-injetoras": "solutionCategories.bombasInjetoras",
  "hexai": "solutionCategories.hexaiCat",
};

const SolucoesHub = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Helmet>
        <title>{t("solucoesHub.pageTitle")}</title>
        <meta name="description" content={t("solucoesHub.pageDesc")} />
      </Helmet>

      <PageBreadcrumb items={[{ label: t("nav.products") }]} />

      <HeroSection
        headline={t("solucoesHub.heroHeadline")}
        subtitle={t("solucoesHub.heroSubtitle")}
        ctaSecondaryLabel={t("common.viewServices")}
        ctaSecondaryHref="/servicos"
        variant="light"
      />

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              {t("solucoesHub.categoriesTitle")}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutionCategories.map((sol) => {
              const i18nKey = categoryI18nMap[sol.slug];
              return (
                <SolutionCard
                  key={sol.slug}
                  title={i18nKey ? t(`${i18nKey}.title`) : sol.title}
                  description={i18nKey ? t(`${i18nKey}.description`) : sol.description}
                  href={`/solucoes/${sol.slug}`}
                  icon={sol.icon}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* RM Products Grid */}
      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              {t("solucoesHub.rmLineTitle")}
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {t("solucoesHub.rmLineSubtitle")}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rmProductKeys.map((product) => (
              <Link
                key={product.slug}
                to={`/solucoes/${product.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={product.image} alt={`RM Esaote ${t(`solucoesHub.rmProducts.${product.key}.title`)}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-foreground">RM Esaote {t(`solucoesHub.rmProducts.${product.key}.title`)}</h3>
                  <p className="mb-4 flex-1 text-sm text-muted-foreground">{t(`solucoesHub.rmProducts.${product.key}.description`)}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-accent group-hover:text-accent/80">
                    {t("common.viewDetails")} <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default SolucoesHub;