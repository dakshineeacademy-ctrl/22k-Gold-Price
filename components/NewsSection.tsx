import React from 'react';
import { marketNews } from '../services/mockData';
import { Clock, ArrowRight } from 'lucide-react';

const NewsSection: React.FC = () => {
  return (
    <section id="news" className="py-16 bg-gray-50 dark:bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
           <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Market Insights</h2>
              <p className="text-gray-500 dark:text-gray-400">Latest analysis, trends and financial news</p>
           </div>
           <a href="#" className="text-primary-600 hover:text-primary-500 font-semibold flex items-center gap-1">
             View All <ArrowRight className="h-4 w-4" />
           </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketNews.map((news) => (
            <div key={news.id} className="group bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-white/5">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={news.imageUrl} 
                  alt={news.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider text-primary-600 dark:text-primary-400">
                  {news.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                   <Clock className="h-3 w-3" />
                   <span>{news.timeAgo}</span>
                   <span>•</span>
                   <span>{news.author}</span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-500 transition-colors">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed">
                  {news.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;