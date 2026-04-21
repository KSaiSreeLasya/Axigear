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
    { name: 'Models', href: '#models' },
    { name: 'Technology', href: '#technology' },
    { name: 'Services', href: '#services' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-6 ${scrolled ? 'pt-4' : 'pt-8'}`}>
      <div className={`max-w-screen-xl mx-auto flex items-center justify-between px-8 py-4 transition-all duration-700 ${scrolled ? 'glass rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)]' : 'bg-transparent'}`}>
        {/* Logo with Enhanced Interaction */}
        <motion.div
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Zap className="text-brand-cyan w-6 h-6 fill-brand-cyan" />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-brand-cyan/30 blur-lg rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <span className="text-xl font-bold tracking-[0.4em] uppercase leading-none hidden sm:block">Axigear</span>
        </motion.div>

        {/* Desktop Links with Underline Animation */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-brand-cyan transition-colors relative"
              onHoverStart={() => setActiveLink(link.name)}
              onHoverEnd={() => setActiveLink('')}
            >
              {link.name}
              {activeLink === link.name && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-cyan"
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

        <div className="hidden md:flex items-center gap-6">
          <motion.button
            onClick={onContact}
            className="px-8 py-3 bg-black text-white text-[10px] font-bold rounded-full uppercase tracking-[0.2em] shadow-xl shadow-black/10 overflow-hidden relative group"
            whileHover={{ scale: 1.05 }}
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
            className="md:hidden absolute top-28 left-6 right-6 glass rounded-[32px] p-8 flex flex-col gap-6 shadow-2xl border-white/50 backdrop-blur-md"
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
