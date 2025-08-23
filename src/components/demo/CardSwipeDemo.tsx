import { CardSwipe } from '@/components/ui/CardSwipe';

const CardSwipeDemo = () => {
  // Demo images - you can replace these with actual event/achievement images
  const demoImages = [
    '/assets/event/upcoming.svg',
    '/assets/event/techno.jpg',
    '/assets/event/upcoming.svg',
    '/assets/event/techno.jpg'
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            CardSwipe Component Demo
          </h1>
          <p className="text-xl text-muted-foreground">
            Interactive image carousel with card swipe animation
          </p>
        </div>

        <CardSwipe
          images={demoImages}
          title="Event Gallery"
          description="Beautiful card swipe animation for showcasing event images"
          autoplayDelay={2500}
          slideShadows={true}
        />

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-card rounded-lg border">
              <h3 className="font-semibold mb-2">Click on Cards</h3>
              <p className="text-sm text-muted-foreground">
                Click on any event or achievement card that has images to open the gallery modal
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border">
              <h3 className="font-semibold mb-2">Swipe Animation</h3>
              <p className="text-sm text-muted-foreground">
                Enjoy smooth card swipe animations with autoplay and manual navigation
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border">
              <h3 className="font-semibold mb-2">Responsive Design</h3>
              <p className="text-sm text-muted-foreground">
                Works perfectly on both desktop and mobile devices
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSwipeDemo;