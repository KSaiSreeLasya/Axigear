import { motion } from 'motion/react';
import { vehicles } from '../data/vehicles';
import { ChevronRight, Zap, ArrowUpRight, Leaf } from 'lucide-react';

export default function FeaturedVehicles({ onConfigure }: { onConfigure: (id: string) => void }) {
  const rtoVehicles = vehicles.filter(v => v.type === 'RTO Registered');
  const nonRtoVehicles = vehicles.filter(v => v.type === 'Non-RTO');

  return (
    <section id="models" className="py-40 px-6 bg-transparent relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-brand-cyan/[0.04] blur-[150px] rounded-full" />
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-green-400/[0.03] blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl">
            <motion.span
              className="text-brand-cyan tracking-[0.5em] uppercase text-[10px] font-bold mb-6 block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Product Range
            </motion.span>
            <motion.h2
              className="text-6xl md:text-8xl font-sans font-extralight tracking-[-0.05em] leading-[0.8] mb-4"
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
              From ₹35,000 to ₹1,20,000. RTO & Non-RTO options for every commute need.
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

        {/* RTO Vehicles Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="mb-12">
            <h3 className="text-4xl md:text-5xl font-sans font-light tracking-tight mb-3">
              RTO Registered Vehicles
            </h3>
            <p className="text-black/40 max-w-2xl">
              Designed for higher performance and longer commutes, fully compliant with all regulatory requirements. Perfect for riders needing registration and insurance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rtoVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="group glass rounded-[32px] p-8 flex flex-col h-full border-white/50 overflow-hidden relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-brand-cyan/[0.08] to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <motion.div
                        className="flex items-center gap-2 mb-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <Zap size={12} className="text-brand-cyan fill-brand-cyan" />
                        <p className="text-[9px] uppercase tracking-[0.4em] text-brand-cyan font-bold">RTO REGISTERED</p>
                      </motion.div>
                      <motion.h3
                        className="text-3xl font-display font-light tracking-tight group-hover:italic transition-all duration-500"
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
                  <div className="mb-8 p-4 bg-brand-cyan/[0.1] rounded-[20px] border border-brand-cyan/30">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-black/40 font-bold mb-2">Starting Price</p>
                    <p className="text-2xl font-display font-light text-brand-cyan">₹{(vehicle.basePrice / 100000).toFixed(2)}L</p>
                  </div>

                  {/* Specs */}
                  <motion.div
                    className="grid grid-cols-2 gap-6 border-t border-black/5 pt-6 mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <div className="group/spec cursor-default">
                      <p className="text-[9px] uppercase tracking-[0.3em] text-black/30 font-bold mb-2 group-hover/spec:text-brand-cyan transition-colors">Range</p>
                      <p className="text-xl font-display font-light">{vehicle.range}</p>
                    </div>
                    <div className="group/spec cursor-default">
                      <p className="text-[9px] uppercase tracking-[0.3em] text-black/30 font-bold mb-2 group-hover/spec:text-brand-cyan transition-colors">Max Speed</p>
                      <p className="text-xl font-display font-light">{vehicle.topSpeed}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex gap-3 pt-4 border-t border-black/5"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <motion.button
                      onClick={() => onConfigure(vehicle.id)}
                      className="flex-1 py-4 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-xl shadow-lg overflow-hidden relative group/btn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-brand-cyan"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10">Explore</span>
                    </motion.button>
                    <motion.div
                      className="w-12 h-12 rounded-xl glass flex items-center justify-center cursor-pointer border-white/50 overflow-hidden relative"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onConfigure(vehicle.id)}
                    >
                      <ArrowUpRight size={18} className="text-brand-cyan" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Non-RTO Vehicles Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="mb-12">
            <h3 className="text-4xl md:text-5xl font-sans font-light tracking-tight mb-3">
              Non-RTO Vehicles
            </h3>
            <p className="text-black/40 max-w-2xl">
              Ideal for short-distance travel, these vehicles require no registration or license, making them highly accessible and cost-effective for urban commuting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nonRtoVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="group glass rounded-[32px] p-8 flex flex-col h-full border-white/50 overflow-hidden relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-400/[0.08] to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <motion.div
                        className="flex items-center gap-2 mb-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <Leaf size={12} className="text-green-600 fill-green-600" />
                        <p className="text-[9px] uppercase tracking-[0.4em] text-green-600 font-bold">NO REGISTRATION</p>
                      </motion.div>
                      <motion.h3
                        className="text-3xl font-display font-light tracking-tight group-hover:italic transition-all duration-500"
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
                  <div className="mb-8 p-4 bg-green-400/[0.1] rounded-[20px] border border-green-400/30">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-black/40 font-bold mb-2">Starting Price</p>
                    <p className="text-2xl font-display font-light text-green-600">₹{(vehicle.basePrice / 100000).toFixed(2)}L</p>
                  </div>

                  {/* Specs */}
                  <motion.div
                    className="grid grid-cols-2 gap-6 border-t border-black/5 pt-6 mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <div className="group/spec cursor-default">
                      <p className="text-[9px] uppercase tracking-[0.3em] text-black/30 font-bold mb-2 group-hover/spec:text-brand-cyan transition-colors">Range</p>
                      <p className="text-xl font-display font-light">{vehicle.range}</p>
                    </div>
                    <div className="group/spec cursor-default">
                      <p className="text-[9px] uppercase tracking-[0.3em] text-black/30 font-bold mb-2 group-hover/spec:text-brand-cyan transition-colors">Max Speed</p>
                      <p className="text-xl font-display font-light">{vehicle.topSpeed}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex gap-3 pt-4 border-t border-black/5"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <motion.button
                      onClick={() => onConfigure(vehicle.id)}
                      className="flex-1 py-4 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-xl shadow-lg overflow-hidden relative group/btn"
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
                      className="w-12 h-12 rounded-xl glass flex items-center justify-center cursor-pointer border-white/50 overflow-hidden relative"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onConfigure(vehicle.id)}
                    >
                      <ArrowUpRight size={18} className="text-green-600" />
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
