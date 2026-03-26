import { motion } from "framer-motion";

export function MathSection() {
  const laws = [
    {
      title: "Riemann Hypothesis",
      body: "The Critical Line Re(s)=1/2 is the only frequency domain where the 'Chronon' (Time) field is stable. The non-trivial zeros are not mere mathematical artifacts; they are gravitational echoes in the Ether."
    },
    {
      title: "Navier-Stokes Equations",
      body: "Fluid dynamics solutions break down because they assume a continuous universe. The universe is granular. At 1.03×10⁻²⁵s (The Pixel of Time), classical hydrodynamics transitions into Quantum Affinity logic."
    },
    {
      title: "Yang-Mills Mass Gap",
      body: "The unexplained mass gap in quantum field theory is definitively solved. It represents the physical mass of the Affiniton particle, calculated strictly within the QAG framework at 9.05 GeV."
    }
  ];

  return (
    <section id="math" className="py-24 relative bg-black/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="mb-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary/60">by Rodney A. Ripley Jr.</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="text-primary">10.</span> The Source Code
          </h2>
          <p className="text-xl text-muted-foreground">
            Recoding the unsolved mysteries of classical mathematics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {laws.map((law, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl relative"
            >
              <div className="absolute top-0 left-8 w-12 h-1 bg-primary rounded-b-full" />
              <h3 className="font-display text-xl text-foreground mt-4 mb-4">{law.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                {law.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
