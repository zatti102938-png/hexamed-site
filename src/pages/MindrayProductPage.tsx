import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import HeroSection from "@/components/sections/HeroSection";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";
import TrustBlock from "@/components/sections/TrustBlock";
import { mindrayProductsMap, mindrayProducts } from "@/data/mindray-products";
import { CheckCircle2, Target, Zap, ArrowRight, Wrench, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const MindrayProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? mindrayProductsMap[slug] : null;

  if (!product) return <Navigate to="/produtos-mindray" replace />;

  const otherProducts = mindrayProducts.filter((p) => p.slug !== slug);

  return (
    <Layout>
      <Helmet>
        <title>{product.title} — Hexamedical</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <PageBreadcrumb
        items={[
          { label: "Produtos Mindray", href: "/produtos-mindray" },
          { label: product.shortTitle },
        ]}
      />

      {/* Hero with product image */}
      <HeroSection
        headline={product.heroHeadline}
        subtitle={product.heroSubtitle}
        ctaPrimaryLabel="Solicitar Proposta"
        ctaPrimaryHref="/contato"
        ctaSecondaryLabel="Falar com Especialista"
        ctaSecondaryHref="/contato"
        backgroundImage={product.image.hero}
      />

      {/* Product Image Gallery */}
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-xl border border-border">
              <img
                src={product.image.hero}
                alt={`${product.shortTitle} — vista principal`}
                className="h-full w-full object-contain bg-white p-4"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-border">
              <img
                src={product.image.thumb}
                alt={`${product.shortTitle} — detalhe do equipamento`}
                className="h-full w-full object-contain bg-white p-4"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-border">
              <img
                src={product.image.gallery01}
                alt={`${product.shortTitle} — vista em contexto clínico`}
                className="h-full w-full object-contain bg-white p-4"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
            Principais Benefícios
          </h2>
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {product.benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 rounded-xl border border-border bg-background p-5">
                <Zap className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">
            Especificações Técnicas
          </h2>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-border">
            {product.specs.map((spec, i) => (
              <div
                key={i}
                className={`flex items-center justify-between p-4 ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}
              >
                <span className="font-medium text-foreground">{spec.label}</span>
                <span className="text-right text-muted-foreground">{spec.value}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Especificações extraídas do folheto oficial Mindray. Sujeitas a confirmação técnica.
          </p>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">
            Diferenciais
          </h2>
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {product.differentials.map((d) => (
              <div key={d} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-foreground">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications with product image */}
      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                Aplicações Clínicas
              </h2>
              <p className="mb-6 text-muted-foreground">
                Ideal para instituições que buscam qualidade de imagem, eficiência operacional e ergonomia no fluxo de trabalho radiológico.
              </p>
              <ul className="space-y-3">
                {product.applications.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <Target className="h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-white p-6">
              <img
                src={product.image.thumb}
                alt={`${product.shortTitle} em contexto clínico`}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Flow */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">
            Fluxo de Aquisição e Suporte
          </h2>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-5">
            {product.supportFlow.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  {i + 1}
                </div>
                <p className="text-sm text-foreground">{step}</p>
                {i < product.supportFlow.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-6 hidden h-5 w-5 text-accent/40 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            <div className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center">
              <Wrench className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-lg font-bold text-foreground">Solicitar Proposta</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Receba uma proposta técnica e comercial personalizada.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/contato">Solicitar Proposta</Link>
              </Button>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center">
              <Download className="mb-4 h-10 w-10 text-accent" />
              <h3 className="mb-2 text-lg font-bold text-foreground">Ficha Técnica</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Baixe o folheto completo com todas as especificações.
              </p>
              <Button asChild variant="outline">
                <Link to="/contato">Solicitar Ficha Técnica</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <TrustBlock />

      {/* FAQ */}
      <FAQSection items={product.faq} />

      {/* Other Products */}
      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
            Outros Produtos Mindray
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {otherProducts.map((p) => (
              <Link
                key={p.slug}
                to={`/produtos-mindray/${p.slug}`}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md"
              >
                <div className="h-40 overflow-hidden bg-white p-4">
                  <img
                    src={p.image.thumb}
                    alt={p.shortTitle}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-1 text-xs font-bold uppercase tracking-widest text-accent">{p.category}</div>
                  <h3 className="mb-2 font-bold text-foreground">{p.shortTitle}</h3>
                  <span className="inline-flex items-center text-xs font-semibold text-accent">
                    Ver detalhes
                    <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline={`Interessado no ${product.shortTitle}?`}
        subtitle="Solicite uma proposta técnica e comercial personalizada para sua instituição."
        ctaLabel="Solicitar Proposta"
      />
    </Layout>
  );
};

export default MindrayProductPage;
