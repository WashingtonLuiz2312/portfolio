import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Sistema de Gestão de Estoques com IA",
    description:
      "Plataforma inteligente para gestão de inventário com previsão de demanda utilizando machine learning. Reduziu perdas em 35% e otimizou reposição automática.",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Scikit-learn"],
    problem: "Empresas perdiam dinheiro com excesso ou falta de estoque",
    image: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Plataforma de Acesso à Justiça",
    description:
      "Sistema com IA para orientação jurídica automatizada, análise de documentos e triagem inteligente de casos. Democratizando o acesso à justiça.",
    technologies: ["TypeScript", "Node.js", "React", "NLP", "MongoDB"],
    problem: "Dificuldade de acesso a orientação jurídica básica",
    image: "bg-gradient-to-br from-purple-600/20 to-pink-600/20",
    github: "https://github.com",
  },
  {
    title: "Sistema de Triagem Hospitalar",
    description:
      "Aplicação para triagem automática de pacientes usando processamento de linguagem natural, classificando urgência e otimizando filas de atendimento.",
    technologies: ["Python", "Flask", "NLP", "TensorFlow", "Docker"],
    problem: "Filas longas e triagem ineficiente em hospitais",
    image: "bg-gradient-to-br from-green-600/20 to-emerald-600/20",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Reconhecimento Facial para Controle de Acesso",
    description:
      "Sistema de segurança com reconhecimento facial em tempo real, integrado a catracas e portas eletrônicas. Alta precisão e baixa latência.",
    technologies: ["Python", "OpenCV", "PyTorch", "FastAPI", "Redis"],
    problem: "Controle de acesso manual é lento e vulnerável",
    image: "bg-gradient-to-br from-orange-600/20 to-red-600/20",
    github: "https://github.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm mb-4 block">
            // Portfólio
          </span>
          <h2 className="section-title">
            Projetos em <span className="text-gradient">destaque</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Uma seleção dos projetos mais relevantes que demonstram minhas
            habilidades em desenvolvimento e arquitetura de software.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card group"
            >
              {/* Project Image/Gradient */}
              <div
                className={`h-48 ${project.image} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Tech Stack Overlay */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs font-mono border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs font-mono border border-border">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Problem Solved */}
                <div className="bg-muted/50 rounded-lg p-3 mb-6 border border-border">
                  <span className="text-xs font-mono text-primary block mb-1">
                    Problema resolvido:
                  </span>
                  <p className="text-sm text-muted-foreground">
                    {project.problem}
                  </p>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Código
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="group">
            Ver todos os projetos
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
