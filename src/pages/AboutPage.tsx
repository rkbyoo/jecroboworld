import { useEffect, useState } from 'react';

interface AboutData {
  title: string;
  history: string[];
  images: Array<{
    url: string;
    caption: string;
  }>;
}

const AboutPage = () => {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);

  useEffect(() => {
    import('@/data/about.json').then((module) => {
      setAboutData(module.default);
    });
  }, []);

  if (!aboutData) return null;

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            {aboutData.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our story, vision, and commitment to robotics excellence
          </p>
        </div>

        {/* History Content */}
        <div className="mb-16">
          <div className="max-w-7xl mx-auto space-y-8">
            {aboutData.history.map((paragraph, index) => (
              <p key={index} className="text-md leading-relaxed text-foreground text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Images Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {aboutData.images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover-glow transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-card-foreground font-medium text-center text-lg">
                    {image.caption}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;