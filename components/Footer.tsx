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

        {/* Developer Credit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/20"
        >
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-blue-200 text-sm mb-3">Crafted with excellence by</p>
            <motion.a
              href="https://wa.me/2347069716822?text=Hey%20Harzotech!%20I%20saw%20your%20amazing%20work%20on%20the%20Suko%20Paint%20website%20and%20I'm%20impressed!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F49C00] to-orange-500 px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              animate={{
                boxShadow: [
                  '0 10px 40px rgba(244, 156, 0, 0.4)',
                  '0 15px 60px rgba(244, 156, 0, 0.6)',
                  '0 10px 40px rgba(244, 156, 0, 0.4)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
                </svg>
              </motion.div>

              <div className="text-left">
                <motion.div
                  className="font-bold text-white text-xl leading-tight"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  Harzotech
                </motion.div>
                <div className="text-white/90 text-sm">Premium Web Solutions</div>
              </div>

              <motion.svg
                className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </motion.a>

            <motion.p
              className="mt-4 text-blue-200/70 text-xs italic"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Transforming ideas into digital excellence
            </motion.p>
          </motion.div>
        </motion.div>
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
