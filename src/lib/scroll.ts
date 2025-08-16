// Utility functions for Lenis smooth scrolling

export const scrollToElement = (selector: string, offset: number = 80) => {
  const lenis = (window as any).lenis;
  if (lenis) {
    lenis.scrollTo(selector, { offset: -offset });
  }
};

export const scrollToTop = () => {
  const lenis = (window as any).lenis;
  if (lenis) {
    lenis.scrollTo(0);
  }
};

export const scrollToBottom = () => {
  const lenis = (window as any).lenis;
  if (lenis) {
    lenis.scrollTo(document.body.scrollHeight);
  }
};

export const scrollTo = (target: number | string, options?: { offset?: number; duration?: number }) => {
  const lenis = (window as any).lenis;
  if (lenis) {
    lenis.scrollTo(target, options);
  }
};

// Declare global lenis instance for TypeScript
declare global {
  interface Window {
    lenis?: any;
  }
}