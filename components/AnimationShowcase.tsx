'use client';

import { motion } from 'framer-motion';
import SVGMorph, { PaintSplashMorph, FloatingSVGMorphs } from './SVGMorph';
import {
  BrushStrokeEffect,
  ColorSwapEffect,
  PaintDripEffect,
  PaintDripDivider
} from './LottieAnimation';
import { FaPaintBrush, FaSwatchbook } from 'react-icons/fa';

export default function AnimationShowcase() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Floating SVG Morphs Background */}
      <FloatingSVGMorphs />

      {/* Paint Drip Divider Top */}
      <div className="absolute top-0 left-0 right-0">
        <PaintDripDivider />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Animation Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* SVG Morphing Demo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 border-2 border-[#F49C00] dark:border-[#FFB020] relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <FaPaintBrush className="text-3xl text-[#F49C00] dark:text-[#FFB020]" />
                <h3 className="text-2xl font-bold text-[#001F5B] dark:text-white">
                  Shape Morphing
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Watch paint tools transform seamlessly from brush to can to roller
              </p>
              <div className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl">
                <SVGMorph
                  className="w-48 h-48"
                  duration={2.5}
                  colors={['#001F5B', '#F49C00', '#003D99', '#FFB020']}
                />
              </div>
            </div>
          </motion.div>

          {/* Color Swap Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 border-2 border-[#001F5B] dark:border-[#003D99] relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <FaSwatchbook className="text-3xl text-[#001F5B] dark:text-[#003D99]" />
                <h3 className="text-2xl font-bold text-[#001F5B] dark:text-white">
                  Color Flow
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Smooth color transitions showcase our vibrant paint palette
              </p>
              <div className="h-64 flex items-center justify-center bg-gradient-to-br from-orange-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl">
                <ColorSwapEffect className="w-48 h-48" />
              </div>
            </div>
          </motion.div>

          {/* Paint Drip Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 border-2 border-[#F49C00] dark:border-[#FFB020] relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaPaintBrush className="text-3xl text-[#F49C00] dark:text-[#FFB020]" />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#001F5B] dark:text-white">
                  Paint Drips
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Realistic dripping effect adds character to the experience
              </p>
              <div className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                  <PaintDripEffect className="w-24 h-32" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Brush Stroke Animation Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#001F5B] via-[#F49C00] to-[#001F5B] dark:from-[#003D99] dark:via-[#FFB020] dark:to-[#003D99] rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <BrushStrokeEffect className="w-full h-full" />
          </div>
          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Animated Brush Strokes
            </h3>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Every interaction is enhanced with smooth, paint-inspired animations that make the experience delightful and memorable
            </p>
          </div>
        </motion.div>

        {/* Paint Splash Morphing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-[#001F5B] dark:text-white mb-8">
            Dynamic Paint Splashes
          </h3>
          <div className="flex justify-center gap-8 flex-wrap">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="w-32 h-32"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.5,
                }}
              >
                <PaintSplashMorph />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Paint Drip Divider Bottom */}
      <div className="absolute bottom-0 left-0 right-0 rotate-180">
        <PaintDripDivider />
      </div>
    </section>
  );
}
