import { motion } from "framer-motion";
import { HookBanner, InvestorCard, SectionAttribution, NextSectionGuide } from "@/components/SectionLayers";

const codexConcepts = [
  {
    label: "AVI Law",
    color: "text-primary",
    desc: "The Affinity-Vacuum Interaction Law derives galactic rotation and gravity from vacuum polarization — replacing dark matter with observable Ether physics."
  },
  {
    label: "Trinity of Affinity",
    color: "text-secondary",
    desc: "The three universal principles: Like attracts Like (coherence coupling), Structure emerges from Resonance (self-organization), and Consciousness closes the loop (observer effect as gauge field)."
  },
  {
    label: "Base-12 → Base-10 Bridge",
    color: "text-accent",
    desc: "The KASB constant (0.013829) and the Φ scaling factor (1.194797) translate between the universe's native base-12 harmonic space and base-10 experimental measurements."
  },
  {
    label: "QAG SAW Engine",
    color: "text-primary",
    desc: "The Hydrogen-Coupled Surface Acoustic Wave thruster — a 0.70 MHz resonance engine that couples to the 21cm hydrogen line frequency, extracting mechanical work from vacuum-affinity coupling."
  },
];

export function ResonantCodexSection() {
  return (
    <section id="codex" className="py-24 relative bg-black/60 border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `radial-gradient(ellipse at 50% 50%, hsl(var(--primary)) 0%, transparent 70%)`
        }}
      />
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary/60">by Rodney A. Ripley Jr. — Ripley & Ripley Research</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-2">
            <span className="text-primary">07.</span> The Resonant Codex
          </h2>
          <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest mb-6">
            Physics Infographic — Ripley &amp; Ripley Research © 2026
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <HookBanner hook="This one image maps the entire new physics — from the fabric of spacetime to the structure of consciousness, encoded in a single visual framework." />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-[0_0_60px_rgba(45,212,191,0.15)] mb-10"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/resonant-codex-infographic.png`}
            alt="The Resonant Codex Physics Infographic — Rodney A. Ripley Jr. / Ripley & Ripley Research © 2026"
            className="w-full h-auto block"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-center">
            <p className="text-[10px] font-mono text-muted-foreground/70 uppercase tracking-widest">
              © 2026 Rodney A. Ripley Jr. — Ripley &amp; Ripley Research — All Rights Reserved. Unauthorized reproduction prohibited.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {codexConcepts.map((concept, idx) => (
            <motion.div
              key={concept.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass-card p-5 rounded-xl"
            >
              <div className={`font-mono text-xs uppercase tracking-widest ${concept.color} mb-2`}>{concept.label}</div>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">{concept.desc}</p>
            </motion.div>
          ))}
        </div>

        <InvestorCard
          application="The Resonant Codex serves as the master technical brief for any partnership or licensing conversation. It communicates the full QAG framework in a single visual artifact — suitable for inclusion in DARPA white papers, investor presentations, conference posters, and academic submissions."
          value="A comprehensive physics framework expressed as a single, design-protected visual work carries immediate IP value as both an educational asset and a licensing document. The Codex is the entry point for any serious engagement — it demonstrates the breadth of the framework and the rigor of its derivations in a format accessible to scientists, engineers, and executives alike."
          accentColor="primary"
        />

        <SectionAttribution sectionNum="07" />
        <NextSectionGuide
          nextName="Biology & Healing"
          reason="where QAG physics explains protein folding, disease, and resonant medicine"
          href="#biology"
          accentColor="secondary"
        />
      </div>
    </section>
  );
}
