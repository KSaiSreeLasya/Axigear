import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar({ onContact }: { onContact: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '#models' },
    { name: 'Why EV', href: '#technology' },
    { name: 'Services', href: '#services' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-4 md:px-6 ${scrolled ? 'pt-4 md:pt-5' : 'pt-6 md:pt-8'}`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4 md:py-5 transition-all duration-700 rounded-2xl md:rounded-full ${scrolled ? 'glass shadow-[0_12px_40px_rgba(0,0,0,0.15)] backdrop-blur-xl border border-white/40 bg-white/20' : 'bg-white/10 backdrop-blur-sm border border-white/10'}`}>
        {/* Logo with Enhanced Interaction */}
        <motion.div
          className="flex items-center gap-2 md:gap-3 group cursor-pointer flex-shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-8 h-8 md:w-9 md:h-9 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Zap className="text-brand-cyan w-7 h-7 md:w-8 md:h-8 fill-brand-cyan" />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-brand-cyan/30 blur-lg rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1.3 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <span className="text-lg md:text-xl font-bold tracking-[0.3em] uppercase leading-none hidden sm:block text-black">Axigear</span>
        </motion.div>

        {/* Desktop Links with Underline Animation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12 ml-auto mr-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-black/50 hover:text-brand-cyan transition-colors relative whitespace-nowrap"
              onHoverStart={() => setActiveLink(link.name)}
              onHoverEnd={() => setActiveLink('')}
            >
              {link.name}
              {activeLink === link.name && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan to-brand-cyan/50 rounded-full"
                  layoutId="navbar-underline"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          <motion.button
            onClick={onContact}
            className="px-6 md:px-8 py-2.5 md:py-3 bg-black text-white text-[10px] md:text-xs font-bold rounded-full uppercase tracking-[0.2em] shadow-lg hover:shadow-xl shadow-black/20 overflow-hidden relative group transition-all"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-brand-cyan"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10">Contact</span>
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          className="md:hidden w-10 h-10 rounded-full glass border-black/5 flex items-center justify-center text-black"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu with Enhanced Animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-24 left-4 right-4 glass rounded-3xl p-6 flex flex-col gap-4 shadow-2xl border-white/40 backdrop-blur-xl"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-xl font-sans font-light tracking-tight text-black/80 hover:text-brand-cyan transition-colors"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              onClick={() => {
                setIsOpen(false);
                onContact();
              }}
              className="mt-6 px-8 py-4 bg-brand-cyan text-white font-bold rounded-2xl uppercase tracking-[0.2em] text-xs shadow-lg shadow-brand-cyan/20 overflow-hidden relative group"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
