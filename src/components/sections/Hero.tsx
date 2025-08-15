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

      {/* Split Layout: Text on Left, Organic-Shaped 3D Model on Right */}
      <div className="relative z-10 w-full h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">

            {/* Text Content - Left Side */}
            <div className="text-left space-y-8 lg:pr-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-secondary-foreground">JEC</span>
                <span className="text-primary ml-4 block lg:inline">ROBOWORLD</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Pioneering the future of robotics through innovation, education, and competitive excellence. Join us in building tomorrow's technology today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-300">
                  <Link to="/events" className="flex items-center">
                    Explore Events
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300">
                  <Link to="/team" className='text-black'>
                    Meet Our Team
                  </Link>
                </Button>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Custom CSS for dynamic framing */}
      <style>{`
        @keyframes adaptiveGlow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
            filter: blur(20px);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.02);
            filter: blur(25px);
          }
        }
        
        @keyframes focusRing {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.1;
          }
          100% {
            transform: scale(1.1);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;