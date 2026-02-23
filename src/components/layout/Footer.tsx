import { forwardRef } from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer ref={ref} className="py-12 bg-black border-t border-zinc-800/50 relative overflow-hidden">
      
      {/* Brilho de fundo sutil */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-emerald-500/5 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo (Sincronizada com o Header) */}
          <a 
            href="#home" 
            className="font-mono text-xl font-bold text-white tracking-tight group"
          >
            <span className="text-emerald-500 transition-colors group-hover:text-emerald-400">&lt;</span>
            Washington
            <span className="text-emerald-500 transition-colors group-hover:text-emerald-400"> /&gt;</span>
          </a>

          {/* Social Links (Estilo Pill Premium) */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/WashingtonLuiz2312"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-900/50 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/50 hover:bg-zinc-900 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/washington-luiz-amorim/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-900/50 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/50 hover:bg-zinc-900 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:washington.tech@outlook.com.br"
              className="w-10 h-10 rounded-full bg-zinc-900/50 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/50 hover:bg-zinc-900 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-zinc-500 text-sm flex items-center gap-1.5 font-medium">
            © {currentYear} • Feito por{" "}
            Washington
          </p>

        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;