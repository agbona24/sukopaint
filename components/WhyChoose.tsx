'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserTie, FaCheckCircle, FaClock } from 'react-icons/fa';

export default function WhyChoose() {
  const reasons = [
    {
      icon: <FaShieldAlt />,
      title: 'Durability',
      description: 'Weather-resistant and fade-proof paints formulated for Nigeria.',
    },
    {
      icon: <FaUserTie />,
      title: 'Professionalism',
      description: 'Trained painters and expert finishers on every project.',
    },
    {
      icon: <FaCheckCircle />,
      title: 'Neat Finishes',
      description: 'We treat surfaces and apply clean coats for a flawless result.',
    },
    {
      icon: <FaClock />,
      title: 'Timely Delivery',
      description: 'Your project completed on schedule without compromising quality.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#001F5B] to-[#002a7f] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#F49C00] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
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
            Why Choose Suko Paint?
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Performance, Expertise & Reliability
          </h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            When you work with Suko Paint, you're not just getting color — you're getting performance, expertise, and reliability.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              {/* Card */}
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full border-2 border-white/20 hover:border-[#F49C00] transition-all duration-300"
                animate={{
                  boxShadow: [
                    '0 10px 30px rgba(244, 156, 0, 0.1)',
                    '0 15px 40px rgba(244, 156, 0, 0.2)',
                    '0 10px 30px rgba(244, 156, 0, 0.1)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-[#F49C00] to-orange-600 rounded-full flex items-center justify-center mb-6 mx-auto"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  <div className="text-white text-3xl">
                    {reason.icon}
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 text-center">
                  {reason.title}
                </h3>
                <p className="text-blue-200 text-center leading-relaxed">
                  {reason.description}
                </p>

                {/* Decorative Corner */}
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-[#F49C00] opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ rotate: [0, 90, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-[#F49C00] opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ rotate: [0, -90, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Wave Decoration */}
        <motion.div
          className="mt-16 h-1 bg-gradient-to-r from-transparent via-[#F49C00] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
      </div>
    </section>
  );
}
