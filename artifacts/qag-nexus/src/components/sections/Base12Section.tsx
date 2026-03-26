import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { HookBanner, ProblemSolution, InvestorCard, SectionAttribution, NextSectionGuide } from "@/components/SectionLayers";

function MathBlock({ children }: { children: string }) {
  return (
    <div className="font-mono text-sm p-5 bg-black/50 rounded-xl text-foreground border border-primary/10 text-center my-4">
      <div className="prose prose-invert max-w-none [&_.katex]:text-base [&_.katex-display]:my-0">
        <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
          {children}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export function Base12Section() {
  return (
    <section id="base12" className="py-24 relative bg-gradient-to-b from-background via-card/30 to-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 60%),
                            radial-gradient(circle at 80% 50%, hsl(var(--accent)) 0%, transparent 60%)`
        }}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-2 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary/60">by Rodney A. Ripley Jr. — Ripley & Ripley Research</span>
        </div>
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="text-primary">02.</span> The Source Code: Base-12 Topology
          </h2>
        </div>

        <div className="flex justify-center mb-8">
          <HookBanner hook="The universe counts in 12, not 10. Every cycle in nature — from atomic structure to the cosmos — is built on the most harmonically perfect number that exists." />
        </div>

        <ProblemSolution
          problem="Base-10 mathematics introduces rounding artifacts when modeling cyclic quantum states. The 12 fermions of the Standard Model, the 12-phase clock geometry, and the carbon-12 backbone of life cannot be expressed without fractions in base-10 — introducing cumulative error into every calculation."
          solution="Base-12 (duodecimal) is the only number base in which 12 divides evenly by 2, 3, 4, and 6 — the harmonic ratios that govern quantum phase space. QAG uses base-12 topology as the native operating system of reality, eliminating rounding artifacts at the quantum scale."
          accentColor="primary"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.0 }}
            className="glass-panel p-6 rounded-2xl border-t-2 border-t-primary"
          >
            <h3 className="font-display text-lg text-primary mb-3">The Duodecimal Advantage</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              12 is the smallest number divisible by <strong className="text-foreground">2, 3, 4, and 6</strong> — making it the most harmonically rich base in existence.
              Carbon-12 (6 protons, 6 neutrons) — the backbone of life — is not coincidental: it is the universe expressing its own architecture.
              The 12 fermions of the Standard Model (6 quarks + 6 leptons) mirror this structure exactly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-6 rounded-2xl border-t-2 border-t-accent"
          >
            <h3 className="font-display text-lg text-accent mb-3">The 12 Subatomic Fermions</h3>
            <div className="space-y-1">
              {[
                ["Up", "Down"], ["Charm", "Strange"], ["Top", "Bottom"],
                ["Electron", "Muon"], ["Tau", "ν_e"], ["ν_μ", "ν_τ"]
              ].map(([a, b], i) => (
                <div key={i} className="grid grid-cols-2 gap-2">
                  <div className="text-[10px] font-mono text-foreground/80 bg-black/30 rounded px-2 py-1 text-center">{a}</div>
                  <div className="text-[10px] font-mono text-foreground/80 bg-black/30 rounded px-2 py-1 text-center">{b}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-6 rounded-2xl border-t-2 border-t-secondary"
          >
            <h3 className="font-display text-lg text-secondary mb-3">Canonical Base-12 Constant</h3>
            <MathBlock>{"$$\\Phi = \\frac{1218}{1019.42} = 1.194797$$"}</MathBlock>
            <p className="text-xs text-muted-foreground font-sans mt-2">
              Φ encodes the ratio between the 21cm hydrogen line (1218 MHz normalized) and the vacuum floor frequency — the Rosetta Stone translating base-12 harmonic space into base-10 observable reality.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="font-mono text-sm tracking-widest uppercase text-primary border-b border-primary/20 pb-3 mb-6">
              Fine-Structure Geometric Tilt Equation
            </h3>
            <MathBlock>{"$$\\alpha^{-1} = \\frac{\\nu_H}{\\nu_{\\text{floor}}} \\cdot \\frac{1}{\\Phi} \\cdot \\sin(12°)$$"}</MathBlock>
            <div className="space-y-2 text-xs font-mono text-muted-foreground mt-4">
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>ν_H — 21cm hydrogen line</span><span className="text-foreground">1420.405 MHz</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>ν_floor — vacuum floor freq</span><span className="text-foreground">16.440 MHz</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>Φ — base-12 scaling constant</span><span className="text-foreground">1.194797</span>
              </div>
              <div className="flex justify-between">
                <span>sin(12°) — geometric tilt</span><span className="text-foreground">0.20791</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4 font-sans leading-relaxed">
              The fine-structure constant α links the 21cm hydrogen line to the vacuum floor via base-12 harmonic geometry. The universe broadcasts at a 12° tilt.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="font-mono text-sm tracking-widest uppercase text-accent border-b border-accent/20 pb-3 mb-6">
              Base-12 → Base-10 Translation Law
            </h3>
            <MathBlock>{"$$\\nu_{\\text{vac}} = \\nu_H \\cdot \\frac{1019.42}{1218} \\cdot K_{\\text{ASB}}$$"}</MathBlock>
            <div className="font-mono text-sm p-4 bg-black/40 rounded-lg border border-primary/10 mb-4 text-center">
              <div className="text-xs text-muted-foreground mb-1">Result</div>
              <div className="text-secondary">ν_vac = 16.440 MHz &nbsp;|&nbsp; λ_vac = 18.24 m</div>
            </div>
            <div className="font-mono text-sm p-4 bg-black/40 rounded-lg border border-accent/10 mb-4">
              <div className="text-xs text-muted-foreground mb-1">Affinity Symmetry Bias (KASB)</div>
              <MathBlock>{"$$K_{\\text{ASB}} = 0.013829$$"}</MathBlock>
            </div>
            <p className="text-xs text-muted-foreground font-sans leading-relaxed">
              KASB is the bridge constant suppressing structure growth to match S₈ = 0.783 — the translation layer between base-12 harmonic clock ticks and base-10 cosmological measurements.
            </p>
          </motion.div>
        </div>

        <InvestorCard
          application="Software parsers and AI inference engines that compute quantum state space natively in base-12 eliminate the rounding-error artifacts that plague base-10 simulation of quantum circuits. The QAG AI Brain architecture implements this directly in its dual-hemisphere edge processor."
          value="Proprietary base-12 numerical architecture has clear patent potential for quantum computing interfaces and specialized AI hardware. Any commercial QAG license includes the right to implement and sublicense the base-12 translation stack — a foundational IP layer with broad applicability across quantum simulation, cryptography, and high-precision sensing."
          accentColor="secondary"
        />

        <SectionAttribution sectionNum="02" />
        <NextSectionGuide
          nextName="Cosmology"
          reason="where Base-12 eliminates dark matter and dark energy from the universe"
          href="#cosmology"
          accentColor="accent"
        />
      </div>
    </section>
  );
}
