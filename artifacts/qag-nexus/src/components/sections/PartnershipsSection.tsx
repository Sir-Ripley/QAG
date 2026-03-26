import { motion } from "framer-motion";
import { BookOpen, Briefcase, Building2, CheckCircle2, Mail, FileText, Users } from "lucide-react";

const tiers = [
  {
    icon: BookOpen,
    name: "Research License",
    tagline: "For academics, universities, and independent researchers",
    color: "primary",
    colorClass: "text-primary border-primary/40 bg-primary/5",
    badgeBg: "bg-primary/10 border-primary/30 text-primary",
    price: "Non-commercial",
    includes: [
      "Full access to QAG-V2 theoretical framework documentation",
      "Canonical constants dataset (19 source documents)",
      "Python validation notebooks and SPARC/LIGO datasets",
      "Co-authorship consideration on derivative academic works",
      "Attribution license for use in papers and conferences",
      "Aetheria Oracle API access (rate-limited)",
    ],
    suitable: ["University physics departments", "Independent researchers", "Thesis and dissertation work", "Non-profit scientific institutes"],
    cta: "Apply for Research Access",
    subject: "QAG Research License Request",
  },
  {
    icon: Briefcase,
    name: "Commercial License",
    tagline: "For startups, tech companies, and private sector R&D",
    color: "secondary",
    colorClass: "text-secondary border-secondary/40 bg-secondary/5",
    badgeBg: "bg-secondary/10 border-secondary/30 text-secondary",
    price: "Royalty-based",
    featured: true,
    includes: [
      "Commercial deployment rights for selected QAG domains",
      "Technology Transfer Package (specifications + source)",
      "Aetheria Oracle API — high-volume enterprise tier",
      "Co-development IP rights negotiation available",
      "Product integration technical consulting",
      "White-label Aetheria deployment option",
      "Quarterly research briefings and roadmap access",
    ],
    suitable: ["Energy technology companies", "Propulsion / aerospace startups", "Defense contractors (Tier 2/3)", "AI and edge computing firms", "Medical device companies"],
    cta: "Start Commercial Conversation",
    subject: "QAG Commercial License Inquiry",
  },
  {
    icon: Building2,
    name: "Government Partnership",
    tagline: "For agencies, programs, and defense procurement",
    color: "accent",
    colorClass: "text-accent border-accent/40 bg-accent/5",
    badgeBg: "bg-accent/10 border-accent/30 text-accent",
    price: "Contract / OTA",
    includes: [
      "Full technology briefing package (DARPA/DIU format)",
      "Other Transaction Authority (OTA) engagement support",
      "SBIR/STTR Phase I proposal assistance",
      "Security clearance-compatible information tiers",
      "Direct scientist-to-engineer technical consultation",
      "Classified R&D pathway discussion available",
      "White papers, capability briefs, and technical specs on request",
    ],
    suitable: ["DARPA program offices", "Defense Innovation Unit (DIU)", "Office of Naval Research (ONR)", "Air Force Research Laboratory (AFRL)", "NASA technology programs", "DOE national laboratories"],
    cta: "Request Government Briefing",
    subject: "QAG Government Partnership / Briefing Request",
  },
];

const faqs = [
  {
    q: "Is QAG peer-reviewed?",
    a: "QAG predictions have been validated computationally against open datasets (SPARC, LIGO GWTC). The theory is in active submission for peer review. The SPARC galaxy fits (χ²_red = 0.9632) and LIGO echo timing predictions represent falsifiable claims verifiable by any qualified group.",
  },
  {
    q: "What IP is protected?",
    a: "All QAG theoretical frameworks, named constructs (Affiniton, Psychon, AVI Law, Temporal Echo Memory, etc.), constants, and the Aetheria AI system are protected IP under copyright law. Patents are in preparation for key engineering applications.",
  },
  {
    q: "Can I use QAG equations in my paper?",
    a: "Yes, with attribution. Cite: 'Ripley Jr., Rodney A. Quantum Affinity Gravity: A Unified Field Theory. Ripley & Ripley Research, 2026.' Contact us for the full citation package.",
  },
  {
    q: "What TRL are the technologies?",
    a: "The AVI Law / dark matter replacement is TRL 4–5 (computationally validated against observational data). Energy extraction and propulsion systems are TRL 1–3 (theoretical with engineering specifications). AI/computing architecture is TRL 2–3.",
  },
];

