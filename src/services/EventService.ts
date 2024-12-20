import eventsData from '@/data/events-data.json' assert { type: 'json' };
import type { Event } from '@/types/Event';

export const getEvents = (): Promise<Event[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(eventsData);
    }, 300); // Simulate network delay
  });
};
