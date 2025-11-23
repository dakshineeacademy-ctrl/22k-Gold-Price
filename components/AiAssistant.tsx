import React, { useState } from 'react';
import { Bot, X, Send, Sparkles } from 'lucide-react';
import { getMarketInsight } from '../services/geminiService';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    const result = await getMarketInsight(query);
    setAnswer(result);
    setLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-primary-600 to-indigo-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform group"
      >
        <Sparkles className="h-6 w-6 group-hover:animate-spin" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-dark-900 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-white/10 animate-fade-in-up">
            <div className="bg-gradient-to-r from-primary-600 to-indigo-600 p-4 flex justify-between items-center">
              <div className="flex items-center gap-2 text-white">
                <Bot className="h-6 w-6" />
                <h3 className="font-bold text-lg">AI Market Analyst</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6 h-80 overflow-y-auto bg-gray-50 dark:bg-dark-950">
              {!answer && !loading && (
                <div className="text-center text-gray-500 mt-10">
                  <p className="mb-2">Ask me anything about:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full text-xs">Gold Trends</span>
                    <span className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full text-xs">Stock Tips</span>
                    <span className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full text-xs">Tax Saving</span>
                  </div>
                </div>
              )}
              
              {loading && (
                 <div className="flex items-center gap-2 text-gray-500 justify-center h-full">
                    <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce delay-200"></div>
                 </div>
              )}

              {answer && (
                <div className="bg-white dark:bg-dark-800 p-4 rounded-xl rounded-tl-none border border-gray-200 dark:border-white/5 shadow-sm">
                  <p className="text-slate-800 dark:text-gray-200 text-sm leading-relaxed">{answer}</p>
                </div>
              )}
            </div>

            <form onSubmit={handleAsk} className="p-4 bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-white/10">
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask about market trends..."
                  className="w-full bg-gray-100 dark:bg-dark-800 text-slate-900 dark:text-white rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button 
                  type="submit"
                  disabled={!query || loading}
                  className="absolute right-2 top-2 p-1.5 bg-primary-600 text-white rounded-full hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AiAssistant;