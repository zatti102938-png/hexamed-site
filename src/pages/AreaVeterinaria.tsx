import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import CTABanner from "@/components/sections/CTABanner";
import FAQSection from "@/components/sections/FAQSection";
import { Button } from "@/components/ui/button";
import { PawPrint, ArrowRight } from "lucide-react";
import { images } from "@/data/images";

const vetProducts = [
  {
    slug: "magnifico-vet",
    title: "Magnifico Vet",
    description: "Sistema de RM de alto campo dedicado à medicina veterinária. Abertura ampla para animais de grande porte com qualidade de imagem superior.",
    features: ["Alto campo magnético", "Abertura ampla", "Qualidade clínica superior"],
    image: images.veterinaria.magnificoVet,
  },
  {
    slug: "vet-mr-grande",
    title: "Vet-MR Grande",
    description: "Projetado para equinos e animais de grande porte. Permite exames in vivo com o animal em estação, sem necessidade de anestesia geral.",
    features: ["Animais de grande porte", "Exame em estação", "Sem anestesia geral"],
    image: images.veterinaria.vetMrGrande,
  },
  {
    slug: "o-scan-equine",
    title: "O-Scan Equine",
    description: "Sistema dedicado para extremidades de equinos. Design compacto e aberto, ideal para clínicas veterinárias especializadas.",
    features: ["Extremidades equinas", "Design compacto", "Fácil operação"],
    image: images.veterinaria.oScanEquine,
  },
];

const faq = [
  { question: "Qual a diferença entre o Magnifico Vet e o Vet-MR Grande?", answer: "O Magnifico Vet é um sistema de RM de alto campo para pequenos e médios animais, enquanto o Vet-MR Grande é projetado especificamente para equinos e animais de grande porte, permitindo exame com o animal em estação." },
  { question: "O O-Scan Equine precisa de sala blindada?", answer: "O O-Scan Equine utiliza tecnologia de baixo campo e ímã permanente, o que reduz significativamente os requisitos de blindagem." },
  { question: "Vocês oferecem suporte técnico para equipamentos veterinários?", answer: "Sim. A Hexamedical oferece suporte técnico completo, manutenção preventiva e corretiva para toda a linha veterinária Esaote." },
];

const AreaVeterinaria = () => {
  return (
    <Layout>
      <Helmet>
        <title>Área Veterinária — Ressonância Magnética Veterinária | Hexamedical</title>
        <meta name="description" content="Soluções de ressonância magnética para medicina veterinária. Equipamentos Esaote para pequenos animais, equinos e animais de grande porte." />
      </Helmet>

      <PageBreadcrumb items={[{ label: "Área Veterinária" }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-dark-surface text-white">
        <div className="absolute inset-0">
          <img src={images.veterinaria.hero} alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-surface via-dark-surface/90 to-dark-surface/60" />
        </div>
        <div className="container relative z-10 py-20 md:py-28 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <PawPrint className="h-4 w-4" />
              Medicina Veterinária
            </div>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl">
              Ressonância Magnética Veterinária
            </h1>
            <p className="mb-8 text-lg text-white/80">
              Equipamentos Esaote de alta performance para diagnóstico por imagem em medicina veterinária. Soluções para pequenos animais, equinos e animais de grande porte.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/contato">
                  Falar com Especialista
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">Linha Veterinária Esaote</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Equipamentos projetados exclusivamente para a medicina veterinária, com tecnologia italiana de referência mundial.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {vetProducts.map((product) => (
              <div
                key={product.slug}
                className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-52 items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                  <Magnet className="h-16 w-16 text-primary/30" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-bold text-foreground">{product.title}</h3>
                  <p className="mb-4 flex-1 text-sm text-muted-foreground">{product.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {product.features.map((feat) => (
                      <span key={feat} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {feat}
                      </span>
                    ))}
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/contato">Solicitar Informações</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faq} />

      <CTABanner
        headline="Invista no diagnóstico veterinário de referência"
        subtitle="Fale com nossa equipe especializada e descubra a solução ideal para sua clínica veterinária."
      />
    </Layout>
  );
};

export default AreaVeterinaria;
