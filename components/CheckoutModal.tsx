import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Shield, Lock } from './Icons';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: { name: string; price: string } | null;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, item }) => {
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');

  useEffect(() => {
    if (isOpen) setStep('form');
  }, [isOpen]);

  if (!isOpen || !item) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    setTimeout(() => setStep('success'), 2000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 animate-fade-in-up transform transition-all border border-slate-100">
        <button 
            onClick={onClose} 
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors"
            aria-label="Close modal"
        >
            <X className="w-5 h-5" />
        </button>

        {step === 'form' && (
            <>
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-2 text-accent-blue font-bold uppercase text-xs tracking-widest">
                        <Lock className="w-4 h-4" />
                        <span>Encrypted SSL</span>
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-slate-900 tracking-tight">Reserve Order</h3>
                    <p className="text-slate-500 text-sm mt-2 font-medium">Item: <span className="text-slate-900">{item.name}</span></p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-xs font-bold text-slate-900 uppercase mb-2 ml-1">Email Address</label>
                        <input required type="email" placeholder="you@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all font-medium placeholder:text-slate-400" />
                    </div>
                    
                    <div>
                        <label className="block text-xs font-bold text-slate-900 uppercase mb-2 ml-1">Shipping Address</label>
                        <input required type="text" placeholder="Street address" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all font-medium placeholder:text-slate-400" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                             <label className="block text-xs font-bold text-slate-900 uppercase mb-2 ml-1">Card Number</label>
                             <input required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all font-medium placeholder:text-slate-400" />
                        </div>
                         <div>
                             <label className="block text-xs font-bold text-slate-900 uppercase mb-2 ml-1">CVC</label>
                             <input required type="text" placeholder="123" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all font-medium placeholder:text-slate-400" />
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-accent-primary hover:shadow-xl transform transition-all hover:-translate-y-0.5 mt-8 flex items-center justify-center gap-3 text-lg">
                        Pay {item.price}
                    </button>
                    
                    <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-6">
                        <Shield className="w-3 h-3" />
                        <span>30-Day Money Back Guarantee</span>
                    </div>
                </form>
            </>
        )}

        {step === 'processing' && (
            <div className="py-20 text-center">
                <div className="w-16 h-16 border-4 border-slate-100 border-t-slate-900 rounded-full animate-spin mx-auto mb-8"></div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">Processing Payment...</h3>
                <p className="text-slate-500 mt-2 font-medium text-sm">Confirming availability</p>
            </div>
        )}

        {step === 'success' && (
            <div className="py-12 text-center">
                <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-200">
                    <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-slate-900 mb-4 tracking-tight">You're in.</h3>
                <p className="text-slate-600 mb-10 font-medium">Order #DB-8829 confirmed. <br/> Check your email for shipping updates.</p>
                <button onClick={onClose} className="w-full bg-slate-100 text-slate-900 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                    Close
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;