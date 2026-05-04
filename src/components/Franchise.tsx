import { motion } from 'motion/react';
import { TrendingUp, Users, Globe, CheckCircle, ArrowRight, Target, Zap, Shield } from 'lucide-react';

export default function Franchise({ onContact }: { onContact: () => void }) {
  const franchisePoints = [
    {
      id: '01',
      title: 'Proven Business Model',
      desc: 'Join a rapidly expanding EV market with a scalable and profitable franchise structure.',
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      id: '02',
      title: 'Brand Recognition',
      desc: 'Partner with Axigear - a trusted name in affordable and sustainable mobility.',
      icon: <Globe className="w-6 h-6" />,
    },
    {
      id: '03',
      title: 'Comprehensive Support',
      desc: 'Dedicated training, marketing materials, and operational guidance for success.',
      icon: <Users className="w-6 h-6" />,
    },
    {
      id: '04',
      title: 'Market Opportunity',
      desc: 'Tap into the booming EV adoption trend with growing demand across India.',
      icon: <Target className="w-6 h-6" />,
    },
  ];

  const requirements = [
    { text: 'Passion for sustainable mobility and customer service', icon: <Zap className="w-5 h-5" /> },
    { text: 'Investment capital for inventory and showroom setup', icon: <CheckCircle className="w-5 h-5" /> },
    { text: 'Strong local market presence and network', icon: <Users className="w-5 h-5" /> },
    { text: 'Commitment to brand values and quality standards', icon: <Shield className="w-5 h-5" /> },
  ];

  const benefits = [
    'Exclusive territory rights',
    'Competitive wholesale pricing',
    'Comprehensive marketing support',
    'Technical training programs',
    'Dedicated account manager',
    'Co-branded marketing materials',
    'Flexible payment terms',
    'Lifetime brand support',
  ];

  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col overflow-hidden pt-20 md:pt-24">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-brand-cyan/[0.02] to-brand-cyan/[0.05] -z-20" />

        {/* Ambient Glow Elements */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <motion.div
            className="absolute top-20 md:top-0 right-1/4 w-[800px] h-[800px] bg-brand-cyan/[0.12] blur-[150px] rounded-full"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-1/4 left-1/3 w-[600px] h-[600px] bg-green-400/[0.08] blur-[120px] rounded-full"
            animate={{ y: [0, -40, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="flex-1 flex items-center justify-center relative z-10 py-8 sm:py-12 md:py-16">
          <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <span className="text-brand-cyan tracking-[0.5em] uppercase text-[10px] font-bold mb-6 block">Partner With Us</span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-light leading-[1.1] tracking-[-0.02em] mb-6 sm:mb-8 text-black">
                Build Your <br />
                <span className="bg-gradient-to-r from-brand-cyan via-brand-cyan/80 to-green-500/70 bg-clip-text text-transparent font-normal italic">EV Empire</span>
              </h1>
              <p className="text-black/60 max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 text-sm sm:text-base md:text-lg leading-relaxed">
                Join the sustainable mobility revolution as an Axigear franchise partner. Own a profitable business while driving positive environmental change across India.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <button
                onClick={onContact}
                className="px-8 sm:px-12 md:px-16 py-3 sm:py-5 md:py-7 bg-black text-white font-bold rounded-lg sm:rounded-full text-[10px] sm:text-[11px] uppercase tracking-[0.3em] hover:bg-brand-cyan transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-2"
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#benefits"
                className="px-8 sm:px-12 md:px-16 py-3 sm:py-5 md:py-7 glass border-black/20 text-black font-bold rounded-lg sm:rounded-full text-[10px] sm:text-[11px] uppercase tracking-[0.3em] hover:bg-white/10 transition-all active:scale-95"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Franchise Section */}
      <section className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/[0.05] blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-green-400/[0.05] blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-cyan tracking-[0.5em] uppercase text-[10px] font-bold mb-6 block">Why Axigear</span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-sans font-light tracking-[-0.04em] leading-tight">
              Why Partner With Axigear?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {franchisePoints.map((point, index) => (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group glass rounded-[32px] p-8 sm:p-10 flex flex-col h-full border-white/50 overflow-hidden relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-cyan-400/5 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="w-14 h-14 rounded-xl glass-dark flex items-center justify-center text-brand-cyan mb-6"
                    whileHover={{ scale: 1.1, background: "rgba(59, 130, 246, 0.2)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {point.icon}
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl font-display font-light mb-4">
                    {point.title}
                  </h3>
                  <p className="text-black/40 text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 relative overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-cyan tracking-[0.5em] uppercase text-[10px] font-bold mb-6 block">Eligibility</span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-sans font-light tracking-[-0.04em] leading-tight text-white">
              What We're Looking For
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 sm:p-8 glass rounded-[24px] border-white/10"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan mt-1">
                  {req.icon}
                </div>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  {req.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/[0.05] blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-green-400/[0.05] blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-cyan tracking-[0.5em] uppercase text-[10px] font-bold mb-6 block">Franchise Benefits</span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-sans font-light tracking-[-0.04em] leading-tight">
              What You'll Gain
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 glass rounded-[24px] border-white/50 flex items-center gap-3 group hover:border-brand-cyan/50 transition-all"
              >
                <CheckCircle className="w-5 h-5 text-brand-cyan flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-sm sm:text-base text-black/70 group-hover:text-black transition-colors">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black -z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-cyan/[0.1] to-green-500/[0.05] -z-10" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-light leading-[1.2] tracking-[-0.02em] mb-6 sm:mb-8 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base">
              Get in touch with our franchise team to explore partnership opportunities and start building your success story with Axigear.
            </p>
            <motion.button
              onClick={onContact}
              className="px-8 sm:px-12 md:px-16 py-3 sm:py-5 md:py-7 bg-brand-cyan text-black font-bold rounded-lg sm:rounded-full text-[10px] sm:text-[11px] uppercase tracking-[0.3em] hover:bg-white transition-all shadow-2xl active:scale-95 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
