import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Battery, Gauge, Zap, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { Vehicle, VehicleColor } from '../data/vehicles';

interface ConfiguratorProps {
  vehicle: Vehicle | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function Configurator({ vehicle, isOpen, onClose }: ConfiguratorProps) {
  const [selectedColor, setSelectedColor] = useState<VehicleColor | null>(null);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  
  if (!vehicle) return null;

  // Initialize color if not set or if vehicle changed
  const currentColor = selectedColor || vehicle.colors[0];
  const totalPrice = vehicle.basePrice + currentColor.price;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-4xl glass rounded-3xl overflow-hidden flex flex-col md:flex-row max-h-[85vh] shadow-2xl border border-white/50 pt-4"
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass border-black/5 flex items-center justify-center text-black shadow-sm overflow-hidden relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="absolute inset-0 bg-black"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <X size={18} className="relative z-10 group-hover:text-white" />
            </motion.button>

            {/* Left: Visualizer */}
            <div className="flex-[1.5] relative bg-black/[0.02] p-8 md:p-10 flex items-center justify-center overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/5 to-transparent pointer-events-none"
                animate={{ opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative z-10 text-center w-full">
                <motion.div
                  key={currentColor.name}
                  initial={{ opacity: 0, scale: 1.1, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <motion.img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-auto max-w-2xl object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    referrerPolicy="no-referrer"
                  />
                  {/* Color Overlay Simulation with smooth transition */}
                  <motion.div
                    className="absolute inset-0 mix-blend-multiply pointer-events-none rounded-lg"
                    animate={{ opacity: [0.2, 0.35, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ backgroundColor: currentColor.hex }}
                  />
                </motion.div>

                <motion.div
                  className="mt-8 grid grid-cols-3 gap-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {[
                    { label: 'Range', value: vehicle.range, icon: <Battery size={16} className="text-brand-cyan" /> },
                    { label: 'Top Speed', value: vehicle.topSpeed, icon: <Gauge size={16} className="text-brand-cyan" /> },
                    { label: '0-60', value: vehicle.acceleration, icon: <Zap size={16} className="text-brand-cyan" /> },
                  ].map((spec, idx) => (
                    <motion.div
                      key={spec.label}
                      className="text-center group cursor-default"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + idx * 0.05 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex justify-center mb-2">{spec.icon}</div>
                      <p className="text-[10px] uppercase tracking-widest text-black/40 mb-1 group-hover:text-brand-cyan transition-colors">{spec.label}</p>
                      <p className="text-xl font-sans font-extralight italic">{spec.value}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute bottom-8 left-8 flex items-center gap-2 px-4 py-2 glass rounded-full border-black/5 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Zap size={14} className="text-brand-cyan fill-brand-cyan" />
                <span className="text-[10px] uppercase tracking-widest font-bold">100% Sustainable</span>
              </motion.div>
            </div>

            {/* Right: Controls */}
            <div className="flex-1 p-8 md:p-10 overflow-y-auto bg-white/40 backdrop-blur-md">
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-brand-cyan tracking-[0.4em] uppercase text-[9px] mb-2 block font-bold">Configurator</span>
                <h2 className="text-4xl font-sans font-extralight tracking-tight mb-2 uppercase">{vehicle.name}</h2>
                <p className="text-black/40 text-sm italic">{vehicle.type}</p>
              </motion.div>

              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-[11px] uppercase tracking-widest font-bold mb-6 text-black/80">Select Exterior</h4>
                <div className="grid grid-cols-4 gap-4">
                  {vehicle.colors.map((color, idx) => (
                    <motion.button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className="group relative flex flex-col items-center gap-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.35 + idx * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className={`w-12 h-12 rounded-full border-2 transition-all p-0.5 relative overflow-hidden ${currentColor.name === color.name ? 'border-brand-cyan' : 'border-black/5 group-hover:border-brand-cyan/50'}`}
                        animate={{
                          boxShadow: currentColor.name === color.name ? "0 0 15px rgba(59, 130, 246, 0.5)" : "0 0 0 rgba(59, 130, 246, 0)"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="w-full h-full rounded-full shadow-inner"
                          style={{ backgroundColor: color.hex }}
                          animate={{
                            scale: currentColor.name === color.name ? 1.05 : 1
                          }}
                        />
                      </motion.div>
                      <motion.span
                        className={`text-[9px] uppercase tracking-[0.1em] text-center transition-colors ${currentColor.name === color.name ? 'text-black font-bold' : 'text-black/40 group-hover:text-black/60'}`}
                        animate={{ scale: currentColor.name === color.name ? 1.1 : 1 }}
                      >
                        {color.name}
                      </motion.span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="mb-10 border-t border-black/5 pt-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="text-[11px] uppercase tracking-widest font-bold mb-6 text-black/80">Vehicle Summary</h4>
                <div className="flex flex-col gap-3">
                  <motion.div
                    className="flex justify-between text-sm group/summary cursor-default"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-black/40 group-hover/summary:text-black transition-colors">Base Price</span>
                    <span className="font-medium">₹{(vehicle.basePrice / 1000).toFixed(0)}k</span>
                  </motion.div>
                  <motion.div
                    className="flex justify-between text-sm italic group/summary cursor-default"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-black/40 group-hover/summary:text-black transition-colors">Paint: {currentColor.name}</span>
                    <span className="font-medium">{currentColor.price === 0 ? 'Included' : `+₹${(currentColor.price / 1000).toFixed(0)}k`}</span>
                  </motion.div>
                  <motion.div
                    className="flex justify-between text-sm border-t border-black/10 pt-4 mt-2 bg-gradient-to-r from-brand-cyan/5 to-transparent p-3 rounded-lg"
                    layout
                  >
                    <span className="font-bold uppercase tracking-widest text-xs">Estimated Price</span>
                    <motion.span
                      className="text-xl font-sans font-bold text-brand-cyan"
                      key={totalPrice}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      ₹{(totalPrice / 1000).toFixed(0)}k
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.button
                onClick={() => setIsPlacingOrder(true)}
                disabled={isPlacingOrder}
                className="w-full py-5 bg-black text-white font-bold rounded-xl text-xs uppercase tracking-[0.2em] shadow-xl shadow-black/10 overflow-hidden relative group disabled:opacity-75"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-brand-cyan"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <ShoppingCart size={16} />
                  Place Order
                </span>
              </motion.button>
              <p className="text-[9px] text-center text-black/20 mt-4 uppercase tracking-widest">
                Delivery estimates vary by selection.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
