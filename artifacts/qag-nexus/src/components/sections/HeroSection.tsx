import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ConstantsPanel } from "@/components/ConstantsPanel";
import { ChevronDown, ArrowRight } from "lucide-react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = new Date("2026-04-08T00:00:00Z").getTime();
    const update = () => {
      const diff = target - Date.now();
      if (diff > 0) {
        setTimeLeft({
          d: Math.floor(diff / (1000 * 60 * 60 * 24)),
          h: Math.floor((diff / (1000 * 60 * 60)) % 24),
          m: Math.floor((diff / 1000 / 60) % 60),
          s: Math.floor((diff / 1000) % 60),
        });
      }
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-panel p-6 rounded-2xl inline-block relative overflow-hidden group border-secondary/20 hover:border-secondary/40 transition-all">
      <div className="absolute inset-0 bg-secondary/3 group-hover:bg-secondary/6 transition-colors" />
      <h3 className="font-mono text-[10px] uppercase tracking-widest text-secondary/80 mb-4 text-center">
        ⚡ Jupiter Hill Sphere Resonant Phase Transition (3I/Atlas) — April 8, 2026
      </h3>
      <div className="flex items-center justify-center gap-4 md:gap-8">
        {[
          { val: timeLeft.d, label: "Days" },
          { val: timeLeft.h, label: "Hours", pad: true },
          { val: timeLeft.m, label: "Mins", pad: true },
          { val: timeLeft.s, label: "Secs", pad: true },
        ].map(({ val, label, pad }, i) => (
          <div key={label} className="flex items-center gap-4 md:gap-8">
            {i > 0 && <span className="text-primary/30 font-display text-2xl">:</span>}
            <div className="flex flex-col items-center">
              <span className={`font-display text-3xl md:text-5xl ${i === 3 ? 'text-secondary' : 'text-foreground'}`}>
                {pad ? String(val).padStart(2, '0') : val}
              </span>
              <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest mt-1">{label}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-center font-mono text-[9px] text-muted-foreground/40 uppercase tracking-widest">
        QAG Falsifiable Prediction — Rodney A. Ripley Jr.
      </div>
    </div>
  );
}

const credentialBadges = [
  { label: "SPARC Validated", detail: "175 Galaxies · χ²=0.9632" },
  { label: "LIGO Echo Model", detail: "6 Events · Sub-ms Precision" },
  { label: "Yang-Mills Solved", detail: "Mass Gap = 9.05 GeV" },
  { label: "Riemann Proven", detail: "Physical Basis Established" },
];

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 opacity-35 mix-blend-screen"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-cosmos.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30 z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-5xl"
        >
          {/* Status Badge */}
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-[10px] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Core Axiom Active
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
              by Rodney A. Ripley Jr. — R&R Droids
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-4 leading-[1.05]">
            Space is not empty.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary glow-text">
              It breathes.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground font-light mb-6 max-w-3xl mx-auto leading-relaxed">
            The definitive unified field theory. Space is a ferroelectric superfluid. Gravity is hydrodynamic pressure driven by{" "}
            <strong className="text-foreground font-medium">Affinity</strong>.
            Like attracts like — at every scale, from quark to cosmos.
          </p>

          {/* Dual Audience Signals */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <a
              href="#validation"
              className="flex items-center gap-2 font-mono text-[10px] text-foreground/70 hover:text-primary border border-white/10 hover:border-primary/40 px-4 py-2 rounded-lg transition-all uppercase tracking-widest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              For Researchers — SPARC & LIGO Validation Data
            </a>
            <a
              href="#capabilities"
              className="flex items-center gap-2 font-mono text-[10px] text-secondary hover:text-secondary/80 border border-secondary/30 hover:border-secondary/50 bg-secondary/5 px-4 py-2 rounded-lg transition-all uppercase tracking-widest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              For Defense & Industry — Capabilities Matrix
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Credential Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {credentialBadges.map(badge => (
              <div key={badge.label} className="glass-card px-3 py-2 rounded-lg text-center">
                <div className="font-mono text-[9px] text-primary uppercase tracking-widest">{badge.label}</div>
                <div className="font-mono text-[8px] text-muted-foreground mt-0.5">{badge.detail}</div>
              </div>
            ))}
          </div>

          {/* Atlas Countdown */}
          <div className="mb-12">
            <Countdown />
          </div>
        </motion.div>

        {/* Constants Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="w-full"
        >
          <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/40 mb-4 text-center">
            Canonical QAG-V2 Constants
          </div>
          <ConstantsPanel />
        </motion.div>

        {/* Scroll CTA */}
        <motion.a
          href="#physics"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16 text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">Enter the Codex</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
