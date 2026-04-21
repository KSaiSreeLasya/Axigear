import { motion, AnimatePresence } from 'motion/react';
import { X, Send, MapPin, Phone, Mail } from 'lucide-react';
import { useState, FormEvent } from 'react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
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
            className="relative w-full max-w-4xl glass rounded-[32px] overflow-hidden flex flex-col md:flex-row min-h-[500px] shadow-2xl"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full glass border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
            >
              <X size={20} />
            </button>

            {/* Left: Contact Info */}
            <div className="flex-1 bg-black/[0.02] p-12 border-b md:border-b-0 md:border-r border-black/5">
              <span className="text-brand-cyan tracking-[0.4em] uppercase text-[9px] mb-2 block font-bold">Connect</span>
              <h2 className="text-4xl font-sans font-extralight tracking-tight mb-8 uppercase">Reach Out</h2>
              
              <div className="space-y-8 mt-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-brand-cyan shrink-0 shadow-sm border-black/5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-black/40 mb-1">Our Flagship</h4>
                    <p className="text-sm font-medium">99 Future Way, Tech District<br />Neo City, NC 90210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-brand-cyan shrink-0 shadow-sm border-black/5">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-black/40 mb-1">Direct Line</h4>
                    <p className="text-sm font-medium">+1 (555) AXIGEAR</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-brand-cyan shrink-0 shadow-sm border-black/5">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-black/40 mb-1">Inquiries</h4>
                    <p className="text-sm font-medium">hello@axigear.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="flex-[1.2] p-12 bg-white/40 backdrop-blur-md">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-widest text-black/40 ml-1">Full Name</label>
                        <input 
                          type="text" 
                          required
                          className="w-full bg-black/5 border border-black/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-widest text-black/40 ml-1">Email Address</label>
                        <input 
                          type="email" 
                          required
                          className="w-full bg-black/5 border border-black/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-widest text-black/40 ml-1">Inquiry Type</label>
                      <select className="w-full bg-[#f8fafc] border border-black/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan transition-colors appearance-none">
                        <option>General Inquiry</option>
                        <option>Test Drive Request</option>
                        <option>Fleet Solutions</option>
                        <option>Investment Inquiries</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-widest text-black/40 ml-1">Message</label>
                      <textarea 
                        required
                        className="w-full bg-black/5 border border-black/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan transition-colors min-h-[120px] resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-4 bg-black text-white font-bold rounded-xl text-xs uppercase tracking-[0.2em] hover:bg-brand-cyan transition-all flex items-center justify-center gap-2 shadow-xl shadow-black/10"
                    >
                      Send Message
                      <Send size={14} />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="w-20 h-20 rounded-full bg-brand-cyan/10 border border-brand-cyan flex items-center justify-center text-brand-cyan mb-4 shadow-sm">
                      <Check size={40} />
                    </div>
                    <h3 className="text-2xl font-sans font-extralight uppercase tracking-tight">Message Received</h3>
                    <p className="text-black/40 text-sm max-w-xs uppercase tracking-widest leading-loose">
                      Our visionaries will connect with you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function Check({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
