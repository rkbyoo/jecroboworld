import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EventCard from '@/components/cards/EventCard';
import { ImageModal } from '@/components/ui/ImageModal';

interface Event {
  id: number;
  eventName: string;
  image?: string;
  images?: string[];
  description: string;
  joiningUrl?: string;
  date?: string;
  status?: string;
}

const EventsPreview = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  useEffect(() => {
    import('@/data/events.json').then((module) => {
      // Prioritize upcoming and ongoing events for preview
      const allEvents = module.default;
      const upcomingAndOngoing = allEvents.filter(event =>
        event.status === 'upcoming' || event.status === 'ongoing'
      );
      const displayEvents = upcomingAndOngoing.length >= 3
        ? upcomingAndOngoing.slice(0, 3)
        : [...upcomingAndOngoing, ...allEvents.filter(event => event.status === 'completed')].slice(0, 3);

      setEvents(displayEvents);
    });
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center py-20 bg-black text-white">
      <div className="container mx-auto px-4 flex-1 flex flex-col justify-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Events
          </h2>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
            Experience the thrill of competitive robotics through our exciting events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard
              key={event.id}
              eventName={event.eventName}
              image={event.image}
              images={event.images}
              description={event.description}
              joiningUrl={event.joiningUrl}
              date={event.date}
              status={event.status}
              onCardClick={() => handleEventClick(event)}
            />
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <Button asChild>
            <Link to="/events" className="flex items-center cursor-pointer">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Modal rendered at section level */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        images={selectedEvent?.images || []}
        title={selectedEvent?.eventName || ''}
        description={selectedEvent?.description}
      />
    </section>
  );
};

export default EventsPreview;