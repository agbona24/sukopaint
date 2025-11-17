'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaHome, FaPaintRoller, FaWhatsapp, FaClipboardList } from 'react-icons/fa';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'residential',
    paintType: 'emulsion',
    area: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number');
      return;
    }

    // Create WhatsApp message
    const message = `*NEW QUOTE REQUEST*\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email || 'Not provided'}\n\n` +
      `Project Type: ${formData.projectType.charAt(0).toUpperCase() + formData.projectType.slice(1)}\n` +
      `Paint Type: ${formData.paintType.charAt(0).toUpperCase() + formData.paintType.slice(1)}\n` +
      `Area Size: ${formData.area || 'Not specified'} sqm\n\n` +
      `Additional Details:\n${formData.message || 'None'}\n\n` +
      `Please send me a quote for this project.`;

    const whatsappUrl = `https://wa.me/23488828606?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: 'residential',
      paintType: 'emulsion',
      area: '',
      message: ''
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-orange-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${(i % 4) * 25}%`,
              top: `${Math.floor(i / 4) * 33}%`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <FaPaintRoller className="text-[#001F5B] text-6xl" />
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
          <motion.div
            className="inline-block mb-4"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <FaClipboardList className="text-6xl text-[#F49C00] mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F5B] mb-4">
            Request a Free Quote
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill in the details below and we'll send you a personalized quote on WhatsApp
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-[#F49C00]">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                  <FaUser className="text-[#F49C00]" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F49C00] focus:outline-none transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                  <FaPhone className="text-[#F49C00]" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="0808 123 4567"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F49C00] focus:outline-none transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                  <FaEnvelope className="text-[#F49C00]" />
                  Email (Optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F49C00] focus:outline-none transition"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                  <FaHome className="text-[#F49C00]" />
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F49C00] focus:outline-none transition"
                >
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="hospitality">Hotels & Hospitality</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Paint Type */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                  <FaPaintRoller className="text-[#F49C00]" />
                  Paint Type
                </label>
                <select
                  name="paintType"
                  value={formData.paintType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F49C00] focus:outline-none transition"
                >
                  <option value="emulsion">Emulsion</option>
                  <option value="satin">Satin</option>
                  <option value="matt">Matt</option>
                  <option value="gloss">Gloss</option>
                  <option value="silk">Silk</option>
                  <option value="notSure">Not Sure</option>
                </select>
              </div>

              {/* Area */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Estimated Area (sqm)
                </label>
                <input
                  type="number"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="e.g., 100"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F49C00] focus:outline-none transition"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">
                  Additional Details (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us more about your project..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F49C00] focus:outline-none transition resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-8 bg-[#25D366] text-white py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition shadow-2xl"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(37, 211, 102, 0.3)',
                  '0 0 40px rgba(37, 211, 102, 0.6)',
                  '0 0 20px rgba(37, 211, 102, 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaWhatsapp className="text-2xl" />
              Get Quote on WhatsApp
            </motion.button>

            <p className="text-center text-gray-500 text-sm mt-4">
              * We'll send your quote directly to WhatsApp for instant communication
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
