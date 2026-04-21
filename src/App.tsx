import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedVehicles from './components/FeaturedVehicles';
import Technology from './components/Technology';
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
        
        {/* Services & Support Section */}
        <section id="services" className="py-40 px-6 relative overflow-hidden bg-transparent">
          {/* Subtle atmospheric background element */}
          <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-brand-cyan/[0.03] blur-[150px] rounded-full -z-10" />

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24 relative z-10">
            <div className="flex-1 order-2 lg:order-1">
              <div className="relative group">
                <div className="relative z-10 rounded-[48px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-black/5 aspect-[4/5] md:aspect-square">
                  <motion.img
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src="https://images.unsplash.com/photo-1549421263-5407dc339385?auto=format&fit=crop&q=80&w=1200"
                    alt="Service Center"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative Float Labels */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  className="absolute -top-6 -right-6 glass px-6 py-4 rounded-3xl shadow-xl z-20 hidden md:block"
                >
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-cyan mb-1">Axigear Care</p>
                  <p className="text-sm font-display italic">Expert Support</p>
                </motion.div>
                <div className="absolute -bottom-10 -left-10 w-80 h-80 border border-brand-cyan/10 rounded-full -z-10" />
              </div>
            </div>

            <div className="flex-1 order-1 lg:order-2">
              <span className="text-brand-cyan tracking-[0.5em] uppercase text-[10px] mb-6 block font-bold">
                Beyond The Sale
              </span>
              <h2 className="text-6xl md:text-8xl font-sans font-light tracking-tighter mb-10 leading-[0.9]">
                DEDICATED <br />
                <span className="italic font-normal">SUPPORT.</span>
              </h2>
              <p className="text-black/50 leading-relaxed mb-12 max-w-lg text-lg">
                Our relationship with you extends far beyond purchase. We provide expert EV servicing, genuine spare parts, and comprehensive after-sales support for a seamless ownership experience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
                <div className="border-l-2 border-brand-cyan/20 pl-8 transition-colors hover:border-brand-cyan">
                  <h4 className="text-black font-display text-5xl mb-2 font-light">∞</h4>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-black/30 font-bold">Lifetime Support</p>
                </div>
                <div className="border-l-2 border-brand-cyan/20 pl-8 transition-colors hover:border-brand-cyan">
                  <h4 className="text-black font-display text-5xl mb-2 font-light">✓</h4>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-black/30 font-bold">Genuine Parts</p>
                </div>
              </div>

              <button
                onClick={() => setContactOpen(true)}
                className="group relative px-12 py-6 bg-black text-white font-bold rounded-2xl overflow-hidden shadow-2xl transition-all hover:shadow-brand-cyan/20"
              >
                <div className="absolute inset-0 bg-brand-cyan transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative z-10 text-[10px] uppercase tracking-[0.3em]">Contact Support</span>
              </button>
            </div>
          </div>
        </section>

        <FeaturedVehicles onConfigure={openConfigurator} />
        <Technology />
        
        {/* CTA Section */}
        <section className="py-60 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black -z-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-cyan/[0.1] to-transparent -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <span className="text-brand-cyan tracking-[0.6em] uppercase text-[11px] mb-8 block font-bold">The Future Is Now</span>
            <h2 className="text-6xl md:text-[160px] font-sans font-light leading-[0.8] tracking-[-0.06em] mb-16 text-white">
              TRANSFORM <br />
              <span className="text-stroke-white opacity-80 italic font-normal">MOBILITY.</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              <button
                onClick={() => openConfigurator()}
                className="px-16 py-7 bg-white text-black font-bold rounded-full text-[11px] uppercase tracking-[0.3em] hover:bg-brand-cyan hover:text-white transition-all shadow-2xl active:scale-95"
              >
                Explore Vehicles
              </button>
              <button
                onClick={() => setContactOpen(true)}
                className="px-16 py-7 glass border-white/20 text-white font-bold rounded-full text-[11px] uppercase tracking-[0.3em] hover:bg-white/10 transition-all"
              >
                Get In Touch
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
