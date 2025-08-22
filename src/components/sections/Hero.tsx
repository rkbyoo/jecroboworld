import React, { useEffect, useState } from "react";
import { BLUR_BG } from "./blurPlaceholder";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;
    const img = new Image();
    img.src = "/assets/background.jpg";
    img.onload = () => {
      if (mounted) setBgLoaded(true);
    };
    img.onerror = () => {
      if (mounted) setBgLoaded(false);
    };
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero"
      style={{ position: "relative", minHeight: '100vh' }}
    >
      {/* Background image with filter */}
      {/* Blurred placeholder always visible, real bg fades in */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: bgLoaded
            ? "url('/assets/background.jpg')"
            : `url('${BLUR_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: bgLoaded
            ? "contrast(1.5) brightness(0.4)"
            : "blur(8px) scale(1.05) brightness(0.7)",
          transition: "background-image 0.3s ease, filter 0.3s ease"
        }}
      />

      {/* Centered Content Layout */}
  <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight cursor-default">
              <div
                className="text-primary drop-shadow-2xl"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "800",
                  textShadow: "0 4px 24px rgba(0,0,0,0.95), 0 1.5px 0 #000"
                }}
              >
                ROBOWORLD
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl text-secondary-foreground mt-2 cursor-default">
                THE ROBOTICS CLUB OF JEC
              </div>
            </h1>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white/90 hover:bg-white/100 text-black hover:scale-105 transition-all duration-300"
              >
                <Link to="/members" className="flex items-center cursor-pointer">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white/90 hover:bg-white/100 text-black hover:scale-105 transition-all duration-300"
              >
                <Link
                  to="https://docs.google.com/forms/d/e/1FAIpQLScAB45gIWtHeZaKy_arQZqQkrJCdUAhNUwyaSBClkNyEnPgKw/viewform?usp=header"
                  className="cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
