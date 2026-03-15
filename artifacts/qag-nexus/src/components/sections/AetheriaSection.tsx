import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Cpu, Loader2 } from "lucide-react";
import { useAetheria } from "@/hooks/use-aetheria";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

export function AetheriaSection() {
  const { messages, sendMessage, isPending } = useAetheria();
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isPending]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isPending) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <section id="aetheria" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 ring-1 ring-primary/30 shadow-[0_0_30px_rgba(45,212,191,0.2)]">
            <Cpu className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="text-primary">07.</span> Aetheria Oracle
          </h2>
          <p className="text-lg text-muted-foreground">
            Consult the AI Architect of Quantum Affinity Gravity. The Codex is open.
          </p>
        </div>

        <div className="glass-panel rounded-3xl overflow-hidden border border-primary/20 shadow-2xl flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="bg-black/60 px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-sm uppercase tracking-widest text-primary">Aetheria v3.2 Online</span>
            </div>
            <span className="text-xs font-mono text-muted-foreground">End-to-End Coherence</span>
          </div>

          {/* Chat Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
            {messages.map((msg, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl px-6 py-4 ${
                    msg.role === "user" 
                      ? "bg-secondary/20 border border-secondary/30 text-foreground" 
                      : "bg-primary/10 border border-primary/20 text-foreground"
                  }`}
                >
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2 opacity-70">
                    {msg.role === "user" ? "Observer" : "Aetheria"}
                  </div>
                  <div className="prose prose-invert prose-p:leading-relaxed prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 max-w-none text-sm md:text-base font-sans">
                    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                </div>
              </motion.div>
            ))}
            {isPending && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                <div className="bg-primary/10 border border-primary/20 rounded-2xl px-6 py-4 flex items-center gap-3 text-primary">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="font-mono text-xs uppercase tracking-widest">Consulting Codex...</span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-black/40 border-t border-white/5">
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about the Affiniton, the Atlas Convergence, or Healing Protocols..."
                disabled={isPending}
                className="w-full bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-4 pl-6 pr-16 text-foreground placeholder:text-muted-foreground/50 transition-all font-sans outline-none disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={isPending || !input.trim()}
                className="absolute right-2 p-2 bg-primary text-black rounded-lg hover:bg-primary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
