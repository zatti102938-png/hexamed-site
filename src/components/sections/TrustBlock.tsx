import { TrendingUp, MapPin, Award, Wrench } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "+500", label: "Equipamentos atendidos" },
  { icon: MapPin, value: "5 Unidades", label: "SP, RJ, BH, GO e SC" },
  { icon: Award, value: "+16 anos", label: "De experiência no mercado" },
  { icon: Wrench, value: "3 Salas", label: "De testes para equipamentos" },
];

const TrustBlock = () => {
  return (
    <section className="border-y border-border bg-card py-16 md:py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            Confiança comprovada
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Números que refletem nossa dedicação ao mercado de diagnóstico por imagem.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <stat.icon className="h-6 w-6" />
              </div>
              <span className="text-3xl font-extrabold text-foreground">{stat.value}</span>
              <span className="mt-1 text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBlock;
