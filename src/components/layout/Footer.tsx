import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import footerData from '../../data/footer.json';

const Footer = () => {
  const iconMap = {
    facebook: Facebook,
    instagram: Instagram,
    linkedin: Linkedin,
    email: Mail,
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-background/10">
                <img src={footerData.logo.image} alt={footerData.logo.alt} className="h-10 w-10" />
              </div>
              <span className="text-xl font-bold">{footerData.logo.title}</span>
            </div>
            <p className=" mb-4 max-w-md">
              {footerData.description}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{footerData.contact.address}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href={`mailto:${footerData.contact.email}`} className="hover:text-primary transition-colors">
                  {footerData.contact.email}
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href={`tel:${footerData.contact.phone}`} className="hover:text-primary transition-colors">
                  {footerData.contact.phone}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {footerData.socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className=" hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerData.navigation.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-primary transition-colors text-sm"
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
              {footerData.navigation.slice(4).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-sm flex flex-col items-center gap-2">
            <span>
              © {footerData.copyright.showYear ? new Date().getFullYear() : ''} {footerData.copyright.text}
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/rkb16/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-[#2b9e9c] transition-colors no-underline"
                aria-label="Rakib Hussain LinkedIn"
              >
                Developed by Rakib Hussain
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
//some changes here

export default Footer;