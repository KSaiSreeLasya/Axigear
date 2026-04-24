import { motion } from 'motion/react';
import { vehicles } from '../data/vehicles';
import { ChevronRight, Zap, ArrowUpRight, Leaf } from 'lucide-react';

export default function FeaturedVehicles({ onConfigure }: { onConfigure: (id: string) => void }) {

  return (
    <section id="models" className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 bg-transparent relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-brand-cyan/[0.04] blur-[150px] rounded-full" />
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-green-400/[0.03] blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-12 sm:mb-16 md:mb-24 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl">
            <motion.span
              className="text-brand-cyan tracking-[0.5em] uppercase text-[9px] sm:text-[10px] font-bold mb-4 sm:mb-6 block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Product Range
            </motion.span>
            <motion.h2
              className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-sans font-extralight tracking-[-0.05em] leading-[0.8] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              ELECTRIC <br />
              <span className="italic font-normal">TWO-WHEELERS.</span>
            </motion.h2>
          </div>
          <motion.div
            className="text-right flex flex-col items-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="max-w-sm text-black/40 text-xs uppercase tracking-widest leading-loose mb-6">
              From ₹35k to ₹65k. Premium electric scooters for every commute need.
            </p>
            <div className="flex gap-4">
               <motion.div
                 className="h-[1px] bg-black/10 mt-2"
                 animate={{ width: [0, 48, 48] }}
                 transition={{ duration: 1, delay: 0.5 }}
               />
               <p className="text-[10px] font-mono text-black/40">CURATED COLLECTION</p>
            </div>
          </motion.div>
        </motion.div>

        {/* All Vehicles Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-light tracking-tight mb-3">
              Our Electric Scooters
            </h3>
            <p className="text-black/40 max-w-2xl text-sm sm:text-base">
              Affordable and eco-friendly electric scooters designed for urban commuters. No registration required, perfect for short to medium distance travels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="group glass rounded-2xl sm:rounded-[32px] p-5 sm:p-6 md:p-8 flex flex-col h-full border-white/50 overflow-hidden relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-400/[0.08] to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <motion.div
                        className="flex items-center gap-2 mb-2 sm:mb-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <Leaf size={10} className="text-green-600 fill-green-600 flex-shrink-0" />
                        <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.4em] text-green-600 font-bold">NO REGISTRATION</p>
                      </motion.div>
                      <motion.h3
                        className="text-2xl sm:text-2.5xl md:text-3xl font-display font-light tracking-tight group-hover:italic transition-all duration-500"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.1 }}
                      >
                        {vehicle.name}
                      </motion.h3>
                    </div>
                  </div>

                  <div className="relative mb-8">
                    <motion.img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] min-h-[200px]"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.08 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Price Highlight */}
                  <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-green-400/[0.1] rounded-xl sm:rounded-[20px] border border-green-400/30">
                    <p className="text-[9px] sm:text-[11px] uppercase tracking-[0.3em] text-black/40 font-bold mb-1.5 sm:mb-2">Starting Price</p>
                    <p className="text-xl sm:text-2xl font-display font-light text-green-600">₹{(vehicle.basePrice / 1000).toFixed(0)}k</p>
                  </div>

                  {/* Specs */}
                  <motion.div
                    className="border-t border-black/5 pt-4 sm:pt-6 mb-6 sm:mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <div className="group/spec cursor-default">
                      <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-black/30 font-bold mb-1 sm:mb-2 group-hover/spec:text-brand-cyan transition-colors">Range</p>
                      <p className="text-lg sm:text-xl font-display font-light">{vehicle.range}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex gap-2 sm:gap-3 pt-4 border-t border-black/5"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <motion.button
                      onClick={() => onConfigure(vehicle.id)}
                      className="flex-1 py-3 sm:py-4 bg-black text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] rounded-lg sm:rounded-xl shadow-lg overflow-hidden relative group/btn active:scale-95"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-green-500"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10">Explore</span>
                    </motion.button>
                    <motion.div
                      className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl glass flex items-center justify-center cursor-pointer border-white/50 overflow-hidden relative flex-shrink-0"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onConfigure(vehicle.id)}
                    >
                      <ArrowUpRight size={16} className="text-green-600 sm:w-[18px] sm:h-[18px]" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
