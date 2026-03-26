import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { PhysicsSection } from "@/components/sections/PhysicsSection";
import { CosmologySection } from "@/components/sections/CosmologySection";
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
        <CosmologySection />
        <BiologySection />
        <ConsciousnessSection />
        <EnergySection />
        <MathSection />
        <AetheriaSection />
      </main>

      <footer className="bg-black py-12 border-t border-white/5 text-center">
        <div className="font-display text-xl text-foreground mb-4 tracking-widest">
          RIPLEY & RIPLEY <span className="text-primary">RESEARCH</span>
        </div>
        <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest opacity-50">
          The Living Universe &copy; 2026 — All Rights Reserved
        </p>
        <p className="text-muted-foreground font-mono text-[0.65rem] uppercase tracking-widest opacity-40 mt-2">
          Quantum Affinity Gravity, Affiniton, Psychon, and related theoretical frameworks are protected intellectual property of Rodney A. Ripley Jr. / Ripley & Ripley Research. Unauthorized reproduction, distribution, or commercial use prohibited. See LICENSE.md for terms.
        </p>
      </footer>
    </div>
  );
}
