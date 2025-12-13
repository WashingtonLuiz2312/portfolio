import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Vozes de Mães Atípicas",
    description:
      "Plataforma desenvolvida para um projeto acadêmico que busca mitigar a vulnerabilidade que as mães atípicas sofrem, dando-lhes a oportunidade de conhecer sobre os seus direitos e conectá-las a uma rede com profissionais da saúde e do direito. A plataforma funciona também com um sistema integrado se SOS - Emergência, onde essas mulheres possam acionar de forma imediata a polícia e os seus familiares em situação de violência.",
    technologies: ["Python", "React", "PostgreSQL", "Scikit-learn"],
    problem: "Mães atípicas enfrentam vulnerabilidade social e falta de apoio",
    image: "bg-[url('https://i.ibb.co/XfYVtz92/M-es-At-picas.png')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-gradient-to-br from-orange-600/50 to-red-600/50",
    github: "https://github.com/WashingtonLuiz2312/mae-atipica",
    demo: "https://mae-atipica.lovable.app/",
  },
  {
    title: "Assistente Jurídico com IA",
    description:
      "Sistema com IA para orientação jurídica automatizada, análise de documentos e triagem inteligente de casos. Democratizando o acesso à justiça.",
    technologies: ["Python", "OpenAI", "NLP", "Supabase"],
    problem: "Dificuldade de acesso a orientação jurídica básica",
    image: "bg-[url('https://i.ibb.co/mFd9zzVJ/SYD-1.png')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-gradient-to-br from-orange-600/50 to-red-600/50",
    github: "https://github.com/WashingtonLuiz2312/Synex-Assistente-Juridico",
  },
  {
    title: "Sistema de Site para um SportBar",
    description:
      "Plataforma web para um SportBar local, com funcionalidades de cardápio digital, reservas online e promoções especiais. Melhorando a experiência do cliente e otimizando operações.",
    technologies: ["React", "Node.Js", "TypeScript"],
    problem: "Necessidade de modernizar a experiência do cliente e otimizar operações",
    image: "bg-[url('https://i.ibb.co/1fqs0Nxw/Captura-de-tela-2025-12-13-143543.png')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-gradient-to-br from-orange-600/50 to-smerald-600/50",
    github: "https://github.com/WashingtonLuiz2312/arena-digital",
    demo: "https://sportbar.lovable.app/",
  },
  {
    title: "Reconhecimento Facial para Controle de Acesso",
    description:
      "Sistema de segurança com reconhecimento facial em tempo real, integrado a catracas e portas eletrônicas. Alta precisão e baixa latência.",
    technologies: ["Em desenvolvimento"],
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
            Uma seleção dos projetos mais relevantes que foram desenvolvidos em decorrer acadêmico e em aprendizado pessoal que demonstram minhas
            habilidades em desenvolvimento e a busca pela melhoria contínua.
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
