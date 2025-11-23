import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { chartData, indices } from '../services/mockData';

const MarketDashboard: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Market Pulse</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-white dark:bg-dark-900 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-white/5">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">NIFTY 50</h3>
                <span className="text-sm text-gray-500">NSE Indices</span>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-slate-900 dark:text-white">24,350.50</p>
                <p className="text-sm text-green-500 font-medium">+125.40 (0.52%)</p>
              </div>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <YAxis domain={['dataMin - 100', 'dataMax + 100']} hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#0ea5e9" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex gap-2 mt-4">
               {['1D', '1W', '1M', '3M', '1Y', '5Y'].map((p) => (
                 <button key={p} className={`px-3 py-1 rounded-md text-sm font-medium ${p === '1D' ? 'bg-primary-500 text-white' : 'text-slate-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10'}`}>
                   {p}
                 </button>
               ))}
            </div>
          </div>

          {/* Indices List */}
          <div className="bg-white dark:bg-dark-900 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-white/5 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Major Indices</h3>
            <div className="space-y-4">
              {indices.map((index, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-gray-200 group-hover:text-primary-500 transition-colors">{index.name}</p>
                    <p className="text-xs text-gray-500">Real-time</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-slate-900 dark:text-white">{index.price.toLocaleString()}</p>
                    <p className={`text-xs font-semibold ${index.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {index.change > 0 ? '+' : ''}{index.changePercent}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-primary-600 dark:text-primary-400 font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
              View All Market Data
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketDashboard;