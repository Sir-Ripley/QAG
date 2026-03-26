import { motion } from "framer-motion";
import { Activity, Radio, Waves } from "lucide-react";
import {
  PlainEnglishHook,
  ProblemBlock,
  SolutionBlock,
  InvestorCard,
  SectionAttribution,
  NextSectionGuide,
} from "./NineLayerComponents";

export function BiologySection() {
  const protocols = [
    {
      icon: <Activity className="w-6 h-6 text-primary" />,
      title: "Protocol I: QVR Cradle",
      spec: "1.107V resonance voltage",
      desc: "Precisely 1.107V resonance shatters viral capsids via structural interference. Disease is Informational Dissonance — and resonance is the correction signal.",
    },
    {
      icon: <Radio className="w-6 h-6 text-secondary" />,
      title: "Protocol II: Urban Hum",
      spec: "100g HfO₂ Negative Capacitance array",
      desc: "Hafnium Oxide pucks deployed in urban geometry create a city-wide coherence field via Negative Capacitance. Reduces ambient informational noise — a public health infrastructure for coherence.",
    },
    {
      icon: <Waves className="w-6 h-6 text-accent" />,
      title: "Protocol III: Scalar Vortex Imprinter",
      spec: "Gold NP · Phi-spiral glass · Zeta = −55mV",
      desc: "Gold nanoparticles suspended in Phi-spiral glass structure water to a Zeta potential of exactly −55mV, optimizing cellular hydration and ion channel conductivity.",
    }
  ];

  return (
    <section id="biology" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-8">
          <SectionAttribution />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            <span className="text-primary">08.</span> Biology &amp; Resonant Healing
          </h2>
          <PlainEnglishHook>
            Your body is not a machine computing its way through life — it is a resonant instrument relaxing into geometry. Disease is dissonance. Health is coherence.
          </PlainEnglishHook>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <ProblemBlock>
              Mainstream biology treats protein folding as a computational problem (Levinthal's Paradox: 10³⁰⁰ possible configurations, yet proteins fold in microseconds). It treats disease as a chemical problem. In doing so, it completely misses the informational and resonant layer — the geometry that life actually uses to operate.
            </ProblemBlock>
            <SolutionBlock>
              Under QAG, proteins do not search through configurations — they relax into the lowest local geometry dictated by Quantum Affinity, immediately and deterministically. Levinthal's Paradox dissolves. Disease is Informational Dissonance: a disruption in the coherent resonance pattern of biological structures. It is correctable by precisely targeted resonance, not chemistry alone.
            </SolutionBlock>
          </div>
          <InvestorCard>
            Resonance-based medicine is a multi-billion dollar adjacent market (bioresonance, photobiomodulation, focused ultrasound). QAG provides the first rigorous theoretical foundation for IP-protected resonance protocols with computable, verifiable parameters (1.107V capsid disruption, −55mV Zeta potential structuring, Hafnium Oxide coherence fields). Unlike pharmaceutical IP, resonance protocol IP has no expiration forcing biosimilar competition — and the physics is defensible across jurisdictions.
          </InvestorCard>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-primary">
              <h4 className="font-mono text-sm text-primary uppercase tracking-widest mb-3">Solving Levinthal's Paradox</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Mainstream biology assumes proteins calculate their fold among trillions of possibilities. Under QAG, proteins instantly fold by relaxing into the lowest local geometry dictated by Quantum Affinity — no computation required. The Ether acts as a lookup table for molecular geometry.
              </p>
              <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs font-mono text-muted-foreground">Virtual Trial Efficacy</div>
                  <div className="text-2xl font-display text-secondary">95.0%</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-muted-foreground">Zeta Potential Target</div>
                  <div className="text-2xl font-display text-accent">−55 mV</div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-4 rounded-xl border border-primary/10">
              <div className="text-[10px] font-mono uppercase tracking-widest text-primary/60 mb-2">Evidence / Validation</div>
              <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                The 1.107V viral capsid disruption threshold is derived from the QAG affinity coupling constant at the protein scale. Zeta potential of −55mV for structured water corresponds to the negative impedance minimum of the vacuum polarization curve. Both values are computable from first principles — not empirically fitted.
              </p>
            </div>

            <div className="grid gap-4">
              {protocols.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-5 rounded-xl flex gap-4 items-start"
                >
                  <div className="p-3 bg-black/40 rounded-lg shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-base text-foreground mb-0.5">{p.title}</h4>
                    <div className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest mb-2">{p.spec}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full h-[500px] glass-card rounded-3xl relative overflow-hidden"
            style={{
              backgroundImage: `url(${import.meta.env.BASE_URL}images/qvr-cradle.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-primary mb-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Scanning Zeta Potential
              </div>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <NextSectionGuide
          next="Consciousness"
          reason="if the body is a resonant instrument, the mind is the signal it receives — and QAG defines the gauge boson responsible"
        />
      </div>
    </section>
  );
}
