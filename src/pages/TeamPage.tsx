import { useEffect, useState } from 'react';
import MemberCard from '@/components/cards/MemberCard';

interface Member {
  id: number;
  name: string;
  role?: string;
  photo: string;
  year?: string;
  department?: string;
  status?: string;
}

const TeamPage = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    import('@/data/members.json').then((module) => {
      setMembers(module.default);
    });
  }, []);

  const currentMembers = members.filter(member => member.status === 'current');
  const pastMembers = members.filter(member => member.status === 'alumni');

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the brilliant minds driving innovation in robotics
          </p>
        </div>

        {/* Current Members */}
        {currentMembers.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Current Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentMembers.map((member) => (
                <MemberCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  photo={member.photo}
                  year={member.year}
                  department={member.department}
                />
              ))}
            </div>
          </div>
        )}

        {/* Past Members */}
        {pastMembers.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Past Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {pastMembers.map((member) => (
                <MemberCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  photo={member.photo}
                  year={member.year}
                  department={member.department}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamPage;