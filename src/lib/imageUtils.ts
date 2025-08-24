// Image optimization utilities

export const getOptimizedImageUrl = (url: string, width?: number, height?: number): string => {
  // For external URLs (like postimg.cc), return as-is since they're already optimized
  if (url.startsWith('http')) {
    return url;
  }
  
  // For local assets, you could implement WebP conversion or resizing here
  // For now, return the original URL
  return url;
};

export const createImageSrcSet = (baseUrl: string, sizes: number[] = [400, 800, 1200]): string => {
  if (baseUrl.startsWith('http')) {
    // External images - return single source
    return baseUrl;
  }
  
  // For local images, you could generate multiple sizes
  return sizes.map(size => `${baseUrl} ${size}w`).join(', ');
};

export const getImagePlaceholder = (width: number = 400, height: number = 300): string => {
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="Arial, sans-serif" font-size="14">
        Loading...
      </text>
    </svg>
  `)}`;
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver => {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };

  return new IntersectionObserver(callback, defaultOptions);
};