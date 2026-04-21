import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar({ onContact }: { onContact: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Models', href: '#models' },
    { name: 'Technology', href: '#technology' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-6 ${scrolled ? 'pt-4' : 'pt-8'}`}>
      <div className={`max-w-screen-xl mx-auto flex items-center justify-between px-8 py-4 transition-all duration-700 ${scrolled ? 'glass rounded-full shadow-2xl' : 'bg-transparent'}`}>
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative">
            <Zap className="text-brand-cyan w-6 h-6 fill-brand-cyan transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-brand-cyan/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-xl font-bold tracking-[0.4em] uppercase leading-none hidden sm:block">Axigear</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-brand-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={onContact}
            className="px-8 py-3 bg-black text-white text-[10px] font-bold rounded-full hover:bg-brand-cyan transition-all uppercase tracking-[0.2em] shadow-xl shadow-black/10 active:scale-95"
          >
            Contact
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-10 h-10 rounded-full glass border-black/5 flex items-center justify-center text-black" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden absolute top-28 left-6 right-6 glass rounded-[32px] p-8 flex flex-col gap-6 shadow-2xl border-white/50"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-sans font-light tracking-tight text-black/80 hover:text-brand-cyan transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsOpen(false);
                onContact();
              }}
              className="mt-6 px-8 py-4 bg-brand-cyan text-white font-bold rounded-2xl uppercase tracking-[0.2em] text-xs shadow-lg shadow-brand-cyan/20"
            >
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
