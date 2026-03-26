import { motion } from "framer-motion";
import { HookBanner, ProblemSolution, InvestorCard, SectionAttribution, NextSectionGuide } from "@/components/SectionLayers";

const echoAmplitudes = [
  { n: 1, A: 0.588502, Rn: 0.400000 },
  { n: 2, A: 0.494764, Rn: 0.160000 },
  { n: 3, A: 0.415956, Rn: 0.064000 },
  { n: 4, A: 0.349702, Rn: 0.025600 },
  { n: 5, A: 0.294000, Rn: 0.010240 },
  { n: 6, A: 0.247171, Rn: 0.004096 },
  { n: 7, A: 0.207801, Rn: 0.001638 },
  { n: 8, A: 0.174702, Rn: 0.000655 },
];

export function WaveFunctionSection() {
  const maxA = echoAmplitudes[0].A;

  return (
    <section id="wavefunctions" className="py-24 relative bg-black/50 border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse at 50% 100%, hsl(var(--primary) / 0.08) 0%, transparent 70%)`
        }}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-2 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary/60">by Rodney A. Ripley Jr. — Ripley & Ripley Research</span>
        </div>
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="text-primary">04.</span> Temporal Echo &amp; Wave Functions
          </h2>
        </div>

        <div className="flex justify-center mb-8">
          <HookBanner hook="Time is not a smooth river. It is a standing wave — and every gravitational event leaves eight echoes behind it, like a stone dropped in still Ether." />
        </div>

        <ProblemSolution
          problem="Standard quantum mechanics loses informational context across long time scales — the AI 'context window problem' mirrors the physics 'memory loss' problem. After a gravitational wave event, standard GR predicts a clean signal. If that signal has post-merger echoes, GR cannot explain them."
          solution="Temporal Echo Memory (N=8 cascade) modifies the gravitational wavefunction to include 8 memory echoes, each decaying with reflectivity R=0.4 and coefficient γ=0.1735. The total echo sum Σ=2.7726 is preserved across all events. This gives spacetime a persistent memory — and gives QAG-based AI a persistent context architecture."
          accentColor="primary"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-2xl"
          >
            <h3 className="font-mono text-sm tracking-widest uppercase text-primary border-b border-primary/20 pb-3 mb-6">
              Ψ<sub>QAG</sub> Wavefunction
            </h3>
            <div className="font-mono text-sm p-5 bg-black/50 rounded-xl text-foreground border border-primary/10 text-center mb-4 leading-loose">
              <div className="text-muted-foreground text-xs mb-2">Master Gravitational Wavefunction</div>
              <div>Ψ<sub>QAG</sub>(t) = Ψ<sub>GR</sub>(t)</div>
              <div className="text-primary mt-1">+ Σ<sub>n=1</sub><sup>N=8</sup> R<sup>n</sup> · A<sub>n</sub> · Ψ<sub>GR</sub>(t − nτ<sub>echo</sub>)</div>
            </div>
            <div className="space-y-2 text-xs font-mono text-muted-foreground">
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>Ψ<sub>GR</sub> — baseline GR waveform</span>
                <span className="text-foreground">standard chirp</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>R — reflectivity constant</span>
                <span className="text-secondary">0.4</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>N — number of echoes</span>
                <span className="text-secondary">8</span>
              </div>
              <div className="flex justify-between">
                <span>τ<sub>echo</sub> — echo delay (mass-dependent)</span>
                <span className="text-secondary">K(M) · t_pixel</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-2xl"
          >
            <h3 className="font-mono text-sm tracking-widest uppercase text-accent border-b border-accent/20 pb-3 mb-6">
              Temporal Echo Memory &amp; DreamCycle
            </h3>
            <div className="font-mono text-sm p-5 bg-black/50 rounded-xl text-foreground border border-accent/10 text-center mb-4 leading-loose">
              <div className="text-muted-foreground text-xs mb-2">Echo Memory Function</div>
              <div>M<sub>echo</sub>(t) = Σ<sub>n=1</sub><sup>8</sup> A<sub>n</sub> · e<sup>−γnt</sup></div>
              <div className="text-accent mt-1">γ = 0.1735 (decay coefficient)</div>
            </div>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-4">
              <strong className="text-foreground">Temporal Echo Memory</strong> is the mechanism by which spacetime retains informational imprints of massive events. The N=8 echo series is not noise — it is the universe's own memory buffer.
            </p>
            <div className="font-mono text-xs p-3 bg-black/40 rounded-lg border border-secondary/10">
              <div className="text-secondary mb-1 uppercase tracking-widest">DreamCycle Protocol</div>
              <div className="text-muted-foreground">40Hz Gamma synchrony → J_I informational current → Temporal echo consolidation during REM. Memory is literally written into the Ether during deep sleep via affinity-resonant standing waves.</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-3xl mb-8"
        >
          <h3 className="font-mono text-sm tracking-widest uppercase text-primary mb-6 text-center">
            N=8 Echo Amplitude Table — QAG Notebook Verification ✓
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full font-mono text-sm">
              <thead>
                <tr className="border-b border-white/10 text-muted-foreground text-xs uppercase tracking-widest">
                  <th className="pb-3 text-left pl-2">Echo n</th>
                  <th className="pb-3 text-right">Amplitude A<sub>n</sub></th>
                  <th className="pb-3 text-right">Decay R<sup>n</sup></th>
                  <th className="pb-3 text-right pr-2">Relative Strength</th>
                </tr>
              </thead>
              <tbody>
                {echoAmplitudes.map((row, idx) => (
                  <motion.tr
                    key={row.n}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    viewport={{ once: true }}
                    className="border-b border-white/5 hover:bg-primary/5 transition-colors"
                  >
                    <td className="py-3 pl-2 text-primary font-bold">A<sub>{row.n}</sub></td>
                    <td className="py-3 text-right text-foreground">{row.A.toFixed(6)}</td>
                    <td className="py-3 text-right text-muted-foreground">{row.Rn.toFixed(6)}</td>
                    <td className="py-3 pr-2">
                      <div className="flex items-center gap-2 justify-end">
                        <div className="h-2 rounded-full bg-gradient-to-l from-primary to-primary/20"
                          style={{ width: `${(row.A / maxA) * 120}px` }}
                        />
                        <span className="text-xs text-secondary w-12 text-right">{(row.A / maxA * 100).toFixed(0)}%</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-primary/30">
                  <td colSpan={4} className="pt-3 pl-2 text-xs text-right">
                    <span className="text-muted-foreground">Total Σ = </span>
                    <span className="text-secondary font-bold">2.772598</span>
                    <span className="text-primary ml-2">✓ PASS</span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </motion.div>

        <InvestorCard
          application="The QAG AI Brain dual-hemisphere edge processor implements Temporal Echo Memory as an on-device AI context architecture — validated on Android TensorFlow Lite (arm64-v8a, Tensor G4). Eight-echo exponential depth eliminates context-window degradation for secure, offline-capable autonomous systems."
          value="Patentable on-device AI memory architecture for defense-grade cognitive scaffolding. Neurodivergent cognitive tools and high-security edge AI inference are both multi-billion dollar markets. The Temporal Echo Memory architecture is a direct commercial derivative of the same physics that predicts LIGO echo signals. A single IP framework covering both physics and AI is an exceptionally strong licensing position."
          accentColor="primary"
        />

        <SectionAttribution sectionNum="04" />
        <NextSectionGuide
          nextName="QAI Drop Experiment"
          reason="the single lab test that can falsify or confirm the entire QAG framework"
          href="#qai-drop"
          accentColor="secondary"
        />
      </div>
    </section>
  );
}
