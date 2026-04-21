import { motion } from 'motion/react';
import { Cpu, ShieldCheck, Zap, Globe, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Technology() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const features = [
    {
      id: '01',
      title: 'Quantum Drive',
      desc: 'Proprietary solid-state powertrain delivering 98% efficiency from battery to road.',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-cyan-400/20 to-cyan-400/5',
    },
    {
      id: '02',
      title: 'Axi-Self 7.0',
      desc: 'Lidar-powered navigation with real-time neural network mapping.',
      icon: <Cpu className="w-5 h-5" />,
      color: 'from-blue-400/20 to-blue-400/5',
    },
    {
      id: '03',
      title: 'Nano-Coat Shield',
      desc: 'Self-healing molecular exterior that eliminates microscopic scratches.',
      icon: <ShieldCheck className="w-5 h-5" />,
      color: 'from-indigo-400/20 to-indigo-400/5',
    },
    {
      id: '04',
      title: 'Global Mesh',
      desc: 'Always-on satellite connectivity for seamless OTA updates.',
      icon: <Globe className="w-5 h-5" />,
      color: 'from-purple-400/20 to-purple-400/5',
    },
  ];

  return (
    <section id="technology" className="py-40 px-6 relative overflow-hidden bg-transparent">
      {/* Structural Lines */}
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-black/5 -z-10" />

      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand-cyan/[0.05] blur-[120px] rounded-full -z-10" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start mb-24 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <motion.span
              className="text-brand-cyan tracking-[0.5em] uppercase text-[10px] font-bold mb-6 block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Technology
            </motion.span>
            <motion.h2
              className="text-6xl md:text-8xl font-sans font-light tracking-[-0.04em] leading-[0.8] mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              THE FUTURE, <br />
              <span className="italic font-normal">DECODED.</span>
            </motion.h2>
          </div>
          <motion.div
            className="max-w-xs pt-4 md:pt-12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
             <motion.div
               className="glass px-6 py-4 rounded-3xl border-brand-cyan/20 mb-4 overflow-hidden relative"
               whileHover={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
             >
                <motion.div
                  className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-brand-cyan to-transparent"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <p className="text-[10px] font-mono text-brand-cyan font-bold uppercase tracking-widest relative z-10">System Status: Active</p>
             </motion.div>
             <p className="text-black/40 text-xs tracking-widest leading-loose">
               We don't just build cars; we build intelligent platforms that evolve with every mile you drive.
             </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              onHoverStart={() => setHoveredFeature(f.id)}
              onHoverEnd={() => setHoveredFeature(null)}
              className="relative group cursor-default"
            >
              {/* Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${f.color} rounded-[32px] opacity-0 group-hover:opacity-100`}
                transition={{ duration: 0.5 }}
              />

              {/* Card Content */}
              <motion.div
                className="relative p-8 rounded-[32px] glass backdrop-blur-sm border border-white/50 flex flex-col h-full overflow-hidden"
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-start mb-8">
                  <motion.div
                    className="w-12 h-12 rounded-xl glass-dark flex items-center justify-center text-brand-cyan"
                    whileHover={{
                      scale: 1.1,
                      background: "rgba(59, 130, 246, 0.2)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {f.icon}
                  </motion.div>
                  <motion.span
                    className="text-[10px] font-mono text-black/30 font-bold group-hover:text-brand-cyan transition-colors"
                    animate={{ opacity: hoveredFeature === f.id ? 1 : 0.5 }}
                  >
                    {f.id}
                  </motion.span>
                </div>

                <motion.h3
                  className="text-2xl font-display font-light mb-3 group-hover:italic transition-all"
                  animate={{ scale: hoveredFeature === f.id ? 1.05 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {f.title}
                </motion.h3>

                <p className="text-black/40 text-xs leading-relaxed mb-6 flex-1">
                  {f.desc}
                </p>

                <motion.div
                  className="flex items-center gap-2 text-[10px] font-bold text-brand-cyan opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Learn More</span>
                  <motion.div
                    animate={{ x: hoveredFeature === f.id ? 4 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={14} />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="mt-6 h-[1px] bg-gradient-to-r from-black/10 to-transparent group-hover:from-brand-cyan"
                  animate={{ scaleX: hoveredFeature === f.id ? 1 : 0.3 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative glass rounded-[48px] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-20 overflow-hidden border-white/50 group">
            {/* Visual background details */}
            <motion.div
              className="absolute top-0 right-0 w-[600px] h-full bg-gradient-to-l from-brand-cyan/[0.04] to-transparent pointer-events-none"
              animate={{ opacity: [0.04, 0.08, 0.04] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <motion.div
              className="flex-1 z-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-brand-cyan tracking-[0.4em] uppercase text-[10px] font-bold mb-6 block">Charging Infrastructure</span>
              <h3 className="text-5xl md:text-7xl font-sans font-light mb-8 tracking-[-0.03em] leading-tight group-hover:italic transition-all">
                SUPERCHARGE <br /> IN <span className="italic">8 MINUTES.</span>
              </h3>
              <p className="text-black/40 mb-10 leading-loose max-w-md text-sm md:text-base">
                Our liquid-cooled network spans the globe, adding 200 miles of range in less time than it takes to enjoy a coffee.
              </p>
              <motion.button
                className="px-12 py-5 bg-black text-white font-bold rounded-2xl text-[10px] uppercase tracking-[0.3em] shadow-2xl overflow-hidden relative group/btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-brand-cyan"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Station Map</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="flex-1 w-full lg:w-auto flex justify-center z-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="relative">
                <motion.div
                  className="w-72 h-72 rounded-full border border-black/5 flex items-center justify-center p-8 relative"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <motion.div
                    className="absolute inset-0 border-2 border-brand-cyan/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ borderRightColor: 'transparent', borderLeftColor: 'transparent' }}
                  />
                  <motion.div
                    className="absolute inset-4 border border-brand-cyan/15 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />

                  <motion.div
                    className="text-center relative z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.span
                      className="block text-7xl font-sans font-light italic mb-2"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      98%
                    </motion.span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-brand-cyan font-bold">Grid Efficiency</span>
                  </motion.div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-brand-cyan/10 rounded-full blur-xl"
                  animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-24 h-24 bg-brand-cyan/5 rounded-full blur-2xl"
                  animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
