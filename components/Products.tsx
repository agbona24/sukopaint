'use client';

import { motion } from 'framer-motion';
import { FaPaintRoller, FaSprayCan } from 'react-icons/fa';
import Image from 'next/image';

export default function Products() {
  const products = [
    {
      icon: <FaPaintRoller />,
      title: 'Emulsion',
      description: 'Premium quality emulsion for walls and ceilings with excellent coverage and a smooth, matte finish.',
      color: 'from-blue-400 to-blue-600',
      image: '/images/Emulsion.png',
    },
    {
      icon: <FaSprayCan />,
      title: 'Satin',
      description: 'Soft sheen finish that is easy to clean and perfect for high-traffic areas like hallways and living rooms.',
      color: 'from-purple-400 to-purple-600',
      image: '/images/Satin.png',
    },
    {
      icon: <FaPaintRoller />,
      title: 'Matt',
      description: 'Non-reflective finish ideal for hiding imperfections and creating a sophisticated, modern look.',
      color: 'from-gray-400 to-gray-600',
      image: '/images/Matt.png',
    },
    {
      icon: <FaSprayCan />,
      title: 'Gloss',
      description: 'High-gloss finish for doors, windows, and metal surfaces with superior durability and shine.',
      color: 'from-orange-400 to-orange-600',
      image: '/images/Gloss.png',
    },
    {
      icon: <FaPaintRoller />,
      title: 'Silk',
      description: 'Luxurious silk finish with a subtle sheen, perfect for feature walls and elegant interiors.',
      color: 'from-pink-400 to-pink-600',
      image: '/images/Silk.png',
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
            Our Paint Types
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            High-quality finishes designed to elevate your space with vibrant colors and long-lasting protection
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
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
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        // Fallback to gradient background if image fails to load
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </motion.div>

                  {/* Overlay Icon */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center`}
                  >
                    <motion.div
                      className="text-white text-6xl"
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
                  </motion.div>
                </div>

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
