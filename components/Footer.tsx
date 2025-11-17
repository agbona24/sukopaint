'use client';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: '#', name: 'Facebook' },
    { icon: <FaTwitter />, href: '#', name: 'Twitter' },
    { icon: <FaInstagram />, href: '#', name: 'Instagram' },
    { icon: <FaLinkedin />, href: '#', name: 'LinkedIn' },
  ];

  return (
    <footer id="contact" className="bg-[#001F5B] text-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l30 30-30 30L0 30z\' fill=\'%23F49C00\' fill-opacity=\'0.4\'/%3E%3C/svg%3E")',
            backgroundSize: '60px 60px',
          }}
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <motion.h3
              className="text-3xl font-bold mb-4"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-[#F49C00]">SUKO</span> PAINT
            </motion.h3>
            <p className="text-blue-200 leading-relaxed mb-4">
              At Suko Paint, we bring color, protection, and value to your spaces. Our vision is to be Nigeria's trusted paint partner for every project.
            </p>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-[#F49C00] rounded-full flex items-center justify-center hover:bg-white hover:text-[#001F5B] transition"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6 text-[#F49C00]">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-[#F49C00] transition flex items-center gap-2"
                  >
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                    >
                      →
                    </motion.span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <h4 className="text-xl font-bold mb-6 text-[#F49C00]">Contact Us</h4>
            <div className="space-y-4">
              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className="text-[#F49C00] text-2xl mt-1"
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FaMapMarkerAlt />
                </motion.div>
                <div>
                  <p className="text-blue-200 leading-relaxed">
                    1a, College Road, NYSC Bus-Stop,<br />
                    Lasu-Isheri Way, Igando, Lagos
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className="text-[#F49C00] text-2xl"
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaPhone />
                </motion.div>
                <a
                  href="tel:08088828606"
                  className="text-blue-200 hover:text-[#F49C00] transition"
                >
                  0808 882 8606
                </a>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className="text-[#F49C00] text-2xl"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaEnvelope />
                </motion.div>
                <a
                  href="mailto:info@sukopaint.com"
                  className="text-blue-200 hover:text-[#F49C00] transition"
                >
                  info@sukopaint.com
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-1 bg-gradient-to-r from-transparent via-[#F49C00] to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-200 text-sm text-center md:text-left"
          >
            © {new Date().getFullYear()} Suko Paint. All rights reserved. Made with ❤️ in Nigeria
          </motion.p>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#F49C00] text-white p-3 rounded-full shadow-lg hover:bg-white hover:text-[#001F5B] transition"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>

      {/* Decorative Paint Drops */}
      <motion.svg
        className="absolute bottom-0 left-0 w-32 h-32 opacity-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        viewBox="0 0 100 100"
      >
        <path d="M50 0 Q60 40 50 60 Q40 40 50 0" fill="#F49C00" />
      </motion.svg>

      <motion.svg
        className="absolute top-10 right-10 w-24 h-24 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="40" fill="#F49C00" />
      </motion.svg>
    </footer>
  );
}
