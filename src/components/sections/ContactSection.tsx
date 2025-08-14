import { useEffect, useState } from 'react';
import { Instagram, Linkedin, Facebook, Mail, MapPin, Phone } from 'lucide-react';

interface ContactData {
  socialLinks: {
    instagram: string;
    linkedin: string;
    facebook: string;
    email: string;
  };
  clubDetails: {
    name: string;
    description: string;
    address: string;
    phone: string;
    email: string;
  };
}

const ContactSection = () => {
  const [contactData, setContactData] = useState<ContactData | null>(null);

  useEffect(() => {
    import('@/data/contact.json').then((module) => {
      setContactData(module.default);
    });
  }, []);

  if (!contactData) return null;

  const socialIcons = {
    instagram: Instagram,
    linkedin: Linkedin,
    facebook: Facebook,
    email: Mail,
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
            Connect with us and join the robotics revolution
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-secondary-foreground mb-4">
                {contactData.clubDetails.name}
              </h3>
              <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
                {contactData.clubDetails.description}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-secondary-foreground/80">{contactData.clubDetails.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-secondary-foreground/80">{contactData.clubDetails.phone}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${contactData.clubDetails.email}`}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  {contactData.clubDetails.email}
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-secondary-foreground mb-8 text-center">
              Follow Us
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(contactData.socialLinks).map(([platform, url]) => {
                const Icon = socialIcons[platform as keyof typeof socialIcons];
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 rounded-xl bg-card-dark/50 backdrop-blur-sm border border-primary/20 hover-glow transition-all duration-300 text-center"
                  >
                    <Icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-card-dark-foreground capitalize font-medium">
                      {platform}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;