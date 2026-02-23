import { useState, forwardRef } from "react";
import { Send, Github, Linkedin, Mail, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = forwardRef<HTMLElement>((_, ref) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Sucesso!",
      description: "Sua mensagem foi enviada. Entrarei em contato em breve.",
      // Assumindo que seu toast suporte variantes, senão remova essa linha
      variant: "default", 
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Configuração dos itens de contato para deixar o JSX mais limpo
  const contactItems = [
    {
      name: "E-mail",
      value: "washington.tech@outlook.com.br",
      href: "mailto:washington.tech@outlook.com.br",
      icon: Mail,
    },
    {
      name: "LinkedIn",
      value: "/in/washington-luiz-amorim",
      href: "https://www.linkedin.com/in/washington-luiz-amorim/",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      value: "@WashingtonLuiz2312",
      href: "https://github.com/WashingtonLuiz2312",
      icon: Github,
    },
    {
      name: "WhatsApp",
      value: "+55 (71) 99649-9794",
      href: "https://wa.me/5571996499794",
      icon: MessageSquare,
    },
  ];

  return (
    <section ref={ref} id="contact" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Decoração Sutil de Fundo (Grid Minimalista) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Efeito de luz sutil no canto */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header da Seção */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Vamos construir algo <span className="text-emerald-500">incrível</span>?
              </h2>
              <p className="text-zinc-400 text-lg">
                Estou disponível para projetos freelance e oportunidades full-time.
                Me conte sobre sua ideia e vamos tirá-la do papel.
              </p>
            </div>
            
            {/* Indicador visual decorativo */}
            <div className="hidden md:block">
              <ArrowRight className="w-12 h-12 text-zinc-800 -rotate-45" />
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Coluna da Esquerda: Informações (4 colunas) */}
            <div className="lg:col-span-5 space-y-4">
              <p className="text-sm font-mono text-emerald-500 mb-6 uppercase tracking-wider">
                Canais de Contato
              </p>
              
              {contactItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-900 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-md bg-black flex items-center justify-center border border-zinc-800 group-hover:border-emerald-500/30 group-hover:text-emerald-500 transition-colors">
                    <item.icon className="h-5 w-5 text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                  </div>
                  <div className="ml-4 overflow-hidden">
                    <p className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                      {item.name}
                    </p>
                    <p className="text-xs text-zinc-500 truncate group-hover:text-zinc-400 transition-colors">
                      {item.value}
                    </p>
                  </div>
                  <ArrowRight className="ml-auto w-4 h-4 text-zinc-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Coluna da Direita: Formulário (7 colunas) */}
            <div className="lg:col-span-7">
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                        Nome
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-black/50 border-zinc-800 focus:border-emerald-500 focus:ring-emerald-500/20 text-white placeholder:text-zinc-600 h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                        E-mail
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@exemplo.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-black/50 border-zinc-800 focus:border-emerald-500 focus:ring-emerald-500/20 text-white placeholder:text-zinc-600 h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Como posso te ajudar?"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-black/50 border-zinc-800 focus:border-emerald-500 focus:ring-emerald-500/20 text-white placeholder:text-zinc-600 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-white text-black hover:bg-emerald-500 hover:text-white font-semibold text-base transition-all duration-300"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;