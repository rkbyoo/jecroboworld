interface TeamCardProps {
  teamName: string;
  image: string;
  description: string;
}

const TeamCard = ({ teamName, image, description }: TeamCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border hover-glow transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={teamName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
          {teamName}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default TeamCard;