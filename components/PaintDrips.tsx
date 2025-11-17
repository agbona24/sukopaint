'use client';

import { motion } from 'framer-motion';

export default function PaintDrips() {
  const drips = [
    { left: '10%', delay: 0, color: '#001F5B', duration: 3 },
    { left: '25%', delay: 0.5, color: '#F49C00', duration: 2.5 },
    { left: '45%', delay: 1, color: '#001F5B', duration: 3.5 },
    { left: '65%', delay: 0.3, color: '#F49C00', duration: 2.8 },
    { left: '80%', delay: 0.8, color: '#001F5B', duration: 3.2 },
    { left: '90%', delay: 1.2, color: '#F49C00', duration: 2.6 },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 pointer-events-none z-[60] overflow-hidden h-32">
      {drips.map((drip, index) => (
        <motion.div
          key={index}
          className="absolute top-0"
          style={{ left: drip.left }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 120, opacity: [0, 1, 1, 0] }}
          transition={{
            duration: drip.duration,
            delay: drip.delay,
            repeat: Infinity,
            repeatDelay: 4,
            ease: 'easeIn',
          }}
        >
          {/* Paint Drip SVG */}
          <svg width="20" height="80" viewBox="0 0 20 80" fill="none">
            <path
              d="M10 0 C8 0, 7 5, 7 10 L7 60 C7 65, 6 70, 10 75 C14 70, 13 65, 13 60 L13 10 C13 5, 12 0, 10 0 Z"
              fill={drip.color}
              opacity="0.8"
            />
            {/* Drip blob at bottom */}
            <ellipse cx="10" cy="72" rx="6" ry="8" fill={drip.color} opacity="0.9" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
