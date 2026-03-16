import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import { Play } from "lucide-react";

type SupportVideo = {
  id: string; // YouTube video ID
  title: string;
  description: string;
};

const videos: SupportVideo[] = [
  { id: "SdIAEsge0Yo", title: "S-Scan: visão geral de operação", description: "Introdução prática ao uso do equipamento e fluxo inicial de trabalho." },
  { id: "BVSXoYklYkw", title: "Preparação do exame no S-Scan", description: "Configuração inicial e checagens antes de iniciar a rotina de aquisição." },
  { id: "MewFTpT3jZc", title: "Posicionamento do paciente — Coluna", description: "Boas práticas para posicionamento seguro e reprodutível em exames de coluna." },
  { id: "7R1YuaNlmBg", title: "Posicionamento do paciente — Joelho", description: "Técnica recomendada para ganho de qualidade em exames de joelho." },
  { id: "7DxwXZS2bpQ", title: "Posicionamento do paciente — Ombro", description: "Ajustes de posicionamento e estabilidade para exames de ombro." },
  { id: "QEIscmXXsho", title: "Troca e seleção de bobinas", description: "Procedimento correto para seleção e troca de bobinas no dia a dia." },
  { id: "2BL7qsijFUk", title: "Calibração e validação diária", description: "Rotina de calibração para manter consistência e qualidade de imagem." },
  { id: "5kbIFdms24U", title: "Checklist de operação segura", description: "Checklist essencial de segurança e eficiência para operadores." },
  { id: "vIw36ukspR8", title: "Protocolos de exame: ajuste rápido", description: "Ajuste de protocolos para otimizar tempo e padronização de exames." },
  { id: "v6VkzqegyMs", title: "Qualidade de imagem: correções comuns", description: "Como corrigir artefatos e melhorar a nitidez com ajustes simples." },
  { id: "tZVo_wCGb9g", title: "Fluxo de trabalho do operador", description: "Organização da rotina para aumentar produtividade e reduzir retrabalho." },
  { id: "8w-0I87m0t4", title: "Manutenção básica do operador", description: "Cuidados operacionais preventivos para melhor desempenho do equipamento." },
  { id: "SYkG_bwn5EI", title: "Erros frequentes e como resolver", description: "Guia rápido para diagnóstico de falhas comuns no atendimento diário." },
  { id: "uOdZrhVXwvA", title: "Boas práticas finais de suporte", description: "Recomendações finais para operação estável e suporte técnico eficiente." },
];

const isRealVideoId = (id: string) => !!id;

const Apoio = () => {
  const { t } = useTranslation();
  const hasPublishedVideos = videos.some((video) => isRealVideoId(video.id));

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
            {videos.map((video, i) => {
              const published = isRealVideoId(video.id);
              return (
                <article
                  key={i}
                  className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {published ? (
                    <div className="relative h-44 bg-black">
                      <iframe
                        className="h-full w-full"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary transition-transform group-hover:scale-110">
                        <Play className="h-6 w-6" />
                      </div>
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-1 font-bold text-foreground">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.description}</p>
                  </div>
                </article>
              );
            })}
          </div>

          {!hasPublishedVideos && (
            <p className="mt-8 text-center text-sm text-muted-foreground">
              {t("apoio.comingSoon")} Substitua os IDs VIDEO_ID_x pelos IDs reais do YouTube para publicar os vídeos.
            </p>
          )}
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default Apoio;
