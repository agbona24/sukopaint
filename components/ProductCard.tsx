'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTilt } from '@/hooks/useTilt';
import { ReactNode } from 'react';

interface ProductCardProps {
  product: {
    icon: ReactNode;
    title: string;
    description: string;
    color: string;
    image: string;
  };
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative group perspective-1000"
      style={{ perspective: '1000px' }}
    >
      {/* Card with 3D Tilt */}
      <motion.div
        className="bg-white rounded-2xl shadow-xl overflow-hidden h-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove as any}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.05, z: 50 }}
        transition={{ duration: 0.3 }}
      >
        {/* Product Image */}
        <div className="relative h-64 bg-white overflow-hidden flex items-center justify-center p-4">
          <motion.div
            className="relative w-full h-full hover-shake"
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain drop-shadow-lg"
            />
          </motion.div>

          {/* Overlay Icon with Color Splash */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center`}
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3 }}
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

            {/* Color Ripple Effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle, ${product.color} 0%, transparent 70%)`,
              }}
              animate={{
                scale: [0.5, 1.5],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-[#001F5B] mb-3 animated-underline">
            {product.title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            {product.description}
          </p>

          {/* CTA Button */}
          <motion.a
            href="https://wa.me/23488828606?text=Hello%20Suko%20Paint!%20I%20would%20like%20to%20order%20"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#001F5B] to-[#003080] text-white px-6 py-3 rounded-full hover:from-[#F49C00] hover:to-[#FF8C00] transition shadow-lg btn-ripple group/btn"
          >
            <span>Order Now</span>
            <motion.svg
              className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </motion.a>
        </div>

        {/* 3D Shadow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 pointer-events-none"
          style={{ transformZ: '-50px' }}
        />
      </motion.div>
    </motion.div>
  );
}
