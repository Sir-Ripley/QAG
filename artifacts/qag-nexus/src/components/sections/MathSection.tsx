import { motion } from "framer-motion";
import {
  PlainEnglishHook,
  ProblemBlock,
  SolutionBlock,
  InvestorCard,
  SectionAttribution,
  NextSectionGuide,
} from "./NineLayerComponents";

const laws = [
  {
    title: "Riemann Hypothesis",
    accentColor: "border-t-primary text-primary",
    statement: "The critical line Re(s)=½ is the only frequency domain where the Chronon (Time) field is stable.",
    body: "Standard mathematics treats the Riemann zeros as abstract number-theoretic artifacts. Under QAG, the non-trivial zeros are gravitational echoes of the Chronon field — physical resonance modes of quantized spacetime. The critical line Re(s)=½ is not arbitrary: it is the only frequency domain where the Ether is stable against perturbation. QAG provides the first physical basis for the hypothesis.",
    qagValue: "Critical Line = Chronon stability domain. Non-trivial zeros = gravitational echoes.",
    application: "Solving the Riemann Hypothesis via QAG reframes prime number distribution as a physical resonance problem — with direct implications for post-quantum cryptography and number-theoretic computing architectures.",
    evidence: "The Chronon field stability at Re(s)=1/2 is independently consistent with the N=8 echo decay series: both are expressions of the same vacuum reflectivity constant R = 0.4."
  },
  {
    title: "Navier-Stokes Equations",
    accentColor: "border-t-accent text-accent",
    statement: "Fluid dynamics solutions break down because they assume a continuous universe — but spacetime is granular.",
    body: "Classical Navier-Stokes assume continuous spacetime and break down at singularities. QAG shows the universe is granular: at τ_pixel = 1.03×10⁻²⁵s (the Pixel of Time), classical hydrodynamics transitions into Quantum Affinity logic. Solutions exist and are smooth — but only if you respect the granular boundary condition. The 'blow-up' is a rounding error from ignoring the Ether's discrete structure.",
    qagValue: "τ_pixel = 1.03×10⁻²⁵s. Granular spacetime eliminates all singularities.",
    application: "QAG granular fluid dynamics enables exact turbulence prediction at the Pixel of Time scale — applicable to hypersonic aerodynamics, plasma confinement in fusion reactors, and high-speed naval hydrodynamics.",
    evidence: "The Pixel of Time (t_pixel = 1.03×10⁻²⁵s) appears independently in the LIGO echo timing formula as the fundamental discretization unit of gravitational wave propagation — cross-domain confirmation of the granular vacuum model."
  },
  {
    title: "Yang-Mills Mass Gap",
    accentColor: "border-t-secondary text-secondary",
    statement: "The mass gap in quantum field theory is the physical mass of the Affiniton particle.",
    body: "The Yang-Mills Mass Gap problem asks why quantum fields have a lowest energy state above zero — the 'mass gap.' QAG resolves this definitively: the mass gap is the physical mass of the Affiniton (γ_ψ — the gauge boson of Affinity), calculated as 9.05 GeV from the QAG string slope. There is no gap — there is a particle, and it has a mass. Experimental confirmation would be detection of the Affiniton at collider energies.",
    qagValue: "Mass Gap = Affiniton mass = 9.05 GeV (QAG-V2 string slope derivation).",
    application: "The Affiniton at 9.05 GeV is a directly detectable prediction — searchable at existing particle accelerators (LHC, future FCC). A confirmed detection would be among the most significant particle physics discoveries in decades.",
    evidence: "The 9.05 GeV mass gap value is derived from the QAG vacuum floor frequency and the base-12 scaling constant Φ = 1.194797 — the same constant that independently recovers the fine-structure constant α⁻¹ = 137.036."
  }
];

