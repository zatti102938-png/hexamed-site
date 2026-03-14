import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import { CheckCircle2, Microscope, Snowflake, GraduationCap, MonitorSpeaker, FlaskConical } from "lucide-react";
import { images } from "@/data/images";

const facilities = [
  { icon: MonitorSpeaker, title: "3 Salas de Testes", description: "Para equipamentos de tomografia, raio-x e mamografia." },
  { icon: Microscope, title: "Laboratório de Eletrônica", description: "Equipado para reparos especializados de módulos, fontes, bobinas e placas." },
  { icon: Snowflake, title: "Laboratório de Criogenia", description: "Infraestrutura para serviços criogênicos de alta precisão." },
  { icon: GraduationCap, title: "Salas de Treinamento", description: "Para educação continuada da equipe interna e treinamento de terceiros." },
  { icon: FlaskConical, title: "Showroom com Gaiola para RM", description: "Ambiente de demonstração com gaiola para ressonância magnética." },
];

const capabilities = [
  "Reparo de bobinas de ressonância magnética",
  "Reparo de placas eletrônicas e módulos",
  "Reparo de fontes de alimentação",
  "Recondicionamento de periféricos de diagnóstico por imagem",
  "Testes rigorosos de qualidade e confiabilidade pós-reparo",
  "Processo completo de análise, recuperação e validação",
];

const Estrutura = () => {
  return (
    <Layout>
      <Helmet>
        <title>Nossa Estrutura — Hexamedical</title>
        <meta name="description" content="Conheça a estrutura completa da Hexamedical: laboratórios especializados, salas de testes e showroom para equipamentos de diagnóstico por imagem." />
      </Helmet>

      <PageBreadcrumb items={[{ label: "Estrutura" }]} />

      <HeroSection
        headline="Nossa Estrutura"
        subtitle="Contamos com uma estrutura completa planejada para a entrega de serviços precisos aos nossos clientes. Infraestrutura de ponta para manutenção, testes e reparos de equipamentos médicos."
        ctaPrimaryLabel="Falar com Especialista"
        ctaPrimaryHref="/contato"
      />

      {/* Facilities Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Nossa estrutura <span className="text-primary">robusta</span> inclui:
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Capabilities */}
      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                Laboratório Especializado
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Altamente equipado para reparos especializados de peças de equipamentos médicos, com processo rigoroso de análise, recuperação e testes.
              </p>
              <ul className="space-y-3">
                {capabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img src={images.estrutura.hero} alt="Estrutura Hexamedical" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Cobertura Nacional
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
            Unidades estrategicamente localizadas para atendimento ágil em todo o Brasil.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Goiânia", "Florianópolis"].map((city) => (
              <div key={city} className="rounded-xl border border-border bg-card p-5 text-center">
                <div className="mb-2 text-2xl">📍</div>
                <h3 className="font-bold text-foreground">{city}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Quer conhecer nossa estrutura de perto?"
        subtitle="Agende uma visita e conheça nossos laboratórios, salas de testes e showroom."
        ctaLabel="Agendar Visita"
      />
    </Layout>
  );
};

export default Estrutura;
