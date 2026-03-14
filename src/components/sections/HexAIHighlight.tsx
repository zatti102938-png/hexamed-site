import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight, Sparkles, BarChart3, Zap } from "lucide-react";

const HexAIHighlight = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Sparkles, titleKey: "hexai.feat1Title", descKey: "hexai.feat1Desc" },
    { icon: BarChart3, titleKey: "hexai.feat2Title", descKey: "hexai.feat2Desc" },
    { icon: Zap, titleKey: "hexai.feat3Title", descKey: "hexai.feat3Desc" },
  ];

  return (
    <section className="relative overflow-hidden bg-dark-surface py-16 text-white md:py-24">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 bg-gradient-to-b from-accent/5 to-transparent" />
      </div>
      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Brain className="h-4 w-4" />
              {t("hexai.badge")}
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              {t("hexai.title")}
            </h2>
            <p className="mb-8 text-lg text-white/80">
              {t("hexai.description")}
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/hexai">
                {t("common.knowHexAI")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4">
            {features.map((feat) => (
              <div key={feat.titleKey} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <feat.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-white">{t(feat.titleKey)}</h3>
                  <p className="text-sm text-white/70">{t(feat.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HexAIHighlight;
