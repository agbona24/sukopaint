'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms for different layers
  const yBackground = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const yContent = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const yImage = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-orange-50 to-blue-50 overflow-hidden pt-32">
      {/* Animated Background Elements with Parallax */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ y: yBackground }}
      >
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
      </motion.div>

      <motion.div
        className="container mx-auto px-4 z-10"
        style={{ y: yContent, opacity }}
      >
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
                  href="https://wa.me/23488828606?text=Hello%20Suko%20Paint!%20I%20would%20like%20to%20place%20an%20order."
                  target="_blank"
                  rel="noopener noreferrer"
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

          {/* Right Content - Product Images with Parallax */}
          <motion.div
            className="relative h-[500px] hidden lg:block"
            style={{ y: yImage }}
          >
            {/* Main Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="relative h-full w-full"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/hero-image.jpg"
                  alt="Suko Paint Products"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Floating Product Images */}
              <motion.div
                className="absolute -bottom-10 -left-10 w-32 h-32"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              >
                <Image
                  src="/images/hero-img2-p.png"
                  alt="Paint Can"
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </motion.div>

              {/* Decorative Circles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-16 h-16 rounded-full"
                  style={{
                    left: `${15 + i * 20}%`,
                    top: `${10 + (i % 2) * 70}%`,
                    background: i % 2 === 0 ? 'rgba(0, 31, 91, 0.1)' : 'rgba(244, 156, 0, 0.1)',
                    border: `2px solid ${i % 2 === 0 ? '#001F5B' : '#F49C00'}`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

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
