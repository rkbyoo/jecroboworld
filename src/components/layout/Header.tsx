import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const location = useLocation();

  // Disable animations after initial load
  useEffect(() => {
    setTimeout(() => {
      setHasAnimated(true);
    }, 1000);
  }, []);

  // Handle scroll effects
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth < 768;

      // Set scrolled state for styling
      setIsScrolled(currentScrollY > 60);

      // Hide/show navbar on mobile only, but not when menu is open
      if (isMobile && currentScrollY > lastScrollY && currentScrollY > 100 && !isMenuOpen) {
        setIsVisible(false);
      } else if (isMobile && currentScrollY < lastScrollY && !isMenuOpen) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Members", path: "/members" },
    { name: "Achievements", path: "/achievements" },
    { name: "Timeline", path: "/timeline" },
    { name: "Gallery", path: "/gallery" },
    { name: "Alumni", path: "/alumni" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-400 ease-out ${isVisible ? 'translate-y-0' : 'md:translate-y-0 -translate-y-full'
        } ${isScrolled
          ? 'py-2 shadow-lg'
          : 'py-8 shadow-none'
        }`}
      style={{
        backgroundColor: 'var(--background)',
        transitionDelay: '0.1s'
      }}
    >
      <div className={`mx-auto transition-all duration-400 ease-out ${isScrolled
        ? 'px-4 sm:px-20 max-w-7xl'
        : 'px-4 sm:px-20 max-w-7xl'
        }`}>
        {/* Desktop Navigation - Rounded Pill Style */}
        <div className="hidden md:flex justify-center">
          <nav className={`bg-secondary/95 backdrop-blur-sm rounded-full shadow-lg transition-all duration-400 ease-out ${isScrolled ? 'px-4 py-2' : 'px-6 py-3'
            }`}>
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <Link
                to="/"
                className={`flex items-center space-x-2 hover-glow transition-all duration-300 ${!hasAnimated ? 'animate-fade-in-down' : ''
                  }`}
                style={{ animationDuration: '1s' }}
              >
                <div className="p-1">
                  <img
                    src="/assets/logo/logo_mini.png"
                    alt="RoboWorld Club"
                    className={`transition-all duration-400 ${isScrolled ? 'h-6 w-6' : 'h-8 w-8'
                      }`}
                  />
                </div>
                <span className={`font-bold text-secondary-foreground whitespace-nowrap transition-all duration-400 ${isScrolled ? 'text-base' : 'text-lg'
                  }`}>
                  JEC ROBOWORLD
                </span>
              </Link>

              {/* Navigation Items */}
              {navItems.slice(1).map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative will-change-transform backface-visibility-hidden transform-gpu whitespace-nowrap ${!hasAnimated ? 'animate-fade-in' : ''
                    } ${isActive(item.path)
                      ? "text-secondary-foreground scale-105 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:rounded-full after:w-full"
                      : "text-secondary-foreground/80 hover:text-secondary-foreground hover:scale-105 hover:-translate-y-0.5 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-0.5 hover:after:bg-secondary-foreground/50 hover:after:rounded-full hover:after:w-full"
                    }`}
                  style={{
                    animationDuration: '2s',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden flex items-center justify-between relative z-50 bg-secondary/95 backdrop-blur-sm rounded-[100px] transition-all duration-400 ${isScrolled ? 'px-3 py-1.5' : 'px-4 py-2'
          }`}>
          {/* Mobile Logo */}
          <Link
            to="/"
            className={`flex items-center space-x-2 hover-glow transition-all duration-300 ${!hasAnimated ? 'animate-fade-in' : ''
              }`}
            style={{ animationDuration: '2s' }}
          >
            <div className="p-2">
              <img
                src="/assets/logo/logo_mini.png"
                alt="RoboWorld Club"
                className={`transition-all duration-400 ${isScrolled ? 'h-8 w-8' : 'h-10 w-10'
                  }`}
              />
            </div>
            <span className={`font-bold text-secondary-foreground transition-all duration-400 text-lg`}>
              JEC ROBOWORLD
            </span>
          </Link>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className={`text-secondary-foreground transition-all duration-200 hover:bg-secondary-foreground/10 ${!hasAnimated ? 'animate-fade-in' : ''
              }`}
            style={{ animationDuration: '2s' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-secondary-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-secondary-foreground" />
            )}
          </Button>
        </div>

        {/* Mobile Full Screen Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-0 bg-black/95 backdrop-blur-md z-[60] min-h-screen w-full">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="fixed top-8 right-8 text-secondary-foreground hover:bg-secondary-foreground/10 animate-fade-in z-[70]"
              style={{ animationDuration: '0.3s' }}
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-8 w-8" />
            </Button>

            {/* Navigation Items */}
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-8">
                {navItems.map((item, index) => (
                  <div key={item.name} className="block">
                    <Link
                      to={item.path}
                      className={`block text-3xl font-medium transition-all duration-300 will-change-transform backface-visibility-hidden transform-gpu animate-fade-in ${isActive(item.path)
                        ? "text-secondary-foreground scale-110"
                        : "text-secondary-foreground/80 hover:text-secondary-foreground hover:scale-110 hover:-translate-y-1"
                        }`}
                      style={{
                        animationDuration: '0.4s',
                        animationDelay: `${index * 0.05}s`
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;