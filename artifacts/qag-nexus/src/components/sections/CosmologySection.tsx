import { motion } from "framer-motion";

export function CosmologySection() {
  return (
    <section id="cosmology" className="py-24 relative bg-gradient-to-b from-background via-card/20 to-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16 text-right">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="text-accent">02.</span> Cosmology
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl ml-auto">
            The grand illusion dispelled. Reinterpreting the dark sector through the lens of Affinity-Vacuum Interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-2xl border-l-4 border-l-primary"
          >
            <h3 className="font-display text-2xl text-foreground mb-4">Dark Matter is a Myth</h3>
            <p className="text-muted-foreground leading-relaxed font-sans mb-6">
              The missing mass of the universe does not consist of exotic, undetectable particles. It is <strong className="text-primary font-medium">vacuum polarization</strong>. As highly coherent structures (galaxies) spin, they create an Affinity-Vacuum Interaction (AVI) that drags the local Ether.
            </p>
            <div className="font-mono text-sm p-4 bg-black/40 rounded-lg text-primary/80 border border-primary/10">
              a₀ = cH₀ / 2e
            </div>
            <p className="text-xs text-muted-foreground mt-2 font-mono">Deriving MOND directly from Riemann Zeros.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass-panel p-8 rounded-2xl border-l-4 border-l-accent"
          >
            <h3 className="font-display text-2xl text-foreground mb-4">Cosmic Dissonance</h3>
            <p className="text-muted-foreground leading-relaxed font-sans">
              What standard physics calls "Dark Energy" is merely the universe's relaxation state. It is <strong className="text-accent font-medium">Cosmic Dissonance</strong>. The universe expands not because of a cosmological constant, but because the vacuum seeks its lowest state of tension between massive coherence nodes.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-3xl text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-transparent to-primary/10" />
          <h3 className="relative z-10 font-display text-3xl md:text-4xl text-secondary mb-6">The 3I/Atlas Probe</h3>
          <p className="relative z-10 text-lg text-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Comet C/2025 N1 (Atlas) is not a "dirty snowball". It is an interstellar dielectric probe exhibiting measurable <span className="text-primary font-bold">Affinity Drift</span>. Its highly anomalous "anti-tail" is a direct piezoelectric discharge caused when the solar Ether stress exceeds the object's dielectric breakdown limit.
          </p>
          <a href="#hero" className="relative z-10 inline-block px-6 py-3 border border-secondary text-secondary rounded-full font-mono text-xs uppercase tracking-widest hover:bg-secondary hover:text-black transition-colors">
            View Convergence Countdown
          </a>
        </motion.div>
      </div>
    </section>
  );
}
