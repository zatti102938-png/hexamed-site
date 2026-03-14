import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Radio, Scan, MonitorSpeaker, Smartphone } from "lucide-react";

const products = [
  { icon: Scan, title: "Detector Flat Panel", description: "Detector wireless ultracompacto com 3,3 kg e IP54.", href: "/produtos-mindray/detector-flat-panel" },
  { icon: MonitorSpeaker, title: "DigiEye 330", description: "Sistema fixo otimizado para eficiência elevada.", href: "/produtos-mindray/digieye-330" },
  { icon: MonitorSpeaker, title: "DigiEye 350", description: "Sistema fixo avançado com sincronização bidirecional.", href: "/produtos-mindray/digieye-350" },
  { icon: Smartphone, title: "MobiEye 700", description: "Sistema móvel com 9 graus de liberdade.", href: "/produtos-mindray/mobieye-700" },
];

const MindrayHighlight = () => {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              <Radio className="h-4 w-4" />
              Radiologia Digital
            </div>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Linha Mindray: Radiologia Digital de Alta Performance
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Distribuidora autorizada Mindray no Brasil. Detectores digitais, sistemas fixos e móveis com suporte técnico completo e cobertura nacional.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/produtos-mindray">
                Ver todos os produtos Mindray
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {products.map((p) => (
              <Link
                key={p.href}
                to={p.href}
                className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1 text-sm font-bold text-foreground">{p.title}</h3>
                <p className="text-xs text-muted-foreground">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MindrayHighlight;
