import { Calendar, ExternalLink, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EventCardProps {
  eventName: string;
  image?: string;
  description: string;
  joiningUrl?: string;
  date?: string;
  status?: string;
}

const EventCard = ({ eventName, image, description, joiningUrl, date, status }: EventCardProps) => {
  const getStatusConfig = (status?: string) => {
    switch (status) {
      case 'ongoing':
        return { label: 'Ongoing', className: 'bg-gray-500 text-white' };
      case 'upcoming':
        return { label: 'Upcoming', className: 'bg-gray-500 text-white' };
      case 'completed':
        return { label: 'Completed', className: 'bg-gray-500 text-white' };
      default:
        return { label: 'Event', className: 'bg-muted text-muted-foreground' };
    }
  };

  const statusConfig = getStatusConfig(status);
  
  // Check if we should show image section based purely on whether image src is provided
  const shouldShowImage = image && image.trim() !== '';

  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-foreground/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
      {/* Show image section only if image src is provided in JSON */}
      {shouldShowImage && (
        <div className="aspect-video overflow-hidden relative">
          <img
            src={image}
            alt={eventName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {status && (
            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${statusConfig.className}`}>
              {statusConfig.label}
            </div>
          )}
        </div>
      )}
      
      {/* Content section with improved spacing for events without images */}
      <div className={!shouldShowImage ? 'p-8' : 'p-6'}>
        <div className={`flex items-start justify-between ${!shouldShowImage ? 'mb-6' : 'mb-3'}`}>
          <h3 className={`font-bold text-black group-hover:text-black transition-colors ${
            !shouldShowImage ? 'text-2xl leading-tight' : 'text-xl'
          }`}>
            {eventName}
          </h3>
          <div className="flex items-center gap-2 flex-shrink-0 ml-4">
            {/* Show status badge for events without images */}
            {!shouldShowImage && status && (
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${statusConfig.className}`}>
                {statusConfig.label}
              </div>
            )}
            {date && (
              <div className="flex items-center text-sm text-black/70 group-hover:text-black/70 transition-colors">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </div>
            )}
          </div>
        </div>
        
        <p className={`text-black/60 group-hover:text-black/80 transition-colors ${
          !shouldShowImage
            ? 'leading-relaxed text-base mb-0' 
            : 'leading-relaxed mb-4'
        }`}>
          {description}
        </p>
        
        {joiningUrl && joiningUrl !== '#' && (
          <div className="flex justify-start mt-6">
            {status === 'upcoming' ? (
              <Button 
                disabled
                className="opacity-60 cursor-not-allowed bg-black text-white"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Registration Opens Soon
              </Button>
            ) : (
              <Button 
                asChild 
                className="group-hover:scale-105 transition-transform duration-300 bg-black text-white hover:text-white hover:bg-black"
              >
                <a href={joiningUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center cursor-pointer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Register Now
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default EventCard;