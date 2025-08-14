import Hero from '@/components/sections/Hero';
import TeamsSection from '@/components/sections/TeamsSection';
import EventsPreview from '@/components/sections/EventsPreview';
import SponsorsSection from '@/components/sections/SponsorsSection';
import ContactSection from '@/components/sections/ContactSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TeamsSection />
      <EventsPreview />
      <SponsorsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;