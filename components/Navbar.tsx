
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Body scroll lock logic to prevent background movement
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
    }
    return () => { 
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { label: 'About Us', href: '#about', subtitle: 'Our 20 Year Legacy' },
    { label: 'Rooms', href: '#rooms', subtitle: 'Luxury Accommodations' },
    { label: 'Dining', href: '#restaurant', subtitle: 'Shangilla Restaurant' },
    { label: 'Contact', href: '#contact', subtitle: 'Get In Touch' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-[150] transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-[#1A1A1A]/95 backdrop-blur-xl py-3 shadow-2xl border-b border-[#C5A059]/10' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-[#C5A059] font-serif text-xl md:text-2xl font-bold tracking-tighter leading-tight group-hover:text-white transition-colors">
              HOTEL SKY LARK
            </span>
            <span className="text-[8px] md:text-[9px] text-stone-400 tracking-[0.4em] uppercase font-bold">
              Padrauna Heritage
            </span>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link, i) => (
              <motion.a 
                key={link.label} 
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative text-stone-300 hover:text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.2em] transition-all group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
            <motion.a 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
              whileTap={{ scale: 0.95 }}
              href="tel:+915564245546" 
              className="bg-[#C5A059] text-black px-8 py-3 flex items-center gap-2 font-bold text-[10px] tracking-[0.2em] transition-all duration-300 shadow-xl"
            >
              <Phone size={12} /> BOOK NOW
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-[#C5A059] p-2 focus:outline-none" 
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={32} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#1A1A1A] flex flex-col"
          >
            {/* Menu Header */}
            <div className="flex justify-between items-center p-8 border-b border-white/5">
              <div className="flex flex-col">
                <span className="text-[#C5A059] font-serif text-lg font-bold tracking-tighter">HOTEL SKY LARK</span>
                <span className="text-[8px] text-stone-500 tracking-[0.3em] uppercase">Legacy Since 2004</span>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-white p-2 hover:bg-white/5 rounded-full transition-colors flex items-center gap-2"
              >
                <span className="text-[10px] font-bold tracking-widest uppercase text-stone-400">Close</span>
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-grow flex flex-col justify-center px-10 space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                >
                  <a 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex flex-col"
                  >
                    <span className="text-[10px] text-[#C5A059] font-bold uppercase tracking-[0.3em] mb-1 opacity-50 group-hover:opacity-100 transition-opacity">
                      {link.subtitle}
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="text-5xl font-serif text-white group-hover:text-[#C5A059] transition-colors">
                        {link.label}
                      </span>
                      <ArrowRight className="text-[#C5A059] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" size={32} />
                    </div>
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-10 border-t border-white/5"
              >
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:+915564245546" 
                  className="bg-[#C5A059] text-black w-full py-5 flex items-center justify-center gap-4 font-bold text-sm tracking-[0.3em] shadow-2xl border-b-2 border-black/10"
                >
                  <Phone size={18} strokeWidth={2.5} /> 
                  <span>CALL FOR RESERVATIONS</span>
                </motion.a>
              </motion.div>
            </div>

            {/* Bottom Footer Area */}
            <div className="p-10 text-center">
              <p className="text-stone-600 text-[10px] uppercase tracking-[0.4em]">
                Padrauna • Uttar Pradesh • India
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
