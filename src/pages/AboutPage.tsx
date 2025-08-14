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

        <div className="max-w-4xl mx-auto">
          {/* History Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              {aboutData.history.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="space-y-6">
              {aboutData.images.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-card border border-border hover-glow transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-card-foreground font-medium text-center">
                      {image.caption}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary rounded-xl p-8">
              <h2 className="text-2xl font-bold text-secondary-foreground mb-4">Our Mission</h2>
              <p className="text-secondary-foreground/80 leading-relaxed">
                To foster innovation in robotics through hands-on learning, collaborative research, 
                and competitive excellence, preparing the next generation of robotics engineers 
                and technologists.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading student robotics organization that bridges the gap between 
                academic learning and real-world applications, creating solutions for tomorrow's 
                technological challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;