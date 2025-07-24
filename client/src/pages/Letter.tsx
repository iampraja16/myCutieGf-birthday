import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Letter = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const letterContent = `Selamat Ulang Tahun, Sayangnya Aku 💖

Pernahkah kamu pikir bahwa semesta kadang lucu dalam mempertemukan dua orang? Tidak selalu lewat dentuman dan bukan pula lewat gegap-gempita. Kadang, hanya lewat perasaan kecil yang diam-diam tumbuh seperti tunas yang pelan-pelan menyusup dari tanah yang basah. Aku tidak pernah sungguh percaya bahwa perasaan yang hanya berani mampir di angan itu suatu hari bisa punya tempat tinggal, di sini, di antara kita.

Dulu aku cuma bayang-bayang. Pengagum yang bahkan tidak tahu apa yang patut dikagumi selain kenyataan bahwa kamu ada. Aku tidak berharap balasan dan bahkan tidak mengharapkan peran. Tapi lihat hari ini, aku di sini, menuliskan ini untukmu dan memanggilmu "sayangnya aku". Seolah semesta akhirnya mengerti bahasa yang selama ini kutahan sendiri.

Hari ini adalah tentang kamu, tentang perempuan yang pernah kecil dan rapuh, tetapi tumbuh menjadi tangguh tanpa kehilangan cara untuk lembut. Namun bagiku, hari ini bukan hanya perayaan lahirmu, melainkan juga perayaan syukurku. Sebab aku bisa mengenalmu, bisa mencintaimu, dan bisa dipilih untuk berdiri di sampingmu.

Sudah hampir setahun kita berjalan bersama. Waktu itu memang belum panjang, tetapi cukup untuk menjelaskan banyak hal. Bahwa cinta bukan hanya soal ingin dekat, dan bukan sekadar tentang rindu yang minta dijemput. Cinta adalah tentang bagaimana kita tetap saling menunggu dan tetap saling menjaga bahkan saat jarak menyusun jarak lain di antara kita.

Kita pernah dekat lalu dipisahkan oleh hal-hal yang tidak bisa kita atur. Tapi anehnya, aku tidak pernah takut kehilangan, sebab kamu tidak pernah benar-benar pergi. Kita selalu tahu arah pulang, meskipun jalannya sesekali samar. Dan aku percaya bahwa apa pun yang diikat oleh rasa tidak mudah diguncang oleh waktu.

Sayangnya aku,  
Kamu adalah perempuan paling kuat yang pernah kutemui. Kamu tahu caranya berjalan dengan luka dan tahu bagaimana tetap tersenyum meskipun hari terasa berat. Tidak semua orang bisa berdamai dengan kenyataan sepertimu. Dan aku hanyalah seseorang yang beruntung karena kamu mengizinkanku berdiri di sisimu.

Dunia tidak perlu tahu sehebat apa aku mencintaimu. Namun dunia harus tahu bahwa kamu memang sepantas itu untuk dicintai. Mereka harus tahu bahwa ada keindahan yang tidak bisa dijelaskan logika dan hanya bisa dirasakan. Bahwa ada ciptaan Tuhan yang wujudnya adalah kamu, dan aku, untuk kesekian kalinya, adalah manusia yang merasa damai hanya dengan melihatmu baik-baik saja.

Kamu adalah warna yang tidak pernah kupinta tetapi sangat kusyukuri. Perempuan yang dulu cuma kupandangi dari kejauhan, kini menjadi alasan dari tenangku setiap malam. Betapa beruntungnya aku, yang tidak lebih dari lelaki biasa, bisa mencintai seseorang seistimewamu.

Selamat ulang tahun, sayangnya aku.  
Semoga langkahmu selalu dilapangkan dan hatimu senantiasa dijaga. Semoga semua yang kamu impikan pelan-pelan datang satu per satu, seperti hujan yang tidak pernah tergesa tetapi selalu tiba. Dan semoga aku selalu diberi peran untuk menyaksikannya bersamamu.

Terima kasih karena sudah lahir, sudah kuat sejauh ini, dan sudah memilihku. Aku mencintaimu dengan cara yang tidak selalu kamu lihat, tetapi semoga selalu kamu rasakan dalam diam, dalam sabar, dan dalam setia.

Forever yours,  
Praja 💖`;

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
