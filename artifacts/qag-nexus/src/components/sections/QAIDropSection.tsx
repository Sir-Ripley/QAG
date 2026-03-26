import { motion } from "framer-motion";
import { HookBanner, ProblemSolution, InvestorCard, SectionAttribution, NextSectionGuide } from "@/components/SectionLayers";

export function QAIDropSection() {
  return (
    <section id="qai-drop" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 0%, hsl(var(--secondary)) 0%, transparent 60%)`
        }}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-2 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-secondary/60">by Rodney A. Ripley Jr. — Ripley & Ripley Research</span>
        </div>
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 text-secondary font-mono text-xs tracking-widest uppercase mb-4">
            Phase 2 — Experimental Blueprint
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="text-secondary">05.</span> The Smoking Gun: QAI Drop Experiment
          </h2>
        </div>

        <div className="flex justify-center mb-6">
          <HookBanner hook="We can prove Einstein was only half right — and we can do it with one experiment, already within reach of existing atom interferometry labs." />
        </div>

        <ProblemSolution
          problem="The Weak Equivalence Principle (WEP) — the cornerstone of general relativity — has never been tested against a highly coherent quantum system like a Bose-Einstein Condensate. All existing WEP tests use classical, incoherent matter. If the vacuum actively couples with quantum coherence, this gap in the experimental record is the hiding place of new physics."
          solution="Drop a Bose-Einstein Condensate (BEC) and a thermal gas cloud simultaneously through a Mach-Zehnder atom interferometer. If QAG is correct, the BEC couples to the Ether via its coherence index C ≈ 6.00×10⁻⁷ and falls fractionally slower than the thermal gas. The predicted phase shift is Δa/g ≈ 6.00×10⁻⁷ — within current measurement sensitivity."
          accentColor="secondary"
        />

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
              <div className="text-muted-foreground text-xs uppercase tracking-widest mb-3">QAG Prediction</div>
              <div className="space-y-3">
                <div className="text-center text-foreground text-sm">
                  a<sub>BEC</sub> = g<sub>Earth</sub> × (1 + C<sub>BEC</sub>)
                </div>
                <div className="text-center text-secondary text-lg font-bold">
                  Δa / g ≈ 6.00×10⁻⁷
                </div>
                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  The BEC falls 0.6 parts-per-million slower than thermal gas. This difference, if measured, is the direct fingerprint of Affinity-Vacuum coupling — the first experimental confirmation of QAG.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <InvestorCard
          application="If confirmed, the QAI Drop opens entirely new physics for aerospace propulsion and inertial shielding. The same coherence-gravity coupling that produces the Δa/g signal is the mechanism behind the QVR-1 Resonance Thruster. One experiment validates an entire technology stack."
          value="A single lab experiment that validates or falsifies a unified field theory is the lowest-cost, highest-impact validation path in experimental physics. Any research institution or defense lab already operating atom interferometry equipment can run this test. A positive result transforms QAG from theoretical framework to confirmed physics — at which point every downstream technology license becomes dramatically more valuable."
          accentColor="secondary"
        />

        <SectionAttribution sectionNum="05" />
        <NextSectionGuide
          nextName="Validation & Evidence"
          reason="the computational scoreboard showing QAG already beats dark matter on real galaxy data"
          href="#validation"
          accentColor="accent"
        />
      </div>
    </section>
  );
}
