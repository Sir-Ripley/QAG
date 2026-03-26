import { motion } from "framer-motion";

export function ResonantCodexSection() {
  return (
    <section id="codex" className="py-20 relative bg-black/60 border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `radial-gradient(ellipse at 50% 50%, hsl(var(--primary)) 0%, transparent 70%)`
        }}
      />
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary/60">by Rodney A. Ripley Jr.</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-3">
            The Resonant Codex
          </h2>
          <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest">
            Physics Infographic — Ripley &amp; Ripley Research © 2026
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-[0_0_60px_rgba(45,212,191,0.15)]"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/resonant-codex-infographic.png`}
            alt="The Resonant Codex Physics Infographic — Rodney A. Ripley Jr. / Ripley & Ripley Research © 2026"
            className="w-full h-auto block"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-center">
            <p className="text-[10px] font-mono text-muted-foreground/70 uppercase tracking-widest">
              © 2026 Rodney A. Ripley Jr. — Ripley &amp; Ripley Research — All Rights Reserved. Unauthorized reproduction prohibited.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
