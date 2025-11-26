import React from 'react';
import { Attachment } from '../types';
import { X, Ticket, FileText, MapPin } from 'lucide-react';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  attachments?: Attachment[];
}

export const DetailModal: React.FC<DetailModalProps> = ({ isOpen, onClose, title, attachments }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden transform transition-all scale-100 relative border-2 border-thai-gold">
        
        {/* Header with Thai Pattern */}
        <div className="bg-thai-purple p-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-thai-pattern"></div>
          <div className="relative z-10 flex justify-between items-center text-white">
            <h3 className="text-xl font-serif font-bold truncate pr-4">{title}</h3>
            <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 bg-thai-cream/30">
          <h4 className="text-thai-deepred font-bold text-sm uppercase tracking-wide mb-2">
            Trip Details & Documents
          </h4>
          
          {attachments && attachments.length > 0 ? (
            <div className="space-y-3">
              {attachments.map((att, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-thai-goldlight shadow-sm flex items-start space-x-3">
                  <div className="p-2 bg-thai-gold/10 rounded-full text-thai-gold">
                    {att.type === 'ticket' ? <Ticket size={20} /> : 
                     att.type === 'map' ? <MapPin size={20} /> : <FileText size={20} />}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold">{att.label}</p>
                    <p className="text-lg font-mono text-gray-800 break-all">{att.content}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>No additional details available for this activity.</p>
            </div>
          )}

          <button 
            onClick={onClose}
            className="w-full mt-4 bg-thai-gold text-white font-bold py-3 rounded-xl shadow-lg hover:bg-yellow-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};