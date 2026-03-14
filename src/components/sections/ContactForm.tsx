import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

type ContactFormData = {
  nome: string;
  empresa: string;
  cargo?: string;
  telefone: string;
  email: string;
  endereco?: string;
  interesse: string;
  mensagem?: string;
};

interface ContactFormProps {
  variant?: "full" | "compact";
}

const ContactForm = ({ variant = "full" }: ContactFormProps) => {
  const { toast } = useToast();
  const { t } = useTranslation();

  const contactSchema = z.object({
    nome: z.string().trim().min(2, t("form.nameError")).max(100),
    empresa: z.string().trim().min(2, t("form.companyError")).max(100),
    cargo: z.string().trim().max(80).optional(),
    telefone: z.string().trim().min(8, t("form.phoneError")).max(20),
    email: z.string().trim().email(t("form.emailError")).max(255),
    endereco: z.string().trim().max(200).optional(),
    interesse: z.string().min(1, t("form.interestError")),
    mensagem: z.string().trim().max(1000).optional(),
  });

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nome: "",
      empresa: "",
      cargo: "",
      telefone: "",
      email: "",
      endereco: "",
      interesse: "",
      mensagem: "",
    },
  });

  const onSubmit = (_data: ContactFormData) => {
    toast({
      title: t("form.successTitle"),
      description: t("form.successDesc"),
    });
    form.reset();
  };

  const isCompact = variant === "compact";

  const interestOptions = [
    { value: "rm", label: t("form.interests.rm") },
    { value: "tomografia", label: t("form.interests.tomografia") },
    { value: "raio-x", label: t("form.interests.raioX") },
    { value: "mindray", label: t("form.interests.mindray") },
    { value: "bombas", label: t("form.interests.bombas") },
    { value: "hexai", label: t("form.interests.hexai") },
    { value: "veterinario", label: t("form.interests.veterinario") },
    { value: "manutencao", label: t("form.interests.manutencao") },
    { value: "contrato", label: t("form.interests.contrato") },
    { value: "instalacao", label: t("form.interests.instalacao") },
    { value: "reparo", label: t("form.interests.reparo") },
    { value: "visita", label: t("form.interests.visita") },
    { value: "outro", label: t("form.interests.outro") },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.name")} *</FormLabel>
              <FormControl><Input placeholder={t("form.namePlaceholder")} {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.email")} *</FormLabel>
              <FormControl><Input type="email" placeholder={t("form.emailPlaceholder")} {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="telefone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.phone")} *</FormLabel>
                <FormControl><Input placeholder={t("form.phonePlaceholder")} {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="empresa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.company")} *</FormLabel>
                <FormControl><Input placeholder={t("form.companyPlaceholder")} {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {!isCompact && (
          <FormField
            control={form.control}
            name="endereco"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.address")}</FormLabel>
                <FormControl><Input placeholder={t("form.addressPlaceholder")} {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="interesse"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.interest")} *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={t("form.interestPlaceholder")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {interestOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {!isCompact && (
          <FormField
            control={form.control}
            name="mensagem"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.message")}</FormLabel>
                <FormControl><Textarea placeholder={t("form.messagePlaceholder")} rows={4} {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          <Send className="mr-2 h-4 w-4" />
          {t("common.send")}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
