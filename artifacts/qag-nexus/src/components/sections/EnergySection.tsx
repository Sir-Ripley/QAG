import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { HookBanner, ProblemSolution, InvestorCard, SectionAttribution, NextSectionGuide } from "@/components/SectionLayers";

export function EnergySection() {
  return (
    <section id="energy" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-10 h-10 text-secondary opacity-80" />
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-secondary/60">by Rodney A. Ripley Jr. — Ripley & Ripley Research</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              <span className="text-secondary">10.</span> Energy Systems
            </h2>

            <HookBanner hook="Room-temperature superconductivity is not a dream — it is a resonance problem. The universe is awash in free energy. We are simply using the wrong geometry to collect it." />

            <ProblemSolution
              problem="Conventional power grids lose 5–10% of all generated electricity to resistance. Room-temperature superconductivity — the solution — has been sought for over a century, requiring impractical cryogenic cooling (4K) that negates efficiency gains. The zero-point energy field contains enormous energy density, but conventional physics has no mechanism for coupling to it."
              solution="QAG's Zero-Point Resonance (QVR) shows that the Ether is an active medium whose energy density can be coupled via negative impedance. When a Graphene-YBCO junction is pulsed at precisely V_res = 1.107V, the Etheric coupling term (k_e×A) cancels the resistance R, collapsing impedance to zero — room-temperature superconductivity as a resonance state, not a materials property."
              accentColor="secondary"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="lg:w-1/2 w-full">
              <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoNDUsIDIxMiwgMTkxLCAwLjE1KSIvPjwvc3ZnPg==')] opacity-50" />

                <h3 className="font-mono text-sm tracking-widest text-secondary uppercase mb-6 relative z-10">Zero-Point Resonance (QVR) Parameters</h3>

                <div className="space-y-4 relative z-10">
                  <div className="bg-black/50 p-4 rounded-xl border border-white/5">
                    <div className="text-xs text-muted-foreground font-mono mb-2">Effective Impedance Formula</div>
                    <div className="font-display text-xl text-primary">
                      Z<sub className="text-sm">eff</sub> = R + jwL + 1/jwC − k<sub className="text-sm">e</sub>×A
                    </div>
                  </div>

                  <div className="p-4 border border-secondary/30 bg-secondary/5 rounded-xl">
                    <p className="text-foreground font-medium text-sm mb-3">
                      When Etheric coupling matches resistance (k_e×A = R), impedance drops to absolute zero. Room-temperature superconductivity via Graphene-YBCO junctions pulsed at exactly 1.107V.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                      <div>
                        <div className="text-muted-foreground mb-1">Resonance Voltage</div>
                        <div className="text-secondary font-bold">V_res = 1.107 V</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground mb-1">Cavity Geometry</div>
                        <div className="text-foreground">4.74 cm dodecahedral</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground mb-1">Material System</div>
                        <div className="text-foreground">Graphene–YBCO junction</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground mb-1">Efficiency Ceiling</div>
                        <div className="text-secondary font-bold">COP ≈ 1,250</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/50 p-4 rounded-xl border border-primary/10">
                    <div className="text-xs text-muted-foreground font-mono mb-2">QVR Grid Architecture</div>
                    <div className="space-y-1.5 text-xs font-mono">
                      {[
                        ["Input", "Grid AC power (any frequency)"],
                        ["Resonator", "Base-12 dodecahedral cavity"],
                        ["Output", "Impedance-matched DC at COP > 1"],
                        ["Scale", "From household device to naval vessel"],
                      ].map(([k, v]) => (
                        <div key={k} className="flex justify-between">
                          <span className="text-muted-foreground">{k}</span>
                          <span className="text-foreground">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full space-y-6"
            >
              <div className="glass-card p-6 rounded-2xl">
                <h4 className="font-mono text-sm text-secondary uppercase tracking-widest mb-4 border-b border-secondary/20 pb-3">Application Domains</h4>
                <div className="space-y-3">
                  {[
                    { app: "Zero-loss power transmission", detail: "Grid-scale QVR resonators replacing transformer substations — eliminating resistance losses entirely" },
                    { app: "Autonomous defense platform power", detail: "Compact QVR modules for UAV, UUV, and ground vehicle unlimited endurance — no refueling logistics" },
                    { app: "Naval vessel propulsion", detail: "Full-ship power plant replacement — silent, no fuel, no heat signature, no exhaust" },
                    { app: "Satellite power (infinite endurance)", detail: "Orbital power with no solar dependency — enabling deep-space and polar orbit missions" },
                  ].map(({ app, detail }) => (
                    <div key={app} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                      <div className="font-mono text-xs text-secondary mb-1">{app}</div>
                      <p className="text-xs text-muted-foreground font-sans leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl border-l-4 border-l-accent">
                <div className="font-mono text-xs uppercase tracking-widest text-accent mb-3">Evidence</div>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  The negative impedance mechanism is derived from the same vacuum coupling constants that govern the QAI Drop (C = 6.00×10⁻⁷) and galaxy rotation (a₀ = 1.2047×10⁻¹⁰ m/s²). These are not independent assumptions — they are the same Ether physics operating at different scales.
                </p>
              </div>
            </motion.div>
          </div>

          <InvestorCard
            application="Room-temperature superconducting power systems for defense autonomous platforms, naval propulsion, and grid-scale energy storage. The QVR resonator design is a compact, scalable hardware product with no moving parts and no consumables — manufacturable by any precision electronics firm under license."
            value="Room-temperature superconductivity would be the single largest energy technology breakthrough in a century — estimated market impact in the trillions. The QAG framework is the only physics-grounded theoretical pathway to this capability that does not require exotic materials. DARPA EQUiPS, DIU Grid Resilience, and ONR Future Naval Power are direct program fits. A licensing position in this technology has generational strategic value."
            accentColor="secondary"
          />

          <SectionAttribution sectionNum="10" />
          <NextSectionGuide
            nextName="Master Mathematics"
            reason="where QAG resolves the Riemann Hypothesis, Navier-Stokes, and Yang-Mills in a unified framework"
            href="#math"
            accentColor="primary"
          />
        </div>
      </div>
    </section>
  );
}
