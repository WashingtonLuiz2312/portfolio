import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  SiPython, SiJavascript, SiTypescript, SiReact, SiAngular, SiVuedotjs,
  SiNodedotjs, SiFastapi, SiFlask, SiPostgresql, SiMongodb, SiDocker,
  SiKubernetes, SiTensorflow, SiPytorch
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp, TbSql } from "react-icons/tb";

const technologies = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "SQL", icon: TbSql, color: "#4479A1" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "Flask", icon: SiFlask, color: "#ffffff" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
];

const Hero = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 md:pt-0"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10 flex-1 flex items-center">
        <div className="max-w-4xl mx-auto text-center">

          {/* Name */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Olá, eu sou{" "}
            <span className="text-gradient">Washington</span>
          </h1>

          {/* Title */}
          <div
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="font-mono text-lg md:text-xl text-primary mb-6">
              Full Stack Developer | IA & Sistemas Inteligentes
            </p>
          </div>

          {/* Description */}
          <p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Transformo ideias em soluções tecnológicas escaláveis. Conhecimento em 
            arquitetura de sistemas, inteligência artificial, automação de processo e aplicações web.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              size="lg"
              className="group glow"
              onClick={() => handleScroll("#projects")}
            >
              Ver Projetos
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleScroll("#contact")}
            >
              Entrar em Contato
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center justify-center gap-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            <a
              href="https://github.com/WashingtonLuiz2312"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/washington-luiz-amorim/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="washington.tech@outlook.com.br"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Tech Carousel */}
      <div className="w-full py-8 relative z-10 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Scrolling container */}
          <div className="flex animate-marquee">
            {[...technologies, ...technologies].map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 mx-3 px-5 py-3 bg-card/50 backdrop-blur-sm rounded-full border border-border hover:border-primary/50 transition-all hover:scale-105 group"
                >
                  <div className="flex items-center gap-2">
                    <IconComponent 
                      className="h-5 w-5 transition-colors" 
                      style={{ color: tech.color }}
                    />
                    <span className="font-mono text-sm text-muted-foreground whitespace-nowrap group-hover:text-foreground transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="pb-8 opacity-0 animate-fade-in" style={{ animationDelay: "1.4s" }}>
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs font-mono">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
