import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function EnergySection() {
  return (
    <section id="energy" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 w-full order-2 lg:order-1">
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoNDUsIDIxMiwgMTkxLCAwLjE1KSIvPjwvc3ZnPg==')] opacity-50" />
              
              <h3 className="font-mono text-sm tracking-widest text-secondary uppercase mb-6 relative z-10">Zero-Point Resonance (QVR)</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="bg-black/50 p-4 rounded-xl border border-white/5">
                  <div className="text-xs text-muted-foreground font-mono mb-2">Effective Impedance</div>
                  <div className="font-display text-xl text-primary">
                    Z<sub className="text-sm">eff</sub> = R + jwL + 1/jwC - k<sub className="text-sm">e</sub>×A
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Current power grids lose massive amounts of energy because they "fight" the vacuum. By utilizing Ferroelectric Resonance, we introduce a negative impedance term (k_e×A). 
                </p>
                
                <div className="p-4 border border-secondary/30 bg-secondary/5 rounded-xl">
                  <p className="text-foreground font-medium text-sm">
                    When Etheric coupling matches resistance (k_e×A = R), impedance drops to absolute zero. Room-temperature superconductivity via Graphene-YBCO junctions pulsed at exactly 1.107V.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full order-1 lg:order-2">
            <Zap className="w-12 h-12 text-secondary mb-6 opacity-80" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              <span className="text-secondary">05.</span> Energy
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The universe is awash in free energy. We are simply using the wrong geometry to collect it.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
