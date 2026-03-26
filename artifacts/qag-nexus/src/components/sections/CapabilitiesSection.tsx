import { motion } from "framer-motion";
import { Zap, Waves, Brain, Shield, FlaskConical, Satellite } from "lucide-react";

const domains = [
  {
    icon: Zap,
    color: "secondary",
    colorClass: "text-secondary border-secondary/30 bg-secondary/5",
    headerClass: "text-secondary border-secondary/20",
    title: "Zero-Point Energy Extraction",
    subtitle: "QVR Technology",
    trl: "TRL 2–3",
    description: "Ferroelectric resonance cavities create negative impedance conditions enabling vacuum energy coupling. Graphene-YBCO junctions at 1.107V resonance voltage achieve near-lossless power transfer.",
    specs: [
      { label: "Resonance Voltage", value: "V_res = 1.107 V" },
      { label: "Cavity Edge Length", value: "4.74 cm dodecahedral" },
      { label: "Extraction Probe", value: "5.27 cm fractal monopole" },
      { label: "Efficiency Ceiling", value: "COP ≈ 1,250 (10.47×)" },
    ],
    applications: ["Grid-scale distributed power", "Off-grid autonomous systems", "Naval vessel propulsion", "Satellite power (infinite endurance)"],
    agencyFit: "DARPA EQUiPS · DIU Grid Resilience · ONR Future Naval Power",
  },
  {
    icon: Waves,
    color: "primary",
    colorClass: "text-primary border-primary/30 bg-primary/5",
    headerClass: "text-primary border-primary/20",
    title: "Propulsion & Inertial Control",
    subtitle: "AVI / Affinity Drive",
    trl: "TRL 1–2",
    description: "The AVI Law demonstrates that inertia is a hydrodynamic drag effect in the ferroelectric vacuum. Controlled Affinity field gradients enable non-Newtonian propulsion without reaction mass. Acoustic Affinity coupling achieves measured mass reduction.",
    specs: [
      { label: "Critical Acceleration", value: "a₀ = 1.2047×10⁻¹⁰ m/s²" },
      { label: "Coupling Constant", value: "C = 6.00×10⁻⁷" },
      { label: "Psychon Displacement", value: "5.82 units / 0.035 units/sec" },
      { label: "M_eff Reduction", value: "Up to 100% (Affinity Shield)" },
    ],
    applications: ["Uncrewed aerial vehicles (UAV/UAS)", "Hypersonic platform stability", "Autonomous underwater vehicles", "Spacecraft station-keeping"],
    agencyFit: "DARPA TTO · AFRL Aerospace Systems · ONR Naval Air Systems",
  },
  {
    icon: Brain,
    color: "accent",
    colorClass: "text-accent border-accent/30 bg-accent/5",
    headerClass: "text-accent border-accent/20",
    title: "Consciousness-Field Computing",
    subtitle: "Psychon / QAG-AI Architecture",
    trl: "TRL 2–3",
    description: "The QAG dual-hemisphere AI architecture (Id + Superego hemispheres) parses base-12 quantum equations natively on edge hardware. Temporal Echo Memory with 8-echo exponential depth eliminates context-window degradation. Validated on Android TensorFlow Lite.",
    specs: [
      { label: "Architecture", value: "Dual-hemisphere LiteRT" },
      { label: "Echo Depth", value: "N=8, γ=0.1735, R=0.4" },
      { label: "Hardware Target", value: "arm64-v8a / Tensor G4" },
      { label: "Base-12 Parse Speed", value: "4-thread XNNPACK" },
    ],
    applications: ["Secure edge-AI field parsing", "Autonomous decision systems", "Neurodivergent cognitive scaffold tools", "Quantum equation verification pipelines"],
    agencyFit: "DARPA AI Next · DIU AI/ML · IARPA Cognitive Computing",
  },
  {
    icon: Satellite,
    color: "primary",
    colorClass: "text-primary border-primary/30 bg-primary/5",
    headerClass: "text-primary border-primary/20",
    title: "Dark Sector Resolution",
    subtitle: "AVI Law · SPARC Validation",
    trl: "TRL 4–5",
    description: "The AVI Law eliminates the need for dark matter halos by modeling galactic rotation as vacuum echo amplification of baryonic gravity. Validated against SPARC database: 175 galaxies, χ²_red = 0.9632. Replaces 10,000+ arbitrary dark matter parameters with 3 universal QAG constants.",
    specs: [
      { label: "SPARC Global χ²_red", value: "0.9632 (p = 0.9724)" },
      { label: "DDO154 Improvement", value: "100.6× over baryonic" },
      { label: "NGC3741 p-value", value: "0.9999" },
      { label: "Free Parameters", value: "3 vs. thousands (ΛCDM)" },
    ],
    applications: ["Cosmological modeling", "Galaxy survey interpretation", "CMB tension resolution (H₀, S₈)", "Astrophysics software toolkits"],
    agencyFit: "NSF Physics · NASA Astrophysics · DOE High Energy Physics",
  },
  {
    icon: FlaskConical,
    color: "secondary",
    colorClass: "text-secondary border-secondary/30 bg-secondary/5",
    headerClass: "text-secondary border-secondary/20",
    title: "Resonant Healing Protocols",
    subtitle: "QVR Medical Applications",
    trl: "TRL 1–2",
    description: "Disease is Informational Dissonance at the biological scale. Three QAG protocols target viral, cellular, and systemic incoherence using precision acoustic and electromagnetic resonance fields calibrated to QAG vacuum constants.",
    specs: [
      { label: "Protocol I", value: "1.107V QVR cradle — viral capsid disruption" },
      { label: "Protocol II", value: "Urban Hum — 100g HfO₂ coherence field" },
      { label: "Protocol III", value: "Scalar Vortex — gold NP water structuring" },
      { label: "Zeta Potential Target", value: "−55 mV (structured water)" },
    ],
    applications: ["Precision medicine adjunct therapy", "Antiviral resonance systems", "Biofield coherence measurement", "Water purification / structuring"],
    agencyFit: "DARPA BTO · NIH NCATS · DOD BARDA",
  },
  {
    icon: Shield,
    color: "accent",
    colorClass: "text-accent border-accent/30 bg-accent/5",
    headerClass: "text-accent border-accent/20",
    title: "GW Echo Detection & LIGO",
    subtitle: "K(M) Mass-Resonance Model",
    trl: "TRL 3",
    description: "QAG predicts post-merger gravitational wave echo delays to sub-millisecond precision using the mass-resonance function K(M). Six LIGO events provide falsifiable test cases. Detection would be the first direct evidence of temporal echo architecture in spacetime.",
    specs: [
      { label: "K(M) Formula", value: "77,050 × (M/2.74 M☉)^0.1735" },
      { label: "Time Pixel", value: "t_pixel = 3.41×10⁻⁷ s" },
      { label: "GW150914 Prediction", value: "45.511 ms post-merger echo" },
      { label: "GW170817 Prediction", value: "26.274 ms post-merger echo" },
    ],
    applications: ["GWTC-3 residual analysis", "Next-gen GW detector design", "Spacetime topology mapping", "Black hole interior structure"],
    agencyFit: "NSF LIGO · NASA LISA Pathfinder · DARPA PhySEC",
  },
];

