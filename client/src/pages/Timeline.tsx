import { motion } from "framer-motion";

const Timeline = () => {
  const timelineItems = [
    {
      title: "First Meeting 👋",
      description: "The day our eyes met and everything changed. I knew there was something special about you from that very first moment.",
      date: "January 2023",
      color: "bg-hot-pink"
    },
    {
      title: "First Date ☕",
      description: "Coffee turned into hours of talking, laughing, and realizing we had found something beautiful together.",
      date: "February 2023",
      color: "bg-dusty-pink"
    },
    {
      title: "Official Together 💕",
      description: "The day you said yes to being my girlfriend. One of the happiest days of my life!",
      date: "March 2023",
      color: "bg-lavender"
    },
    {
      title: "First Trip Together ✈️",
      description: "Our first adventure together, creating memories that will last a lifetime.",
      date: "June 2023",
      color: "bg-blush"
    },
    {
      title: "Your Birthday Today! 🎉",
      description: "Celebrating the most amazing person in my life. Here's to many more birthdays together!",
      date: "Today",
      color: "bg-hot-pink",
      isSpecial: true
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
            Our Love Story Timeline
          </h2>
          <p className="text-xl text-gray-600 font-inter">
            Every milestone of our beautiful journey
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-dusty-pink via-lavender to-blush"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {index % 2 === 0 ? (
                    <>
                      <div className="flex-1 pr-8 text-right">
                        <motion.div
                          className="glassmorphism rounded-2xl p-6 shadow-lg"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="font-playfair text-2xl font-bold text-hot-pink mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 font-inter mb-2">
                            {item.description}
                          </p>
                          <span className="text-sm text-gray-500 font-medium">
                            {item.date}
                          </span>
                        </motion.div>
                      </div>
                      <motion.div
                        className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 ${item.color} rounded-full border-4 border-white shadow-lg ${
                          item.isSpecial ? 'animate-pulse w-8 h-8' : ''
                        }`}
                        whileHover={{ scale: 1.2 }}
                      />
                      <div className="flex-1 pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="flex-1 pr-8"></div>
                      <motion.div
                        className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 ${item.color} rounded-full border-4 border-white shadow-lg`}
                        whileHover={{ scale: 1.2 }}
                      />
                      <div className="flex-1 pl-8">
                        <motion.div
                          className="glassmorphism rounded-2xl p-6 shadow-lg"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="font-playfair text-2xl font-bold text-hot-pink mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 font-inter mb-2">
                            {item.description}
                          </p>
                          <span className="text-sm text-gray-500 font-medium">
                            {item.date}
                          </span>
                        </motion.div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
