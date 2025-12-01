import React from 'react';
import { Star } from './Icons';

const Testimonials = () => {
  return (
    <section className="py-40 bg-[#FBFBFD] border-t border-slate-100">
        <div className="container mx-auto px-6">
            <h2 className="text-center text-4xl font-heading font-semibold text-slate-900 mb-24 tracking-tight reveal-on-scroll">
                Parents Are Relieved.
            </h2>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {[
                    { 
                        text: "I got my son back. He actually looks me in the eye at dinner now.", 
                        author: "Sarah J.", 
                        role: "Mom of 2",
                        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100"
                    },
                    { 
                        text: "The peace of mind is worth 10x the price. No secret chats, no bullying apps.", 
                        author: "Mike T.", 
                        role: "High School Teacher",
                        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100"
                    },
                    { 
                        text: "Built like a tank. My kid threw it against the wall when he couldn't download TikTok. Phone survived, addiction didn't.", 
                        author: "David R.", 
                        role: "Dad of 3",
                        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"
                    },
                    { 
                        text: "Finally a company that isn't trying to monetize my child's attention.", 
                        author: "Elena K.", 
                        role: "Child Psychologist",
                        image: "https://images.unsplash.com/photo-1554151228-14d9def656ec?auto=format&fit=crop&w=100&h=100"
                    },
                    { 
                        text: "Simple, rugged, and effective. The battery lasts forever.", 
                        author: "James P.", 
                        role: "Tech Reviewer",
                        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100"
                    },
                ].map((t, i) => (
                    <div key={i} className="break-inside-avoid bg-white p-8 rounded-3xl shadow-sm border border-slate-100 reveal-on-scroll hover:shadow-md transition-shadow duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                        <div className="flex gap-1 mb-6 text-accent-primary opacity-100">
                            {[1,2,3,4,5].map(star => <React.Fragment key={star}><Star className="w-3.5 h-3.5 fill-current" /></React.Fragment>)}
                        </div>
                        <p className="text-xl text-slate-800 font-medium leading-relaxed mb-6 tracking-tight">"{t.text}"</p>
                        <div className="flex items-center gap-3">
                            <img 
                                src={t.image} 
                                alt={t.author} 
                                className="w-10 h-10 rounded-full object-cover border border-slate-100"
                            />
                            <div>
                                <div className="text-sm font-bold text-slate-900">{t.author}</div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Testimonials;