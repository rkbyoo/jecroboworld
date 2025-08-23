import { useEffect, useState } from 'react';
import { Calendar, Trophy, Lightbulb, Star, Award, Zap, Target, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TimelineEvent {
  id: number;
  year: string;
  eventName: string;
  description: string;
  photo: string;
  date?: string; // Add optional date field for full date info
}

interface TimelineSectionProps {
  maxEvents?: number;
  showTitle?: boolean;
  title?: string;
  className?: string;
}

const TimelineSection = ({
  maxEvents,
  showTitle = true,
  title = "Our Timeline",
  className = "pt-20 bg-black text-white pb-40"
}: TimelineSectionProps) => {
  const [events, setEvents] = useState<TimelineEvent[]>([]);

  useEffect(() => {
    import('@/data/timeline.json').then((module) => {
      const allEvents = module.default;
      setEvents(maxEvents ? allEvents.slice(0, maxEvents) : allEvents);
    });
  }, [maxEvents]);

  const getDateColor = (index: number) => {
    const colors = [
      'bg-orange-500', // Orange
      'bg-green-500',  // Green
      'bg-purple-500', // Purple
      'bg-blue-500',   // Blue
      'bg-red-500',    // Red
      'bg-indigo-500', // Indigo
      'bg-pink-500',   // Pink
      'bg-teal-500',   // Teal
    ];
    return colors[index % colors.length];
  };

  const getDateColorHex = (index: number) => {
    const colors = ['#f97316', '#22c55e', '#a855f7', '#3b82f6', '#ef4444', '#6366f1', '#ec4899', '#14b8a6'];
    return colors[index % colors.length];
  };



  const getCheckpointIcon = (index: number) => {
    const icons = [Calendar, Trophy, Lightbulb, Star, Award, Zap, Target, Rocket];
    return icons[index % icons.length];
  };

  return (
    <section className={className}>
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {title}
            </h2>
          </div>
        )}

        <div className="max-w-7xl mx-auto relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-1 bg-gray-400 hidden md:block" />

          {events.map((event, index) => {
            const CheckpointIcon = getCheckpointIcon(index);
            
            return (
              <div key={event.id} className="relative mb-16 hidden md:block">
                {/* Checkpoint icon on central timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-8 z-20 hidden md:block">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-white"
                    style={{ backgroundColor: getDateColorHex(index) }}
                  >
                    <CheckpointIcon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex items-start">
                  {/* Left side content (for even indices) */}
                  <div className="w-1/2 pr-8 flex flex-col items-end">
                    {index % 2 === 0 && (
                      <>
                        {/* Date badge */}
                        <div className="mb-6 w-full max-w-lg">
                          <div className={`${getDateColor(index)} text-white px-6 py-5 rounded-full text-center font-bold relative shadow-lg w-full`}>
                            <div className="text-xl font-semibold whitespace-nowrap">
                              {event.year}
                            </div>
                            {/* Speech bubble arrow pointing right */}
                            <div
                              className="absolute top-1/2 transform -translate-y-1/2 right-0 translate-x-full w-0 h-0"
                              style={{
                                borderTop: '15px solid transparent',
                                borderBottom: '15px solid transparent',
                                borderLeft: `15px solid ${getDateColorHex(index)}`
                              }}
                            />
                          </div>
                        </div>

                        {/* Content card */}
                        <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-lg">
                          <div className="p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                              {event.eventName}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-base">
                              {event.description}
                            </p>
                            {event.photo !== "#" && (
                              <div className="w-full h-64 overflow-hidden rounded-lg mt-6">
                                <img
                                  src={event.photo}
                                  alt={event.eventName}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Right side content (for odd indices) */}
                  <div className="w-1/2 pl-8 flex flex-col items-start">
                    {index % 2 === 1 && (
                      <>
                        {/* Date badge */}
                        <div className="mb-6 w-full max-w-lg">
                          <div className={`${getDateColor(index)} text-white px-6 py-5 rounded-full text-center font-bold relative shadow-lg w-full`}>
                            <div className="text-xl font-semibold whitespace-nowrap">
                              {event.year}
                            </div>
                            {/* Speech bubble arrow pointing left */}
                            <div
                              className="absolute top-1/2 transform -translate-y-1/2 left-0 -translate-x-full w-0 h-0"
                              style={{
                                borderTop: '15px solid transparent',
                                borderBottom: '15px solid transparent',
                                borderRight: `15px solid ${getDateColorHex(index)}`
                              }}
                            />
                          </div>
                        </div>

                        {/* Content card */}
                        <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-lg">
                          <div className="p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                              {event.eventName}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-base">
                              {event.description}
                            </p>
                            {event.photo !== "#" && (
                              <div className="w-full h-64 overflow-hidden rounded-lg mt-6">
                                <img
                                  src={event.photo}
                                  alt={event.eventName}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Mobile layout */}
          {events.map((event, index) => {
            
            return (
              <div key={`mobile-${event.id}`} className="relative mb-6 md:hidden">
                <div className="mb-6 text-center">
                  <div className={`${getDateColor(index)} text-white px-12 py-4 rounded-full inline-block font-bold shadow-lg`}>
                    <div className="text-xl font-semibold">
                      {event.year}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                      {event.eventName}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {event.description}
                    </p>
                    {event.photo !== "#" && (
                      <div className="w-full h-64 overflow-hidden rounded-lg mt-6">
                        <img
                          src={event.photo}
                          alt={event.eventName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        
{/* View Full Timeline Button - Only show when maxEvents is specified */}
{maxEvents && (
  <div className="text-center mt-14">
    <Link
      to="/timeline"
      className="inline-flex items-center justify-center gap-2 bg-white text-black py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium text-sm"
    >
      View Full Timeline
      <ArrowRight className="h-4 w-4" />
    </Link>
  </div>
)}
      </div>
    </section>
  );
};

export default TimelineSection;