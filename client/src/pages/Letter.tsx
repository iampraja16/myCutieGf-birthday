import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Letter = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const letterContent = `My Dearest Love,

Today marks another year of your beautiful existence, and I can't help but feel overwhelmed with gratitude for having you in my life. Every day with you feels like a celebration, but today is extra special because it's all about you.

From the moment you walked into my life, everything changed. Your smile brightened my darkest days, your laugh became my favorite melody, and your love became my safe haven. You've shown me what it means to love and be loved unconditionally.

I love how you scrunch your nose when you laugh, how you get excited about the smallest things, and how you always know exactly what to say to make everything better. Your kindness, your strength, your beautiful soul - everything about you amazes me every single day.

On this special day, I want you to know that you deserve all the happiness in the world. You deserve to be celebrated not just today, but every day. You are extraordinary, and I feel so lucky to call you mine.

Thank you for being you - for being patient with me, for believing in us, and for making every ordinary moment feel magical. I can't wait to create more beautiful memories with you.

Happy Birthday, my beautiful girl. Here's to another year of your amazing life and to many more birthdays together.

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
