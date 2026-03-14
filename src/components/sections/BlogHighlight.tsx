import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
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
];

const BlogHighlight = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
              Conteúdo em destaque
            </h2>
            <p className="max-w-xl text-muted-foreground">
              Insights, guias técnicos e novidades do mercado de diagnóstico por imagem.
            </p>
          </div>
          <Link to="/blog" className="hidden items-center gap-1 text-sm font-semibold text-accent hover:text-accent/80 md:flex">
            Ver todos
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
                <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="mb-2 inline-block w-fit rounded-full bg-accent/10 px-3 py-0.5 text-xs font-semibold text-accent">
                  {post.category}
                </span>
                <h3 className="mb-2 font-bold text-foreground group-hover:text-accent transition-colors">{post.title}</h3>
                <p className="mb-4 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(post.date).toLocaleDateString("pt-BR")}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
            Ver todos os artigos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlight;
