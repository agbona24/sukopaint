'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaTools, FaCheckCircle, FaArrowRight, FaArrowLeft, FaWhatsapp } from 'react-icons/fa';

interface Step {
  title: string;
  description: string;
  tools: string[];
  time: string;
}

export default function SurfaceGuide() {
  const [selectedSurface, setSelectedSurface] = useState<string | null>(null);
  const [showSteps, setShowSteps] = useState(false);

  const surfaces = [
    {
      id: 'new-plaster',
      name: 'New Plaster/Concrete',
      icon: '🧱',
      difficulty: 'Easy',
    },
    {
      id: 'old-paint',
      name: 'Previously Painted Wall',
      icon: '🎨',
      difficulty: 'Medium',
    },
    {
      id: 'wood',
      name: 'Wood Surface',
      icon: '🪵',
      difficulty: 'Medium',
    },
    {
      id: 'metal',
      name: 'Metal Surface',
      icon: '⚙️',
      difficulty: 'Hard',
    },
    {
      id: 'damaged',
      name: 'Damaged/Cracked Wall',
      icon: '🔨',
      difficulty: 'Hard',
    },
  ];

  const surfaceSteps: { [key: string]: Step[] } = {
    'new-plaster': [
      {
        title: 'Allow Drying Time',
        description: 'Let new plaster cure for at least 28 days before painting to prevent moisture issues.',
        tools: ['Moisture meter (optional)'],
        time: '28 days',
      },
      {
        title: 'Clean the Surface',
        description: 'Remove all dust, debris, and loose particles using a soft brush or vacuum.',
        tools: ['Soft brush', 'Vacuum cleaner', 'Clean cloth'],
        time: '30 minutes',
      },
      {
        title: 'Apply Primer',
        description: 'Use a quality primer to seal the plaster and improve paint adhesion.',
        tools: ['Primer', 'Roller', 'Brush'],
        time: '2 hours + drying',
      },
      {
        title: 'Sand Smooth',
        description: 'Lightly sand any rough spots after primer dries for a perfect finish.',
        tools: ['Fine sandpaper (120-grit)', 'Sanding block'],
        time: '1 hour',
      },
    ],
    'old-paint': [
      {
        title: 'Inspect the Surface',
        description: 'Check for peeling, cracking, or flaking paint that needs to be removed.',
        tools: ['Scraper', 'Wire brush'],
        time: '30 minutes',
      },
      {
        title: 'Remove Loose Paint',
        description: 'Scrape off all loose or peeling paint down to solid surface.',
        tools: ['Paint scraper', 'Wire brush', 'Sandpaper'],
        time: '1-2 hours',
      },
      {
        title: 'Clean and Degrease',
        description: 'Wash the wall with sugar soap to remove dirt, grease, and grime.',
        tools: ['Sugar soap', 'Sponge', 'Water', 'Clean cloth'],
        time: '1 hour',
      },
      {
        title: 'Fill Holes and Cracks',
        description: 'Use filler to repair any imperfections and let it dry completely.',
        tools: ['Wall filler', 'Putty knife', 'Sandpaper'],
        time: '2 hours + drying',
      },
      {
        title: 'Sand the Surface',
        description: 'Sand the entire wall to create a smooth, even surface for painting.',
        tools: ['Medium sandpaper (80-120 grit)', 'Sanding block'],
        time: '1-2 hours',
      },
    ],
    'wood': [
      {
        title: 'Clean the Wood',
        description: 'Remove any dirt, grease, or old finish from the wood surface.',
        tools: ['Wood cleaner', 'Cloth', 'Scraper'],
        time: '1 hour',
      },
      {
        title: 'Sand Thoroughly',
        description: 'Sand with the grain to create a smooth surface. Start with coarse, finish with fine grit.',
        tools: ['Coarse sandpaper (60-80 grit)', 'Fine sandpaper (120-180 grit)'],
        time: '2-3 hours',
      },
      {
        title: 'Fill Gaps and Holes',
        description: 'Use wood filler for any gaps, holes, or imperfections.',
        tools: ['Wood filler', 'Putty knife', 'Sandpaper'],
        time: '1 hour + drying',
      },
      {
        title: 'Apply Wood Primer',
        description: 'Use a wood primer to seal the surface and improve paint adhesion.',
        tools: ['Wood primer', 'Brush', 'Roller'],
        time: '2 hours + drying',
      },
    ],
    'metal': [
      {
        title: 'Remove Rust',
        description: 'Use a wire brush or rust remover to eliminate all rust and corrosion.',
        tools: ['Wire brush', 'Rust remover', 'Sandpaper', 'Safety gloves'],
        time: '2-3 hours',
      },
      {
        title: 'Clean and Degrease',
        description: 'Remove all oil, grease, and contaminants with a degreaser.',
        tools: ['Metal degreaser', 'Clean cloth', 'Water'],
        time: '1 hour',
      },
      {
        title: 'Sand the Surface',
        description: 'Sand to create a rough surface for better paint adhesion.',
        tools: ['Medium sandpaper (80-100 grit)', 'Sanding block'],
        time: '1-2 hours',
      },
      {
        title: 'Apply Metal Primer',
        description: 'Use a rust-inhibiting metal primer to protect against corrosion.',
        tools: ['Metal primer', 'Brush', 'Roller'],
        time: '2 hours + drying',
      },
    ],
    'damaged': [
      {
        title: 'Assess the Damage',
        description: 'Identify all cracks, holes, and damaged areas that need repair.',
        tools: ['Flashlight', 'Marker'],
        time: '30 minutes',
      },
      {
        title: 'Remove Loose Material',
        description: 'Clear away all loose plaster, paint, or debris from damaged areas.',
        tools: ['Scraper', 'Wire brush', 'Vacuum'],
        time: '1 hour',
      },
      {
        title: 'Fill Cracks and Holes',
        description: 'Use appropriate filler for different sized repairs. Large holes may need mesh tape.',
        tools: ['Wall filler', 'Mesh tape', 'Putty knife', 'Mixing tool'],
        time: '2-4 hours + drying',
      },
      {
        title: 'Sand Smooth',
        description: 'Sand all repaired areas flush with the wall surface.',
        tools: ['Sandpaper (120-180 grit)', 'Sanding block', 'Dust mask'],
        time: '2 hours',
      },
      {
        title: 'Prime Repaired Areas',
        description: 'Apply primer to all repaired spots to ensure even paint coverage.',
        tools: ['Primer', 'Brush', 'Roller'],
        time: '1 hour + drying',
      },
    ],
  };

  const handleStart = () => {
    if (selectedSurface) {
      setShowSteps(true);
    }
  };

  const reset = () => {
    setSelectedSurface(null);
    setShowSteps(false);
  };

  const currentSteps = selectedSurface ? surfaceSteps[selectedSurface] : [];
  const currentSurface = surfaces.find((s) => s.id === selectedSurface);

  return (
    <section id="surface-guide" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <FaTools className="text-6xl text-[#F49C00] mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F5B] mb-4">
            Surface Preparation Guide
          </h2>
          <p className="text-lg text-gray-600">
            Get professional results with proper surface preparation
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showSteps ? (
            /* Surface Selection */
            <motion.div
              key="selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-[#001F5B] mb-6">
                  Select Your Surface Type
                </h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {surfaces.map((surface) => (
                    <motion.button
                      key={surface.id}
                      onClick={() => setSelectedSurface(surface.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-6 rounded-xl border-2 transition text-left ${
                        selectedSurface === surface.id
                          ? 'border-[#F49C00] bg-orange-50'
                          : 'border-gray-200 hover:border-[#001F5B]'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-4xl">{surface.icon}</span>
                        <div className="flex-1">
                          <div className="font-bold text-[#001F5B] mb-1">
                            {surface.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            Difficulty: {surface.difficulty}
                          </div>
                        </div>
                        {selectedSurface === surface.id && (
                          <FaCheckCircle className="text-[#F49C00] text-2xl" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>

                <motion.button
                  onClick={handleStart}
                  disabled={!selectedSurface}
                  whileHover={{ scale: selectedSurface ? 1.02 : 1 }}
                  whileTap={{ scale: selectedSurface ? 0.98 : 1 }}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition ${
                    selectedSurface
                      ? 'bg-[#F49C00] text-white hover:bg-[#FF8C00]'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Get Preparation Steps
                  <FaArrowRight />
                </motion.button>
              </div>
            </motion.div>
          ) : (
            /* Preparation Steps */
            <motion.div
              key="steps"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-[#001F5B] mb-2">
                      {currentSurface?.name}
                    </h3>
                    <p className="text-gray-600">
                      {currentSteps.length} steps • {currentSurface?.difficulty} difficulty
                    </p>
                  </div>
                  <motion.button
                    onClick={reset}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-600 hover:text-[#001F5B] transition"
                  >
                    <FaArrowLeft />
                    Change Surface
                  </motion.button>
                </div>

                <div className="space-y-6">
                  {currentSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-l-4 border-[#F49C00] pl-6 py-4 bg-gray-50 rounded-r-xl"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-[#F49C00] text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-[#001F5B] mb-2">
                            {step.title}
                          </h4>
                          <p className="text-gray-700 mb-4">{step.description}</p>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <div className="text-sm font-bold text-gray-600 mb-2">
                                Tools Needed:
                              </div>
                              <ul className="text-sm space-y-1">
                                {step.tools.map((tool, i) => (
                                  <li key={i} className="flex items-center gap-2">
                                    <FaCheckCircle className="text-green-500 text-xs" />
                                    <span>{tool}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <div className="text-sm font-bold text-gray-600 mb-2">
                                Estimated Time:
                              </div>
                              <div className="text-lg font-bold text-[#F49C00]">
                                {step.time}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#001F5B] to-[#003080] rounded-xl text-white">
                  <h4 className="font-bold text-lg mb-2">Need Help or Materials?</h4>
                  <p className="mb-4 opacity-90">
                    Contact us for expert advice and quality materials for your project.
                  </p>
                  <motion.a
                    href="https://wa.me/23488828606?text=Hello! I need help with surface preparation."
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold"
                  >
                    <FaWhatsapp className="text-xl" />
                    Get Expert Help
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
