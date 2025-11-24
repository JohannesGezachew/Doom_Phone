import React from 'react';

const text = "ZERO ALGORITHMS • NO TIKTOK • NO REELS • NO DOOMSCROLLING • NO ADDICTION • JUST LIFE •";

const Marquee = () => {
  return (
    <section className="py-8 bg-white border-b border-slate-100 overflow-hidden reveal-on-scroll">
        <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee whitespace-nowrap flex gap-4 items-center opacity-80">
                {/* Quadruple the list for seamless loop on wide screens */}
                {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-xl md:text-2xl font-mono font-bold tracking-tight text-slate-900 select-none uppercase">
                        {text}
                    </span>
                ))}
            </div>
            
            {/* Gradient Masks for Fade Effect */}
            <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
        <style>{`
            .animate-marquee {
                animation: marquee 30s linear infinite;
            }
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
        `}</style>
    </section>
  );
};

export default Marquee;