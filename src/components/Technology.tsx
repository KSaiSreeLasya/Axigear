import { motion } from 'motion/react';
import { Cpu, ShieldCheck, Zap, Globe } from 'lucide-react';

export default function Technology() {
  const features = [
    {
      id: '01',
      title: 'Quantum Drive',
      desc: 'Proprietary solid-state powertrain delivering 98% efficiency from battery to road.',
      icon: <Zap className="w-5 h-5" />,
    },
    {
      id: '02',
      title: 'Axi-Self 7.0',
      desc: 'Lidar-powered navigation with real-time neural network mapping.',
      icon: <Cpu className="w-5 h-5" />,
    },
    {
      id: '03',
      title: 'Nano-Coat Shield',
      desc: 'Self-healing molecular exterior that eliminates microscopic scratches.',
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      id: '04',
      title: 'Global Mesh',
      desc: 'Always-on satellite connectivity for seamless OTA updates.',
      icon: <Globe className="w-5 h-5" />,
    },
  ];

  return (
    <section id="technology" className="py-40 px-6 relative overflow-hidden bg-transparent">
      {/* Structural Lines */}
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-black/5 -z-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-8">
          <div>
            <span className="text-brand-cyan tracking-[0.5em] uppercase text-[10px] font-bold mb-6 block">Technology</span>
            <h2 className="text-6xl md:text-8xl font-sans font-light tracking-[-0.04em] leading-[0.8] mb-8">
              THE FUTURE, <br />
              <span className="italic font-normal">DECODED.</span>
            </h2>
          </div>
          <div className="max-w-xs pt-4 md:pt-12">
             <div className="glass px-6 py-4 rounded-3xl border-brand-cyan/20 mb-4">
                <p className="text-[10px] font-mono text-brand-cyan font-bold uppercase tracking-widest">System Status: Active</p>
             </div>
             <p className="text-black/40 text-xs tracking-widest leading-loose">
               We don't just build cars; we build intelligent platforms that evolve with every mile you drive.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 border border-black/5 rounded-[40px] overflow-hidden">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-transparent p-12 group hover:bg-white transition-colors duration-500 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 rounded-2xl glass-dark flex items-center justify-center text-black/50 group-hover:bg-brand-cyan group-hover:text-white transition-all">
                  {f.icon}
                </div>
                <span className="text-[10px] font-mono text-black/20 font-bold group-hover:text-brand-cyan transition-colors">{f.id}</span>
              </div>
              <h3 className="text-2xl font-display font-light mb-4 group-hover:italic transition-all">{f.title}</h3>
              <p className="text-black/40 text-xs leading-loose group-hover:text-black/60 transition-colors">
                {f.desc}
              </p>
              <div className="mt-auto pt-10">
                 <div className="w-8 h-[1px] bg-black/10 group-hover:w-full group-hover:bg-brand-cyan transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 group">
          <div className="relative glass rounded-[48px] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-20 overflow-hidden border-white/50">
            {/* Visual background details */}
            <div className="absolute top-0 right-0 w-[600px] h-full bg-gradient-to-l from-brand-cyan/[0.02] to-transparent pointer-events-none" />
            
            <div className="flex-1 z-10">
              <span className="text-brand-cyan tracking-[0.4em] uppercase text-[10px] font-bold mb-6 block">Charging Infrastructure</span>
              <h3 className="text-5xl md:text-7xl font-sans font-light mb-8 tracking-[-0.03em] leading-tight">SUPERCHARGE <br /> IN <span className="italic">8 MINUTES.</span></h3>
              <p className="text-black/40 mb-10 leading-loose max-w-md text-sm md:text-base">
                Our liquid-cooled network spans the globe, adding 200 miles of range in less time than it takes to enjoy a coffee.
              </p>
              <button className="px-12 py-5 bg-black text-white font-bold rounded-2xl text-[10px] uppercase tracking-[0.3em] hover:bg-brand-cyan transition-all shadow-2xl active:scale-95">
                Station Map
              </button>
            </div>

            <div className="flex-1 w-full lg:w-auto flex justify-center z-10">
              <div className="relative group/circle">
                <div className="w-72 h-72 rounded-full border border-black/5 flex items-center justify-center p-8">
                  <div className="absolute inset-0 border-2 border-brand-cyan/20 rounded-full animate-spin duration-[15s]" style={{ borderRightColor: 'transparent', borderLeftColor: 'transparent' }} />
                  <div className="absolute inset-4 border border-brand-cyan/10 rounded-full animate-spin duration-[25s] direction-reverse" />
                  
                  <div className="text-center">
                    <span className="block text-7xl font-sans font-light italic mb-2">98%</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-brand-cyan font-bold">Grid Efficiency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
