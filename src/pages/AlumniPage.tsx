import { useEffect, useState } from 'react';
import AlumniCard from '@/components/cards/AlumniCard';
import MemorialCard from '@/components/cards/MemorialCard';

interface Alumni {
  id: number;
  name: string;
  phone: string;
  email: string;
  image: string;
  batch: string;
  currentPosition: string;
}

const AlumniPage = () => {
  const [alumni, setAlumni] = useState<Alumni[]>([]);

  useEffect(() => {
    import('@/data/alumni.json').then((module) => {
      setAlumni(module.default);
    });
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Our Alumni
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proud graduates making their mark in the world of technology and innovation
          </p>
        </div>

        {/* Memorial Section */}
        <MemorialCard
          name="Late Arnab Kishore Bordoloi"
          image="/assets/alumni/Arnab_Daa.jpg"
          batch="2014-2018"
          position="Former Senior Electrical Engineer at OIL"
          message="It's very tragic and heart breaking that one of our member of JEC Roboworld Arnab Kishore Bordoloi, is no more with us. He was a very talented individual with such high hopes, a teacher, a motivator, an inspirer. A man who was full of energy and enthusiasm to serve and give back to the society. He was one of the enthusiast who has whole heartedly worked to build this club and with a vision to uplift the technical side of our JEC. We admire his enormous contribution to our club as well as to our college. Apart from being a club members he was a great leader, a good guide and an ideal person for us. We shall always remember his contributions and shall follow the learnings he have taught us. Indeed he left us doing the things he loved. Left us with inspirations and some beautiful memories. JEC ROBOWORLD will always be in debt of all his dedication & hardship. May his soul rest in peace."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {alumni.map((person) => (
            <AlumniCard
              key={person.id}
              name={person.name}
              phone={person.phone}
              email={person.email}
              image={person.image}
              batch={person.batch}
              currentPosition={person.currentPosition}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniPage;