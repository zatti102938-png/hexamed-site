import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = [
    {
      title: t("footer.products"),
      links: [
        { label: "Magnifico Open", href: "/solucoes/rm-magnifico-open" },
        { label: "S-Scan", href: "/solucoes/rm-s-scan" },
        { label: "O-Scan", href: "/solucoes/rm-o-scan" },
        { label: "G-Scan", href: "/solucoes/rm-g-scan" },
        { label: "Bombas Injetoras", href: "/solucoes/bombas-injetoras" },
        { label: "HexAI", href: "/solucoes/hexai" },
      ],
    },
    {
      title: t("footer.services"),
      links: [
        { label: t("nav.services"), href: "/servicos/manutencao" },
        { label: t("common.requestQuote"), href: "/servicos/instalacao" },
        { label: t("differentials.flexibleContracts"), href: "/servicos/contratos" },
        { label: t("differentials.ownLab"), href: "/servicos/reparo" },
        { label: t("common.viewDetails"), href: "/servicos/visita-tecnica" },
      ],
    },
    {
      title: t("footer.mindrayProducts"),
      links: [
        { label: "Detector Flat Panel", href: "/produtos-mindray/detector-flat-panel" },
        { label: "DigiEye 330", href: "/produtos-mindray/digieye-330" },
        { label: "DigiEye 350", href: "/produtos-mindray/digieye-350" },
        { label: "MobiEye 700", href: "/produtos-mindray/mobieye-700" },
      ],
    },
    {
      title: t("footer.company"),
      links: [
        { label: t("nav.structure"), href: "/estrutura" },
        { label: t("nav.blog"), href: "/blog" },
        { label: t("nav.support"), href: "/apoio" },
        { label: t("nav.contact"), href: "/contato" },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-dark-surface text-white">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <img src={logoIcon} alt="Hexamedical" className="h-10 w-10" />
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-tight text-white">HEXA<span className="text-white/60">MEDICAL</span></span>
                <span className="text-[9px] font-medium uppercase tracking-widest text-white/50">Taking Care Your Equipment</span>
              </div>
            </div>
            <p className="mb-6 max-w-sm text-sm text-white/70">
              {t("footer.description")}
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <a href="tel:+553192368432" className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4" /> +55 31 9236-8432
              </a>
              <a href="mailto:contato@hexamedical.com.br" className="flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4" /> contato@hexamedical.com.br
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{t("footer.location")}</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/50 sm:flex-row">
          <p>{t("footer.rights", { year: new Date().getFullYear() })}</p>
          <div className="flex gap-4">
            <Link to="/politica-de-privacidade" className="hover:text-primary">{t("footer.privacy")}</Link>
            <Link to="/termos" className="hover:text-primary">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
