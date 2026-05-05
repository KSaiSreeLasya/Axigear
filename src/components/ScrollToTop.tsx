import { motion, useScroll } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsVisible(latest > 300);
    });

    return () => unsubscribe();
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-brand-cyan to-cyan-500 flex items-center justify-center text-white shadow-lg hover:shadow-2xl hover:shadow-brand-cyan/50 transition-all z-50 cursor-pointer"
      aria-label="Scroll to top"
      style={{
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      <ChevronUp className="w-6 h-6" />
    </motion.button>
  );
}
