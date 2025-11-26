import React from 'react';
import { DaySchedule, ActivityType, ItineraryItem } from '../types';
import { MapPin, Train, Utensils, Camera, ShoppingBag, Bed, TreePalm, ExternalLink } from 'lucide-react';

interface TimelineProps {
  day: DaySchedule;
  onItemClick: (item: ItineraryItem) => void;
}

const getActivityIcon = (type: ActivityType) => {
  switch (type) {
    case ActivityType.TRANSPORT: return <Train size={18} />;
    case ActivityType.FOOD: return <Utensils size={18} />;
    case ActivityType.SIGHTSEEING: return <Camera size={18} />;
    case ActivityType.SHOPPING: return <ShoppingBag size={18} />;
    case ActivityType.ACCOMMODATION: return <Bed size={18} />;
    case ActivityType.NATURE: return <TreePalm size={18} />;
    default: return <MapPin size={18} />;
  }
};

const getActivityColor = (type: ActivityType) => {
    switch (type) {
        case ActivityType.TRANSPORT: return 'bg-blue-100 text-blue-700 border-blue-200';
        case ActivityType.FOOD: return 'bg-orange-100 text-orange-700 border-orange-200';
        case ActivityType.SIGHTSEEING: return 'bg-thai-goldlight text-yellow-900 border-thai-gold';
        case ActivityType.SHOPPING: return 'bg-pink-100 text-pink-700 border-pink-200';
        case ActivityType.RELAX: return 'bg-purple-100 text-purple-700 border-purple-200';
        case ActivityType.NATURE: return 'bg-green-100 text-green-700 border-green-200';
        default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
}

export const Timeline: React.FC<TimelineProps> = ({ day, onItemClick }) => {
  return (
    <div className="relative pb-24 px-4 max-w-2xl mx-auto">
      {/* Vertical Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-thai-gold/30"></div>

      {day.items.map((item, index) => (
        <div key={item.id} className="relative mb-8 last:mb-0 group">
          
          <div className="flex items-start">
            {/* Time Column & Dot */}
            <div className="flex flex-col items-center mr-4 min-w-[60px] z-10">
              <div className="bg-white border-2 border-thai-gold rounded-full w-4 h-4 mt-5 mb-1 shadow-sm group-hover:scale-110 transition-transform"></div>
              <span className="text-sm font-mono font-bold text-thai-purple bg-white/80 px-1 rounded">
                {item.time}
              </span>
            </div>

            {/* Card */}
            <div 
              className={`flex-1 bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all cursor-pointer overflow-hidden relative`}
              onClick={() => item.attachments ? onItemClick(item) : null}
            >
              {/* Decorative Thai border top */}
              <div className="h-1 bg-gradient-to-r from-thai-gold via-thai-purple to-thai-gold"></div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                   <div className={`px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 ${getActivityColor(item.type)}`}>
                      {getActivityIcon(item.type)}
                      <span>{item.type}</span>
                   </div>
                   {item.attachments && (
                       <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full border border-gray-200">
                           Details available
                       </span>
                   )}
                </div>

                <h3 className="text-lg font-serif font-bold text-gray-800 leading-tight mb-1">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3 leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Location Link */}
                <a 
                  href={item.locationUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center text-xs font-bold text-thai-purple hover:text-thai-deepred transition-colors bg-thai-purple/5 px-3 py-1.5 rounded-lg w-full justify-center"
                >
                  <MapPin size={14} className="mr-1.5" />
                  {item.location}
                  <ExternalLink size={12} className="ml-auto opacity-50" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* End of Day decoration */}
      <div className="mt-8 flex flex-col items-center justify-center text-thai-gold/40 pb-4">
        <div className="w-2 h-2 rounded-full bg-thai-gold/40 mb-1"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-thai-gold/40 mb-1"></div>
        <div className="w-1 h-1 rounded-full bg-thai-gold/40"></div>
      </div>
    </div>
  );
};