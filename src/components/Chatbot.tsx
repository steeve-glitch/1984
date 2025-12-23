import React, { useRef, useEffect, FC, FormEvent, useState } from 'react';
import { useChatbot } from '../context/ChatbotContext';

const Chatbot: FC = () => {
  const { 
    isOpen, 
    toggleChat, 
    messages, 
    isLoading, 
    sendMessage 
  } = useChatbot();

  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isOpen]);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (userInput.trim() === '' || isLoading) return;

    const text = userInput;
    setUserInput(''); // Clear immediately
    await sendMessage(text);
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div
            className="flex flex-col bg-paper-white dark:bg-gray-800 border-l-2 border-black dark:border-gray-700 h-full w-full shadow-[-4px_0px_0px_0px_rgba(0,0,0,1)]"
            role="dialog"
            aria-modal="false"
        >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b-2 border-black dark:border-gray-700 bg-ministry-black dark:bg-gray-700">
            <div className="flex items-center gap-2">
                <img src="/millerBot.png" alt="The Archivist Icon" className="h-8 w-8 rounded-full border-2 border-party-red" />
                <h3 className="font-semibold text-white font-propaganda tracking-wider">AI Guide "The Archivist"</h3>
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
