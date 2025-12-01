import React, { useState } from 'react';
import { Check, AppPhone, AppMessage, AppCalculator, AppGoogleMaps, AppSpotify, AppNotion } from './Icons';

const AgeProgression = () => {
  const [activeTab, setActiveTab] = useState<'starter' | 'pro'>('starter');

  return (
    <section id="how-it-works" className="py-40 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-white/5 transition-colors duration-500">
        <div className="container mx-auto px-6">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-heading font-semibold text-slate-900 dark:text-white mb-6 tracking-tight transition-colors">
                    Level Up Responsibly
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-xl max-w-xl mx-auto font-medium transition-colors">
                    Start strict. Loosen the leash as they prove they can handle it.
                </p>
            </div>

            {/* Toggle */}
            <div className="flex justify-center mb-20">
                <div className="bg-white dark:bg-slate-900 p-1.5 rounded-full flex relative shadow-soft border border-slate-200 dark:border-white/10 transition-colors">
                    <div 
                        className={`absolute top-1.5 bottom-1.5 w-[140px] bg-slate-900 dark:bg-white rounded-full shadow-lg transition-all duration-500 ease-spring ${activeTab === 'starter' ? 'left-1.5' : 'left-[146px]'}`}
                    ></div>
                    
                    <button 
                        onClick={() => setActiveTab('starter')}
                        className={`w-[140px] py-3 rounded-full text-[13px] font-bold uppercase tracking-wider transition-colors z-10 relative ${activeTab === 'starter' ? 'text-white dark:text-slate-900' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                    >
                        Ages 8-12
                    </button>
                    <button 
                        onClick={() => setActiveTab('pro')}
                        className={`w-[140px] py-3 rounded-full text-[13px] font-bold uppercase tracking-wider transition-colors z-10 relative ${activeTab === 'pro' ? 'text-white dark:text-slate-900' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                    >
                        Ages 13-16
                    </button>
                </div>
            </div>

            {/* Content Card */}
            <div className="max-w-6xl mx-auto bg-white dark:bg-slate-900 rounded-[40px] shadow-soft border border-slate-200 dark:border-white/5 overflow-hidden flex flex-col md:flex-row min-h-[600px] transition-colors duration-500">
                
                {/* Visual Half - High Fidelity UI Simulator */}
                <div className={`w-full md:w-5/12 p-12 flex flex-col items-center justify-center relative transition-colors duration-700 border-r border-slate-100 dark:border-white/5 ${activeTab === 'starter' ? 'bg-slate-50 dark:bg-slate-800/50' : 'bg-slate-100 dark:bg-slate-800'}`}>
                     
                     {/* Phone Physical Body (High Fidelity) */}
                     <div className="relative w-[280px] h-[580px] bg-[#0a0a0a] rounded-[48px] shadow-bezel transition-transform duration-700 ease-spring hover:scale-[1.01] overflow-visible z-10">
                         
                         {/* Frame Material */}
                         <div className="absolute inset-0 rounded-[48px] bg-[#121212] ring-4 ring-[#1a1a1a] shadow-xl overflow-hidden">
                             {/* Metal Grain */}
                             <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]"></div>
                         </div>
                         
                         {/* Frame Highlight */}
                         <div className="absolute inset-0 pointer-events-none z-30 rounded-[48px] mix-blend-overlay opacity-50 bg-gradient-to-br from-white/20 to-transparent"></div>

                         {/* Bezel Layer */}
                         <div className="absolute inset-[3px] bg-black rounded-[45px] z-10 ring-1 ring-black"></div>

                         {/* Screen */}
                         <div 
                             className="absolute inset-[10px] bg-slate-950 text-white rounded-[38px] overflow-hidden border border-white/5 shadow-inner z-20"
                             style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                         >
                             {/* Dynamic Island */}
                             <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50">
                                 <div className="h-[28px] bg-black rounded-full flex items-center justify-between px-3 shadow-[0_1px_2px_rgba(0,0,0,1),inset_0_0_0_1px_rgba(255,255,255,0.1)] min-w-[96px] relative overflow-hidden">
                                     {/* Lens Reflection */}
                                     <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none opacity-20"></div>
                                     {/* Camera */}
                                     <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#050505] ring-1 ring-white/10 shadow-[inset_0_1px_2px_rgba(0,0,0,1)] overflow-hidden">
                                         <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-transparent opacity-60"></div>
                                         <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-white rounded-full blur-[0.2px] opacity-80"></div>
                                     </div>
                                 </div>
                             </div>

                             {/* Glass Reflection */}
                             <div className="absolute inset-0 pointer-events-none z-50 rounded-[38px] bg-gradient-to-br from-white/5 to-transparent opacity-30 mix-blend-overlay"></div>

                             {/* Status Bar */}
                             <div className="absolute top-3 left-5 right-5 h-[32px] flex justify-between items-center z-40 text-white pointer-events-none">
                                <div className="flex items-center gap-1 pl-1">
                                    <span className="text-[12px] font-semibold tracking-tight font-sans drop-shadow-sm">9:41</span>
                                    <svg className="w-2.5 h-2.5 text-white/90 ml-0.5 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
                                </div>
                                <div className="flex gap-[5px] items-center drop-shadow-sm">
                                     <div className="flex items-end gap-[1.5px] h-2.5">
                                         <div className="w-[2.5px] h-[3px] bg-white rounded-[0.5px]"></div>
                                         <div className="w-[2.5px] h-[5px] bg-white rounded-[0.5px]"></div>
                                         <div className="w-[2.5px] h-[7px] bg-white rounded-[0.5px]"></div>
                                         <div className="w-[2.5px] h-[9px] bg-white rounded-[0.5px]"></div>
                                     </div>
                                     {/* Realistic Battery */}
                                     <div className="w-[20px] h-[10px] rounded-[2.5px] border-[1px] border-white/60 p-[1px] relative ml-0.5">
                                        <div className="h-full w-[60%] bg-white rounded-[1px]"></div>
                                        <div className="absolute -right-[2.5px] top-1/2 -translate-y-1/2 w-[1.5px] h-[3px] bg-white/60 rounded-r-[0.5px]"></div>
                                     </div>
                                </div>
                             </div>

                             {/* LOCKDOWN MODE UI */}
                             <div className={`absolute inset-0 pt-32 px-6 flex flex-col items-center transition-all duration-500 ease-spring ${activeTab === 'starter' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                                 <div className="text-6xl font-light mb-2 tracking-tighter text-white/90">09:41</div>
                                 <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-primary mb-12 border border-accent-primary/30 px-3 py-1 rounded-full bg-accent-primary/10">Safemode</div>
                                 
                                 {/* Big Minimalist Actions */}
                                 <div className="w-full grid gap-4">
                                     <div className="bg-[#1C1C1E] p-5 rounded-[24px] flex items-center gap-5 active:scale-95 transition-transform duration-200 cursor-pointer border border-white/5">
                                         <div className="w-12 h-12 bg-transparent flex items-center justify-center">
                                            <AppPhone className="w-12 h-12 rounded-[12px]" />
                                         </div>
                                         <div>
                                            <span className="block font-bold text-lg text-white">Call Mom</span>
                                            <span className="text-xs text-white/40 font-medium">Speed Dial 1</span>
                                         </div>
                                     </div>
                                     <div className="bg-[#1C1C1E] p-5 rounded-[24px] flex items-center gap-5 active:scale-95 transition-transform duration-200 cursor-pointer border border-white/5">
                                         <div className="w-12 h-12 bg-transparent flex items-center justify-center">
                                            <AppMessage className="w-12 h-12 rounded-[12px]" />
                                         </div>
                                         <div>
                                            <span className="block font-bold text-lg text-white">Family Chat</span>
                                            <span className="text-xs text-white/40 font-medium">3 New Messages</span>
                                         </div>
                                     </div>
                                 </div>
                             </div>

                             {/* STUDY MODE UI */}
                             <div className={`absolute inset-0 pt-32 px-6 flex flex-col items-center transition-all duration-500 ease-spring ${activeTab === 'pro' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                                 <div className="text-4xl font-semibold mb-10 tracking-tight text-white/90">Thursday 24</div>
                                 
                                 {/* App Grid */}
                                 <div className="w-full grid grid-cols-3 gap-x-5 gap-y-8 px-2">
                                     {[
                                         { icon: <AppPhone className="w-[60px] h-[60px]" />, label: "Phone" },
                                         { icon: <AppMessage className="w-[60px] h-[60px]" />, label: "Messages" },
                                         { icon: <AppCalculator className="w-[60px] h-[60px]" />, label: "Calc" },
                                         { icon: <AppGoogleMaps className="w-[60px] h-[60px]" />, label: "Maps" },
                                         { icon: <AppSpotify className="w-[60px] h-[60px]" />, label: "Spotify" },
                                         { icon: <AppNotion className="w-[60px] h-[60px]" />, label: "Notion" },
                                     ].map((app, i) => (
                                         <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer hover:scale-105 transition-transform duration-200">
                                             <div className="relative overflow-hidden active:scale-90 transition-transform duration-200 drop-shadow-md">
                                                 {app.icon}
                                             </div>
                                             <span className="text-[11px] font-medium text-white/80 tracking-tight">{app.label}</span>
                                         </div>
                                     ))}
                                 </div>
                                 
                                 {/* Pagination Dots */}
                                 <div className="mt-auto mb-16 flex gap-2 justify-center opacity-30">
                                     <div className="w-2 h-2 bg-white rounded-full"></div>
                                     <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
                                 </div>
                             </div>

                             {/* Home Indicator - Centered */}
                             <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/50 rounded-full backdrop-blur-md"></div>
                         </div>
                     </div>
                </div>

                {/* Specs Half */}
                <div className="w-full md:w-7/12 p-12 md:p-20 flex flex-col justify-center">
                    <div className="animate-reveal">
                        <div className="flex items-center gap-3 mb-6">
                             <div className={`w-2 h-2 rounded-full ${activeTab === 'starter' ? 'bg-accent-primary' : 'bg-emerald-500'}`}></div>
                             <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                                Model: DB-01X / {activeTab === 'starter' ? 'LOCKED' : 'UNLOCKED'}
                            </span>
                        </div>
                        
                        <h3 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-6 tracking-tight transition-colors">
                            {activeTab === 'starter' ? 'Lockdown Mode' : 'Controlled Independence'}
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-medium mb-12 max-w-md transition-colors">
                            {activeTab === 'starter' 
                                ? 'Pure communication. Zero distractions. The digital training wheels for peace of mind.' 
                                : 'Unlock essential utilities like Spotify, Maps, and Calculator. Social media remains hardware-blocked.'}
                        </p>
                        
                        {/* Technical Spec List */}
                        <div className="space-y-0 border-t border-slate-100 dark:border-white/10 transition-colors">
                            {[
                                activeTab === 'starter' ? 'Calling & Texting Only' : 'Wikipedia Access',
                                activeTab === 'starter' ? 'No Internet Browser' : 'Music & Maps',
                                activeTab === 'starter' ? 'No App Store' : 'School Tools',
                                activeTab === 'starter' ? 'Bedtime: 8PM Hard Lock' : 'Flexible Curfew',
                                'GPS Tracking Always On',
                            ].map((feat, i) => (
                                <div key={i} className="flex items-center justify-between py-4 border-b border-slate-100 dark:border-white/10 group">
                                    <span className="text-[15px] font-semibold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{feat}</span>
                                    <div className={`p-1 rounded transition-colors ${activeTab === 'starter' ? 'text-accent-primary' : 'text-emerald-500'}`}>
                                         <Check className="w-4 h-4" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default AgeProgression;