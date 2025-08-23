import { useEffect, useState } from 'react';
import AchievementCard from '@/components/cards/AchievementCard';
import { ImageModal } from '@/components/ui/ImageModal';

interface Achievement {
  id: number;
  eventName: string;
  location?: string;
  position: string;
  year: string;
  description?: string;
  images?: string[];
}

const AchievementsPage = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAchievementClick = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAchievement(null);
  };

  useEffect(() => {
    import('@/data/achievements.json').then((module) => {
      setAchievements(module.default);
    });
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5"></div>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Our Achievements
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              A testament to our dedication, innovation, and excellence in competitive robotics across the nation
            </p>
          </div>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
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
                images={achievement.images}
                onCardClick={() => handleAchievementClick(achievement)}
              />
            </div>
          ))}
        </div>

        {achievements.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No achievements found</h3>
            <p className="text-white/70">Loading achievements...</p>
          </div>
        )}
      </div>

      {/* Modal rendered at page level */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        images={selectedAchievement?.images || []}
        title={selectedAchievement?.eventName || ''}
        description={selectedAchievement?.description}
      />
    </div>
  );
};

export default AchievementsPage;