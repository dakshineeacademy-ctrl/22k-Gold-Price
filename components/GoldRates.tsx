import React, { useState } from 'react';
import { goldRates } from '../services/mockData';
import { MapPin, TrendingUp, TrendingDown } from 'lucide-react';

const GoldRates: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'22k' | '24k'>('22k');

  return (
    <section id="gold-rates" className="py-16 bg-white dark:bg-dark-900 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-transparent dark:from-dark-950 dark:to-dark-900 opacity-50 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Today's Gold Rates</h2>
            <p className="text-gray-500 dark:text-gray-400">Live prices per 1 gram across major Indian cities</p>
          </div>
          
          <div className="mt-4 md:mt-0 bg-gray-100 dark:bg-dark-800 p-1 rounded-lg inline-flex">
            <button 
              onClick={() => setActiveTab('22k')}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${activeTab === '22k' ? 'bg-white dark:bg-dark-600 text-gold-600 shadow-sm' : 'text-gray-500 dark:text-gray-400'}`}
            >
              22 Karat
            </button>
            <button 
              onClick={() => setActiveTab('24k')}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${activeTab === '24k' ? 'bg-white dark:bg-dark-600 text-gold-600 shadow-sm' : 'text-gray-500 dark:text-gray-400'}`}
            >
              24 Karat
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
           {/* Featured Rate Card */}
           <div className="lg:col-span-1 bg-gradient-to-br from-gold-500 to-yellow-600 rounded-2xl p-6 text-white shadow-xl transform lg:-rotate-1">
              <p className="text-white/80 font-medium mb-1">National Average</p>
              <h3 className="text-4xl font-bold mb-4">₹ {activeTab === '22k' ? '6,685' : '7,295'}</h3>
              <div className="flex items-center gap-2 bg-white/20 p-2 rounded-lg backdrop-blur-sm inline-flex mb-8">
                 <TrendingUp className="h-4 w-4" />
                 <span className="font-semibold">+0.45% Today</span>
              </div>
              <p className="text-sm text-white/70">
                Last updated: Just now<br/>
                Source: Market Data
              </p>
           </div>

           {/* Table */}
           <div className="lg:col-span-3 bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-white/5 overflow-hidden shadow-sm">
             <div className="overflow-x-auto">
               <table className="w-full">
                 <thead className="bg-gray-50 dark:bg-white/5">
                   <tr>
                     <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">City</th>
                     <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Price (1g)</th>
                     <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Price (10g)</th>
                     <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Change</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-200 dark:divide-white/5">
                   {goldRates.map((rate, idx) => (
                     <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                       <td className="px-6 py-4 whitespace-nowrap flex items-center gap-3">
                         <div className="bg-primary-50 dark:bg-primary-900/30 p-2 rounded-full text-primary-500">
                           <MapPin className="h-4 w-4" />
                         </div>
                         <span className="text-sm font-medium text-slate-900 dark:text-white">{rate.city}</span>
                       </td>
                       <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-bold text-slate-700 dark:text-gray-200">
                         ₹{activeTab === '22k' ? rate.price22k.toLocaleString() : rate.price24k.toLocaleString()}
                       </td>
                       <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-600 dark:text-gray-400">
                         ₹{activeTab === '22k' ? (rate.price22k * 10).toLocaleString() : (rate.price24k * 10).toLocaleString()}
                       </td>
                       <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                         <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${rate.change >= 0 ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}>
                            {rate.change >= 0 ? '+' : ''}₹{rate.change}
                         </span>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default GoldRates;