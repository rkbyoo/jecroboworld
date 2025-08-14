import { Calendar } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  eventName: string;
  description: string;
  photo: string;
}

const TimelineItem = ({ year, eventName, description, photo }: TimelineItemProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">
        {year}
      </div>
      
      <div className="flex-1 group">
        <div className="bg-card border border-border rounded-xl overflow-hidden hover-glow transition-all duration-300">
          <div className="aspect-video overflow-hidden">
            <img
              src={photo}
              alt={eventName}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-3">
              <Calendar className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                {eventName}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;