'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Paint Brush Strokes */}
        <motion.svg
          className="absolute top-10 left-10 w-64 h-64 opacity-10"
          animate={{
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          viewBox="0 0 200 200"
        >
          <path
            d="M 20 50 Q 100 20 180 50 T 180 150 Q 100 180 20 150 T 20 50"
            fill="#001F5B"
            opacity="0.3"
          />
        </motion.svg>

        <motion.svg
          className="absolute bottom-10 right-10 w-64 h-64 opacity-10"
          animate={{
            rotate: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          viewBox="0 0 200 200"
        >
          <path
            d="M 20 50 Q 100 20 180 50 T 180 150 Q 100 180 20 150 T 20 50"
            fill="#F49C00"
            opacity="0.3"
          />
        </motion.svg>

        {/* Floating Color Dots */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full"
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${20 + Math.floor(i / 4) * 30}%`,
              background: i % 2 === 0 ? '#001F5B' : '#F49C00',
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Header */}
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-[#001F5B] mb-6"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Let's Bring Your Walls to Life
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-700 mb-12 leading-relaxed"
          >
            Contact us today for a <span className="font-bold text-[#F49C00]">free color consultation</span> or to request a quote tailored to your project.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <motion.a
              href="tel:08088828606"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-[#F49C00] text-white px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-[#001F5B] transition shadow-2xl w-full sm:w-auto justify-center"
              animate={{
                boxShadow: [
                  '0 10px 30px rgba(244, 156, 0, 0.3)',
                  '0 15px 40px rgba(244, 156, 0, 0.5)',
                  '0 10px 30px rgba(244, 156, 0, 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaPhone className="text-2xl" />
              Call Us Now
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight />
              </motion.div>
            </motion.a>

            <motion.a
              href="mailto:info@sukopaint.com"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="border-3 border-[#001F5B] text-[#001F5B] px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-[#001F5B] hover:text-white transition shadow-lg w-full sm:w-auto justify-center"
            >
              <FaEnvelope className="text-2xl" />
              Email Us
            </motion.a>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl shadow-lg p-8 border-2 border-transparent hover:border-[#F49C00] transition"
            >
              <motion.div
                className="text-[#F49C00] text-4xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <FaPhone />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#001F5B] mb-2">Call Us</h3>
              <a
                href="tel:08088828606"
                className="text-gray-700 text-lg hover:text-[#F49C00] transition font-semibold"
              >
                0808 882 8606
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl shadow-lg p-8 border-2 border-transparent hover:border-[#F49C00] transition"
            >
              <motion.div
                className="text-[#F49C00] text-4xl mb-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaEnvelope />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#001F5B] mb-2">Email Us</h3>
              <a
                href="mailto:info@sukopaint.com"
                className="text-gray-700 text-lg hover:text-[#F49C00] transition font-semibold"
              >
                info@sukopaint.com
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
