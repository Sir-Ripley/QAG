import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { HookBanner, ProblemSolution, InvestorCard, SectionAttribution, NextSectionGuide } from "@/components/SectionLayers";

export function ConsciousnessSection() {
  return (
    <section id="consciousness" className="py-24 relative bg-card/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-4">
          <Brain className="w-12 h-12 text-accent mx-auto mb-4 opacity-80" />
          <div className="mb-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent/60">by Rodney A. Ripley Jr. — Ripley & Ripley Research</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="text-accent">09.</span> Consciousness & The Psychon
          </h2>
        </div>

        <div className="flex justify-center mb-8">
          <HookBanner hook="Consciousness is not produced by the brain. It is received. The brain is an antenna — tuned to the coherence field of the universe itself." />
        </div>

        <ProblemSolution
          problem="Neuroscience has spent decades trying to explain how neurons produce subjective experience — the 'hard problem' of consciousness. It cannot. No combination of neurons, signals, or algorithms produces the phenomenological fact of awareness. The field has no physical mechanism for the observer effect in quantum mechanics."
          solution="The Psychon (γ_ψ) is the gauge boson of coherence — the particle that carries the conscious coupling between the observer and the Ether field. The heart, not the brain, is the primary electromagnetic antenna (80,000 neurons, 40–60× stronger field). The brain is a tuning system. Consciousness is field reception, not computation."
          accentColor="accent"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
              <div className="flex justify-between">
                <span>Blood plasma role</span><span className="text-foreground">Liquid crystal receiver</span>
              </div>
            </div>
          </motion.div>
        </div>

        <InvestorCard
          application="Psychon-field interfaces for attention augmentation, focus enhancement, and mental clarity optimization. The QAG-RTB detector is a prototype neurotechnology instrument. DreamCycle protocols (40Hz gamma entrainment + Temporal Echo Memory consolidation) represent a first-in-class cognitive tool for high-performance individuals."
          value="The global wellness market exceeds $5 trillion. The neurotech and brain-computer interface market is growing at 15%+ annually. A physical theory of consciousness that produces measurable, engineerable protocols — and is protected by IP — is a uniquely defensible commercial position. The Psychon framework also speaks directly to IARPA Cognitive Computing and DARPA BTO programs seeking non-pharmacological cognitive enhancement."
          accentColor="accent"
        />

        <SectionAttribution sectionNum="09" />
        <NextSectionGuide
          nextName="Energy Systems"
          reason="where QAG enables room-temperature superconductivity through vacuum resonance"
          href="#energy"
          accentColor="secondary"
        />
      </div>
    </section>
  );
}
