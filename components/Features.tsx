import React from 'react';
import { ShieldCheck, Lock, MapPin, Battery } from './Icons';

const Features = () => {
  return (
    <section id="features" className="py-40 bg-slate-950 text-white relative border-t border-slate-900">
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mb-32 reveal-on-scroll">
                <h2 className="text-5xl md:text-7xl font-heading font-semibold mb-8 tracking-tighter text-white">
                    Hardware That <br/>
                    <span className="text-slate-500">Doesn't Suck.</span>
                </h2>
                <div className="flex flex-wrap gap-4 text-xs font-mono font-bold uppercase tracking-widest text-slate-600 mb-8">
                     <span>Status: Locked & Secure</span>
                     <span className="text-slate-800">|</span>
                     <span>Model: DB-01X</span>
                </div>
            </div>

            {/* Pro Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-900 border border-slate-900 rounded-[32px] overflow-hidden reveal-on-scroll shadow-2xl">
                
                {/* Vetted Apps */}
                <div className="bg-slate-950 p-12 md:p-16 group hover:bg-slate-900 transition-all duration-700 ease-luxury relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    </div>
                    <ShieldCheck className="w-10 h-10 text-white mb-8 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-spring origin-left" />
                    <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-500 ease-luxury">Vetted Apps Only</h3>
                    <p className="text-slate-400 leading-relaxed text-lg font-medium mb-12 group-hover:text-slate-300 transition-colors duration-500">
                        No App Store. No side-loading. We curate a list of 100% safe utility apps (Calculator, Maps, Music, School Tools). If it scrolls, it's gone.
                    </p>
                    <div className="w-full h-px bg-slate-900 mb-6"></div>
                    <div className="flex gap-8 text-xs font-mono font-bold tracking-widest uppercase text-slate-600">
                        <span>Utility: Yes</span>
                        <span>Social: No</span>
                    </div>
                </div>

                {/* Tamper Proof */}
                <div className="bg-slate-950 p-12 md:p-16 group hover:bg-slate-900 transition-all duration-700 ease-luxury relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse"></div>
                    </div>
                    <Lock className="w-10 h-10 text-white mb-8 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-spring origin-left" />
                    <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-500 ease-luxury">Tamper-Proof OS</h3>
                    <p className="text-slate-400 leading-relaxed text-lg font-medium mb-12 group-hover:text-slate-300 transition-colors duration-500">
                        Kids can't hack it. We tried. The bootloader is locked, ADB is disabled, and the OS is signed with proprietary keys.
                    </p>
                     <div className="w-full h-px bg-slate-900 mb-6"></div>
                    <div className="flex gap-8 text-xs font-mono font-bold tracking-widest uppercase text-slate-600">
                        <span>Security: Max</span>
                        <span>Hacks: Zero</span>
                    </div>
                </div>

                {/* GPS */}
                <div className="bg-slate-950 p-12 md:p-16 group hover:bg-slate-900 transition-all duration-700 ease-luxury relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    </div>
                    <MapPin className="w-10 h-10 text-white mb-8 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-spring origin-left" />
                    <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-500 ease-luxury">Live GPS</h3>
                    <p className="text-slate-400 leading-relaxed text-lg font-medium mb-12 group-hover:text-slate-300 transition-colors duration-500">
                        Know where they are, always. Encrypted location sharing that respects privacy but ensures safety.
                    </p>
                     <div className="w-full h-px bg-slate-900 mb-6"></div>
                    <div className="flex gap-8 text-xs font-mono font-bold tracking-widest uppercase text-slate-600">
                        <span>Signal: L1 + L5</span>
                        <span>Update: Realtime</span>
                    </div>
                </div>

                {/* Battery */}
                <div className="bg-slate-950 p-12 md:p-16 group hover:bg-slate-900 transition-all duration-700 ease-luxury relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    </div>
                    <Battery className="w-10 h-10 text-white mb-8 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-spring origin-left" />
                    <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-500 ease-luxury">3 Day Battery</h3>
                    <p className="text-slate-400 leading-relaxed text-lg font-medium mb-12 group-hover:text-slate-300 transition-colors duration-500">
                        No background drain. No analytics. No constant refreshing of feeds. Just pure efficiency.
                    </p>
                     <div className="w-full h-px bg-slate-900 mb-6"></div>
                    <div className="flex gap-8 text-xs font-mono font-bold tracking-widest uppercase text-slate-600">
                        <span>Capacity: 5000mAh</span>
                        <span>Standby: 7 Days</span>
                    </div>
                </div>

            </div>
            
            <div className="mt-20 overflow-hidden">
                 <div className="animate-marquee whitespace-nowrap flex gap-8 items-center opacity-40">
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="text-sm font-mono font-bold tracking-widest text-slate-500 uppercase select-none">
                            SAFE FOR KIDS • SANITY FOR PARENTS • 30 DAY MONEY BACK GUARANTEE •
                        </span>
                    ))}
                 </div>
            </div>
        </div>
    </section>
  );
};

export default Features;