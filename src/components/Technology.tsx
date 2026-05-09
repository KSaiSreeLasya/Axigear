import { motion } from 'motion/react';
import { Wind, Zap, Leaf, Volume2, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Technology() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const benefits = [
    {
      id: '01',
      title: 'Zero Tailpipe Emissions',
      desc: 'Eliminate air pollution in cities with completely clean electric power.',
      icon: <Wind className="w-5 h-5" />,
      color: 'from-cyan-400/20 to-cyan-400/5',
    },
    {
      id: '02',
      title: 'Lower Running Costs',
      desc: 'Significantly more economical compared to petrol and diesel vehicles.',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-blue-400/20 to-blue-400/5',
    },
    {
      id: '03',
      title: 'Reduced Carbon Footprint',
      desc: 'Lower greenhouse gas emissions aligned with global sustainability goals.',
      icon: <Leaf className="w-5 h-5" />,
      color: 'from-green-400/20 to-green-400/5',
    },
    {
      id: '04',
      title: 'Quiet Operation',
      desc: 'Silent drive experience reduces noise pollution in urban settings.',
      icon: <Volume2 className="w-5 h-5" />,
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
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-green-400/[0.05] blur-[120px] rounded-full -z-10" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
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
              Why Electric Mobility
            </motion.span>
            <motion.h2
              className="text-6xl md:text-8xl font-sans font-light tracking-[-0.04em] leading-[0.8] mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              THE FUTURE <br />
              <span className="italic font-normal">BENEFITS.</span>
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
                <p className="text-[10px] font-mono text-brand-cyan font-bold uppercase tracking-widest relative z-10">Status: Active</p>
             </motion.div>
             <p className="text-black/40 text-xs tracking-widest leading-loose">
               Traditional fuels are finite and increasingly expensive. Electric mobility is the sustainable solution for tomorrow's cities.
             </p>
          </motion.div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              onHoverStart={() => setHoveredFeature(benefit.id)}
              onHoverEnd={() => setHoveredFeature(null)}
              className="relative group cursor-default"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-[32px] opacity-0 group-hover:opacity-100`}
                transition={{ duration: 0.5 }}
              />

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
                    {benefit.icon}
                  </motion.div>
                  <motion.span
                    className="text-[10px] font-mono text-black/30 font-bold group-hover:text-brand-cyan transition-colors"
                    animate={{ opacity: hoveredFeature === benefit.id ? 1 : 0.5 }}
                  >
                    {benefit.id}
                  </motion.span>
                </div>

                <motion.h3
                  className="text-2xl font-display font-light mb-3 group-hover:italic transition-all"
                  animate={{ scale: hoveredFeature === benefit.id ? 1.05 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {benefit.title}
                </motion.h3>

                <p className="text-black/40 text-xs leading-relaxed mb-6 flex-1">
                  {benefit.desc}
                </p>

                <motion.div
                  className="flex items-center gap-2 text-[10px] font-bold text-brand-cyan opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Learn More</span>
                  <motion.div
                    animate={{ x: hoveredFeature === benefit.id ? 4 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={14} />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="mt-6 h-[1px] bg-gradient-to-r from-black/10 to-transparent group-hover:from-brand-cyan"
                  animate={{ scaleX: hoveredFeature === benefit.id ? 1 : 0.3 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Challenge Section */}
        <motion.div
          className="relative glass rounded-[48px] p-12 md:p-20 flex flex-col lg:flex-row items-center gap-16 overflow-hidden border-white/50 group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
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
            <span className="text-brand-cyan tracking-[0.4em] uppercase text-[10px] font-bold mb-6 block">The Challenge Today</span>
            <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-sans font-light mb-8 tracking-[-0.03em] leading-tight group-hover:italic transition-all">
              TRADITIONAL FUELS <br /> ARE <span className="italic">UNSUSTAINABLE.</span>
            </h3>
            <p className="text-black/40 mb-8 leading-loose max-w-md text-sm md:text-base">
              Petrol and diesel are finite, increasingly expensive, and major contributors to air pollution and climate change. Urban environments face rising fuel costs, deteriorating air quality, and growing environmental concerns.
            </p>
            <ul className="space-y-4 text-black/40 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-brand-cyan font-bold mt-1">•</span>
                <span>Finite and rapidly depleting reserves</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-cyan font-bold mt-1">•</span>
                <span>Rising fuel costs affecting everyday commuters</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-cyan font-bold mt-1">•</span>
                <span>Major contributors to air pollution and climate change</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="flex-1 z-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-green-600 tracking-[0.4em] uppercase text-[10px] font-bold mb-6 block">Our Solution</span>
            <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-sans font-light mb-8 tracking-[-0.03em] leading-tight group-hover:italic transition-all">
              ELECTRIC <br /> <span className="italic">MOBILITY.</span>
            </h3>
            <p className="text-black/40 mb-8 leading-loose max-w-md text-sm md:text-base">
              Axigear offers accessible EV options that empower individuals to transition toward sustainable transportation without compromising on performance or affordability.
            </p>
            <ul className="space-y-4 text-black/40 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span>Zero tailpipe emissions reducing air pollution</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span>Lower running costs, more economical</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span>Energy efficient, aligned with global goals</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
