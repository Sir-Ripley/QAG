import { Atom } from "lucide-react";
import { motion } from "framer-motion";

export function Navigation() {
  const links = [
    { name: "Physics", href: "#physics" },
    { name: "Base-12", href: "#base12" },
    { name: "Cosmology", href: "#cosmology" },
    { name: "Wave Fns", href: "#wavefunctions" },
    { name: "QAI Drop", href: "#qai-drop" },
    { name: "Validation", href: "#validation" },
    { name: "Biology", href: "#biology" },
    { name: "Consciousness", href: "#consciousness" },
    { name: "Energy", href: "#energy" },
    { name: "Math", href: "#math" },
    { name: "Aetheria", href: "#aetheria" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-x-0 border-t-0 rounded-none bg-background/60">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Atom className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-500" />
          </motion.div>
          <div>
            <h1 className="font-display font-bold text-lg leading-tight text-foreground tracking-widest">
              RIPLEY & RIPLEY
            </h1>
            <p className="font-mono text-[10px] text-primary tracking-[0.2em] uppercase opacity-80">
              Nexus Terminal v3.2
            </p>
          </div>
        </a>
        
        <div className="hidden lg:flex items-center gap-4">
          {links.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-mono text-muted-foreground hover:text-secondary hover:-translate-y-0.5 transition-all tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
