import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { vehicles } from '../data/vehicles';

export default function Hero({ onConfigure }: { onConfigure: (id: string) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentVehicle = vehicles[currentIndex];
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const nextVehicle = () => {
    setCurrentIndex((prev) => (prev + 1) % vehicles.length);
    setIsAutoPlay(true);
  };

  const prevVehicle = () => {
    setCurrentIndex((prev) => (prev - 1 + vehicles.length) % vehicles.length);
    setIsAutoPlay(true);
  };

  // Auto-cycle every 8 seconds
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(nextVehicle, 8000);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  return (
    <section className="relative h-screen flex flex-col justify-center overflow-hidden bg-transparent">
      {/* Dynamic Massive Watermark Text */}
      <AnimatePresence mode="wait">
        <motion.div
           key={currentVehicle.id}
           initial={{ opacity: 0, x: 100 }}
           animate={{ opacity: 0.03, x: 0 }}
           exit={{ opacity: 0, x: -100 }}
           transition={{ duration: 1.2 }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-bold whitespace-nowrap pointer-events-none -z-10 uppercase tracking-tighter"
        >
          {currentVehicle.name.split(' ')[0]}
        </motion.div>
      </AnimatePresence>

      {/* Ambient Background Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-brand-cyan/[0.08] blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-brand-cyan/[0.05] blur-[100px] rounded-full" />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVehicle.id}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-1 md:col-span-12 flex flex-col items-center md:items-start"
          >
            <motion.div
              className="flex flex-col md:flex-row md:items-end gap-6 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
               <motion.span
                 className="text-brand-cyan tracking-[0.5em] uppercase text-[10px] font-bold glass px-4 py-2 rounded-full border-brand-cyan/20"
                 whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
               >
                 Axigear EV / {currentVehicle.type}
               </motion.span>
               <motion.p
                 className="text-[10px] uppercase tracking-[0.3em] text-black/30 font-semibold mb-2"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.3, duration: 0.5 }}
               >
                 Available for Reserve Q4 2026
               </motion.p>
            </motion.div>

            <motion.h1
              className="text-[12vw] md:text-[10vw] font-sans font-light leading-[0.8] tracking-[-0.05em] mb-12 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {currentVehicle.name.split(' ')[0]} <br />
              <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-black via-black/80 to-black/20">
                {currentVehicle.name.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>

            <motion.div
              className="flex flex-wrap gap-4 md:gap-10 mt-6 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {[
                { label: 'Range', value: currentVehicle.range },
                { label: '0-60', value: currentVehicle.acceleration },
                { label: 'Top', value: currentVehicle.topSpeed }
              ].map((spec, index) => (
                <motion.div
                  key={spec.label}
                  className="relative group overflow-hidden px-8 py-6 rounded-[24px] glass-dark cursor-default"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)" }}
                >
                  <div className="absolute inset-0 bg-brand-cyan/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  <p className="text-[9px] uppercase tracking-[0.3em] text-black/30 font-bold mb-1 group-hover:text-brand-cyan transition-colors relative z-10">{spec.label}</p>
                  <p className="text-3xl font-display font-medium relative z-10">{spec.value}</p>
                </motion.div>
              ))}

              <motion.button
                onClick={() => onConfigure(currentVehicle.id)}
                className="px-12 py-6 bg-black text-white font-bold rounded-[24px] flex items-center justify-center gap-3 group uppercase tracking-[0.2em] text-[10px] shadow-2xl shadow-black/20 overflow-hidden relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-brand-cyan"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Reserve Now</span>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Indicators - Vertical style for desktop */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 items-center">
          <div className="w-[1px] h-32 bg-black/10 relative">
            <motion.div
              className="absolute top-0 left-0 w-full bg-brand-cyan"
              animate={{ height: `${((currentIndex + 1) / vehicles.length) * 100}%` }}
              transition={{ duration: 0.6 }}
            />
          </div>
          <div className="flex flex-col gap-4">
            {vehicles.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlay(false);
                }}
                className={`text-[9px] font-bold tracking-widest transition-all cursor-pointer ${index === currentIndex ? 'text-black' : 'text-black/20 hover:text-black/50'}`}
                whileHover={{ scale: 1.2 }}
                animate={{ scale: index === currentIndex ? 1.25 : 1 }}
              >
                0{index + 1}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-12 group">
        <motion.button
          onClick={prevVehicle}
          className="w-14 h-14 rounded-full glass border-black/5 flex items-center justify-center text-black shadow-lg overflow-hidden relative"
          whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
          <ChevronLeft className="w-6 h-6 relative z-10 group-hover:text-white" />
        </motion.button>
        <motion.div
          className="h-[1px] bg-black/10"
          initial={{ width: '48px' }}
          animate={{ width: '48px' }}
          whileHover={{ width: '96px' }}
          transition={{ duration: 0.3 }}
        />
        <motion.button
          onClick={nextVehicle}
          className="w-14 h-14 rounded-full glass border-black/5 flex items-center justify-center text-black shadow-lg overflow-hidden relative"
          whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
          <ChevronRight className="w-6 h-6 relative z-10 group-hover:text-white" />
        </motion.button>
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
