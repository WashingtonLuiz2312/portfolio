import { Code2, Cpu, Database, Layers, User } from "lucide-react";
import profilePhoto from "@/assets/profilePhoto.png";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Código limpo, legível e bem documentado.",
  },
  {
    icon: Cpu,
    title: "IA & ML",
    description: "Soluções inteligentes com machine learning.",
  },
  {
    icon: Database,
    title: "Arquitetura",
    description: "Sistemas escaláveis e de alta performance.",
  },
  {
    icon: Layers,
    title: "Full Stack",
    description: "Do frontend ao backend com aprendizado contínuo.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Coluna da Esquerda - Texto e Tech Stack (Aumentada para 7 colunas) */}
          <div className="lg:col-span-7">
            <span className="font-mono text-emerald-500 text-sm mb-4 block uppercase tracking-wider">
              // Sobre mim
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
              Construindo o futuro com{" "}
              <span className="text-emerald-500">código</span>
            </h2>
            
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                Sou um desenvolvedor apaixonado por resolver problemas complexos 
                através de soluções tecnológicas. Com alguns anos 
                de experiência em desenvolvimento de software e análise de dados, procuro me especializar em 
                criar sistemas inteligentes que façam a diferença e entreguem resultados.
              </p>
              <p>
                Minha expertise abrange desde o desenvolvimento de sistemas simples e automáticos 
                até a implementação de modelos de machine learning. 
                Trabalho com tecnologias como Python, TypeScript, React e 
                frameworks de IA para entregar soluções completas.
              </p>
              <p>
                Focado em arquitetura limpa e boas práticas, busco sempre entregar 
                código que não seja apenas funcional, mas também escalável, 
                manutenível e preparado para melhorias contínuas.
              </p>
            </div>

            {/* Tech Stack Preview */}
            <div className="mt-10 pt-10 border-t border-zinc-800/50">
              <p className="text-sm font-medium text-zinc-300 mb-4">Principais Tecnologias</p>
              <div className="flex flex-wrap gap-3">
                {["Python", "TypeScript", "React", "Node.js", "PostgreSQL", "Docker"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 bg-zinc-900 rounded-full text-sm font-mono text-zinc-300 border border-zinc-800 hover:border-emerald-500/50 hover:text-emerald-500 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Coluna da Direita - Foto e Highlights (5 colunas) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            
            {/* Profile Photo */}
            <div className="mb-12 relative w-full flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Rotating Border */}
                <div 
                  className="absolute -inset-1 bg-gradient-to-r from-emerald-500/50 via-zinc-800 to-emerald-500/50 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" 
                  style={{ animation: "spin 8s linear infinite" }} 
                />
                
                {/* Photo Container */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-zinc-800 bg-zinc-900 shadow-2xl">
                  {/* Se a imagem falhar, mostra o placeholder. Se funcionar, mostra a imagem. */}
                  {profilePhoto ? (
                    <img src={profilePhoto} alt="Foto profissional" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 text-zinc-500">
                      <User className="w-16 h-16 mb-2 opacity-50" />
                      <span className="text-xs font-mono opacity-70">Sua foto</span>
                    </div>
                  )}
                </div>

                {/* Status Indicator */}
                <div className="absolute bottom-3 right-3 w-5 h-5 bg-emerald-500 rounded-full border-4 border-black animate-pulse" title="Disponível para projetos" />
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 w-full">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-900/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-black border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-emerald-500/30 transition-colors">
                    <item.icon className="h-5 w-5 text-emerald-500" />
                  </div>
                  <h3 className="font-semibold text-zinc-200 mb-1">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-snug group-hover:text-zinc-400 transition-colors">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Stats */}
        <div className="mt-24 pt-12 border-t border-zinc-800/50 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "3+", label: "Anos de Experiência" },
            { value: "20+", label: "Projetos Concluídos" },
            { value: "10+", label: "Tecnologias Dominadas" },
            { value: "100%", label: "Foco em Qualidade" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-emerald-500 transition-colors duration-300">
                {stat.value}
              </div>
              <p className="text-zinc-500 text-sm font-medium tracking-wide uppercase">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;