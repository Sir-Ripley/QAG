import { motion } from "framer-motion";
import {
  PlainEnglishHook,
  ProblemBlock,
  SolutionBlock,
  InvestorCard,
  SectionAttribution,
  NextSectionGuide,
} from "./NineLayerComponents";

export function QAIDropSection() {
  return (
    <section id="qai-drop" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 0%, hsl(var(--secondary)) 0%, transparent 60%)`
        }}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-6">
          <SectionAttribution />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 text-secondary font-mono text-xs tracking-widest uppercase mb-6">
            Phase 2 — Experimental Blueprint
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            <span className="text-secondary">05.</span> The Smoking Gun: QAI Drop Experiment
          </h2>
          <div className="max-w-3xl mx-auto">
            <PlainEnglishHook>
              We can prove Einstein was only half right with a single experiment that fits in a university physics lab — and we know exactly what number to look for.
            </PlainEnglishHook>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProblemBlock>
            The Weak Equivalence Principle — the cornerstone of general relativity — has never been tested against a highly coherent macroscopic quantum system. Every equivalence principle test to date has used incoherent, classical matter. If QAG is correct, the test has been performed on the wrong type of matter every time.
          </ProblemBlock>
          <SolutionBlock>
            The QAI Drop uses a Bose-Einstein Condensate (C ≈ 1, maximally coherent) and a thermal gas cloud (C ≈ 0, classical) in a Mach-Zehnder atom interferometer. QAG predicts the BEC experiences a measurable affinity-coupling to the vacuum that slows its fall by Δa/g ≈ 6.00×10⁻⁷ relative to the thermal gas — exactly within the sensitivity of current atom interferometry.
          </SolutionBlock>
        </div>

        <InvestorCard>
          A single lab experiment that validates or falsifies the entire QAG framework is the lowest-cost, highest-impact validation path available. If confirmed, Δa/g ≈ 6.00×10⁻⁷ opens entirely new propulsion and shielding physics with direct aerospace and defense applications. The experiment requires no exotic equipment — standard BEC interferometry infrastructure already exists at MIT, Stanford, and NIST. Estimated experimental cost: under $2M. Potential market unlock: hundreds of billions in propulsion, shielding, and materials IP.
        </InvestorCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-2xl border-l-4 border-l-primary"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">Control Arm</div>
            <h3 className="font-display text-2xl text-foreground mb-4">Thermal Gas Cloud</h3>
            <div className="font-mono text-sm p-4 bg-black/40 rounded-lg border border-white/5 mb-4 text-center">
              <div className="text-muted-foreground text-xs mb-1">Coherence Index</div>
              <div className="text-2xl text-foreground">C ≈ 0</div>
              <div className="text-xs text-muted-foreground mt-1">Incoherent — no quantum affinity coupling</div>
            </div>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              A thermal gas cloud has no long-range quantum coherence. It falls through the gravitational field as classical matter — unaffected by the Ether's affinity-coupling mechanism. This is the baseline: pure Newtonian free-fall.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-8 rounded-2xl border-l-4 border-l-secondary"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">Signal Arm</div>
            <h3 className="font-display text-2xl text-foreground mb-4">BEC — Bose-Einstein Condensate</h3>
            <div className="font-mono text-sm p-4 bg-black/40 rounded-lg border border-secondary/20 mb-4 text-center">
              <div className="text-muted-foreground text-xs mb-1">Coherence Index</div>
              <div className="text-2xl text-secondary">C ≈ 6.00×10⁻⁷</div>
              <div className="text-xs text-secondary/60 mt-1">Maximum quantum coherence — Ether-coupled</div>
            </div>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              A BEC achieves macroscopic quantum coherence — all atoms occupy the same quantum state. QAG predicts this coherence creates a measurable affinity coupling to the vacuum, producing a fractional gravitational anomaly of exactly C = 6.00×10⁻⁷.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-3xl mb-8"
        >
          <h3 className="font-mono text-sm tracking-widest uppercase text-secondary text-center border-b border-secondary/20 pb-4 mb-8">
            Three-Pulse Mach-Zehnder Sequence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { pulse: "π/2", label: "Beam-Splitter", desc: "Splits atom cloud into two superposition paths — the quantum coin-flip that starts the race." },
              { pulse: "π", label: "Mirror", desc: "Redirects both paths — the quantum mirror that bends the trajectory and maximizes path separation." },
              { pulse: "π/2", label: "Recombiner", desc: "Reunites the paths — the quantum interference stage where the phase difference becomes measurable." }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 rounded-full border-2 border-secondary/50 flex items-center justify-center mx-auto mb-3 bg-secondary/10">
                  <span className="font-mono text-secondary text-sm">{item.pulse}</span>
                </div>
                <div className="font-mono text-xs text-secondary uppercase tracking-widest mb-2">{item.label}</div>
                <p className="text-xs text-muted-foreground font-sans leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="font-mono text-sm p-6 bg-black/50 rounded-xl border border-primary/10">
              <div className="text-muted-foreground text-xs uppercase tracking-widest mb-3">Phase-Shift Equation</div>
              <div className="text-center text-foreground text-base mb-2">
                ΔΦ<sub>I</sub> = k<sub>eff</sub> · (a<sub>BEC</sub> − a<sub>Thermal</sub>) · T²
              </div>
              <div className="space-y-1 text-xs text-muted-foreground mt-4">
                <div className="flex justify-between"><span>k<sub>eff</sub> — effective wavevector</span><span className="text-foreground">2π/λ<sub>atom</sub></span></div>
                <div className="flex justify-between"><span>T — interrogation time</span><span className="text-foreground">pulse interval</span></div>
                <div className="flex justify-between"><span>Δa — acceleration difference</span><span className="text-secondary">QAG-predicted</span></div>
              </div>
            </div>

            <div className="font-mono text-sm p-6 bg-black/50 rounded-xl border border-secondary/10">
              <div className="text-muted-foreground text-xs uppercase tracking-widest mb-3">QAG Prediction — Evidence</div>
              <div className="space-y-3">
                <div className="text-center text-foreground text-sm">
                  a<sub>BEC</sub> = g<sub>Earth</sub> × (1 + C<sub>BEC</sub>)
                </div>
                <div className="text-center text-secondary text-lg font-bold">
                  Δa / g ≈ 6.00×10⁻⁷
                </div>
                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  The BEC falls 0.6 parts-per-million slower than thermal gas. This difference, if measured, is the direct fingerprint of Affinity-Vacuum coupling — the first experimental confirmation of QAG. Current atom interferometry sensitivity: ~10⁻⁸ g — well within detection range.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <NextSectionGuide
          next="Validation & Evidence"
          reason="while the QAI Drop is pending, QAG has already been tested against real astronomical datasets — and the scoreboard is favorable"
        />
      </div>
    </section>
  );
}
