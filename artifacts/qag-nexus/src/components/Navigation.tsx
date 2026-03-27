import { Atom, Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
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
  { name: "Capabilities", href: "#capabilities" },
  { name: "Partner", href: "#partnerships" },
  { name: "Aetheria", href: "#aetheria" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 bg-background/90 dark:bg-black/70 dark:border-white/5 backdrop-blur-xl transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Atom className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-500" />
            </motion.div>
            <div>
              <h1 className="font-display font-bold text-sm leading-tight text-foreground tracking-widest">
                R&R DROIDS
              </h1>
              <p className="font-mono text-[9px] text-primary tracking-[0.2em] uppercase opacity-70">
                QAG — Quantum Affinity Gravity
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-3">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-[9px] font-mono text-muted-foreground hover:text-primary transition-all tracking-widest uppercase hover:-translate-y-0.5"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTAs & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3 shrink-0 ml-4">
            <a
              href="#capabilities"
              className="text-[10px] font-mono text-muted-foreground hover:text-primary border border-primary/20 hover:border-primary/50 px-3 py-1.5 rounded-lg transition-all tracking-widest uppercase"
            >
              Capabilities
            </a>
            <a
              href="#partnerships"
              className="text-[10px] font-mono bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/30 hover:border-secondary/60 px-4 py-1.5 rounded-lg transition-all tracking-widest uppercase font-semibold shadow-[0_0_15px_rgba(212,175,55,0.15)]"
            >
              Partner / License
            </a>
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden border-t border-white/5 bg-black/90 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 gap-2">
                {navLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-[10px] font-mono text-muted-foreground hover:text-primary py-2 px-3 rounded-lg hover:bg-white/5 transition-all tracking-widest uppercase"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#capabilities"
                  onClick={() => setMobileOpen(false)}
                  className="col-span-2 text-[10px] font-mono text-center text-foreground border border-white/10 py-3 px-4 rounded-lg tracking-widest uppercase hover:border-primary/50 transition-all mt-2"
                >
                  Capabilities Matrix
                </a>
                <a
                  href="#partnerships"
                  onClick={() => setMobileOpen(false)}
                  className="col-span-2 text-[10px] font-mono text-center text-secondary bg-secondary/10 border border-secondary/30 py-3 px-4 rounded-lg tracking-widest uppercase font-semibold"
                >
                  Partner / License
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
