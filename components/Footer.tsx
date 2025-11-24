import React from 'react';
import { Shield } from './Icons';

const Footer = () => {
  return (
    <footer className="bg-white pt-32 pb-12 border-t border-slate-100">
      <div className="container mx-auto px-6">
         
         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-24 reveal-on-scroll">
            <div className="col-span-2 lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                    <Shield className="w-5 h-5 text-slate-900" />
                    <span className="font-heading font-bold text-slate-900">DoomBlocker</span>
                </div>
                <p className="text-slate-500 text-lg max-w-sm mb-8 font-medium">
                    Reclaiming childhood from the digital void, one device at a time.
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 max-w-sm">
                    <div className="text-sm font-bold text-slate-900 mb-2">Free Parent Guide</div>
                    <p className="text-xs text-slate-500 mb-4">"How to talk to your angry teen about their phone."</p>
                    <div className="flex gap-2">
                         <input type="email" placeholder="Email Address" className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-900" />
                         <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold">→</button>
                    </div>
                </div>
            </div>

            <div>
                <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">Company</h4>
                <ul className="space-y-4 text-slate-500 font-medium text-sm">
                    <li><a href="#" className="hover:text-slate-900 transition-colors">Our Mission</a></li>
                    <li><a href="#" className="hover:text-slate-900 transition-colors">Safety Specs</a></li>
                    <li><a href="#" className="hover:text-slate-900 transition-colors">Parent Guide</a></li>
                    <li><a href="#" className="hover:text-slate-900 transition-colors">Support</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">Account</h4>
                <ul className="space-y-4 text-slate-500 font-medium text-sm">
                    <li><a href="#" className="hover:text-slate-900 transition-colors">Login</a></li>
                    <li><a href="#" className="hover:text-slate-900 transition-colors">Order Status</a></li>
                    <li><a href="#" className="hover:text-slate-900 transition-colors">Contact</a></li>
                </ul>
            </div>
         </div>

         <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400 font-medium">
             <div>© 2025 DoomBlocker Inc. No Tracking. No Ads. No BS.</div>
             <div className="flex gap-6">
                 <span>Privacy</span>
                 <span>Terms</span>
             </div>
         </div>
      </div>
    </footer>
  );
};

export default Footer;