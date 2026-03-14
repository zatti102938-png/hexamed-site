import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, Calendar } from "lucide-react";
import { images } from "@/data/images";

const posts = [
  {
    slug: "avancos-ressonancia-coluna",
    titlePt: "Avanços na Ressonância Magnética da Coluna Vertebral: Inovação e Diagnósticos Mais Precisos",
    titleEn: "Advances in Spinal MRI: Innovation and More Precise Diagnoses",
    titleEs: "Avances en Resonancia Magnética de Columna Vertebral: Innovación y Diagnósticos Más Precisos",
    excerptPt: "Descubra como as novas tecnologias de RM estão revolucionando o diagnóstico de patologias da coluna vertebral com maior precisão e conforto.",
    excerptEn: "Discover how new MRI technologies are revolutionizing spine pathology diagnosis with greater precision and comfort.",
    excerptEs: "Descubre cómo las nuevas tecnologías de RM están revolucionando el diagnóstico de patologías de la columna vertebral con mayor precisión y comodidad.",
    date: "2025-05-10",
    categoryPt: "Tecnologia",
    categoryEn: "Technology",
    categoryEs: "Tecnología",
    image: images.blog.avancosRessonancia,
  },
  {
    slug: "mitos-e-verdades-ressonancia-magnetica",
    titlePt: "Mitos e verdades que você precisa saber sobre a ressonância magnética",
    titleEn: "Myths and truths you need to know about MRI",
    titleEs: "Mitos y verdades que necesitas saber sobre la resonancia magnética",
    excerptPt: "O exame de RM oferece imagens de alta resolução que auxiliam no diagnóstico e tratamento de lesões. Saiba o que é verdade e o que é mito.",
    excerptEn: "MRI offers high-resolution images that assist in diagnosing and treating injuries. Learn what's true and what's myth.",
    excerptEs: "El examen de RM ofrece imágenes de alta resolución que ayudan en el diagnóstico y tratamiento de lesiones. Descubre qué es verdad y qué es mito.",
    date: "2024-10-15",
    categoryPt: "Educação",
    categoryEn: "Education",
    categoryEs: "Educación",
    image: images.blog.mitosEVerdades,
  },
  {
    slug: "ressonancia-magnetica-baixo-campo",
    titlePt: "Tudo o que você precisa saber sobre a ressonância magnética de baixo campo",
    titleEn: "Everything you need to know about low-field MRI",
    titleEs: "Todo lo que necesitas saber sobre la resonancia magnética de bajo campo",
    excerptPt: "Conheça o sistema de RM de baixo campo e como essa ferramenta atua com campos magnéticos de menor intensidade para diagnósticos eficazes.",
    excerptEn: "Learn about the low-field MRI system and how this tool works with lower-intensity magnetic fields for effective diagnoses.",
    excerptEs: "Conoce el sistema de RM de bajo campo y cómo esta herramienta actúa con campos magnéticos de menor intensidad para diagnósticos eficaces.",
    date: "2024-10-08",
    categoryPt: "Guia",
    categoryEn: "Guide",
    categoryEs: "Guía",
    image: images.blog.rmBaixoCampo,
  },
];

const BlogHighlight = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) || "pt";

  const getField = (post: typeof posts[0], field: "title" | "excerpt" | "category") => {
    const key = `${field}${lang === "en" ? "En" : lang === "es" ? "Es" : "Pt"}` as keyof typeof post;
    return (post[key] as string) || (post[`${field}Pt` as keyof typeof post] as string);
  };

  const dateLang = lang === "en" ? "en-US" : lang === "es" ? "es-ES" : "pt-BR";

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
              {t("blog.title")}
            </h2>
            <p className="max-w-xl text-muted-foreground">
              {t("blog.subtitle")}
            </p>
          </div>
          <Link to="/blog" className="hidden items-center gap-1 text-sm font-semibold text-accent hover:text-accent/80 md:flex">
            {t("common.viewAll")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={post.image} alt={getField(post, "title")} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="mb-2 inline-block w-fit rounded-full bg-accent/10 px-3 py-0.5 text-xs font-semibold text-accent">
                  {getField(post, "category")}
                </span>
                <h3 className="mb-2 font-bold text-foreground group-hover:text-accent transition-colors">{getField(post, "title")}</h3>
                <p className="mb-4 flex-1 text-sm text-muted-foreground">{getField(post, "excerpt")}</p>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(post.date).toLocaleDateString(dateLang)}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
            {t("common.viewAllArticles")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlight;
