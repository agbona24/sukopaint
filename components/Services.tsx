'use client';

import { motion } from 'framer-motion';
import { FaHome, FaBuilding, FaHotel, FaTools, FaPalette, FaArrowRight } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: <FaHome />,
      title: 'Residential Painting',
      description: 'Transform your home with smooth, colorful finishes that resist peeling and fading under Nigeria\'s weather.',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: <FaBuilding />,
      title: 'Commercial Painting',
      description: 'Offices, showrooms, and retail spaces deserve a bold first impression — and we deliver exactly that.',
      color: 'from-orange-500 to-orange-700',
    },
    {
      icon: <FaHotel />,
      title: 'Hotels & Hospitality',
      description: 'We help hotels and guesthouses create beautiful, memorable environments with quality, washable paint finishes.',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: <FaTools />,
      title: 'Surface Preparation',
      description: 'We treat damp walls, flaking surfaces, and cracks before painting — ensuring durability and a clean look.',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: <FaPalette />,
      title: 'Color Consultation',
      description: 'Not sure which shade fits your space? Our experts can guide you on the best hues to bring your ideas to life.',
      color: 'from-pink-500 to-pink-700',
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 200 + i * 50,
              height: 200 + i * 50,
              left: `${(i % 3) * 40}%`,
              top: `${Math.floor(i / 3) * 30}%`,
              border: '2px solid #001F5B',
            }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
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
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F5B] mb-4">
            End-to-End Paint Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're refreshing a living room or revamping an entire commercial space,
            Suko Paint offers solutions designed for Nigerian homes, businesses, and hospitality projects.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              {/* Card */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full border-2 border-transparent hover:border-[#F49C00]">
                {/* Icon Circle */}
                <div className="p-8">
                  <motion.div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 mx-auto`}
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    <div className="text-white text-3xl">
                      {service.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#001F5B] mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center mb-6">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <motion.a
                    href="#contact"
                    className="flex items-center justify-center gap-2 text-[#F49C00] font-semibold hover:text-[#001F5B] transition group-hover:gap-4"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <FaArrowRight />
                  </motion.a>
                </div>

                {/* Animated Bottom Border */}
                <motion.div
                  className={`h-2 bg-gradient-to-r ${service.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                />
              </div>

              {/* Floating Decoration */}
              <motion.div
                className="absolute -top-2 -right-2 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="30" fill="#F49C00" opacity="0.3" />
                  <circle cx="50" cy="50" r="20" fill="#001F5B" opacity="0.5" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
