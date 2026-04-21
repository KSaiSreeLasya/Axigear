import { motion } from 'motion/react';
import { vehicles } from '../data/vehicles';
import { ChevronRight, Zap, ArrowUpRight } from 'lucide-react';

export default function FeaturedVehicles({ onConfigure }: { onConfigure: (id: string) => void }) {
  return (
    <section id="models" className="py-40 px-6 bg-transparent relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-brand-cyan/[0.04] blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
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
              Our Product Portfolio
            </motion.span>
            <motion.h2
              className="text-6xl md:text-9xl font-sans font-extralight tracking-[-0.05em] leading-[0.8] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              ACCESSIBLE <br />
              <span className="italic font-normal">MOBILITY.</span>
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
              From affordable non-RTO vehicles for short commutes to high-performance RTO-registered models, we serve diverse mobility needs at ₹35K-₹1.2L price points.
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {vehicles.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              whileHover={{ y: -15 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group glass rounded-[40px] p-10 flex flex-col h-full border-white/50 overflow-hidden relative"
            >
              {/* Hover Gradient Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-brand-cyan/[0.08] to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.5 }}
              />

              {/* Card Content */}
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-16">
                  <div>
                    <motion.div
                      className="flex items-center gap-2 mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.2 }}
                    >
                      <Zap size={10} className="text-brand-cyan fill-brand-cyan" />
                      <p className="text-[9px] uppercase tracking-[0.4em] text-brand-cyan font-bold">{car.type}</p>
                    </motion.div>
                    <motion.h3
                      className="text-4xl font-display font-light tracking-tight group-hover:italic transition-all duration-500"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.1 }}
                    >
                      {car.name}
                    </motion.h3>
                  </div>
                  <motion.div
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-black/10 font-mono text-[9px] border-black/5"
                    whileHover={{ scale: 1.2, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                  >
                    0{index + 1}
                  </motion.div>
                </div>

                <div className="relative mb-16 flex-1 flex items-center justify-center min-h-[300px]">
                  <motion.div
                    className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-cyan/[0.08] to-transparent rounded-full blur-[60px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ opacity: 1, scale: 1.1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                  <motion.img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.12, filter: "drop-shadow(0 40px 80px rgba(59, 130, 246, 0.3))" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    referrerPolicy="no-referrer"
                  />
                </div>

                <motion.div
                  className="grid grid-cols-2 gap-8 border-t border-black/5 pt-10 mb-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  <div className="group/spec cursor-default">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-black/30 font-bold mb-2 group-hover/spec:text-brand-cyan transition-colors">Power Delivery</p>
                    <p className="text-2xl font-display font-light italic group-hover/spec:scale-110 transition-transform origin-left">{car.acceleration}</p>
                  </div>
                  <div className="group/spec cursor-default">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-black/30 font-bold mb-2 group-hover/spec:text-brand-cyan transition-colors">Pure Electric Range</p>
                    <p className="text-2xl font-display font-light italic group-hover/spec:scale-110 transition-transform origin-left">{car.range}</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.4 }}
                >
                  <motion.button
                    onClick={() => onConfigure(car.id)}
                    className="flex-1 py-5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-2xl shadow-xl overflow-hidden relative group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-brand-cyan"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">Configure</span>
                  </motion.button>
                  <motion.div
                    className="w-16 h-16 rounded-2xl glass flex items-center justify-center cursor-pointer border-white/50 overflow-hidden relative"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onConfigure(car.id)}
                  >
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowUpRight size={20} className="text-brand-cyan" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
