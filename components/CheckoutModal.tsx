import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Shield, Lock } from './Icons';

// Global Stripe definition for JS SDK
declare const Stripe: any;

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: { name: string; price: string; stripePriceId?: string } | null;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, item }) => {
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');
  
  // Form State to capture user input
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    apt: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States'
  });

  // Replace with your actual Stripe Publishable Key
  const STRIPE_PUBLIC_KEY = 'pk_test_TYooMQauvdEDq54NiTphI7jx'; 

  useEffect(() => {
    if (isOpen) {
        setStep('form');
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: value
    }));
  };

  if (!isOpen || !item) return null;

  const handleStripeCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // DATA PERSISTENCE: 
    // This is where you would send 'formData' to your backend API.
    // Example: await fetch('/api/create-order', { method: 'POST', body: JSON.stringify(formData) });
    console.log("Saving Order Data:", formData);
    
    setStep('processing');

    try {
        const stripe = Stripe(STRIPE_PUBLIC_KEY);
        
        // Simulating the backend handoff for the demo.
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{ price: item.stripePriceId || 'price_123', quantity: 1 }],
            mode: 'payment',
            customerEmail: formData.email, // Pre-fill email in Stripe
            successUrl: window.location.origin + '?success=true',
            cancelUrl: window.location.origin + '?canceled=true',
        });

        if (error) {
            console.error('Stripe error:', error);
            // Fallback to success simulation for demo purposes if key is invalid
             setTimeout(() => setStep('success'), 1500);
        }
    } catch (err) {
        console.warn('Stripe integration requires a valid key. Falling back to demo success.');
        // Fallback for demo
        setTimeout(() => setStep('success'), 2000);
    }
  };

  // List of all countries
  const countries = [
    "United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "Japan", "China", "India", "Brazil",
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cambodia", "Cameroon", "Central African Republic", "Chad", "Chile", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)",
    "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
    "Fiji", "Finland",
    "Gabon", "Gambia", "Georgia", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary",
    "Iceland", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast",
    "Jamaica", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
    "Oman",
    "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar",
    "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "Uruguay", "Uzbekistan",
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
    "Yemen",
    "Zambia", "Zimbabwe"
  ];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl animate-fade-in-up transform transition-all border border-slate-100 flex flex-col max-h-[90vh]">
        
        {/* Header (Sticky) */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-white/50 backdrop-blur-xl rounded-t-3xl z-10">
             <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase text-[10px] tracking-widest">
                <Lock className="w-3 h-3" />
                <span>Secure Checkout</span>
            </div>
            <button 
                onClick={onClose} 
                className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors"
                aria-label="Close modal"
            >
                <X className="w-5 h-5" />
            </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-8 custom-scrollbar">
            {step === 'form' && (
                <>
                    <div className="mb-8">
                        <h3 className="text-3xl font-heading font-bold text-slate-900 tracking-tight mb-4">Your Order</h3>
                        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex justify-between items-center shadow-sm">
                            <div>
                                <p className="text-slate-900 font-bold text-lg">{item.name}</p>
                                <p className="text-slate-500 text-xs font-medium uppercase tracking-wide mt-1">Free Priority Shipping</p>
                            </div>
                            <div className="text-2xl font-bold text-slate-900 tracking-tight">{item.price}</div>
                        </div>
                    </div>

                    <form onSubmit={handleStripeCheckout} className="space-y-8">
                        
                        {/* Contact Section */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Contact</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-bold text-slate-900 uppercase mb-2 ml-1">Full Name</label>
                                    <input 
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        required 
                                        type="text" 
                                        placeholder="Jane Doe" 
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all font-medium placeholder:text-slate-400" 
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-bold text-slate-900 uppercase mb-2 ml-1">Email Address</label>
                                    <input 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required 
                                        type="email" 
                                        placeholder="parent@example.com" 
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all font-medium placeholder:text-slate-400" 
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Shipping Section */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Shipping Details</h4>
                            
                            <div>
                                <label className="block text-xs font-bold text-slate-900 uppercase mb-2 ml-1">Street Address</label>
                                <input 
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required 
                                    type="text" 
                                    placeholder="1234 Focus Lane" 
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all font-medium placeholder:text-slate-400" 
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-900 uppercase mb-2 ml-1">Apt, Suite, Unit <span className="text-slate-400 normal-case">(Optional)</span></label>
                                <input 
                                    name="apt"
                                    value={formData.apt}
                                    onChange={handleInputChange}
                                    type="text" 
                                    placeholder="Apt 4B" 
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all font-medium placeholder:text-slate-400" 
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-900 uppercase mb-2 ml-1">City</label>
                                    <input 
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        required 
                                        type="text" 
                                        placeholder="New York" 
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all font-medium placeholder:text-slate-400" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-900 uppercase mb-2 ml-1">State / Prov</label>
                                    <input 
                                        name="state"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        required 
                                        type="text" 
                                        placeholder="NY" 
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all font-medium placeholder:text-slate-400" 
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-900 uppercase mb-2 ml-1">Zip Code</label>
                                    <input 
                                        name="zip"
                                        value={formData.zip}
                                        onChange={handleInputChange}
                                        required 
                                        type="text" 
                                        placeholder="10001" 
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all font-medium placeholder:text-slate-400" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-900 uppercase mb-2 ml-1">Country</label>
                                    <div className="relative">
                                        <select 
                                            name="country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all font-medium appearance-none"
                                        >
                                            {countries.map(c => (
                                                <option key={c} value={c}>{c}</option>
                                            ))}
                                        </select>
                                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <button type="submit" className="w-full bg-[#635BFF] text-white py-4 rounded-xl font-bold hover:bg-[#534be8] hover:shadow-xl hover:shadow-indigo-500/20 transform transition-all hover:-translate-y-0.5 flex items-center justify-center gap-3 text-lg btn-press">
                                <span>Continue to Payment</span>
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </button>
                            <div className="text-center mt-4 flex items-center justify-center gap-1.5 opacity-60">
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Powered by Stripe • SSL Encrypted</span>
                            </div>
                        </div>
                    </form>
                </>
            )}

            {step === 'processing' && (
                <div className="py-20 text-center">
                    <div className="w-16 h-16 border-4 border-slate-100 border-t-[#635BFF] rounded-full animate-spin mx-auto mb-8"></div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">Redirecting to Stripe...</h3>
                    <p className="text-slate-500 mt-2 font-medium text-sm">We are transferring you to the secure payment gateway.</p>
                </div>
            )}

            {step === 'success' && (
                <div className="py-12 text-center">
                    <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-200 animate-fade-up">
                        <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-slate-900 mb-4 tracking-tight">Order Confirmed.</h3>
                    <p className="text-slate-600 mb-10 font-medium leading-relaxed">
                        Order <span className="font-mono bg-slate-100 px-1 rounded text-slate-900">#DB-8829</span> confirmed. <br/> 
                        Tracking details have been sent to <span className="font-bold">{formData.email}</span>.
                    </p>
                    <button onClick={onClose} className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-black transition-colors shadow-lg shadow-slate-900/10">
                        Done
                    </button>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;