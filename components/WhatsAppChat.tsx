'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
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
        {/* Info Bubble */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            x: isOpen ? 0 : 20,
            display: isOpen ? 'block' : 'none',
          }}
          className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-6 w-80 max-w-[calc(100vw-3rem)]"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            aria-label="Close chat"
          >
            <FaTimes />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-[#001F5B] to-[#F49C00] rounded-full flex items-center justify-center text-white font-bold"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              SP
            </motion.div>
            <div>
              <h4 className="font-bold text-[#001F5B]">Suko Paint Support</h4>
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm text-green-600">Online</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-4">
            Need help or have questions about our paint products? Chat with us instantly on WhatsApp!
          </p>

          <motion.button
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#25D366] text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition shadow-lg"
          >
            <FaWhatsapp className="text-2xl" />
            Start Chat
          </motion.button>
        </motion.div>

        {/* Main WhatsApp Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
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
          aria-label="WhatsApp Chat"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <FaTimes className="text-3xl" /> : <FaWhatsapp className="text-3xl" />}
          </motion.div>
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
