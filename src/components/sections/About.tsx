import { Code2, Cpu, Database, Layers, User } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Código limpo, legível e bem documentado",
  },
  {
    icon: Cpu,
    title: "IA & ML",
    description: "Soluções inteligentes com machine learning",
  },
  {
    icon: Database,
    title: "Arquitetura",
    description: "Sistemas escaláveis e resilientes",
  },
  {
    icon: Layers,
    title: "Full Stack",
    description: "Do frontend ao backend com excelência",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Photo & Content */}
          <div>
            {/* Profile Photo */}
            <div className="mb-10 flex justify-center lg:justify-start">
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Photo Container */}
                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-primary/30 bg-card">
                  {/* Replace this placeholder with your photo */}
                  {/* To add your photo: 
                      1. Upload your image to src/assets/
                      2. Import it: import profilePhoto from "@/assets/your-photo.jpg"
                      3. Replace the placeholder below with: <img src={profilePhoto} alt="Foto profissional" className="w-full h-full object-cover" />
                  */}
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-muted to-card text-muted-foreground">
                    <User className="w-20 h-20 mb-3 text-primary/50" />
                    <span className="text-sm font-mono text-primary/70">Sua foto aqui</span>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <div className="absolute bottom-4 left-4 font-mono text-xs text-primary/70 bg-background/80 px-2 py-1 rounded">
                    &lt;Developer /&gt;
                  </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-lg" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-lg" />
              </div>
            </div>

            <span className="font-mono text-primary text-sm mb-4 block">
              // Sobre mim
            </span>
            <h2 className="section-title">
              Construindo o futuro com{" "}
              <span className="text-gradient">código</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Sou um desenvolvedor apaixonado por resolver problemas complexos 
                através de soluções tecnológicas elegantes e eficientes. Com anos 
                de experiência em desenvolvimento de software, especializo-me em 
                criar sistemas inteligentes que fazem a diferença.
              </p>
              <p>
                Minha expertise abrange desde o desenvolvimento de APIs REST robustas 
                até a implementação de modelos de machine learning em produção. 
                Trabalho com tecnologias modernas como Python, TypeScript, React e 
                frameworks de IA para entregar soluções que superam expectativas.
              </p>
              <p>
                Focado em arquitetura limpa e boas práticas, busco sempre entregar 
                código que seja não apenas funcional, mas também escalável, 
                manutenível e preparado para o futuro.
              </p>
            </div>

            {/* Tech Stack Preview */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["Python", "TypeScript", "React", "Node.js", "PostgreSQL", "Docker"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted rounded-full text-sm font-mono text-primary border border-border"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="skill-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "5+", label: "Anos de Experiência" },
            { value: "50+", label: "Projetos Concluídos" },
            { value: "20+", label: "Tecnologias Dominadas" },
            { value: "100%", label: "Foco em Qualidade" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
