import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedVehicles from './components/FeaturedVehicles';
import Technology from './components/Technology';
import Comparison from './components/Comparison';
import Services from './components/Services';
import Footer from './components/Footer';
import Configurator from './components/Configurator';
import ContactForm from './components/ContactForm';
import { motion, useScroll, useSpring } from 'motion/react';
import { useState } from 'react';
import { Vehicle, vehicles } from './data/vehicles';

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [configuratorOpen, setConfiguratorOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const openConfigurator = (vehicleId?: string) => {
    const vehicle = vehicleId 
      ? vehicles.find(v => v.id === vehicleId) 
      : vehicles[0];
    
    if (vehicle) {
      setSelectedVehicle(vehicle);
      setConfiguratorOpen(true);
    }
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-cyan origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navbar onContact={() => setContactOpen(true)} />
      
      <main>
        <Hero onConfigure={openConfigurator} />

        <Services />

        <FeaturedVehicles onConfigure={openConfigurator} />
        <Technology />

        <Comparison />

        {/* CTA Section */}
        <section className="py-32 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black -z-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-cyan/[0.1] to-green-500/[0.05] -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <span className="text-brand-cyan tracking-[0.6em] uppercase text-[11px] mb-8 block font-bold">Join The Revolution</span>
            <h2 className="text-6xl md:text-[140px] font-sans font-light leading-[0.8] tracking-[-0.06em] mb-8 text-white">
              SUSTAINABLE <br />
              <span className="text-white opacity-20 italic font-normal">MOBILITY.</span>
            </h2>
            <p className="text-black/60 max-w-2xl mx-auto mb-16 text-lg">
              From ₹35,000 to ₹1,20,000. Explore our range of RTO and Non-RTO electric two-wheelers designed for every commute need.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <button
                onClick={() => openConfigurator()}
                className="px-16 py-7 bg-white text-black font-bold rounded-full text-[11px] uppercase tracking-[0.3em] hover:bg-brand-cyan hover:text-white transition-all shadow-2xl active:scale-95"
              >
                Explore Now
              </button>
              <button
                onClick={() => setContactOpen(true)}
                className="px-16 py-7 glass border-white/20 text-white font-bold rounded-full text-[11px] uppercase tracking-[0.3em] hover:bg-white/10 transition-all"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />

      <Configurator 
        vehicle={selectedVehicle} 
        isOpen={configuratorOpen} 
        onClose={() => setConfiguratorOpen(false)} 
      />

      <ContactForm 
        isOpen={contactOpen} 
        onClose={() => setContactOpen(false)} 
      />
    </div>
  );
}
