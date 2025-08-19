import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Alumni', path: '/alumni' },
    { name: 'Tutorials', path: '/tutorials' },
    { name: 'About', path: '/about' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-background/10">
                <img src="/assets/logo/logo_mini.png" alt="JEC RoboWorld Logo" className="h-10 w-10" />
              </div>
              <span className="text-xl font-bold">JEC RoboWorld</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Pioneering the future of robotics through innovation, education, and competitive excellence.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Jorhat Engineering College</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:roboworld@jgec.ac.in" className="hover:text-primary transition-colors">
                  roboworld@jgec.ac.in
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+91-1234567890" className="hover:text-primary transition-colors">
                  +91-1234567890
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">More</h3>
            <ul className="space-y-2">
              {navItems.slice(5).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} JEC RoboWorld. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;