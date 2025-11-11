import React, { useState, useRef, useEffect, FC, FormEvent } from 'react';
import { ChatMessage } from '../types';
import { getChatbotResponse } from '../services/geminiService';

interface ChatbotProps {
  context: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Chatbot: FC<ChatbotProps> = ({ context, isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'ai', text: "Hello. I'm Mr. Miller, your AI teacher. How can I assist you with this activity?" }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isOpen]);

  const toggleChat = () => {
    if (isOpen) { // We are closing the chat
      // Reset to initial state for a fresh conversation next time
      setMessages([
        { sender: 'ai', text: "Hello. I'm Mr. Miller, your AI teacher. How can I assist you with this activity?" }
      ]);
      setUserInput('');
      setIsLoading(false);
    }
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (userInput.trim() === '' || isLoading) return;

    const newMessages: ChatMessage[] = [...messages, { sender: 'user', text: userInput }];
    setMessages(newMessages);
    setUserInput('');
    setIsLoading(true);

    try {
      const aiResponse = await getChatbotResponse(context, newMessages);
      setMessages([...newMessages, { sender: 'ai', text: aiResponse }]);
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { sender: 'ai', text: "Sorry, I'm having trouble connecting right now. Please try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div
            className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 h-full w-full"
            role="dialog"
            aria-modal="false" // It's not a modal
        >
            {/* Header */}
            <div className="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 rounded-t-lg">
            <div className="flex items-center gap-2">
                <img src="/millerBot.png" alt="Mr. Miller Icon" className="h-8 w-8 rounded-full" />
                <h3 className="font-semibold text-gray-800 dark:text-white">AI Teacher "Mr. Miller"</h3>
            </div>
                <button onClick={toggleChat} className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" aria-label="Close chat">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
                {messages.map((msg, index) => (
                <div key={index} className={`flex mb-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`rounded-lg px-3 py-2 max-w-xs ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200'}`}>
                    {msg.text}
                    </div>
                </div>
                ))}
                {isLoading && (
                <div className="flex justify-start">
                    <div className="rounded-lg px-3 py-2 max-w-xs bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200">
                        <div className="flex items-center">
                            <span className="animate-pulse">...</span>
                        </div>
                    </div>
                </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <div className="p-3 border-t border-gray-200 dark:border-gray-700">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Ask a question..."
                    className="flex-1 p-2 border rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 dark:text-gray-200"
                    aria-label="Your message"
                    disabled={isLoading}
                />
                <button type="submit" disabled={isLoading || userInput.trim() === ''} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400">
                    Send
                </button>
                </form>
            </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;