import React, { useState } from 'react';
import { Check } from './Icons';

const AgeProgression = () => {
  const [activeTab, setActiveTab] = useState<'starter' | 'pro'>('starter');

  return (
    <section id="how-it-works" className="py-40 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-heading font-semibold text-slate-900 mb-6 tracking-tight">
                    Level Up Responsibly
                </h2>
                <p className="text-slate-500 text-xl max-w-xl mx-auto font-medium">
                    Start strict. Loosen the leash as they prove they can handle it.
                </p>
            </div>

            {/* Toggle */}
            <div className="flex justify-center mb-20">
                <div className="bg-white p-1.5 rounded-full flex relative shadow-soft border border-slate-200">
                    <div 
                        className={`absolute top-1.5 bottom-1.5 w-[140px] bg-slate-900 rounded-full shadow-lg transition-all duration-500 ease-spring ${activeTab === 'starter' ? 'left-1.5' : 'left-[146px]'}`}
                    ></div>
                    
                    <button 
                        onClick={() => setActiveTab('starter')}
                        className={`w-[140px] py-3 rounded-full text-[13px] font-bold uppercase tracking-wider transition-colors z-10 relative ${activeTab === 'starter' ? 'text-white' : 'text-slate-500 hover:text-slate-900'}`}
                    >
                        Ages 8-12
                    </button>
                    <button 
                        onClick={() => setActiveTab('pro')}
                        className={`w-[140px] py-3 rounded-full text-[13px] font-bold uppercase tracking-wider transition-colors z-10 relative ${activeTab === 'pro' ? 'text-white' : 'text-slate-500 hover:text-slate-900'}`}
                    >
                        Ages 13-16
                    </button>
                </div>
            </div>

            {/* Content Card */}
            <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow-soft border border-slate-200 overflow-hidden flex flex-col md:flex-row min-h-[600px]">
                
                {/* Visual Half */}
                <div className={`w-full md:w-5/12 p-12 flex flex-col items-center justify-center relative transition-colors duration-700 border-r border-slate-100 ${activeTab === 'starter' ? 'bg-slate-50' : 'bg-slate-900'}`}>
                     <div className={`w-64 h-64 rounded-3xl shadow-2xl transition-all duration-700 ease-spring flex flex-col items-center justify-center border relative overflow-hidden ${activeTab === 'starter' ? 'bg-white rotate-0 scale-100 border-white shadow-soft' : 'bg-[#151516] rotate-3 scale-105 border-slate-800 shadow-2xl'}`}>
                         
                         {/* Fake Screen Content */}
                         <div className="text-center z-10">
                            <div className={`text-4xl font-heading font-bold mb-3 ${activeTab === 'starter' ? 'text-slate-900' : 'text-white'}`}>
                                {activeTab === 'starter' ? '09:41' : '21:30'}
                            </div>
                            <div className={`text-[10px] font-mono font-bold uppercase tracking-widest py-1.5 px-3 rounded-full ${activeTab === 'starter' ? 'bg-accent-primary/10 text-accent-primary' : 'bg-emerald-500/10 text-emerald-500'}`}>
                                {activeTab === 'starter' ? 'SAFE MODE: ON' : 'STUDY MODE'}
                            </div>
                         </div>

                     </div>
                </div>

                {/* Specs Half */}
                <div className="w-full md:w-7/12 p-12 md:p-20 flex flex-col justify-center">
                    <div className="animate-reveal">
                        <div className="flex items-center gap-3 mb-6">
                             <div className={`w-2 h-2 rounded-full ${activeTab === 'starter' ? 'bg-accent-primary' : 'bg-emerald-500'}`}></div>
                             <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
                                Model: DB-01X / {activeTab === 'starter' ? 'LOCKED' : 'UNLOCKED'}
                            </span>
                        </div>
                        
                        <h3 className="text-4xl font-heading font-bold text-slate-900 mb-6 tracking-tight">
                            {activeTab === 'starter' ? 'Lockdown Mode' : 'Controlled Independence'}
                        </h3>
                        <p className="text-slate-500 text-lg leading-relaxed font-medium mb-12 max-w-md">
                            {activeTab === 'starter' 
                                ? 'Pure communication. Zero distractions. The digital training wheels for peace of mind.' 
                                : 'Unlock essential utilities like Spotify, Maps, and Calculator. Social media remains hardware-blocked.'}
                        </p>
                        
                        {/* Technical Spec List */}
                        <div className="space-y-0 border-t border-slate-100">
                            {[
                                activeTab === 'starter' ? 'Calling & Texting Only' : 'Wikipedia Access',
                                activeTab === 'starter' ? 'No Internet Browser' : 'Music & Maps',
                                activeTab === 'starter' ? 'No App Store' : 'School Tools',
                                activeTab === 'starter' ? 'Bedtime: 8PM Hard Lock' : 'Flexible Curfew',
                                'GPS Tracking Always On',
                            ].map((feat, i) => (
                                <div key={i} className="flex items-center justify-between py-4 border-b border-slate-100 group">
                                    <span className="text-[15px] font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">{feat}</span>
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