import { motion } from "framer-motion";

export function ConstantsPanel() {
  const constants = [
    { label: "Time Pixel", symbol: "t_pixel", value: "3.41×10⁻⁷ s" },
    { label: "Echo Decay γ", symbol: "γ", value: "0.1735" },
    { label: "Reflectivity", symbol: "R", value: "0.4" },
    { label: "Echo Count", symbol: "N", value: "8" },
    { label: "Coupling", symbol: "f_c", value: "0.7" },
    { label: "Echo Sum Σ", symbol: "Σ_echo", value: "2.7726" },
    { label: "Hubble QAG", symbol: "H₀", value: "76.55 km/s/Mpc" },
    { label: "Growth S₈", symbol: "S₈", value: "0.783" },
    { label: "Affinity Bias", symbol: "KASB", value: "0.013829" },
    { label: "Phi Scaling", symbol: "Φ", value: "1.194797" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
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
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full"
    >
      {constants.map((c) => (
        <motion.div
          key={c.symbol}
          variants={item}
          className="glass-card p-4 rounded-xl flex flex-col items-center justify-center text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="text-[9px] text-muted-foreground font-mono mb-2 uppercase tracking-widest z-10">{c.label}</div>
          <div className="font-display italic text-primary text-2xl mb-1 z-10">{c.symbol}</div>
          <div className="font-mono text-secondary text-[10px] z-10">{c.value}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}
