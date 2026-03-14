import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

interface CTABannerProps {
  headline?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

const CTABanner = ({
  headline,
  subtitle,
  ctaLabel,
  ctaHref = "/contato",
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-dark-surface py-16 text-white md:py-20">
      <div className="absolute inset-0">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-secondary/20 blur-3xl" />
      </div>
      <div className="container relative z-10 text-center">
        <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          {headline || t("ctaBanner.headline")}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
          {subtitle || t("ctaBanner.subtitle")}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to={ctaHref}>
              <Phone className="mr-2 h-4 w-4" />
              {ctaLabel || t("common.talkToSpecialist")}
            </Link>
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button asChild size="lg" variant="outline" className="border-primary/60 bg-primary/10 text-white hover:bg-primary/20">
              <Link to={secondaryHref}>
                {secondaryLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
