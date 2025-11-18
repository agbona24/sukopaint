'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaShoppingCart, FaHeart, FaEye, FaTimes } from 'react-icons/fa';

interface Activity {
  id: string;
  type: 'purchase' | 'view' | 'like';
  name: string;
  product: string;
  location: string;
  timeAgo: string;
}

export default function LiveActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [currentActivity, setCurrentActivity] = useState<Activity | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  const sampleActivities: Omit<Activity, 'id' | 'timeAgo'>[] = [
    { type: 'purchase', name: 'Adebayo', product: 'Suko Orange Emulsion', location: 'Lagos' },
    { type: 'purchase', name: 'Chioma', product: 'Navy Blue Satin', location: 'Abuja' },
    { type: 'view', name: 'Emeka', product: 'Pure White Matt', location: 'Port Harcourt' },
    { type: 'purchase', name: 'Fatima', product: 'Silk Paint', location: 'Kano' },
    { type: 'like', name: 'Ibrahim', product: 'Gloss Paint', location: 'Ibadan' },
    { type: 'purchase', name: 'Grace', product: 'Terracotta Emulsion', location: 'Enugu' },
    { type: 'view', name: 'Kunle', product: 'Sage Green Silk', location: 'Benin' },
    { type: 'purchase', name: 'Amina', product: 'Sky Blue Emulsion', location: 'Kaduna' },
    { type: 'like', name: 'Tunde', product: 'Rose Pink Silk', location: 'Oyo' },
    { type: 'purchase', name: 'Ngozi', product: 'Warm Gray Matt', location: 'Anambra' },
    { type: 'view', name: 'Ahmed', product: 'Lavender Matt', location: 'Sokoto' },
    { type: 'purchase', name: 'Blessing', product: 'Soft Cream Satin', location: 'Rivers' },
  ];

  useEffect(() => {
    const showActivity = () => {
      const randomActivity = sampleActivities[Math.floor(Math.random() * sampleActivities.length)];
      const newActivity: Activity = {
        ...randomActivity,
        id: Math.random().toString(36).substring(7),
        timeAgo: 'Just now',
      };

      setCurrentActivity(newActivity);
      setActivities((prev) => [newActivity, ...prev.slice(0, 9)]);

      // Hide after 5 seconds
      setTimeout(() => {
        setCurrentActivity(null);
      }, 5000);
    };

    // Show first activity after 3 seconds
    const initialTimeout = setTimeout(showActivity, 3000);

    // Then show activities every 8-15 seconds
    const interval = setInterval(() => {
      showActivity();
    }, Math.random() * 7000 + 8000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const getIcon = (type: Activity['type']) => {
    switch (type) {
      case 'purchase':
        return <FaShoppingCart className="text-green-500" />;
      case 'view':
        return <FaEye className="text-blue-500" />;
      case 'like':
        return <FaHeart className="text-red-500" />;
    }
  };

  const getAction = (type: Activity['type']) => {
    switch (type) {
      case 'purchase':
        return 'just ordered';
      case 'view':
        return 'is viewing';
      case 'like':
        return 'liked';
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {currentActivity && (
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -100, scale: 0.8 }}
          className="fixed bottom-24 left-4 z-[60] max-w-sm"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-4 border-l-4 border-[#F49C00]"
            animate={{
              boxShadow: [
                '0 10px 40px rgba(0, 0, 0, 0.1)',
                '0 15px 50px rgba(244, 156, 0, 0.2)',
                '0 10px 40px rgba(0, 0, 0, 0.1)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex items-start gap-3">
              <motion.div
                className="flex-shrink-0 text-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5 }}
              >
                {getIcon(currentActivity.type)}
              </motion.div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-bold text-[#001F5B]">
                      {currentActivity.name} from {currentActivity.location}
                    </p>
                    <p className="text-xs text-gray-600">
                      {getAction(currentActivity.type)} <span className="font-medium">{currentActivity.product}</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{currentActivity.timeAgo}</p>
                  </div>

                  <button
                    onClick={() => setCurrentActivity(null)}
                    className="text-gray-400 hover:text-gray-600 transition"
                    aria-label="Close notification"
                  >
                    <FaTimes className="text-sm" />
                  </button>
                </div>
              </div>
            </div>

            {/* Verified Badge */}
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs text-green-600 font-medium">Verified Customer</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
