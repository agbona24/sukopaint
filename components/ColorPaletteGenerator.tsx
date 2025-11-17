'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPalette, FaWhatsapp, FaCopy, FaCheck } from 'react-icons/fa';
import {
  getComplementary,
  getAnalogous,
  getTriadic,
  getMonochromatic,
  getColorName,
} from '@/utils/colorUtils';
import { useToast } from './Toast';

type PaletteType = 'complementary' | 'analogous' | 'triadic' | 'monochromatic';

export default function ColorPaletteGenerator() {
  const [baseColor, setBaseColor] = useState('#F49C00');
  const [paletteType, setPaletteType] = useState<PaletteType>('complementary');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const { showToast } = useToast();

  const generatePalette = (): string[] => {
    switch (paletteType) {
      case 'complementary':
        return [baseColor, getComplementary(baseColor)];
      case 'analogous':
        return getAnalogous(baseColor);
      case 'triadic':
        return getTriadic(baseColor);
      case 'monochromatic':
        return getMonochromatic(baseColor);
      default:
        return [baseColor];
    }
  };

  const palette = generatePalette();

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    showToast(`Copied ${color}!`, 'success');
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const orderPalette = () => {
    const colorList = palette.map((c, i) => `${i + 1}. ${getColorName(c)} (${c})`).join('%0A');
    const message = `Hello Suko Paint! I'd like to order this color palette:%0A%0A${colorList}%0A%0APlease send me a quote.`;
    window.open(`https://wa.me/23488828606?text=${message}`, '_blank');
  };

  const paletteTypes = [
    { id: 'complementary', name: 'Complementary', desc: 'Opposite colors' },
    { id: 'analogous', name: 'Analogous', desc: 'Adjacent colors' },
    { id: 'triadic', name: 'Triadic', desc: '3 colors evenly spaced' },
    { id: 'monochromatic', name: 'Monochromatic', desc: 'Same hue, different tones' },
  ];

  return (
    <section id="color-palette" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <PaintParticlesDecoration />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaPalette className="text-5xl text-[#F49C00]" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F5B] mb-4">
            Color Palette Generator
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create harmonious color combinations for your perfect space
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Controls */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Color Picker */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <label className="block text-lg font-bold text-[#001F5B] mb-4">
                Choose Your Base Color
              </label>
              <div className="flex items-center gap-4">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <input
                    type="color"
                    value={baseColor}
                    onChange={(e) => setBaseColor(e.target.value)}
                    className="w-24 h-24 rounded-xl cursor-pointer border-4 border-gray-200"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    animate={{
                      boxShadow: [
                        `0 0 20px ${baseColor}40`,
                        `0 0 40px ${baseColor}80`,
                        `0 0 20px ${baseColor}40`,
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <div>
                  <div className="text-2xl font-bold text-[#001F5B]">
                    {getColorName(baseColor)}
                  </div>
                  <div className="text-gray-500 font-mono text-sm">{baseColor}</div>
                </div>
              </div>
            </div>

            {/* Palette Type Selector */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <label className="block text-lg font-bold text-[#001F5B] mb-4">
                Select Palette Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                {paletteTypes.map((type) => (
                  <motion.button
                    key={type.id}
                    onClick={() => setPaletteType(type.id as PaletteType)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-xl border-2 transition ${
                      paletteType === type.id
                        ? 'border-[#F49C00] bg-orange-50'
                        : 'border-gray-200 hover:border-[#001F5B]'
                    }`}
                  >
                    <div className="font-bold text-[#001F5B] mb-1">{type.name}</div>
                    <div className="text-xs text-gray-500">{type.desc}</div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Generated Palette */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-[#001F5B] mb-6">Your Palette</h3>

            {/* Color Swatches */}
            <div className="space-y-4 mb-8">
              {palette.map((color, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-20 h-20 rounded-xl shadow-lg flex-shrink-0 relative overflow-hidden cursor-pointer"
                      style={{ backgroundColor: color }}
                      whileHover={{ scale: 1.1 }}
                      onClick={() => copyToClipboard(color)}
                    >
                      <motion.div
                        className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                      >
                        {copiedColor === color ? (
                          <FaCheck className="text-white text-xl" />
                        ) : (
                          <FaCopy className="text-white text-xl" />
                        )}
                      </motion.div>
                    </motion.div>

                    <div className="flex-1">
                      <div className="font-bold text-[#001F5B]">
                        {getColorName(color)}
                      </div>
                      <div className="text-sm text-gray-500 font-mono">{color}</div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => copyToClipboard(color)}
                      className="p-2 rounded-lg hover:bg-gray-100 transition"
                      aria-label="Copy color"
                    >
                      {copiedColor === color ? (
                        <FaCheck className="text-green-500" />
                      ) : (
                        <FaCopy className="text-gray-400" />
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <motion.button
                onClick={orderPalette}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg btn-ripple"
              >
                <FaWhatsapp className="text-2xl" />
                Order This Palette
              </motion.button>

              <motion.button
                onClick={() => {
                  const colors = palette.join(', ');
                  navigator.clipboard.writeText(colors);
                  showToast('All colors copied!', 'success');
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full border-2 border-[#001F5B] text-[#001F5B] py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#001F5B] hover:text-white transition"
              >
                <FaCopy />
                Copy All Colors
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Decorative particles
function PaintParticlesDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: i % 2 === 0 ? '#001F5B' : '#F49C00',
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}