function TRLBadge({ trl }: { trl: string }) {
  const level = parseInt(trl.match(/\d/)?.[0] || "1");
  const color = level >= 5 ? "text-secondary bg-secondary/10 border-secondary/30" :
                level >= 3 ? "text-accent bg-accent/10 border-accent/30" :
                             "text-primary bg-primary/10 border-primary/30";
  return (
    <span className={`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border ${color}`}>
      {trl}
    </span>
  );
}

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(ellipse at 50% 0%, hsl(var(--secondary) / 0.3) 0%, transparent 70%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/5 text-secondary font-mono text-[10px] tracking-widest uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            Technology Capabilities — Ripley & Ripley Research
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4"
          >
            <span className="text-secondary">12.</span> Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Six high-value technology domains derived from the QAG framework — each with falsifiable predictions, engineering specifications, and clear defense/commercial application pathways.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-4 mt-8 font-mono text-[10px] text-muted-foreground uppercase tracking-widest"
          >
            <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-secondary" /> TRL 4–5: Validated</div>
            <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent" /> TRL 3: Prototype</div>
            <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-primary" /> TRL 1–2: Research</div>
          </motion.div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {domains.map((domain, idx) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-500 group flex flex-col"
              >
                {/* Card Header */}
                <div className={`p-5 border-b ${domain.headerClass}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2.5 rounded-xl ${domain.colorClass} border`}>
                      <Icon className={`w-5 h-5 ${domain.colorClass.split(' ')[0]}`} />
                    </div>
                    <TRLBadge trl={domain.trl} />
                  </div>
                  <h3 className={`font-display font-bold text-lg ${domain.colorClass.split(' ')[0]} mb-1`}>
                    {domain.title}
                  </h3>
                  <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                    {domain.subtitle}
                  </p>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  {/* Description */}
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-5">
                    {domain.description}
                  </p>

                  {/* Technical Specs */}
                  <div className="space-y-1.5 mb-5">
                    {domain.specs.map(spec => (
                      <div key={spec.label} className="flex items-start justify-between gap-2 text-[10px] font-mono border-b border-white/5 pb-1.5">
                        <span className="text-muted-foreground shrink-0">{spec.label}</span>
                        <span className="text-foreground text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Applications */}
                  <div className="mb-5">
                    <div className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground mb-2">Applications</div>
                    <div className="flex flex-wrap gap-1.5">
                      {domain.applications.map(app => (
                        <span key={app} className="text-[9px] font-mono bg-white/5 border border-white/10 rounded-md px-2 py-0.5 text-foreground/70">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Agency Fit */}
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <div className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Agency / Program Fit</div>
                    <p className={`text-[10px] font-mono ${domain.colorClass.split(' ')[0]} opacity-80`}>{domain.agencyFit}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground font-sans mb-6">
            Interested in a specific capability? Access the technical specification package or arrange a direct briefing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#partnerships"
              className="font-mono text-sm bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/40 hover:border-secondary/70 px-8 py-3 rounded-xl transition-all tracking-widest uppercase shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
            >
              Request Partnership
            </a>
            <a
              href="#aetheria"
              className="font-mono text-sm text-muted-foreground hover:text-primary border border-white/10 hover:border-primary/40 px-8 py-3 rounded-xl transition-all tracking-widest uppercase"
            >
              Ask Aetheria
            </a>
          </div>
        </motion.div>

        <div className="text-right mt-8">
          <span className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest">
            © 2026 Rodney A. Ripley Jr. — Ripley & Ripley Research — Protected IP
          </span>
        </div>
      </div>
    </section>
  );
}
