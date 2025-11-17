'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#001F5B] shadow-lg"
    >
      {/* Top Bar */}
      <div className="bg-[#F49C00] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <a href="tel:08088828606" className="flex items-center gap-2 hover:text-[#001F5B] transition">
              <FaPhone className="text-xs" />
              <span className="hidden sm:inline">0808 882 8606</span>
            </a>
            <a href="mailto:info@sukopaint.com" className="flex items-center gap-2 hover:text-[#001F5B] transition">
              <FaEnvelope className="text-xs" />
              <span className="hidden md:inline">info@sukopaint.com</span>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xs sm:text-sm font-semibold"
          >
            Premium Finish That Lasts Long
          </motion.div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white font-bold text-2xl"
          >
            <span className="text-[#F49C00]">SUKO</span> PAINT
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-white hover:text-[#F49C00] transition font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="bg-[#F49C00] text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#001F5B] transition font-semibold"
            >
              Order Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white text-2xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          className="lg:hidden overflow-hidden"
        >
          <div className="flex flex-col gap-4 pt-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-[#F49C00] transition font-medium py-2"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#F49C00] text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#001F5B] transition font-semibold text-center"
            >
              Order Now
            </a>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
