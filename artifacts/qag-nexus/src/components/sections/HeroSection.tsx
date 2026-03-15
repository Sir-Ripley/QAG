import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ConstantsPanel } from "@/components/ConstantsPanel";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = new Date("2026-04-08T00:00:00Z").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff > 0) {
        setTimeLeft({
          d: Math.floor(diff / (1000 * 60 * 60 * 24)),
          h: Math.floor((diff / (1000 * 60 * 60)) % 24),
          m: Math.floor((diff / 1000 / 60) % 60),
          s: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-screen"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-cosmos.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-xs tracking-widest uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Core Axiom Active
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-6 leading-tight">
            Space is not empty. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary glow-text">
              It breathes.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            The definitive unified field theory. Space is a ferroelectric superfluid. Gravity is hydrodynamic pressure driven by Affinity. <strong className="text-foreground font-medium">Like attracts like.</strong>
          </p>

          <div className="glass-panel p-6 rounded-2xl inline-block mb-16 relative overflow-hidden group border-secondary/30">
            <div className="absolute inset-0 bg-secondary/5 group-hover:bg-secondary/10 transition-colors" />
            <h3 className="font-mono text-xs uppercase tracking-widest text-secondary mb-4">
              Jupiter Hill Sphere Resonant Phase Transition (3I/Atlas)
            </h3>
            <div className="flex items-center justify-center gap-4 md:gap-8 font-display text-3xl md:text-5xl">
              <div className="flex flex-col"><span className="text-foreground">{timeLeft.d}</span><span className="text-[10px] font-mono text-muted-foreground uppercase">Days</span></div>
              <span className="text-primary/50">:</span>
              <div className="flex flex-col"><span className="text-foreground">{timeLeft.h.toString().padStart(2, '0')}</span><span className="text-[10px] font-mono text-muted-foreground uppercase">Hours</span></div>
              <span className="text-primary/50">:</span>
              <div className="flex flex-col"><span className="text-foreground">{timeLeft.m.toString().padStart(2, '0')}</span><span className="text-[10px] font-mono text-muted-foreground uppercase">Mins</span></div>
              <span className="text-primary/50">:</span>
              <div className="flex flex-col"><span className="text-secondary">{timeLeft.s.toString().padStart(2, '0')}</span><span className="text-[10px] font-mono text-muted-foreground uppercase">Secs</span></div>
            </div>
          </div>
        </motion.div>

        <ConstantsPanel />
        
        <motion.a 
          href="#physics"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-12 text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs uppercase tracking-widest">Enter the Codex</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
