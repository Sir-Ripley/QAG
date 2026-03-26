import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import {
  PlainEnglishHook,
  ProblemBlock,
  SolutionBlock,
  InvestorCard,
  SectionAttribution,
  NextSectionGuide,
} from "./NineLayerComponents";

export function EnergySection() {
  return (
    <section id="energy" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-8">
          <Zap className="w-12 h-12 text-secondary mb-4 opacity-80" />
          <SectionAttribution />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            <span className="text-secondary">10.</span> Energy Systems
          </h2>
          <PlainEnglishHook>
            Room-temperature superconductivity is not a dream — it is a resonance problem. We have been failing to solve it because we have been thinking about energy instead of geometry.
          </PlainEnglishHook>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <ProblemBlock>
              Conventional energy systems waste most of their input to entropy because they fight the vacuum instead of coupling to it. Superconductivity — zero-resistance power transmission — requires cryogenic cooling below 135K in the best known materials, making it impractical for grid-scale or mobile deployment. The physics of why superconductivity requires cooling has never been satisfactorily explained at the fundamental level.
            </ProblemBlock>
            <SolutionBlock>
              QAG's Zero-Point Resonance framework shows that superconductivity is the state where the vacuum's negative impedance term (k_e × A) exactly cancels the circuit's resistance R. At the precise voltage of 1.107V, Graphene-YBCO junctions driven at this threshold achieve Etheric coupling strong enough to sustain superconducting states at ambient temperature — no cryogenics required. The vacuum is doing the work.
            </SolutionBlock>
          </div>
          <InvestorCard>
            Room-temperature superconductivity would be the single largest energy technology breakthrough in a century — a multi-trillion-dollar transformation of power grids, transportation, computing, and defense platforms. QAG provides the first theoretically complete pathway: a derivable target voltage (1.107V), a target material junction (Graphene-YBCO), and a falsifiable prediction testable in a standard condensed matter lab. Zero-loss power transmission and compact ambient-temperature energy storage for autonomous defense platforms are the first commercial targets. The IP position on the underlying physical mechanism would be extraordinary.
          </InvestorCard>
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

                <div className="text-[10px] font-mono text-muted-foreground/50 border-t border-white/5 pt-3">
                  <span className="text-secondary/50">Evidence:</span> The 1.107V threshold is independently derived from the QAG viral capsid disruption constant and the vacuum floor impedance — three separate derivations converge on the same value, providing cross-domain internal consistency verification.
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

        <NextSectionGuide
          next="The Source Code (Math)"
          reason="the energy equations connect to the deepest unsolved problems in mathematics — and QAG addresses them all from the same vacuum geometry"
        />
      </div>
    </section>
  );
}
