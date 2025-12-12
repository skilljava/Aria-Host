import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { GoogleGenAI } from "@google/genai";

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    { text: 'سلام! چطور می‌توانم کمکتان کنم؟', isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const userMessage = input;
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Construct history from existing messages
      const history = messages.map(msg => ({
        role: msg.isUser ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }));

      // Add current message to history context
      history.push({ role: 'user', parts: [{ text: userMessage }] });

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-lite',
        contents: history,
        config: {
          systemInstruction: "شما دستیار هوشمند پشتیبانی سایت «آریاهاست» (AriaHost) هستید. آریاهاست ارائه‌دهنده سرور مجازی (VPS)، سرور گیم، هاست ابری و سرور اختصاصی است. وظیفه شما راهنمایی کاربران به زبان فارسی، با لحنی مودبانه، حرفه‌ای و کوتاه است. اگر سوال فنی پیچیده‌ای پرسیدند که نمی‌دانستید، پیشنهاد دهید تیکت ارسال کنند.",
        }
      });

      const responseText = response.text || "متاسفانه مشکلی در ارتباط پیش آمد.";
      
      setMessages(prev => [...prev, { text: responseText, isUser: false }]);

    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { text: 'متاسفانه در برقراری ارتباط با سرور مشکلی پیش آمده. لطفا دقایقی دیگر تلاش کنید.', isUser: false }]);
    } finally {
      setIsLoading(false);
    }
  };

  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo('.chat-window', 
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'back.out(1.2)' }
      );
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-4">
      {isOpen && (
        <div className="chat-window w-80 md:w-96 bg-slate-800/95 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[450px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-4 flex justify-between items-center text-white shadow-md z-10">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="font-bold text-sm">پشتیبانی هوشمند آریاهاست</span>
            </div>
            <button onClick={toggleChat} className="hover:bg-white/20 p-1 rounded transition">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.isUser ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] p-3 text-sm leading-relaxed shadow-sm ${
                  msg.isUser 
                    ? 'bg-slate-700 text-white rounded-2xl rounded-br-sm' 
                    : 'bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 text-slate-200 rounded-2xl rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex justify-end">
                <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-2xl rounded-bl-sm p-3 flex items-center gap-1">
                   <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                   <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                   <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="p-3 bg-slate-900/80 border-t border-slate-700 flex gap-2 backdrop-blur-sm">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="پیام خود را بنویسید..." 
              disabled={isLoading}
              className="flex-1 bg-slate-800 text-white text-sm rounded-xl px-4 py-3 border border-slate-600 focus:border-orange-500 focus:outline-none transition disabled:opacity-50 placeholder-slate-500"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 disabled:from-slate-700 disabled:to-slate-700 disabled:text-slate-500 text-white p-3 rounded-xl transition shadow-lg shadow-orange-500/20"
            >
              {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} className="rtl:rotate-180" />}
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={toggleChat}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:scale-110 transition-all duration-300 z-50"
      >
        <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:animate-ping group-hover:opacity-20 duration-1000"></span>
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default AIChat;