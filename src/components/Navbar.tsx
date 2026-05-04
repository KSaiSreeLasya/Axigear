import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar({ onContact, onFranchise, currentPage = 'home' }: { onContact: () => void; onFranchise?: () => void; currentPage?: string }) {
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
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-3 sm:px-4 md:px-6 ${scrolled ? 'pt-3 sm:pt-4 md:pt-5' : 'pt-4 sm:pt-6 md:pt-8'}`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 transition-all duration-700 rounded-xl sm:rounded-2xl md:rounded-full ${scrolled ? 'glass shadow-[0_12px_40px_rgba(0,0,0,0.15)] backdrop-blur-xl border border-white/40 bg-white/20' : 'bg-white/10 backdrop-blur-sm border border-white/10'}`}>
        {/* Logo with Enhanced Interaction */}
        <motion.div
          className="flex items-center gap-1.5 sm:gap-2 md:gap-3 group cursor-pointer flex-shrink-0"
          onClick={() => {
            if (currentPage !== 'home' && onFranchise) {
              onFranchise();
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 flex items-center justify-center flex-shrink-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F9cb17e967f804ce2b909c6bc3232a9f0%2F52f733b0dad049b3b14e2737328c7608?format=webp&width=800&height=1200"
              alt="Axigear Logo"
              className="w-full h-full object-contain"
              loading="eager"
            />
          </div>
          <span className="text-base sm:text-lg md:text-xl font-bold tracking-[0.3em] uppercase leading-none text-black">Axigear</span>
        </motion.div>

        {/* Desktop Links with Underline Animation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-12 ml-auto mr-6 lg:mr-8">
          {navLinks.map((link) => (
            <motion.button
              key={link.name}
              onClick={() => {
                if (currentPage !== 'home' && onFranchise) {
                  onFranchise();
                  setTimeout(() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                } else {
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className="text-[9px] md:text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] text-black/50 hover:text-brand-cyan transition-colors relative whitespace-nowrap"
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
            </motion.button>
          ))}
          {onFranchise && (
            <motion.button
              onClick={onFranchise}
              className="text-[9px] md:text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] text-black/50 hover:text-brand-cyan transition-colors relative whitespace-nowrap"
              onHoverStart={() => setActiveLink('Franchise')}
              onHoverEnd={() => setActiveLink('')}
            >
              Franchise
              {activeLink === 'Franchise' && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan to-brand-cyan/50 rounded-full"
                  layoutId="navbar-underline"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          )}
        </div>

        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <motion.button
            onClick={onContact}
            className="px-5 md:px-6 lg:px-8 py-2 md:py-2.5 lg:py-3 bg-black text-white text-[9px] md:text-[10px] lg:text-xs font-bold rounded-full uppercase tracking-[0.2em] shadow-lg hover:shadow-xl shadow-black/20 overflow-hidden relative group transition-all active:scale-95"
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
          className="md:hidden w-10 h-10 rounded-lg glass border-black/5 flex items-center justify-center text-black"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                <X size={18} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                <Menu size={18} />
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
            className="md:hidden absolute top-20 sm:top-24 left-3 sm:left-4 right-3 sm:right-4 glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 shadow-2xl border-white/40 backdrop-blur-xl"
          >
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => {
                  setIsOpen(false);
                  if (currentPage !== 'home' && onFranchise) {
                    onFranchise();
                    setTimeout(() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  } else {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="text-base sm:text-lg font-sans font-light tracking-tight text-black/80 hover:text-brand-cyan transition-colors py-2 text-left"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
              </motion.button>
            ))}
            {onFranchise && (
              <motion.button
                onClick={() => {
                  setIsOpen(false);
                  onFranchise();
                }}
                className="text-base sm:text-lg font-sans font-light tracking-tight text-black/80 hover:text-brand-cyan transition-colors py-2 text-left"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                Franchise
              </motion.button>
            )}
            <motion.button
              onClick={() => {
                setIsOpen(false);
                onContact();
              }}
              className="mt-4 sm:mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-brand-cyan text-white font-bold rounded-lg sm:rounded-2xl uppercase tracking-[0.2em] text-[10px] sm:text-xs shadow-lg shadow-brand-cyan/20 overflow-hidden relative group active:scale-95"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (navLinks.length + (onFranchise ? 1 : 0)) * 0.1 + 0.2 }}
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
