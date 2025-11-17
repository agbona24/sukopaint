'use client';

import { motion } from 'framer-motion';

export default function LiquidWave() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {/* Wave Layer 1 - Navy */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        style={{
          background: `radial-gradient(circle at 20% 50%, rgba(0, 31, 91, 0.4) 0%, transparent 50%),
                       radial-gradient(circle at 80% 80%, rgba(0, 31, 91, 0.3) 0%, transparent 50%)`,
          backgroundSize: '200% 200%',
        }}
      />

      {/* Wave Layer 2 - Orange */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        style={{
          background: `radial-gradient(circle at 60% 30%, rgba(244, 156, 0, 0.4) 0%, transparent 50%),
                       radial-gradient(circle at 40% 70%, rgba(244, 156, 0, 0.3) 0%, transparent 50%)`,
          backgroundSize: '200% 200%',
        }}
      />

      {/* SVG Wave Animation */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <motion.path
          fill="rgba(0, 31, 91, 0.1)"
          animate={{
            d: [
              'M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
              'M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,122.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
              'M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </div>
  );
}
