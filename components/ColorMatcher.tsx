'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaImage, FaWhatsapp, FaRedo, FaUpload } from 'react-icons/fa';
import { extractDominantColors, getColorName } from '@/utils/colorUtils';
import { useToast } from './Toast';
import Image from 'next/image';

export default function ColorMatcher() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [extractedColors, setExtractedColors] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { showToast } = useToast();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showToast('Please upload an image file', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const imageUrl = event.target?.result as string;
      setUploadedImage(imageUrl);
      extractColors(imageUrl);
    };
    reader.readAsDataURL(file);
  };

  const extractColors = (imageUrl: string) => {
    setIsProcessing(true);

    const img = document.createElement('img');
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Resize for performance
      const maxSize = 400;
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxSize) {
          height = (height * maxSize) / width;
          width = maxSize;
        }
      } else {
        if (height > maxSize) {
          width = (width * maxSize) / height;
          height = maxSize;
        }
      }

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);
      const imageData = ctx.getImageData(0, 0, width, height);

      const colors = extractDominantColors(imageData.data, 5);
      setExtractedColors(colors);
      setIsProcessing(false);
      showToast('Colors extracted successfully!', 'success');
    };

    img.src = imageUrl;
  };

  const reset = () => {
    setUploadedImage(null);
    setExtractedColors([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const orderColors = () => {
    const colorList = extractedColors
      .map((c, i) => `${i + 1}. ${getColorName(c)} (${c})`)
      .join('%0A');
    const message = `Hello Suko Paint! I found these colors in my inspiration photo:%0A%0A${colorList}%0A%0ACan you match these colors for me?`;
    window.open(`https://wa.me/23488828606?text=${message}`, '_blank');
  };

  return (
    <section id="color-matcher" className="py-20 bg-gradient-to-br from-orange-50 to-white relative overflow-hidden">
      <canvas ref={canvasRef} className="hidden" />

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
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaImage className="text-5xl text-[#F49C00]" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F5B] mb-4">
            Color Match from Photo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload an inspiration photo and we'll extract the perfect color palette
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {!uploadedImage ? (
            /* Upload Area */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="block cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white rounded-3xl p-16 border-4 border-dashed border-[#F49C00] hover:border-[#001F5B] transition text-center"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaUpload className="text-6xl text-[#F49C00] mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#001F5B] mb-3">
                    Upload Your Inspiration Photo
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Drop your image here or click to browse
                  </p>
                  <div className="inline-block bg-[#F49C00] text-white px-8 py-3 rounded-full font-bold">
                    Choose Image
                  </div>
                </motion.div>
              </label>

              {/* Example Inspirations */}
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">Try uploading:</p>
                <div className="flex flex-wrap justify-center gap-3 text-sm">
                  {['Sunset photo', 'Nature scene', 'Fabric pattern', 'Art piece', 'Room interior'].map((item) => (
                    <span key={item} className="bg-white px-4 py-2 rounded-full border border-gray-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            /* Results Area */
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Uploaded Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl p-6 shadow-xl"
              >
                <h3 className="text-xl font-bold text-[#001F5B] mb-4">Your Photo</h3>
                <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={uploadedImage}
                    alt="Uploaded inspiration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.button
                  onClick={reset}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-gray-100 text-[#001F5B] py-3 rounded-xl font-bold hover:bg-gray-200 transition"
                >
                  <FaRedo />
                  Upload Different Photo
                </motion.button>
              </motion.div>

              {/* Extracted Colors */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl p-6 shadow-xl"
              >
                <h3 className="text-xl font-bold text-[#001F5B] mb-4">Extracted Colors</h3>

                {isProcessing ? (
                  <div className="text-center py-16">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-16 h-16 border-4 border-[#F49C00] border-t-transparent rounded-full mx-auto mb-4"
                    />
                    <p className="text-gray-600">Extracting colors...</p>
                  </div>
                ) : extractedColors.length > 0 ? (
                  <div className="space-y-4">
                    {extractedColors.map((color, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        <motion.div
                          className="w-16 h-16 rounded-xl shadow-md flex-shrink-0"
                          style={{ backgroundColor: color }}
                          whileHover={{ scale: 1.1 }}
                        />
                        <div className="flex-1">
                          <div className="font-bold text-[#001F5B]">
                            {getColorName(color)}
                          </div>
                          <div className="text-sm text-gray-500 font-mono">{color}</div>
                        </div>
                        <div className="text-2xl font-bold text-gray-300">
                          #{index + 1}
                        </div>
                      </motion.div>
                    ))}

                    {/* CTA Buttons */}
                    <div className="pt-4 space-y-3">
                      <motion.button
                        onClick={orderColors}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg btn-ripple"
                      >
                        <FaWhatsapp className="text-2xl" />
                        Order These Colors
                      </motion.button>

                      <p className="text-center text-sm text-gray-500">
                        Our experts will help match these colors perfectly
                      </p>
                    </div>
                  </div>
                ) : null}
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
