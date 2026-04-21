import { motion } from 'motion/react';
import { vehicles } from '../data/vehicles';
import { ChevronRight, Zap } from 'lucide-react';

export default function FeaturedVehicles({ onConfigure }: { onConfigure: (id: string) => void }) {
  return (
    <section id="models" className="py-40 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-cyan tracking-[0.5em] uppercase text-[10px] font-bold mb-6 block">The Axi-Gen Collection</span>
            <h2 className="text-6xl md:text-9xl font-sans font-extralight tracking-[-0.05em] leading-[0.8] mb-4">
              PERFORMANCE <br />
              <span className="italic font-normal">ARTISTRY.</span>
            </h2>
          </div>
          <div className="text-right flex flex-col items-end">
            <p className="max-w-sm text-black/40 text-xs uppercase tracking-widest leading-loose mb-6">
              Precision engineered in the Axigear labs, every model represents a leap in sustainable high-performance mobility.
            </p>
            <div className="flex gap-4">
               <div className="w-12 h-[1px] bg-black/10 mt-2" />
               <p className="text-[10px] font-mono text-black/40">2026 EDITION</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {vehicles.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="group glass rounded-[40px] p-10 flex flex-col h-full border-white/50 transition-all duration-700 hover:shadow-[0_60px_120px_-30px_rgba(0,0,0,0.12)]"
            >
              <div className="flex justify-between items-start mb-16">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Zap size={10} className="text-brand-cyan fill-brand-cyan" />
                    <p className="text-[9px] uppercase tracking-[0.4em] text-brand-cyan font-bold">{car.type}</p>
                  </div>
                  <h3 className="text-4xl font-display font-light tracking-tight group-hover:italic transition-all duration-500">{car.name}</h3>
                </div>
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-black/10 font-mono text-[9px] border-black/5">
                  0{index + 1}
                </div>
              </div>
              
              <div className="relative mb-16 flex-1 flex items-center justify-center">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-cyan/[0.03] to-transparent rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-auto object-contain transition-all duration-1000 group-hover:scale-110 drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_40px_80px_rgba(59,130,246,0.2)]"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="grid grid-cols-2 gap-8 border-t border-black/5 pt-10 mb-10">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-black/30 font-bold mb-2">Power Delivery</p>
                  <p className="text-2xl font-display font-light italic">{car.acceleration}</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-black/30 font-bold mb-2">Pure Electric Range</p>
                  <p className="text-2xl font-display font-light italic">{car.range}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => onConfigure(car.id)}
                  className="flex-1 py-5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-2xl hover:bg-brand-cyan transition-all shadow-xl active:scale-95 group"
                >
                  Configure
                </button>
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all cursor-pointer">
                  <ChevronRight size={24} className="group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
