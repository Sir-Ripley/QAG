import { motion } from "framer-motion";
import { HookBanner, ProblemSolution, InvestorCard, SectionAttribution, NextSectionGuide } from "@/components/SectionLayers";

export function CosmologySection() {
  return (
    <section id="cosmology" className="py-24 relative bg-gradient-to-b from-background via-card/20 to-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-2 text-right">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent/60">by Rodney A. Ripley Jr. — Ripley & Ripley Research</span>
        </div>
        <div className="mb-4 text-right">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="text-accent">03.</span> Cosmology
          </h2>
        </div>

        <div className="flex justify-end mb-6">
          <div className="max-w-3xl text-right">
            <HookBanner hook="95% of the universe has been classified as 'dark' — unknown, undetected, and unexplained. QAG shows these are not missing substances. They are missing equations." />
          </div>
        </div>

        <ProblemSolution
          problem="The ΛCDM standard model requires 26% dark matter (never directly detected) and 69% dark energy (a cosmological constant with no physical explanation) to account for galactic rotation curves and cosmic expansion. These are mathematical patches, not physics. The Hubble tension (H₀) and structure growth tension (S₈) remain unresolved."
          solution="The AVI Law (Affinity-Vacuum Interaction) derives the MOND acceleration floor a₀ directly from measurable constants: a₀ = cH₀/2e. This eliminates dark matter entirely. Cosmic Dissonance — the vacuum seeking its lowest tension state between coherence nodes — replaces the cosmological constant. Both H₀ = 76.55 km/s/Mpc and S₈ = 0.783 emerge naturally."
          accentColor="accent"
        />

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
            <div className="mt-4 pt-4 border-t border-white/5">
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-2">Evidence</div>
              <div className="space-y-1 text-xs font-mono">
                <div className="flex justify-between"><span className="text-muted-foreground">SPARC fit (4 galaxies)</span><span className="text-secondary">χ²_red = 0.9632</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">DDO154 improvement</span><span className="text-secondary">100.6× over baryonic</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">H₀ (QAG)</span><span className="text-primary">76.55 km/s/Mpc</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">S₈ (QAG)</span><span className="text-primary">0.783</span></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass-panel p-8 rounded-2xl border-l-4 border-l-accent"
          >
            <h3 className="font-display text-2xl text-foreground mb-4">Cosmic Dissonance</h3>
            <p className="text-muted-foreground leading-relaxed font-sans mb-6">
              What standard physics calls "Dark Energy" is merely the universe's relaxation state. It is <strong className="text-accent font-medium">Cosmic Dissonance</strong>. The universe expands not because of a cosmological constant, but because the vacuum seeks its lowest state of tension between massive coherence nodes.
            </p>
            <div className="mt-4 pt-4 border-t border-white/5">
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-2">Key Insight</div>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                The cosmological constant Λ has no physical meaning in QAG. Its observed value is simply the relaxation rate of the Ether field between large-scale coherence structures. The "fine-tuning problem" dissolves — there is nothing to tune, only Affinity at work.
              </p>
            </div>
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
          <p className="relative z-10 text-lg text-foreground max-w-4xl mx-auto leading-relaxed mb-4">
            Comet C/2025 N1 (Atlas) is not a "dirty snowball." It is an interstellar dielectric probe exhibiting measurable <span className="text-primary font-bold">Affinity Drift</span>. Its highly anomalous "anti-tail" is a direct piezoelectric discharge caused when the solar Ether stress exceeds the object's dielectric breakdown limit.
          </p>
          <p className="relative z-10 text-sm text-muted-foreground max-w-2xl mx-auto mb-6 font-sans">
            QAG predicts a Resonant Phase Transition when Atlas crosses Jupiter's Hill Sphere on April 8, 2026. This is a falsifiable astronomical prediction based on QAG vacuum physics — not coincidence.
          </p>
          <a href="#hero" className="relative z-10 inline-block px-6 py-3 border border-secondary text-secondary rounded-full font-mono text-xs uppercase tracking-widest hover:bg-secondary hover:text-black transition-colors">
            View Convergence Countdown
          </a>
        </motion.div>

        <InvestorCard
          application="The AVI Law eliminates the need for dark matter halo models in galaxy survey analysis. Next-generation telescope programs (Roman, Euclid, JWST) and precision satellite navigation systems can integrate QAG's vacuum-drag corrections to replace ad-hoc dark matter parameter fitting."
          value="The first unified cosmological framework that fits observational data without exotic invisible particles is immediately publishable and licensable. Cosmological modeling software incorporating QAG would replace thousands of arbitrary dark matter parameters with 3 universal constants. Government programs funding cosmological research (NSF, NASA, DOE) represent direct grant and partnership pathways."
          accentColor="accent"
        />

        <SectionAttribution sectionNum="03" />
        <NextSectionGuide
          nextName="Wave Functions & Temporal Echo"
          reason="the mechanism by which spacetime remembers every gravitational event"
          href="#wavefunctions"
          accentColor="primary"
        />
      </div>
    </section>
  );
}
