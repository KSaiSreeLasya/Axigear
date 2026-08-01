import { ArrowDown, ArrowRight, ArrowUpRight, BatteryCharging, Leaf, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero({ onConfigure }: { onConfigure: (id: string) => void }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-28 sm:pt-32 md:pt-36">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-brand-cyan/[0.02] to-brand-cyan/[0.06]" />
      <div className="absolute right-[-12rem] top-[-8rem] h-[32rem] w-[32rem] rounded-full bg-brand-cyan/[0.12] blur-[120px]" />
      <div className="absolute bottom-[-16rem] left-[-10rem] h-[34rem] w-[34rem] rounded-full bg-green-400/[0.08] blur-[140px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black_0%,transparent_80%)]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-14 px-4 pb-16 sm:px-6 md:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-8">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="mb-7 flex items-center gap-3 sm:mb-9"
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <span className="h-px w-10 bg-brand-cyan sm:w-14" />
            <span className="text-[10px] font-bold uppercase tracking-[0.38em] text-brand-cyan sm:text-[11px]">The future moves here</span>
          </motion.div>

          <motion.h1
            className="max-w-4xl text-5xl font-light leading-[0.95] tracking-[-0.06em] text-black sm:text-7xl md:text-8xl lg:text-[7.6rem]"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
          >
            Move with
            <span className="mt-2 block bg-gradient-to-r from-brand-cyan via-brand-cyan/80 to-green-500/70 bg-clip-text font-normal italic text-transparent sm:mt-3">purpose.</span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-xl text-sm leading-7 text-black/55 sm:mt-9 sm:text-base sm:leading-8 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Electric mobility designed around your everyday. Experience confident performance, thoughtful technology, and a cleaner way to go further.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:items-center sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.7 }}
          >
            <a
              href="#models"
              className="group flex items-center justify-center gap-3 rounded-xl bg-black px-7 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-white shadow-lg shadow-black/15 transition-all hover:bg-brand-cyan hover:shadow-2xl hover:shadow-brand-cyan/20 active:scale-95 sm:px-8"
            >
              Explore the range
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              type="button"
              onClick={() => onConfigure('axigear-hestur-werewolf')}
              className="flex items-center justify-center gap-2 rounded-xl border border-black/10 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-black/70 transition-all hover:border-brand-cyan/40 hover:text-brand-cyan sm:px-8"
            >
              Build your ride
            </button>
          </motion.div>

          <motion.div
            className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-black/10 pt-6 sm:mt-16 sm:gap-8 sm:pt-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.72, duration: 0.8 }}
          >
            {[
              { value: '120+', label: 'KM RANGE', icon: BatteryCharging },
              { value: '0%', label: 'TAILPIPE EMISSIONS', icon: Leaf },
              { value: '24/7', label: 'OWNER SUPPORT', icon: ShieldCheck },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col gap-2">
                <Icon className="h-4 w-4 text-brand-cyan sm:h-5 sm:w-5" />
                <p className="font-display text-xl font-light tracking-tight text-black sm:text-2xl">{value}</p>
                <p className="max-w-[7rem] text-[8px] font-bold leading-4 tracking-[0.16em] text-black/40 sm:text-[9px]">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto flex h-[25rem] w-full max-w-[30rem] items-center justify-center sm:h-[32rem] lg:h-[38rem] lg:max-w-none"
          initial={{ opacity: 0, scale: 0.92, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute h-[18rem] w-[18rem] rounded-full border border-brand-cyan/20 sm:h-[26rem] sm:w-[26rem]" />
          <div className="absolute h-[13rem] w-[13rem] rounded-full border border-brand-cyan/15 sm:h-[19rem] sm:w-[19rem]" />
          <div className="absolute h-[9rem] w-[9rem] rounded-full bg-brand-cyan/[0.1] blur-3xl sm:h-[14rem] sm:w-[14rem]" />

          <motion.div
            className="relative flex h-[15rem] w-[15rem] flex-col items-center justify-center rounded-[3rem] border border-white/80 bg-white/65 p-8 text-center shadow-[0_30px_90px_rgba(59,130,246,0.18)] backdrop-blur-xl sm:h-[22rem] sm:w-[22rem] sm:rounded-[4rem]"
            animate={{ y: [0, -10, 0], rotate: [0, 1.5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white shadow-xl shadow-brand-cyan/15 sm:mb-7 sm:h-20 sm:w-20 sm:rounded-3xl">
              <Zap className="h-7 w-7 fill-brand-cyan text-brand-cyan sm:h-10 sm:w-10" />
            </div>
            <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-brand-cyan sm:text-[10px]">Axigear</p>
            <p className="mt-3 font-display text-3xl font-light tracking-[-0.05em] text-black sm:text-5xl">Electric, elevated.</p>
            <p className="mt-4 max-w-[13rem] text-[10px] leading-5 text-black/45 sm:text-xs sm:leading-6">Performance that feels natural. Technology that stays out of your way.</p>
          </motion.div>

          <motion.div
            className="absolute right-0 top-5 rounded-2xl border border-white/70 bg-white/60 px-4 py-3 shadow-xl shadow-brand-cyan/10 backdrop-blur-xl sm:right-2 sm:top-10 sm:px-5 sm:py-4"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          >
            <Sparkles className="mb-2 h-4 w-4 text-brand-cyan" />
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-black/50">Smart by design</p>
          </motion.div>

          <motion.div
            className="absolute bottom-4 left-0 rounded-2xl border border-white/70 bg-white/60 px-4 py-3 shadow-xl shadow-brand-cyan/10 backdrop-blur-xl sm:bottom-12 sm:left-1 sm:px-5 sm:py-4"
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-black/50">Made for India</p>
            <div className="mt-2 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-green-500" /><span className="text-xs font-medium text-black">Ready for every commute</span></div>
          </motion.div>
        </motion.div>
      </div>

      <a href="#services" className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-black/35 transition-colors hover:text-brand-cyan md:flex" aria-label="Scroll to services">
        <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Discover more</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
