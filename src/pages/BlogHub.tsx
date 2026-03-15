import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import { Calendar, ArrowRight } from "lucide-react";
import { images } from "@/data/images";

const postSlugs = [
  { slug: "avancos-ressonancia-coluna", key: "avancosRessonancia", date: "2025-05-10", image: images.blog.avancosRessonancia },
  { slug: "mitos-e-verdades-ressonancia-magnetica", key: "mitosEVerdades", date: "2024-10-15", image: images.blog.mitosEVerdades },
  { slug: "ressonancia-magnetica-baixo-campo", key: "rmBaixoCampo", date: "2024-10-08", image: images.blog.rmBaixoCampo },
  { slug: "importancia-manutencao-preventiva", key: "manutencaoPreventiva", date: "2024-09-20", image: images.blog.defaultThumb },
];

const BlogHub = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language?.startsWith("en") ? "en-US" : i18n.language?.startsWith("es") ? "es-ES" : "pt-BR";

  return (
    <Layout>
      <Helmet>
        <title>{t("blogHub.pageTitle")}</title>
        <meta name="description" content={t("blogHub.pageDesc")} />
      </Helmet>

      <PageBreadcrumb items={[{ label: t("nav.blog") }]} />

      <HeroSection
        headline={t("blogHub.heroHeadline")}
        subtitle={t("blogHub.heroSubtitle")}
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {postSlugs.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={post.image} alt={t(`blogHub.posts.${post.key}.title`)} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-2 inline-block w-fit rounded-full bg-accent/10 px-3 py-0.5 text-xs font-semibold text-accent">
                    {t(`blogHub.posts.${post.key}.category`)}
                  </span>
                  <h2 className="mb-2 text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                    {t(`blogHub.posts.${post.key}.title`)}
                  </h2>
                  <p className="mb-4 flex-1 text-sm text-muted-foreground">{t(`blogHub.posts.${post.key}.excerpt`)}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString(locale)}
                    </div>
                    <span className="flex items-center gap-1 text-xs font-semibold text-accent opacity-0 transition-opacity group-hover:opacity-100">
                      {t("common.readArticle")} <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
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

export default BlogHub;