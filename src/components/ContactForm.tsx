import { motion, AnimatePresence } from 'motion/react';
import { X, Send, MapPin, Phone, Mail, AlertCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  inquiryType: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    inquiryType: 'General Inquiry',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        inquiryType: 'General Inquiry',
        message: '',
      });
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
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-4xl glass rounded-[32px] flex flex-col md:flex-row min-h-[500px] shadow-2xl border border-white/50"
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:shadow-xl overflow-hidden relative group border border-black/30"
              whileHover={{ scale: 1.15, backgroundColor: '#0f172a' }}
              whileTap={{ scale: 0.95 }}
              title="Close"
            >
              <X size={24} className="relative z-10" />
            </motion.button>

            {/* Left: Contact Info */}
            <motion.div
              className="flex-1 bg-black/[0.02] p-12 border-b md:border-b-0 md:border-r border-black/5"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-brand-cyan tracking-[0.4em] uppercase text-[11px] mb-4 block font-bold">Connect</span>
              <h2 className="text-4xl font-sans font-extralight tracking-tight mb-10 uppercase text-black">Reach Out</h2>

              <div className="space-y-8 mt-12">
                {[
                  {
                    icon: <MapPin size={18} />,
                    title: 'Our Flagship',
                    content: '99 Future Way, Tech District\nNeo City, NC 90210'
                  },
                  {
                    icon: <Phone size={18} />,
                    title: 'Direct Line',
                    content: '+1 (555) AXIGEAR'
                  },
                  {
                    icon: <Mail size={18} />,
                    title: 'Inquiries',
                    content: 'hello@axigear.com'
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    className="flex items-start gap-4 group cursor-default"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + idx * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-xl glass flex items-center justify-center text-brand-cyan shrink-0 shadow-sm border-black/5"
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-black/60 font-semibold mb-2 group-hover:text-brand-cyan transition-colors">{item.title}</h4>
                      <p className="text-sm font-medium text-black/80 whitespace-pre-line">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <div className="flex-[1.2] p-12 bg-white/40 backdrop-blur-md">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {['fullName', 'email'].map((field, idx) => (
                        <motion.div
                          key={field}
                          className="flex flex-col gap-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + idx * 0.05 }}
                        >
                          <label className="text-xs md:text-sm uppercase tracking-widest text-black/60 font-semibold ml-1">
                            {field === 'fullName' ? 'Full Name' : 'Email Address'}
                          </label>
                          <motion.div className="relative">
                            <input
                              type={field === 'email' ? 'email' : 'text'}
                              name={field}
                              value={formData[field as keyof FormData]}
                              onChange={handleChange}
                              onFocus={() => setFocusedField(field)}
                              onBlur={() => setFocusedField(null)}
                              className={`w-full bg-black/5 border rounded-xl px-4 py-3 text-sm focus:outline-none transition-all ${
                                errors[field]
                                  ? 'border-red-400 focus:border-red-500'
                                  : 'border-black/5 focus:border-brand-cyan'
                              }`}
                              placeholder={field === 'fullName' ? 'John Doe' : 'john@example.com'}
                            />
                            {errors[field] && (
                              <motion.div
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                              >
                                <AlertCircle size={18} />
                              </motion.div>
                            )}
                          </motion.div>
                          {errors[field] && (
                            <motion.p
                              className="text-xs text-red-600 font-medium ml-1"
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                            >
                              {errors[field]}
                            </motion.p>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      className="flex flex-col gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="text-xs md:text-sm uppercase tracking-widest text-black/60 font-semibold ml-1">Inquiry Type</label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full bg-[#f8fafc] border border-black/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan transition-colors appearance-none"
                      >
                        <option>General Inquiry</option>
                        <option>Test Drive Request</option>
                        <option>Fleet Solutions</option>
                        <option>Investment Inquiries</option>
                      </select>
                    </motion.div>

                    <motion.div
                      className="flex flex-col gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      <label className="text-xs md:text-sm uppercase tracking-widest text-black/60 font-semibold ml-1">Message</label>
                      <motion.div className="relative">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full bg-black/5 border rounded-xl px-4 py-3 text-sm focus:outline-none transition-all min-h-[120px] resize-none ${
                            errors.message
                              ? 'border-red-400 focus:border-red-500'
                              : 'border-black/5 focus:border-brand-cyan'
                          }`}
                          placeholder="Tell us how we can help..."
                        />
                        {errors.message && (
                          <motion.div
                            className="absolute right-3 top-3 text-red-500"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                          >
                            <AlertCircle size={18} />
                          </motion.div>
                        )}
                      </motion.div>
                      {errors.message && (
                        <motion.p
                          className="text-xs text-red-600 font-medium ml-1"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-black text-white font-bold rounded-xl text-xs uppercase tracking-[0.2em] shadow-xl shadow-black/10 overflow-hidden relative group disabled:opacity-75"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-brand-cyan"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <motion.div
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={14} />
                          </>
                        )}
                      </span>
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full bg-brand-cyan/10 border border-brand-cyan flex items-center justify-center text-brand-cyan mb-4 shadow-sm"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      >
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </motion.div>
                    </motion.div>
                    <motion.h3
                      className="text-2xl font-sans font-extralight uppercase tracking-tight"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Message Received
                    </motion.h3>
                    <motion.p
                      className="text-black/70 text-sm font-medium max-w-xs uppercase tracking-widest leading-loose"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Our visionaries will connect with you within 24 hours.
                    </motion.p>
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
