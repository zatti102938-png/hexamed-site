import { useTranslation } from "react-i18next";
import { Shield, Microscope, Users, Package, FileCheck, Clock, LucideIcon } from "lucide-react";

const DifferentialsGrid = () => {
  const { t } = useTranslation();

  const differentials: { icon: LucideIcon; titleKey: string; descKey: string }[] = [
    { icon: Shield, titleKey: "differentials.nationalCoverage", descKey: "differentials.nationalCoverageDesc" },
    { icon: Microscope, titleKey: "differentials.ownLab", descKey: "differentials.ownLabDesc" },
    { icon: Users, titleKey: "differentials.certifiedTeam", descKey: "differentials.certifiedTeamDesc" },
    { icon: Package, titleKey: "differentials.originalParts", descKey: "differentials.originalPartsDesc" },
    { icon: FileCheck, titleKey: "differentials.flexibleContracts", descKey: "differentials.flexibleContractsDesc" },
    { icon: Clock, titleKey: "differentials.experience", descKey: "differentials.experienceDesc" },
  ];

  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            {t("differentials.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t("differentials.subtitle")}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item) => (
            <div
              key={item.titleKey}
              className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{t(item.titleKey)}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{t(item.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsGrid;
