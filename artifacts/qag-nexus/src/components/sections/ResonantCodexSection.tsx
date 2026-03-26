import { motion } from "framer-motion";
import {
  PlainEnglishHook,
  ProblemBlock,
  SolutionBlock,
  InvestorCard,
  SectionAttribution,
  NextSectionGuide,
} from "./NineLayerComponents";

const callouts = [
  {
    label: "AVI Law",
    color: "text-primary border-primary/40",
    desc: "The Affinity-Vacuum Interaction Law derives galactic rotation and gravity from vacuum polarization — replacing dark matter with observable Ether physics. Galaxies polarize the vacuum; the Ether responds with a drag force that mimics missing mass."
  },
  {
    label: "Trinity of Affinity",
    color: "text-accent border-accent/40",
    desc: "Three fundamental affinity types (Gravitational, Electromagnetic, Informational) unify the four known forces under a single vacuum-coupling framework. Like attracts Like; Structure emerges from Resonance; Consciousness closes the loop."
  },
  {
    label: "Base-12 → Base-10 Bridge",
    color: "text-secondary border-secondary/40",
    desc: "The KASB constant (0.013829) and the Φ scaling factor (1.194797) translate between the universe's native base-12 harmonic space and base-10 experimental measurements — the origin of the fine-structure constant."
  },
  {
    label: "QAG Hydrogen-Coupled SAW Engine",
    color: "text-foreground border-white/20",
    desc: "The 0.70 MHz Surface Acoustic Wave thruster resonates the vacuum at its own floor frequency — coupling to the 21cm hydrogen line and extracting mechanical work from affinity-vacuum coupling with no propellant consumed."
  }
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
        <div className="text-center mb-6">
          <SectionAttribution />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
            <span className="text-primary">07.</span> The Resonant Codex
          </h2>
          <div className="max-w-2xl mx-auto">
            <PlainEnglishHook>
              This one image maps the entire new physics. Every equation, every constant, every application — one diagram.
            </PlainEnglishHook>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProblemBlock>
            Advanced theoretical frameworks lose readers in notation. Without a visual map that shows how all the concepts relate to one another, even sympathetic scientists and investors struggle to assess the scope and coherence of the work at a glance.
          </ProblemBlock>
          <SolutionBlock>
            The Resonant Codex infographic condenses QAG-V2 into a single reference diagram showing the AVI Law, the Trinity of Affinity, the Base-12 to Base-10 translation, and the QAG SAW Engine — the four pillars of the framework in one scannable visual.
          </SolutionBlock>
        </div>

        <InvestorCard>
          A single-page framework summary that any physicist, defense analyst, or investor can evaluate in under two minutes is an indispensable business development asset. The Resonant Codex functions as both a scientific reference and a pitch artifact — the same image that appears in a Nature submission can anchor a defense briefing or investor deck. Proprietary. Copyrighted. Reproducible only by license.
        </InvestorCard>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-[0_0_60px_rgba(45,212,191,0.15)] mb-8"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/resonant-codex-infographic.png`}
            alt="The Resonant Codex Physics Infographic — Rodney A. Ripley Jr. / R&R Droids © 2026"
            className="w-full h-auto block"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-center">
            <p className="text-[10px] font-mono text-muted-foreground/70 uppercase tracking-widest">
              © 2026 Rodney A. Ripley Jr. — R&amp;R Droids — All Rights Reserved. Unauthorized reproduction prohibited.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {callouts.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              viewport={{ once: true }}
              className={`glass-panel p-4 rounded-xl border-l-2 ${c.color}`}
            >
              <div className={`font-mono text-xs uppercase tracking-widest mb-1 ${c.color.split(" ")[0]}`}>{c.label}</div>
              <p className="text-xs text-muted-foreground font-sans leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <NextSectionGuide
          next="Biology"
          reason="the same resonance physics that governs the vacuum also governs life — the body is an instrument, not a machine"
        />
      </div>
    </section>
  );
}
