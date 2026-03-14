import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import HeroSection from "@/components/sections/HeroSection";
import ServiceCard from "@/components/sections/ServiceCard";
import CTABanner from "@/components/sections/CTABanner";
import { services } from "@/data/services";
import { images } from "@/data/images";

const ServicosHub = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Helmet>
        <title>{t("servicesHub.pageTitle")}</title>
        <meta name="description" content={t("servicesHub.heroSubtitle")} />
      </Helmet>

      <PageBreadcrumb items={[{ label: t("nav.services") }]} />

      <HeroSection
        headline={t("servicesHub.heroHeadline")}
        subtitle={t("servicesHub.heroSubtitle")}
        ctaSecondaryLabel={t("hero.ctaSecondary")}
        ctaSecondaryHref="/solucoes"
        backgroundImage={images.servicos.hubHero}
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              {t("servicesHub.sectionTitle")}
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {t("servicesHub.sectionSubtitle")}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <ServiceCard
                key={svc.slug}
                title={svc.title}
                description={svc.description}
                href={`/servicos/${svc.slug}`}
                icon={svc.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default ServicosHub;
