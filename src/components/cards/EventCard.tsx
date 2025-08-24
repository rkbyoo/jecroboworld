import { Calendar, ExternalLink, Images } from 'lucide-react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';

interface EventCardProps {
  eventName: string;
  image?: string;
  images?: string[];
  description: string;
  joiningUrl?: string;
  date?: string;
  status?: string;
  onCardClick?: () => void;
}

const EventCard = ({ eventName, image, images, description, joiningUrl, date, status, onCardClick }: EventCardProps) => {
  const handleCardClick = () => {
    if (images && images.length > 0 && onCardClick) {
      onCardClick();
    }
  };
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
    <>
      <div 
        className={`group relative overflow-hidden rounded-xl bg-card border border-border hover:border-foreground/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 h-full flex flex-col ${
          images && images.length > 0 ? 'cursor-pointer' : ''
        }`}
        onClick={handleCardClick}
      >
      {/* Show image section only if image src is provided in JSON */}
      {shouldShowImage && (
        <div className="aspect-video overflow-hidden relative">
          <OptimizedImage
            src={image}
            alt={eventName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-4 right-4 flex gap-2">
            {images && images.length > 0 && (
              <div className="px-2 py-1 bg-black/70 text-white rounded-full text-xs font-medium flex items-center gap-1">
                <Images className="h-3 w-3" />
                {images.length}
              </div>
            )}
            {status && (
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${statusConfig.className}`}>
                {statusConfig.label}
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Content section with improved spacing for events without images */}
      <div className={`flex-1 flex flex-col ${!shouldShowImage ? 'p-4 sm:p-6 lg:p-8' : 'p-4 sm:p-6'}`}>
        <div className={`flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 ${!shouldShowImage ? 'mb-4 sm:mb-6' : 'mb-3'}`}>
          <h3 className={`font-bold text-black group-hover:text-black transition-colors ${
            !shouldShowImage ? 'text-xl sm:text-2xl leading-tight' : 'text-lg sm:text-xl'
          }`}>
            {eventName}
          </h3>
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Show status badge and image count for events without images */}
            <div className="flex items-center gap-2">
              {!shouldShowImage && images && images.length > 0 && (
                <div className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium flex items-center gap-1">
                  <Images className="h-3 w-3" />
                  {images.length}
                </div>
              )}
              {!shouldShowImage && status && (
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${statusConfig.className}`}>
                  {statusConfig.label}
                </div>
              )}
            </div>
            {date && (
              <div className="flex items-center text-sm text-black/70 group-hover:text-black/70 transition-colors">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">
                  {new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </span>
                <span className="sm:hidden">
                  {new Date(date).toLocaleDateString('en-US', { month: 'short', year: '2-digit' })}
                </span>
              </div>
            )}
          </div>
        </div>
        
        <p className={`text-black/60 group-hover:text-black/80 transition-colors flex-1 ${
          !shouldShowImage
            ? 'leading-relaxed text-sm sm:text-base mb-0' 
            : 'leading-relaxed text-sm mb-4'
        }`}>
          {description}
        </p>
        
        {joiningUrl && joiningUrl !== '#' && (
          <div className="flex justify-start mt-4 sm:mt-6">
            {status === 'upcoming' ? (
              <Button 
                disabled
                className="opacity-60 cursor-not-allowed bg-black text-white text-sm w-full sm:w-auto"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Registration Opens Soon</span>
                <span className="sm:hidden">Opens Soon</span>
              </Button>
            ) : (
              <Button 
                asChild 
                className="group-hover:scale-105 transition-transform duration-300 bg-black text-white hover:text-white hover:bg-black text-sm w-full sm:w-auto"
              >
                <a href={joiningUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center cursor-pointer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Register Now</span>
                  <span className="sm:hidden">Register</span>
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

    </>
  );
};

export default EventCard;