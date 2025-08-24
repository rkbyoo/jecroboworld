import { useState, useEffect } from 'react';

interface UseImagePreloaderProps {
  images: string[];
  priority?: number; // Number of images to preload immediately
}

export const useImagePreloader = ({ images, priority = 5 }: UseImagePreloaderProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, src]));
          resolve();
        };
        img.onerror = reject;
        img.src = src;
      });
    };

    const preloadImages = async () => {
      // Preload priority images first
      const priorityImages = images.slice(0, priority);
      const remainingImages = images.slice(priority);

      try {
        // Load priority images in parallel
        await Promise.all(priorityImages.map(preloadImage));
        
        // Load remaining images with a small delay to avoid overwhelming the browser
        for (const src of remainingImages) {
          await new Promise(resolve => setTimeout(resolve, 50));
          preloadImage(src).catch(() => {}); // Ignore errors for non-priority images
        }
      } catch (error) {
        console.warn('Some images failed to preload:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (images.length > 0) {
      preloadImages();
    } else {
      setIsLoading(false);
    }
  }, [images, priority]);

  return {
    loadedImages,
    isLoading,
    isImageLoaded: (src: string) => loadedImages.has(src)
  };
};