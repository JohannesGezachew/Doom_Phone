import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, Moon, Sun } from './Icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-700 ease-luxury ${scrolled ? 'pt-4' : 'pt-8'}`}>
        <div className={`glass-nav rounded-full pl-6 pr-3 py-2.5 flex items-center justify-between w-full max-w-[800px] transition-all duration-700 ease-luxury ${scrolled ? 'shadow-soft scale-[1.02]' : 'scale-100'}`}>
          
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group btn-press"
          >
            <div className="bg-slate-900 dark:bg-white p-1.5 rounded-full group-hover:scale-110 transition-transform duration-500 ease-spring">
                <Shield className="w-3.5 h-3.5 text-white dark:text-slate-900" />
            </div>
            <span className="font-heading font-bold text-slate-900 dark:text-white tracking-tight text-[15px] hidden sm:block">DoomBlocker</span>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {[
              { label: 'Problem', id: 'problem' },
              { label: 'Features', id: 'features' },
              { label: 'How it Works', id: 'how-it-works' },
              { label: 'Pricing', id: 'pricing' }
            ].map((item) => (
              <button 
                key={item.label} 
                onClick={() => scrollToSection(item.id)}
                className="px-5 py-2 rounded-full text-[13px] font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all duration-300 ease-luxury btn-press whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA & Actions */}
          <div className="flex items-center gap-2">
             <button 
              onClick={toggleTheme}
              className="p-2 text-slate-900 dark:text-white rounded-full hover:bg-black/5 dark:hover:bg-white/10 btn-press transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
             <button 
              onClick={() => scrollToSection('pricing')}
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-2.5 rounded-full text-[13px] font-bold hover:bg-black dark:hover:bg-slate-200 transition-all duration-300 ease-luxury btn-press shadow-lg shadow-slate-900/20 dark:shadow-white/10 hover:shadow-xl whitespace-nowrap"
            >
              Order Now
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-900 dark:text-white rounded-full hover:bg-black/5 dark:hover:bg-white/10 btn-press"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Overlay */}
      <div className={`fixed inset-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl transition-all duration-700 ease-luxury ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
           <div className="flex flex-col items-center justify-center h-full gap-8">
            {['Problem', 'Features', 'How it Works', 'Pricing'].map((item, i) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase().replace(/ /g, '-'))}
                className={`text-4xl font-heading font-bold text-slate-900 dark:text-white tracking-tighter transition-all duration-700 ease-spring hover:text-accent-primary btn-press ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {item}
              </button>
            ))}
           </div>
      </div>
    </>
  );
};

export default Navbar;