'use client';

import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John D.',
      role: 'Residential Client',
      content:
        'Suko Paint transformed my living space with vibrant colors and a smooth finish. The team was professional, and the quality of the paint exceeded my expectations!',
      rating: 5,
      avatar: 'JD',
    },
    {
      name: 'Sarah M.',
      role: 'Interior Designer',
      content:
        'I recommend Suko Paint to all my clients. The durability and color range are outstanding. It truly stands up to the Nigerian climate!',
      rating: 5,
      avatar: 'SM',
    },
    {
      name: 'David O.',
      role: 'Property Developer',
      content:
        'We use Suko Paint for all our development projects. Affordable, durable, and reliable. A truly Nigerian solution!',
      rating: 5,
      avatar: 'DO',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-[#001F5B] to-[#002a7f] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <FaStar className="text-[#F49C00]" size={10 + Math.random() * 20} />
          </motion.div>
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
            What Our Clients Say
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Feedback from Real People
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Experience the quality and care of Suko Paint through our clients' words
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative"
            >
              {/* Card */}
              <motion.div
                className="bg-white rounded-2xl shadow-2xl p-8 h-full relative overflow-hidden"
                animate={{
                  boxShadow: [
                    '0 20px 40px rgba(244, 156, 0, 0.2)',
                    '0 25px 50px rgba(244, 156, 0, 0.3)',
                    '0 20px 40px rgba(244, 156, 0, 0.2)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {/* Decorative Corner */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="#F49C00" opacity="0.1" />
                  </svg>
                </motion.div>

                {/* Quote Icon */}
                <motion.div
                  className="text-[#F49C00] text-4xl mb-4 opacity-20"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FaQuoteLeft />
                </motion.div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                      animate={{
                        rotate: [0, 10, 0, -10, 0],
                      }}
                      whileHover={{ scale: 1.3 }}
                      className="cursor-pointer"
                    >
                      <FaStar className="text-[#F49C00] text-xl" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 text-base leading-relaxed mb-6 relative z-10">
                  {testimonial.content}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <motion.div
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-[#001F5B] to-[#F49C00] flex items-center justify-center text-white font-bold text-lg"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(244, 156, 0, 0.5)',
                        '0 0 30px rgba(244, 156, 0, 0.8)',
                        '0 0 20px rgba(244, 156, 0, 0.5)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {testimonial.avatar}
                  </motion.div>

                  {/* Name and Role */}
                  <div>
                    <h4 className="font-bold text-[#001F5B] text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#F49C00] text-sm font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Animated Highlight */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#001F5B] via-[#F49C00] to-[#001F5B]"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: '200% 100%' }}
                />
              </motion.div>

              {/* Floating Dots */}
              <motion.div
                className="absolute -top-2 -left-2 w-4 h-4 bg-[#F49C00] rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#001F5B] rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-white text-xl mb-6"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Join hundreds of satisfied customers who trust Suko Paint
          </motion.p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#F49C00] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#001F5B] transition shadow-2xl"
          >
            Get Started Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
