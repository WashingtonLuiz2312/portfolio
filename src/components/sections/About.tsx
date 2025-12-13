import { Code2, Cpu, Database, Layers, User } from "lucide-react";
import profilePhoto from "@/assets/profilePhoto.png";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Código limpo, legível e bem documentado",
  },
  {
    icon: Cpu,
    title: "IA & ML",
    description: "Soluções com machine learning",
  },
  {
    icon: Database,
    title: "Arquitetura",
    description: "Sistemas escaláveis",
  },
  {
    icon: Layers,
    title: "Full Stack",
    description: "Do frontend ao backend com aprendizado contínuo",
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
            <div className="mb-12 flex justify-center">
              <div className="relative group">
                {/* Rotating Border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-sm opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-spin-slow" 
                  style={{ animation: "spin 8s linear infinite" }} 
                />
                
                {/* Photo Container */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-background bg-card shadow-2xl">
                  {<img src={profilePhoto} alt="Foto profissional" className="w-full h-full object-cover" />}
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-muted to-card text-muted-foreground">
                    <User className="w-16 h-16 mb-2 text-primary/50" />
                    <span className="text-xs font-mono text-primary/70">Sua foto</span>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-4 border-background animate-pulse" title="Disponível para projetos" />
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
                através de soluções tecnológicas. Com alguns anos 
                de experiência em desenvolvimento de software e análise de dados, procuro me especializar em 
                criar sistemas inteligentes que façam a diferença e entreguem resultados.
              </p>
              <p>
                Minha expertise abrange desde o desenvolvimento sistemas simples e automáticos 
                até a implementação de modelos de machine learning. 
                Trabalho com tecnologias como Python, TypeScript, React e 
                frameworks de IA para entregar soluções.
              </p>
              <p>
                Focado em arquitetura limpa e boas práticas, busco sempre entregar 
                código que não seja apenas funcional, mas também escalável, 
                manutenível e preparado para melhorias contínuas.
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
            { value: "3+", label: "Anos de Experiência" },
            { value: "20+", label: "Projetos Concluídos" },
            { value: "10+", label: "Tecnologias Dominadas" },
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
