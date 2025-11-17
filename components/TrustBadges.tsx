'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FaAward, FaUsers, FaCheckCircle, FaPaintRoller } from 'react-icons/fa';

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
}

function StatCounter({ value, suffix = '', prefix = '' }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.floor(latest).toLocaleString()}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export default function TrustBadges() {
  const stats = [
    {
      icon: <FaUsers />,
      value: 3500,
      suffix: '+',
      label: 'Happy Customers',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <FaPaintRoller />,
      value: 5,
      suffix: '',
      label: 'Paint Types Available',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <FaCheckCircle />,
      value: 10000,
      suffix: '+',
      label: 'Paint Cans Sold',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#001F5B] to-[#003080] relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute w-full h-full"
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{
            backgroundImage: 'radial-gradient(circle, #F49C00 2px, transparent 2px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            animate={{
              textShadow: [
                '0 0 20px rgba(244, 156, 0, 0.5)',
                '0 0 30px rgba(244, 156, 0, 0.8)',
                '0 0 20px rgba(244, 156, 0, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Trusted by Thousands
          </motion.h2>
          <p className="text-white/80 text-lg">
            Quality and reliability you can count on
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group"
            >
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 hover:border-[#F49C00] transition-all duration-300 h-full">
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, rgba(244, 156, 0, 0.2), transparent)`,
                    filter: 'blur(10px)',
                  }}
                />

                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} mb-4 relative z-10`}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <div className="text-white text-2xl">{stat.icon}</div>
                </motion.div>

                {/* Counter */}
                <div className="relative z-10">
                  <motion.h3
                    className="text-4xl md:text-5xl font-bold text-white mb-2"
                    animate={{
                      textShadow: [
                        '0 0 10px rgba(255, 255, 255, 0.5)',
                        '0 0 20px rgba(255, 255, 255, 0.8)',
                        '0 0 10px rgba(255, 255, 255, 0.5)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <StatCounter value={stat.value} suffix={stat.suffix} />
                  </motion.h3>
                  <p className="text-white/80 font-medium text-sm md:text-base">
                    {stat.label}
                  </p>
                </div>

                {/* Decorative Corner */}
                <motion.div
                  className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#F49C00] opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-[#F49C00] text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl"
            animate={{
              boxShadow: [
                '0 10px 30px rgba(244, 156, 0, 0.3)',
                '0 15px 40px rgba(244, 156, 0, 0.6)',
                '0 10px 30px rgba(244, 156, 0, 0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaAward className="text-2xl" />
            <span>100% Customer Satisfaction Guaranteed</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
