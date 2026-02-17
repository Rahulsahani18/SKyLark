
import React from 'react';
import { ChevronRight, Wifi, Coffee, Wind, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';

const ROOMS = [
  {
    title: "Deluxe Heritage Room",
    price: "₹1,800 / night",
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800",
    desc: "Experience the perfect blend of tradition and comfort in our signature deluxe rooms.",
    amenities: [<Wifi size={14}/>, <Wind size={14}/>, <Monitor size={14}/>]
  },
  {
    title: "Executive Business Suite",
    price: "₹2,500 / night",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
    desc: "Designed for the modern professional, offering extra space and a dedicated work area.",
    amenities: [<Wifi size={14}/>, <Coffee size={14}/>, <Wind size={14}/>, <Monitor size={14}/>]
  },
  {
    title: "Family Connect Suite",
    price: "₹3,200 / night",
    img: "https://images.unsplash.com/photo-1591088398332-8a7701972843?auto=format&fit=crop&q=80&w=800",
    desc: "Spacious interconnected rooms ideal for families seeking comfort and togetherness.",
    amenities: [<Wifi size={14}/>, <Wind size={14}/>, <Monitor size={14}/>]
  }
];

const Rooms: React.FC = () => {
  return (
    <section id="rooms" className="py-24 bg-[#1A1A1A] text-white section-reveal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <span className="text-[#C5A059] font-bold tracking-[0.3em] uppercase text-xs block mb-4">Accommodation</span>
            <h2 className="text-4xl md:text-5xl font-serif">A Sanctuary of Comfort</h2>
            <p className="text-stone-400 mt-6 leading-relaxed">
              Our rooms are meticulously designed to provide a serene atmosphere, featuring premium bedding and modern amenities for both AC and Non-AC preferences.
            </p>
          </div>
          <motion.button 
            whileHover={{ letterSpacing: '0.3em' }}
            className="text-[#C5A059] border-b border-[#C5A059] pb-1 text-xs font-bold tracking-widest uppercase transition-all"
          >
            View All Rooms
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {ROOMS.map((room, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[450px] overflow-hidden rounded-sm shadow-2xl">
                <motion.img 
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.8 }}
                  src={room.img} 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" 
                  alt={room.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest">{room.price}</span>
                  <h3 className="text-2xl font-serif mt-2 mb-4">{room.title}</h3>
                  
                  <div className="flex gap-4 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {room.amenities.map((icon, i) => (
                      <div key={i} className="text-[#C5A059] bg-white/5 p-2 rounded-full">{icon}</div>
                    ))}
                  </div>

                  <motion.button 
                    whileHover={{ backgroundColor: '#C5A059', color: '#000', borderColor: '#C5A059' }}
                    className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase border border-white/20 px-6 py-3 transition-all"
                  >
                    Explore <ChevronRight size={12} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
