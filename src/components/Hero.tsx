import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { vehicles } from '../data/vehicles';

export default function Hero({ onConfigure }: { onConfigure: (id: string) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentVehicle = vehicles[currentIndex];

  const nextVehicle = () => {
    setCurrentIndex((prev) => (prev + 1) % vehicles.length);
  };

  const prevVehicle = () => {
    setCurrentIndex((prev) => (prev - 1 + vehicles.length) % vehicles.length);
  };

  // Auto-cycle every 8 seconds
  useEffect(() => {
    const timer = setInterval(nextVehicle, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center overflow-hidden bg-transparent">
      {/* Dynamic Massive Watermark Text */}
      <AnimatePresence mode="wait">
        <motion.div
           key={currentVehicle.id}
           initial={{ opacity: 0, x: 100 }}
           animate={{ opacity: 0.03, x: 0 }}
           exit={{ opacity: 0, x: -100 }}
           transition={{ duration: 1 }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-bold whitespace-nowrap pointer-events-none -z-10 uppercase tracking-tighter"
        >
          {currentVehicle.name.split(' ')[0]}
        </motion.div>
      </AnimatePresence>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVehicle.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-1 md:col-span-12 flex flex-col items-center md:items-start"
          >
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-8">
               <span className="text-brand-cyan tracking-[0.5em] uppercase text-[10px] font-bold glass px-4 py-2 rounded-full border-brand-cyan/20">
                 Axigear EV / {currentVehicle.type}
               </span>
               <p className="text-[10px] uppercase tracking-[0.3em] text-black/30 font-semibold mb-2">Available for Reserve Q4 2026</p>
            </div>
            
            <h1 className="text-[12vw] md:text-[10vw] font-sans font-light leading-[0.8] tracking-[-0.05em] mb-12 text-center md:text-left">
              {currentVehicle.name.split(' ')[0]} <br />
              <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-black via-black/80 to-black/20">
                {currentVehicle.name.split(' ').slice(1).join(' ')}
              </span>
            </h1>
            
            <div className="flex flex-wrap gap-4 md:gap-10 mt-6 justify-center md:justify-start">
              {[
                { label: 'Range', value: currentVehicle.range },
                { label: '0-60', value: currentVehicle.acceleration },
                { label: 'Top', value: currentVehicle.topSpeed }
              ].map((spec) => (
                <div key={spec.label} className="relative group overflow-hidden px-8 py-6 rounded-[24px] glass-dark">
                  <div className="absolute inset-0 bg-brand-cyan/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  <p className="text-[9px] uppercase tracking-[0.3em] text-black/30 font-bold mb-1 group-hover:text-brand-cyan transition-colors relative z-10">{spec.label}</p>
                  <p className="text-3xl font-display font-medium relative z-10">{spec.value}</p>
                </div>
              ))}

              <button 
                onClick={() => onConfigure(currentVehicle.id)}
                className="px-12 py-6 bg-black text-white font-bold rounded-[24px] flex items-center justify-center gap-3 hover:bg-brand-cyan transition-all group uppercase tracking-[0.2em] text-[10px] shadow-2xl shadow-black/20"
              >
                Reserve Now
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Indicators - Vertical style for desktop */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 items-center">
          <div className="w-[1px] h-32 bg-black/10 relative">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-brand-cyan"
              animate={{ height: `${((currentIndex + 1) / vehicles.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="flex flex-col gap-4">
            {vehicles.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`text-[9px] font-bold tracking-widest transition-all ${index === currentIndex ? 'text-black scale-125' : 'text-black/20 hover:text-black/50'}`}
              >
                0{index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-12 group">
        <button 
          onClick={prevVehicle}
          className="w-14 h-14 rounded-full glass border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-lg active:scale-90"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="w-12 h-[1px] bg-black/10 group-hover:w-24 transition-all" />
        <button 
          onClick={nextVehicle}
          className="w-14 h-14 rounded-full glass border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-lg active:scale-90"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Background Car Image - Lower Opacity Silhouette for clean look */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentVehicle.id}
          initial={{ opacity: 0, x: 100, scale: 1.15 }}
          animate={{ opacity: 0.08, x: 0, scale: 1.1 }}
          exit={{ opacity: 0, x: -100, scale: 1.05 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-[-10%] bottom-[-5%] pointer-events-none hidden lg:block w-[1200px]"
        >
          <img 
            src={currentVehicle.image} 
            alt={currentVehicle.name}
            className="w-full h-auto filter grayscale blur-[2px]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
