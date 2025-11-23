import React from 'react';
import { ShieldCheck, TrendingUp, Coins, Calculator, FileText, PieChart } from 'lucide-react';

const services = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Gold Investment",
    description: "Expert guidance on physical gold, SGBs, and digital gold investments with tax optimization strategies."
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    title: "Portfolio Management",
    description: "Personalized diversified portfolio construction across equity, debt, and precious metals tailored to your risk profile."
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Tax Planning",
    description: "Comprehensive tax saving strategies aimed at maximizing your post-tax returns under the new and old regimes."
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Insurance Advisory",
    description: "Finding the right term and health insurance covers to protect your family's financial future."
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Stock Advisory",
    description: "Technical and fundamental analysis based stock recommendations for short-term gains and long-term wealth."
  },
  {
    icon: <Calculator className="h-6 w-6" />,
    title: "Loan Assistance",
    description: "Compare and get the best rates for home loans, gold loans, and personal loans from top banks."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-dark-950 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide">Our Expertise</h2>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
             Premium Financial Services
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
            Comprehensive financial solutions tailored to help you grow, protect, and manage your wealth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group bg-white dark:bg-dark-900 p-8 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-primary-500/30 shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary-500 to-teal-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              
              <div className="w-14 h-14 bg-gray-50 dark:bg-dark-800 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;