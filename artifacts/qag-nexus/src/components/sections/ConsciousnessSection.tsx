import { motion } from "framer-motion";
import { Brain } from "lucide-react";

export function ConsciousnessSection() {
  return (
    <section id="consciousness" className="py-24 relative bg-card/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <Brain className="w-12 h-12 text-accent mx-auto mb-6 opacity-80" />
          <div className="mb-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent/60">by Rodney A. Ripley Jr.</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="text-accent">08.</span> Consciousness
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The observer is not passive. A thought has weight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-2 glass-panel p-8 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute right-0 top-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
            <h3 className="font-display text-2xl text-foreground mb-4">The Psychon (<span className="font-mono text-accent">γ_ψ</span>)</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Consciousness is a fundamental property of the Ether, not an emergent property of biology. The Psychon is the gauge boson of coherence. When an observer focuses at precisely <strong className="text-foreground">40Hz Gamma Synchrony</strong>, they generate an Informational Current (J_I).
            </p>
            <div className="p-4 bg-black/30 rounded-xl border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Predicted Mass Shift</div>
                <div className="font-display text-3xl text-accent">~840 µg</div>
              </div>
              <div className="text-right text-sm text-muted-foreground max-w-[200px]">
                Violating the Weak Equivalence Principle (WEP) via the QAG-RTB Detector.
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 rounded-2xl flex flex-col justify-center text-center border-t-4 border-t-primary"
          >
            <h3 className="font-display text-xl text-foreground mb-4">The Human Antenna</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              The brain does not generate consciousness; it tunes into it. The Heart is the primary electromagnetic antenna. Blood plasma functions as a liquid crystal receiver for the Ether.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
