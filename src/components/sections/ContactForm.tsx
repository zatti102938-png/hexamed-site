import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const contactSchema = z.object({
  nome: z.string().trim().min(2, "Nome é obrigatório").max(100),
  empresa: z.string().trim().min(2, "Empresa é obrigatória").max(100),
  cargo: z.string().trim().max(80).optional(),
  telefone: z.string().trim().min(8, "Telefone é obrigatório").max(20),
  email: z.string().trim().email("E-mail inválido").max(255),
  endereco: z.string().trim().max(200).optional(),
  interesse: z.string().min(1, "Selecione um interesse"),
  mensagem: z.string().trim().max(1000).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  variant?: "full" | "compact";
}

const ContactForm = ({ variant = "full" }: ContactFormProps) => {
  const { toast } = useToast();
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

  const onSubmit = (data: ContactFormData) => {
    toast({
      title: "Mensagem enviada!",
      description: "Nosso time entrará em contato em breve.",
    });
    form.reset();
  };

  const isCompact = variant === "compact";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome *</FormLabel>
              <FormControl><Input placeholder="Seu nome completo" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail *</FormLabel>
              <FormControl><Input type="email" placeholder="seu@email.com" {...field} /></FormControl>
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
                <FormLabel>Telefone *</FormLabel>
                <FormControl><Input placeholder="(11) 99999-9999" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="empresa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Empresa *</FormLabel>
                <FormControl><Input placeholder="Nome da empresa" {...field} /></FormControl>
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
                <FormLabel>Endereço</FormLabel>
                <FormControl><Input placeholder="Cidade/UF" {...field} /></FormControl>
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
              <FormLabel>Interesse *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="rm">Ressonância Magnética</SelectItem>
                  <SelectItem value="tomografia">Tomografia</SelectItem>
                  <SelectItem value="raio-x">Raio-X</SelectItem>
                  <SelectItem value="mindray">Produtos Mindray</SelectItem>
                  <SelectItem value="bombas">Bombas Injetoras</SelectItem>
                  <SelectItem value="hexai">HexAI</SelectItem>
                  <SelectItem value="veterinario">Área Veterinária</SelectItem>
                  <SelectItem value="manutencao">Manutenção</SelectItem>
                  <SelectItem value="contrato">Contrato de Manutenção</SelectItem>
                  <SelectItem value="instalacao">Instalação / Desinstalação</SelectItem>
                  <SelectItem value="reparo">Reparo de Peças</SelectItem>
                  <SelectItem value="visita">Visita Técnica</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
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
                <FormLabel>Mensagem</FormLabel>
                <FormControl><Textarea placeholder="Descreva sua necessidade..." rows={4} {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          <Send className="mr-2 h-4 w-4" />
          Enviar
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
