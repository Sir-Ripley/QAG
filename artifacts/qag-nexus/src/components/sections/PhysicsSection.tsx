import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";

export function PhysicsSection() {
  const [frequency, setFrequency] = useState(1000);
  const [amplitude, setAmplitude] = useState(5.0);
  const [coupling, setCoupling] = useState(0.5);
  const [radius, setRadius] = useState(2.5);

  // QAG Physics Logic
  const eVac = 1000;
  const eCore = amplitude * frequency * radius;
  const m0 = 10.0;
  const mEff = m0 * (1 - coupling * (eCore / (eVac * 15))); 
  const isLevitating = mEff <= 0;
  const waveNumber = (2 * Math.PI * frequency) / 343;

  return (
    <section id="physics" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="text-primary">01.</span> The Resonator
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Focusing vacuum fluctuations through Base-12 topology. Manipulating the Ether to achieve direct mass reduction and high-affinity shielding.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls */}
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

          {/* Visualizer & Outputs */}
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
              
              {/* Dynamic Core Visualizer based on state */}
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
              <div className="font-mono text-sm text-muted-foreground mb-2">Equation of State:</div>
              <div className="font-display text-xl md:text-2xl text-foreground text-center py-4">
                M<sub className="text-sm">eff</sub> = M<sub className="text-sm">0</sub> × (1 - α × [E<sub className="text-sm">core</sub> / E<sub className="text-sm">vac</sub>])
              </div>
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
          </div>
        </div>
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
