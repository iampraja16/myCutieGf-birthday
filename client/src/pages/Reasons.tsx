import { motion } from "framer-motion";

const Reasons = () => {
  const reasons = [
    {
      emoji: "😊",
      title: "Your Beautiful Smile",
      description: "Setiap kali kamu senyum, rasanya hari jadi lebih ringan aja. Bahkan pas mood aku lagi jelek, cukup lihat senyum kamu, semuanya pelan-pelan membaik lagi."
    },
    {
      emoji: "🤍",
      title: "Your Maturity & Understanding",
      description: "Kamu selalu ngerti tanpa aku harus jelasin banyak. Kamu selalu bisa jadi pendengar yang baik. Cara kamu ngerti perasaan orang itu nggak dibuat-buat, dan aku ngerasa bener bener diperhatiin."
    },
    {
      emoji: "😂",
      title: "Your Adorable Laugh",
      description: "Dengar kamu ketawa tuh bikin hati ikut ketawa juga. Tulus, lepas, dan jujur aja nggak bisa nggak senyum tiap dengar ketawa itu."
    },
    {
      emoji: "💝",
      title: "Your Kind Heart",
      description: "Kebaikan kamu tuh bukan cuma ke aku, tapi ke siapa pun. Kamu tulus banget, dan itu bikin aku belajar buat jadi orang yang lebih baik juga."
    },
    {
      emoji: "🌟",
      title: "Your Inner Strength",
      description: "Kamu mungkin nggak selalu sadar, tapi aku lihat gimana kamu terus berdiri walau lagi capek. Kamu tetap jalan, tetap senyum, dan itu keren banget."
    },
    {
      emoji: "🥰",
      title: "Simply Being You",
      description: "buat aku, diri kamu yang sekarang, itu udah sangat amat lebih dari cukup sayangku"
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
                scale: 1.05
              }}
              style={{
                boxShadow: "0 10px 25px rgba(248, 187, 217, 0.2)"
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
