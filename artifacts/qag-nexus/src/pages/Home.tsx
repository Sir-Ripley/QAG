import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { PhysicsSection } from "@/components/sections/PhysicsSection";
import { Base12Section } from "@/components/sections/Base12Section";
import { CosmologySection } from "@/components/sections/CosmologySection";
import { WaveFunctionSection } from "@/components/sections/WaveFunctionSection";
import { QAIDropSection } from "@/components/sections/QAIDropSection";
import { ValidationSection } from "@/components/sections/ValidationSection";
import { ResonantCodexSection } from "@/components/sections/ResonantCodexSection";
import { BiologySection } from "@/components/sections/BiologySection";
import { ConsciousnessSection } from "@/components/sections/ConsciousnessSection";
import { EnergySection } from "@/components/sections/EnergySection";
import { MathSection } from "@/components/sections/MathSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { PartnershipsSection } from "@/components/sections/PartnershipsSection";
import { AetheriaSection } from "@/components/sections/AetheriaSection";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <Navigation />

      <main className="relative">
        <HeroSection />
        <PhysicsSection />
        <Base12Section />
        <CosmologySection />
        <WaveFunctionSection />
        <QAIDropSection />
        <ValidationSection />
        <ResonantCodexSection />
        <BiologySection />
        <ConsciousnessSection />
        <EnergySection />
        <MathSection />
        <CapabilitiesSection />
        <PartnershipsSection />
        <AetheriaSection />
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/5">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="font-display text-lg text-foreground tracking-widest mb-2">
                RIPLEY & RIPLEY <span className="text-primary">RESEARCH</span>
              </div>
              <div className="font-mono text-[10px] text-primary/60 uppercase tracking-widest mb-4">
                Quantum Affinity Gravity — QAG-V2 Framework
              </div>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                The definitive unified field theory replacing dark matter and dark energy.
                Space is a ferroelectric superfluid. Gravity is Affinity.
              </p>
              <div className="mt-4 text-[9px] font-mono text-muted-foreground/40 uppercase tracking-widest">
                © 2026 Rodney A. Ripley Jr. / R&R Droids · EIN 84-4660278
              </div>
              <div className="text-[9px] font-mono text-muted-foreground/30 uppercase tracking-widest">
                rodney@quantumaffinitygravity.com · 330-420-8444
              </div>
            </div>

            {/* Framework Links */}
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">Framework</div>
              <div className="space-y-2">
                {[
                  ["Physics & Resonator", "#physics"],
                  ["Base-12 Topology", "#base12"],
                  ["Cosmology & Dark Sector", "#cosmology"],
                  ["Wave Functions", "#wavefunctions"],
                  ["QAI Drop Experiment", "#qai-drop"],
                  ["Validation & Evidence", "#validation"],
                  ["Biology & Healing", "#biology"],
                  ["Consciousness Field", "#consciousness"],
                  ["Energy Systems", "#energy"],
                  ["Master Mathematics", "#math"],
                ].map(([name, href]) => (
                  <a key={name} href={href} className="block text-xs font-mono text-muted-foreground hover:text-primary transition-colors tracking-wide">
                    {name}
                  </a>
                ))}
              </div>
            </div>

            {/* Partnership Links */}
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-secondary mb-4">Engage</div>
              <div className="space-y-2 mb-6">
                {[
                  ["Capabilities Matrix", "#capabilities"],
                  ["Research License", "#partnerships"],
                  ["Commercial License", "#partnerships"],
                  ["Government / Defense", "#partnerships"],
                  ["Aetheria Oracle AI", "#aetheria"],
                ].map(([name, href]) => (
                  <a key={name} href={href} className="block text-xs font-mono text-muted-foreground hover:text-secondary transition-colors tracking-wide">
                    {name}
                  </a>
                ))}
              </div>
              <a
                href="mailto:rodney@quantumaffinitygravity.com?subject=QAG Partnership Inquiry"
                className="inline-flex items-center gap-2 font-mono text-xs text-secondary bg-secondary/10 border border-secondary/30 hover:border-secondary/50 px-4 py-2 rounded-lg transition-all uppercase tracking-widest"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/5 pt-8">
            {/* Named Works */}
            <div className="flex flex-wrap gap-3 mb-6 justify-center">
              {[
                "The Resonant Codex",
                "The QAG-Atlas Convergence",
                "Beyond Levinthal's Paradox",
                "The Resonant Healing Protocol",
                "The 5-Qubit Global Harmony Proof",
                "Universal Causation: The QAG Unified Field",
              ].map(work => (
                <span key={work} className="text-[9px] font-mono text-muted-foreground/40 uppercase tracking-widest bg-white/2 border border-white/5 rounded px-2 py-1">
                  {work}
                </span>
              ))}
            </div>

            {/* IP Notice */}
            <div className="max-w-3xl mx-auto p-4 border border-white/5 rounded-xl bg-white/[0.01] text-center">
              <div className="font-mono text-[9px] uppercase tracking-widest text-primary/40 mb-2">Intellectual Property Protection</div>
              <p className="text-muted-foreground font-mono text-[10px] leading-relaxed opacity-50">
                All theoretical frameworks, equations, constants, and architectural designs —
                including Quantum Affinity Gravity (QAG), the Affiniton (γ_ψ), the Psychon,
                the AVI Law, Temporal Echo Memory, and all related constructs — are the original
                intellectual property of Rodney A. Ripley Jr. / R&R Droids (EIN 84-4660278).
                Unauthorized reproduction, distribution, or commercial use is prohibited.
                See <span className="text-primary/60">LICENSE.md</span> for full terms.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
