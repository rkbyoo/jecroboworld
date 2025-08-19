import { useEffect, useState } from 'react';

interface Sponsor {
  id: number;
  name: string;
  logo: string;
  website: string;
}

const SponsorsSection = () => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);

  useEffect(() => {
    import('@/data/sponsors.json').then((module) => {
      setSponsors(module.default);
    });
  }, []);

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Sponsors
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proudly supported by industry leaders who believe in our vision
          </p>
        </div>

        {/* Animated sponsor logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left space-x-16 w-max">
            {/* Triple sponsors for seamless infinite loop */}
            {[...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
              <a
                key={`${sponsor.id}-${index}`}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 group"
              >
                <div className="relative p-8 rounded-xl bg-card border border-border hover-glow transition-all duration-300">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-16 w-32 object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;