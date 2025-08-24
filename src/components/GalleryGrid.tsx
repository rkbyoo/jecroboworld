import React, { useState, useMemo } from 'react';
import OptimizedImage from './OptimizedImage';
import { useImagePreloader } from '../hooks/useImagePreloader';

interface GalleryItem {
  id: number;
  image: string;
  category?: string;
  title?: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  columns?: number;
  gap?: string;
  filterByCategory?: string;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({
  items,
  columns = 3,
  gap = '1rem',
  filterByCategory
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Filter items by category if specified
  const filteredItems = useMemo(() => {
    if (!filterByCategory) return items;
    return items.filter(item => item.category === filterByCategory);
  }, [items, filterByCategory]);

  // Extract image URLs for preloading
  const imageUrls = useMemo(() => 
    filteredItems.map(item => item.image), 
    [filteredItems]
  );

  // Preload images with priority for first few
  const { isImageLoaded } = useImagePreloader({ 
    images: imageUrls, 
    priority: 8 
  });

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap,
    width: '100%'
  };

  return (
    <>
      <div style={gridStyle} className="gallery-grid">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="gallery-item cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            onClick={() => setSelectedImage(item.image)}
          >
            <OptimizedImage
              src={item.image}
              alt={item.title || `Gallery image ${item.id}`}
              className="w-full h-48 object-cover"
              loading={item.id <= 8 ? 'eager' : 'lazy'}
            />
            {item.title && (
              <div className="p-2 bg-white">
                <p className="text-sm text-gray-700 truncate">{item.title}</p>
                {item.category && (
                  <span className="text-xs text-gray-500 capitalize">
                    {item.category}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;