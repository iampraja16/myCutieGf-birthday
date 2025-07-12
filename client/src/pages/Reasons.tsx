import { motion } from "framer-motion";

const Reasons = () => {
  const reasons = [
    {
      emoji: "😊",
      title: "Your Beautiful Smile",
      description: "Your smile lights up my entire world and makes even the gloomiest days feel bright and beautiful."
    },
    {
      emoji: "🤗",
      title: "Your Warm Hugs",
      description: "In your arms, I feel completely safe and loved. Your hugs can fix anything and everything."
    },
    {
      emoji: "😂",
      title: "Your Adorable Laugh",
      description: "Your laugh is my favorite sound in the world. It's contagious and fills me with pure joy."
    },
    {
      emoji: "💝",
      title: "Your Kind Heart",
      description: "You have the most beautiful soul. Your kindness and compassion inspire me every day."
    },
    {
      emoji: "🌟",
      title: "Your Inner Strength",
      description: "You're so much stronger than you know. I admire your resilience and determination."
    },
    {
      emoji: "🥰",
      title: "Simply Being You",
      description: "You don't need to be anyone else. Just being yourself is more than enough to make me fall in love every day."
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
            Why I Love You
          </h2>
          <p className="text-xl text-gray-600 font-inter">
            There are countless reasons, but here are some of my favorites
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="glassmorphism rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(248, 187, 217, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center mb-4">
                <motion.div
                  className="text-4xl mb-3"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {reason.emoji}
                </motion.div>
                <h3 className="font-playfair text-xl font-bold text-hot-pink">
                  {reason.title}
                </h3>
              </div>
              <p className="text-gray-600 font-inter text-center">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;
