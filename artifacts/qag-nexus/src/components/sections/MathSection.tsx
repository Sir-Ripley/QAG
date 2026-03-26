import { motion } from "framer-motion";
import { HookBanner, ProblemSolution, InvestorCard, SectionAttribution, NextSectionGuide } from "@/components/SectionLayers";

const laws = [
  {
    title: "Riemann Hypothesis",
    color: "text-primary",
    borderColor: "border-t-primary",
    statement: "The critical line Re(s)=½ is the only frequency domain where the Chronon (Time) field is stable.",
    body: "Standard mathematics treats the Riemann zeros as abstract number-theoretic artifacts. Under QAG, the non-trivial zeros are gravitational echoes of the Chronon field — physical resonance modes of quantized spacetime. The critical line Re(s)=½ is not arbitrary: it is the only frequency domain where the Ether is stable against perturbation. QAG provides the first physical basis for the hypothesis.",
    qagValue: "Critical Line = Chronon stability domain. Non-trivial zeros = gravitational echoes.",
  },
  {
    title: "Navier-Stokes Equations",
    color: "text-accent",
    borderColor: "border-t-accent",
    statement: "Fluid dynamics solutions break down because they assume a continuous universe — but spacetime is granular.",
    body: "Classical Navier-Stokes assume continuous spacetime and break down at singularities. QAG shows the universe is granular: at τ_pixel = 1.03×10⁻²⁵s (the Pixel of Time), classical hydrodynamics transitions into Quantum Affinity logic. Solutions exist and are smooth — but only if you respect the granular boundary condition. The 'blow-up' is a rounding error from ignoring the Ether's discrete structure.",
    qagValue: "τ_pixel = 1.03×10⁻²⁵s. Granular spacetime eliminates all singularities.",
  },
  {
    title: "Yang-Mills Mass Gap",
    color: "text-secondary",
    borderColor: "border-t-secondary",
    statement: "The mass gap in quantum field theory is the physical mass of the Affiniton particle.",
    body: "The Yang-Mills Mass Gap problem asks why quantum fields have a lowest energy state above zero — the 'mass gap.' QAG resolves this definitively: the mass gap is the physical mass of the Affiniton (γ_ψ — the gauge boson of Affinity), calculated as 9.05 GeV from the QAG string slope. There is no gap — there is a particle, and it has a mass. Experimental confirmation would be detection of the Affiniton at collider energies.",
    qagValue: "Mass Gap = Affiniton mass = 9.05 GeV (QAG-V2 string slope derivation).",
  },
];

export function MathSection() {
  return (
    <section id="math" className="py-24 relative bg-black/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-4">
          <div className="mb-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary/60">by Rodney A. Ripley Jr. — Ripley & Ripley Research</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="text-primary">11.</span> The Source Code — Master Mathematics
          </h2>
        </div>

        <div className="flex justify-center mb-8">
          <HookBanner hook="The universe's three most famous unsolved equations all have the same answer — they are different views of the same Ether physics." />
        </div>

        <ProblemSolution
          problem="The Riemann Hypothesis, Navier-Stokes Existence & Smoothness, and Yang-Mills Mass Gap are three of the seven Millennium Prize Problems — worth $1,000,000 each. Despite centuries of collective effort, none has been solved. Each describes a different failure mode of mathematics when applied to continuous, smooth models of a universe that is neither."
          solution="QAG resolves all three by recognizing they are symptoms of the same error: treating spacetime as continuous. The universe is granular (τ_pixel = 1.03×10⁻²⁵s). The Riemann zeros are Chronon resonance modes. Navier-Stokes singularities are pixel-boundary artifacts. The Yang-Mills mass gap is the Affiniton particle at 9.05 GeV. One framework. Three solutions."
          accentColor="primary"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {laws.map((law, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card p-8 rounded-2xl relative border-t-4 ${law.borderColor}`}
            >
              <h3 className={`font-display text-xl text-foreground mt-2 mb-2 ${law.color}`}>{law.title}</h3>
              <p className={`font-mono text-xs uppercase tracking-widest mb-4 ${law.color} opacity-70`}>{law.statement}</p>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans mb-4">
                {law.body}
              </p>
              <div className="pt-3 border-t border-white/5">
                <div className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground mb-1">QAG Resolution</div>
                <p className={`text-xs font-mono ${law.color}`}>{law.qagValue}</p>
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

        <InvestorCard
          application="A framework that credibly resolves the Riemann Hypothesis enables new approaches to cryptography (RSA relies on Riemann-adjacent number theory). Yang-Mills resolution opens new particle physics engineering and quantum field theory applications. Navier-Stokes resolution unlocks precision fluid simulation for aerospace, materials science, and climate modeling."
          value="Addressing two Millennium Prize Problems ($2,000,000 combined prize value) is independently extraordinary — regardless of the broader QAG theory. A peer-reviewed publication resolving even one of these problems would generate global academic coverage and position Ripley & Ripley Research as a world-class theoretical physics organization. The downstream IP value of such a publication across cryptography, particle physics, and simulation is incalculable."
          accentColor="primary"
        />

        <SectionAttribution sectionNum="11" />
        <NextSectionGuide
          nextName="Capabilities Matrix"
          reason="the full technology readiness assessment for defense and commercial applications"
          href="#capabilities"
          accentColor="secondary"
        />
      </div>
    </section>
  );
}
