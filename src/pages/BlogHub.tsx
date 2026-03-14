import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import { Calendar, ArrowRight } from "lucide-react";
import { images } from "@/data/images";

const posts = [
  {
    slug: "avancos-ressonancia-coluna",
    title: "Avanços na Ressonância Magnética da Coluna Vertebral: Inovação e Diagnósticos Mais Precisos",
    excerpt: "Descubra como as novas tecnologias de RM estão revolucionando o diagnóstico de patologias da coluna vertebral com maior precisão e conforto.",
    date: "2025-05-10",
    category: "Tecnologia",
    image: images.blog.avancosRessonancia,
  },
  {
    slug: "mitos-e-verdades-ressonancia-magnetica",
    title: "Mitos e verdades que você precisa saber sobre a ressonância magnética",
    excerpt: "O exame de RM oferece imagens de alta resolução que auxiliam no diagnóstico e tratamento de lesões. Saiba o que é verdade e o que é mito.",
    date: "2024-10-15",
    category: "Educação",
    image: images.blog.mitosEVerdades,
  },
  {
    slug: "ressonancia-magnetica-baixo-campo",
    title: "Tudo o que você precisa saber sobre a ressonância magnética de baixo campo",
    excerpt: "Conheça o sistema de RM de baixo campo e como essa ferramenta atua com campos magnéticos de menor intensidade para diagnósticos eficazes.",
    date: "2024-10-08",
    category: "Guia",
    image: images.blog.rmBaixoCampo,
  },
  {
    slug: "importancia-manutencao-preventiva",
    title: "A importância da manutenção preventiva em equipamentos de ressonância magnética",
    excerpt: "Entenda por que a manutenção preventiva é essencial para garantir a longevidade, segurança e desempenho dos seus equipamentos de RM.",
    date: "2024-09-20",
    category: "Manutenção",
    image: images.blog.defaultThumb,
  },
];

const BlogHub = () => {
  return (
    <Layout>
      <Helmet>
        <title>Blog — Hexamedical | Conteúdo sobre Diagnóstico por Imagem</title>
        <meta name="description" content="Insights, guias técnicos e novidades do mercado de diagnóstico por imagem. Artigos sobre ressonância magnética, manutenção e tecnologia médica." />
      </Helmet>

      <PageBreadcrumb items={[{ label: "Blog" }]} />

      <HeroSection
        headline="Blog Hexamedical"
        subtitle="Insights, guias técnicos e novidades do mercado de diagnóstico por imagem."
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10" />
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-2 inline-block w-fit rounded-full bg-accent/10 px-3 py-0.5 text-xs font-semibold text-accent">
                    {post.category}
                  </span>
                  <h2 className="mb-2 text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="mb-4 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString("pt-BR")}
                    </div>
                    <span className="flex items-center gap-1 text-xs font-semibold text-accent opacity-0 transition-opacity group-hover:opacity-100">
                      Ler artigo <ArrowRight className="h-3.5 w-3.5" />
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
