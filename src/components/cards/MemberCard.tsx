interface MemberCardProps {
  name: string;
  role?: string;
  photo: string;
  year?: string;
  department?: string;
}

const MemberCard = ({ name, role, photo, year, department }: MemberCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-foreground/20 hover:shadow-lg transition-all duration-300">
      <div className="p-6 text-center">
        <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-2 border-foreground/20 group-hover:border-foreground/40 transition-colors">
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-foreground transition-colors">
          {name}
        </h3>
        {role && (
          <p className="text-foreground font-medium mb-2">{role}</p>
        )}
        <div className="space-y-1 text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors">
          {department && <p>{department}</p>}
          {year && <p>Class of {year}</p>}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default MemberCard;