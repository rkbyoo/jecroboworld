import { useEffect, useState } from 'react';
import TimelineItem from '@/components/cards/TimelineItem';

interface TimelineEvent {
  id: number;
  year: string;
  eventName: string;
  description: string;
  photo: string;
}

const TimelinePage = () => {
  const [events, setEvents] = useState<TimelineEvent[]>([]);

  useEffect(() => {
    import('@/data/timeline.json').then((module) => {
      setEvents(module.default);
    });
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Our Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A chronological journey through our major milestones and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {events.map((event, index) => (
            <div key={event.id} className="relative">
              {index !== events.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-primary/30 hidden md:block" />
              )}
              <TimelineItem
                year={event.year}
                eventName={event.eventName}
                description={event.description}
                photo={event.photo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;