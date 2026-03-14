import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import { Play } from "lucide-react";

const videos = [
  { id: "VIDEO_ID_1", title: "Como ligar o S-Scan", description: "Passo a passo para inicializar o equipamento S-Scan Esaote." },
  { id: "VIDEO_ID_2", title: "Posicionamento do paciente — Coluna", description: "Técnica correta de posicionamento para exames de coluna no S-Scan." },
  { id: "VIDEO_ID_3", title: "Troca de bobinas — S-Scan", description: "Como realizar a troca segura de bobinas no S-Scan." },
  { id: "VIDEO_ID_4", title: "Calibração diária do equipamento", description: "Procedimento de calibração diária para garantir qualidade de imagem." },
  { id: "VIDEO_ID_5", title: "Posicionamento — Joelho", description: "Técnica de posicionamento para exames de joelho." },
  { id: "VIDEO_ID_6", title: "Posicionamento — Ombro", description: "Técnica de posicionamento para exames de ombro." },
  { id: "VIDEO_ID_7", title: "Manutenção básica do operador", description: "Verificações que o operador pode fazer diariamente." },
  { id: "VIDEO_ID_8", title: "Resolução de erros comuns", description: "Como diagnosticar e resolver os erros mais frequentes." },
];

const Apoio = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Helmet>
        <title>{t("apoio.pageTitle")}</title>
        <meta name="description" content={t("apoio.heroSubtitle")} />
      </Helmet>

      <PageBreadcrumb items={[{ label: t("nav.support") }]} />

      <HeroSection
        headline={t("apoio.heroHeadline")}
        subtitle={t("apoio.heroSubtitle")}
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">{t("apoio.videosTitle")}</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {t("apoio.videosSubtitle")}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {videos.map((video, i) => (
              <div
                key={i}
                className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary transition-transform group-hover:scale-110">
                    <Play className="h-6 w-6" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-1 font-bold text-foreground">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            {t("apoio.comingSoon")}
          </p>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default Apoio;
