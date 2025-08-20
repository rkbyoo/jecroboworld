import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">


      {/* Centered Content Layout */}
      <div className="relative z-10 w-full h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto">

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <div className="text-primary" style={{ fontFamily: 'Orbitron, monospace', fontWeight: '900' }}>ROBOWORLD</div>
              <div className="text-2xl md:text-3xl lg:text-4xl text-secondary-foreground mt-2 hover:text-primary transition-colors duration-300 cursor-default">
                The Robotics Club of JEC
              </div>
            </h1>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-black/40 hover:bg-black/60 text-white hover:scale-105 transition-all duration-300">
                <Link to="/events" className="flex items-center cursor-pointer">
                  Explore Events
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-black/40 hover:bg-black/60 text-white hover:scale-105 transition-all duration-300">
                <Link to="/team" className="cursor-pointer">
                  Join Roboworld
                </Link>
              </Button>
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