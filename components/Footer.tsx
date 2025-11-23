import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">22K<span className="text-primary-500">Gold</span>Price</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              India's leading financial information portal providing real-time gold rates, market indices, and investment insights to help you make smarter money decisions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-5 w-5"/></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-5 w-5"/></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-5 w-5"/></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5"/></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Gold Rates Today</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Silver Rates</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Sensex & Nifty Live</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Mutual Fund Returns</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Crypto Prices</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Calculators</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">SIP Calculator</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Income Tax Calculator</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">EMI Calculator</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">FD Interest Calculator</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Currency Converter</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-500 shrink-0" />
                <span>123 Financial District,<br/>Bandra Kurla Complex, Mumbai</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-500 shrink-0" />
                <span>contact@22kgoldprice.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2024 22K Gold Price. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;