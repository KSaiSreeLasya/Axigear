import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';
import { ChevronRight, ChevronLeft, Zap, Leaf } from 'lucide-react';
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

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(nextVehicle, 8000);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-brand-cyan/[0.02] to-brand-cyan/[0.05] -z-20" />

      {/* Ambient Glow Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div
          className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-brand-cyan/[0.12] blur-[150px] rounded-full"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-1/4 left-1/3 w-[600px] h-[600px] bg-green-400/[0.08] blur-[120px] rounded-full"
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="flex-1 flex items-center justify-between relative z-10">
        <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: Text Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentVehicle.id}
              initial={{ opacity: 0, x: -40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -40, y: -20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              {/* Header Badge */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <motion.div
                  className="inline-flex items-center gap-2 text-brand-cyan tracking-[0.5em] uppercase text-[10px] font-bold glass px-5 py-3 rounded-full border border-brand-cyan/30"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.4)" }}
                >
                  <Zap className="w-3 h-3 fill-brand-cyan" />
                  <span>{currentVehicle.type} / {currentVehicle.range}</span>
                </motion.div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-sans font-light leading-[0.95] tracking-[-0.02em] mb-6 text-black"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7 }}
              >
                <span className="block">{currentVehicle.name}</span>
                <motion.span
                  className="block bg-gradient-to-r from-brand-cyan via-brand-cyan/80 to-green-500/60 bg-clip-text text-transparent font-normal italic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.7 }}
                >
                  {currentVehicle.description.split(' ').slice(0, 3).join(' ')}
                </motion.span>
              </motion.h1>

              {/* Price Tag */}
              <motion.p
                className="text-[16px] font-bold text-brand-cyan mb-10 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Leaf className="w-5 h-5 fill-green-500 text-green-500" />
                Starting at ₹{(currentVehicle.basePrice / 100000).toFixed(2)} Lakh
              </motion.p>

              {/* Specs Grid */}
              <motion.div
                className="grid grid-cols-3 gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {[
                  { label: 'Range', value: currentVehicle.range, symbol: '🔋' },
                  { label: 'Performance', value: currentVehicle.acceleration, symbol: '⚡' },
                  { label: 'Max Speed', value: currentVehicle.topSpeed, symbol: '🚀' }
                ].map((spec, index) => (
                  <motion.div
                    key={spec.label}
                    className="group relative overflow-hidden rounded-[20px] p-6 bg-gradient-to-br from-brand-cyan/[0.08] to-brand-cyan/[0.02] border border-brand-cyan/20 cursor-default"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.45 + index * 0.08, duration: 0.5 }}
                    whileHover={{
                      y: -8,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
                      borderColor: "rgba(59, 130, 246, 0.5)"
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.4 }}
                    />
                    <p className="text-[12px] uppercase tracking-[0.3em] text-black/40 font-bold mb-2 relative z-10 group-hover:text-brand-cyan transition-colors">{spec.label}</p>
                    <div className="flex items-baseline gap-2 relative z-10">
                      <span className="text-2xl">{spec.symbol}</span>
                      <p className="text-2xl md:text-3xl font-display font-light text-black">{spec.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.button
                onClick={() => onConfigure(currentVehicle.id)}
                className="group relative w-full md:w-fit px-10 md:px-14 py-5 bg-black text-white font-bold rounded-[20px] uppercase tracking-[0.3em] text-[11px] shadow-[0_10px_40px_rgba(0,0,0,0.15)] overflow-hidden flex items-center justify-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.6 }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-brand-cyan"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Explore Now
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>
          </AnimatePresence>

          {/* Right: Image Section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentVehicle.id}
              initial={{ opacity: 0, scale: 0.9, x: 60 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.85, x: -60 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[500px] lg:h-[600px] hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full h-full flex items-center justify-center group">
                <motion.div
                  className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-brand-cyan/[0.15] to-green-400/[0.05] border border-brand-cyan/20"
                  animate={{ rotate: [0, 2, 0], y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <motion.div
                  className="absolute -top-8 -right-8 w-32 h-32 bg-brand-cyan/[0.08] rounded-full blur-[50px]"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-12 -left-8 w-40 h-40 bg-green-400/[0.06] rounded-full blur-[60px]"
                  animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.6, 0.9, 0.6] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                />

                <motion.div
                  className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={currentVehicle.image}
                    alt={currentVehicle.name}
                    className="w-full h-full object-contain drop-shadow-[0_20px_60px_rgba(59,130,246,0.25)] relative z-10"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                <motion.div
                  className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-brand-cyan/[0.1] to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Floating Info Cards */}
              <motion.div
                className="absolute top-12 left-12 glass-premium px-6 py-4 rounded-[20px] z-20"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-cyan font-bold mb-1">Zero Emissions</p>
                <p className="text-sm font-display font-light">Eco-Friendly</p>
              </motion.div>

              <motion.div
                className="absolute bottom-12 right-12 glass-premium px-6 py-4 rounded-[20px] z-20"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-cyan font-bold mb-1">Affordable</p>
                <p className="text-sm font-display font-light">₹35K - ₹1.2L</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="relative z-10 px-6 pb-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {vehicles.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlay(false);
              }}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                index === currentIndex ? 'w-12 bg-brand-cyan' : 'w-2 bg-black/20 hover:bg-black/40'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </motion.div>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          <motion.button
            onClick={prevVehicle}
            className="w-12 h-12 rounded-full glass border border-black/10 flex items-center justify-center text-black hover:text-white overflow-hidden relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <ChevronLeft className="w-5 h-5 relative z-10" />
          </motion.button>

          <motion.button
            onClick={nextVehicle}
            className="w-12 h-12 rounded-full glass border border-black/10 flex items-center justify-center text-black hover:text-white overflow-hidden relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <ChevronRight className="w-5 h-5 relative z-10" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
