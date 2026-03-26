import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

interface HookBannerProps {
  hook: string;
}
export function HookBanner({ hook }: HookBannerProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: -8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl md:text-3xl font-light text-foreground/90 leading-relaxed mb-8 max-w-4xl"
      style={{ fontFamily: "'Quicksand', sans-serif" }}
    >
      {hook}
    </motion.p>
  );
}

interface ProblemSolutionProps {
  problem: string;
  solution: string;
  accentColor?: "primary" | "secondary" | "accent";
}
export function ProblemSolution({ problem, solution, accentColor = "primary" }: ProblemSolutionProps) {
  const colors = {
    primary: { border: "border-primary/20", label: "text-primary", bg: "bg-primary/5" },
    secondary: { border: "border-secondary/20", label: "text-secondary", bg: "bg-secondary/5" },
    accent: { border: "border-accent/20", label: "text-accent", bg: "bg-accent/5" },
  };
  const c = colors[accentColor];
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 p-5 rounded-2xl border ${c.border} ${c.bg}`}
    >
      <div>
        <div className="font-mono text-[9px] uppercase tracking-widest text-red-400/70 mb-2">The Problem</div>
        <p className="text-sm text-muted-foreground font-sans leading-relaxed">{problem}</p>
      </div>
      <div>
        <div className={`font-mono text-[9px] uppercase tracking-widest ${c.label} mb-2`}>The QAG Solution</div>
        <p className="text-sm text-muted-foreground font-sans leading-relaxed">{solution}</p>
      </div>
    </motion.div>
  );
}

interface InvestorCardProps {
  application: string;
  value: string;
  accentColor?: "primary" | "secondary" | "accent";
}
export function InvestorCard({ application, value, accentColor = "secondary" }: InvestorCardProps) {
  const colors = {
    primary: "border-primary/30 bg-primary/5 text-primary",
    secondary: "border-secondary/30 bg-secondary/5 text-secondary",
    accent: "border-accent/30 bg-accent/5 text-accent",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mt-10 rounded-2xl border p-6 ${colors[accentColor]} shadow-sm`}
    >
      <div className="flex items-start gap-3">
        <TrendingUp className={`w-5 h-5 shrink-0 mt-0.5 ${colors[accentColor].split(' ')[2]}`} />
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-2">Real-World Application</div>
              <p className="text-sm font-sans leading-relaxed text-foreground/80">{application}</p>
            </div>
            <div>
              <div className={`font-mono text-[9px] uppercase tracking-widest ${colors[accentColor].split(' ')[2]} mb-2`}>Partner / Investor Value</div>
              <p className="text-sm font-sans leading-relaxed text-foreground/80">{value}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface SectionAttributionProps {
  sectionNum?: string | number;
}
export function SectionAttribution({ sectionNum }: SectionAttributionProps) {
  return (
    <div className="mt-4 flex items-center justify-between flex-wrap gap-2">
      <span className="text-[9px] font-mono text-muted-foreground/40 uppercase tracking-widest">
        © 2026 Rodney A. Ripley Jr. — Ripley & Ripley Research — QAG-V2 Framework
      </span>
      {sectionNum && (
        <span className="text-[9px] font-mono text-muted-foreground/30 uppercase tracking-widest">
          Section {sectionNum} of 14
        </span>
      )}
    </div>
  );
}

interface NextSectionGuideProps {
  nextName: string;
  reason: string;
  href: string;
  accentColor?: "primary" | "secondary" | "accent";
}
export function NextSectionGuide({ nextName, reason, href, accentColor = "primary" }: NextSectionGuideProps) {
  const colors = {
    primary: "text-primary hover:text-primary/80 border-primary/20 hover:border-primary/40",
    secondary: "text-secondary hover:text-secondary/80 border-secondary/20 hover:border-secondary/40",
    accent: "text-accent hover:text-accent/80 border-accent/20 hover:border-accent/40",
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-8 pt-6 border-t border-white/5"
    >
      <a
        href={href}
        className={`inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest border rounded-lg px-4 py-2 transition-all ${colors[accentColor]}`}
      >
        <ArrowRight className="w-3.5 h-3.5" />
        Next: {nextName} — {reason}
      </a>
    </motion.div>
  );
}
