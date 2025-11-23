import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const Calculators: React.FC = () => {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(5);

  const calculateEMI = () => {
    const r = rate / 12 / 100;
    const n = years * 12;
    const emi = amount * r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
    return Math.round(emi).toLocaleString();
  };

  const totalPayment = () => {
     const r = rate / 12 / 100;
     const n = years * 12;
     const emi = amount * r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
     return Math.round(emi * n).toLocaleString();
  }

  return (
    <section id="calculators" className="py-16 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
           <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Financial Tools</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8">
                Plan your finances with our precision calculators. Whether it's a home loan, car loan, or investment returns, we've got you covered.
              </p>
              
              <div className="space-y-4">
                 <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-lg dark:bg-blue-900/30 dark:text-blue-400">
                        <Calculator className="h-6 w-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">EMI Calculator</h4>
                        <p className="text-sm text-gray-500">Calculate monthly loan payments.</p>
                    </div>
                 </div>
                 {/* More list items for other calculators (visual only for now) */}
                 <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-gray-100 dark:hover:border-white/5">
                    <div className="p-3 bg-green-100 text-green-600 rounded-lg dark:bg-green-900/30 dark:text-green-400">
                        <Calculator className="h-6 w-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">SIP Calculator</h4>
                        <p className="text-sm text-gray-500">Estimate mutual fund returns.</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="mt-10 lg:mt-0 bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-white/5">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-gray-100 dark:border-white/10 pb-4">Loan EMI Calculator</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Loan Amount (₹ {amount.toLocaleString()})</label>
                  <input 
                    type="range" 
                    min="10000" 
                    max="10000000" 
                    step="10000"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Interest Rate ({rate}%)</label>
                  <input 
                    type="range" 
                    min="1" 
                    max="20" 
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tenure ({years} Years)</label>
                  <input 
                    type="range" 
                    min="1" 
                    max="30" 
                    step="1"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary-500"
                  />
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100 dark:border-white/10 grid grid-cols-2 gap-4 text-center">
                 <div>
                    <p className="text-sm text-gray-500">Monthly EMI</p>
                    <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">₹{calculateEMI()}</p>
                 </div>
                 <div>
                    <p className="text-sm text-gray-500">Total Amount</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">₹{totalPayment()}</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Calculators;