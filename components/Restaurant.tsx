
import React from 'react';
import { UtensilsCrossed } from 'lucide-react';
import { motion } from 'framer-motion';

const MENU_DATA = [
  {
    category: "Signature Starters",
    items: [
      { name: "Paneer Tikka Angara", price: "220", desc: "Smoky cottage cheese marinated in secret spices." },
      { name: "Chicken 65", price: "280", desc: "Spicy deep-fried chicken, a South Indian delight." },
      { name: "Crispy Corn Pepper", price: "180", desc: "Tender corn kernels tossed with black pepper." },
    ]
  },
  {
    category: "Main Course Delights",
    items: [
      { name: "Dal Makhani", price: "240", desc: "Black lentils slow-cooked overnight." },
      { name: "Mutton Rogan Josh", price: "450", desc: "Kashmiri style aromatic goat meat curry." },
      { name: "Shangilla Special Biryani", price: "350", desc: "Our house specialty with fragrant basmati rice." },
    ]
  }
];

const Restaurant: React.FC = () => {
  return (
    <section id="restaurant" className="py-24 px-6 bg-[#F8F5F0] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#C5A059] font-bold tracking-[0.3em] uppercase text-xs block mb-4">Fine Dining</span>
          <h2 className="text-5xl md:text-6xl font-serif text-stone-900 mb-6">Shangilla Restaurant</h2>
          <p className="text-stone-500 italic text-lg max-w-2xl mx-auto">
            "A culinary journey through North India, China, and the Mughal Courts."
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-12">
            {MENU_DATA.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-8 md:p-12 shadow-2xl rounded-sm border-t-4 border-[#C5A059]"
              >
                <h3 className="text-2xl font-serif mb-10 pb-4 border-b border-stone-100 flex items-center justify-between">
                  {cat.category}
                  <UtensilsCrossed size={20} className="text-[#C5A059]/40" />
                </h3>
                <div className="space-y-8">
                  {cat.items.map((item, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 5 }}
                      className="group cursor-default"
                    >
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="text-lg font-bold text-stone-800 group-hover:text-[#C5A059] transition-colors">{item.name}</span>
                        <div className="flex-grow mx-4 border-b border-dotted border-stone-200"></div>
                        <span className="font-serif font-bold text-[#C5A059]">₹{item.price}</span>
                      </div>
                      <p className="text-xs text-stone-400 italic">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 h-full">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600" className="w-full h-64 object-cover rounded-sm shadow-lg hover:scale-[1.02] transition-transform" alt="Cocktail" />
              <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=600" className="w-full h-[350px] object-cover rounded-sm shadow-lg hover:scale-[1.02] transition-transform" alt="Fine Dining" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-12 space-y-4"
            >
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600" className="w-full h-[400px] object-cover rounded-sm shadow-lg hover:scale-[1.02] transition-transform" alt="Food" />
              <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=600" className="w-full h-60 object-cover rounded-sm shadow-lg hover:scale-[1.02] transition-transform" alt="Restaurant Interior" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
