import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { getSmartResponse } from '../services/aiSafe';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, AlertCircle } from 'lucide-react';

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    { role: 'bot', content: "Hello! I'm Adhikar AI. I can help you with questions about the election process, registration, or eligibility. How can I assist you today?", id: 1 }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [currentStatus, setCurrentStatus] = useState('Adhikar AI is Online');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async (e, directQuery = null) => {
    if (e) e.preventDefault();
    const query = directQuery || input;
    if (!query.trim() || loading) return;

    const userMsg = { role: 'user', content: query, id: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      // Connecting to the Cloud Run endpoint (supporting both /chat and /ask as per instructions)
      const data = await getSmartResponse(query);
      const botMsg = { 
        role: 'bot', 
        content: data.reply, 
        isAI: data.isAI,
        id: Date.now() + 1 
      };
      setMessages(prev => [...prev, botMsg]);
      setCurrentStatus(data.isAI ? '🟢 Adhikar AI is Online' : '🔴 Offline Mode');
      setIsOnline(data.isAI);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        content: "AI is temporarily offline. Showing basic guidance.",
        error: true,
        id: Date.now() + 1 
      }]);
      setCurrentStatus('🔴 Offline Mode');
      setIsOnline(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-12rem)] flex flex-col glass-card rounded-[40px] overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-neon rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
            <Bot className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-bold">Adhikar AI</h3>
            <div className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${isOnline ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest" aria-live="polite">
                {currentStatus}
              </span>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl text-xs font-medium text-zinc-400 border border-white/5">
          <Sparkles size={14} className="text-primary" />
          Powered by Gemini 1.5
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth" ref={scrollRef}>
        {messages.map((msg) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex gap-4 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center ${
                msg.role === 'user' ? 'bg-primary/20 text-primary' : 'bg-white/10 text-zinc-400'
              }`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none shadow-lg shadow-primary/20' 
                    : 'glass text-zinc-300 rounded-tl-none border border-white/5'
                }`}>
                  {msg.content}
                </div>
                {msg.role === 'bot' && !msg.isAI && !msg.error && (
                  <div className="mt-2 flex items-center gap-1 text-[10px] text-zinc-500 font-medium">
                    <AlertCircle size={10} />
                    Offline Response (Deterministic)
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
        {loading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-zinc-400 animate-pulse">
              <Bot size={16} />
            </div>
            <div className="glass p-4 rounded-2xl rounded-tl-none flex gap-1 items-center border border-white/5">
              <div className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce" />
              <div className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.2s]" />
              <div className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
          </motion.div>
        )}
      </div>

      {/* Quick Questions */}
      <div className="p-4 flex gap-2 overflow-x-auto no-scrollbar border-t border-white/5 bg-white/[0.02]">
        {[
          "How to register to vote?",
          "Check eligibility",
          "Find polling booth",
          "Required documents"
        ].map((q, i) => (
          <button
            key={i}
            onClick={() => handleSend(null, q)}
            className="whitespace-nowrap px-4 py-2 bg-white/5 hover:bg-primary/20 hover:text-primary rounded-full text-xs font-semibold border border-white/5 transition-all"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="p-6 border-t border-white/5 bg-white/20 backdrop-blur-xl">
        <form onSubmit={handleSend} className="relative group">
          <input
            type="text"
            className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-6 pr-16 focus:outline-none focus:border-primary/50 transition-all text-sm placeholder:text-zinc-600 shadow-inner"
            placeholder={loading ? "Thinking..." : "Ask anything about Indian elections..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
          />
          <button
            type="submit"
            aria-label="Send message"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-primary hover:bg-primary/80 text-white rounded-xl transition-all shadow-lg shadow-primary/40 group-active:scale-95 disabled:opacity-50"
            disabled={loading}
          >
            <Send size={18} />
          </button>
        </form>
        <p className="mt-3 text-[10px] text-center text-zinc-600 font-medium uppercase tracking-widest">
          Adhikar AI can provide guidance but is not a substitute for official legal advice.
        </p>
      </div>
    </div>
  );
};

export default AIAssistant;
