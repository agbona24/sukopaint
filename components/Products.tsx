'use client';

import { motion } from 'framer-motion';
import { FaPaintRoller, FaSprayCan } from 'react-icons/fa';
import ProductCard from './ProductCard';

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

        {/* Products Grid with 3D Tilt Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
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
