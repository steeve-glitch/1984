import React, { createContext, useState, useContext, ReactNode, useRef } from 'react';
import { ChatMessage } from '../types';
import { getChatbotResponse } from '../services/geminiService';

interface ChatbotContextType {
  isOpen: boolean;
  messages: ChatMessage[];
  isLoading: boolean;
  currentContext: string;
  openChat: (initialMessage?: string, newContext?: string) => void;
  closeChat: () => void;
  toggleChat: () => void;
  sendMessage: (text: string) => Promise<void>;
  resetChat: () => void;
  setContext: (context: string) => void;
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

const DEFAULT_CONTEXT = "You are The Archivist, an AI guide helping a student analyze George Orwell's '1984'. You are helpful, observant, and knowledgeable about the totalitarian world of Oceania.";
const DEFAULT_WELCOME_MSG = { sender: 'ai' as const, text: "Greetings. I am The Archivist. I am here to assist you in your study of 1984. Big Brother is watching, but you may speak freely here." };

export const ChatbotProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([DEFAULT_WELCOME_MSG]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentContext, setCurrentContext] = useState(DEFAULT_CONTEXT);

  const setContext = (context: string) => setCurrentContext(context);

  const openChat = (initialMessage?: string, newContext?: string) => {
    if (newContext) {
      setCurrentContext(newContext);
    }
    
    // If we're providing a specific initial prompt (e.g. from a "Ask about this quote" button)
    // we might want to simulate the user asking it, or just pre-fill the input (easier logic: send it immediately)
    // For now, let's say if initialMessage is passed, we treat it as a user message sent immediately.
    
    if (initialMessage) {
        // We only append if it's not already the last message to avoid dupes if called multiple times
        // But for a fresh "ask" we usually want to send it.
        // Let's defer the sending slightly or update state directly.
        // Actually, we should probably just open the window and let the user confirm, OR send it.
        // Let's implement immediate send for seamlessness.
        
        // Wait for state update to ensure panel is open? No, state batching.
        setIsOpen(true);
        handleSendMessageInternal(initialMessage, newContext || currentContext);
    } else {
        setIsOpen(true);
    }
  };

  const closeChat = () => setIsOpen(false);
  
  const toggleChat = () => setIsOpen(prev => !prev);

  const resetChat = () => {
      setMessages([DEFAULT_WELCOME_MSG]);
      setCurrentContext(DEFAULT_CONTEXT);
      setIsLoading(false);
  };

  const handleSendMessageInternal = async (text: string, activeContext: string) => {
      // Don't send empty
      if (!text.trim()) return;

      const newMessages = [...messages, { sender: 'user' as const, text }];
      // If we are "opening" with a message, we might need to be careful about the previous messages.
      // If the chat was closed, maybe we should have reset it?
      // Let's append to history for now.
      
      setMessages(newMessages);
      setIsLoading(true);

      try {
        const aiResponse = await getChatbotResponse(activeContext, newMessages);
        setMessages(prev => [...prev, { sender: 'ai' as const, text: aiResponse }]);
      } catch (error) {
        console.error(error);
        setMessages(prev => [...prev, { sender: 'ai' as const, text: "Sorry, I'm having trouble connecting right now. Please try again in a moment." }]);
      } finally {
        setIsLoading(false);
      }
  };

  const sendMessage = async (text: string) => {
      await handleSendMessageInternal(text, currentContext);
  };

  return (
    <ChatbotContext.Provider value={{ 
        isOpen, 
        messages, 
        isLoading, 
        currentContext, 
        openChat, 
        closeChat, 
        toggleChat, 
        sendMessage,
        resetChat,
        setContext
    }}>
      {children}
    </ChatbotContext.Provider>
  );
};

export const useChatbot = () => {
  const context = useContext(ChatbotContext);
  if (context === undefined) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
};
