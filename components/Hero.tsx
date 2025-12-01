import React, { useState, useRef } from 'react';
import { Lock, Ban } from './Icons';

const Hero = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleInput = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    let clientX, clientY;
    if ('touches' in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    } else {
        clientX = (e as React.MouseEvent).clientX;
        clientY = (e as React.MouseEvent).clientY;
    }

    const rect = containerRef.current.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width;
    const y = (clientY - rect.top) / rect.height;
    
    // Calculate rotation (max 10 degrees for heavy feel)
    const rotateY = (x - 0.5) * 10;
    const rotateX = (0.5 - y) * 10;

    setRotate({ x: rotateX, y: rotateY });
    setIsInteracting(true);
  };

  const handleEnd = () => {
    setRotate({ x: 0, y: 0 });
    setIsInteracting(false);
  };

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
        className="relative pt-40 pb-32 overflow-hidden bg-[#FBFBFD]" 
        onMouseMove={handleInput} 
        onMouseLeave={handleEnd}
        onTouchMove={handleInput}
        onTouchEnd={handleEnd}
    >
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24">
            
            <div className="reveal-on-scroll inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white border border-slate-200/60 shadow-sm backdrop-blur-sm hover:scale-105 transition-transform duration-500 ease-spring cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500">Tamper-Proof OS</span>
            </div>

            <h1 className="reveal-on-scroll text-6xl md:text-8xl font-heading font-bold text-slate-900 leading-[0.95] mb-8 tracking-tighter delay-100">
              Kill The <br/>
              <span className="text-accent-primary">Addiction.</span> <br/>
              <span className="text-slate-400">Keep The Kid.</span>
            </h1>

            <p className="reveal-on-scroll text-xl md:text-2xl text-slate-500 mb-12 leading-relaxed max-w-2xl font-medium tracking-tight delay-200">
               The only phone that physically blocks TikTok, Reels, and infinite scrolling while keeping family connection alive.
            </p>

            <div className="reveal-on-scroll flex flex-col sm:flex-row gap-4 items-center delay-300">
              <button 
                onClick={scrollToPricing}
                className="bg-slate-900 text-white px-10 py-4 rounded-full text-[15px] font-bold hover:bg-black transition-all btn-press shadow-2xl shadow-slate-900/20"
              >
                Protect Your Kid
              </button>
              <div className="flex items-center gap-2 px-6 py-3">
                 <div className="flex -space-x-3">
                    {[
                        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=64&h=64",
                        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&h=64",
                        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=64&h=64"
                    ].map((src, i) => (
                        <img 
                            key={i} 
                            src={src} 
                            alt={`Parent ${i+1}`}
                            className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm hover:scale-110 hover:z-10 transition-transform duration-300"
                        />
                    ))}
                 </div>
                 <span className="text-sm font-bold text-slate-600 pl-2">Trusted by 10,000+ Parents</span>
              </div>
            </div>
        </div>

        {/* 3D Interactive Monolith Device */}
        {/* Reverted to responsive width + mx-auto to fix centering */}
        <div 
            ref={containerRef}
            className="reveal-on-scroll relative w-full max-w-[360px] md:max-w-[380px] mx-auto perspective-[3000px] group cursor-default delay-500"
        >
            {/* Ambient Float Wrapper (Pauses on interaction) */}
            <div className={`transition-all duration-1000 ${isInteracting ? '' : 'animate-float'}`}>
                
                {/* Phone Physical Body */}
                <div 
                    style={{
                        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                    }}
                    className="relative h-[720px] md:h-[760px] bg-[#0a0a0a] rounded-[60px] shadow-bezel transition-transform duration-100 ease-out z-20 ring-1 ring-white/10 overflow-visible will-change-transform mx-auto"
                >
                    
                    {/* Frame Material (Titanium/Ceramic) */}
                    <div className="absolute inset-0 rounded-[60px] bg-[#121212] ring-4 ring-[#1a1a1a] shadow-xl overflow-hidden">
                        {/* Metal Grain Texture */}
                        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]"></div>
                    </div>

                    {/* Frame Highlight/Reflection - Dynamic */}
                    <div 
                        style={{
                            background: `linear-gradient(${125 + rotate.y * 5}deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 100%)`,
                        }}
                        className="absolute inset-0 pointer-events-none z-30 rounded-[60px] mix-blend-overlay opacity-70"
                    ></div>

                    {/* Antenna Bands (Realistic Cuts with depth) */}
                    <div className="absolute top-24 -left-[4px] w-[5px] h-[2px] bg-[#333] z-20 shadow-[0_1px_1px_rgba(0,0,0,0.8)]"></div>
                    <div className="absolute top-24 -right-[4px] w-[5px] h-[2px] bg-[#333] z-20 shadow-[0_1px_1px_rgba(0,0,0,0.8)]"></div>
                    <div className="absolute bottom-24 -left-[4px] w-[5px] h-[2px] bg-[#333] z-20 shadow-[0_1px_1px_rgba(0,0,0,0.8)]"></div>
                    <div className="absolute bottom-24 -right-[4px] w-[5px] h-[2px] bg-[#333] z-20 shadow-[0_1px_1px_rgba(0,0,0,0.8)]"></div>

                    {/* Bezel Layer (Black Border between Frame and Screen) */}
                    <div className="absolute inset-[4px] bg-black rounded-[56px] z-10 ring-1 ring-black shadow-[inset_0_0_4px_rgba(255,255,255,0.05)]">
                        {/* Earpiece Speaker Grill */}
                        <div className="absolute top-[8px] left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#1a1a1a] rounded-full shadow-[inset_0_0.5px_1px_rgba(255,255,255,0.1)] z-20"></div>
                    </div>

                    {/* The Screen */}
                    {/* Added WebkitMaskImage to properly clip corners on all devices/browsers */}
                    <div 
                        className="absolute inset-[12px] bg-black rounded-[48px] overflow-hidden border border-white/5 shadow-inner z-20"
                        style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                    >
                        
                        {/* Dynamic Island / Camera Housing (ULTRA REALISTIC) */}
                        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-50">
                             <div className="h-[36px] bg-black rounded-full flex items-center justify-between px-3.5 shadow-[0_1px_2px_rgba(0,0,0,1),inset_0_0_0_1px_rgba(255,255,255,0.1)] min-w-[124px] relative overflow-hidden group/island">
                                  
                                  {/* Glass Gloss Overlay (Simulates continuous glass surface) */}
                                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none opacity-20"></div>

                                  {/* FaceID Sensors (Hidden IR emitter - subtle dark grey phantom) */}
                                  <div className="w-8 h-full flex items-center justify-center relative opacity-80">
                                      <div className="w-2.5 h-2.5 rounded-full bg-[#0d0d0d] shadow-[inset_0_0_2px_rgba(0,0,0,1)] ring-1 ring-white/5"></div>
                                  </div>

                                  {/* Main Camera Lens (Optical Physics) */}
                                  <div className="w-8 h-full flex items-center justify-center relative">
                                      <div className="w-3.5 h-3.5 rounded-full bg-[#020205] ring-1 ring-white/10 shadow-[inset_0_1px_4px_rgba(0,0,0,1)] relative overflow-hidden">
                                          
                                          {/* Anti-Reflective Coating (Deep Blue/Purple Tint) */}
                                          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-purple-900/10 to-transparent mix-blend-overlay"></div>
                                          
                                          {/* Lens Aperture (Pure Black Pupil) */}
                                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-black rounded-full shadow-[0_0_1px_rgba(0,0,0,0.8)]"></div>
                                          
                                          {/* Specular Highlight (The Glint) */}
                                          <div className="absolute top-1 right-1 w-0.5 h-0.5 bg-white rounded-full blur-[0.2px] shadow-[0_0_2px_rgba(255,255,255,1)] opacity-90"></div>
                                      </div>
                                  </div>
                             </div>
                        </div>

                        {/* Glass Reflection Overlay (Oleophobic Coating) */}
                        <div 
                            style={{
                                background: `linear-gradient(${150 + rotate.y * 3}deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 50%, rgba(255,255,255,0) 100%)`,
                            }}
                            className="absolute inset-0 pointer-events-none z-50 rounded-[48px] mix-blend-soft-light"
                        ></div>

                        {/* Status Bar - Pixel Perfect iOS */}
                        <div className="absolute top-5 left-7 right-7 h-[36px] flex justify-between items-center z-40 text-white pointer-events-none">
                            {/* Time & Location - Pushed to the far left "ear" */}
                            <div className="flex items-center gap-1 pl-1">
                                <span className="text-[15px] font-semibold tracking-[-0.02em] font-sans drop-shadow-md whitespace-nowrap">9:41</span>
                                {/* Location Arrow (GPS Always On) */}
                                <svg className="w-3 h-3 text-white/90 drop-shadow-md ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
                            </div>
                            
                            {/* Icons - Pushed to the far right "ear" */}
                            <div className="flex gap-[6px] items-center drop-shadow-md flex-shrink-0">
                                 {/* Cellular Signal (iOS 4-bar Ladder) */}
                                 <div className="flex items-end gap-[2px] h-3">
                                     <div className="w-[3.2px] h-[4px] bg-white rounded-[1px]"></div>
                                     <div className="w-[3.2px] h-[6px] bg-white rounded-[1px]"></div>
                                     <div className="w-[3.2px] h-[8px] bg-white rounded-[1px]"></div>
                                     <div className="w-[3.2px] h-[10.5px] bg-white rounded-[1px]"></div>
                                 </div>
                                 
                                 {/* Realistic Battery (60% Charge) - Refined Border */}
                                 <div className="w-[25px] h-[12px] rounded-[3.5px] border-[1px] border-white/60 p-[1.5px] relative ml-1">
                                    <div className="h-full w-[60%] bg-white rounded-[1.5px]"></div>
                                    <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[1.5px] h-[4px] bg-white/60 rounded-r-[1px]"></div>
                                 </div>
                            </div>
                        </div>

                        {/* UI Content - Blocked Context */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-[#080808] overflow-hidden">
                            
                            {/* BLOCKED CONTEXT: Realistic TikTok Interface Background */}
                            <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
                                {/* Base Image: High Energy Video Feed */}
                                <div 
                                    className="absolute inset-0 bg-cover bg-center scale-110 opacity-70"
                                    style={{ 
                                        backgroundImage: 'url("https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1000&auto=format&fit=crop")',
                                        filter: 'blur(10px) brightness(0.6)'
                                    }}
                                ></div>
                                
                                {/* Dark Gradient Overlay (Bottom Up) for Text Legibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>

                                {/* Ghost UI: Right Side Icons (Specific TikTok Layout) */}
                                <div className="absolute right-4 bottom-24 flex flex-col gap-5 items-center opacity-50">
                                     {/* Profile */}
                                     <div className="w-11 h-11 rounded-full border border-white/50 bg-white/10 relative flex items-center justify-center shadow-lg">
                                        <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                                        <div className="absolute -bottom-1 w-4 h-4 bg-accent-danger rounded-full flex items-center justify-center text-[10px] text-white font-bold shadow-sm border border-white/20">+</div>
                                     </div>
                                     
                                     {/* Like (Heart) */}
                                     <div className="flex flex-col gap-1 items-center text-white">
                                         <svg className="w-8 h-8 fill-current drop-shadow-lg" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                                         <span className="text-[11px] font-bold drop-shadow-sm">824K</span>
                                     </div>
                                     
                                     {/* Comment */}
                                     <div className="flex flex-col gap-1 items-center text-white">
                                         <div className="w-8 h-8 rounded-full bg-white/20 p-1.5 flex items-center justify-center drop-shadow-lg backdrop-blur-sm">
                                             <div className="w-5 h-5 bg-white rounded-sm shadow-sm"></div>
                                         </div>
                                         <span className="text-[11px] font-bold drop-shadow-sm">12.5K</span>
                                     </div>

                                     {/* Bookmark */}
                                     <div className="flex flex-col gap-1 items-center text-white">
                                         <svg className="w-8 h-8 fill-current drop-shadow-lg" viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>
                                         <span className="text-[11px] font-bold drop-shadow-sm">42K</span>
                                     </div>

                                     {/* Share */}
                                     <div className="flex flex-col gap-1 items-center text-white">
                                         <svg className="w-8 h-8 fill-current drop-shadow-lg" viewBox="0 0 24 24"><path d="M10 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z"/></svg>
                                         <span className="text-[11px] font-bold drop-shadow-sm">Share</span>
                                     </div>

                                     {/* Music Disc */}
                                     <div className="mt-2 w-10 h-10 rounded-full bg-[#1a1a1a] border-2 border-[#2a2a2a] flex items-center justify-center animate-[spin_8s_linear_infinite] shadow-lg">
                                         <div className="w-6 h-6 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=200")' }}></div>
                                     </div>
                                </div>

                                {/* Ghost UI: Bottom Caption */}
                                <div className="absolute left-4 bottom-8 flex flex-col gap-2 opacity-60 max-w-[200px]">
                                    <div className="w-24 h-4 bg-white/90 rounded-md mb-1 drop-shadow-sm"></div>
                                    <div className="w-48 h-3 bg-white/60 rounded-sm drop-shadow-sm"></div>
                                    <div className="w-32 h-3 bg-white/60 rounded-sm drop-shadow-sm"></div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
                                        <div className="w-20 h-2 bg-white/60 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Notification Card - Vibrant Frosted Glass */}
                            <div className="w-full bg-[#121212]/85 backdrop-blur-2xl backdrop-saturate-150 rounded-[28px] p-6 text-center border border-white/10 shadow-2xl transform transition-transform hover:scale-[1.02] duration-300 relative group z-10">
                                 
                                 {/* Glow effect behind card */}
                                 <div className="absolute -inset-1 bg-accent-danger/20 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                 <div className="relative z-10">
                                     <div className="w-16 h-16 bg-accent-danger/10 rounded-full flex items-center justify-center mx-auto mb-5 border border-accent-danger/20 animate-pulse-slow relative overflow-hidden">
                                         {/* TikTok Logo Watermark inside blocked icon */}
                                         <svg viewBox="0 0 24 24" fill="currentColor" className="absolute w-10 h-10 text-accent-danger/60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                            <path d="M16.6 5.82C15.55 5.82 14.56 5.43 13.8 4.78V1.9H11.9V14.74C11.9 16.3 10.63 17.57 9.07 17.57C7.5 17.57 6.23 16.3 6.23 14.74C6.23 13.17 7.5 11.9 9.07 11.9C9.32 11.9 9.56 11.94 9.79 12V9.13C9.56 9.1 9.32 9.09 9.07 9.09C5.95 9.09 3.42 11.62 3.42 14.74C3.42 17.86 5.95 20.39 9.07 20.39C12.19 20.39 14.72 17.86 14.72 14.74V8.58C16.03 9.52 17.63 9.87 19.16 9.51V6.69C18.25 6.75 17.38 6.43 16.6 5.82Z" />
                                        </svg>
                                         <Ban className="w-8 h-8 text-accent-danger relative z-10" />
                                     </div>
                                     <h3 className="text-white font-bold text-xl mb-2 tracking-tight">App Blocked</h3>
                                     <p className="text-white/50 text-sm mb-6 leading-relaxed font-medium">
                                        "TikTok" is not allowed on <br/> DoomBlocker OS.
                                     </p>
                                     <div className="w-full py-3.5 bg-white/5 rounded-xl border border-white/5 text-white/90 text-[11px] font-mono font-bold uppercase tracking-widest hover:bg-white/10 transition-colors cursor-pointer hover:border-white/20">
                                         Go Read A Book Instead
                                     </div>
                                 </div>
                            </div>

                            {/* Home Indicator (Replaces Lock/Phone buttons) */}
                            <div className="absolute bottom-2.5 left-1/2 transform -translate-x-1/2 w-[130px] h-[5px] bg-white rounded-full opacity-60 hover:opacity-100 transition-opacity shadow-sm z-50"></div>
                        </div>
                    </div>

                    {/* Physical Buttons (Machined with cylindrical gradients) */}
                    {/* Action Button (Orange) */}
                    <div className="absolute -left-[5px] top-32 w-[5px] h-9 bg-gradient-to-r from-accent-primary to-orange-700 rounded-l-md shadow-[inset_-1px_0_2px_rgba(0,0,0,0.3)]"></div>
                    
                    {/* Volume Rockers */}
                    <div className="absolute -left-[5px] top-48 w-[5px] h-14 bg-gradient-to-r from-[#3a3a3a] to-[#1a1a1a] rounded-l-md shadow-[inset_-1px_0_2px_rgba(0,0,0,0.3)]"></div>
                    <div className="absolute -left-[5px] top-64 w-[5px] h-14 bg-gradient-to-r from-[#3a3a3a] to-[#1a1a1a] rounded-l-md shadow-[inset_-1px_0_2px_rgba(0,0,0,0.3)]"></div>
                    
                    {/* Power Button */}
                    <div className="absolute -right-[5px] top-56 w-[5px] h-24 bg-gradient-to-l from-[#3a3a3a] to-[#1a1a1a] rounded-r-md shadow-[inset_1px_0_2px_rgba(0,0,0,0.3)]"></div>

                </div>

                {/* Floor Shadow / Reflection */}
                <div 
                    style={{ 
                        transform: `translateX(${rotate.y * -2}px) scaleX(${0.8 + Math.abs(rotate.y) * 0.01})`,
                        opacity: 0.4
                    }}
                    className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[340px] h-[30px] bg-black/40 blur-[50px] rounded-[100%] transition-all duration-100"
                ></div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;