export function MathSection() {
  return (
    <section id="math" className="py-24 relative bg-black/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-6">
          <SectionAttribution />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            <span className="text-primary">11.</span> The Source Code — Master Mathematics
          </h2>
          <div className="max-w-3xl mx-auto">
            <PlainEnglishHook>
              The universe's three most famous unsolved equations all have the same answer — they are different views of the same Ether physics.
            </PlainEnglishHook>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProblemBlock>
            The Riemann Hypothesis, Navier-Stokes Existence &amp; Smoothness, and Yang-Mills Mass Gap are three of the seven Millennium Prize Problems — worth $1,000,000 each. Despite centuries of collective effort, none has been solved. Each describes a different failure mode of mathematics when applied to continuous, smooth models of a universe that is neither.
          </ProblemBlock>
          <SolutionBlock>
            QAG resolves all three by recognizing they are symptoms of the same error: treating spacetime as continuous. The universe is granular (τ_pixel = 1.03×10⁻²⁵s). The Riemann zeros are Chronon resonance modes. Navier-Stokes singularities are pixel-boundary artifacts. The Yang-Mills mass gap is the Affiniton particle at 9.05 GeV. One framework. Three solutions.
          </SolutionBlock>
        </div>

        <InvestorCard>
          A framework that credibly addresses two Millennium Prize Problems (Riemann and Yang-Mills) simultaneously, and provides a physical derivation for both, is independently extraordinary — regardless of the broader QAG theory. Institutions that take this seriously include DARPA (post-quantum cryptography implications of the Riemann solution), CERN (Affiniton search program at LHC), and NSF (Navier-Stokes resolution for hypersonic and fusion applications). The IP position on a physically derived Riemann solution and a predicted particle at a specific, testable mass is defensible across academic, defense, and commercial domains.
        </InvestorCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {laws.map((law, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card p-8 rounded-2xl relative border-t-4 ${law.accentColor.split(" ")[0]}`}
            >
              <h3 className={`font-display text-xl text-foreground mt-2 mb-2 ${law.accentColor.split(" ")[1]}`}>{law.title}</h3>
              <p className={`font-mono text-xs uppercase tracking-widest mb-4 ${law.accentColor.split(" ")[1]} opacity-70`}>{law.statement}</p>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans mb-4">
                {law.body}
              </p>
              <div className="space-y-3 text-[10px] font-mono border-t border-white/5 pt-3">
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-muted-foreground mb-1">QAG Resolution</div>
                  <p className={`${law.accentColor.split(" ")[1]} text-xs`}>{law.qagValue}</p>
                </div>
                <div>
                  <span className="text-primary/50 uppercase tracking-widest">Application: </span>
                  <span className="text-muted-foreground/70">{law.application}</span>
                </div>
                <div>
                  <span className="text-secondary/50 uppercase tracking-widest">Evidence: </span>
                  <span className="text-muted-foreground/60">{law.evidence}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 rounded-2xl border border-primary/20 mb-8"
        >
          <h3 className="font-mono text-sm uppercase tracking-widest text-primary mb-6 text-center">QAG Master Equation — The Unified Source</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-black/40 rounded-xl border border-primary/10">
              <div className="text-xs text-muted-foreground font-mono mb-2">MOND Critical Acceleration</div>
              <div className="font-display text-lg text-primary">a₀ = cH₀ / 2e</div>
              <div className="text-[10px] text-muted-foreground mt-2 font-mono">Derived from Riemann Zeros</div>
            </div>
            <div className="p-4 bg-black/40 rounded-xl border border-secondary/10">
              <div className="text-xs text-muted-foreground font-mono mb-2">Temporal Pixel</div>
              <div className="font-display text-lg text-secondary">τ_pixel = 1.03×10⁻²⁵ s</div>
              <div className="text-[10px] text-muted-foreground mt-2 font-mono">Granularity of spacetime</div>
            </div>
            <div className="p-4 bg-black/40 rounded-xl border border-accent/10">
              <div className="text-xs text-muted-foreground font-mono mb-2">Affiniton Mass</div>
              <div className="font-display text-lg text-accent">m_γψ = 9.05 GeV</div>
              <div className="text-[10px] text-muted-foreground mt-2 font-mono">Yang-Mills mass gap resolved</div>
            </div>
          </div>
        </motion.div>

        <NextSectionGuide
          next="Capabilities Matrix"
          reason="the full technology readiness assessment for defense and commercial applications"
        />
      </div>
    </section>
  );
}
