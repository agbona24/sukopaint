'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-orange-50 to-blue-50 overflow-hidden pt-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Paint Drops */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 2 === 0 ? 'rgba(0, 31, 91, 0.1)' : 'rgba(244, 156, 0, 0.1)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Animated Paint Brush SVG */}
        <motion.svg
          className="absolute top-20 right-10 w-32 h-32 opacity-20"
          animate={{ rotate: [0, 10, 0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          viewBox="0 0 100 100"
        >
          <rect x="40" y="10" width="8" height="60" fill="#001F5B" rx="2" />
          <path d="M35 65 L35 75 Q44 80 53 75 L53 65 Z" fill="#F49C00" />
          <ellipse cx="44" cy="75" rx="9" ry="15" fill="#F49C00" opacity="0.7" />
        </motion.svg>

        {/* Animated Paint Roller SVG */}
        <motion.svg
          className="absolute bottom-20 left-10 w-40 h-40 opacity-20"
          animate={{
            rotate: [0, 5, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          viewBox="0 0 100 100"
        >
          <rect x="20" y="30" width="40" height="15" fill="#001F5B" rx="3" />
          <rect x="55" y="35" width="5" height="40" fill="#333" />
          <rect x="50" y="70" width="15" height="8" fill="#666" rx="2" />
        </motion.svg>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="inline-block text-[#F49C00] font-bold text-lg mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Made in Nigeria
              </motion.span>

              <h1 className="text-5xl md:text-7xl font-bold text-[#001F5B] mb-6 leading-tight">
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Premium Finish
                </motion.span>
                <br />
                <motion.span
                  className="inline-block text-[#F49C00]"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  That Lasts Long
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
              >
                Our paints are formulated to withstand harsh weather, ensuring vibrant color and durability for years.
                <span className="font-bold text-[#001F5B]"> Suko Paint — made for Nigeria.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#F49C00] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-[#001F5B] transition shadow-lg animate-pulse-glow"
                >
                  Order Now
                  <FaArrowRight />
                </motion.a>

                <motion.a
                  href="#about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-[#001F5B] text-[#001F5B] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#001F5B] hover:text-white transition"
                >
                  Learn More
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Animated Paint Cans */}
          <div className="relative h-[500px] hidden lg:block">
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {/* Main Paint Can */}
              <motion.svg
                className="w-64 h-64"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                viewBox="0 0 200 200"
              >
                {/* Paint Can Body */}
                <motion.ellipse
                  cx="100"
                  cy="180"
                  rx="60"
                  ry="10"
                  fill="#333"
                  opacity="0.2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.rect
                  x="50"
                  y="60"
                  width="100"
                  height="120"
                  fill="#001F5B"
                  rx="5"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 60, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                />
                <motion.ellipse
                  cx="100"
                  cy="60"
                  rx="50"
                  ry="8"
                  fill="#F49C00"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9 }}
                />

                {/* Label */}
                <rect x="60" y="90" width="80" height="60" fill="white" rx="3" />
                <text x="100" y="115" fontSize="14" fontWeight="bold" fill="#001F5B" textAnchor="middle">SUKO</text>
                <text x="100" y="135" fontSize="10" fill="#F49C00" textAnchor="middle">PAINT</text>

                {/* Handle */}
                <motion.path
                  d="M 80 50 Q 100 30 120 50"
                  stroke="#666"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  animate={{ rotate: [0, -5, 0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.svg>
            </motion.div>

            {/* Floating Paint Splatters */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-20 h-20"
                style={{
                  left: `${20 + (i % 4) * 25}%`,
                  top: `${20 + Math.floor(i / 4) * 60}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="20"
                    fill={i % 2 === 0 ? "#001F5B" : "#F49C00"}
                    opacity="0.3"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  />
                </svg>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#001F5B] rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-[#F49C00] rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
