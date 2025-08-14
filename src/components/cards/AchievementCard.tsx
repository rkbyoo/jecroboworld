import { Trophy, MapPin, Calendar } from 'lucide-react';

interface AchievementCardProps {
  eventName: string;
  location: string;
  position: string;
  year: string;
  description?: string;
}

const AchievementCard = ({ eventName, location, position, year, description }: AchievementCardProps) => {
  const getPositionColor = (pos: string) => {
    if (pos.includes('1st')) return 'text-yellow-500';
    if (pos.includes('2nd')) return 'text-gray-400';
    if (pos.includes('3rd')) return 'text-amber-600';
    return 'text-primary';
  };

  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border hover-glow transition-all duration-300 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Trophy className={`h-6 w-6 ${getPositionColor(position)}`} />
          <span className={`text-lg font-bold ${getPositionColor(position)}`}>
            {position}
          </span>
        </div>
        <div className="text-sm text-muted-foreground flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          {year}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
        {eventName}
      </h3>
      
      <div className="flex items-center text-muted-foreground mb-3">
        <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
        <span className="text-sm">{location}</span>
      </div>
      
      {description && (
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
    </div>
  );
};

export default AchievementCard;