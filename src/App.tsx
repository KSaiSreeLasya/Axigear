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
import { useState, useEffect } from 'react';
import { Vehicle, vehicles } from './data/vehicles';

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [configuratorOpen, setConfiguratorOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  // Add JSON-LD structured data for SEO
  useEffect(() => {
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Axigear",
      "description": "Best electric scooters in Hyderabad with affordable pricing, long battery range, and eco-friendly performance",
      "url": "https://axigear.com",
      "telephone": "+91-XXXXXXXXXX",
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      },
      "priceRange": "₹40,000 - ₹1,50,000",
      "sameAs": [
        "https://www.facebook.com/axigear",
        "https://www.instagram.com/axigear",
        "https://www.twitter.com/axigear"
      ]
    });

    document.head.appendChild(schemaScript);

    // Add BreadcrumbList schema
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://axigear.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://axigear.com#models"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Services",
          "item": "https://axigear.com#services"
        }
      ]
    });

    document.head.appendChild(breadcrumbScript);

    // Add Product schema for featured vehicles
    const productSchemas = vehicles.slice(0, 3).map((vehicle, index) => ({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": vehicle.name,
      "description": vehicle.specs.range + " km range electric scooter",
      "brand": "Axigear",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR"
      }
    }));

    productSchemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      // Cleanup scripts if needed
    };
  }, []);

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
            <span className="text-brand-black tracking-[0.6em] uppercase text-[11px] mb-8 block font-bold">Join The Revolution</span>
            <h2 className="text-6xl md:text-[140px] font-sans font-light leading-[0.8] tracking-[-0.06em] mb-8 text-black">
              SUSTAINABLE <br />
              <span className="text-brand-black opacity-20 italic font-normal">MOBILITY</span>
            </h2>
            <p className="text-black/60 max-w-2xl mx-auto mb-16 text-lg">
              From ₹48,000 to ₹1,50,000. Explore our range of RTO and Non-RTO electric two-wheelers designed for every commute need.
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
                className="px-16 py-7 glass border-black/20 text-black font-bold rounded-full text-[11px] uppercase tracking-[0.3em] hover:bg-white/10 transition-all"
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
