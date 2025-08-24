import OptimizedImage from '@/components/OptimizedImage';

interface MemberCardProps {
  name: string;
  role?: string;
  photo: string;
  isCurrent?: boolean;
}

const MemberCard = ({ name, role, photo, isCurrent = false }: MemberCardProps) => {
  return (
    <div className={`group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg ${
      isCurrent 
        ? 'bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 hover:from-orange-100 hover:to-amber-100 dark:hover:from-orange-900/40 dark:hover:to-amber-900/40' 
        : 'bg-card hover:bg-card/40'
    }`}>
      <div className="p-6 text-center">
        <div className={`w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full transition-all duration-300 ${
          isCurrent 
            ? 'border-3 border-orange-400 group-hover:border-orange-500 group-hover:shadow-lg group-hover:shadow-orange-200/50 dark:group-hover:shadow-orange-800/30' 
            : 'border-2 border-foreground/20 group-hover:border-foreground/40'
        }`}>
          <OptimizedImage
            src={photo}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <h3 className={`text-xl font-bold mb-2 transition-colors ${
          isCurrent 
            ? 'text-orange-900 dark:text-orange-100 group-hover:text-black dark:group-hover:text-black' 
            : 'text-card-foreground group-hover:text-foreground'
        }`}>
          {name}
        </h3>
        {role && (
          <p className={`font-medium transition-colors ${
            isCurrent 
              ? 'text-orange-700 dark:text-orange-300 group-hover:text-black dark:group-hover:text-black' 
              : 'text-background group-hover:text-white'
          }`}>
            {role}
          </p>
        )}
      </div>
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
        isCurrent 
          ? 'bg-gradient-to-t from-orange-200/20 via-transparent to-transparent dark:from-orange-800/20' 
          : 'bg-gradient-to-t from-foreground/5 via-transparent to-transparent'
      }`} />
    </div>
  );
};

export default MemberCard;