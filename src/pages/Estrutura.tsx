import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import { CheckCircle2, Microscope, Snowflake, GraduationCap, MonitorSpeaker, FlaskConical } from "lucide-react";
import { images } from "@/data/images";

const Estrutura = () => {
  const { t } = useTranslation();

  const facilities = [
    { icon: MonitorSpeaker, titleKey: "structure.facilities.testRooms", descKey: "structure.facilities.testRoomsDesc" },
    { icon: Microscope, titleKey: "structure.facilities.lab", descKey: "structure.facilities.labDesc" },
    { icon: Snowflake, titleKey: "structure.facilities.cryogenics", descKey: "structure.facilities.cryogenicsDesc" },
    { icon: GraduationCap, titleKey: "structure.facilities.training", descKey: "structure.facilities.trainingDesc" },
    { icon: FlaskConical, titleKey: "structure.facilities.showroom", descKey: "structure.facilities.showroomDesc" },
  ];

  const capabilityKeys = [
    "structure.capabilities.coils",
    "structure.capabilities.boards",
    "structure.capabilities.powerSupply",
    "structure.capabilities.peripherals",
    "structure.capabilities.qualityTests",
    "structure.capabilities.fullProcess",
  ];

  return (
    <Layout>
      <Helmet>
        <title>{t("structure.pageTitle")}</title>
        <meta name="description" content={t("structure.heroSubtitle")} />
      </Helmet>

      <PageBreadcrumb items={[{ label: t("nav.structure") }]} />

      <HeroSection
        headline={t("structure.heroHeadline")}
        subtitle={t("structure.heroSubtitle")}
        ctaPrimaryLabel={t("common.talkToSpecialist")}
        ctaPrimaryHref="/contato"
        backgroundImage={images.estrutura.hero}
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              {t("structure.includesTitle").replace("<1>", "").replace("</1>", "")}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((item) => (
              <div
                key={item.titleKey}
                className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{t(item.titleKey)}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                {t("structure.labTitle")}
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                {t("structure.labDesc")}
              </p>
              <ul className="space-y-3">
                {capabilityKeys.map((key) => (
                  <li key={key} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img src={images.estrutura.hero} alt={t("structure.heroHeadline")} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            {t("structure.coverageTitle")}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
            {t("structure.coverageSubtitle")}
          </p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Goiânia", "Florianópolis"].map((city) => (
              <div key={city} className="rounded-xl border border-border bg-card p-5 text-center">
                <div className="mb-2 text-2xl">📍</div>
                <h3 className="font-bold text-foreground">{city}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline={t("structure.ctaHeadline")}
        subtitle={t("structure.ctaSubtitle")}
        ctaLabel={t("common.scheduleVisit")}
      />
    </Layout>
  );
};

export default Estrutura;
