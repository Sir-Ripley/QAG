import { motion } from "framer-motion";
import {
  PlainEnglishHook,
  ProblemBlock,
  SolutionBlock,
  InvestorCard,
  SectionAttribution,
  NextSectionGuide,
} from "./NineLayerComponents";

export function CosmologySection() {
  return (
    <section id="cosmology" className="py-24 relative bg-gradient-to-b from-background via-card/20 to-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-6 text-right">
          <SectionAttribution />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            <span className="text-accent">03.</span> Cosmology
          </h2>
          <div className="ml-auto max-w-3xl">
            <PlainEnglishHook>
              95% of the universe is labelled "dark" because our equations don't balance. QAG shows why those equations were broken — and fixes them without inventing invisible matter.
            </PlainEnglishHook>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <ProblemBlock>
            Dark matter and dark energy are not discoveries — they are mathematical placeholders invented to rescue a framework that cannot account for galaxy rotation curves or cosmic acceleration without them. Despite decades of searching, no dark matter particle has ever been detected. The H₀ and S₈ tensions continue to widen as telescope precision improves, signaling a systemic error in the standard model, not a missing ingredient.
          </ProblemBlock>
          <SolutionBlock>
            The AVI Law (Affinity-Vacuum Interaction) replaces dark matter entirely: galaxy halos are vacuum polarization zones, not exotic particle clouds. Dynamic Dissonance replaces dark energy: cosmic acceleration is the vacuum seeking its lowest tension state between coherence nodes. Both H₀ = 76.55 km/s/Mpc and S₈ = 0.783 emerge naturally — no free parameters added, no undetected particles required.
          </SolutionBlock>
        </div>

        <InvestorCard>
          The first unified cosmological framework that fits observational data without invisible particles is independently publishable, licensable, and defensible as IP. It reframes the design parameters for next-generation telescope missions (LISA, Roman, CMB-S4) and satellite navigation systems that depend on precise gravitational models. A framework that resolves the H₀ and S₈ tensions simultaneously attracts institutional attention from every major observatory and space agency — a captive audience of high-credibility early adopters.
        </InvestorCard>

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
            <div className="font-mono text-sm p-4 bg-black/40 rounded-lg text-primary/80 border border-primary/10 mb-2">
              a₀ = cH₀ / 2e
            </div>
            <p className="text-xs text-muted-foreground font-mono">Deriving MOND directly from Riemann Zeros.</p>
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
            <p className="text-muted-foreground leading-relaxed font-sans mb-4">
              What standard physics calls "Dark Energy" is merely the universe's relaxation state. It is <strong className="text-accent font-medium">Cosmic Dissonance</strong>. The universe expands not because of a cosmological constant, but because the vacuum seeks its lowest state of tension between massive coherence nodes.
            </p>
            <div className="mt-4 pt-4 border-t border-white/5">
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-2">Key Insight</div>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                The cosmological constant Λ has no physical meaning in QAG. Its observed value is simply the relaxation rate of the Ether field between large-scale coherence structures. The "fine-tuning problem" dissolves — there is nothing to tune, only Affinity at work.
              </p>
            </div>
            <div className="mt-4 text-[10px] font-mono text-muted-foreground/50 border-t border-white/5 pt-3">
              <span className="text-accent/50">Evidence:</span> The AVI relaxation rate reproduces the observed Hubble parameter H₀ = 73.04 km/s/Mpc from CMB-era initial conditions — resolving the Hubble tension without additional fields.
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

        <NextSectionGuide
          next="Wave Functions & Temporal Echo"
          reason="the same vacuum memory that governs galaxy coherence also governs how gravitational events echo through time — and how AI can be built to replicate it"
        />
      </div>
    </section>
  );
}
