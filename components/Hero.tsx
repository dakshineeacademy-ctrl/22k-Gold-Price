import React from 'react';
import { ArrowRight, TrendingUp, DollarSign, Shield } from 'lucide-react';
import { indices } from '../services/mockData';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Ticker */}
      <div className="bg-slate-900 text-white text-xs py-2 overflow-hidden border-b border-white/10">
        <div className="whitespace-nowrap animate-marquee flex gap-8 items-center">
          {indices.concat(indices).map((item, idx) => (
             <span key={idx} className="inline-flex items-center gap-2">
               <span className="font-bold text-gray-400">{item.name}</span>
               <span className={item.change > 0 ? "text-green-400" : "text-red-400"}>
                 {item.price.toFixed(2)} ({item.change > 0 ? '+' : ''}{item.changePercent}%)
               </span>
             </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="text-center lg:text-left lg:grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
              Live Market Updates
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              Smart Money <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-teal-400">
                Moves Faster.
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Track live gold rates, stock market trends, and mutual funds with India's most advanced financial dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary-500/25 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Start Investing <ArrowRight className="h-5 w-5" />
              </button>
              <button className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                Check Gold Rates
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-gray-200 dark:border-white/10 pt-8">
                <div className="text-center lg:text-left">
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">5M+</p>
                    <p className="text-sm text-slate-500 dark:text-gray-500">Monthly Users</p>
                </div>
                <div className="text-center lg:text-left">
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">₹22k</p>
                    <p className="text-sm text-slate-500 dark:text-gray-500">Gold Rate (10g)</p>
                </div>
                 <div className="text-center lg:text-left">
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">0.0s</p>
                    <p className="text-sm text-slate-500 dark:text-gray-500">Latency</p>
                </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl opacity-30"></div>
            <div className="relative bg-white dark:bg-dark-900 rounded-2xl border border-gray-200 dark:border-white/10 shadow-2xl p-6 glass-panel-light dark:glass-panel">
               {/* Decorative UI Mockup */}
               <div className="flex items-center justify-between mb-6">
                 <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Market Overview</h3>
                    <p className="text-sm text-gray-500">Nifty 50 Index</p>
                 </div>
                 <span className="text-green-500 bg-green-500/10 px-2 py-1 rounded text-sm font-semibold">+1.25%</span>
               </div>
               <div className="h-64 bg-gradient-to-b from-primary-500/10 to-transparent rounded-lg border border-primary-500/20 flex items-end p-4 relative overflow-hidden">
                  <svg className="w-full h-full absolute bottom-0 left-0 text-primary-500" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path d="M0,80 C20,70 40,90 60,40 S80,10 100,20 V100 H0 Z" fill="currentColor" fillOpacity="0.1"/>
                      <path d="M0,80 C20,70 40,90 60,40 S80,10 100,20" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
               </div>
               <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-gold-500/20 rounded-lg text-gold-500"><Shield className="h-5 w-5"/></div>
                        <span className="font-semibold text-slate-700 dark:text-gray-200">Gold</span>
                     </div>
                     <p className="text-2xl font-bold text-slate-900 dark:text-white">₹72,500</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-purple-500/20 rounded-lg text-purple-500"><DollarSign className="h-5 w-5"/></div>
                        <span className="font-semibold text-slate-700 dark:text-gray-200">USD/INR</span>
                     </div>
                     <p className="text-2xl font-bold text-slate-900 dark:text-white">₹83.45</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;