'use client';

import { motion } from 'framer-motion';
import { FaHome, FaBuilding, FaPaintRoller, FaSprayCan } from 'react-icons/fa';

export default function Products() {
  const products = [
    {
      icon: <FaHome />,
      title: 'Interior Paint',
      description: 'Smooth, washable finish for your indoor spaces. Low odor and quick-drying.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: <FaBuilding />,
      title: 'Exterior Paint',
      description: 'Weather-resistant formula that protects against sun, rain, and humidity.',
      color: 'from-orange-400 to-orange-600',
    },
    {
      icon: <FaPaintRoller />,
      title: 'Emulsion Paint',
      description: 'Premium quality emulsion for walls and ceilings with excellent coverage.',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: <FaSprayCan />,
      title: 'Gloss Paint',
      description: 'High-gloss finish for doors, windows, and metal surfaces.',
      color: 'from-purple-400 to-purple-600',
    },
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-white to-gray-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            style={{
              background: i % 2 === 0 ? '#001F5B' : '#F49C00',
              left: `${i * 20}%`,
              top: `${(i % 3) * 30}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            className="text-[#F49C00] font-bold text-lg mb-4 inline-block"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Our Paint Types
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F5B] mb-4">
            Explore Our Premium Paint Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Designed to elevate your space with vibrant colors and long-lasting protection
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative group"
            >
              {/* Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                {/* Gradient Header */}
                <motion.div
                  className={`bg-gradient-to-br ${product.color} p-8 relative overflow-hidden`}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  {/* Animated Icon */}
                  <motion.div
                    className="text-white text-6xl mb-4 relative z-10"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    {product.icon}
                  </motion.div>

                  {/* Floating Particles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        left: `${30 + i * 25}%`,
                        top: `${20 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.4,
                      }}
                    />
                  ))}
                </motion.div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#001F5B] mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Animated Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#F49C00] text-white py-3 rounded-full font-semibold hover:bg-[#001F5B] transition group-hover:shadow-lg"
                  >
                    Learn More
                  </motion.button>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 border-4 border-[#F49C00] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </div>

              {/* Paint Splatter Effect */}
              <motion.svg
                className="absolute -bottom-4 -right-4 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                viewBox="0 0 100 100"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <circle cx="50" cy="50" r="30" fill="#F49C00" opacity="0.6" />
                <circle cx="50" cy="50" r="20" fill="#001F5B" opacity="0.8" />
              </motion.svg>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-[#001F5B] to-[#F49C00] p-8 rounded-2xl shadow-2xl"
            animate={{
              boxShadow: [
                '0 10px 40px rgba(0, 31, 91, 0.3)',
                '0 10px 60px rgba(244, 156, 0, 0.4)',
                '0 10px 40px rgba(0, 31, 91, 0.3)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <h3 className="text-3xl font-bold text-white mb-2">
              Your Trusted Paint Partner
            </h3>
            <p className="text-white text-lg opacity-90">
              At Suko Paint, we add color, protection, and value to your property.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
