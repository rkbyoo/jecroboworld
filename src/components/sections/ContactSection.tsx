import { useEffect, useState } from 'react';
import { Instagram, Linkedin, Facebook, Mail } from 'lucide-react';

interface ContactData {
  socialLinks: {
    instagram: string;
    linkedin: string;
    facebook: string;
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
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
            Connect with us and join the robotics revolution
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-secondary-foreground mb-10">
              Follow Us
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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