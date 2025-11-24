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
                    { text: "I got my son back. He actually looks me in the eye at dinner now.", author: "Sarah J.", role: "Mom of 2" },
                    { text: "The peace of mind is worth 10x the price. No secret chats, no bullying apps.", author: "Mike T.", role: "High School Teacher" },
                    { text: "Built like a tank. My kid threw it against the wall when he couldn't download TikTok. Phone survived, addiction didn't.", author: "David R.", role: "Dad of 3" },
                    { text: "Finally a company that isn't trying to monetize my child's attention.", author: "Elena K.", role: "Child Psychologist" },
                    { text: "Simple, rugged, and effective. The battery lasts forever.", author: "James P.", role: "Tech Reviewer" },
                ].map((t, i) => (
                    <div key={i} className="break-inside-avoid bg-white p-8 rounded-3xl shadow-sm border border-slate-100 reveal-on-scroll hover:shadow-md transition-shadow duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                        <div className="flex gap-1 mb-6 text-accent-primary opacity-100">
                            {[1,2,3,4,5].map(star => <React.Fragment key={star}><Star className="w-3.5 h-3.5 fill-current" /></React.Fragment>)}
                        </div>
                        <p className="text-xl text-slate-800 font-medium leading-relaxed mb-6 tracking-tight">"{t.text}"</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">
                                {t.author.charAt(0)}
                            </div>
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