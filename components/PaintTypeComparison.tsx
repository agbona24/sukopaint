'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCheck, FaTimes, FaStar, FaWhatsapp } from 'react-icons/fa';

interface PaintType {
  id: string;
  name: string;
  image: string;
  price: string;
  sheen: string;
  durability: number;
  washability: number;
  coverage: string;
  dryTime: string;
  bestFor: string[];
  pros: string[];
  cons: string[];
}

export default function PaintTypeComparison() {
  const paintTypes: PaintType[] = [
    {
      id: 'emulsion',
      name: 'Emulsion',
      image: '/images/Emulsion.png',
      price: '₦8,000 - ₦12,000',
      sheen: 'Matte',
      durability: 4,
      washability: 3,
      coverage: '11 sqm/liter',
      dryTime: '2-4 hours',
      bestFor: ['Living rooms', 'Bedrooms', 'Ceilings'],
      pros: ['Excellent coverage', 'Smooth finish', 'Low odor'],
      cons: ['Less washable', 'Shows scuffs easily'],
    },
    {
      id: 'satin',
      name: 'Satin',
      image: '/images/Satin.png',
      price: '₦10,000 - ₦15,000',
      sheen: 'Soft Sheen',
      durability: 5,
      washability: 5,
      coverage: '10 sqm/liter',
      dryTime: '2-3 hours',
      bestFor: ['Hallways', 'Living rooms', 'Kitchens'],
      pros: ['Easy to clean', 'Durable', 'Elegant finish'],
      cons: ['Shows application marks', 'Pricier'],
    },
    {
      id: 'matt',
      name: 'Matt',
      image: '/images/Matt.png',
      price: '₦7,000 - ₦11,000',
      sheen: 'Flat/Matte',
      durability: 3,
      washability: 2,
      coverage: '12 sqm/liter',
      dryTime: '2-4 hours',
      bestFor: ['Bedrooms', 'Low-traffic areas', 'Ceilings'],
      pros: ['Hides imperfections', 'Modern look', 'Great coverage'],
      cons: ['Difficult to clean', 'Not for high-traffic'],
    },
    {
      id: 'gloss',
      name: 'Gloss',
      image: '/images/Gloss.png',
      price: '₦12,000 - ₦18,000',
      sheen: 'High Gloss',
      durability: 5,
      washability: 5,
      coverage: '9 sqm/liter',
      dryTime: '4-6 hours',
      bestFor: ['Doors', 'Windows', 'Metal surfaces'],
      pros: ['Extremely durable', 'Easy to clean', 'Shiny finish'],
      cons: ['Shows imperfections', 'Longer dry time'],
    },
    {
      id: 'silk',
      name: 'Silk',
      image: '/images/Silk.png',
      price: '₦11,000 - ₦16,000',
      sheen: 'Silk/Pearl',
      durability: 4,
      washability: 4,
      coverage: '10 sqm/liter',
      dryTime: '3-4 hours',
      bestFor: ['Feature walls', 'Dining rooms', 'Bathrooms'],
      pros: ['Luxurious finish', 'Moisture resistant', 'Easy to clean'],
      cons: ['Shows application marks', 'Premium price'],
    },
  ];

  const [selectedTypes, setSelectedTypes] = useState<string[]>(['emulsion', 'satin']);

  const toggleSelection = (id: string) => {
    if (selectedTypes.includes(id)) {
      if (selectedTypes.length > 1) {
        setSelectedTypes(selectedTypes.filter((t) => t !== id));
      }
    } else {
      if (selectedTypes.length < 3) {
        setSelectedTypes([...selectedTypes, id]);
      }
    }
  };

  const selectedPaints = paintTypes.filter((p) => selectedTypes.includes(p.id));

  const orderComparison = () => {
    const paintList = selectedPaints.map((p) => p.name).join(', ');
    const message = `Hello Suko Paint! I'm comparing ${paintList}. Can you help me choose the best option for my project?`;
    window.open(`https://wa.me/23488828606?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="comparison" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F5B] mb-4">
            Compare Paint Types
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose up to 3 paint types to compare side-by-side
          </p>
        </motion.div>

        {/* Paint Type Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {paintTypes.map((paint) => (
            <motion.button
              key={paint.id}
              onClick={() => toggleSelection(paint.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-bold transition ${
                selectedTypes.includes(paint.id)
                  ? 'bg-[#F49C00] text-white shadow-lg'
                  : 'bg-white text-[#001F5B] border-2 border-gray-200 hover:border-[#F49C00]'
              }`}
            >
              {paint.name}
            </motion.button>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <div className="grid gap-4" style={{ gridTemplateColumns: `200px repeat(${selectedPaints.length}, 1fr)` }}>
              {/* Header Row */}
              <div className="bg-[#001F5B] rounded-tl-2xl p-6" />
              {selectedPaints.map((paint, index) => (
                <motion.div
                  key={paint.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-t-2xl p-6 shadow-lg ${index === selectedPaints.length - 1 ? 'rounded-tr-2xl' : ''}`}
                >
                  <div className="text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <img
                        src={paint.image}
                        alt={paint.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-[#001F5B] mb-2">{paint.name}</h3>
                    <div className="text-[#F49C00] font-bold">{paint.price}/4L</div>
                  </div>
                </motion.div>
              ))}

              {/* Feature Rows */}
              {[
                { label: 'Sheen Level', key: 'sheen' },
                { label: 'Coverage', key: 'coverage' },
                { label: 'Dry Time', key: 'dryTime' },
              ].map((feature, idx) => (
                <>
                  <div className="bg-[#001F5B] text-white p-4 font-bold flex items-center">
                    {feature.label}
                  </div>
                  {selectedPaints.map((paint) => (
                    <div key={`${paint.id}-${feature.key}`} className="bg-white p-4 border-l border-gray-100 flex items-center justify-center text-center">
                      {paint[feature.key as keyof PaintType]}
                    </div>
                  ))}
                </>
              ))}

              {/* Rating Rows */}
              {[
                { label: 'Durability', key: 'durability' },
                { label: 'Washability', key: 'washability' },
              ].map((feature) => (
                <>
                  <div className="bg-[#001F5B] text-white p-4 font-bold flex items-center">
                    {feature.label}
                  </div>
                  {selectedPaints.map((paint) => (
                    <div key={`${paint.id}-${feature.key}`} className="bg-white p-4 border-l border-gray-100 flex items-center justify-center">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar
                            key={i}
                            className={i < (paint[feature.key as keyof PaintType] as number) ? 'text-[#F49C00]' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </>
              ))}

              {/* Best For */}
              <div className="bg-[#001F5B] text-white p-4 font-bold flex items-center">
                Best For
              </div>
              {selectedPaints.map((paint) => (
                <div key={`${paint.id}-bestFor`} className="bg-white p-4 border-l border-gray-100">
                  <ul className="text-sm space-y-1">
                    {paint.bestFor.map((use, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Pros */}
              <div className="bg-[#001F5B] text-white p-4 font-bold flex items-center">
                Pros
              </div>
              {selectedPaints.map((paint) => (
                <div key={`${paint.id}-pros`} className="bg-white p-4 border-l border-gray-100">
                  <ul className="text-sm space-y-1">
                    {paint.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Cons */}
              <div className="bg-[#001F5B] text-white p-4 font-bold flex items-center rounded-bl-2xl">
                Cons
              </div>
              {selectedPaints.map((paint, index) => (
                <div key={`${paint.id}-cons`} className={`bg-white p-4 border-l border-gray-100 ${index === selectedPaints.length - 1 ? 'rounded-br-2xl' : ''}`}>
                  <ul className="text-sm space-y-1">
                    {paint.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FaTimes className="text-red-500 mt-1 flex-shrink-0" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.button
            onClick={orderComparison}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl btn-ripple"
          >
            <FaWhatsapp className="text-2xl" />
            Get Expert Advice on WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
