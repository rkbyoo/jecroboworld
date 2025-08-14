import { Phone, Mail } from 'lucide-react';

interface AlumniCardProps {
  name: string;
  phone: string;
  email: string;
  image: string;
}

const AlumniCard = ({ name, phone, email, image }: AlumniCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border hover:bg-primary/5 transition-all duration-300">
      <div className="p-6 text-center">
        <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-2 border-primary/20">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h3 className="text-xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
          {name}
        </h3>

        <div className="space-y-2">
          <div className="flex items-center text-muted-foreground justify-center">
            <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
            <a href={`tel:${phone}`} className="text-sm hover:text-primary transition-colors">
              {phone}
            </a>
          </div>
          <div className="flex items-center text-muted-foreground justify-center">
            <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
            <a href={`mailto:${email}`} className="text-sm hover:text-primary transition-colors truncate">
              {email}
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default AlumniCard;