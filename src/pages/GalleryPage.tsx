import { useEffect, useState } from 'react';

interface GalleryImage {
  id: number;
  image: string;
}

const GalleryPage = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    import('@/data/gallery.json').then((module) => {
      setImages(module.default);
    });
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-2">
            GALLERY
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Capturing moments of innovation, collaboration, and achievement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {images.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:bg-primary/5 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt="Gallery image"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;