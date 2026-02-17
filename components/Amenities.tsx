
import React from 'react';
import { Coffee, Car, Wind, Utensils, Clock, Dumbbell, Baby, ShieldCheck } from 'lucide-react';

const AMENITIES = [
  { icon: <Coffee />, label: "Complimentary Breakfast" },
  { icon: <Car />, label: "Safe Parking" },
  { icon: <Wind />, label: "AC & Non-AC Rooms" },
  { icon: <Utensils />, label: "Room Service" },
  { icon: <Clock />, label: "Laundry Service" },
  { icon: <Dumbbell />, label: "Fitness Area" },
  { icon: <Baby />, label: "Kid Friendly" },
  { icon: <ShieldCheck />, label: "24/7 Security" },
];

const Amenities: React.FC = () => {
  return (
    <section className="py-24 bg-[#1A1A1A] text-white border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[#C5A059] font-bold tracking-[0.3em] uppercase text-xs block mb-4">Guest Services</span>
          <h2 className="text-4xl md:text-5xl font-serif">Unparalleled Amenities</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">
          {AMENITIES.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059] mb-6 group-hover:bg-[#C5A059] group-hover:text-black transition-all duration-500 group-hover:scale-110 shadow-lg">
                {/* Fixed TypeScript error by defining the expected props type for the cloned element */}
                {React.cloneElement(item.icon as React.ReactElement<{ size?: number }>, { size: 28 })}
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 group-hover:text-white transition-colors">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
