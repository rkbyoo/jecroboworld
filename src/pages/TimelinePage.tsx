import TimelineSection from '@/components/sections/TimelineSection';

const TimelinePage = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            OUR TIMELINE
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A chronological journey through our major milestones and achievements
          </p>
        </div>
      </div>
      
      <TimelineSection 
        showTitle={false}
        className="pb-20 bg-gray-50"
      />
    </div>
  );
};

export default TimelinePage;