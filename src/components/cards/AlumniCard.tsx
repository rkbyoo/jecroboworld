import { Phone, Mail, GraduationCap, Briefcase } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

interface AlumniCardProps {
  name: string;
  phone: string;
  email: string;
  image: string;
  batch: string;
  currentPosition: string;
}

const AlumniCard = ({ name, phone, email, image, batch, currentPosition }: AlumniCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-foreground/20 hover:shadow-lg transition-all duration-300">
      <div className="p-6 text-center">
        <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-2 border-foreground/20 group-hover:border-foreground/40 transition-colors">
          <OptimizedImage
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <h3 className="text-xl font-bold text-black mb-2 group-hover:text-black transition-colors">
          {name}
        </h3>

        {/* Batch */}
        <div className="flex items-center justify-center text-black/70 mb-3">
          <GraduationCap className="h-4 w-4 mr-2 flex-shrink-0" />
          <span className="text-sm font-medium">{batch}</span>
        </div>

        {/* Current Position */}
        {currentPosition && (
          <div className="flex items-start justify-center text-black/70 mb-4">
            <Briefcase className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-center leading-relaxed">{currentPosition}</span>
          </div>
        )}

        <div className="space-y-2">
          {phone && (
            <div className="flex items-center text-black/60 group-hover:text-black/80 justify-center transition-colors">
              <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
              <a href={`tel:${phone}`} className="text-sm hover:text-black transition-colors">
                {phone}
              </a>
            </div>
          )}
          {email && (
            <div className="flex items-center text-black/60 group-hover:text-black/80 justify-center transition-colors">
              <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
              <a href={`mailto:${email}`} className="text-sm hover:text-black transition-colors truncate">
                {email}
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default AlumniCard;