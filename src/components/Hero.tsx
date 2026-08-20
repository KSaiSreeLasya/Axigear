import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, BatteryCharging, Gauge, Zap } from 'lucide-react';
import { vehicles } from '../data/vehicles';

const heroBanners = [
  {
    vehicle: vehicles[0],
    eyebrow: 'Extended-range electric',
    title: 'Go beyond\nthe everyday.',
    accent: 'from-cyan-300 via-brand-cyan to-blue-600',
    backdrop: 'from-[#f1fbfc] via-white to-[#e7f5f7]',
    glow: 'bg-brand-cyan/20',
  },
  {
    vehicle: vehicles[1],
    eyebrow: 'Built for the city',
    title: 'Charge less.\nRide more.',
    accent: 'from-orange-300 via-orange-400 to-red-500',
    backdrop: 'from-[#fffaf5] via-white to-[#fff0e7]',
    glow: 'bg-orange-300/20',
  },
  {
    vehicle: vehicles[2],
    eyebrow: 'Everyday performance',
    title: 'Own every\nturn ahead.',
    accent: 'from-violet-300 via-fuchsia-400 to-rose-500',
    backdrop: 'from-[#fcf9ff] via-white to-[#f5effd]',
    glow: 'bg-fuchsia-300/20',
  },
];

export default function Hero({ onConfigure }: { onConfigure: (id: string) => void }) {
  const [activeBanner, setActiveBanner] = useState(0);
  const banner = heroBanners[activeBanner];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveBanner((current) => (current + 1) % heroBanners.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const selectBanner = (index: number) => setActiveBanner((index + heroBanners.length) % heroBanners.length);

  return (
    <section className="relative overflow-hidden bg-white pt-20 sm:pt-24">
      <div className={`absolute inset-0 bg-gradient-to-br ${banner.backdrop} transition-colors duration-700`} />
      <div className={`absolute left-[35%] top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full ${banner.glow} blur-[160px] transition-colors duration-700`} />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-70" />

      <div className="relative mx-auto min-h-[calc(100svh-5rem)] max-w-[100rem] px-4 pb-12 sm:px-6 lg:px-10">
        <div className="grid min-h-[calc(100svh-5rem)] items-center gap-5 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:py-14">
          <div className="relative z-10 max-w-xl lg:pl-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={banner.vehicle.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className={`h-px w-12 bg-gradient-to-r ${banner.accent}`} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/55">{banner.eyebrow}</span>
                </div>
                <h1 className="whitespace-pre-line text-5xl font-semibold leading-[0.88] tracking-[-0.065em] text-black sm:text-7xl md:text-8xl lg:text-[6.2rem]">
                  {banner.title}
                </h1>
                <p className="mt-6 max-w-md text-sm leading-7 text-black/55 sm:text-base">
                  {banner.vehicle.description}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={() => onConfigure(banner.vehicle.id)}
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-black px-7 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-white shadow-lg shadow-black/10 transition-all hover:bg-brand-cyan hover:shadow-brand-cyan/20 hover:scale-[1.03] active:scale-95"
                  >
                    Configure yours <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                  <a href="/products" className="inline-flex items-center justify-center rounded-full border border-black/15 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-black/70 transition-colors hover:border-brand-cyan hover:bg-brand-cyan/5 hover:text-brand-cyan">
                    Explore range
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative flex min-h-[25rem] items-center justify-center sm:min-h-[31rem] lg:min-h-[39rem]">
            <div className="absolute h-[18rem] w-[18rem] rounded-full border border-brand-cyan/15 sm:h-[27rem] sm:w-[27rem]" />
            <div className="absolute h-[23rem] w-[23rem] rounded-full border border-black/[0.06] sm:h-[35rem] sm:w-[35rem]" />
            <div className="absolute bottom-6 left-0 right-0 h-24 rounded-[100%] bg-brand-cyan/15 blur-2xl" />
            <AnimatePresence mode="wait">
              <motion.img
                key={banner.vehicle.id}
                src={banner.vehicle.image}
                alt={banner.vehicle.name}
                className="relative z-10 h-[25rem] w-full max-w-[35rem] object-contain drop-shadow-[0_35px_25px_rgba(15,23,42,0.2)] sm:h-[32rem] lg:h-[39rem]"
                initial={{ opacity: 0, x: 50, scale: 0.94 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -38, scale: 0.96 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
            <div className="absolute right-0 top-8 z-20 rounded-2xl border border-black/[0.08] bg-white/75 px-4 py-3 shadow-xl shadow-slate-900/[0.06] backdrop-blur-md sm:right-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/45">Starting at</p>
              <p className="mt-1 text-lg font-semibold text-black">₹{banner.vehicle.basePrice.toLocaleString('en-IN')}</p>
            </div>
          </div>
        </div>

        <div className="relative z-20 grid gap-4 border-t border-black/10 pt-5 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-black/60">
            <div className="flex items-center gap-2"><BatteryCharging className="h-4 w-4 text-brand-cyan" /><span className="text-[10px] font-bold uppercase tracking-[0.16em]">{banner.vehicle.range} range</span></div>
            <div className="flex items-center gap-2"><Gauge className="h-4 w-4 text-brand-cyan" /><span className="text-[10px] font-bold uppercase tracking-[0.16em]">{banner.vehicle.acceleration}</span></div>
            <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-brand-cyan" /><span className="text-[10px] font-bold uppercase tracking-[0.16em]">Zero tailpipe emissions</span></div>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => selectBanner(activeBanner - 1)} aria-label="Previous banner" className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-black/65 transition-colors hover:border-black hover:bg-black hover:text-white"><ArrowLeft className="h-4 w-4" /></button>
            <div className="flex gap-2" aria-label="Banner selection">
              {heroBanners.map((item, index) => (
                <button key={item.vehicle.id} onClick={() => selectBanner(index)} aria-label={`Show ${item.vehicle.name} banner`} className={`h-1.5 rounded-full transition-all ${activeBanner === index ? 'w-9 bg-black' : 'w-3 bg-black/20 hover:bg-black/45'}`} />
              ))}
            </div>
            <button onClick={() => selectBanner(activeBanner + 1)} aria-label="Next banner" className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-black/65 transition-colors hover:border-black hover:bg-black hover:text-white"><ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
