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
      "Conexão com APIs seguindo padrões rigorosos, com versionamento claro e tratamento adequado de erros.",
  },
  {
    icon: RefreshCw,
    title: "MVC & Microserviços",
    description:
      "Arquiteturas que escalam: MVC para aplicações monolíticas robustas e microserviços para sistemas distribuídos complexos.",
  },
  {
    icon: GitBranch,
    title: "Versionamento",
    description:
      "Git Flow, commits semânticos, code review e CI/CD. Histórico limpo e rastreável de todas as mudanças do projeto.",
  },
  {
    icon: Shield,
    title: "Segurança & Escalabilidade",
    description:
      "Autenticação robusta, validação de inputs e design de banco de dados preparado para alto volume e crescimento.",
  },
];

const Architecture = () => {
  return (
    <section id="architecture" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto"> {/* Reduzi um pouco o max-w para a lista não ficar esticada demais */}
          
          {/* Cabeçalho da Seção */}
          <div className="text-center mb-20">
            <span className="font-mono text-emerald-500 text-sm mb-4 block uppercase tracking-wider">
              // Arquitetura & Metodologia
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Como eu <span className="text-emerald-500">trabalho</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Princípios rigorosos e práticas validadas pelo mercado que guiam 
              meu desenvolvimento para entregar software de alta qualidade, 
              escalável e de fácil manutenção.
            </p>
          </div>

          {/* Lista de Princípios (Agora em Coluna Única) */}
          <div className="flex flex-col gap-6">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="group p-6 md:p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-900/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-black border border-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:border-emerald-500/30 transition-colors">
                    <principle.icon className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-200 mb-2 group-hover:text-white transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-zinc-500 text-sm md:text-base leading-relaxed group-hover:text-zinc-400 transition-colors">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Exemplo de Código (Estilo Terminal) */}
          <div className="mt-24 pt-16 border-t border-zinc-800/50">
            <div className="mb-8 text-center md:text-left">
              <span className="font-mono text-emerald-500 text-sm uppercase tracking-wider">
                // Exemplo de estrutura
              </span>
              <h3 className="text-2xl font-semibold mt-2">Arquitetura Clean na Prática</h3>
            </div>

            {/* Janela de Terminal Falsa */}
            <div className="w-full rounded-xl overflow-hidden border border-zinc-800 bg-[#0A0A0A] shadow-2xl">
              {/* Barra Superior do Terminal */}
              <div className="flex items-center px-4 py-3 border-b border-zinc-800 bg-[#121212]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs font-mono text-zinc-500 flex items-center justify-center gap-2">
                    <Code className="w-3 h-3" /> project-structure
                  </span>
                </div>
              </div>
              
              {/* Corpo do Código */}
              <div className="p-6 md:p-8 overflow-x-auto">
                <pre className="font-mono text-sm leading-loose">
                  <code className="text-zinc-300">
<span className="text-emerald-400">projeto/</span>
├── <span className="text-blue-400">src/</span>
│   ├── <span className="text-blue-400">domain/</span>           <span className="text-zinc-600 italic"># Regras de negócio (Agnóstico de framework)</span>
│   │   ├── entities/
│   │   └── usecases/
│   ├── <span className="text-blue-400">infrastructure/</span>   <span className="text-zinc-600 italic"># Implementações externas (BD, APIs, Serviços)</span>
│   │   ├── database/
│   │   └── api/
│   ├── <span className="text-blue-400">presentation/</span>     <span className="text-zinc-600 italic"># Interface do usuário (React, Vue, etc)</span>
│   │   ├── components/
│   │   └── pages/
│   └── <span className="text-blue-400">shared/</span>           <span className="text-zinc-600 italic"># Utilitários e tipagens compartilhadas</span>
├── <span className="text-blue-400">tests/</span>              <span className="text-zinc-600 italic"># Testes unitários e de integração</span>
├── docker-compose.yml  <span className="text-zinc-600 italic"># Orquestração de containers</span>
└── README.md           <span className="text-zinc-600 italic"># Documentação base</span>
                  </code>
                </pre>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default Architecture;