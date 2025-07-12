import { motion } from "framer-motion";

const Wishes = () => {
  const wishes = [
    {
      icon: "fas fa-plane",
      title: "Travel the World Together",
      description: "I dream of exploring beautiful places with you - from the cherry blossoms in Japan to the romantic streets of Paris.",
      gradient: "from-dusty-pink to-blush"
    },
    {
      icon: "fas fa-home",
      title: "Build Our Cozy Home",
      description: "A little house filled with love, laughter, plants, and all our favorite things. Our own peaceful sanctuary.",
      gradient: "from-lavender to-plum"
    },
    {
      icon: "fas fa-ring",
      title: "Forever Together",
      description: "I want to spend the rest of my life making you happy and building a beautiful future together.",
      gradient: "from-blush to-hot-pink"
    },
    {
      icon: "fas fa-heart",
      title: "Grow Old Together",
      description: "I want to share every season of life with you, creating beautiful memories until we're old and gray.",
      gradient: "from-dusty-pink to-lavender"
    }
  ];

  return (
    <section className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-5xl font-bold text-hot-pink mb-4">
            Our Future Dreams
          </h2>
          <p className="text-xl text-gray-600 font-inter">
            All the beautiful things I want to experience with you
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              className="glassmorphism rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-r ${wish.gradient} rounded-full flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <i className={`${wish.icon} text-white text-xl`}></i>
                  </motion.div>
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair text-2xl font-bold text-hot-pink mb-2">
                    {wish.title}
                  </h3>
                  <p className="text-gray-600 font-inter">
                    {wish.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Final Message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="glassmorphism rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto">
            <motion.h3
              className="font-dancing text-4xl text-hot-pink mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Happy Birthday, My Love!
            </motion.h3>
            <p className="text-xl text-gray-600 font-inter leading-relaxed">
              Thank you for being the most amazing person in my life. I love you more than words can express, and I can't wait to see what beautiful adventures await us. Here's to your special day and to our forever love story. 💕
            </p>
            <motion.div
              className="flex justify-center space-x-2 mt-6 text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {['💖', '💕', '💗', '💝', '💖'].map((heart, index) => (
                <motion.span
                  key={index}
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  {heart}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Wishes;
