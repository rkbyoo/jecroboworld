import { useEffect, useState } from 'react';
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

const EventsPage = () => {
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
      setEvents(module.default);
    });
  }, []);

  const upcomingEvents = events.filter(event => event.status === 'upcoming');
  const ongoingEvents = events.filter(event => event.status === 'ongoing');
  const pastEvents = events.filter(event => event.status === 'completed');

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Our Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us in exciting robotics competitions and educational events
          </p>
        </div>

        {/* Ongoing Events */}
        {ongoingEvents.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Ongoing Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ongoingEvents.map((event) => (
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
          </div>
        )}

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
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
          </div>
        )}

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
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
          </div>
        )}
      </div>

      {/* Modal rendered at page level */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        images={selectedEvent?.images || []}
        title={selectedEvent?.eventName || ''}
        description={selectedEvent?.description}
      />
    </div>
  );
};

export default EventsPage;