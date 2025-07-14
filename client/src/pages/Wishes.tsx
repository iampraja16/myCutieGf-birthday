import { motion } from "framer-motion";

const Wishes = () => {
  const wishes = [
    {
      icon: "fas fa-plane",
      title: "Wandering With You",
      description: "Mengeksplorasi banyak destinasi bersama sosok eksploratif seperti mu. Dari ujung pantai berpasir putih hingga hutan yang sejuk dan sunyi. Menyaksikan betapa indahnya Indonesia, adalah impian kita bukan?",
      gradient: "from-dusty-pink to-blush"
    },
    {
      icon: "fas fa-home",
      title: "Our Little Home",
      description: "Rumah sederhana yang penuh tawa, cinta, tanaman, dan hal-hal kecil kesukaan kita. Tempat paling nyaman untuk pulang, tempat paling damai untuk tumbuh bersama.",
      gradient: "from-lavender to-plum"
    },
    {
      icon: "fas fa-ring",
      title: "Forever, With You",
      description: "Aku ingin menghabiskan sisa hidupku bersamamu, saling membahagiakan, membangun masa depan yang indah, dan terus menjaga apa yang sudah kita mulai hari ini.",
      gradient: "from-blush to-hot-pink"
    },
    {
      icon: "fas fa-heart",
      title: "Growing Old With You",
      description: "Aku ingin melalui setiap musim hidup bersamamu. Mencipta kenangan, berbagi tawa, hingga nanti kita tua, dan cerita kita tetap abadi dalam hati.",
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
          <div className="flex justify-center space-x-2 mt-4">
            <motion.i
              className="fas fa-heart text-hot-pink text-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <motion.i
              className="fas fa-star text-dusty-pink text-lg"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.i
              className="fas fa-heart text-hot-pink text-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
            />
          </div>
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
          <div className="glassmorphism rounded-3xl p-10 shadow-2xl max-w-3xl mx-auto border border-hot-pink/20">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h3 className="font-playfair text-5xl font-bold text-hot-pink mb-4">
                Happy Birthday Yaa!
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-hot-pink to-dusty-pink mx-auto rounded-full"></div>
            </motion.div>
            
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <p className="text-xl text-gray-700 font-inter leading-relaxed font-medium">
                Terima kasih sudah menjadi sosok paling luar biasa dalam hidupku.
              </p>
              <p className="text-lg text-gray-600 font-inter leading-relaxed">
                Aku mencintaimu lebih dari apa pun yang bisa dijelaskan oleh kata-kata. Dan aku tak sabar menunggu, melihat kemana langkah indah kita akan membawa cerita ini.
              </p>
              <p className="text-lg text-gray-600 font-inter leading-relaxed">
                Untuk hari spesialmu hari ini, dan untuk kisah kita yang semoga selamanya.
              </p>
            </motion.div>
            
            <motion.div
              className="flex justify-center space-x-3 mt-8 text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              {['💖', '💕', '💗', '💝', '💖'].map((heart, index) => (
                <motion.span
                  key={index}
                  animate={{ 
                    y: [0, -8, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 1.2,
                    repeat: Infinity,
                    delay: index * 0.15
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
