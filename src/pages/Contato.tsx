import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contato = () => {
  const { t } = useTranslation();

  const contactInfo = [
    { icon: Phone, label: t("contactPage.contactLabels.phone"), value: "+55 31 9236-8432", href: "tel:+553192368432" },
    { icon: Mail, label: t("contactPage.contactLabels.email"), value: "contato@hexamedical.com.br", href: "mailto:contato@hexamedical.com.br" },
    { icon: MapPin, label: t("contactPage.contactLabels.location"), value: t("footer.location") },
    { icon: Clock, label: t("contactPage.contactLabels.hours"), value: t("footer.officeHours") },
  ];

  return (
    <Layout>
      <Helmet>
        <title>{t("contactPage.pageTitle")}</title>
        <meta name="description" content={t("contactPage.heroSubtitle")} />
      </Helmet>

      <PageBreadcrumb items={[{ label: t("nav.contact") }]} />

      <section className="relative overflow-hidden bg-dark-surface py-16 text-white md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {t("contactPage.heroHeadline")}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            {t("contactPage.heroSubtitle")}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid items-start gap-12 lg:grid-cols-5">
            <div className="space-y-8 lg:col-span-2">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-foreground">{t("contactPage.officeTitle")}</h2>
                <div className="space-y-5">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="font-semibold text-foreground hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-semibold text-foreground whitespace-pre-line">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://api.whatsapp.com/send?phone=553192368432&text=Ol%C3%A1!%20Estou%20aqui%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%2C%20por%20favor."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-green-600 bg-green-600/10 p-4 font-semibold text-green-700 transition-colors hover:bg-green-600 hover:text-white"
              >
                {t("common.chatWhatsApp")}
              </a>

              <div className="rounded-xl border border-border bg-muted/50 p-6">
                <h3 className="mb-4 font-bold text-foreground">{t("contactPage.whyTitle")}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {Object.values({
                    consultative: t("contactPage.whyItems.consultative"),
                    freeEval: t("contactPage.whyItems.freeEval"),
                    experience: t("contactPage.whyItems.experience"),
                    nationalCoverage: t("contactPage.whyItems.nationalCoverage"),
                  }).map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8 lg:col-span-3">
              <h2 className="mb-6 text-xl font-bold text-foreground">{t("contactPage.formTitle")}</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
