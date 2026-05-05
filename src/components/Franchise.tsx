import { motion } from 'motion/react';
import { TrendingUp, Users, Globe, CheckCircle, ArrowRight, Target, Zap, Shield, Briefcase, Wrench, BarChart3, Headphones, RefreshCw, Award } from 'lucide-react';

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

  const investmentHighlights = [
    { value: '₹0', label: 'Franchise Cost', color: 'from-brand-cyan to-blue-400' },
    { value: '₹3L', label: 'Starting Investment', color: 'from-green-400 to-cyan-400' },
    { value: '8-12 M', label: 'Return of Investment', color: 'from-brand-cyan to-cyan-400' },
  ];

  const franchiseSupport = [
    {
      category: 'Pre-Launch Support',
      icon: <Briefcase className="w-6 h-6" />,
      items: [
        'Site selection & layout planning',
        'Showroom design & branding kit',
        'Complete setup assistance',
        'Staff recruitment guidance',
      ],
    },
    {
      category: 'Training Program',
      icon: <Users className="w-6 h-6" />,
      items: [
        '3-day sales training (HQ)',
        'Technical/service technician training',
        'EV technology certification',
        'Ongoing e-learning portal',
      ],
    },
    {
      category: 'Marketing Support',
      icon: <BarChart3 className="w-6 h-6" />,
      items: [
        'Launch event & local PR',
        'Digital marketing assets',
        'Hyper-local social media kit',
        'Festive campaign support',
      ],
    },
    {
      category: 'Ongoing Operations',
      icon: <Headphones className="w-6 h-6" />,
      items: [
        'Dedicated franchise manager',
        'Monthly performance review',
        'Inventory & logistics support',
        '24/7 helpdesk for franchisees',
      ],
    },
    {
      category: 'Financial Support',
      icon: <BarChart3 className="w-6 h-6" />,
      items: [
        'Bank loan tie-ups (MUDRA, SBI)',
        'Customer EMI schemes (0% options)',
        'FAME II & state subsidy guidance',
        'Fleet finance partnerships',
      ],
    },
    {
      category: 'After-Sales & Warranty',
      icon: <Award className="w-6 h-6" />,
      items: [
        '3-year vehicle warranty backup',
        'Battery warranty support',
        'AMC plan framework provided',
        'Rapid spare parts supply chain',
      ],
    },
  ];

  const eligibilityRequirements = [
    {
      title: 'Who Should Apply?',
      items: [
        'Existing petrol vehicle dealers looking to go EV',
        'Business owners with commercial space in Hyderabad / Telangana',
        'Entrepreneurs with min. ₹3L own investment',
        'Corporate/HNI investors seeking passive franchise income',
        'Auto sector professionals / mechanics',
        'Group of investors / partnership firms',
      ],
    },
    {
      title: 'Requirements',
      items: [
        { label: 'Location', value: 'Commercial area, main road, Hyderabad/Telangana' },
        { label: 'Space', value: 'Min 200 sq.ft (Silver) to 2000+ sq.ft (Platinum)' },
        { label: 'Investment', value: '₹3L - ₹90L based on tier' },
        { label: 'GST & Trade License', value: 'Existing or willing to obtain' },
        { label: 'Agreement', value: '2-year franchise agreement (renewable)' },
        { label: 'Team', value: 'Min. 2 staff — 1 sales + 1 technician' },
      ],
    },
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
          <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
            {/* Main Hero Content */}
            <motion.div
              className="text-center mb-16 sm:mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <span className="text-brand-cyan tracking-[0.5em] uppercase text-[10px] font-bold mb-6 block">Join the Revolution</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-light leading-[1.1] tracking-[-0.02em] mb-6 sm:mb-8 text-black">
                Build Your <br />
                <span className="bg-gradient-to-r from-brand-cyan via-brand-cyan/80 to-green-500/70 bg-clip-text text-transparent font-normal italic whitespace-nowrap">EV Empire</span>
              </h1>
              <p className="text-black/60 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
                Join the sustainable mobility revolution as an Axigear franchise partner. Own a profitable business while driving positive environmental change across India.
              </p>
            </motion.div>

            {/* Investment Highlights */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {investmentHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-[28px] p-8 sm:p-10 backdrop-blur-xl"
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-20`} />
                  <div className="absolute inset-0 bg-white/30 backdrop-blur-xl border border-white/40" />

                  <div className="relative z-10 text-center">
                    <h3 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent`}>
                      {highlight.value}
                    </h3>
                    <p className="text-black/70 text-sm sm:text-base font-semibold tracking-wide">
                      {highlight.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
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

            {/* Scroll Down Arrow */}
            <motion.div
              className="flex justify-center mt-12 sm:mt-16"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-brand-cyan/50 flex items-center justify-center text-brand-cyan hover:border-brand-cyan hover:bg-brand-cyan/10 transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:text-brand-cyan transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-white via-cyan-50/40 to-white">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand-cyan/[0.06] blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-green-400/[0.04] blur-[150px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="mb-16 sm:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-8 sm:w-12 bg-gradient-to-r from-brand-cyan to-green-400" />
              <span className="text-brand-cyan tracking-[0.5em] uppercase text-[10px] font-bold">Eligibility Criteria</span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-sans font-light tracking-[-0.04em] leading-tight text-black mb-4">
              Franchise Eligibility & Requirements
            </h2>
            <p className="text-black/50 text-base sm:text-lg max-w-3xl">
              Check if you meet our eligibility criteria and understand what's required to become a successful Axigear franchise partner.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {eligibilityRequirements.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative group flex flex-col"
              >
                {/* Card Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/15 via-cyan-300/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px] blur-2xl" />

                <div className="relative p-8 sm:p-10 rounded-[32px] border-2 border-brand-cyan/20 group-hover:border-brand-cyan/40 transition-all duration-500 bg-white/70 backdrop-blur-sm flex flex-col h-full shadow-lg shadow-brand-cyan/5">
                  {/* Section Title with Icon */}
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      className="w-14 h-14 rounded-[16px] bg-gradient-to-br from-brand-cyan/25 to-cyan-300/15 flex items-center justify-center border-2 border-brand-cyan/30 flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      {index === 0 ? (
                        <Users className="w-7 h-7 text-brand-cyan" />
                      ) : (
                        <Briefcase className="w-7 h-7 text-brand-cyan" />
                      )}
                    </motion.div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-black">
                      {section.title}
                    </h3>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-brand-cyan/40 to-transparent mb-8" />

                  {/* Items Container - Flex for better spacing */}
                  <div className="space-y-3 sm:space-y-4 flex-1">
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 + itemIndex * 0.05, duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                        {typeof item === 'string' ? (
                          <div className="flex items-start gap-3 group/item">
                            <motion.div
                              className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-cyan to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1 group-hover/item:scale-125 shadow-md shadow-brand-cyan/30"
                              whileHover={{ scale: 1.2 }}
                            >
                              <CheckCircle className="w-3.5 h-3.5 text-white" />
                            </motion.div>
                            <p className="text-black/70 text-sm sm:text-base leading-relaxed group-hover/item:text-black/90 transition-colors font-medium">
                              {item}
                            </p>
                          </div>
                        ) : (
                          <div className="w-full p-4 sm:p-5 rounded-[16px] bg-gradient-to-br from-brand-cyan/12 to-cyan-200/8 border-2 border-brand-cyan/25 hover:border-brand-cyan/50 transition-all duration-300 shadow-sm shadow-brand-cyan/10 hover:shadow-md hover:shadow-brand-cyan/20">
                            <div className="flex items-start gap-3">
                              <motion.div
                                className="w-5 h-5 rounded-lg bg-gradient-to-br from-brand-cyan to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-brand-cyan/30"
                                whileHover={{ scale: 1.15 }}
                              >
                                <span className="text-white text-xs font-bold">✓</span>
                              </motion.div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs sm:text-sm font-bold text-brand-cyan uppercase tracking-wider mb-2">
                                  {item.label}
                                </p>
                                <p className="text-black/60 text-sm leading-relaxed break-words">
                                  {item.value}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Eligibility CTA */}
          <motion.div
            className="mt-16 sm:mt-24 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="max-w-2xl mx-auto p-8 sm:p-10 rounded-[28px] bg-gradient-to-r from-brand-cyan/15 via-cyan-300/10 to-green-400/10 border-2 border-brand-cyan/30 shadow-lg shadow-brand-cyan/20">
              <p className="text-black/80 mb-2 text-base font-semibold">Think you're a great fit?</p>
              <p className="text-black/60 mb-6 text-sm">Our franchise experts are ready to discuss your opportunity and answer all your questions.</p>
              <button
                onClick={onContact}
                className="px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-brand-cyan to-cyan-500 text-black font-bold rounded-full text-[11px] sm:text-[12px] uppercase tracking-[0.3em] hover:shadow-2xl hover:shadow-brand-cyan/40 transition-all active:scale-95 inline-flex items-center gap-2 shadow-lg"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Support Section */}
      <section className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-white via-cyan-50/30 to-white">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-cyan/[0.08] blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-green-400/[0.06] blur-[150px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="mb-16 sm:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-8 sm:w-12 bg-gradient-to-r from-brand-cyan to-green-400" />
              <span className="text-brand-cyan tracking-[0.5em] uppercase text-[10px] font-bold">Complete Ecosystem</span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-sans font-light tracking-[-0.04em] leading-tight mb-4">
              Franchisee Support — What You Get
            </h2>
            <p className="text-black/50 text-base sm:text-lg max-w-3xl">
              We provide end-to-end support across every stage of your franchise journey, from pre-launch to operations and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {franchiseSupport.map((support, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative rounded-[32px] overflow-hidden h-full"
                whileHover={{ y: -12 }}
              >
                {/* Gradient Border Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/40 via-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                {/* Card Background */}
                <div className="absolute inset-0 bg-white/60 backdrop-blur-2xl border border-white/80 group-hover:border-brand-cyan/40 transition-all duration-500" />

                <div className="relative z-10 p-8 sm:p-10 flex flex-col h-full">
                  {/* Icon Container */}
                  <motion.div
                    className="w-16 h-16 rounded-[20px] bg-gradient-to-br from-brand-cyan/25 to-blue-400/15 flex items-center justify-center text-brand-cyan mb-6 border border-brand-cyan/20 group-hover:border-brand-cyan/50"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {support.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-display font-semibold mb-6 text-black group-hover:text-brand-cyan transition-colors duration-300">
                    {support.category}
                  </h3>

                  {/* Items List */}
                  <ul className="space-y-3 flex-1">
                    {support.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 + itemIndex * 0.02, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 group/item"
                      >
                        <motion.div
                          className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-cyan to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110"
                          whileHover={{ scale: 1.2 }}
                        >
                          <CheckCircle className="w-3 h-3 text-white" />
                        </motion.div>
                        <span className="text-black/65 text-sm leading-relaxed group-hover/item:text-black/80 transition-colors">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Animated Bottom Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Support CTA */}
          <motion.div
            className="mt-16 sm:mt-24 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-black/50 mb-6 text-base">Have questions about our support? </p>
            <button
              onClick={onContact}
              className="px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-brand-cyan to-cyan-500 text-black font-bold rounded-full text-[11px] sm:text-[12px] uppercase tracking-[0.3em] hover:shadow-2xl hover:shadow-brand-cyan/30 transition-all active:scale-95 inline-flex items-center gap-2"
            >
              Get Detailed Info
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
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
