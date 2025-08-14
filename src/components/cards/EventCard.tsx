import { Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EventCardProps {
  eventName: string;
  image: string;
  description: string;
  joiningUrl?: string;
  date?: string;
  status?: string;
}

const EventCard = ({ eventName, image, description, joiningUrl, date, status }: EventCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border hover-glow transition-all duration-300">
      <div className="aspect-video overflow-hidden relative">
        <img
          src={image}
          alt={eventName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {status && (
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
            status === 'upcoming' 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-muted text-muted-foreground'
          }`}>
            {status === 'upcoming' ? 'Upcoming' : 'Completed'}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
            {eventName}
          </h3>
          {date && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(date).toLocaleDateString()}
            </div>
          )}
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        {joiningUrl && joiningUrl !== '#' && (
          <Button 
            asChild 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a href={joiningUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <ExternalLink className="h-4 w-4 mr-2" />
              Register Now
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default EventCard;