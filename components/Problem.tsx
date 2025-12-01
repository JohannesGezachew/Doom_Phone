import React from 'react';
import { Skull, Brain, Moon } from './Icons';

const Problem = () => {
  return (
    <section id="problem" className="py-32 md:py-48 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-500">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.4 }}></div>
        <div className="absolute inset-0 dark:opacity-10 opacity-0 transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="container mx-auto px-6 relative z-10">
            
            <div className="max-w-4xl mx-auto mb-24 text-center">
                <div className="reveal-on-scroll inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-full mb-8 shadow-sm transition-colors duration-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse"></div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Diagnosis: Critical</span>
                </div>
                <h2 className="reveal-on-scroll text-5xl md:text-7xl font-heading font-semibold text-slate-900 dark:text-white tracking-tighter leading-[0.95] mb-8 transition-colors duration-500">
                    Your Kid vs <br/>
                    <span className="text-slate-400 dark:text-slate-500">The Algorithm.</span>
                </h2>
                <p className="reveal-on-scroll text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed delay-100 transition-colors duration-500">
                    Silicon Valley employs thousands of PhDs to hijack your child's attention. <br className="hidden md:block"/> A normal phone doesn't stand a chance.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                
                {/* Card 1: Dopamine Fry */}
                <div className="reveal-on-scroll group bg-white dark:bg-slate-800 p-10 rounded-[32px] border border-slate-200 dark:border-white/5 shadow-soft hover:shadow-2xl hover:border-slate-300 dark:hover:border-white/20 transition-all duration-500 ease-luxury relative overflow-hidden hover:-translate-y-2 delay-100">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="flex justify-between items-start mb-8">
                        <div className="w-16 h-16 bg-slate-50 dark:bg-slate-700/50 rounded-2xl flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-red-500 group-hover:text-white transition-colors duration-500 border border-slate-100 dark:border-white/10 group-hover:border-red-500">
                            <Skull className="w-8 h-8 stroke-[1.5]" />
                        </div>
                        <span className="font-mono text-[10px] font-bold text-slate-300 dark:text-slate-600 border border-slate-100 dark:border-white/5 px-2 py-1 rounded-md uppercase tracking-widest group-hover:text-red-500 group-hover:border-red-200 transition-colors">Err_01</span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight transition-colors duration-500">Dopamine Fry</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-lg transition-colors duration-500">
                        Short-form videos (TikTok/Reels) shrink attention spans to <span className="inline-block text-slate-900 dark:text-white font-bold bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-base mx-0.5 border border-slate-200 dark:border-white/10">8 seconds</span>. We block the loops at the OS level.
                    </p>
                </div>

                 {/* Card 2: Focus Rot */}
                <div className="reveal-on-scroll group bg-white dark:bg-slate-800 p-10 rounded-[32px] border border-slate-200 dark:border-white/5 shadow-soft hover:shadow-2xl hover:border-slate-300 dark:hover:border-white/20 transition-all duration-500 ease-luxury relative overflow-hidden hover:-translate-y-2 delay-200">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="flex justify-between items-start mb-8">
                        <div className="w-16 h-16 bg-slate-50 dark:bg-slate-700/50 rounded-2xl flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-amber-500 group-hover:text-white transition-colors duration-500 border border-slate-100 dark:border-white/10 group-hover:border-amber-500">
                            <Brain className="w-8 h-8 stroke-[1.5]" />
                        </div>
                         <span className="font-mono text-[10px] font-bold text-slate-300 dark:text-slate-600 border border-slate-100 dark:border-white/5 px-2 py-1 rounded-md uppercase tracking-widest group-hover:text-amber-500 group-hover:border-amber-200 transition-colors">Err_02</span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight transition-colors duration-500">Focus Rot</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-lg transition-colors duration-500">
                        Constant notifications reduce IQ by <span className="inline-block text-slate-900 dark:text-white font-bold bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-base mx-0.5 border border-slate-200 dark:border-white/10">10 points</span>. DoomBlocker is silent by default. No buzzing, no pinging.
                    </p>
                </div>

                 {/* Card 3: Sleep Theft */}
                <div className="reveal-on-scroll group bg-white dark:bg-slate-800 p-10 rounded-[32px] border border-slate-200 dark:border-white/5 shadow-soft hover:shadow-2xl hover:border-slate-300 dark:hover:border-white/20 transition-all duration-500 ease-luxury relative overflow-hidden hover:-translate-y-2 delay-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="flex justify-between items-start mb-8">
                        <div className="w-16 h-16 bg-slate-50 dark:bg-slate-700/50 rounded-2xl flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-blue-500 group-hover:text-white transition-colors duration-500 border border-slate-100 dark:border-white/10 group-hover:border-blue-500">
                            <Moon className="w-8 h-8 stroke-[1.5]" />
                        </div>
                         <span className="font-mono text-[10px] font-bold text-slate-300 dark:text-slate-600 border border-slate-100 dark:border-white/5 px-2 py-1 rounded-md uppercase tracking-widest group-hover:text-blue-500 group-hover:border-blue-200 transition-colors">Err_03</span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight transition-colors duration-500">Sleep Theft</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-lg transition-colors duration-500">
                        Blue light destroys melatonin. Our "Bedtime Guardian" auto-dims screens and kills apps <span className="inline-block text-slate-900 dark:text-white font-bold bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-base mx-0.5 border border-slate-200 dark:border-white/10">after 8PM</span>.
                    </p>
                </div>

            </div>

        </div>
    </section>
  );
};

export default Problem;