import { useEffect, useState } from 'react';
import AchievementCard from '@/components/cards/AchievementCard';

interface Achievement {
  id: number;
  eventName: string;
  location: string;
  position: string;
  year: string;
  description?: string;
}

const AchievementsPage = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    import('@/data/achievements.json').then((module) => {
      setAchievements(module.default);
    });
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Our Achievements
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating our victories and milestones in competitive robotics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              eventName={achievement.eventName}
              location={achievement.location}
              position={achievement.position}
              year={achievement.year}
              description={achievement.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;