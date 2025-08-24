import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Check if Lenis is available globally
        const lenis = (window as any).lenis;

        if (lenis) {
            // Use Lenis smooth scroll to top
            lenis.scrollTo(0, { duration: 0.9 });
        } else {
            // Fallback to native scroll
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    // Scroll to top on initial page load/refresh
    useEffect(() => {
        const handleLoad = () => {
            const lenis = (window as any).lenis;
            
            if (lenis) {
                lenis.scrollTo(0, { duration: 0 });
            } else {
                window.scrollTo(0, 0);
            }
        };

        // If page is already loaded
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    return null;
};

export default ScrollToTop;