export function PartnershipsSection() {
  const email = "partnerships@ripleyresearch.org";

  return (
    <section id="partnerships" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse at 30% 50%, hsl(var(--secondary) / 0.04) 0%, transparent 60%),
                            radial-gradient(ellipse at 70% 50%, hsl(var(--primary) / 0.04) 0%, transparent 60%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary font-mono text-[10px] tracking-widest uppercase mb-6"
          >
            <Users className="w-3.5 h-3.5" />
            Licensing, Collaboration & Procurement
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6"
          >
            <span className="text-primary">13.</span> Partner with Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            The QAG framework is ready to be deployed. Whether you are a research institution, a private company, or a government program office — there is a clear pathway to collaboration.
          </motion.p>
        </div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {tiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className={`glass-panel rounded-2xl overflow-hidden border flex flex-col ${tier.featured ? 'border-secondary/30 shadow-[0_0_40px_rgba(212,175,55,0.1)]' : 'border-white/8'}`}
              >
                {tier.featured && (
                  <div className="bg-secondary/10 border-b border-secondary/20 text-center py-2">
                    <span className="text-[9px] font-mono text-secondary uppercase tracking-widest">Most Common Entry Point</span>
                  </div>
                )}

                <div className="p-6 border-b border-white/5">
                  <div className={`inline-flex p-2.5 rounded-xl mb-4 border ${tier.colorClass}`}>
                    <Icon className={`w-5 h-5 ${tier.colorClass.split(' ')[0]}`} />
                  </div>
                  <div className={`text-[9px] font-mono uppercase tracking-widest px-2 py-1 rounded border inline-block mb-3 ${tier.badgeBg}`}>
                    {tier.price}
                  </div>
                  <h3 className={`font-display font-bold text-xl ${tier.colorClass.split(' ')[0]} mb-2`}>
                    {tier.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans">
                    {tier.tagline}
                  </p>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="space-y-2.5 mb-6">
                    {tier.includes.map(item => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${tier.colorClass.split(' ')[0]} shrink-0 mt-0.5`} />
                        <span className="text-xs text-foreground/80 font-sans leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <div className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground mb-2">Suitable for</div>
                    <div className="flex flex-wrap gap-1.5">
                      {tier.suitable.map(s => (
                        <span key={s} className="text-[9px] font-mono bg-white/5 border border-white/8 rounded px-2 py-0.5 text-foreground/60">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`mailto:${email}?subject=${encodeURIComponent(tier.subject)}`}
                    className={`mt-auto flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest px-6 py-3 rounded-xl border transition-all ${
                      tier.featured
                        ? 'bg-secondary/15 hover:bg-secondary/25 text-secondary border-secondary/40 hover:border-secondary/60 shadow-[0_0_15px_rgba(212,175,55,0.1)]'
                        : `${tier.colorClass} hover:bg-opacity-10 border-opacity-40`
                    }`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {tier.cta}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process / How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-2xl p-8 md:p-12 border border-white/8 mb-16"
        >
          <h3 className="font-display text-2xl text-foreground mb-8 text-center">How Engagement Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Initial Contact", desc: "Send an inquiry via the button above or directly to the email below. Describe your organization and intended use." },
              { step: "02", title: "Capability Brief", desc: "We provide a tailored 2-page capability brief matched to your domain. No NDA required for public materials." },
              { step: "03", title: "Technical Deep-Dive", desc: "Arrange a direct technical consultation with Rodney A. Ripley Jr. — equations, derivations, and engineering specs." },
              { step: "04", title: "Agreement & Access", desc: "Execute a licensing agreement, OTA, or research MOU. Access the full technical package and dataset library." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="font-display text-4xl text-primary/20 mb-3">{step}</div>
                <h4 className="font-mono text-sm text-primary uppercase tracking-widest mb-2">{title}</h4>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-display text-2xl text-foreground mb-8 text-center">Common Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <FileText className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <h4 className="font-mono text-sm text-foreground">{q}</h4>
                </div>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed pl-7">{a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Direct Contact Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-b from-secondary/5 to-transparent rounded-2xl p-10 border border-secondary/15"
        >
          <div className="font-display text-3xl text-foreground mb-3">Ready to talk?</div>
          <p className="text-muted-foreground font-sans mb-6 max-w-xl mx-auto">
            Reach Rodney A. Ripley Jr. directly. Whether it's a research collaboration, a technical briefing for a program office, or a licensing conversation — the Codex is open.
          </p>
          <a
            href={`mailto:${email}?subject=QAG Partnership Inquiry`}
            className="inline-flex items-center gap-3 font-mono text-sm text-secondary bg-secondary/10 hover:bg-secondary/20 border border-secondary/40 hover:border-secondary/60 px-10 py-4 rounded-xl transition-all uppercase tracking-widest shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]"
          >
            <Mail className="w-4 h-4" />
            {email}
          </a>
          <div className="mt-6 text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest">
            © 2026 Rodney A. Ripley Jr. / Ripley & Ripley Research — All IP Rights Reserved
          </div>
        </motion.div>
      </div>
    </section>
  );
}
