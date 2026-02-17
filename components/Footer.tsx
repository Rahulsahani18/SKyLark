
import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex flex-col mb-8">
              <span className="text-[#C5A059] font-serif text-3xl font-bold tracking-tighter">HOTEL SKY LARK</span>
              <span className="text-[10px] text-stone-500 tracking-[0.4em] uppercase">Shangilla Restaurant</span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed max-w-sm mb-8">
              Experience the pinnacle of hospitality in Padrauna. Since 2004, we have dedicated ourselves to providing exceptional service and fine dining to our guests.
            </p>
            <div className="flex gap-6">
              {[Facebook, Instagram, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-500 hover:text-[#C5A059] hover:border-[#C5A059] transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-[#C5A059]">Quick Links</h4>
            <ul className="space-y-4 text-stone-500 text-sm">
              {['Home', 'About Us', 'Rooms & Suites', 'Shangilla Menu', 'Contact Us'].map((link) => (
                <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-[#C5A059]">Newsletter</h4>
            <p className="text-stone-500 text-xs mb-6">Join our exclusive mailing list for updates and seasonal offers.</p>
            <div className="relative">
              <input type="email" placeholder="Email Address" className="w-full bg-stone-900 border-none px-4 py-3 text-xs focus:ring-1 ring-[#C5A059] outline-none" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#C5A059] text-[10px] font-bold uppercase">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-600 text-[10px] uppercase tracking-widest">
            © 2024 Hotel Sky Lark & Shangilla Restaurant. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-stone-600 text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
