
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { getConciergeResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Namaste! Welcome to Hotel Sky Lark. I am your personal AI Concierge. How may I assist you with your stay or dining today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await getConciergeResponse(input, messages);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 relative group overflow-hidden ${
          isOpen ? 'bg-stone-900 rotate-90' : 'bg-[#C5A059] hover:scale-110'
        }`}
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        {isOpen ? <X className="text-white" /> : <MessageSquare className="text-black" />}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#F8F5F0]"></div>
        )}
      </button>

      {/* Concierge Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[550px] bg-white shadow-2xl rounded-sm flex flex-col border border-stone-100 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-[#1A1A1A] p-6 flex items-center gap-4">
            <div className="w-10 h-10 bg-[#C5A059] rounded-full flex items-center justify-center text-black">
              <Sparkles size={20} />
            </div>
            <div>
              <h4 className="text-[#C5A059] font-serif font-bold text-lg leading-tight">AI Concierge</h4>
              <p className="text-[10px] text-stone-500 uppercase tracking-widest font-bold">Always at your service</p>
            </div>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-6 space-y-4 bg-stone-50"
          >
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] p-4 rounded-sm text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#C5A059] text-black font-medium' 
                    : 'bg-white text-stone-700 border border-stone-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-sm border border-stone-100">
                  <Loader2 className="animate-spin text-[#C5A059]" size={20} />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-stone-100 bg-white">
            <div className="relative flex items-center">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask anything about our hotel..."
                className="w-full px-4 py-4 pr-12 bg-stone-50 text-stone-800 text-sm border-none focus:ring-1 ring-[#C5A059] outline-none transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-4 text-[#C5A059] disabled:opacity-30 hover:scale-110 transition-transform"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-[9px] text-stone-400 mt-3 text-center uppercase tracking-widest font-bold">Powered by Gemini Intelligence</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIConcierge;
