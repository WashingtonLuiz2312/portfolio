import { forwardRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

// Para adicionar a logo da empresa, importe a imagem e adicione no campo "logo"
// Exemplo: import empresaLogo from "@/assets/empresa-logo.png";

const experiences = [
  {
    company: "Nome da Empresa",
    role: "Desenvolvedor Full Stack Senior",
    period: "2022 - Presente",
    location: "São Paulo, SP",
    logo: null, // Substitua por: empresaLogo (após importar a imagem)
    description:
      "Desenvolvimento de aplicações web escaláveis utilizando React, Node.js e Python. Liderança técnica de equipe e implementação de arquiteturas de microsserviços.",
    technologies: ["React", "Node.js", "Python", "AWS", "Docker"],
  },
  {
    company: "Outra Empresa",
    role: "Desenvolvedor Backend",
    period: "2020 - 2022",
    location: "Remoto",
    logo: null, // Substitua pela logo importada
    description:
      "Desenvolvimento de APIs RESTful e integração com sistemas de machine learning. Otimização de performance e implementação de pipelines de dados.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Kubernetes"],
  },
  {
    company: "Startup Tech",
    role: "Desenvolvedor Junior",
    period: "2018 - 2020",
    location: "Rio de Janeiro, RJ",
    logo: null, // Substitua pela logo importada
    description:
      "Início da carreira em desenvolvimento web, focado em frontend com React e aprendizado de boas práticas de desenvolvimento.",
    technologies: ["React", "JavaScript", "CSS", "Git"],
  },
];

const Experience = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      id="experience"
      className="py-20 px-4 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiência{" "}
            <span className="text-primary">Profissional</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Minha trajetória profissional e as empresas onde contribuí para o
            desenvolvimento de soluções inovadoras.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/50" />

                {/* Content Card */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    {/* Company & Role */}
                    <div className="flex items-start gap-4 mb-4">
                      {exp.logo ? (
                        <div className="w-14 h-14 rounded-lg overflow-hidden bg-background border border-border/50 flex items-center justify-center flex-shrink-0">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-contain p-1"
                          />
                        </div>
                      ) : (
                        <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
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
