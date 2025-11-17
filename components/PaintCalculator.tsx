'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaRulerCombined, FaPaintRoller, FaWhatsapp, FaCalculator } from 'react-icons/fa';

export default function PaintCalculator() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [coats, setCoats] = useState('2');
  const [result, setResult] = useState<{liters: number; cost: number} | null>(null);

  const calculatePaint = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);
    const c = parseInt(coats);

    if (isNaN(l) || isNaN(w) || isNaN(h) || isNaN(c)) {
      alert('Please fill in all fields with valid numbers');
      return;
    }

    // Calculate wall area (4 walls)
    const wallArea = 2 * (l * h) + 2 * (w * h);

    // Average coverage: 1 liter covers ~10-12 sqm per coat
    const coveragePerLiter = 11; // sqm
    const litersNeeded = (wallArea * c) / coveragePerLiter;

    // Round up to nearest 0.5 liter
    const roundedLiters = Math.ceil(litersNeeded * 2) / 2;

    // Estimated cost (₦3000 per liter average)
    const estimatedCost = roundedLiters * 3000;

    setResult({
      liters: roundedLiters,
      cost: estimatedCost
    });
  };

  const orderOnWhatsApp = () => {
    if (!result) return;

    const message = `Hello Suko Paint! I used your paint calculator and need:\n\nRoom Dimensions: ${length}m x ${width}m x ${height}m\nCoats: ${coats}\nPaint Needed: ${result.liters} liters\nEstimated Cost: ₦${result.cost.toLocaleString()}\n\nI would like to place an order.`;

    const whatsappUrl = `https://wa.me/23488828606?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full"
            style={{
              background: i % 2 === 0 ? '#001F5B' : '#F49C00',
              left: `${(i % 4) * 25}%`,
              top: `${Math.floor(i / 4) * 50}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4 + i * 0.5,
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
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, 10, 0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <FaCalculator className="text-6xl text-[#F49C00] mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F5B] mb-4">
            Paint Calculator
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate exactly how much paint you need for your project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-[#F49C00]"
          >
            <h3 className="text-2xl font-bold text-[#001F5B] mb-6 flex items-center gap-3">
              <FaRulerCombined className="text-[#F49C00]" />
              Room Dimensions
            </h3>

            <div className="space-y-6">
              {/* Length */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Length (meters)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  placeholder="e.g., 5"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F49C00] focus:outline-none transition"
                />
              </div>

              {/* Width */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Width (meters)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  placeholder="e.g., 4"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F49C00] focus:outline-none transition"
                />
              </div>

              {/* Height */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Height (meters)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="e.g., 3"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F49C00] focus:outline-none transition"
                />
              </div>

              {/* Coats */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Number of Coats
                </label>
                <select
                  value={coats}
                  onChange={(e) => setCoats(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F49C00] focus:outline-none transition"
                >
                  <option value="1">1 Coat</option>
                  <option value="2">2 Coats (Recommended)</option>
                  <option value="3">3 Coats</option>
                </select>
              </div>

              {/* Calculate Button */}
              <motion.button
                onClick={calculatePaint}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#001F5B] text-white py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#F49C00] transition shadow-lg"
              >
                <FaPaintRoller />
                Calculate Paint Needed
              </motion.button>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {result ? (
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="bg-gradient-to-br from-[#001F5B] to-[#002a7f] rounded-3xl shadow-2xl p-8 text-white"
              >
                <h3 className="text-3xl font-bold mb-6 text-center">Your Results</h3>

                <div className="space-y-6">
                  {/* Paint Needed */}
                  <motion.div
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#F49C00]"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(244, 156, 0, 0.3)',
                        '0 0 40px rgba(244, 156, 0, 0.6)',
                        '0 0 20px rgba(244, 156, 0, 0.3)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <p className="text-[#F49C00] text-sm mb-2">Paint Required</p>
                    <p className="text-5xl font-bold">{result.liters} Liters</p>
                  </motion.div>

                  {/* Estimated Cost */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <p className="text-blue-200 text-sm mb-2">Estimated Cost</p>
                    <p className="text-4xl font-bold text-[#F49C00]">
                      ₦{result.cost.toLocaleString()}
                    </p>
                  </div>

                  {/* Room Info */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <p className="text-blue-200 text-sm mb-2">Room Size</p>
                    <p className="text-xl font-semibold">
                      {length}m × {width}m × {height}m
                    </p>
                    <p className="text-blue-200 text-sm mt-2">
                      {coats} coat(s) of paint
                    </p>
                  </div>

                  {/* Order Button */}
                  <motion.button
                    onClick={orderOnWhatsApp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#25D366] text-white py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition shadow-lg"
                  >
                    <FaWhatsapp className="text-2xl" />
                    Order on WhatsApp
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center h-full">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                >
                  <FaPaintRoller className="text-8xl text-gray-400 mb-6" />
                </motion.div>
                <p className="text-gray-600 text-center text-lg">
                  Enter your room dimensions and click calculate to see how much paint you need
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-[#F49C00]/10 border-2 border-[#F49C00] rounded-2xl p-6 max-w-4xl mx-auto"
        >
          <h4 className="font-bold text-[#001F5B] text-xl mb-3">💡 Pro Tips:</h4>
          <ul className="text-gray-700 space-y-2">
            <li>• Add 10% extra paint for touch-ups and waste</li>
            <li>• Darker colors may require an extra coat</li>
            <li>• Rough or porous surfaces use more paint</li>
            <li>• Always prepare surfaces properly before painting</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
