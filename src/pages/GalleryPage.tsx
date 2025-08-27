import { useEffect, useState, useRef } from 'react';
import OptimizedImage from '@/components/OptimizedImage';
import { useImagePreloader } from '@/hooks/useImagePreloader';

interface GalleryImage {
  id: number;
  image: string;
}

const GalleryPage = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);
  const modalRef = useRef<HTMLDivElement>(null);

  // Define aspect ratios for Pinterest-style masonry layout
  const aspectRatios = [0.6, 0.8, 1.0, 1.2, 0.7, 0.9, 1.1, 0.65, 1.3, 0.75, 1.4, 0.85];

  useEffect(() => {
    import('@/data/gallery.json').then((module) => {
      setImages(module.default);
    });
  }, []);

  // Preload images for better performance
  const imageUrls = images.map(item => item.image);
  const { isImageLoaded } = useImagePreloader({ 
    images: imageUrls, 
    priority: 12 // Preload first 12 images
  });

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <div className="pt-24 min-h-screen bg-background text-white">
      <div className="px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold  mb-4">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Capturing moments of innovation, collaboration, and achievement
          </p>
        </div>

        {/* Pinterest-style Masonry Grid with varied heights */}
        <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-3 sm:gap-4 max-w-7xl mx-auto">
          {images.map((item, index) => (
            <div
              key={item.id}
              className="break-inside-avoid mb-3 sm:mb-4 group cursor-pointer"
              onClick={() => openModal(index)}
              style={{ 
                // Add randomized margin for natural Pinterest flow
                marginBottom: `${8 + (index % 4) * 6}px` 
              }}
            >
              <div className="relative overflow-hidden rounded-xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div 
                  className="w-full relative overflow-hidden"
                  style={{
                    // Apply varied aspect ratios to create Pinterest masonry effect
                    aspectRatio: aspectRatios[index % aspectRatios.length]
                  }}
                >
                  <OptimizedImage
                    src={item.image}
                    alt={`Gallery image ${item.id}`}
                    loading={index < 12 ? 'eager' : 'lazy'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white text-gray-900 px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
                      View
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Image Modal with Swipe */}
        {selectedImageIndex !== null && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
            onClick={closeModal}
            ref={modalRef}
          >
            <div 
              className="relative w-full h-full flex items-center justify-center p-4"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Navigation Arrows */}
              {selectedImageIndex > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-3 transition-all z-10 hidden sm:block"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {selectedImageIndex < images.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-3 transition-all z-10 hidden sm:block"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              {/* Close Button */}
              <button
                onClick={(e) => { e.stopPropagation(); closeModal(); }}
                className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm z-10">
                {selectedImageIndex + 1} / {images.length}
              </div>

              {/* Main Image */}
              <OptimizedImage
                src={images[selectedImageIndex].image}
                alt={`Gallery image ${images[selectedImageIndex].id}`}
                className="max-w-full max-h-full object-contain rounded-lg select-none"
                loading="eager"
              />
              {/* Dot Indicators */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(index); }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === selectedImageIndex 
                        ? 'bg-white' 
                        : 'bg-white bg-opacity-40 hover:bg-opacity-60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;