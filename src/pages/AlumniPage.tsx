import { useEffect, useState } from 'react';
import AlumniCard from '@/components/cards/AlumniCard';

interface Alumni {
  id: number;
  name: string;
  phone: string;
  email: string;
  image: string;
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {alumni.map((person) => (
            <AlumniCard
              key={person.id}
              name={person.name}
              phone={person.phone}
              email={person.email}
              image={person.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniPage;