'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppChat() {
  const phoneNumber = '23488828606'; // Format: country code + number without +
  const defaultMessage = 'Hello! I would like to inquire about Suko Paint products.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        {/* Main WhatsApp Button */}
        <motion.button
          onClick={handleWhatsAppClick}
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-[#20bd5a] transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: [
              '0 0 20px rgba(37, 211, 102, 0.5)',
              '0 0 40px rgba(37, 211, 102, 0.8)',
              '0 0 20px rgba(37, 211, 102, 0.5)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-3xl" />
        </motion.button>

        {/* Notification Badge */}
        <motion.div
          className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          1
        </motion.div>

        {/* Pulse Ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-30"
          animate={{
            scale: [1, 1.5, 1.5],
            opacity: [0.3, 0, 0],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </>
  );
}
