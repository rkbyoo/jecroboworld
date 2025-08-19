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
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-foreground/20 hover:shadow-lg transition-all duration-300">
      <div className="aspect-video overflow-hidden relative">
        <img
          src={image}
          alt={eventName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {status && (
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
            status === 'ongoing' 
              ? 'bg-foreground text-background' 
              : 'bg-muted text-muted-foreground'
          }`}>
            {status === 'ongoing' ? 'Ongoing' : 'Completed'}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-card-foreground group-hover:text-foreground transition-colors">
            {eventName}
          </h3>
          {date && (
            <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(date).toLocaleDateString()}
            </div>
          )}
        </div>
        <p className="text-muted-foreground group-hover:text-foreground/80 leading-relaxed mb-4 transition-colors">
          {description}
        </p>
        {joiningUrl && joiningUrl !== '#' && (
          <div className="flex justify-start">
            <Button 
              asChild 
              className="group-hover:scale-105 transition-transform duration-300"
            >
              <a href={joiningUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center cursor-pointer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Register Now
              </a>
            </Button>
          </div>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default EventCard;