
import React from 'react';
import { Star, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920" 
          className="w-full h-full object-cover grayscale-[20%]"
          alt="Luxury Hotel"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#F8F5F0]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="inline-block mb-6 px-4 py-2 border border-[#C5A059]/30 rounded-full text-[#C5A059] text-[9px] md:text-xs tracking-[0.4em] uppercase font-bold bg-black/40 backdrop-blur-md"
        >
          Established 2004 • Padrauna
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-7xl md:text-9xl font-serif text-white mb-8 leading-[0.9] drop-shadow-2xl"
        >
          Sky <br className="md:hidden" /> Lark
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10">
            <div className="flex text-[#C5A059] gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill={i < 4 ? "#C5A059" : "none"} className={i === 4 ? "opacity-30" : ""} />
              ))}
            </div>
            <div className="w-[1px] h-4 bg-white/20"></div>
            <span className="text-white font-bold text-xs tracking-widest uppercase">4.0 Excellent</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a 
            whileHover={{ scale: 1.02, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#rooms" 
            className="bg-[#C5A059] text-black px-10 py-5 font-bold text-[11px] tracking-[0.3em] uppercase shadow-2xl transition-all"
          >
            Discover Rooms
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.02, translateY: -2, backgroundColor: 'rgba(255,255,255,1)', color: '#000' }}
            whileTap={{ scale: 0.98 }}
            href="#restaurant" 
            className="border border-white/30 text-white px-10 py-5 font-bold text-[11px] tracking-[0.3em] uppercase transition-all backdrop-blur-md"
          >
            Dine With Us
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-pulse"
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default Hero;
