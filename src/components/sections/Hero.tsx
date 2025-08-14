import { ArrowRight, Cog, Zap, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-float">
          <Cog className="h-8 w-8 text-primary/30" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Zap className="h-6 w-6 text-primary/20" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <Settings className="h-10 w-10 text-primary/25" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo placeholder - you can replace this with your actual logo */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <Cog className="h-16 w-16 text-primary-foreground animate-spin" style={{ animationDuration: '8s' }} />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-secondary-foreground">JEC</span>
            <span className="text-primary ml-4">ROBOWORLD</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Pioneering the future of robotics through innovation, education, and competitive excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform">
              <Link to="/events" className="flex items-center">
                Explore Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/team" className='text-black'>
                Meet Our Team
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;