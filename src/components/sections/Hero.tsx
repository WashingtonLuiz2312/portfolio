import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  SiPython, SiJavascript, SiTypescript, SiReact, SiAngular, SiVuedotjs,
  SiNodedotjs, SiFastapi, SiFlask, SiPostgresql, SiDocker, SiTensorflow, SiPytorch, SiHtml5, SiCss3
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

const technologies = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "HTML", icon: SiHtml5, color: "#ffc402"},
  { name: "CSS", icon: SiCss3, color: "#FFFFFF" },
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
      className="min-h-screen flex flex-col justify-between relative overflow-hidden pt-20 md:pt-24 bg-black text-white"
    >
      {/* Background Effects (Monochrome Dark + Emerald) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] animate-pulse delay-1000 pointer-events-none" />
      
      {/* Grid Pattern Minimalista */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Espaçador Invisível no topo para equilibrar o layout */}
      <div className="w-full h-[100px] md:h-[120px] relative z-10"></div>

      {/* Conteúdo Principal Centralizado */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">

          {/* Name */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-in tracking-tight"
            style={{ animationDelay: "0.2s" }}
          >
            Olá, eu sou{" "}
            <span className="text-emerald-500">Washington</span>
          </h1>

          {/* Title */}
          <div
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="font-mono text-lg md:text-xl text-emerald-500 mb-6 uppercase tracking-wider">
              Full Stack Developer | IA & Sistemas
            </p>
          </div>

          {/* Description */}
          <p
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in leading-relaxed"
            style={{ animationDelay: "0.6s" }}
          >
            Transformo ideias em soluções tecnológicas escaláveis. Conhecimento em 
            arquitetura de sistemas, inteligência artificial, automação de processos e aplicações web.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              size="lg"
              className="group bg-white text-black hover:bg-emerald-500 hover:text-white font-semibold transition-all duration-300 h-12 px-8"
              onClick={() => handleScroll("#projects")}
            >
              Ver Projetos
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-800 bg-transparent text-zinc-300 hover:bg-zinc-900 hover:text-white hover:border-emerald-500/50 transition-all duration-300 h-12 px-8"
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
              className="w-10 h-10 rounded-full bg-zinc-900/50 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/50 hover:bg-zinc-900 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/washington-luiz-amorim/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-900/50 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/50 hover:bg-zinc-900 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:washington.tech@outlook.com.br"
              className="w-10 h-10 rounded-full bg-zinc-900/50 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/50 hover:bg-zinc-900 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Rodapé (Carousel & Scroll Indicator) */}
      <div className="w-full flex flex-col justify-end relative z-10 mt-8">
        
        {/* Tech Carousel */}
        <div className="w-full py-8 opacity-0 animate-fade-in border-t border-zinc-900/50" style={{ animationDelay: "1.2s" }}>
          <div className="relative overflow-hidden">
            {/* Fade edges - Atualizado para preto */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling container */}
            <div className="flex animate-marquee">
              {[...technologies, ...technologies].map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={`${tech.name}-${index}`}
                    className="flex-shrink-0 mx-3 px-5 py-3 bg-zinc-900/30 backdrop-blur-sm rounded-full border border-zinc-800 hover:border-emerald-500/50 transition-all hover:scale-105 group cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent 
                        className="h-5 w-5 transition-transform group-hover:scale-110" 
                        style={{ color: tech.color }}
                      />
                      <span className="font-mono text-sm text-zinc-400 whitespace-nowrap group-hover:text-zinc-200 transition-colors">
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
          <div className="flex flex-col items-center gap-2 text-zinc-500">
            <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
            <div className="w-5 h-8 rounded-full border-2 border-zinc-700 flex justify-center pt-2">
              <div className="w-1 h-1.5 bg-emerald-500 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;