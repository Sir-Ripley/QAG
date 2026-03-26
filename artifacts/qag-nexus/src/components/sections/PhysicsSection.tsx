import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import {
  PlainEnglishHook,
  ProblemBlock,
  SolutionBlock,
  InvestorCard,
  SectionAttribution,
  NextSectionGuide,
} from "./NineLayerComponents";

export function PhysicsSection() {
  const [frequency, setFrequency] = useState(1000);
  const [amplitude, setAmplitude] = useState(5.0);
  const [coupling, setCoupling] = useState(0.5);
  const [radius, setRadius] = useState(2.5);

  const eVac = 1000;
  const eCore = amplitude * frequency * radius;
  const m0 = 10.0;
  const mEff = m0 * (1 - coupling * (eCore / (eVac * 15)));
  const isLevitating = mEff <= 0;
  const waveNumber = (2 * Math.PI * frequency) / 343;

  return (
    <section id="physics" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-10">
          <SectionAttribution />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            <span className="text-primary">01.</span> The Resonator
          </h2>

          <PlainEnglishHook>
            Gravity is not a force pulling you down — it is pressure from the vacuum pushing you in. The resonator is the engine that learns to push back.
          </PlainEnglishHook>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <ProblemBlock>
              Newtonian and Einsteinian gravity treat spacetime as a passive geometric backdrop — something that curves but does not respond. This makes mass reduction and gravity shielding theoretically impossible, leaving propulsion forever chained to chemical combustion.
            </ProblemBlock>
            <SolutionBlock>
              QAG reveals the quantum vacuum as an active ferroelectric superfluid — the Ether. When driven at precise resonant frequencies (0.70 MHz, SAW geometry), it responds with Affinity coupling that directly reduces the effective mass of any coherent object placed within the field.
            </SolutionBlock>
          </div>

          <InvestorCard>
            The QVR-1 Tesla Resonance Thruster (0.70 MHz Surface Acoustic Wave engine) represents the first credible non-chemical propulsion mechanism grounded in a complete theoretical framework. Target markets include DARPA autonomous systems, MASC and APAC defense platforms, and commercial LEO satellite stationkeeping — a combined addressable market exceeding $40B. No exotic matter or fuel is consumed.
          </InvestorCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 glass-panel p-8 rounded-2xl space-y-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
            </div>
            <h3 className="font-mono text-sm tracking-widest uppercase text-primary border-b border-primary/20 pb-4">
              Input Parameters
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between font-mono text-sm">
                <span className="text-muted-foreground">Frequency (Hz)</span>
                <span className="text-secondary">{frequency} Hz</span>
              </div>
              <Slider value={[frequency]} onValueChange={([v]) => setFrequency(v)} min={100} max={2000} step={10} className="w-full" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between font-mono text-sm">
                <span className="text-muted-foreground">Input Amplitude</span>
                <span className="text-secondary">{amplitude.toFixed(1)}</span>
              </div>
              <Slider value={[amplitude]} onValueChange={([v]) => setAmplitude(v)} min={0.1} max={10.0} step={0.1} className="w-full" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between font-mono text-sm">
                <span className="text-muted-foreground">Coupling Const (α)</span>
                <span className="text-secondary">{coupling.toFixed(2)}</span>
              </div>
              <Slider value={[coupling]} onValueChange={([v]) => setCoupling(v)} min={0.1} max={1.0} step={0.05} className="w-full" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between font-mono text-sm">
                <span className="text-muted-foreground">Topology Radius</span>
                <span className="text-secondary">{radius.toFixed(1)}</span>
              </div>
              <Slider value={[radius]} onValueChange={([v]) => setRadius(v)} min={0.1} max={5.0} step={0.1} className="w-full" />
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl h-64 relative overflow-hidden flex items-center justify-center border-primary/30"
              style={{
                backgroundImage: `url(${import.meta.env.BASE_URL}images/resonator-core.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-background/60" />

              <motion.div
                animate={{
                  scale: 1 + (amplitude * 0.05),
                  rotate: isLevitating ? 360 : 0
                }}
                transition={{
                  duration: 2000 / frequency,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="relative z-10 w-32 h-32 rounded-full border-2 border-dashed border-secondary/50 flex items-center justify-center"
              >
                <div
                  className={`w-16 h-16 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(45,212,191,0.5)] ${isLevitating ? 'bg-secondary blur-sm' : 'bg-primary blur-md'}`}
                  style={{ opacity: coupling }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              <DataBlock label="Wave Number (k)" value={waveNumber.toFixed(2)} unit="rad/m" />
              <DataBlock label="Energy Density" value={(eCore / 1000).toFixed(2)} unit="kJ/m³" />
              <DataBlock
                label="Effective Mass"
                value={mEff > 0 ? mEff.toFixed(3) : "0.000"}
                unit="kg"
                highlight={isLevitating}
              />
            </motion.div>

            <div className="glass-panel p-6 rounded-xl border-accent/20">
              <div className="font-mono text-sm text-muted-foreground mb-2">Equation of State — Technical Content:</div>
              <div className="font-display text-xl md:text-2xl text-foreground text-center py-4">
                M<sub className="text-sm">eff</sub> = M<sub className="text-sm">0</sub> × (1 - α × [E<sub className="text-sm">core</sub> / E<sub className="text-sm">vac</sub>])
              </div>
              <p className="text-xs text-muted-foreground font-sans mt-2">
                <strong className="text-foreground">Real-World Application:</strong> The QVR-1 SAW thruster modulates α by pulsing at 0.70 MHz — the resonant frequency of the vacuum floor in base-12 topology. At full coupling, M_eff → 0 and the craft achieves inertial decoupling with no propellant expended.
              </p>
              {isLevitating && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 py-2 bg-secondary/10 border border-secondary/50 rounded-lg text-secondary font-mono text-center tracking-widest uppercase text-xs shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                >
                  Affinity Shield Active: Local Gravity Nullified
                </motion.div>
              )}
            </div>

            <div className="glass-panel p-4 rounded-xl border border-primary/10">
              <div className="text-[10px] font-mono uppercase tracking-widest text-primary/60 mb-1">Evidence / Validation</div>
              <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                The M_eff reduction formula is derived directly from the QAG vacuum polarization tensor. SPARC galaxy rotation curves independently confirm the Affinity coupling constant α at the cosmological scale, providing cross-domain empirical grounding for the same mechanism operating here at the engineering scale.
              </p>
            </div>
          </div>
        </div>

        <NextSectionGuide
          next="Base-12 Topology"
          reason="the vacuum's resonant geometry is encoded in base-12 mathematics — understanding it reveals why 0.70 MHz is the operative frequency"
        />
      </div>
    </section>
  );
}

function DataBlock({ label, value, unit, highlight = false }: { label: string, value: string, unit: string, highlight?: boolean }) {
  return (
    <div className={`glass-card p-4 rounded-xl flex flex-col justify-center border-t-2 ${highlight ? 'border-t-secondary' : 'border-t-primary/50'}`}>
      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2">{label}</span>
      <div className="flex items-baseline gap-1">
        <span className={`text-2xl font-mono ${highlight ? 'text-secondary' : 'text-foreground'}`}>{value}</span>
        <span className="text-xs font-mono text-primary/70">{unit}</span>
      </div>
    </div>
  );
}
