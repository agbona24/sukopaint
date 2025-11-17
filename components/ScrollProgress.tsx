'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#001F5B] via-[#F49C00] to-[#001F5B] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F49C00] to-transparent origin-left z-[99] blur-sm"
        style={{ scaleX, opacity: 0.6 }}
      />
    </>
  );
}
