'use client';

import { motion } from 'framer-motion';

interface InfiniteMarqueeProps {
  items: string[];
  speed?: number;
}

export default function InfiniteMarquee({ items, speed = 50 }: InfiniteMarqueeProps) {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-8 bg-gradient-to-r from-[#001F5B] to-[#003080]">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: [0, -50 + '%'],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-white text-xl font-bold px-8"
          >
            <span className="text-[#F49C00]">★</span>
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
