import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveMarketBrief from './components/LiveMarketBrief';
import MarketDashboard from './components/MarketDashboard';
import Services from './components/Services';
import GoldRates from './components/GoldRates';
import Calculators from './components/Calculators';
import NewsSection from './components/NewsSection';
import MutualFunds from './components/MutualFunds';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-950 text-slate-900 dark:text-gray-100 font-sans selection:bg-primary-500 selection:text-white overflow-x-hidden">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <main className="flex flex-col">
        <Hero />
        <LiveMarketBrief />
        <div id="market-dashboard">
          <MarketDashboard />
        </div>
        <Services />
        <GoldRates />
        <MutualFunds />
        <Calculators />
        <NewsSection />
        <ContactForm />
      </main>

      <Footer />
      <AiAssistant />
    </div>
  );
};

export default App;