import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { PhysicsSection } from "@/components/sections/PhysicsSection";
import { CosmologySection } from "@/components/sections/CosmologySection";
import { Base12Section } from "@/components/sections/Base12Section";
import { WaveFunctionSection } from "@/components/sections/WaveFunctionSection";
import { QAIDropSection } from "@/components/sections/QAIDropSection";
import { ValidationSection } from "@/components/sections/ValidationSection";
import { ResonantCodexSection } from "@/components/sections/ResonantCodexSection";
import { BiologySection } from "@/components/sections/BiologySection";
import { ConsciousnessSection } from "@/components/sections/ConsciousnessSection";
import { EnergySection } from "@/components/sections/EnergySection";
import { MathSection } from "@/components/sections/MathSection";
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
        <AetheriaSection />
      </main>

      <footer className="bg-black py-12 border-t border-white/5 text-center">
        <div className="font-display text-xl text-foreground mb-2 tracking-widest">
          RIPLEY & RIPLEY <span className="text-primary">RESEARCH</span>
        </div>
        <div className="text-muted-foreground font-mono text-xs uppercase tracking-widest opacity-60 mb-4">
          Quantum Affinity Gravity — QAG-V2 Framework
        </div>
        <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest opacity-50 mb-2">
          © 2026 Rodney A. Ripley Jr. — All Rights Reserved. Ripley & Ripley Research.
        </p>
        <div className="max-w-2xl mx-auto mt-4 p-4 border border-white/5 rounded-xl bg-white/2">
          <div className="font-mono text-[10px] uppercase tracking-widest text-primary/50 mb-2">IP Protection Notice</div>
          <p className="text-muted-foreground font-mono text-[0.65rem] leading-relaxed opacity-40">
            This work is published for scientific progress and public benefit. All theoretical frameworks, equations, constants, 
            and architectural designs — including Quantum Affinity Gravity (QAG), the Affiniton, the Psychon, the AVI Law, 
            and all related named constructs — are the original intellectual property of Rodney A. Ripley Jr. / Ripley &amp; Ripley Research. 
            Unauthorized reproduction, distribution, or commercial use is prohibited. See LICENSE.md for full terms.
          </p>
        </div>
      </footer>
    </div>
  );
}
