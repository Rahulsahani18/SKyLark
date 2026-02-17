
import React from 'react';
import { ShieldCheck, MapPin, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden section-reveal">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-[600px] object-cover"
              alt="Hotel Heritage"
            />
          </div>
          {/* Decorative Elements */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="absolute -bottom-10 -right-10 bg-[#C5A059] p-12 hidden lg:block z-20 shadow-xl"
          >
            <p className="text-black font-serif text-6xl font-bold leading-none">20+</p>
            <p className="text-black text-[10px] uppercase tracking-[0.2em] font-bold mt-2">Years of Legacy</p>
          </motion.div>
          <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-[#C5A059]/30"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <span className="text-[#C5A059] font-bold tracking-[0.3em] uppercase text-xs block mb-4">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
              Crafting Memorable <br /> Stays Since 2004
            </h2>
          </div>

          <p className="text-stone-600 leading-relaxed text-lg">
            For over two decades, Hotel Sky Lark has been the sanctuary of choice for travelers visiting Padrauna. We take pride in our ability to merge traditional hospitality with modern convenience, ensuring every guest feels at home.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: <ShieldCheck size={28} />, title: "Trusted Safe", desc: "Gated security and 24/7 staff support for your peace of mind." },
              { icon: <Award size={28} />, title: "Best in Region", desc: "Consistently rated as the top hospitality choice in Khushi Nagar." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ translateY: -5 }}
                className="flex items-start gap-4 p-6 bg-stone-50 rounded-sm transition-all hover:shadow-lg"
              >
                <div className="text-[#C5A059]">{feature.icon}</div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm tracking-wide mb-1 uppercase">{feature.title}</h4>
                  <p className="text-xs text-stone-500 leading-normal">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            whileHover={{ x: 10 }}
            className="flex items-center gap-4 text-[#C5A059] font-bold text-xs tracking-[0.2em] uppercase cursor-pointer group w-fit"
          >
            <span className="border-b border-transparent group-hover:border-[#C5A059] transition-all">Learn More About Us</span>
            <span>→</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
