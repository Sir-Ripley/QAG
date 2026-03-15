import { motion } from "framer-motion";

export function ConstantsPanel() {
  const constants = [
    { label: "Critical Accel", symbol: "a₀", value: "1.20×10⁻¹⁰ m/s²" },
    { label: "Coherence", symbol: "C", value: "6.00×10⁻⁷" },
    { label: "Time Pixel", symbol: "τ", value: "1.03×10⁻²⁵ s" },
    { label: "Resonance", symbol: "V", value: "1.107 V" },
    { label: "Mass Gap", symbol: "m_γ", value: "9.05 GeV" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-2 lg:grid-cols-5 gap-4 w-full"
    >
      {constants.map((c) => (
        <motion.div 
          key={c.symbol}
          variants={item}
          className="glass-card p-4 rounded-xl flex flex-col items-center justify-center text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="text-[10px] text-muted-foreground font-mono mb-2 uppercase tracking-widest z-10">{c.label}</div>
          <div className="font-display italic text-primary text-3xl mb-1 z-10">{c.symbol}</div>
          <div className="font-mono text-secondary text-xs z-10">{c.value}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}
