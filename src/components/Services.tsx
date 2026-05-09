import { motion } from 'motion/react';
import { Wrench, Package, Headphones, Award, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: '01',
      title: 'EV Servicing',
      desc: 'Expert maintenance and repair services to ensure optimal performance and longevity.',
      icon: <Wrench className="w-6 h-6" />,
      color: 'from-cyan-400/20 to-cyan-400/5',
    },
    {
      id: '02',
      title: 'Spare Parts Supply',
      desc: 'Reliable access to genuine and high-quality components for your vehicle.',
      icon: <Package className="w-6 h-6" />,
      color: 'from-blue-400/20 to-blue-400/5',
    },
    {
      id: '03',
      title: 'After-Sales Support',
      desc: 'Dedicated assistance for a seamless and worry-free ownership experience.',
      icon: <Headphones className="w-6 h-6" />,
      color: 'from-purple-400/20 to-purple-400/5',
    },
    {
      id: '04',
      title: 'Quality Assurance',
      desc: 'Every product and service reflects our commitment to superior standards.',
      icon: <Award className="w-6 h-6" />,
      color: 'from-green-400/20 to-green-400/5',
    },
  ];

  const values = [
    {
      title: 'Customer Satisfaction',
      desc: 'We prioritize customer needs and strive to exceed expectations at every touchpoint.',
    },
    {
      title: 'Quality Excellence',
      desc: 'Every product and service reflects our commitment to superior standards.',
    },
    {
      title: 'Trust & Transparency',
      desc: 'Honest communication and dependable service define our customer relationships.',
    },
    {
      title: 'Innovation',
      desc: 'Continuously evolving to deliver smarter and more efficient mobility solutions.',
    },
    {
      title: 'Sustainability',
      desc: 'Driving change towards a cleaner, greener future for all.',
    },
  ];

  return (
    <section id="services" className="py-40 px-6 relative overflow-hidden bg-transparent">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/[0.05] blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-green-400/[0.05] blur-[120px] rounded-full -z-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Services Header */}
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
              Beyond The Sale
            </motion.span>
            <motion.h2
              className="text-6xl md:text-8xl font-sans font-extralight tracking-[-0.05em] leading-[0.8] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              SERVICES & <br />
              <span className="italic font-normal">SUPPORT.</span>
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
              Our relationship with customers extends far beyond the point of sale with dedicated support.
            </p>
            <div className="flex gap-4">
               <motion.div
                 className="h-[1px] bg-black/10 mt-2"
                 animate={{ width: [0, 48, 48] }}
                 transition={{ duration: 1, delay: 0.5 }}
               />
               <p className="text-[10px] font-mono text-black/40">LIFETIME COMMITMENT</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group glass rounded-[32px] p-10 flex flex-col h-full border-white/50 overflow-hidden relative"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100`}
                transition={{ duration: 0.5 }}
              />

              <div className="relative z-10">
                <motion.div
                  className="w-14 h-14 rounded-xl glass-dark flex items-center justify-center text-brand-cyan mb-6"
                  whileHover={{ scale: 1.1, background: "rgba(59, 130, 246, 0.2)" }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-2xl font-display font-light mb-4">
                  {service.title}
                </h3>
                <p className="text-black/40 text-sm leading-relaxed mb-6 flex-1">
                  {service.desc}
                </p>

                <motion.div
                  className="flex items-center gap-2 text-[10px] font-bold text-brand-cyan opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <motion.div
          className="py-20 border-t border-black/5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.span
            className="text-brand-cyan tracking-[0.5em] uppercase text-[10px] font-bold mb-8 block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Core Values
          </motion.span>
          
          <motion.h2
            className="text-5xl md:text-7xl font-sans font-light tracking-[-0.04em] leading-tight mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Built on Strong Principles
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                className="group glass rounded-[24px] p-8 flex flex-col h-full border-white/50 hover:border-brand-cyan/50 transition-all"
              >
                <h4 className="text-lg font-display font-light mb-4 group-hover:text-brand-cyan transition-colors">
                  {value.title}
                </h4>
                <p className="text-black/70 text-sm leading-relaxed font-medium">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
