import { forwardRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

// Para adicionar a logo da empresa, importe a imagem e adicione no campo "logo"
// Exemplo: import empresaLogo from "@/assets/empresa-logo.png";

const experiences = [
  {
    company: "Altus Equipamentos",
    role: "Desenvolvedor Full Stack",
    period: "2026 - Presente",
    location: "Camaçari, BA",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHeC4QtZK6lrQ/company-logo_200_200/company-logo_200_200/0/1641474012890/altus_equipamentos_logo?e=2147483647&v=beta&t=6Zsegkm2zJc2q2t6kpYdzrqR7EglRs5SdxZesBK-onM",
    description:
      "Desenvolvimento de aplicações web utilizando React, Node.js e Python. Responsabilidade técnica de equipe e implementação de arquiteturas de microsserviços automatizados utilizando a ferramenta N8N.",
    technologies: ["PostgreSQL", "Node.js", "Python", "Javascript", "N8N"],
  },
  {
    company: "Altus Equipamentos",
    role: "Estagiário de Sistemas e Automação",
    period: "2025 - 2026",
    location: "Camaçari, BA",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHeC4QtZK6lrQ/company-logo_200_200/company-logo_200_200/0/1641474012890/altus_equipamentos_logo?e=2147483647&v=beta&t=6Zsegkm2zJc2q2t6kpYdzrqR7EglRs5SdxZesBK-onM",
    description:
      "Desenvolvimento de sistemas automatizados para o setor comercial, automatização de extração de dados utilizando frameworks dedicados.",
    technologies: ["Javascript", "N8N", "React", "PostgreSQL"],
  },
  {
    company: "Grupo Boticário",
    role: "Jovem Aprendiz",
    period: "2022 - 2024",
    location: "Camaçari, BA",
    logo: "https://logosandtypes.com/wp-content/uploads/2021/04/Grupo-Boticario.png",
    description:
      "Início da carreira em desenvolvimento web e análise de dados, focado em análise de dados e aprendizado de boas práticas de desenvolvimento.",
    technologies: ["Python", "CSS", "Git", "SAP-S4HANA", "Astrein"],
  },
];

const Experience = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      id="experience"
      className="py-24 bg-black text-white relative overflow-hidden"
    >
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="font-mono text-emerald-500 text-sm mb-4 block uppercase tracking-wider">
            // Minha Trajetória
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Experiência <span className="text-emerald-500">Profissional</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            As empresas e projetos por onde passei, contribuindo para o
            desenvolvimento de soluções inovadoras e escaláveis.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-emerald-500/50 via-zinc-800 to-transparent" />

          {/* Experience Items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[7px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-black shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10 mt-6 md:mt-8" />

                {/* Content Card */}
                <div
                  className={`ml-10 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                  }`}
                >
                  <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-emerald-500/50 hover:bg-zinc-900/50 transition-all duration-300 group">
                    
                    {/* Company & Role */}
                    <div className="flex items-start gap-4 mb-6">
                      {exp.logo ? (
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/5 border border-zinc-700 flex items-center justify-center flex-shrink-0 p-1 group-hover:border-emerald-500/30 transition-colors">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-contain rounded-lg bg-white"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:border-emerald-500/30 transition-colors">
                          <Briefcase className="w-6 h-6 text-emerald-500" />
                        </div>
                      )}
                      
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-500 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-emerald-500 font-medium mt-1">{exp.company}</p>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-zinc-500 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-zinc-600" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-zinc-600" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-black border border-zinc-800 text-zinc-300 text-xs font-mono rounded-full group-hover:border-emerald-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Experience.displayName = "Experience";

export default Experience;