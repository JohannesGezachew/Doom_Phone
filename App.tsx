import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Problem from './components/Problem';
import Features from './components/Features';
import AgeProgression from './components/AgeProgression';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

declare const Lenis: any;

export default function App() {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    if (typeof Lenis !== 'undefined') {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }
  }, []);

  // Cinematic Entrance Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    });

    // Slight delay to ensure DOM is ready
    setTimeout(() => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, [loading]);

  return (
    <>
      <Preloader onComplete={() => setLoading(false)} />
      
      <div className={`min-h-screen font-sans text-slate-900 selection:bg-accent-primary selection:text-white transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main className="pt-24 pb-0">
          <Hero />
          <Marquee />
          <Problem />
          <Features />
          <AgeProgression />
          {/* Minimalist divider */}
          <div className="container mx-auto px-6 reveal-on-scroll">
             <div className="w-full h-px bg-slate-200/60 my-24"></div>
          </div>
          <Testimonials />
          <Pricing />
        </main>
        <Footer />
      </div>
    </>
  );
}