import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface LenisOptions {
  duration?: number;
  easing?: (t: number) => number;
  smoothWheel?: boolean;
  wheelMultiplier?: number;
  touchMultiplier?: number;
}

export const useLenis = (options: LenisOptions = {}) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with custom options
    const lenis = new Lenis({
      duration: options.duration || 1.2,
      easing: options.easing || ((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
      smoothWheel: options.smoothWheel !== false,
      wheelMultiplier: options.wheelMultiplier || 1,
      touchMultiplier: options.touchMultiplier || 2,
    });

    lenisRef.current = lenis;

    // Make lenis available globally for utility functions
    (window as any).lenis = lenis;

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      lenisRef.current = null;
      (window as any).lenis = undefined;
    };
  }, [options.duration, options.easing, options.smoothWheel, options.wheelMultiplier, options.touchMultiplier]);

  // Return utility functions
  return {
    scrollTo: (target: number | string, options?: { offset?: number; duration?: number }) => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(target, options);
      }
    },
    scrollToElement: (selector: string, offset: number = 80) => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(selector, { offset: -offset });
      }
    },
    start: () => {
      if (lenisRef.current) {
        lenisRef.current.start();
      }
    },
    stop: () => {
      if (lenisRef.current) {
        lenisRef.current.stop();
      }
    },
    lenis: lenisRef.current
  };
};