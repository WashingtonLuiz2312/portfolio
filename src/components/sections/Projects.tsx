import { ExternalLink, Github, ArrowRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Vozes de Mães Atípicas",
    description:
      "Plataforma desenvolvida para um projeto acadêmico que busca mitigar a vulnerabilidade que as mães atípicas sofrem, dando-lhes a oportunidade de conhecer sobre os seus direitos e conectá-las a uma rede com profissionais da saúde e do direito. A plataforma funciona também com um sistema integrado de SOS - Emergência.",
    technologies: ["Python", "React", "PostgreSQL", "Scikit-learn"],
    problem: "Mães atípicas enfrentam vulnerabilidade social e falta de apoio.",
    imageUrl: "https://i.ibb.co/XfYVtz92/M-es-At-picas.png",
    github: "https://github.com/WashingtonLuiz2312/mae-atipica",
    demo: "https://mae-atipica.lovable.app/",
  },
  {
    title: "Assistente Jurídico com IA",
    description:
      "Sistema com IA para orientação jurídica automatizada, análise de documentos e triagem inteligente de casos. Democratizando o acesso à justiça de forma eficiente e escalável.",
    technologies: ["Python", "OpenAI", "NLP", "Supabase"],
    problem: "Dificuldade de acesso a orientação jurídica básica e rápida.",
    imageUrl: "https://i.ibb.co/mFd9zzVJ/SYD-1.png",
    github: "https://github.com/WashingtonLuiz2312/Synex-Assistente-Juridico",
  },
  {
    title: "Sistema de Site para um SportBar",
    description:
      "Plataforma web para um SportBar local, com funcionalidades de cardápio digital, reservas online e promoções especiais. Melhorando a experiência do cliente e otimizando operações.",
    technologies: ["React", "Node.Js", "TypeScript"],
    problem: "Necessidade de modernizar a experiência do cliente e otimizar operações.",
    imageUrl: "https://i.ibb.co/1fqs0Nxw/Captura-de-tela-2025-12-13-143543.png",
    github: "https://github.com/WashingtonLuiz2312/arena-digital",
    demo: "https://sportbar.lovable.app/",
  },
  {
    title: "Reconhecimento Facial para Controle de Acesso",
    description:
      "Sistema de segurança com reconhecimento facial em tempo real, integrado a catracas e portas eletrônicas. Alta precisão e baixa latência computacional.",
    technologies: ["Em desenvolvimento", "Python", "OpenCV"],
    problem: "Controle de acesso manual é lento e vulnerável a fraudes.",
    imageUrl: "", // Sem imagem por enquanto, o componente vai lidar com isso graciosamente
    github: "https://github.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-black text-white relative overflow-hidden">
      
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header da Seção */}
          <div className="text-center mb-20">
            <span className="font-mono text-emerald-500 text-sm mb-4 block uppercase tracking-wider">
              // Portfólio Profissional
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Projetos em <span className="text-emerald-500">destaque</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Uma seleção dos projetos mais relevantes desenvolvidos ao longo da minha jornada, 
              demonstrando minhas habilidades em arquitetura, código e resolução de problemas reais.
            </p>
          </div>

          {/* Grid de Projetos */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-900/50 transition-all duration-500 overflow-hidden"
              >
                {/* Imagem do Projeto com Efeito Parallax Suave */}
                <div className="h-56 relative overflow-hidden bg-zinc-900 border-b border-zinc-800/50">
                  {project.imageUrl ? (
                    <img 
                      src={project.imageUrl} 
                      alt={`Capa do projeto ${project.title}`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zinc-900">
                      <Code2 className="w-16 h-16 text-zinc-800" />
                    </div>
                  )}
                  
                  {/* Gradiente escuro para mesclar a imagem com o card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/95 via-zinc-900/20 to-transparent" />
                  
                  {/* Tech Stack Overlay (Pills) */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 z-10">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-black/80 backdrop-blur-md text-zinc-300 rounded-full text-xs font-mono border border-zinc-700 group-hover:border-emerald-500/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-zinc-300 rounded-full text-xs font-mono border border-zinc-700 group-hover:border-emerald-500/50 transition-colors">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Problema Resolvido */}
                  <div className="bg-black/50 rounded-xl p-4 mb-8 border border-zinc-800/50 group-hover:border-zinc-700 transition-colors">
                    <span className="text-xs font-mono text-emerald-500 uppercase tracking-wider block mb-2">
                      Problema resolvido:
                    </span>
                    <p className="text-sm text-zinc-400">
                      {project.problem}
                    </p>
                  </div>

                  {/* Links de Ação */}
                  <div className="flex items-center gap-6 pt-6 border-t border-zinc-800/50 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-emerald-500 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      Repositório
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-emerald-500 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Botão Ver Mais */}
          <div className="text-center mt-16">
            <Button 
              variant="outline" 
              className="group border-zinc-800 bg-transparent text-zinc-300 hover:bg-zinc-900 hover:text-white hover:border-emerald-500/50 transition-all duration-300 h-12 px-8"
            >
              Ver todos os projetos no GitHub
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:text-emerald-500 transition-all" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;