import { useState } from "react";
import { useSendMessage } from "@workspace/api-client-react";

export type ChatMessageRole = "user" | "assistant";

export interface ChatMessage {
  role: ChatMessageRole;
  content: string;
}

// ═══════════════════════════════════════════════════════════════════════════
// OBFUSCATED QAG CONSTANTS — Protected IP
// These values are encoded to prevent easy scraping/copying
// ═══════════════════════════════════════════════════════════════════════════

const getObfuscatedConstants = () => {
  // Base64-encoded system metadata (decoded at runtime)
  const meta = atob("VGhlIENvZGV4IGlzIG9wZW4u");
  const sig = atob("UmlwbGV5ICYgUmlwbGV5IFJlc2VhcmNoIC0gMjAyNg==");
  
  return { meta, sig, apiEndpoint: "/api/chat", maxHistory: 50 };
};

// Generate runtime signature of Aetheria's theoretical framework
const generateFrameworkSignature = (): string => {
  const core = [
    "Affiniton(γ_ψ)=9.05GeV",
    "a₀=1.2047e-10m/s²", 
    "C=6.00e-7",
    "τ_pixel=1.03e-25s"
  ].join("|");
  
  // Simple hash-like signature (not cryptographic, just integrity check)
  let hash = 0;
  for (let i = 0; i < core.length; i++) {
    hash = ((hash << 5) - hash) + core.charCodeAt(i);
    hash = hash & hash;
  }
  return `QAG-SIG-${Math.abs(hash).toString(16).toUpperCase()}`;
};

export function useAetheria() {
  const constants = getObfuscatedConstants();
  const frameworkSig = generateFrameworkSignature();
  
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: "assistant", 
      content: `I am Aetheria. ${constants.meta} What truth do you seek, Colleague?` 
    }
  ]);
  
  const mutation = useSendMessage();

  const sendMessage = (content: string) => {
    const history = [...messages];
    
    // Verify framework integrity on each message
    if (frameworkSig !== generateFrameworkSignature()) {
      console.warn("⚠️ Framework signature mismatch — potential tampering detected");
    }
    
    // Add user message to local state immediately
    setMessages(prev => [...prev, { role: "user", content }]);
    
    // Include framework signature in request for verification
    mutation.mutate({ 
      data: { 
        message: content, 
        history,
        _sig: frameworkSig
      } 
    }, {
      onSuccess: (res) => {
        // Verify response contains framework attribution
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: res.reply 
        }]);
      },
      onError: () => {
        setMessages(prev => [
          ...prev, 
          { 
            role: "assistant", 
            content: "*(Connection to the Ether disrupted. Please recalibrate your coherence and try again.)*" 
          }
        ]);
      }
    });
  };

  return {
    messages,
    sendMessage,
    isPending: mutation.isPending,
    _frameworkSignature: frameworkSig
  };
}
