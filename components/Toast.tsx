'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaInfoCircle, FaExclamationCircle, FaTimes } from 'react-icons/fa';
import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType = 'info') => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prev) => [...prev, { id, message, type }]);

    // Auto remove after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 5000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const getIcon = (type: ToastType) => {
    switch (type) {
      case 'success':
        return <FaCheckCircle className="text-2xl" />;
      case 'error':
        return <FaExclamationCircle className="text-2xl" />;
      case 'info':
        return <FaInfoCircle className="text-2xl" />;
    }
  };

  const getColors = (type: ToastType) => {
    switch (type) {
      case 'success':
        return 'from-green-500 to-green-600 border-green-400';
      case 'error':
        return 'from-red-500 to-red-600 border-red-400';
      case 'info':
        return 'from-blue-500 to-blue-600 border-blue-400';
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast Container */}
      <div className="fixed top-20 right-4 z-[200] space-y-3 max-w-md">
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={`bg-gradient-to-r ${getColors(toast.type)} text-white px-6 py-4 rounded-xl shadow-2xl border-2 backdrop-blur-sm flex items-center gap-4 min-w-[300px]`}
            >
              {/* Icon */}
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {getIcon(toast.type)}
              </motion.div>

              {/* Message */}
              <p className="flex-1 font-medium text-sm">{toast.message}</p>

              {/* Close Button */}
              <motion.button
                onClick={() => removeToast(toast.id)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="text-white/80 hover:text-white transition"
                aria-label="Close notification"
              >
                <FaTimes />
              </motion.button>

              {/* Progress Bar */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 rounded-b-xl"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: 5, ease: 'linear' }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
