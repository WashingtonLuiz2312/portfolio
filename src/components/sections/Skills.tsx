import { 
  Code, 
  Layers, 
  Brain, 
  Database, 
  Settings,
  Zap
} from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Linguagens",
    skills: ["Python", "JavaScript", "TypeScript", "SQL"],
    // Gradiente sutil para o hover e ícone
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-cyan-400",
    borderColor: "group-hover:border-cyan-500/50",
  },
  {
    icon: Layers,
    title: "Frameworks & Libs",
    skills: ["React", "Angular", "Vue.js", "FastAPI", "Flask", "Node.js", "Django"],
    color: "from-emerald-500/20 to-green-500/20",
    iconColor: "text-emerald-400",
    borderColor: "group-hover:border-emerald-500/50",
  },
  {
    icon: Brain,
    title: "IA & Machine Learning",
    skills: ["NLP", "OpenCV", "Scikit-learn", "TensorFlow", "PyTorch"],
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
    borderColor: "group-hover:border-purple-500/50",
  },
  {
    icon: Database,
    title: "Banco de Dados",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Firebase", "Supabase"],
    color: "from-orange-500/20 to-yellow-500/20",
    iconColor: "text-orange-400",
    borderColor: "group-hover:border-orange-500/50",
  },
  {
    icon: Settings,
    title: "DevOps & Ferramentas",
    skills: ["Git", "Docker", "CI/CD", "Linux"],
    color: "from-red-500/20 to-rose-500/20",
    iconColor: "text-rose-400",
    borderColor: "group-hover:border-rose-500/50",
  },
  {
    icon: Zap,
    title: "APIs & Integrações",
    skills: ["REST APIs", "WebSockets", "OAuth", "Stripe", "Twilio", "N8N"], // Adicionei N8N pelo seu perfil
    color: "from-indigo-500/20 to-blue-500/20",
    iconColor: "text-indigo-400",
    borderColor: "group-hover:border-indigo-500/50",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-black text-white relative overflow-hidden">
      
      {/* Background Pattern Minimalista (Bolinhas) */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Cabeçalho da Seção */}
          <div className="text-center mb-20">
            <span className="font-mono text-emerald-500 text-sm mb-4 block uppercase tracking-wider">
              // Habilidades Técnicas
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Tecnologias que <span className="text-emerald-500">domino</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Uma seleção das principais ferramentas e linguagens que utilizo no dia a dia para
              arquitetar e desenvolver soluções robustas.
            </p>
          </div>

          {/* Grid de Habilidades */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className={`group relative overflow-hidden rounded-2xl bg-zinc-900/40 border border-zinc-800 p-8 transition-all duration-300 ${category.borderColor}`}
              >
                {/* Efeito de Fundo Suave no Hover (usando a cor específica da categoria) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Ícone e Título */}
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className="w-12 h-12 rounded-xl bg-black border border-zinc-800 flex items-center justify-center shadow-inner"
                    >
                      <category.icon className={`h-6 w-6 ${category.iconColor}`} />
                    </div>
                    <h3 className="font-semibold text-xl text-zinc-100">{category.title}</h3>
                  </div>

                  {/* Badges de Skills */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-lg text-sm font-mono text-zinc-400 border border-zinc-800/80 hover:text-white hover:border-zinc-500 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;