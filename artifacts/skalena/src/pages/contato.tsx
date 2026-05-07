import { Layout } from "@/components/layout";
import { FadeIn } from "@/components/animations";
import { Mail, MapPin, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  nome: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  empresa: z.string().min(2, "Empresa é obrigatória"),
  telefone: z.string().min(8, "Telefone é obrigatório"),
  mensagem: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

export default function Contato() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      empresa: "",
      telefone: "",
      mensagem: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Retornaremos o contato em até 1 dia útil.",
    });
    form.reset();
  }

  return (
    <Layout>
      <section className="pt-40 pb-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <FadeIn>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Fale com a Skalena</h1>
                <p className="text-xl text-primary font-['Space_Grotesk'] mb-10">
                  Pronto para transformar seu negócio? Entre em contato.
                </p>
                
                <div className="space-y-8 mt-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">E-mail</h4>
                      <a href="mailto:contato@skalena.com.br" className="text-white/70 hover:text-white transition-colors">contato@skalena.com.br</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Tempo de Resposta</h4>
                      <p className="text-white/70">Nossa equipe responderá em até 1 dia útil.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Operação</h4>
                      <p className="text-white/70">Atuação remota global com base no Brasil.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="nome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Nome completo</FormLabel>
                          <FormControl>
                            <Input className="bg-background border-white/10 focus-visible:ring-primary" placeholder="Seu nome" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">E-mail corporativo</FormLabel>
                            <FormControl>
                              <Input className="bg-background border-white/10 focus-visible:ring-primary" placeholder="voce@empresa.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="telefone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">Telefone</FormLabel>
                            <FormControl>
                              <Input className="bg-background border-white/10 focus-visible:ring-primary" placeholder="(00) 00000-0000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="empresa"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Empresa</FormLabel>
                          <FormControl>
                            <Input className="bg-background border-white/10 focus-visible:ring-primary" placeholder="Nome da sua empresa" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="mensagem"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Mensagem</FormLabel>
                          <FormControl>
                            <Textarea className="bg-background border-white/10 focus-visible:ring-primary min-h-[120px]" placeholder="Como podemos ajudar?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.4)]">
                      Enviar Mensagem
                    </button>
                  </form>
                </Form>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </Layout>
  );
}