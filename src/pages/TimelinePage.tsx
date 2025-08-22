import TimelineSection from '@/components/sections/TimelineSection';

const TimelinePage = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
           Our Timeline
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A chronological journey through our major milestones and achievements
          </p>
        </div>
      </div>
      
      <TimelineSection 
        showTitle={false}
        className="pb-20 bg-background"
      />
    </div>
  );
};

export default TimelinePage;