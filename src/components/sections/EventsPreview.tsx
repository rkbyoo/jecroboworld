import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EventCard from '@/components/cards/EventCard';

interface Event {
  id: number;
  eventName: string;
  image: string;
  description: string;
  joiningUrl?: string;
  date?: string;
  status?: string;
}

const EventsPreview = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    import('@/data/events.json').then((module) => {
      setEvents(module.default.slice(0, 3)); // Show only first 3 events
    });
  }, []);

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
            Our Events
          </h2>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
            Experience the thrill of competitive robotics through our exciting events
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/events" className="flex items-center">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard
              key={event.id}
              eventName={event.eventName}
              image={event.image}
              description={event.description}
              joiningUrl={event.joiningUrl}
              date={event.date}
              status={event.status}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;