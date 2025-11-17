'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCheckCircle, FaPaintBrush, FaShieldAlt, FaMoneyBillWave } from 'react-icons/fa';
import Image from 'next/image';
import { useRef } from 'react';

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Parallax transforms
  const yImage = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const yContent = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  const features = [
    {
      icon: <FaPaintBrush />,
      title: 'Vibrant Colors',
      description: 'Long-lasting, vivid colors that bring walls to life',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Weather Resistant',
      description: 'Formulated to withstand harsh Nigerian weather',
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Affordable Quality',
      description: 'Premium quality at prices that work for you',
    },
  ];

  return (
    <section ref={ref} id="about" className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute w-full h-full"
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{
            backgroundImage: 'radial-gradient(circle, #001F5B 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - About Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ y: yImage }}
            className="relative h-[500px]"
          >
            {/* Main About Image */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative h-full w-full"
            >
              <Image
                src="/images/about-img.png"
                alt="About Suko Paint"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Decorative Elements */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-12 h-12 rounded-full"
                style={{
                  left: `${(i % 3) * 35}%`,
                  top: `${Math.floor(i / 3) * 70 + 10}%`,
                  background: i % 2 === 0 ? 'rgba(0, 31, 91, 0.1)' : 'rgba(244, 156, 0, 0.1)',
                  border: `2px solid ${i % 2 === 0 ? '#001F5B' : '#F49C00'}`,
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>

          {/* Right Side - Content with Parallax */}
          <motion.div style={{ y: yContent }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                className="text-[#F49C00] font-bold text-lg mb-4 inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                About Suko Paint
              </motion.span>

              <h2 className="text-4xl md:text-5xl font-bold text-[#001F5B] mb-6">
                Vibrant, Weather-Resistant & Affordable
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Suko Paint is proudly made in Nigeria to deliver vibrant, weather-resistant, and affordable paint solutions tailored to local needs.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Whether you're revamping a home, styling a hotel, or painting a commercial facility, our paints offer a smooth finish, long-lasting protection, and rich color depth that truly transforms any surface.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Backed by a team of experts and a passion for quality, we don't just sell paint — <span className="font-bold text-[#001F5B]">we bring your space to life.</span>
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
                  >
                    <motion.div
                      className="text-[#F49C00] text-3xl mt-1"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-[#001F5B] text-xl mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <motion.a
                  href="https://wa.me/23488828606?text=Hello%20Suko%20Paint!%20I%20would%20like%20to%20learn%20more%20about%20your%20paint%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-[#001F5B] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F49C00] transition shadow-lg"
                >
                  Paint it right. Paint it Suko
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
