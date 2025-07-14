import { useState } from "react";
import { motion } from "framer-motion";

const InteractivePhoto = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX + 15, y: e.clientY - 30 });
  };

  const handleMouseEnter = () => {
    setShowCursor(true);
  };

  const handleMouseLeave = () => {
    setShowCursor(false);
  };

  return (
    <div className="flex justify-center">
      <div className="relative">
        {/* Decorative background */}
        <div className="absolute -inset-6 bg-gradient-to-r from-dusty-pink via-lavender to-blush rounded-3xl blur-xl opacity-30"></div>
        
        {/* Photo frame */}
        <motion.div
          className="relative glassmorphism rounded-3xl p-6 shadow-2xl cursor-none"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Placeholder for girlfriend photo */}
          <img
            src="/images/home.jpg"
            alt="My beautiful girlfriend"
            className="w-80 h-96 object-cover rounded-2xl filter grayscale hover:grayscale-0 transition-all duration-500"
          />
          
          {/* Decorative hearts */}
          <motion.div
            className="absolute -top-3 -right-3 text-2xl text-hot-pink"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💖
          </motion.div>
          <motion.div
            className="absolute -bottom-3 -left-3 text-xl text-dusty-pink"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            💕
          </motion.div>
        </motion.div>
        
        {/* Custom cursor tooltip */}
        {showCursor && (
          <motion.div
            className="fixed pointer-events-none z-50 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium shadow-xl border-2 border-hot-pink"
            style={{ left: cursorPosition.x, top: cursorPosition.y }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            hi, it's my cutie gf! 💕
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default InteractivePhoto;
