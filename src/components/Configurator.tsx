import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Battery, Gauge, Zap } from 'lucide-react';
import { useState } from 'react';
import { Vehicle, VehicleColor } from '../data/vehicles';

interface ConfiguratorProps {
  vehicle: Vehicle | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function Configurator({ vehicle, isOpen, onClose }: ConfiguratorProps) {
  const [selectedColor, setSelectedColor] = useState<VehicleColor | null>(null);
  
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
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl glass rounded-[32px] overflow-hidden flex flex-col md:flex-row h-[90vh] md:h-auto max-h-[90vh] shadow-2xl"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full glass border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
            >
              <X size={20} />
            </button>

            {/* Left: Visualizer */}
            <div className="flex-[1.5] relative bg-black/[0.02] p-12 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10 text-center">
                <motion.div
                  key={currentColor.name}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative"
                >
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    className="w-full h-auto max-w-2xl object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Color Overlay Simulation (Tinting the grayscale image) */}
                  <div 
                    className="absolute inset-0 mix-blend-color opacity-30 pointer-events-none"
                    style={{ backgroundColor: currentColor.hex }}
                  />
                </motion.div>
                
                <div className="mt-8 grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-widest text-black/40 mb-1">Range</p>
                    <p className="text-xl font-sans font-extralight italic">{vehicle.range}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-widest text-black/40 mb-1">Top Speed</p>
                    <p className="text-xl font-sans font-extralight italic">{vehicle.topSpeed}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-widest text-black/40 mb-1">0-60</p>
                    <p className="text-xl font-sans font-extralight italic">{vehicle.acceleration}</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 flex items-center gap-2 px-4 py-2 glass rounded-full border-black/5 shadow-sm">
                <Zap size={14} className="text-brand-cyan fill-brand-cyan" />
                <span className="text-[10px] uppercase tracking-widest font-bold">100% Sustainable</span>
              </div>
            </div>

            {/* Right: Controls */}
            <div className="flex-1 p-10 overflow-y-auto bg-white/40 backdrop-blur-md">
              <div className="mb-10">
                <span className="text-brand-cyan tracking-[0.4em] uppercase text-[9px] mb-2 block font-bold">Configurator</span>
                <h2 className="text-4xl font-sans font-extralight tracking-tight mb-2 uppercase">{vehicle.name}</h2>
                <p className="text-black/40 text-sm italic">{vehicle.type}</p>
              </div>

              <div className="mb-10">
                <h4 className="text-[11px] uppercase tracking-widest font-bold mb-6 text-black/80">Select Exterior</h4>
                <div className="grid grid-cols-4 gap-4">
                  {vehicle.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`group relative flex flex-col items-center gap-2`}
                    >
                      <div 
                        className={`w-12 h-12 rounded-full border-2 transition-all p-0.5 ${currentColor.name === color.name ? 'border-brand-cyan' : 'border-black/5 group-hover:border-black/20'}`}
                      >
                        <div 
                          className="w-full h-full rounded-full shadow-inner"
                          style={{ backgroundColor: color.hex }}
                        />
                      </div>
                      <span className={`text-[9px] uppercase tracking-[0.1em] text-center ${currentColor.name === color.name ? 'text-black' : 'text-black/40'}`}>
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-10 border-t border-black/5 pt-10">
                <h4 className="text-[11px] uppercase tracking-widest font-bold mb-6 text-black/80">Vehicle Summary</h4>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-black/40">Base Price</span>
                    <span>${vehicle.basePrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm italic">
                    <span className="text-black/40">Paint: {currentColor.name}</span>
                    <span>{currentColor.price === 0 ? 'Included' : `+$${currentColor.price.toLocaleString()}`}</span>
                  </div>
                  <div className="flex justify-between text-sm border-t border-black/10 pt-4 mt-2">
                    <span className="font-bold uppercase tracking-widest text-xs">Estimated Price</span>
                    <span className="text-xl font-sans font-bold text-brand-cyan">${totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <button className="w-full py-5 bg-black text-white font-bold rounded-xl text-xs uppercase tracking-[0.2em] hover:bg-brand-cyan transition-all transform active:scale-95 shadow-xl shadow-black/10">
                Place Order
              </button>
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
