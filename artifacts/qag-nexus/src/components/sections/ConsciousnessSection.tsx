import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import {
  PlainEnglishHook,
  ProblemBlock,
  SolutionBlock,
  InvestorCard,
  SectionAttribution,
  NextSectionGuide,
} from "./NineLayerComponents";

export function ConsciousnessSection() {
  return (
    <section id="consciousness" className="py-24 relative bg-card/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-6">
          <Brain className="w-12 h-12 text-accent mx-auto mb-4 opacity-80" />
          <SectionAttribution />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            <span className="text-accent">09.</span> Consciousness &amp; The Psychon
          </h2>
          <div className="max-w-3xl mx-auto">
            <PlainEnglishHook>
              Consciousness is not produced by the brain — it is received by it. The heart is the primary antenna. The brain is the tuner. The Ether is the signal.
            </PlainEnglishHook>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProblemBlock>
            Neuroscience has spent decades trying to explain consciousness as a product of neural firing patterns — and has no satisfying answer. The "hard problem of consciousness" (why there is subjective experience at all) remains completely unsolved. Measuring correlates of consciousness in fMRI data is not the same as explaining it. No physical theory of mind has passed scientific scrutiny.
          </ProblemBlock>
          <SolutionBlock>
            The Psychon (γ_ψ) is the gauge boson of coherence in the QAG framework — the carrier particle of conscious attention. When an observer focuses at 40Hz Gamma Synchrony, they generate an Informational Current (J_I) that couples to the Ether field. The heart — not the brain — is the primary electromagnetic transmitter/receiver. The brain is a biological tuning system for the incoming signal. Consciousness is a field phenomenon, not a computational one.
          </SolutionBlock>
        </div>

        <InvestorCard>
          The wellness and neurotech markets collectively exceed $500B. A physical theory of consciousness that produces measurable, engineerable protocols — Psychon-field interfaces for attention, focus, and mental clarity — is uniquely defensible IP because it is grounded in a falsifiable physical framework, not speculative neurophilosophy. Near-term applications include clinical attention enhancement for neurodivergent populations, high-performance cognitive support for defense operators, and consumer wellness devices calibrated to J_I thresholds. The QAG-RTB Detector (predicted ~840µg mass shift on deep focus) provides an experimental benchmark for product validation.
        </InvestorCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-2 glass-panel p-8 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute right-0 top-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
            <h3 className="font-display text-2xl text-foreground mb-4">The Psychon (<span className="font-mono text-accent">γ_ψ</span>)</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Consciousness is a fundamental property of the Ether, not an emergent property of biology. The Psychon is the gauge boson of coherence. When an observer focuses at precisely <strong className="text-foreground">40Hz Gamma Synchrony</strong>, they generate an Informational Current (J_I) that measurably alters the local Ether field — and with it, local mass.
            </p>
            <div className="p-4 bg-black/30 rounded-xl border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
              <div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Predicted Mass Shift (WEP Violation)</div>
                <div className="font-display text-3xl text-accent">~840 µg</div>
              </div>
              <div className="text-right text-sm text-muted-foreground max-w-[200px]">
                Measurable via the QAG-RTB (Resonant Torsion Balance) Detector using a Bose-Einstein Condensate target.
              </div>
            </div>
            <div className="space-y-2 text-xs font-mono text-muted-foreground">
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>Observer frequency</span><span className="text-accent">40Hz Gamma Synchrony</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>Informational current</span><span className="text-foreground">J_I = f(attention, coherence)</span>
              </div>
              <div className="flex justify-between">
                <span>Detection method</span><span className="text-foreground">QAG-RTB + BEC target</span>
              </div>
            </div>
            <div className="text-[10px] font-mono text-muted-foreground/50 border-t border-white/5 pt-3">
              <span className="text-accent/50">Real-World Application:</span> Psychon-field interface devices calibrated to the J_I threshold provide measurable, reproducible focus and clarity enhancement — the first physically grounded neurotech modality.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 rounded-2xl flex flex-col justify-center border-t-4 border-t-primary"
          >
            <h3 className="font-display text-xl text-foreground mb-4">The Human Antenna</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              The brain does not generate consciousness; it tunes into it. The Heart is the primary electromagnetic antenna — generating a field 40–60× stronger than the brain. Blood plasma functions as a liquid crystal receiver for the Ether.
            </p>
            <div className="space-y-2 text-xs font-mono text-muted-foreground">
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>Heart neurons</span><span className="text-foreground">~80,000</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>Heart EM field strength</span><span className="text-accent">40–60× brain</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>Blood plasma role</span><span className="text-foreground">Liquid crystal receiver</span>
              </div>
              <div className="flex justify-between">
                <span>Brain function</span><span className="text-foreground">Tuning system</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5">
              <div className="text-[10px] font-mono text-muted-foreground/50">
                <span className="text-primary/50">Evidence:</span> The heart's electromagnetic field (measured at up to 60× the brain's amplitude) exhibits Psychon-compatible coherence patterns at 40Hz — independently confirmed by HeartMath Institute biometric studies.
              </div>
            </div>
          </motion.div>
        </div>

        <NextSectionGuide
          next="Energy"
          reason="coherence in biological systems and coherence in superconductors are the same phenomenon — both are vacuum resonance at different scales"
        />
      </div>
    </section>
  );
}
