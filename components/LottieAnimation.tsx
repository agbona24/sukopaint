'use client';

import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

// Paint Can Loading Animation Data
const paintCanAnimation = {
  v: '5.7.4',
  fr: 30,
  ip: 0,
  op: 60,
  w: 200,
  h: 200,
  nm: 'Paint Can Loading',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Paint Can',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [10] },
            { t: 15, s: [10], e: [-10] },
            { t: 30, s: [-10], e: [10] },
            { t: 45, s: [10], e: [0] },
            { t: 60, s: [0] },
          ],
        },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [100, 100, 100], e: [110, 110, 100] },
            { t: 30, s: [110, 110, 100], e: [100, 100, 100] },
            { t: 60, s: [100, 100, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ty: 'rc',
              d: 1,
              s: { a: 0, k: [60, 80] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 5 },
            },
            {
              ty: 'fl',
              c: { a: 0, k: [0.961, 0.612, 0] },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 60,
      st: 0,
    },
  ],
};

// Paint Brush Stroke Animation
const brushStrokeAnimation = {
  v: '5.7.4',
  fr: 30,
  ip: 0,
  op: 90,
  w: 400,
  h: 200,
  nm: 'Brush Stroke',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Stroke',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [200, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ty: 'sh',
              ks: {
                a: 1,
                k: [
                  {
                    t: 0,
                    s: [
                      {
                        i: [[0, 0], [0, 0]],
                        o: [[0, 0], [0, 0]],
                        v: [[-150, 0], [-150, 0]],
                        c: false,
                      },
                    ],
                  },
                  {
                    t: 90,
                    s: [
                      {
                        i: [[0, 0], [0, 0]],
                        o: [[0, 0], [0, 0]],
                        v: [[-150, 0], [150, 0]],
                        c: false,
                      },
                    ],
                  },
                ],
              },
            },
            {
              ty: 'st',
              c: { a: 0, k: [0, 0.122, 0.357, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 20 },
              lc: 2,
              lj: 2,
            },
          ],
        },
      ],
      ip: 0,
      op: 90,
      st: 0,
    },
  ],
};

// Paint Drip Animation
const paintDripAnimation = {
  v: '5.7.4',
  fr: 30,
  ip: 0,
  op: 120,
  w: 100,
  h: 300,
  nm: 'Paint Drip',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Drip',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { t: 0, s: [50, 0, 0], e: [50, 250, 0] },
            { t: 120, s: [50, 250, 0] },
          ],
        },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [100, 0, 100], e: [100, 100, 100] },
            { t: 60, s: [100, 100, 100], e: [100, 120, 100] },
            { t: 120, s: [100, 120, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ty: 'el',
              d: 1,
              s: { a: 0, k: [20, 40] },
              p: { a: 0, k: [0, 0] },
            },
            {
              ty: 'fl',
              c: { a: 0, k: [0.961, 0.612, 0, 1] },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 120,
      st: 0,
    },
  ],
};

// Color Palette Swap Animation
const colorSwapAnimation = {
  v: '5.7.4',
  fr: 30,
  ip: 0,
  op: 90,
  w: 300,
  h: 300,
  nm: 'Color Swap',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Circle',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [150, 150, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [0, 0, 100], e: [120, 120, 100] },
            { t: 30, s: [120, 120, 100], e: [100, 100, 100] },
            { t: 60, s: [100, 100, 100], e: [120, 120, 100] },
            { t: 90, s: [120, 120, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ty: 'el',
              d: 1,
              s: { a: 0, k: [100, 100] },
              p: { a: 0, k: [0, 0] },
            },
            {
              ty: 'fl',
              c: {
                a: 1,
                k: [
                  { t: 0, s: [0.961, 0.612, 0, 1], e: [0, 0.122, 0.357, 1] },
                  { t: 45, s: [0, 0.122, 0.357, 1], e: [0.961, 0.612, 0, 1] },
                  { t: 90, s: [0.961, 0.612, 0, 1] },
                ],
              },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 90,
      st: 0,
    },
  ],
};

interface LottieAnimationProps {
  animationType: 'paintCan' | 'brushStroke' | 'paintDrip' | 'colorSwap';
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export default function LottieAnimation({
  animationType,
  className = '',
  loop = true,
  autoplay = true,
}: LottieAnimationProps) {
  const animations = {
    paintCan: paintCanAnimation,
    brushStroke: brushStrokeAnimation,
    paintDrip: paintDripAnimation,
    colorSwap: colorSwapAnimation,
  };

  return (
    <div className={className}>
      <Lottie
        animationData={animations[animationType]}
        loop={loop}
        autoplay={autoplay}
      />
    </div>
  );
}

// Pre-built animation components for easy use
export function PaintCanLoader({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <LottieAnimation animationType="paintCan" />
    </motion.div>
  );
}

export function BrushStrokeEffect({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <LottieAnimation animationType="brushStroke" loop={true} />
    </div>
  );
}

export function PaintDripEffect({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <LottieAnimation animationType="paintDrip" loop={true} />
    </div>
  );
}

export function ColorSwapEffect({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <LottieAnimation animationType="colorSwap" loop={true} />
    </div>
  );
}

// Hero section animated icon
export function HeroLottieIcon() {
  return (
    <motion.div
      className="absolute bottom-10 left-10 w-24 h-24 md:w-32 md:h-32"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <LottieAnimation animationType="colorSwap" />
    </motion.div>
  );
}

// Section divider with paint drips
export function PaintDripDivider() {
  return (
    <div className="relative w-full h-16 overflow-hidden">
      <div className="absolute inset-0 flex justify-around items-start">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="w-8 h-24"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.5,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <LottieAnimation animationType="paintDrip" loop={false} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Loading state component
export function LoadingPaintCan({ message = 'Loading...' }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="w-32 h-32 mb-4">
        <LottieAnimation animationType="paintCan" />
      </div>
      <p className="text-[#001F5B] dark:text-[#FFB020] font-semibold text-lg">
        {message}
      </p>
    </div>
  );
}
