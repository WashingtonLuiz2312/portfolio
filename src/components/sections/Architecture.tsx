import { 
  GitBranch, 
  Layers, 
  Shield, 
  Zap, 
  Code, 
  RefreshCw 
} from "lucide-react";

const principles = [
  {
    icon: Code,
    title: "Clean Code",
    description:
      "Código legível, bem documentado e fácil de manter. Nomenclatura clara, funções com responsabilidade única e comentários quando necessário.",
  },
  {
    icon: Layers,
    title: "Arquitetura em Camadas",
    description:
      "Separação clara de responsabilidades: apresentação, lógica de negócios e acesso a dados. Facilita testes e manutenção.",
  },
  {
    icon: Zap,
    title: "APIs REST",
    description:
      "Conexão com apis seguindo padrões, com versionamento, e tratamento adequado de erros.",
  },
  {
    icon: RefreshCw,
    title: "MVC & Microserviços",
    description:
      "Arquiteturas que escalam: MVC para aplicações monolíticas e microserviços para sistemas distribuídos complexos.",
  },
  {
    icon: GitBranch,
    title: "Versionamento",
    description:
      "Git Flow, commits semânticos, code review e integração contínua. Histórico limpo e rastreável de todas as mudanças.",
  },
  {
    icon: Shield,
    title: "Segurança & Escalabilidade",
    description:
      "Autenticação, validação de inputs e design preparado para crescimento.",
  },
];

const Architecture = () => {
  return (
    <section id="architecture" className="section-padding bg-muted/20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm mb-4 block">
              // Arquitetura & Metodologia
            </span>
            <h2 className="section-title">
              Como eu <span className="text-gradient">trabalho</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Princípios e práticas que guiam meu desenvolvimento para entregar
              software de alta qualidade.
            </p>
          </div>

          {/* Principles Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <principle.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{principle.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Code Example */}
          <div className="mt-16">
            <h3 className="font-mono text-primary text-sm mb-4">
              // Exemplo de estrutura de projeto
            </h3>
            <div className="code-block overflow-x-auto">
              <pre className="text-muted-foreground text-sm">
                <code>{`projeto/
├── src/
│   ├── domain/           # Regras de negócio
│   │   ├── entities/
│   │   └── usecases/
│   ├── infrastructure/   # Implementações externas
│   │   ├── database/
│   │   └── api/
│   ├── presentation/     # Interface do usuário
│   │   ├── components/
│   │   └── pages/
│   └── shared/           # Utilitários compartilhados
├── tests/
├── docker-compose.yml
└── README.md`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
