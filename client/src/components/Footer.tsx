import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-dusty-pink via-lavender to-blush py-8 border-t border-white/20 relative z-10">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          className="text-gray-600 font-inter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Made with <span className="text-hot-pink text-xl">❤️</span> by Praja
        </motion.p>
        <motion.p
          className="text-gray-500 text-sm mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          For the most beautiful person in my world
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
