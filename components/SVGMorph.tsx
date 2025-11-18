'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface SVGMorphProps {
  className?: string;
  duration?: number;
  colors?: string[];
}

export default function SVGMorph({ className = '', duration = 3, colors = ['#001F5B', '#F49C00'] }: SVGMorphProps) {
  const [currentShape, setCurrentShape] = useState(0);

  // Paint-related SVG paths
  const shapes = [
    // Paint Can
    'M80 40 L120 40 L115 120 L85 120 Z M75 35 L125 35 L125 40 L75 40 Z',
    // Paint Brush
    'M100 30 L110 30 L115 80 L120 120 L80 120 L85 80 L90 30 Z M95 20 L115 20 L115 30 L95 30 Z',
    // Paint Roller
    'M60 40 L140 40 L140 60 L60 60 Z M95 60 L105 60 L105 120 L95 120 Z M90 115 L110 115 L110 125 L90 125 Z',
    // Paint Bucket
    'M70 50 L130 50 L125 120 L75 120 Z M65 45 L135 45 L135 50 L65 50 Z M85 30 L115 30 Q120 35 115 40 L85 40 Q80 35 85 30 Z',
    // Paint Drop
    'M100 20 Q120 40 120 70 Q120 100 100 120 Q80 100 80 70 Q80 40 100 20 Z',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShape((prev) => (prev + 1) % shapes.length);
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [duration, shapes.length]);

  return (
    <motion.svg
      viewBox="0 0 200 150"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ width: '100%', height: '100%' }}
    >
      {/* Animated Path with Morphing */}
      <motion.path
        d={shapes[currentShape]}
        fill={colors[currentShape % colors.length]}
        initial={{ d: shapes[0] }}
        animate={{
          d: shapes[currentShape],
          fill: colors[currentShape % colors.length]
        }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
        }}
        style={{
          filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
        }}
      />

      {/* Decorative paint splash effect */}
      <motion.circle
        cx="100"
        cy="75"
        r="60"
        fill="none"
        stroke={colors[(currentShape + 1) % colors.length]}
        strokeWidth="2"
        opacity="0.2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.svg>
  );
}

// Hero Section SVG Morph with paint-themed shapes
export function HeroSVGMorph() {
  return (
    <div className="absolute top-10 right-10 w-32 h-32 md:w-48 md:h-48 opacity-20">
      <SVGMorph
        duration={4}
        colors={['#F49C00', '#001F5B', '#FFB020', '#003D99', '#F49C00']}
      />
    </div>
  );
}

// Floating SVG Morphs for background decoration
export function FloatingSVGMorphs() {
  const positions = [
    { top: '10%', left: '5%', size: 'w-24 h-24' },
    { top: '60%', right: '10%', size: 'w-32 h-32' },
    { top: '30%', left: '80%', size: 'w-20 h-20' },
    { top: '80%', left: '15%', size: 'w-28 h-28' },
  ];

  return (
    <>
      {positions.map((pos, index) => (
        <motion.div
          key={index}
          className={`absolute ${pos.size} opacity-10`}
          style={{ ...pos }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.5,
          }}
        >
          <SVGMorph
            duration={3 + index}
            colors={['#001F5B', '#F49C00']}
          />
        </motion.div>
      ))}
    </>
  );
}

// Paint Splash Morph - specific animation for transitions
export function PaintSplashMorph({ className = '' }: { className?: string }) {
  const splashPaths = [
    // Splash 1 - expanding
    'M100 80 Q80 70 70 90 Q60 110 80 120 Q100 130 120 120 Q140 110 130 90 Q120 70 100 80 Z',
    // Splash 2 - dripping
    'M100 70 Q85 75 80 90 Q75 105 85 115 Q95 125 105 115 Q115 105 110 90 Q105 75 100 70 Z M100 125 L100 140',
    // Splash 3 - spreading
    'M100 80 Q70 75 60 95 Q50 115 75 125 Q100 135 125 125 Q150 115 140 95 Q130 75 100 80 Z',
  ];

  const [currentSplash, setCurrentSplash] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSplash((prev) => (prev + 1) % splashPaths.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <svg viewBox="0 0 200 200" className={className}>
      <motion.path
        d={splashPaths[currentSplash]}
        fill="#F49C00"
        animate={{
          d: splashPaths[currentSplash],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
        }}
      />
    </svg>
  );
}
