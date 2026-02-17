
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Restaurant from './components/Restaurant';
import Amenities from './components/Amenities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIConcierge from './components/AIConcierge';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <Hero />
        <About />
        <Rooms />
        <Restaurant />
        <Amenities />
        <Contact />
      </main>

      <Footer />
      
      {/* Floating AI Concierge */}
      <AIConcierge />
    </div>
  );
};

export default App;
