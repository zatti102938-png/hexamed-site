import { useTranslation } from "react-i18next";
import { TrendingUp, MapPin, Award, Wrench } from "lucide-react";

const TrustBlock = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: TrendingUp, value: "+500", label: t("trust.equipments") },
    { icon: MapPin, value: "5", label: t("trust.units") },
    { icon: Award, value: "+16", label: t("trust.years") },
    { icon: Wrench, value: "3", label: t("trust.testRooms") },
  ];

  return (
    <section className="border-y border-border bg-card py-16 md:py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            {t("trust.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {t("trust.subtitle")}
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
