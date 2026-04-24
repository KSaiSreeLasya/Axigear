import { Instagram, Twitter, Facebook, Youtube, ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="pt-40 pb-20 px-6 border-t border-black/5 bg-transparent relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-40">
          {/* Brand & Description */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-10 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="relative w-8 h-8 flex items-center justify-center flex-shrink-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F9cb17e967f804ce2b909c6bc3232a9f0%2F52f733b0dad049b3b14e2737328c7608?format=webp&width=800&height=1200"
                  alt="Axigear Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-[0.4em] uppercase">Axigear</span>
            </div>
            <p className="text-black/40 text-sm leading-loose max-w-sm mb-12 uppercase tracking-widest">
              Progressive electric mobility company redefining urban transportation through innovation, reliability, and sustainability.
            </p>
            <div className="flex gap-4 mb-8">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-full glass border-black/5 flex items-center justify-center text-black/40 hover:bg-black hover:text-white transition-all shadow-sm hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Products */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-brand-cyan font-bold mb-10">Products</h4>
            <ul className="flex flex-col gap-5">
              {['RTO Registered', 'Non-RTO Scooters', 'Electric Bikes', 'Multi-Brand'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-black/40 hover:text-brand-cyan transition-colors uppercase tracking-[0.2em] font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-brand-cyan font-bold mb-10">Services</h4>
            <ul className="flex flex-col gap-5">
              {['EV Servicing', 'Spare Parts', 'After-Sales Support', 'Warranty'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-black/40 hover:text-brand-cyan transition-colors uppercase tracking-[0.2em] font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-brand-cyan font-bold mb-10">Get In Touch</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-brand-cyan mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-bold mb-1">Email</p>
                  <a href="mailto:info@axigear.com" className="text-sm text-black/40 hover:text-brand-cyan transition-colors">info@axigear.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-brand-cyan mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-bold mb-1">Support</p>
                  <a href="tel:+918001234567" className="text-sm text-black/40 hover:text-brand-cyan transition-colors">1-800-AXIGEAR</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-brand-cyan mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-bold mb-1">Visit Us</p>
                  <a
                    href="https://www.google.com/maps/place/Axigear+Electric+Lounge/@17.492970783412304,78.34556287493729,15z/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-black/40 hover:text-brand-cyan transition-colors"
                  >
                    View Location on Map
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-black/5">
          <motion.p 
            className="text-[10px] uppercase tracking-[0.4em] text-black/20 font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            © 2024 AXIGEAR ELECTRIC MOBILITY. ALL RIGHTS RESERVED.
          </motion.p>
          <motion.div 
            className="flex gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <a href="#" className="text-[10px] uppercase tracking-[0.4em] text-black/20 hover:text-black transition-colors font-bold">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.4em] text-black/20 hover:text-black transition-colors font-bold">Terms of Service</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.4em] text-black/20 hover:text-black transition-colors font-bold">Sustainability</a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
