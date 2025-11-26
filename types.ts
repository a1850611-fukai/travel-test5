export enum ActivityType {
  TRANSPORT = 'Transport',
  SIGHTSEEING = 'Sightseeing',
  FOOD = 'Food',
  RELAX = 'Relax',
  SHOPPING = 'Shopping',
  ACCOMMODATION = 'Accommodation',
  NATURE = 'Nature'
}

export interface Attachment {
  type: 'ticket' | 'booking' | 'map' | 'info';
  label: string;
  content: string; // Could be a code, a description, or an image URL
}

export interface ItineraryItem {
  id: string;
  time: string;
  title: string;
  location: string;
  locationUrl?: string; // Google Maps URL
  description?: string;
  type: ActivityType;
  attachments?: Attachment[];
}

export interface DaySchedule {
  dayId: number;
  date: string;
  dateDisplay: string;
  location: string; // For weather check
  items: ItineraryItem[];
}