import { motion } from "framer-motion";

const Timeline = () => {
  const timelineItems = [
    {
      title: "Secret Admiration Begins 💭",
      description: "Semua ini berawal dari diam. Sejak Oktober 2022, aku sudah lebih dulu menyimpan rasa. Lima semester menjadi pengagum rahasia, hanya berani memandang dari jauh, bahkan sekadar menyapa pun rasanya sungkan. Tapi meski diam, hati ini selalu berharap semoga suatu hari semesta memihak.",
      date: "Oktober 2022",
      color: "bg-hot-pink"
    },
    {
      title: "Crossing Paths for Real 🌸",
      description: "Tuhan punya caranya sendiri mempertemukan kita lebih dekat. Lewat MOKA-KU UPI, aku jadi bagian dari timmu. Dari situ, kita mulai bercakap. Setiap hari rasanya lebih ringan, lebih semangat. Ada alasan baru kenapa aku tak pernah lelah menjalaninya, yaitu kamu. Di situlah aku benar-benar merasa, “Oh, akhirnya aku punya kesempatan",
      date: "Mei 2024",
      color: "bg-hot-pink"
    },
    {
      title: "First Date, Officially Together 💕",
      description: "Tanggal 13 September jadi hari yang tak akan pernah aku lupa. Hari di mana akhirnya kamu berkata “iya”. Hari di mana kita bukan lagi sekadar teman, bukan lagi sebatas pengagum dan yang dikagumi. Hari pertama kita jalan berdua, hari pertama juga kita resmi jadi ‘kita’. Dari sini semuanya benar-benar mulai.",
      date: "September 2024",
      color: "bg-dusty-pink"
    },
    {
      title: "Hand in Hand, Every Morning  🚶‍♂️",
      description: "Hari-hari sederhana yang justru terasa paling hangat. Menyusuri jalan menuju kampus, bergandeng tangan, bercanda, tertawa, seolah dunia tak pernah benar-benar seberat itu selama kita saling ada. Momen kecil yang mungkin terlihat biasa bagi orang lain, tapi bagiku… itulah yang membuat segalanya terasa utuh.",
      date: "September 2024",
      color: "bg-lavender"
    },
    {
      title: "Lovin u, Across the Distance 💌",
      description: "Waktu berganti, keadaan memaksa kita berjeda. Tapi rindu tak pernah hilang, justru semakin kita jaga. Meski jarak membentang, kita tetap saling mengabari, tetap menyempatkan waktu bercerita sebelum malam benar-benar larut. Kita tahu, rindu ini bukan tanda lemah, tapi bukti betapa kita sama-sama ingin bertahan.",
      date: "Januari 2025",
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
