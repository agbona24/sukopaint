'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
      className="fixed top-0 left-0 right-0 z-50 bg-[#001F5B] dark:bg-[#003D99] shadow-lg"
    >
      {/* Top Bar */}
      <div className="bg-[#F49C00] dark:bg-[#FFB020] text-white py-2">
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

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.85 }}
              className="text-white hover:text-[#F49C00] transition text-xl p-2 rounded-full hover:bg-white/10"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </motion.button>

            <motion.a
              href="https://wa.me/23488828606?text=Hello%20Suko%20Paint!%20I%20would%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="bg-[#F49C00] text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#001F5B] transition font-semibold btn-ripple"
              aria-label="Order Suko Paint on WhatsApp"
            >
              Order Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white text-2xl p-2 rounded hover:bg-white/10 transition"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          id="mobile-menu"
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          className="lg:hidden overflow-hidden"
          role="navigation"
          aria-label="Mobile navigation"
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

            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-white hover:text-[#F49C00] transition font-medium py-2 flex items-center gap-3"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? (
                <>
                  <FaMoon /> Dark Mode
                </>
              ) : (
                <>
                  <FaSun /> Light Mode
                </>
              )}
            </button>

            <a
              href="https://wa.me/23488828606?text=Hello%20Suko%20Paint!%20I%20would%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#F49C00] text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#001F5B] transition font-semibold text-center btn-ripple"
              aria-label="Order Suko Paint on WhatsApp"
            >
              Order Now
            </a>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
