import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import { mindrayProducts } from "@/data/mindray-products";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const MindrayHub = () => {
  const { t } = useTranslation();

  const advantages = t("mindrayHub.advantages", { returnObjects: true }) as string[];

  return (
    <Layout>
      <Helmet>
        <title>{t("mindrayHub.pageTitle")}</title>
        <meta name="description" content={t("mindrayHub.pageDesc")} />
      </Helmet>

      <PageBreadcrumb items={[{ label: t("mindray.badge") }]} />

      <HeroSection
        headline={t("mindrayHub.heroHeadline")}
        subtitle={t("mindrayHub.heroSubtitle")}
        ctaPrimaryLabel={t("common.requestProposal")}
        ctaPrimaryHref="/contato"
        ctaSecondaryLabel={t("common.talkToSpecialist")}
        ctaSecondaryHref="/contato"
      />

      {/* Product Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              {t("mindrayHub.fullLineTitle")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {t("mindrayHub.fullLineSubtitle")}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {mindrayProducts.map((product) => (
              <Link
                key={product.slug}
                to={`/produtos-mindray/${product.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden bg-white p-6">
                  <img
                    src={product.image.hero}
                    alt={product.shortTitle}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <div className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">
                    {product.category}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground md:text-2xl">
                    {product.shortTitle}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {product.specs.slice(0, 4).map((s) => (
                      <span
                        key={s.label}
                        className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {s.label}: <strong className="text-foreground">{s.value}</strong>
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center text-sm font-semibold text-accent transition-colors group-hover:text-accent/80">
                    {t("common.viewCompleteDetails")}
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hexamedical + Mindray */}
      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {t("mindrayHub.whyTitle")}
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                {t("mindrayHub.whySubtitle")}
              </p>
              <ul className="space-y-3">
                {Array.isArray(advantages) && advantages.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 p-12 text-center">
              <div className="text-5xl font-extrabold text-primary">16+</div>
              <div className="mt-2 text-sm font-bold uppercase tracking-wider text-foreground">{t("mindrayHub.yearsExperience")}</div>
              <p className="mt-2 text-sm text-muted-foreground">{t("mindrayHub.yearsExperienceDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">
            {t("mindrayHub.comparisonTitle")}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left font-bold text-foreground">{t("mindrayHub.comparisonHeaders.feature")}</th>
                  <th className="p-4 text-center font-bold text-foreground">Detector Flat</th>
                  <th className="p-4 text-center font-bold text-foreground">DigiEye 330</th>
                  <th className="p-4 text-center font-bold text-foreground">DigiEye 350</th>
                  <th className="p-4 text-center font-bold text-foreground">MobiEye 700</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { labelKey: "type", values: [t("mindrayHub.comparisonValues.wireless"), t("mindrayHub.comparisonValues.fixed"), t("mindrayHub.comparisonValues.fixedAdvanced"), t("mindrayHub.comparisonValues.mobile")] },
                  { labelKey: "generator", values: ["—", "30/50/65", "30/50/65", "30/50"] },
                  { labelKey: "detectorWeight", values: ["3,3 kg", "—", "—", "3,3 kg"] },
                  { labelKey: "tableLoad", values: ["100/200 kg", "275 kg", "275 kg", "—"] },
                  { labelKey: "rfRemote", values: ["—", "—", "✓", "✓"] },
                  { labelKey: "touchDisplay", values: ["—", "—", "✓", "✓ (19″)"] },
                  { labelKey: "micoShare", values: ["—", "✓", "✓", "✓"] },
                  { labelKey: "mobility", values: [t("mindrayHub.comparisonValues.portable"), t("mindrayHub.comparisonValues.fixed"), t("mindrayHub.comparisonValues.fixed"), t("mindrayHub.comparisonValues.motorized")] },
                ].map((row, i) => (
                  <tr key={row.labelKey} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    <td className="p-4 font-medium text-foreground">{t(`mindrayHub.comparisonHeaders.${row.labelKey}`)}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="p-4 text-center text-muted-foreground">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTABanner
        headline={t("mindrayHub.ctaHeadline")}
        subtitle={t("mindrayHub.ctaSubtitle")}
        ctaLabel={t("common.requestProposal")}
        secondaryLabel={t("mindrayHub.ctaSecondary")}
        secondaryHref="/contato"
      />
    </Layout>
  );
};

export default MindrayHub;