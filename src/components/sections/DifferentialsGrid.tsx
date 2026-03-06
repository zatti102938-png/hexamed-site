import { Shield, Microscope, Users, Package, FileCheck, Clock, LucideIcon } from "lucide-react";

interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}

const differentials: Differential[] = [
  {
    icon: Shield,
    title: "Cobertura Nacional",
    description: "Unidades em SP, RJ, BH, Goiânia e Florianópolis. Atendimento presencial e remoto em todo o Brasil.",
  },
  {
    icon: Microscope,
    title: "Laboratório Próprio",
    description: "Reparo de bobinas, placas eletrônicas, fontes e periféricos com 3 salas de testes dedicadas.",
  },
  {
    icon: Users,
    title: "Equipe Certificada Internacionalmente",
    description: "Técnicos de campo e laboratório com vasta experiência em equipamentos de múltiplos fabricantes.",
  },
  {
    icon: Package,
    title: "Peças Originais",
    description: "Trabalhamos com peças originais e homologadas, com logística express para entrega rápida.",
  },
  {
    icon: FileCheck,
    title: "Contratos Flexíveis",
    description: "Planos personalizados com ou sem peças, preventiva e corretiva, adaptados à sua realidade.",
  },
  {
    icon: Clock,
    title: "+16 Anos de Experiência",
    description: "Mais de 16 anos dedicados ao mercado de diagnóstico por imagem com foco em Ressonância Magnética.",
  },
];

const DifferentialsGrid = () => {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Por que escolher a Hexamedical?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Somos referência em soluções de Ressonância Magnética com diferenciais que garantem segurança, performance e previsibilidade para sua operação.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsGrid;
