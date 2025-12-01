import React, { useState, useRef } from 'react';
import { PricingTier } from '../types';
import { Check, Shield, Signal, X } from './Icons';
import CheckoutModal from './CheckoutModal';

const tiers: PricingTier[] = [
    { 
        name: "Sim Only", 
        price: "$25", 
        features: ["Unlimited Talk & Text", "Nationwide Coverage", "Cancel Anytime", "Bring Your Own Device"], 
        color: "border-slate-200",
        cta: "Get Sim",
        stripePriceId: "price_sim_only_test"
    },
    { 
        name: "The Phone", 
        price: "$199", 
        features: ["DoomBlocker Handset", "Charger & Case", "1 Year Warranty", "30 Day Money Back"], 
        color: "border-slate-900",
        cta: "Order Device",
        popular: true,
        stripePriceId: "price_device_test"
    },
    { 
        name: "Bundle", 
        price: "$299", 
        features: ["2x DoomBlocker Phones", "Family Dashboard", "Priority Support", "Lost Phone Insurance", "Save $100"], 
        color: "border-slate-200",
        cta: "Get Bundle",
        stripePriceId: "price_bundle_test"
    }
];

const Pricing = () => {
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleInput = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    let clientX, clientY;
    if ('touches' in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    } else {
        clientX = (e as React.MouseEvent).clientX;
        clientY = (e as React.MouseEvent).clientY;
    }

    const rect = cardRef.current.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width;
    const y = (clientY - rect.top) / rect.height;
    setRotate({ x: (0.5 - y) * 10, y: (x - 0.5) * 10 });
  };

  const handleEnd = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section id="pricing" className="py-40 bg-white border-t border-slate-100">
         <div className="container mx-auto px-6">
             <div className="text-center mb-24 reveal-on-scroll">
                <h2 className="text-5xl font-heading font-semibold text-slate-900 mb-6 tracking-tighter">
                    Cheaper Than <br/>
                    <span className="text-accent-primary">Therapy.</span>
                </h2>
                <p className="text-xl text-slate-500 font-medium">Invest in their future, not their dopamine addiction.</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center perspective-[2000px]">
                 {tiers.map((tier, idx) => (
                     <div 
                        key={idx} 
                        ref={tier.popular ? cardRef : null}
                        onMouseMove={tier.popular ? handleInput : undefined}
                        onMouseLeave={handleEnd}
                        onTouchMove={tier.popular ? handleInput : undefined}
                        onTouchEnd={handleEnd}
                        className={`reveal-on-scroll relative p-10 rounded-[40px] transition-all duration-300 ease-out flex flex-col group ${
                            tier.popular 
                            ? 'bg-slate-50 ring-1 ring-slate-900/5 shadow-2xl z-10' 
                            : 'bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg'
                        }`}
                        style={{ 
                            transitionDelay: `${idx * 150}ms`,
                            transform: tier.popular 
                                ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.1, 1.1, 1.1)` 
                                : undefined
                        }}
                     >
                        {/* Holographic Effect for Popular Tier */}
                        {tier.popular && (
                            <div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 holographic-sheen mix-blend-soft-light rounded-[40px]"
                                style={{
                                    background: `linear-gradient(${115 + rotate.y * 2}deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)`
                                }}
                            ></div>
                        )}

                        <div className="mb-8 relative z-10">
                            {tier.popular && (
                                <span className="inline-block px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest mb-4 shadow-md transform group-hover:translate-y-1 transition-transform duration-300">
                                    Best Value
                                </span>
                            )}
                            <h3 className="text-2xl font-bold mb-2 tracking-tight text-slate-900">{tier.name}</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl font-heading font-bold tracking-tighter text-slate-900">{tier.price}</span>
                            </div>
                        </div>

                        <div className="space-y-5 flex-1 mb-12 relative z-10">
                            {tier.features.map((feat, i) => (
                                <div key={i} className="flex items-center gap-4 group-hover:translate-x-1 transition-transform duration-500 ease-spring" style={{ transitionDelay: `${i * 50}ms` }}>
                                    <div className={`w-5 h-5 flex items-center justify-center rounded-full ${tier.popular ? 'bg-accent-primary/10 text-accent-primary' : 'bg-slate-100 text-slate-400'}`}>
                                         <Check className="w-3 h-3 stroke-[3]" />
                                    </div>
                                    <span className="text-[14px] font-medium text-slate-700">{feat}</span>
                                </div>
                            ))}
                        </div>
                        
                        <button 
                            onClick={() => setSelectedTier(tier)}
                            className={`w-full py-4 rounded-full font-bold text-[15px] transition-all duration-300 ease-luxury btn-press relative z-10 shadow-xl ${
                                tier.popular 
                                ? 'bg-slate-900 text-white hover:bg-black shadow-slate-900/10' 
                                : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50'
                            }`}
                        >
                            {tier.cta}
                        </button>
                     </div>
                 ))}
             </div>
             
             <div className="text-center mt-12 text-xs font-bold text-slate-400 uppercase tracking-widest">
                 * Requires 12-month contract for subsidized pricing. Shipping worldwide.
             </div>
        </div>

        <CheckoutModal 
            isOpen={!!selectedTier} 
            onClose={() => setSelectedTier(null)} 
            item={selectedTier}
        />
    </section>
  );
};

export default Pricing;