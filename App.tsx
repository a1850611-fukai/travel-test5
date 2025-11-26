import React, { useState, useMemo } from 'react';
import { ITINERARY } from './constants';
import { HeroSection } from './components/HeroSection';
import { Timeline } from './components/Timeline';
import { DetailModal } from './components/DetailModal';
import { ItineraryItem } from './types';

export default function App() {
  const [activeDayId, setActiveDayId] = useState(1);
  const [modalItem, setModalItem] = useState<ItineraryItem | null>(null);

  const activeDay = useMemo(() => 
    ITINERARY.find(d => d.dayId === activeDayId) || ITINERARY[0]
  , [activeDayId]);

  return (
    <div className="min-h-screen bg-thai-cream/50 pb-20 font-sans">
      
      {/* Hero Section */}
      <HeroSection currentDay={activeDay} />

      {/* Main Content */}
      <main className="max-w-2xl mx-auto">
        <Timeline 
            day={activeDay} 
            onItemClick={(item) => setModalItem(item)} 
        />
      </main>

      {/* Sticky Bottom Navigation */}
      <div className="fixed bottom-4 left-4 right-4 z-40 max-w-2xl mx-auto">
        <nav className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-thai-gold/20 p-2 overflow-x-auto flex items-center justify-between gap-2 no-scrollbar">
          {ITINERARY.map((day) => {
            const isActive = day.dayId === activeDayId;
            return (
              <button
                key={day.dayId}
                onClick={() => {
                  setActiveDayId(day.dayId);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`
                  flex-shrink-0 flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all duration-300
                  ${isActive 
                    ? 'bg-thai-purple text-white shadow-lg scale-105 border border-thai-gold' 
                    : 'bg-transparent text-gray-500 hover:bg-gray-100'}
                `}
              >
                <span className={`text-[10px] font-bold uppercase ${isActive ? 'text-thai-gold' : 'text-gray-400'}`}>
                  Day
                </span>
                <span className={`text-lg font-serif font-bold ${isActive ? 'text-white' : 'text-gray-600'}`}>
                  {day.dayId}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Detail Modal */}
      <DetailModal 
        isOpen={!!modalItem}
        onClose={() => setModalItem(null)}
        title={modalItem?.title || ''}
        attachments={modalItem?.attachments}
      />
      
    </div>
  );
}