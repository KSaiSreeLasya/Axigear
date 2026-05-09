import { motion } from 'motion/react';
import { Check, X, Zap, Fuel, Leaf, Wrench, Volume2, Gauge } from 'lucide-react';

export default function Comparison() {
  const comparisonData = [
    {
      aspect: 'Energy Source',
      icon: <Zap className="w-6 h-6" />,
      ev: 'Electricity (renewable-ready)',
      nonEv: 'Fossil fuels (non-renewable)',
      evColor: 'from-green-400/20 to-green-400/5',
      nonEvColor: 'from-red-400/20 to-red-400/5',
    },
    {
      aspect: 'Emissions',
      icon: <Leaf className="w-6 h-6" />,
      ev: 'Zero tailpipe emissions',
      nonEv: 'High CO₂ and pollutants',
      evColor: 'from-green-400/20 to-green-400/5',
      nonEvColor: 'from-red-400/20 to-red-400/5',
    },
    {
      aspect: 'Running Cost',
      icon: <Gauge className="w-6 h-6" />,
      ev: 'Low',
      nonEv: 'High and fluctuating',
      evColor: 'from-green-400/20 to-green-400/5',
      nonEvColor: 'from-red-400/20 to-red-400/5',
    },
    {
      aspect: 'Maintenance',
      icon: <Wrench className="w-6 h-6" />,
      ev: 'Lower (fewer moving parts)',
      nonEv: 'Higher (engine complexity)',
      evColor: 'from-green-400/20 to-green-400/5',
      nonEvColor: 'from-red-400/20 to-red-400/5',
    },
    {
      aspect: 'Environmental Impact',
      icon: <Leaf className="w-6 h-6" />,
      ev: 'Minimal',
      nonEv: 'Significant',
      evColor: 'from-green-400/20 to-green-400/5',
      nonEvColor: 'from-red-400/20 to-red-400/5',
    },
    {
      aspect: 'Noise Levels',
      icon: <Volume2 className="w-6 h-6" />,
      ev: 'Quiet',
      nonEv: 'Noisy',
      evColor: 'from-green-400/20 to-green-400/5',
      nonEvColor: 'from-red-400/20 to-red-400/5',
    },
  ];

  return (
    <section className="py-40 px-6 relative overflow-hidden bg-transparent">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-green-400/[0.04] blur-[150px] rounded-full -z-10" />
        <div className="absolute bottom-1/4 left-0 w-[700px] h-[700px] bg-brand-cyan/[0.04] blur-[150px] rounded-full -z-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-brand-cyan tracking-[0.5em] uppercase text-[11px] font-bold mb-8 block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Clear Choice
          </motion.span>
          <motion.h2
            className="text-6xl md:text-8xl font-sans font-light tracking-[-0.04em] leading-[0.8] mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            EV VS <br />
            <span className="italic font-normal">NON-EV</span>
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-black/60 text-lg leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            A comprehensive comparison showing why electric two-wheelers are the smarter choice for modern urban mobility.
          </motion.p>
        </motion.div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-6 mb-12">
          {comparisonData.map((item, index) => (
            <motion.div
              key={item.aspect}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/15 flex items-center justify-center text-brand-cyan">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-black">{item.aspect}</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {/* EV Card */}
                <motion.div
                  className={`glass rounded-[24px] p-7 border-2 border-green-400/40 bg-gradient-to-br ${item.evColor} hover:border-green-400/70 transition-all shadow-lg`}
                  whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(34, 197, 94, 0.15)' }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-6 h-6 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-700 font-bold" />
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-green-700 font-bold">ELECTRIC</p>
                  </div>
                  <p className="text-black font-semibold text-base leading-relaxed">{item.ev}</p>
                </motion.div>

                {/* Non-EV Card */}
                <motion.div
                  className={`glass rounded-[24px] p-7 border-2 border-red-400/40 bg-gradient-to-br ${item.nonEvColor} hover:border-red-400/70 transition-all shadow-lg`}
                  whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(239, 68, 68, 0.15)' }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-6 h-6 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-red-700 font-bold" />
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-red-700 font-bold">NON-ELECTRIC</p>
                  </div>
                  <p className="text-black font-semibold text-base leading-relaxed">{item.nonEv}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Table View */}
        <motion.div
          className="hidden lg:block overflow-hidden rounded-[32px] border-2 border-white/40 glass shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="grid grid-cols-3 bg-gradient-to-r from-brand-cyan/30 via-transparent to-transparent border-b border-white/50">
            <div className="px-10 py-8">
              <p className="text-[12px] uppercase tracking-[0.4em] text-black/60 font-bold">Aspect</p>
            </div>
            <div className="px-10 py-8 border-l border-white/50 bg-gradient-to-r from-green-400/15 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-green-700" />
                </div>
                <p className="text-[12px] uppercase tracking-[0.4em] text-green-700 font-bold">Electric (EV)</p>
              </div>
            </div>
            <div className="px-10 py-8 border-l border-white/50 bg-gradient-to-r from-red-400/15 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <Fuel className="w-4 h-4 text-red-700" />
                </div>
                <p className="text-[12px] uppercase tracking-[0.4em] text-red-700 font-bold">Non-Electric</p>
              </div>
            </div>
          </div>

          {comparisonData.map((item, index) => (
            <motion.div
              key={item.aspect}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className={`grid grid-cols-3 border-t border-white/50 hover:bg-brand-cyan/[0.02] transition-colors ${
                index % 2 === 0 ? 'bg-white/[0.02]' : ''
              }`}
            >
              {/* Aspect */}
              <div className="px-10 py-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-cyan/15 flex items-center justify-center text-brand-cyan flex-shrink-0">
                  {item.icon}
                </div>
                <p className="font-display font-light text-lg text-black font-semibold">{item.aspect}</p>
              </div>

              {/* EV Value */}
              <motion.div
                className="px-8 py-6 border-l border-white/50 flex items-center gap-3 hover:bg-green-500/[0.03] transition-colors"
                whileHover={{ backgroundColor: 'rgba(34, 197, 94, 0.06)' }}
              >
                <div className="w-6 h-6 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-700 font-bold" />
                </div>
                <p className="text-black font-semibold">{item.ev}</p>
              </motion.div>

              {/* Non-EV Value */}
              <motion.div
                className="px-8 py-6 border-l border-white/50 flex items-center gap-3 hover:bg-red-500/[0.03] transition-colors"
                whileHover={{ backgroundColor: 'rgba(239, 68, 68, 0.06)' }}
              >
                <div className="w-6 h-6 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-red-700 font-bold" />
                </div>
                <p className="text-black font-semibold">{item.nonEv}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-black/70 mb-10 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Make the smart choice today. Axigear electric two-wheelers offer superior benefits across every important metric.
          </p>
          <motion.a
            href="#models"
            className="inline-block px-16 py-6 bg-black text-white font-bold rounded-full text-[11px] uppercase tracking-[0.3em] shadow-2xl overflow-hidden relative group hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-brand-cyan"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Explore EV Models</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
