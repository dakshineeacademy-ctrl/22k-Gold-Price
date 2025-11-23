import React, { useEffect, useState } from 'react';
import { getLiveMarketBrief, MarketBrief } from '../services/geminiService';
import { Sparkles, ExternalLink, RefreshCw } from 'lucide-react';

const LiveMarketBrief: React.FC = () => {
  const [data, setData] = useState<MarketBrief | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const result = await getLiveMarketBrief();
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="bg-slate-900 border-b border-white/10 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-900/20 to-purple-900/20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 shrink-0">
             <Sparkles className="h-4 w-4 text-gold-400 animate-pulse" />
             <span className="text-xs font-bold text-white uppercase tracking-wider">Live AI Intelligence</span>
          </div>

          <div className="flex-1 w-full">
            {loading ? (
              <div className="flex items-center gap-3 animate-pulse">
                <div className="h-4 w-3/4 bg-white/10 rounded"></div>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                  {data?.text}
                </p>
                {data?.sources && data.sources.length > 0 && (
                   <div className="flex flex-wrap gap-2 mt-1">
                      {data.sources.map((source, idx) => (
                        source.web?.uri && (
                          <a 
                            key={idx} 
                            href={source.web.uri} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[10px] text-primary-400 hover:text-primary-300 transition-colors bg-black/20 px-2 py-0.5 rounded"
                          >
                            {source.web.title.slice(0, 20)}... <ExternalLink className="h-2 w-2" />
                          </a>
                        )
                      ))}
                   </div>
                )}
              </div>
            )}
          </div>
          
          <button 
             onClick={fetchData} 
             disabled={loading}
             className="hidden md:flex p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
             title="Refresh Data"
          >
             <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiveMarketBrief;