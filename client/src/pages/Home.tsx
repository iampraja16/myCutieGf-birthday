import { motion } from "framer-motion";
import { Link } from "wouter";
import TypingText from "@/components/TypingText";
import InteractivePhoto from "@/components/InteractivePhoto";

const Home = () => {
  const romanticWords = ['MANIS', 'CANTIK', 'LUCU', 'GEMES', 'CREAMMY', 'VANILLA', 'LEMBUT', 'MWAA2'];

  return (
    <section className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Text */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative Elements */}
            <motion.div
              className="absolute top-32 left-10 text-dusty-pink opacity-30"
              animate={{ rotate: [0, 12, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <i className="fas fa-heart text-4xl"></i>
            </motion.div>
            <motion.div
              className="absolute top-48 left-32 text-lavender opacity-40"
              animate={{ rotate: [0, -12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <i className="fas fa-star text-2xl"></i>
            </motion.div>
            
            <div className="text-left space-y-6">
              <motion.h1
                className="font-playfair text-6xl md:text-7xl font-bold text-hot-pink leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Happy Birthday Yaa
              </motion.h1>
              <motion.div
                className="text-2xl md:text-3xl font-inter text-gray-700"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span>Pacarnya aku yang </span>
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-dusty-pink to-blush rounded-full text-white font-medium">
                  <TypingText words={romanticWords} />
                </span>
              </motion.div>
            </div>
            
            {/* Romantic Quote */}
            <motion.div
              className="glassmorphism rounded-2xl p-6 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="font-dancing text-xl text-gray-600 italic">
                "Every moment with you feels like a beautiful dream I never want to wake up from..."
              </p>
              <div className="flex items-center justify-end mt-4">
                <div className="flex space-x-1 text-hot-pink">
                  <motion.i
                    className="fas fa-heart text-sm"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <motion.i
                    className="fas fa-heart text-sm"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.i
                    className="fas fa-heart text-sm"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Interactive Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/letter">
                <motion.button
                  className="glassmorphism px-6 py-3 rounded-full text-hot-pink font-medium hover:bg-dusty-pink hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-envelope mr-2"></i>
                  Read My Letter
                </motion.button>
              </Link>
              <Link href="/gallery">
                <motion.button
                  className="glassmorphism px-6 py-3 rounded-full text-hot-pink font-medium hover:bg-dusty-pink hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-images mr-2"></i>
                  Our Memories
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right Side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <InteractivePhoto />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
