import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import TeamPage from "./pages/TeamPage";
import AchievementsPage from "./pages/AchievementsPage";
import TimelinePage from "./pages/TimelinePage";
import GalleryPage from "./pages/GalleryPage";
import AlumniPage from "./pages/AlumniPage";
import TutorialsPage from "./pages/TutorialsPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { useLenis } from "./hooks/useLenis";
import { useEffect, useState } from "react";
import Loader from "./components/ui/Loader";

const queryClient = new QueryClient();

const App = () => {
  // Initialize Lenis smooth scrolling
  useLenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
  });

  // loader lifecycle: mounted -> visible -> fade-out -> unmount
  const [loaderMounted, setLoaderMounted] = useState(true); // controls render
  const [loaderVisible, setLoaderVisible] = useState(true); // controls CSS visibility

  useEffect(() => {
    const minVisible = 2000; // visible for at least 3s
    const fadeDuration = 500;
    const mountTime = Date.now();
    let cleared = false;

    const hideLoaderSequence = () => {
      const elapsed = Date.now() - mountTime;
      const wait = Math.max(0, minVisible - elapsed);
      setTimeout(() => {
        setLoaderVisible(false);
        setTimeout(() => setLoaderMounted(false), fadeDuration);
      }, wait);
    };

    const onLoad = () => {
      if (cleared) return;
      cleared = true;
      hideLoaderSequence();
    };

    window.addEventListener("load", onLoad);

    // fallback: ensure loader never shows for more than 2 seconds
    const fallback = setTimeout(() => {
      if (!cleared) {
        cleared = true;
        hideLoaderSequence();
      }
    }, 2000);

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen bg-background flex flex-col">
            {loaderMounted && <Loader visible={loaderVisible} />}
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/members" element={<TeamPage />} />
                <Route path="/achievements" element={<AchievementsPage />} />
                <Route path="/timeline" element={<TimelinePage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/alumni" element={<AlumniPage />} />
                <Route path="/tutorials" element={<TutorialsPage />} />
                <Route path="/about" element={<AboutPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
