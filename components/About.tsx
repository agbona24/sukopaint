'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle, FaPaintBrush, FaShieldAlt, FaMoneyBillWave } from 'react-icons/fa';

export default function About() {
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
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
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
          {/* Left Side - Animated Vector Graphics */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px]"
          >
            {/* Main Paint Bucket with Dripping Paint */}
            <motion.svg
              className="w-full h-full"
              viewBox="0 0 400 400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {/* Paint Drips */}
              {[30, 50, 70].map((x, i) => (
                <motion.g key={i}>
                  <motion.path
                    d={`M ${x * 3} 150 Q ${x * 3} 200 ${x * 3} 250`}
                    stroke="#F49C00"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                      repeatDelay: 1,
                    }}
                  />
                  <motion.circle
                    cx={x * 3}
                    cy={250}
                    r={6}
                    fill="#F49C00"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: [0, 1, 0], y: 0 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                      repeatDelay: 1,
                    }}
                  />
                </motion.g>
              ))}

              {/* Large Paint Bucket */}
              <motion.g
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
              >
                {/* Bucket Body */}
                <motion.path
                  d="M 120 150 L 100 280 Q 100 300 120 300 L 280 300 Q 300 300 300 280 L 280 150 Z"
                  fill="#001F5B"
                  stroke="#F49C00"
                  strokeWidth="3"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Bucket Rim */}
                <motion.ellipse
                  cx="200"
                  cy="150"
                  rx="90"
                  ry="20"
                  fill="#F49C00"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Handle */}
                <motion.path
                  d="M 140 140 Q 200 100 260 140"
                  stroke="#666"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  animate={{ rotate: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ transformOrigin: '200px 140px' }}
                />

                {/* Label */}
                <rect x="150" y="200" width="100" height="60" fill="white" rx="5" />
                <text x="200" y="225" fontSize="24" fontWeight="bold" fill="#001F5B" textAnchor="middle">
                  SUKO
                </text>
                <text x="200" y="250" fontSize="14" fill="#F49C00" textAnchor="middle">
                  PAINT
                </text>
              </motion.g>

              {/* Floating Paint Swatches */}
              {[
                { x: 50, y: 100, color: '#FF6B6B' },
                { x: 320, y: 120, color: '#4ECDC4' },
                { x: 30, y: 250, color: '#FFE66D' },
                { x: 340, y: 280, color: '#A8E6CF' },
              ].map((swatch, i) => (
                <motion.g
                  key={i}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  <rect
                    x={swatch.x}
                    y={swatch.y}
                    width="40"
                    height="50"
                    fill={swatch.color}
                    rx="5"
                    stroke="#333"
                    strokeWidth="2"
                  />
                  <rect x={swatch.x + 5} y={swatch.y + 5} width="30" height="30" fill="white" opacity="0.3" />
                </motion.g>
              ))}

              {/* Sparkles */}
              {[...Array(8)].map((_, i) => (
                <motion.circle
                  key={`sparkle-${i}`}
                  cx={50 + i * 40}
                  cy={350}
                  r="3"
                  fill="#F49C00"
                  animate={{
                    scale: [0, 1.5, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.svg>
          </motion.div>

          {/* Right Side - Content */}
          <div>
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
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-[#001F5B] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F49C00] transition shadow-lg"
                >
                  Paint it right. Paint it Suko
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
