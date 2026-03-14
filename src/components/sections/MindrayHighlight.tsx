import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Radio } from "lucide-react";
import { mindrayProducts } from "@/data/mindray-products";

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
            {mindrayProducts.map((p) => (
              <Link
                key={p.slug}
                to={`/produtos-mindray/${p.slug}`}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden bg-white p-4">
                  <img
                    src={p.image.thumb}
                    alt={p.shortTitle}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-1 text-sm font-bold text-foreground">{p.shortTitle}</h3>
                  <p className="text-xs text-muted-foreground">{p.description.slice(0, 80)}…</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MindrayHighlight;
