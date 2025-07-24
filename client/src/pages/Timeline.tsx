import { motion } from "framer-motion";

const Timeline = () => {
  const timelineItems = [
    {
      title: "Secret Admiration Begins 💭",
      description: "Waktu itu aku cuma bisa jadi penonton. Diem-diem nunggu kamu lewat, deam-diem nyari alasan buat ngeliat kamu lagi. Sejak Oktober 2022, isi kepala aku 'gimana cara ngobrol sama nada ya', padahal belum ada satu chat pun. Lucu ya, gimana perasaan bisa tumbuh bahkan sebelum kita benar-benar kenal?",
      date: "Oktober 2022",
      color: "bg-hot-pink"
    },
    {
      title: "Crossing Paths for Real 🌸",
      description: "Titik baliknya waktu MOKA-KU UPI. Tiba-tiba aku masuk di divisi yang sama sama kamu. Dari situ kita mulai ngobrol, mulai nyambung. Rasanya tiap hari jadi lebih semangat aja. Ada kamu yang bikin semuanya terasa lebih seru dijalanin.",
      date: "Mei 2024",
      color: "bg-hot-pink"
    },
    {
      title: "First Date, Officially Together 💕",
      description: "13 September, hari yang nggak akan aku lupain. Hari kamu bilang 'iya', dan sejak itu semuanya berubah. Kita jalan berdua untuk pertama kali, dan akhirnya jadi pasangan juga. Mulai dari situ, cerita kita beneran dimulai.",
      date: "September 2024",
      color: "bg-dusty-pink"
    },
    {
      title: "Hand in Hand, Every Morning 🚶‍♂️",
      description: "Jalan bareng ke kampus, ngobrol, ketawa, gandengan, hal-hal kecil yang bikin hari berasa hangat banget. Nggak perlu yang mewah, cukup kayak gitu aja udah bikin aku ngerasa tenang dan bahagia.",
      date: "September 2024",
      color: "bg-lavender"
    },
    {
      title: "Lovin u, Across the Distance 💌",
      description: "Sekarang kita udah nggak bisa sering ketemu, tapi rasanya tetap deket. Masih saling kabar, masih sempetin ngobrol sebelum tidur. Rindu itu tetap ada, malah makin kerasa. Tapi aku tahu, LDR ini menyebalkan yeahh.",
      date: "Januari 2025",
      color: "bg-blush"
    },
    {
      title: "Your Birthday Today! 🎉",
      description: "Selamat ulang tahun ya. Aku seneng banget bisa rayain ini bareng kamu. Semoga hari-harimu makin penuh hal baik dan aku bisa terus nemenin kamu ngeliat semuanya satu per satu kejadian.",
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
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-dusty-pink via-lavender to-blush"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
            
            {/* Timeline items */}
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + (index * 0.6) }}
                >
                  {index % 2 === 0 ? (
                    <>
                      <div className="flex-1 pr-8 text-right">
                        <motion.div
                          className="glassmorphism rounded-2xl p-6 shadow-lg"
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 1.0 + (index * 0.6) }}
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                          }}
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
                      <div className="absolute left-1/2 transform -translate-x-1/2">
                        <motion.div
                          className={`w-6 h-6 ${item.color} rounded-full border-4 border-hot-pink shadow-lg ${
                            item.isSpecial ? 'animate-pulse w-8 h-8' : ''
                          }`}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: 1.2 + (index * 0.6),
                            ease: "easeOut"
                          }}
                          whileHover={{ 
                            scale: 1.3,
                            boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                          }}
                        />
                      </div>
                      <div className="flex-1 pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="flex-1 pr-8"></div>
                      <div className="absolute left-1/2 transform -translate-x-1/2">
                        <motion.div
                          className={`w-6 h-6 ${item.color} rounded-full border-4 border-hot-pink shadow-lg`}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: 1.2 + (index * 0.6),
                            ease: "easeOut"
                          }}
                          whileHover={{ 
                            scale: 1.3,
                            boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                          }}
                        />
                      </div>
                      <div className="flex-1 pl-8">
                        <motion.div
                          className="glassmorphism rounded-2xl p-6 shadow-lg"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 1.0 + (index * 0.6) }}
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                          }}
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
