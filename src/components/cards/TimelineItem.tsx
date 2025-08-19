import { Calendar } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  eventName: string;
  description: string;
  photo: string;
}

const TimelineItem = ({ year, eventName, description, photo }: TimelineItemProps) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Year header spanning full width */}
      <div className="w-full -mx-4 bg-foreground text-background rounded-lg px-6 py-3 font-bold text-xl text-center shadow-lg">
        {year}
      </div>

      {/* Card content */}
      <div className="group">
        <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-foreground/20 hover:shadow-lg transition-all duration-300 relative">
          <div className="aspect-video overflow-hidden">
            <img
              src={photo}
              alt={eventName}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-3">
              <Calendar className="h-5 w-5 text-foreground/70 group-hover:text-foreground transition-colors" />
              <h3 className="text-xl font-bold text-card-foreground group-hover:text-foreground transition-colors">
                {eventName}
              </h3>
            </div>
            <p className="text-muted-foreground group-hover:text-foreground/80 leading-relaxed transition-colors">
              {description}
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;