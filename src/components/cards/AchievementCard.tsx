import { Trophy, MapPin, Calendar, Award, Star, Images } from 'lucide-react';

interface AchievementCardProps {
  eventName: string;
  location?: string;
  position: string;
  year: string;
  description?: string;
  images?: string[];
  onCardClick?: () => void;
}

const AchievementCard = ({ eventName, location, position, year, description, images, onCardClick }: AchievementCardProps) => {
  const handleCardClick = () => {
    if (images && images.length > 0 && onCardClick) {
      onCardClick();
    }
  };
  const getPositionStyle = (pos: string) => {
    if (pos.includes('1st')) {
      return {
        bgColor: 'bg-gradient-to-r from-amber-600 to-amber-700',
        textColor: 'text-white',
        icon: Trophy
      };
    }
    if (pos.includes('2nd')) {
      return {
        bgColor: 'bg-gradient-to-r from-slate-500 to-slate-600',
        textColor: 'text-white',
        icon: Award
      };
    }
    if (pos.includes('3rd')) {
      return {
        bgColor: 'bg-gradient-to-r from-orange-500 to-orange-600',
        textColor: 'text-white',
        icon: Star
      };
    }
    return {
      bgColor: 'bg-gradient-to-r from-slate-600 to-slate-700',
      textColor: 'text-white',
      icon: Award
    };
  };

  const positionStyle = getPositionStyle(position);
  const IconComponent = positionStyle.icon;

  return (
    <>
      <div
        className={`group relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/10 hover:bg-white p-6 ${images && images.length > 0 ? 'cursor-pointer' : ''
          }`}
        onClick={handleCardClick}
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-transparent"></div>

        {/* Position Badge */}
        <div className="flex items-start justify-between mb-6">
          <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${positionStyle.bgColor}`}>
            <IconComponent className="h-5 w-5 text-white" />
            <span className="text-sm font-bold text-white">
              {position}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {images && images.length > 0 && (
              <div className="flex items-center space-x-1 px-2 py-1 bg-blue-100/80 rounded-full backdrop-blur-sm">
                <Images className="h-3 w-3 text-blue-600" />
                <span className="text-xs font-medium text-blue-600">{images.length}</span>
              </div>
            )}
            <div className="flex items-center space-x-1 px-3 py-1 bg-gray-100/80 rounded-full backdrop-blur-sm">
              <Calendar className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">{year}</span>
            </div>
          </div>
        </div>

        {/* Event Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-gray-800 transition-colors">
          {eventName}
        </h3>

        {/* Location */}
        {location && (
          <div className="flex items-start space-x-2 mb-4">
            <MapPin className="h-4 w-4 text-gray-500 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-600 leading-relaxed">{location}</span>
          </div>
        )}

        {/* Description */}
        {description && (
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        )}

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

        {/* Subtle border glow on hover */}
        <div className="absolute inset-0 rounded-2xl border border-gray-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

    </>
  );
};

export default AchievementCard;