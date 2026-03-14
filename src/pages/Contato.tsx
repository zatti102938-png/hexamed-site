import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Telefone", value: "+55 31 9236-8432", href: "tel:+553192368432" },
  { icon: Mail, label: "E-mail", value: "contato@hexamedical.com.br", href: "mailto:contato@hexamedical.com.br" },
  { icon: MapPin, label: "Localização", value: "São Paulo, SP — Cobertura Nacional" },
  { icon: Clock, label: "Horário Comercial", value: "Segunda a Quinta – 8h às 18h\nSexta – 8h às 17h" },
];

const Contato = () => {
  return (
    <Layout>
      <Helmet>
        <title>Fale com a Hexamedical — Contato</title>
        <meta name="description" content="Entre em contato com a Hexamedical para tirar dúvidas, solicitar serviços ou saber mais sobre nossas soluções em equipamentos médicos." />
      </Helmet>

      <PageBreadcrumb items={[{ label: "Contato" }]} />

      {/* Hero section matching original */}
      <section className="relative overflow-hidden bg-dark-surface py-16 text-dark-surface-foreground md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Fale com a Hexamedical
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-dark-surface-foreground/80">
            Entre em contato para tirar dúvidas, solicitar serviços ou saber mais sobre nossas soluções em equipamentos médicos.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid items-start gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="space-y-8 lg:col-span-2">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-foreground">O Escritório</h2>
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

              {/* WhatsApp CTA */}
              <a
                href="https://api.whatsapp.com/send?phone=553192368432&text=Ol%C3%A1!%20Estou%20aqui%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%2C%20por%20favor."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-green-600 bg-green-600/10 p-4 font-semibold text-green-700 transition-colors hover:bg-green-600 hover:text-white"
              >
                💬 Falar pelo WhatsApp
              </a>

              {/* Trust block */}
              <div className="rounded-xl border border-border bg-muted/50 p-6">
                <h3 className="mb-4 font-bold text-foreground">Por que falar com a Hexamedical?</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Atendimento consultivo e não comercial
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Avaliação técnica gratuita
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    +16 anos de experiência no mercado
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Cobertura nacional com suporte local
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8 lg:col-span-3">
              <h2 className="mb-6 text-xl font-bold text-foreground">Fale conosco</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
