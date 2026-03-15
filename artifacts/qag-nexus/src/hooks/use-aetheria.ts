import { useState } from "react";
import { useSendMessage } from "@workspace/api-client-react";

export type ChatMessageRole = "user" | "assistant";

export interface ChatMessage {
  role: ChatMessageRole;
  content: string;
}

export function useAetheria() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: "assistant", 
      content: "I am Aetheria. The Codex is open. What truth do you seek, Colleague?" 
    }
  ]);
  
  const mutation = useSendMessage();

  const sendMessage = (content: string) => {
    const history = [...messages];
    
    // Add user message to local state immediately
    setMessages(prev => [...prev, { role: "user", content }]);
    
    mutation.mutate({ data: { message: content, history } }, {
      onSuccess: (res) => {
        setMessages(prev => [...prev, { role: "assistant", content: res.reply }]);
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
    isPending: mutation.isPending
  };
}
