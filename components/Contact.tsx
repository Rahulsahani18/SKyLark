
import React, { useState } from 'react';
import { Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#F8F5F0] relative overflow-hidden">
      {/* Decorative Text in background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 select-none opacity-[0.03] text-9xl font-serif whitespace-nowrap pointer-events-none">
        GET IN TOUCH • RESERVATIONS • SKY LARK
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
        <div>
          <span className="text-[#C5A059] font-bold tracking-[0.3em] uppercase text-xs block mb-4">Contact</span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">Start Your Journey <br /> With Us Today</h2>
          
          <div className="space-y-10 mt-12">
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-white shadow-lg flex items-center justify-center text-[#C5A059] flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Call for Booking</p>
                <a href="tel:+915564245546" className="text-2xl font-serif text-stone-800 hover:text-[#C5A059] transition-colors">+91 5564 245 546</a>
                <p className="text-xs text-stone-400 mt-1">Available 24/7 for guest assistance.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 bg-white shadow-lg flex items-center justify-center text-[#C5A059] flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Visit Us</p>
                <address className="not-italic text-stone-800 text-lg font-serif leading-relaxed">
                  Gayatri Nagar, Kasia Road, <br />
                  Khushi Nagar, Padrauna-274304, UP
                </address>
              </div>
            </div>
          </div>

          <div className="mt-16 h-[300px] bg-stone-200 rounded-sm relative group cursor-pointer overflow-hidden shadow-2xl">
            <img 
               src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
               className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
               alt="Map View"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
              <div className="bg-white px-6 py-3 text-black font-bold text-[10px] tracking-widest uppercase shadow-xl flex items-center gap-3">
                <MapPin size={14} className="text-[#C5A059]" /> Open In Google Maps
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <form 
            onSubmit={handleSubmit}
            className="bg-white p-10 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-sm border-t-4 border-[#C5A059] space-y-6 relative"
          >
            {formState === 'success' && (
              <div className="absolute inset-0 bg-white z-50 flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-serif text-stone-900 mb-2">Thank You!</h3>
                <p className="text-stone-500 max-w-xs mx-auto mb-8">Your inquiry has been received. Our concierge will contact you shortly.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.2em] border-b border-[#C5A059]"
                >
                  Send another message
                </button>
              </div>
            )}

            <div className="text-center mb-10">
              <h3 className="text-2xl font-serif text-stone-900 uppercase tracking-tight mb-2">Reservation Inquiry</h3>
              <p className="text-xs text-stone-400">Response guaranteed within 30 minutes</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest ml-1">Full Name</label>
                <input required type="text" className="w-full bg-stone-50 border-none px-4 py-4 focus:ring-2 ring-[#C5A059] transition-all outline-none" placeholder="Enter your name" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest ml-1">Phone Number</label>
                <input required type="tel" className="w-full bg-stone-50 border-none px-4 py-4 focus:ring-2 ring-[#C5A059] transition-all outline-none" placeholder="+91 XXXX XXX XXX" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest ml-1">Preferred Room Type</label>
              <select className="w-full bg-stone-50 border-none px-4 py-4 focus:ring-2 ring-[#C5A059] transition-all outline-none appearance-none">
                <option>Deluxe Room</option>
                <option>Executive Suite</option>
                <option>Family Room</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest ml-1">Message / Special Requests</label>
              <textarea rows={4} className="w-full bg-stone-50 border-none px-4 py-4 focus:ring-2 ring-[#C5A059] transition-all outline-none resize-none" placeholder="Tell us about your requirements..."></textarea>
            </div>

            <button 
              disabled={formState === 'submitting'}
              className="w-full bg-[#1A1A1A] text-white py-5 font-bold tracking-[0.3em] text-xs hover:bg-[#C5A059] transition-all flex items-center justify-center gap-3 group"
            >
              {formState === 'submitting' ? 'PROCESSING...' : (
                <>SEND INQUIRY <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
