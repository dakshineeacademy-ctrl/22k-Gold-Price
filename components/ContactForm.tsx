import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Consultation',
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic to send form data would go here
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 relative bg-white dark:bg-dark-900">
      <div className="absolute inset-0 bg-gradient-bg opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
              Let's Talk Money.
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              Ready to optimize your portfolio or buy your first digital gold? Schedule a free 15-minute consultation with our certified financial advisors.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Call Us</p>
                  <p className="text-gray-500">+91 98765 43210</p>
                  <p className="text-xs text-green-500 font-medium">Mon-Fri, 9am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Email</p>
                  <p className="text-gray-500">consult@22kgoldprice.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-full">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Visit HQ</p>
                  <p className="text-gray-500">123 Financial District, Bandra Kurla Complex,<br/>Mumbai, Maharashtra 400051</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="glass-panel-light dark:glass-panel p-8 rounded-2xl shadow-2xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Booking Confirmed!</h3>
                <p className="text-gray-500">We'll reach out to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Book a Consultation</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                    <input 
                      required 
                      type="text" 
                      name="name"
                      onChange={handleChange}
                      className="w-full bg-white dark:bg-dark-800 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" 
                      placeholder="John" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                    <input 
                      required 
                      type="tel" 
                      className="w-full bg-white dark:bg-dark-800 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" 
                      placeholder="+91..." 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    name="email"
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-dark-800 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" 
                    placeholder="john@example.com" 
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Service Interest</label>
                    <select 
                      name="service"
                      onChange={handleChange}
                      className="w-full bg-white dark:bg-dark-800 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    >
                      <option>Gold Investment</option>
                      <option>Portfolio Review</option>
                      <option>Tax Planning</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preferred Date</label>
                    <div className="relative">
                       <input 
                        type="date" 
                        name="date"
                        onChange={handleChange}
                        className="w-full bg-white dark:bg-dark-800 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all pl-10" 
                      />
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message (Optional)</label>
                  <textarea 
                    rows={3}
                    name="message"
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-dark-800 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" 
                    placeholder="Tell us about your investment goals..." 
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-primary-600 to-teal-500 hover:from-primary-500 hover:to-teal-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary-500/30 transition-all transform hover:scale-[1.02]">
                  Confirm Booking
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;