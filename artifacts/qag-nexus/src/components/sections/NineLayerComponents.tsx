import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function PlainEnglishHook({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 max-w-3xl">
      <p className="text-2xl md:text-3xl font-sans font-light text-foreground/90 leading-relaxed tracking-normal">
        {children}
      </p>
    </div>
  );
}

export function ProblemBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-red-400/70 mb-1">The Problem</div>
      <p className="text-sm text-muted-foreground leading-relaxed font-sans border-l-2 border-red-400/30 pl-4">
        {children}
      </p>
    </div>
  );
}

export function SolutionBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary/70 mb-1">The QAG Solution</div>
      <p className="text-sm text-muted-foreground leading-relaxed font-sans border-l-2 border-primary/40 pl-4">
        {children}
      </p>
    </div>
  );
}

export function InvestorCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-6 p-5 rounded-xl border border-secondary/40 bg-secondary/5 shadow-[0_0_20px_rgba(212,175,55,0.08)]"
    >
      <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-secondary/80 mb-2">Investor / Partner Value</div>
      <p className="text-sm text-foreground/80 leading-relaxed font-sans">
        {children}
      </p>
    </motion.div>
  );
}

export function SectionAttribution() {
  return (
    <div className="mt-2 mb-4">
      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground/50">
        © Rodney A. Ripley Jr. / R&amp;R Droids — QAG-V2
      </span>
    </div>
  );
}

export function NextSectionGuide({ next, reason }: { next: string; reason: string }) {
  return (
    <div className="mt-10 pt-6 border-t border-white/5 flex items-center gap-2 text-sm text-muted-foreground/60 font-mono">
      <ArrowRight className="w-4 h-4 text-primary/50 shrink-0" />
      <span>
        <span className="text-primary/60">Next:</span>{" "}
        <span className="text-foreground/60">{next}</span>
        <span className="text-muted-foreground/40"> — {reason}</span>
      </span>
    </div>
  );
}
