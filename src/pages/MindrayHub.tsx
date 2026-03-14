import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import { mindrayProducts } from "@/data/mindray-products";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const advantages = [
  "Tecnologia de ponta com fabricação Mindray de alto padrão",
  "Suporte técnico completo pela Hexamedical em todo o Brasil",
  "Contratos de manutenção flexíveis com SLA garantido",
  "Treinamento operacional para sua equipe",
  "Compatibilidade e integração entre os equipamentos da linha",
];

const MindrayHub = () => {
  return (
    <Layout>
      <Helmet>
        <title>Produtos Mindray — Radiologia Digital | Hexamedical</title>
        <meta
          name="description"
          content="Linha completa de produtos Mindray para radiologia digital: Detector Flat Panel, DigiEye 330, DigiEye 350 e MobiEye 700. Suporte técnico Hexamedical em todo o Brasil."
        />
      </Helmet>

      <PageBreadcrumb items={[{ label: "Produtos Mindray" }]} />

      <HeroSection
        headline="Radiologia Digital Mindray: Tecnologia e Performance"
        subtitle="A Hexamedical é distribuidora autorizada dos sistemas de radiologia digital Mindray no Brasil. Equipamentos de alta performance com suporte técnico especializado e cobertura nacional."
        ctaPrimaryLabel="Solicitar Proposta"
        ctaPrimaryHref="/contato"
        ctaSecondaryLabel="Falar com Especialista"
        ctaSecondaryHref="/contato"
      />

      {/* Product Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Conheça a Linha Completa
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Soluções de radiologia digital para cada necessidade clínica — de detectores wireless a sistemas fixos e móveis de alta performance.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {mindrayProducts.map((product) => (
              <Link
                key={product.slug}
                to={`/produtos-mindray/${product.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg md:p-8"
              >
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
                  Ver detalhes completos
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
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
                Por que adquirir Mindray com a Hexamedical?
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Além de equipamentos de alto padrão, você conta com a expertise de mais de 16 anos em equipamentos médicos, suporte técnico especializado e cobertura em todo o Brasil.
              </p>
              <ul className="space-y-3">
                {advantages.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 p-12 text-center">
              <div className="text-5xl font-extrabold text-primary">16+</div>
              <div className="mt-2 text-sm font-bold uppercase tracking-wider text-foreground">Anos de Experiência</div>
              <p className="mt-2 text-sm text-muted-foreground">em equipamentos médicos e diagnóstico por imagem</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">
            Comparativo de Modelos
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left font-bold text-foreground">Característica</th>
                  <th className="p-4 text-center font-bold text-foreground">Detector Flat</th>
                  <th className="p-4 text-center font-bold text-foreground">DigiEye 330</th>
                  <th className="p-4 text-center font-bold text-foreground">DigiEye 350</th>
                  <th className="p-4 text-center font-bold text-foreground">MobiEye 700</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Tipo", values: ["Detector Wireless", "Fixo", "Fixo Avançado", "Móvel"] },
                  { label: "Gerador (kW)", values: ["—", "30/50/65", "30/50/65", "30/50"] },
                  { label: "Peso detector", values: ["3,3 kg", "—", "—", "3,3 kg"] },
                  { label: "Carga mesa", values: ["100/200 kg", "275 kg", "275 kg", "—"] },
                  { label: "Controle remoto RF", values: ["—", "—", "✓", "✓"] },
                  { label: "Display touch", values: ["—", "—", "✓", "✓ (19″)"] },
                  { label: "MiCo+ / M-Share", values: ["—", "✓", "✓", "✓"] },
                  { label: "Mobilidade", values: ["Portátil", "Fixo", "Fixo", "Motorizado"] },
                ].map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    <td className="p-4 font-medium text-foreground">{row.label}</td>
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
        headline="Pronto para modernizar sua radiologia?"
        subtitle="Solicite uma proposta técnica e comercial personalizada para os produtos Mindray."
        ctaLabel="Solicitar Proposta"
        secondaryLabel="Baixar fichas técnicas"
        secondaryHref="/contato"
      />
    </Layout>
  );
};

export default MindrayHub;
