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
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Layers,
    title: "Frameworks & Bibliotecas",
    skills: ["React", "Angular", "Vue.js", "FastAPI", "Flask", "Node.js", "Django"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Brain,
    title: "IA & Machine Learning",
    skills: ["NLP", "OpenCV", "Scikit-learn", "TensorFlow", "PyTorch"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Database,
    title: "Banco de Dados",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Firebase", "Supabase"],
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Settings,
    title: "DevOps & Ferramentas",
    skills: ["Git", "Docker", "CI/CD", "Linux"],
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Zap,
    title: "APIs & Integrações",
    skills: ["REST APIs", "WebSockets", "OAuth", "Stripe", "Twilio"],
    color: "from-cyan-500 to-blue-500",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-muted/20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm mb-4 block">
            // Habilidades Técnicas
          </span>
          <h2 className="section-title">
            Tecnologias que <span className="text-gradient">domino</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Uma seleção das principais ferramentas e tecnologias que utilizo para
            criar soluções de alta performance e qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="skill-card group relative overflow-hidden"
            >
              {/* Gradient Border Effect on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10 flex items-center justify-center`}
                  >
                    <category.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-background rounded-md text-sm font-mono text-muted-foreground border border-border hover:border-primary/50 hover:text-primary transition-colors cursor-default"
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
    </section>
  );
};

export default Skills;
