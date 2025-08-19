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
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    import('@/data/achievements.json').then((module) => {
      setAchievements(module.default);
    });
  }, []);

  const filteredAchievements = achievements.filter(achievement => {
    if (filter === 'all') return true;
    if (filter === '1st') return achievement.position.includes('1st');
    if (filter === '2nd') return achievement.position.includes('2nd');
    if (filter === 'recent') return parseInt(achievement.year) >= 2018;
    return true;
  });

  const stats = {
    total: achievements.length,
    first: achievements.filter(a => a.position.includes('1st')).length,
    second: achievements.filter(a => a.position.includes('2nd')).length,
    years: [...new Set(achievements.map(a => a.year))].length
  };

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5"></div>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-black to-gray-800 mb-6">
              Our Achievements
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A testament to our dedication, innovation, and excellence in competitive robotics across the nation
            </p>
          </div>
          {/* Filter Section */}
          {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { key: 'all', label: 'All Achievements', count: achievements.length },
              { key: '1st', label: 'First Place', count: stats.first },
              { key: '2nd', label: 'Second Place', count: stats.second },
              { key: 'recent', label: 'Recent (2018+)', count: achievements.filter(a => parseInt(a.year) >= 2018).length }
            ].map(({ key, label, count }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === key
                    ? 'bg-black text-white shadow-lg scale-105'
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md hover:scale-102'
                } border border-gray-200/50 backdrop-blur-sm`}
              >
                {label} <span className="ml-2 text-sm opacity-75">({count})</span>
              </button>
            ))}
          </div> */}
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAchievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AchievementCard
                eventName={achievement.eventName}
                location={achievement.location}
                position={achievement.position}
                year={achievement.year}
                description={achievement.description}
              />
            </div>
          ))}
        </div>

        {filteredAchievements.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No achievements found</h3>
            <p className="text-gray-600">Try adjusting your filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementsPage;