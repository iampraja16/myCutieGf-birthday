import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Letter = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const letterContent = `Selamat Ulang Tahun, Sayangnya Aku💖,

Pernahkah kamu sadar, betapa semesta punya cara yang aneh saat mempertemukan dua manusia? Aku tak pernah benar-benar percaya, bahwa rasa yang dulu cuma mampir di angan, akhirnya menemukan rumahnya di kenyataan.

Dulu aku hanya seorang secret admirer, dari jauh. Tak berharap apa-apa, tak pernah benar-benar berani membayangkan lebih. Tapi lihatlah hari ini… aku yang menuliskan ini untukmu, aku yang memanggilmu "sayangnya aku".

Hari ini adalah tentang kamu. Tentang hari ketika kamu dilahirkan ke dunia, tumbuh menjadi perempuan yang kuat, tangguh, dan istimewa seperti yang aku kenal sekarang. Tapi bagiku, hari ini juga tentang rasa syukur. Syukur karena aku diberi kesempatan menemani langkahmu, mengenal hatimu lebih dalam, dan mencintai kamu dengan cara yang tak lagi sebatas kata.

Sudah hampir setahun kita berjalan bersama. Waktu memang belum lama, tapi rasanya lebih dari cukup untuk membuatku mengerti bahwa apa yang kita punya ini bukan sekadar tentang rindu, bukan sekadar tentang jarak, tapi tentang bagaimana dua orang bisa sama-sama belajar menjaga, bertumbuh, dan bertahan.

Dari yang dulunya bisa bertemu setiap hari, hingga kini yang harus merelakan jarak, menunggu waktu, menyimpan rindu dengan sabar. Tapi anehnya, aku tak pernah takut kehilangan. Karena kita selalu tahu cara pulang, meski jalannya berliku. Aku percaya pada satu hal bahwa yang diikat oleh rasa, tak akan mudah goyah hanya karena waktu.

Sayangnya aku,
Kamu perempuan paling kuat yang pernah aku temui. Tak ada badai yang membuatmu gentar. Tak ada luka yang membuatmu berhenti melangkah. Kamu selalu tegar, selalu berani, selalu tahu bagaimana caranya menyembuhkan diri sendiri, bahkan saat tak seorang pun paham betapa berat langkahmu. Dan aku? Aku selalu bangga bisa berdiri di sisimu.

Kamu adalah warna dalam hidupku. Perempuan yang dulu cuma aku pandangi dari jauh, kini jadi alasan di balik senyumku setiap hari. Betapa beruntungnya aku, sosok biasa, bisa memiliki perempuan seistimewa kamu.

Selamat ulang tahun, sayangnya aku.
Semoga langkahmu selalu dilapangkan, semoga hatimu selalu dijaga bahagia. Semoga semua hal baik yang kamu harapkan, perlahan-lahan datang, satu per satu, dengan cara yang paling indah. Dan semoga aku selalu diizinkan jadi orang yang menemani kamu melihat semuanya terjadi.

Terima kasih sudah lahir, sudah kuat sejauh ini, sudah memilih aku. Aku mencintaimu, dengan cara yang paling sederhana, paling setia, dan paling tulus.

Forever yours,
[Your Name] 💖`;

  useEffect(() => {
    setIsTyping(true);
    let index = 0;
    const timer = setInterval(() => {
      if (index < letterContent.length) {
        setDisplayedText(letterContent.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-5xl font-bold text-hot-pink mb-4">
              A Letter From My Heart
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Words can't express how much you mean to me...
            </p>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Paper-like background */}
            <div className="glassmorphism rounded-3xl p-12 shadow-2xl relative overflow-hidden">
              {/* Decorative flowers */}
              <motion.div
                className="absolute top-8 left-8 text-dusty-pink opacity-20"
                animate={{ rotate: [-12, -8, -12] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <i className="fas fa-flower text-6xl"></i>
              </motion.div>
              <motion.div
                className="absolute bottom-8 right-8 text-lavender opacity-20"
                animate={{ rotate: [12, 8, 12] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                <i className="fas fa-flower text-6xl"></i>
              </motion.div>
              
              <div className="relative z-10">
                <motion.div
                  className="text-right mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="font-dancing text-xl text-gray-600">
                    Happy Birthday, My Love 💕
                  </p>
                </motion.div>
                
                <div className="space-y-6 text-lg leading-relaxed text-gray-700 font-inter">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    {displayedText.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                        {index === displayedText.split('\n').length - 1 && isTyping && (
                          <span className="animate-pulse">|</span>
                        )}
                      </p>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Letter;
