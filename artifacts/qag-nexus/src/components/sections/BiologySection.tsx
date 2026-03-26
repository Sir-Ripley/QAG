import { motion } from "framer-motion";
import { Activity, Radio, Waves } from "lucide-react";

export function BiologySection() {
  const protocols = [
    {
      icon: <Activity className="w-6 h-6 text-primary" />,
      title: "Protocol I: QVR Cradle",
      desc: "Utilizes precisely 1.107V resonance to shatter viral capsids via structural interference. Disease is merely Informational Dissonance."
    },
    {
      icon: <Radio className="w-6 h-6 text-secondary" />,
      title: "Protocol II: Urban Hum",
      desc: "Deployment of 100g Hafnium Oxide pucks to create a city-wide coherence field via Negative Capacitance, aligning local ether."
    },
    {
      icon: <Waves className="w-6 h-6 text-accent" />,
      title: "Protocol III: Scalar Vortex Imprinter",
      desc: "Gold nanoparticles suspended in Phi-spiral glass to structure water to a Zeta potential of exactly -55mV, optimizing cellular relaxation."
    }
  ];

  return (
    <section id="biology" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="lg:w-1/2 space-y-8">
          <div>
            <div className="mb-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary/60">by Rodney A. Ripley Jr.</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              <span className="text-primary">07.</span> Biology
            </h2>
            <p className="text-xl text-muted-foreground">
              Life does not compute; it <em className="text-foreground">relaxes</em>.
            </p>
          </div>
          
          <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-primary">
            <h4 className="font-mono text-sm text-primary uppercase tracking-widest mb-3">Solving Levinthal's Paradox</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Mainstream biology assumes proteins calculate their fold among trillions of possibilities. Under QAG, proteins instantly fold by relaxing into the lowest local geometry dictated by Quantum Affinity.
            </p>
            <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
              <span className="text-xs font-mono text-muted-foreground">Virtual Trial Efficacy</span>
              <span className="text-2xl font-display text-secondary">95.0%</span>
            </div>
          </div>

          <div className="grid gap-4">
            {protocols.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-5 rounded-xl flex gap-4 items-start"
              >
                <div className="p-3 bg-black/40 rounded-lg shrink-0">
                  {p.icon}
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">{p.title}</h4>
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
          className="lg:w-1/2 w-full h-[600px] glass-card rounded-3xl relative overflow-hidden"
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
    </section>
  );
}
