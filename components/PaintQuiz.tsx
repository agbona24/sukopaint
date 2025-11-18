'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaArrowRight, FaArrowLeft, FaPalette, FaWhatsapp, FaShare } from 'react-icons/fa';
import { useToast } from './Toast';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    value: string;
    colors: string[];
  }[];
}

interface QuizResult {
  color: string;
  colorName: string;
  paintType: string;
  personality: string;
  description: string;
  roomSuggestions: string[];
}

export default function PaintQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);
  const { showToast } = useToast();

  const questions: Question[] = [
    {
      id: 1,
      question: "What's your ideal way to spend a weekend?",
      options: [
        { text: 'Relaxing at home with a book', value: 'calm', colors: ['#E6E6FA', '#98FF98', '#FFF8DC'] },
        { text: 'Hosting a party with friends', value: 'energetic', colors: ['#F49C00', '#FF6B6B', '#FFD700'] },
        { text: 'Exploring nature outdoors', value: 'natural', colors: ['#9DC183', '#87CEEB', '#E2725B'] },
        { text: 'Working on creative projects', value: 'creative', colors: ['#001F5B', '#FFB6C1', '#9370DB'] },
      ],
    },
    {
      id: 2,
      question: 'Which word best describes your style?',
      options: [
        { text: 'Minimalist & Modern', value: 'minimal', colors: ['#FFFFFF', '#9E9E9E', '#36454F'] },
        { text: 'Bold & Vibrant', value: 'bold', colors: ['#F49C00', '#FF1493', '#001F5B'] },
        { text: 'Warm & Cozy', value: 'warm', colors: ['#E2725B', '#FFF8DC', '#CD853F'] },
        { text: 'Elegant & Sophisticated', value: 'elegant', colors: ['#001F5B', '#E6E6FA', '#C0C0C0'] },
      ],
    },
    {
      id: 3,
      question: 'What mood do you want your room to evoke?',
      options: [
        { text: 'Calm & Peaceful', value: 'peaceful', colors: ['#87CEEB', '#E6E6FA', '#98FF98'] },
        { text: 'Energetic & Inspiring', value: 'inspiring', colors: ['#FFD700', '#F49C00', '#FF6B6B'] },
        { text: 'Warm & Inviting', value: 'inviting', colors: ['#E2725B', '#FFF8DC', '#FFB6C1'] },
        { text: 'Professional & Focused', value: 'focused', colors: ['#001F5B', '#36454F', '#9E9E9E'] },
      ],
    },
    {
      id: 4,
      question: 'Which room are you painting?',
      options: [
        { text: 'Bedroom', value: 'bedroom', colors: ['#E6E6FA', '#FFB6C1', '#FFF8DC'] },
        { text: 'Living Room', value: 'living', colors: ['#FFF8DC', '#87CEEB', '#9DC183'] },
        { text: 'Kitchen', value: 'kitchen', colors: ['#FFFFFF', '#FFF8DC', '#98FF98'] },
        { text: 'Office/Study', value: 'office', colors: ['#001F5B', '#9E9E9E', '#87CEEB'] },
      ],
    },
    {
      id: 5,
      question: 'How much natural light does the room get?',
      options: [
        { text: 'Lots of sunlight', value: 'bright', colors: ['#FFFFFF', '#FFF8DC', '#E6E6FA'] },
        { text: 'Moderate light', value: 'moderate', colors: ['#87CEEB', '#98FF98', '#FFB6C1'] },
        { text: 'Low light', value: 'low', colors: ['#F49C00', '#FFD700', '#FF6B6B'] },
        { text: 'Artificial light mostly', value: 'artificial', colors: ['#9E9E9E', '#001F5B', '#36454F'] },
      ],
    },
  ];

  const calculateResult = (userAnswers: string[]): QuizResult => {
    // Collect all color suggestions from answers
    const allColors: string[] = [];
    userAnswers.forEach((answer, index) => {
      const question = questions[index];
      const selectedOption = question.options.find((opt) => opt.value === answer);
      if (selectedOption) {
        allColors.push(...selectedOption.colors);
      }
    });

    // Find most common color
    const colorCounts: { [key: string]: number } = {};
    allColors.forEach((color) => {
      colorCounts[color] = (colorCounts[color] || 0) + 1;
    });

    const sortedColors = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]);
    const topColor = sortedColors[0][0];

    // Map colors to results
    const colorResults: { [key: string]: QuizResult } = {
      '#E6E6FA': {
        color: '#E6E6FA',
        colorName: 'Lavender',
        paintType: 'Matt',
        personality: 'The Peaceful Soul',
        description: 'You appreciate tranquility and elegance. Lavender creates a serene, sophisticated atmosphere perfect for relaxation and reflection.',
        roomSuggestions: ['Bedroom', 'Meditation room', 'Reading nook'],
      },
      '#F49C00': {
        color: '#F49C00',
        colorName: 'Suko Orange',
        paintType: 'Emulsion',
        personality: 'The Energizer',
        description: 'Bold and vibrant, you bring energy to every space. Orange stimulates creativity and adds warmth that makes any room come alive.',
        roomSuggestions: ['Living room', 'Dining room', 'Creative studio'],
      },
      '#001F5B': {
        color: '#001F5B',
        colorName: 'Navy Blue',
        paintType: 'Satin',
        personality: 'The Sophisticated Professional',
        description: 'Classic and confident, you value timeless elegance. Navy blue exudes authority and creates a focused, professional environment.',
        roomSuggestions: ['Office', 'Study', 'Library'],
      },
      '#FFFFFF': {
        color: '#FFFFFF',
        colorName: 'Pure White',
        paintType: 'Emulsion',
        personality: 'The Minimalist',
        description: 'Clean, pure, and effortlessly stylish. White creates an open, airy space that serves as a perfect canvas for your life.',
        roomSuggestions: ['Any room', 'Modern spaces', 'Small rooms'],
      },
      '#FFF8DC': {
        color: '#FFF8DC',
        colorName: 'Soft Cream',
        paintType: 'Satin',
        personality: 'The Warm Host',
        description: 'Welcoming and comforting, you create spaces where people feel at home. Cream adds warmth without overwhelming.',
        roomSuggestions: ['Living room', 'Dining room', 'Bedroom'],
      },
      '#9DC183': {
        color: '#9DC183',
        colorName: 'Sage Green',
        paintType: 'Silk',
        personality: 'The Nature Lover',
        description: 'Grounded and refreshing, you bring the outdoors in. Sage green creates a balanced, harmonious environment.',
        roomSuggestions: ['Bedroom', 'Bathroom', 'Kitchen'],
      },
      '#87CEEB': {
        color: '#87CEEB',
        colorName: 'Sky Blue',
        paintType: 'Emulsion',
        personality: 'The Dreamer',
        description: 'Calm and optimistic, you create spaces that inspire. Sky blue promotes peace and opens up possibilities.',
        roomSuggestions: ['Bedroom', 'Bathroom', 'Nursery'],
      },
      '#FFB6C1': {
        color: '#FFB6C1',
        colorName: 'Rose Pink',
        paintType: 'Silk',
        personality: 'The Romantic',
        description: 'Soft and nurturing, you create beautiful, loving spaces. Rose pink adds a gentle, sophisticated touch.',
        roomSuggestions: ['Bedroom', 'Dressing room', 'Nursery'],
      },
      '#9E9E9E': {
        color: '#9E9E9E',
        colorName: 'Warm Gray',
        paintType: 'Matt',
        personality: 'The Modern Classic',
        description: 'Versatile and contemporary, you appreciate understated sophistication. Gray provides the perfect neutral backdrop.',
        roomSuggestions: ['Living room', 'Office', 'Bedroom'],
      },
      '#E2725B': {
        color: '#E2725B',
        colorName: 'Terracotta',
        paintType: 'Emulsion',
        personality: 'The Earth Child',
        description: 'Warm and grounded, you create cozy, inviting spaces. Terracotta brings natural warmth and character.',
        roomSuggestions: ['Kitchen', 'Dining room', 'Living room'],
      },
    };

    return colorResults[topColor] || colorResults['#F49C00'];
  };

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const quizResult = calculateResult(newAnswers);
      setResult(quizResult);
      setShowResult(true);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setResult(null);
  };

  const shareResult = () => {
    const text = `I just discovered my perfect paint color: ${result?.colorName}! I'm a ${result?.personality}. Find yours at sukopaint.com`;

    if (navigator.share) {
      navigator.share({ text });
    } else {
      navigator.clipboard.writeText(text);
      showToast('Result copied to clipboard!', 'success');
    }
  };

  const orderColor = () => {
    if (!result) return;
    const message = `Hello Suko Paint! I took the color quiz and my perfect match is ${result.colorName} (${result.paintType}). I'd like to order this for my ${result.roomSuggestions[0]}.`;
    window.open(`https://wa.me/23488828606?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="paint-quiz" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Header */}
        {!showResult && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaPalette className="text-6xl text-[#F49C00] mx-auto mb-4" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F5B] mb-4">
              Find Your Perfect Color
            </h2>
            <p className="text-lg text-gray-600">
              Answer 5 quick questions to discover your ideal paint color
            </p>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {!showResult ? (
            /* Quiz Questions */
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-[#001F5B] to-[#F49C00] h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Question */}
              <h3 className="text-2xl md:text-3xl font-bold text-[#001F5B] mb-8">
                {questions[currentQuestion].question}
              </h3>

              {/* Options */}
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(option.value)}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full text-left p-6 rounded-xl border-2 border-gray-200 hover:border-[#F49C00] hover:bg-orange-50 transition group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium text-gray-800 group-hover:text-[#001F5B]">
                        {option.text}
                      </span>
                      <FaArrowRight className="text-[#F49C00] opacity-0 group-hover:opacity-100 transition" />
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Back Button */}
              {currentQuestion > 0 && (
                <motion.button
                  onClick={goBack}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 flex items-center gap-2 text-gray-600 hover:text-[#001F5B] transition"
                >
                  <FaArrowLeft />
                  Back
                </motion.button>
              )}
            </motion.div>
          ) : (
            /* Quiz Result */
            result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
              >
                <div className="text-center mb-8">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div
                      className="w-48 h-48 mx-auto rounded-full shadow-2xl mb-6"
                      style={{ backgroundColor: result.color }}
                    />
                  </motion.div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#001F5B] mb-2">
                    {result.colorName}
                  </h3>
                  <p className="text-xl text-[#F49C00] font-bold mb-4">
                    {result.personality}
                  </p>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    {result.description}
                  </p>
                </div>

                {/* Details */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold text-[#001F5B] mb-3">Recommended Paint Type</h4>
                    <p className="text-2xl font-bold text-[#F49C00]">{result.paintType}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold text-[#001F5B] mb-3">Perfect For</h4>
                    <ul className="space-y-1">
                      {result.roomSuggestions.map((room, i) => (
                        <li key={i} className="text-gray-700">• {room}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <motion.button
                    onClick={orderColor}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg btn-ripple"
                  >
                    <FaWhatsapp className="text-2xl" />
                    Order {result.colorName} Now
                  </motion.button>

                  <div className="grid grid-cols-2 gap-3">
                    <motion.button
                      onClick={shareResult}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="border-2 border-[#001F5B] text-[#001F5B] py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#001F5B] hover:text-white transition"
                    >
                      <FaShare />
                      Share
                    </motion.button>

                    <motion.button
                      onClick={restart}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gray-100 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-200 transition"
                    >
                      Retake Quiz
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
