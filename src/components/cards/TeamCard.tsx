interface TeamCardProps {
  teamName: string;
  logo?: string;
  image: string;
  description: string;
}

const TeamCard = ({ teamName, logo, image, description }: TeamCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-foreground/20 hover:shadow-lg transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={teamName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-foreground transition-colors flex items-center gap-2">
          {logo && (
            <img
              src={logo}
              alt={`${teamName} logo`}
              className="w-9 h-9 object-contain"
            />
          )}
          {teamName}
        </h3>
        <p className="text-muted-foreground group-hover:text-foreground/80 leading-relaxed transition-colors">
          {description}
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default TeamCard;