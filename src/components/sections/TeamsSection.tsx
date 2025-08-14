import { useEffect, useState } from 'react';
import TeamCard from '@/components/cards/TeamCard';

interface Team {
  id: number;
  teamName: string;
  image: string;
  description: string;
}

const TeamsSection = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    import('@/data/teams.json').then((module) => {
      setTeams(module.default);
    });
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Robotics Teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the innovative teams pushing the boundaries of robotics technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team) => (
            <TeamCard
              key={team.id}
              teamName={team.teamName}
              image={team.image}
              description={team.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;