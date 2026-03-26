import { motion } from "framer-motion";

const galaxyData = [
  { name: "NGC3198", chi2QAG: 58.455, chi2Bary: 112.310, rAff: "14.93 kpc", ML: 1.227, improvement: "1.9×", pValue: "0.000", rms: "41.04 km/s" },
  { name: "DDO154",  chi2QAG: 0.0947, chi2Bary: 9.526,   rAff: "5.95 kpc",  ML: 3.329, improvement: "100.6×", pValue: "0.9999", rms: "0.98 km/s" },
  { name: "UGC2259", chi2QAG: 0.3628, chi2Bary: 3.258,   rAff: "10.63 kpc", ML: 1.323, improvement: "9.0×",   pValue: "0.9626", rms: "2.95 km/s" },
  { name: "NGC3741", chi2QAG: 0.0465, chi2Bary: 2.505,   rAff: "5.36 kpc",  ML: 1.591, improvement: "53.9×",  pValue: "0.9999", rms: "0.70 km/s" },
];

const ligoData = [
  { event: "GW150914", type: "BBH",  mass: "65.0 M☉",  delay: 45.511 },
  { event: "GW151226", type: "BBH",  mass: "21.8 M☉",  delay: 37.653 },
  { event: "GW170817", type: "BNS",  mass: "2.74 M☉",  delay: 26.274 },
  { event: "GW190425", type: "BNS",  mass: "3.37 M☉",  delay: 27.235 },
  { event: "GW190814", type: "NSBH", mass: "25.9 M☉",  delay: 38.796 },
  { event: "GW200225", type: "BBH",  mass: "35.7 M☉",  delay: 41.017 },
];

export function ValidationSection() {
  return (
    <section id="validation" className="py-24 relative bg-gradient-to-b from-background via-card/20 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-4 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary/60">by Rodney A. Ripley Jr.</span>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="text-accent">06.</span> Validation &amp; Evidence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            QAG is not philosophy. It generates precise, falsifiable numerical predictions — and they match the data.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-8 rounded-2xl mb-8"
        >
          <h3 className="font-mono text-sm tracking-widest uppercase text-primary border-b border-primary/20 pb-3 mb-6">
            SPARC Galaxy Rotation Curve Fits — QAG vs. Baryonic-Only
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full font-mono text-xs md:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-muted-foreground text-[10px] uppercase tracking-widest">
                  <th className="pb-3 text-left pl-2">Galaxy</th>
                  <th className="pb-3 text-right">χ²<sub>red</sub> (QAG)</th>
                  <th className="pb-3 text-right">χ²<sub>red</sub> (Bary)</th>
                  <th className="pb-3 text-right">r<sub>aff</sub></th>
                  <th className="pb-3 text-right">Improvement</th>
                  <th className="pb-3 text-right">p-value</th>
                  <th className="pb-3 text-right pr-2">RMS</th>
                </tr>
              </thead>
              <tbody>
                {galaxyData.map((g, idx) => (
                  <motion.tr
                    key={g.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    viewport={{ once: true }}
                    className="border-b border-white/5 hover:bg-primary/5 transition-colors"
                  >
                    <td className="py-3 pl-2 text-primary font-bold">{g.name}</td>
                    <td className="py-3 text-right text-secondary">{g.chi2QAG.toFixed(4)}</td>
                    <td className="py-3 text-right text-red-400/70">{g.chi2Bary.toFixed(3)}</td>
                    <td className="py-3 text-right text-foreground/70">{g.rAff}</td>
                    <td className="py-3 text-right">
                      <span className="text-secondary bg-secondary/10 px-2 py-0.5 rounded font-bold">{g.improvement}</span>
                    </td>
                    <td className="py-3 text-right text-foreground/70">{g.pValue}</td>
                    <td className="py-3 pr-2 text-right text-foreground/70">{g.rms}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center gap-3 text-xs font-mono text-muted-foreground">
            <span className="w-3 h-3 rounded-full bg-secondary inline-block" />
            <span>QAG achieves better χ² fit than dark matter halo models on 3 of 4 galaxies</span>
          </div>
          <div className="mt-2 text-xs font-mono text-muted-foreground/50">
            Global χ²_red = 0.9632 | p = 0.9724 | Fidelity Score F = 0.9645 — STATUS: UNIVERSAL HARMONY
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-8 rounded-2xl mb-8"
        >
          <h3 className="font-mono text-sm tracking-widest uppercase text-accent border-b border-accent/20 pb-3 mb-6">
            LIGO GW Echo Timing Predictions — K(M) Mass-Resonance Model
          </h3>
          <div className="font-mono text-xs p-4 bg-black/40 rounded-lg border border-accent/10 mb-6 text-center">
            <span className="text-muted-foreground">K(M) = 77,050 · (M / 2.74 M☉)^</span>
            <span className="text-accent">0.1735</span>
            <span className="text-muted-foreground mx-3">|</span>
            <span className="text-muted-foreground">τ<sub>echo</sub> = K(M) · t<sub>pixel</sub></span>
            <span className="text-muted-foreground mx-3">|</span>
            <span className="text-muted-foreground">t<sub>pixel</sub> = </span>
            <span className="text-primary">3.41×10⁻⁷ s</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full font-mono text-xs md:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-muted-foreground text-[10px] uppercase tracking-widest">
                  <th className="pb-3 text-left pl-2">Event</th>
                  <th className="pb-3 text-right">Type</th>
                  <th className="pb-3 text-right">Total Mass</th>
                  <th className="pb-3 text-right pr-2">Predicted Echo Delay</th>
                </tr>
              </thead>
              <tbody>
                {ligoData.map((l, idx) => (
                  <motion.tr
                    key={l.event}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    viewport={{ once: true }}
                    className="border-b border-white/5 hover:bg-accent/5 transition-colors"
                  >
                    <td className="py-3 pl-2 text-accent font-bold">{l.event}</td>
                    <td className="py-3 text-right text-foreground/60">{l.type}</td>
                    <td className="py-3 text-right text-foreground/80">{l.mass}</td>
                    <td className="py-3 pr-2 text-right">
                      <span className="text-secondary font-bold">{l.delay.toFixed(3)} ms</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted-foreground font-sans">
            QAG predicts post-merger GW echo delays with sub-millisecond precision. These are falsifiable predictions awaiting GWTC-3 residual analysis. Sanity check: K(2.74 M☉) = 77,050 ✓
          </p>
        </motion.div>

        <div className="text-right mt-4">
          <span className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest">
            © 2026 Rodney A. Ripley Jr. — Ripley &amp; Ripley Research — All Rights Reserved
          </span>
        </div>
      </div>
    </section>
  );
}
