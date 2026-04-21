import { Zap, Instagram, Twitter, Facebook, Youtube, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-40 pb-20 px-6 border-t border-black/5 bg-transparent relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-40">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-10 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Zap className="text-brand-cyan w-6 h-6 fill-brand-cyan" />
              <span className="text-2xl font-bold tracking-[0.4em] uppercase">Axigear</span>
            </div>
            <p className="text-black/40 text-sm leading-loose max-w-sm mb-12 uppercase tracking-widest">
              Progressive electric mobility company redefining urban transportation through innovation, reliability, and sustainability.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full glass border-black/5 flex items-center justify-center text-black/40 hover:bg-black hover:text-white transition-all shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-brand-cyan font-bold mb-10">Products</h4>
            <ul className="flex flex-col gap-5">
              {['Non-RTO', 'RTO Registered', 'Multi-Brand', 'In-House'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-black/40 hover:text-brand-cyan transition-colors uppercase tracking-[0.2em] font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-brand-cyan font-bold mb-10">Services</h4>
            <ul className="flex flex-col gap-5">
              {['EV Servicing', 'Spare Parts', 'Support', 'Warranty'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-black/40 hover:text-brand-cyan transition-colors uppercase tracking-[0.2em] font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-brand-cyan font-bold mb-10">Our Values</h4>
            <p className="text-black/40 text-sm mb-8 leading-loose">Customer Satisfaction, Quality Excellence, Trust & Transparency, Innovation, and Sustainability drive everything we do.</p>
            <div className="flex gap-3">
              <span className="text-[10px] font-mono text-brand-cyan">Contact:</span>
              <a href="mailto:info@axigear.com" className="text-[10px] text-black/40 hover:text-brand-cyan transition-colors font-medium">info@axigear.com</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-black/5">
          <p className="text-[10px] uppercase tracking-[0.4em] text-black/20 font-bold">© 2024-2026 AXIGEAR ELECTRIC VEHICLES. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <a href="#" className="text-[10px] uppercase tracking-[0.4em] text-black/20 hover:text-black transition-colors font-bold">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.4em] text-black/20 hover:text-black transition-colors font-bold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
