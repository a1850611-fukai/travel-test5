import React, { useEffect, useState } from 'react';
import { CloudSun, Info } from 'lucide-react';
import { DaySchedule } from '../types';
import { getTravelInsight } from '../services/geminiService';

interface HeroSectionProps {
  currentDay: DaySchedule;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentDay }) => {
  const [insight, setInsight] = useState<{weather: string, tip: string} | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchInsight = async () => {
      setLoading(true);
      const data = await getTravelInsight(currentDay.date, currentDay.location);
      if (isMounted) {
        setInsight(data);
        setLoading(false);
      }
    };
    fetchInsight();
    return () => { isMounted = false; };
  }, [currentDay.date, currentDay.location]);

  return (
    <div className="relative bg-thai-purple text-white pt-8 pb-12 px-6 rounded-b-[3rem] shadow-xl overflow-hidden mb-6">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-thai-pattern bg-repeat z-0"></div>
      
      {/* Elephant Illustration (CSS/SVG representation) */}
      <div className="absolute -right-4 top-10 opacity-20 pointer-events-none z-0">
        <svg width="150" height="150" viewBox="0 0 100 100" fill="white">
           {/* Abstract Elephant Shape */}
           <path d="M70,40 C70,30 60,20 50,20 C40,20 30,30 30,40 L30,60 C30,70 35,80 40,80 L45,80 L45,90 L55,90 L55,80 L60,80 C65,80 70,70 70,60 Z M30,40 C20,40 10,45 10,55 C10,60 15,60 15,55 C15,50 20,45 30,45" />
        </svg>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="flex justify-between items-start mb-4">
            <div>
                <p className="text-thai-goldlight font-serif tracking-widest text-sm uppercase mb-1">Thailand Trip 2024</p>
                <h1 className="text-3xl font-serif font-bold text-white mb-1 drop-shadow-md">
                {currentDay.location}
                </h1>
                <p className="text-white/80 font-mono text-sm">{currentDay.dateDisplay}</p>
            </div>
            <div className="text-right">
                <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20">
                    <CloudSun className="text-thai-gold mr-2" size={24} />
                    <div className="flex flex-col items-end">
                         <span className="text-xs text-white/70">Forecast</span>
                         <span className="font-bold text-sm">
                             {loading ? 'Loading...' : (insight?.weather || '30°C')}
                         </span>
                    </div>
                </div>
            </div>
        </div>

        {/* Gemini Insight */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border-l-4 border-thai-gold mt-4">
            <div className="flex items-start gap-2">
                <Info size={16} className="text-thai-gold mt-1 flex-shrink-0" />
                <p className="text-sm italic text-white/90 leading-relaxed font-sans">
                    {loading ? 'Asking the spirits for travel wisdom...' : (insight?.tip || 'Welcome to the Land of Smiles.')}
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};