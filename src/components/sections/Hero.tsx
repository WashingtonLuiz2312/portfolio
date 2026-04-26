import React, { useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import {
  SiPython, SiJavascript, SiTypescript, SiReact, SiAngular, SiVuedotjs,
  SiNodedotjs, SiFastapi, SiFlask, SiPostgresql, SiDocker, SiTensorflow, SiPytorch, SiHtml5, SiCss3
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import TextType from "../TextType";

const technologies = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" }, // Ajustei para o laranja original
  { name: "CSS", icon: SiCss3, color: "#1572B6" },    // Ajustei para o azul original
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
  const heroRef = useRef<HTMLDivElement>(null);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Efeito Magnético Premium para os ícones sociais
  const handleMagneticMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const boundingRect = el.getBoundingClientRect();
    const x = e.clientX - boundingRect.left - boundingRect.width / 2;
    const y = e.clientY - boundingRect.top - boundingRect.height / 2;
    gsap.to(el, { duration: 0.4, x: x * 0.4, y: y * 0.4, ease: "power3.out" });
  };

  const handleMagneticLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { duration: 0.8, x: 0, y: 0, ease: "elastic.out(1, 0.3)" });
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Timeline de Entrada (God Tier)
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-desc", { y: 30, opacity: 0, duration: 1, delay: 0.5 })
        .from(".hero-btn", { 
          y: 20, 
          opacity: 0, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: "back.out(1.5)" 
        }, "-=0.6")
        .from(".hero-social", { 
          scale: 0, 
          opacity: 0, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: "back.out(2)" 
        }, "-=0.4")
        .from(".hero-footer", { y: 40, opacity: 0, duration: 1 }, "-=0.4");

      // 2. Fundo Flutuante Dinâmico (Substitui o animate-pulse tosco)
      gsap.to(".bg-orb-1", {
        y: "30px", x: "-30px", duration: 5, yoyo: true, repeat: -1, ease: "sine.inOut"
      });
      gsap.to(".bg-orb-2", {
        y: "-40px", x: "20px", duration: 6, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 1
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-[100dvh] flex flex-col justify-between relative overflow-hidden pt-24 pb-8 bg-black text-white"
    >
      {/* Background Effects Premium */}
      <div className="absolute inset-0 z-0">
        <div className="bg-orb-1 absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="bg-orb-2 absolute bottom-[20%] right-[20%] w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Grid Pattern Minimalista */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        {/* Vignette effect para focar a visão no centro */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] pointer-events-none" />
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center flex-grow mt-12 md:mt-0">
        <div className="max-w-4xl mx-auto text-center relative w-full">

          {/* Efeito de Brilho Dinâmico atrás do texto principal */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-emerald-500/5 blur-[100px] rounded-[100%] pointer-events-none" />

          {/* Container fixo para o TextType não empurrar a tela enquanto digita */}
          <div className="min-h-[120px] md:min-h-[160px] lg:min-h-[180px] flex items-center justify-center mb-6">
            <TextType
              text={["Seja bem-vindo", "Me chamo Washington Luiz", "Desenvolvedor Full-Stack"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
              variableSpeed={false}
              onSentenceComplete={() => { }}
              // Tipografia Responsiva e Drop-shadow foda:
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-emerald-600 drop-shadow-[0_0_20px_rgba(52,211,153,0.3)] px-2"
            />
          </div>

          {/* Description */}
          <p className="hero-desc text-zinc-400 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Transformo ideias em soluções tecnológicas escaláveis. Conhecimento sólido em
            <strong className="text-zinc-200 font-medium"> arquitetura de sistemas</strong>, 
            <strong className="text-zinc-200 font-medium"> inteligência artificial</strong> e 
            <strong className="text-zinc-200 font-medium"> aplicações web</strong> de alto impacto.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14 relative z-20">
            <Button
              size="lg"
              className="hero-btn group relative overflow-hidden bg-white text-black hover:bg-emerald-500 hover:text-white font-bold transition-all duration-500 h-14 px-8 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(52,211,153,0.4)] hover:-translate-y-1"
              onClick={() => handleScroll("#projects")}
            >
              <span className="relative z-10 flex items-center">
                Ver Projetos
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hero-btn group border-zinc-700 bg-black/50 backdrop-blur-md text-zinc-300 hover:bg-zinc-900 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-500 h-14 px-8 rounded-full"
              onClick={() => handleScroll("#contact")}
            >
              Entrar em Contato
            </Button>
          </div>

          {/* Social Links Magnéticos */}
          <div className="flex items-center justify-center gap-6 relative z-20">
            {[
              { icon: Github, href: "https://github.com/WashingtonLuiz2312", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/washington-luiz-amorim/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:washington.tech@outlook.com.br", label: "Email" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                className="hero-social w-12 h-12 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-zinc-800 hover:shadow-[0_0_15px_rgba(52,211,153,0.3)] transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 pointer-events-none" />
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* Rodapé (Carousel & Scroll Indicator) */}
      <div className="hero-footer w-full flex flex-col justify-end relative z-10 mt-8">

        {/* Tech Carousel Super Premium */}
        <div className="w-full py-6 border-y border-zinc-900/50 bg-black/30 backdrop-blur-sm mb-6">
          <div className="relative overflow-hidden flex">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

            {/* Scrolling container (pausa no hover) */}
            <div 
              className="flex animate-marquee hover:[animation-play-state:paused]"
              style={{ animationDuration: "50s" }} /* AUMENTE ESSE VALOR PARA FICAR MAIS LENTO */
            >
              {[...technologies, ...technologies].map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={`${tech.name}-${index}`}
                    className="flex-shrink-0 mx-3 px-5 py-2.5 bg-zinc-900/40 backdrop-blur-md rounded-2xl border border-zinc-800/50 hover:border-emerald-500/40 hover:bg-zinc-800/80 transition-all duration-300 hover:-translate-y-1 group cursor-default shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent
                        className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_currentColor]"
                        style={{ color: tech.color }}
                      />
                      <span className="font-mono text-sm text-zinc-400 whitespace-nowrap group-hover:text-white transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll Indicator Interativo */}
        <div 
          className="flex flex-col items-center gap-3 text-zinc-500 cursor-pointer hover:text-emerald-500 transition-colors duration-300 mx-auto" 
          onClick={() => handleScroll("#about")}
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Scroll Down</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center p-1 relative opacity-70">
            <div className="w-1.5 h-2 bg-current rounded-full animate-bounce absolute top-2" />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;