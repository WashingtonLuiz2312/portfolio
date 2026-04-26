import React, { useEffect, useRef } from "react";
import { Code2, Cpu, Database, Layers } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Importe a sua imagem cabulosa aqui:
import bgImage from "@/assets/BG.jpeg"; 

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Código limpo, legível e documentado.",
  },
  {
    icon: Cpu,
    title: "IA & ML",
    description: "Soluções com machine learning.",
  },
  {
    icon: Database,
    title: "Arquitetura",
    description: "Sistemas de alta performance.",
  },
  {
    icon: Layers,
    title: "Full Stack",
    description: "Frontend ao backend completo.",
  },
];

const About = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef([]);
  const statsRef = useRef([]);
  const pillsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Usando matchMedia para rodar o Parallax APENAS no desktop
      // Isso evita que a imagem desça e corte o topo no mobile
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.to(bgRef.current, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Animação de entrada do Painel Esquerdo (Texto)
      gsap.fromTo(
        textRef.current,
        { x: -50, opacity: 0, filter: "blur(10px)" },
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          },
        }
      );

      // Efeito cascata (Stagger) nas pílulas de tecnologia
      gsap.fromTo(
        pillsRef.current,
        { y: 20, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: textRef.current,
            start: "center 85%",
          },
        }
      );

      // Animação dos Cards da Direita
      gsap.fromTo(
        cardsRef.current,
        { x: 50, opacity: 0, rotateY: 15 },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );

      // Animação dos Status (Números subindo) no Rodapé
      statsRef.current.forEach((stat, index) => {
        const targetValue = parseInt(stat.innerText.replace(/\D/g, '')) || 0;
        const prefixStr = stat.innerText.replace(/[0-9]/g, ''); 
        
        gsap.fromTo(stat, 
          { innerText: 0 }, 
          {
            innerText: targetValue,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            onUpdate: function() {
              stat.innerText = Math.round(this.targets()[0].innerText) + prefixStr;
            },
            scrollTrigger: {
              trigger: stat,
              start: "top 90%",
            }
          }
        );
        
        gsap.fromTo(stat.parentElement,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: stat.parentElement, start: "top 95%" }
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative min-h-screen py-24 overflow-hidden flex flex-col justify-center bg-black">
      
      {/* Background Container */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black pointer-events-none">
        <div 
          ref={bgRef}
          // Aqui está o segredo:
          // bg-[length:120%_auto] no mobile garante que a imagem fique inteira (quase contain, mas poupando bordas pretas nas laterais)
          // lg:bg-cover lg:bg-center volta ao comportamento original no desktop
          className="absolute inset-0 w-full lg:h-[120%] lg:-top-[10%] bg-no-repeat bg-top lg:bg-center bg-[length:130%_auto] sm:bg-[length:100%_auto] lg:bg-cover"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        />
        
        {/* GRADIENTE DESKTOP: Escuro nas laterais, transparente no centro */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/95 via-transparent to-black/95 z-0" />
        
        {/* GRADIENTE MOBILE: Cria uma transição perfeita do fim da foto (no topo) para o fundo preto */}
        <div className="block lg:hidden absolute top-0 left-0 w-full h-[45vh] bg-gradient-to-b from-transparent via-black/60 to-black z-0" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0" />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full flex-grow flex flex-col justify-center">
        
        <div className="grid lg:grid-cols-12 gap-6 items-center w-full">
          
          {/* ESPAÇADOR MOBILE: Deixa o topo livre para a sua foto brilhar */}
          <div className="block lg:hidden w-full h-[35vh] sm:h-[45vh] pointer-events-none" />

          {/* COLUNA DA ESQUERDA - TEXTO */}
          <div 
            ref={textRef} 
            className="lg:col-span-4 lg:col-start-1 p-6 md:p-8 rounded-[2rem] bg-black/40 lg:bg-black/30 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <span className="font-mono text-emerald-400 text-xs mb-3 block uppercase tracking-widest font-semibold drop-shadow-md">
              // Sobre mim
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-white leading-tight">
              Construindo o <br />
              futuro com <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]">código</span>
            </h2>
            
            <div className="space-y-4 text-zinc-300/90 text-sm md:text-base leading-relaxed font-light">
              <p>
                Desenvolvedor apaixonado por resolver problemas complexos 
                através da tecnologia. Procuro me especializar em 
                criar sistemas inteligentes que entreguem resultados.
              </p>
              <p>
                Trabalho com tecnologias como Python, TypeScript, React e 
                frameworks de IA para entregar soluções completas e escaláveis.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs font-medium text-zinc-400 mb-4 uppercase tracking-wider">Stack Principal</p>
              <div className="flex flex-wrap gap-2">
                {["Python", "React", "Node.js", "Docker", "TS"].map(
                  (tech, i) => (
                    <span
                      key={tech}
                      ref={(el) => (pillsRef.current[i] = el)}
                      className="px-3 py-1.5 bg-white/5 backdrop-blur-md rounded-full text-xs font-mono text-zinc-200 border border-white/10 hover:border-emerald-500/80 hover:bg-emerald-500/10 hover:text-emerald-400 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* O CENTRO (Colunas 5 a 8) FICA VAZIO NO DESKTOP */}

          {/* COLUNA DA DIREITA - CARDS */}
          <div className="lg:col-span-4 lg:col-start-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 mt-6 lg:mt-0">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => (cardsRef.current[index] = el)}
                className="p-5 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-emerald-500/50 hover:bg-white/5 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-emerald-500/50 transition-all duration-300">
                    <item.icon className="h-5 w-5 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed group-hover:text-zinc-300 transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Rodapé - Experience Stats */}
        <div className="mt-20 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 lg:pb-0">
          {[
            { value: "3+", label: "Anos de Experiência" },
            { value: "20+", label: "Projetos Concluídos" },
            { value: "10+", label: "Tecnologias Dominadas" },
            { value: "100%", label: "Foco em Qualidade" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center p-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-transparent hover:border-white/10 transition-all duration-300">
              <div 
                ref={(el) => (statsRef.current[i] = el)}
                className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mb-2 drop-shadow-lg"
              >
                {stat.value}
              </div>
              <p className="text-emerald-500/80 text-xs font-bold tracking-widest uppercase">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;