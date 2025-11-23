import React, { useState } from 'react';
import { Menu, X, Search, Moon, Sun, TrendingUp } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full transition-all duration-300 border-b border-gray-200 dark:border-white/10 bg-white/80 dark:bg-dark-950/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="bg-gradient-to-tr from-gold-400 to-gold-600 p-2 rounded-lg shadow-lg shadow-gold-500/20">
                 <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-white">
                22K<span className="text-primary-500">Gold</span>Price
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                <a href="#market-dashboard" className="text-slate-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Markets</a>
                <a href="#gold-rates" className="text-slate-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Gold Rates</a>
                <a href="#services" className="text-slate-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                <a href="#mutual-funds" className="text-slate-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Mutual Funds</a>
                <a href="#contact" className="text-slate-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Search stocks, gold..." 
                className="bg-gray-100 dark:bg-dark-800/50 border border-transparent dark:border-white/10 text-slate-800 dark:text-gray-200 text-sm rounded-full pl-10 pr-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary-500 w-48 transition-all group-hover:bg-white dark:group-hover:bg-dark-800"
              />
              <Search className="absolute left-3 top-2 h-4 w-4 text-gray-400" />
            </div>
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-slate-600 dark:text-gray-300"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <a href="#contact" className="bg-gradient-to-r from-primary-600 to-teal-500 hover:from-primary-500 hover:to-teal-400 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary-500/30 transition-all transform hover:scale-105">
              Book Call
            </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-dark-900 border-b border-gray-200 dark:border-white/10 animate-fade-in-up">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#market-dashboard" className="text-gray-800 dark:text-gray-300 hover:text-primary-500 block px-3 py-2 rounded-md text-base font-medium">Markets</a>
            <a href="#gold-rates" className="text-gray-800 dark:text-gray-300 hover:text-primary-500 block px-3 py-2 rounded-md text-base font-medium">Gold Rates</a>
            <a href="#services" className="text-gray-800 dark:text-gray-300 hover:text-primary-500 block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#contact" className="text-gray-800 dark:text-gray-300 hover:text-primary-500 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;